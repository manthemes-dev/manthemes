export * as daisyui from "./daisyui";
export * as material from "./material";

export * as moonlight from "./moonlight";
export * as nightfox from "./nightfox";

// Notifier
import updateNotifier from "update-notifier";
import pkg from "../package.json";

updateNotifier({
  pkg,
}).notify();
