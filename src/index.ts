#!/usr/bin/env node

import { Logging, extractFlags } from "./utility";
import { listenForChanges, orgAndClose } from "./main";
import { isAbsolute, join } from "path";

await Logging.printFIGfont();

const { dirPathIndex, isVerbose, isListening, isHelp } = extractFlags(
  process.argv
);

if (isHelp) {
  Logging.printHelp();
  process.exit(0);
}

const dir = process.argv[dirPathIndex];
if (!dir) {
  Logging.error("No directory path provided");
  process.exit(1);
}
const dirPath = isAbsolute(dir) ? dir : join(process.cwd(), dir);

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
