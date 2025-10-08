import {
  WidgetBrowser,
  WidgetBrowsers,
  WidgetCalculatorBasic,
  WidgetCalendarEvents,
  WidgetCalendarMonthly,
  WidgetCalendarToday,
  WidgetClockAnalog,
  WidgetClockDigital,
  WidgetColorsPicker,
  WidgetCompassCompact,
  WidgetCompassFull,
  WidgetDevices,
  WidgetFiles,
  WidgetFitnessRun,
  WidgetFitnessStepCount,
  WidgetGamesFlipism,
  WidgetGamesRockPaperScissors,
  WidgetGamesWheelOfFortune,
  WidgetHealthBloodPressure,
  WidgetHealthBodyTemperature,
  WidgetHome,
  WidgetMail,
  WidgetMapsCoordinates,
  WidgetMapsEmbedded,
  WidgetMessages,
  WidgetMusicApps,
  WidgetMusicPlayer,
  WidgetNews,
  WidgetNotes,
  WidgetPhoneContacts,
  WidgetPhoneDialer,
  WidgetPhotos,
  WidgetSports,
  WidgetStocksIndexes,
  WidgetStocksSymbols,
  WidgetTasks,
  WidgetTranslate,
  WidgetTransportation,
  WidgetVideos,
  WidgetWalletBank,
  WidgetWalletPay,
} from '@nothing/widgets';
import { logger } from '@nothing/utils/log';
import { NextPage } from 'next';

const WidgetsAllPage: NextPage = () => {
  const widgets = [
    { id: 'browser', widget: <WidgetBrowser /> },
    { id: 'browsers', widget: <WidgetBrowsers /> },
    { id: 'calculator-basic', widget: <WidgetCalculatorBasic /> },
    { id: 'calendar-today', widget: <WidgetCalendarToday /> },
    { id: 'calendar-monthly', widget: <WidgetCalendarMonthly /> },
    { id: 'calendar-events', widget: <WidgetCalendarEvents /> },
    { id: 'clock-analog', widget: <WidgetClockAnalog /> },
    { id: 'clock-digital', widget: <WidgetClockDigital /> },
    { id: 'compass-compact', widget: <WidgetCompassCompact /> },
    { id: 'compass-full', widget: <WidgetCompassFull /> },
    { id: 'colors-picker', widget: <WidgetColorsPicker /> },
    { id: 'devices', widget: <WidgetDevices /> },
    { id: 'files', widget: <WidgetFiles /> },
    { id: 'fitness-run', widget: <WidgetFitnessRun /> },
    { id: 'fitness-step-count', widget: <WidgetFitnessStepCount /> },
    {
      id: 'games-flipism',
      widget: <WidgetGamesFlipism />,
    },
    {
      id: 'games-rock-paper-scissors',
      widget: <WidgetGamesRockPaperScissors />,
    },
    {
      id: 'games-wheel-of-fortune',
      widget: <WidgetGamesWheelOfFortune />,
    },
    { id: 'health-body-temperature', widget: <WidgetHealthBodyTemperature /> },
    { id: 'health-blood-pressure', widget: <WidgetHealthBloodPressure /> },
    { id: 'home', widget: <WidgetHome /> },
    { id: 'mail', widget: <WidgetMail /> },
    { id: 'maps-coordinates', widget: <WidgetMapsCoordinates /> },
    { id: 'maps-embedded', widget: <WidgetMapsEmbedded /> },
    { id: 'messages', widget: <WidgetMessages /> },
    { id: 'music-apps', widget: <WidgetMusicApps /> },
    { id: 'music-player', widget: <WidgetMusicPlayer /> },
    { id: 'news', widget: <WidgetNews /> },
    { id: 'notes', widget: <WidgetNotes /> },
    { id: 'phone-contacts', widget: <WidgetPhoneContacts /> },
    { id: 'phone-dialer', widget: <WidgetPhoneDialer /> },
    { id: 'photos', widget: <WidgetPhotos /> },
    { id: 'sports', widget: <WidgetSports /> },
    { id: 'stocks-indexes', widget: <WidgetStocksIndexes /> },
    { id: 'stocks-symbols', widget: <WidgetStocksSymbols /> },
    { id: 'tasks', widget: <WidgetTasks /> },
    { id: 'translate', widget: <WidgetTranslate /> },
    { id: 'transportation', widget: <WidgetTransportation /> },
    { id: 'videos', widget: <WidgetVideos /> },
    { id: 'wallet-bank', widget: <WidgetWalletBank /> },
    { id: 'wallet-pay', widget: <WidgetWalletPay /> },
  ];

  logger.info(widgets.length);

  return (
    <div className="h-[1300vh] w-screen overflow-hidden bg-neutral-100 lg:h-[550vh]">
      <div className="grid h-full grid-cols-2 lg:grid-cols-5">
        {widgets.map(({ id, widget }) => {
          return (
            <div key={id} className="col-span-1">
              <div className="flex h-full w-full items-center justify-center">
                {widget}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WidgetsAllPage;
