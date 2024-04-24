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
  setTimeout(() => {
    orgAndClose(dirPath, isVerbose);

    if (isListening) {
      listenForChanges(dirPath, isVerbose);
    } else {
      Logging.main("Done 🎉");
    }
  }, 3000);
} catch (e: any) {
  Logging.error(e);
}

Logging.endProcessing();
