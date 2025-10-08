import { useGeolocation } from '@nothing/hooks/window/navigator/use-geolocation';
import { FC } from 'react';
import { FaLocationDot } from 'react-icons/fa6';

export const WidgetMapsCoordinates: FC = () => {
  const { latitude = 0, longitude = 0 } = useGeolocation();

  return (
    <div className="shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-full bg-neutral-900 text-neutral-100">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-y-4">
          <FaLocationDot className="text-6xl text-red-500" />
          <div className="text-center font-black">
            <p>{latitude?.toFixed(2)}°</p>
            <p>{longitude?.toFixed(2)}°</p>
          </div>
        </div>
      </div>
    </div>
  );
};
