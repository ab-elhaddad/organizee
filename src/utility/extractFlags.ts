export const flags = {
  dirPathIndex: 0,
  isVerbose: false,
  isListening: false,
  isHelp: false,
  isVersion: false,
  ignoreIndex: 0,
};

export const extractFlags = (args: string[]) => {
  const passedFlags = args.filter((arg) => arg.startsWith("-"));
  flags.isVerbose =
    passedFlags.includes("-v") || passedFlags.includes("--verbose");
  flags.isListening =
    passedFlags.includes("-l") || passedFlags.includes("--listen");
  flags.dirPathIndex = args.indexOf("-p") + 1 || args.indexOf("--path") + 1;
  flags.isHelp = passedFlags.includes("-h") || passedFlags.includes("--help");
  flags.isVersion =
    passedFlags.includes("-V") || passedFlags.includes("--version");
  flags.ignoreIndex = args.indexOf("-i") + 1 || args.indexOf("--ignore") + 1;
};
