import figlet from "figlet";
import { Logging } from "./Logging";

export const printFIGfont = async () => {
  return new Promise<void>((resolve, reject) => {
    figlet(
      "organizee",
      {
        whitespaceBreak: true,
        horizontalLayout: "fitted",
      },
      (err, data) => {
        if (err) {
          Logging.error("Something went wrong...", err);
          reject(err);
        } else {
          Logging.main(data + "\n");
          resolve();
        }
      }
    );
  });
};
