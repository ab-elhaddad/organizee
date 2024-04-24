#!/usr/bin/env node

import { Logging, getAbsoluteDirPath, extractFlags } from "./utility";
import { listenForChanges, orgAndClose } from "./main";

await Logging.printFIGfont();

const { dirPathIndex, isVerbose, isListening, isHelp } = extractFlags(
  process.argv
);

if (isHelp) {
  Logging.printHelp();
  process.exit(0);
}

const dir = process.argv[dirPathIndex];
const dirPath = getAbsoluteDirPath(dir);

Logging.startProcessing();

try {
  orgAndClose(dirPath, isVerbose);

  if (isListening) {
    listenForChanges(dirPath, isVerbose);
  } else {
    Logging.main("Done 🎉");
  }
} catch (e: any) {
  Logging.error(e);
}

Logging.endProcessing();
