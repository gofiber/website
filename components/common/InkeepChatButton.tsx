import dynamic from 'next/dynamic';
import useInkeepSettings from '../../utils/useInkeepSettings';

const ChatButton = dynamic(
  () => import('@inkeep/uikit').then((mod) => mod.InkeepChatButton),
  {
    ssr: false,
  },
);

function InkeepChatButton() {
  const chatButtonProps = {...useInkeepSettings()};

  return <ChatButton {...chatButtonProps} />;
}

export default InkeepChatButton;
