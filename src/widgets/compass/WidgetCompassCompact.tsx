/* eslint-disable @typescript-eslint/no-explicit-any */
import { logger } from '@nothing/utils/log';
import { FC, useEffect, useState } from 'react';

const getDirection = (alpha: number): string => {
  if ((alpha >= 0 && alpha < 30) || alpha >= 330) return 'N';
  if (alpha >= 30 && alpha < 60) return 'NE';
  if (alpha >= 60 && alpha < 120) return 'E';
  if (alpha >= 120 && alpha < 150) return 'SE';
  if (alpha >= 150 && alpha < 210) return 'S';
  if (alpha >= 210 && alpha < 240) return 'SW';
  if (alpha >= 240 && alpha < 300) return 'W';
  if (alpha >= 300 && alpha < 330) return 'NW';
  return '';
};

export const WidgetCompassCompact: FC = () => {
  const [{ alpha = 0, error = '' }, setCompass] = useState<{
    alpha: number;
    error: string;
  }>({
    alpha: 0,
    error: '',
  });

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      logger.info(`event=${event}`);
      if (event.alpha !== null) {
        setCompass((previous) => ({
          ...previous,
          alpha: parseFloat(event.alpha?.toFixed(2) ?? '0'),
        }));
      } else {
        setCompass((previous) => ({
          ...previous,
          error: 'Compass data not available',
        }));
      }
    };

    const requestPermission = async () => {
      if (
        typeof (DeviceOrientationEvent as any).requestPermission === 'function'
      ) {
        logger.info('requestPermission with permission');
        try {
          const permissionState = await (
            DeviceOrientationEvent as any
          ).requestPermission();
          if (permissionState === 'granted') {
            window.addEventListener(
              'deviceorientation',
              handleOrientation,
              true
            );
          } else {
            setCompass((previous) => ({
              ...previous,
              error: 'Permission to access device orientation denied.',
            }));
          }
        } catch (error) {
          logger.error(error);
          setCompass((previous) => ({
            ...previous,
            error: 'Error requesting device orientation permission.',
          }));
        }
      } else {
        logger.info('requestPermission without permission');
        // For devices/browsers that don't require permission
        window.addEventListener('deviceorientation', handleOrientation, true);
      }
    };

    requestPermission();

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  if (error) {
    logger.error(`error=${error}`);
  }

  return (
    <div className="shadow-3xl relative aspect-square w-full max-w-60 rounded-full bg-neutral-900 text-neutral-100">
      <div className="relative flex h-full items-center justify-center text-5xl">
        <p>
          {alpha}° {getDirection(alpha)}
        </p>
        <div className="absolute top-0 right-0 left-0 mx-auto flex justify-center py-4">
          <div className="aspect-square w-4 rounded-full bg-red-500"></div>
        </div>
      </div>
    </div>
  );
};
