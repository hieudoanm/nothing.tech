import { WidgetMessages } from '@nothing/widgets/messages';
import { NextPage } from 'next';

const MessagesPage: NextPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-neutral-100">
      <div className="flex h-full items-center justify-center">
        <WidgetMessages />
      </div>
    </div>
  );
};

export default MessagesPage;
