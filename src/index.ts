#!/usr/bin/env node

import { Logging, getAbsoluteDirPath } from "./utility";
import { listenForChanges, orgAndClose } from "./main";

await Logging.printFIGfont();

const isVerbose = process.argv.includes("-v");

const dirPathIndex = process.argv.indexOf("-p") + 1;
const dir = process.argv[dirPathIndex];
const dirPath = getAbsoluteDirPath(dir);

const isListening = process.argv.includes("-l");

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
