export const extractFlags = (
  args: string[]
): {
  dirPathIndex: number;
  isVerbose: boolean;
  isListening: boolean;
} => {
  const flags = args.filter((arg) => arg.startsWith("-"));
  const isVerbose = flags.includes("-v") || flags.includes("--verbose");
  const isListening = flags.includes("-l") || flags.includes("--listen");
  const dirPathIndex = args.indexOf("-p") + 1 || args.indexOf("--path") + 1;

  return { dirPathIndex, isVerbose, isListening };
};
