import { WidgetTranslate } from '@nothing/widgets/translate/WidgetTranslate';
import { NextPage } from 'next';

const TranslatePage: NextPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-neutral-100">
      <div className="flex h-full items-center justify-center">
        <WidgetTranslate />
      </div>
    </div>
  );
};

export default TranslatePage;
