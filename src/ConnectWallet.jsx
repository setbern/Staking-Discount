import { AppConfig, UserSession } from "@stacks/connect";

export const STACK_CLIENT_CONFIG = new AppConfig([
  "store_write",
  "publish_data",
]);
export const STACKS_USER_SESSION = new UserSession({
  appConfig: STACK_CLIENT_CONFIG,
});
