import chalk from "chalk";
import figlet from "figlet";

export class Logging {
  static printFIGfont = async () => {
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

  static processingInterval: NodeJS.Timeout | undefined;

  static startProcessing = () => {
    let dots = 0;
    const processingInterval = setInterval(() => {
      if (dots > 3) dots = 0;
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write("Processing" + ".".repeat(dots++));
    }, 300);
    this.processingInterval = processingInterval;
  };

  static endProcessing = () => {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    clearInterval(this.processingInterval);
  };

  static info = (message: string, isVerbose = false, content?: any) => {
    if (!isVerbose) return;
    console.log(chalk.green(message), content ? content : "");
  };

  static error = (message: string, err?: any) => {
    console.error(chalk.red(message), err ? err : "");
  };

  static main = (message: string) => {
    console.log(chalk.blue(message));
  };

  static printHelp = () => {
    console.log(
      chalk.green(`
  Usage: organizee [options] -p <directory>

  Options:
    -p, --path     Specify the directory path
    -v, --verbose  Enable verbose output
    -l, --listen   Keep listening for changes in the directory
    -h, --help     Display this help message
    -V, --version  Display the version of the package
  `)
    );
  };

  static printVersion = () => {
    console.log(require("../../package.json").version);
  };
}
