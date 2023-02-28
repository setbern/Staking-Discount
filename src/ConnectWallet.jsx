import { AppConfig, UserSession } from "@stacks/connect";

const STACK_CLIENT_CONFIG = new AppConfig([
  "store_write",
  "publish_data",
]);
const STACKS_USER_SESSION = new UserSession({
  appConfig: STACK_CLIENT_CONFIG,
});

export const connectWallet = async () => {
  const authOptions = {
    appDetails: {
      name: "Your App Name",
      icon: window.location.origin + "/logo.png",
    },
    userSession: STACKS_USER_SESSION,
  };

  const session = await UserSession.create(authOptions);
  const userData = session.loadUserData();

  return {
    session,
    userData,
  };
};
