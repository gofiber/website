import type {
  InkeepChatButtonProps,
  InkeepAIChatSettings,
} from "@inkeep/uikit";

const useInkeepSettings = (): InkeepChatButtonProps => {
  const baseSettings = {
    apiKey: process.env.NEXT_PUBLIC_INKEEP_API_KEY,
    integrationId: process.env.NEXT_PUBLIC_INKEEP_INTEGRATION_ID,
    organizationId: process.env.NEXT_PUBLIC_INKEEP_ORGANIZATION_ID,
    primaryBrandColor: "#183055", // your brand color, widget color scheme is derived from this
    organizationDisplayName: "GoFiber",
    // ...optional settings
  };

  const modalSettings = {
    // optional settings
  };

  const searchSettings = {
    // optional settings
  };

  const aiChatSettings: InkeepAIChatSettings = {
    chatSubjectName: "Fiber",
    botAvatarSrcUrl: "https://docs.gofiber.io/img/logo.svg",
    botAvatarDarkSrcUrl: "https://docs.gofiber.io/img/logo-dark.svg",
    getHelpCallToActions: [
      {
        name: "Discord",
        url: "https://gofiber.io/discord",
        icon: {
          builtIn: "FaDiscord"
        }
      },
      {
        name: "GitHub",
        url: "https://github.com/gofiber/fiber",
        icon: {
          builtIn: "FaGithub"
        }
      }
    ],
    quickQuestions: [
      "How to create custom error handler?",
      "How can I use live reload?",
      "Which template engines does Fiber support?"
    ],
  };

  return {
    chatButtonBgColor: "#183055",
    baseSettings,
    aiChatSettings,
    searchSettings,
    modalSettings,
  };
};

export default useInkeepSettings;
