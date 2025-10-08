import { WidgetStocksIndexes } from '@nothing/widgets/stocks/WidgetStocksIndexes';
import { WidgetStocksSymbols } from '@nothing/widgets/stocks/WidgetStocksSymbols';
import { NextPage } from 'next';

const StockPage: NextPage = () => {
  return (
    <div className="h-[100vh] w-screen overflow-hidden bg-neutral-100 md:h-screen">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <div className="flex h-full items-center justify-center">
            <WidgetStocksIndexes />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex h-full items-center justify-center">
            <WidgetStocksSymbols />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockPage;
