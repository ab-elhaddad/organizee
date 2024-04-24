import { extractFlags } from "../../src/utility/extractFlags";

describe("extractFlags", () => {
  it("should correctly extract flags from arguments", () => {
    const args = ["-v", "--listen", "-p", "/path/to/directory"];

    const result = extractFlags(args);

    expect(result.isVerbose).toBe(true);
    expect(result.isListening).toBe(true);
    expect(result.dirPathIndex).toBe(3);
  });

  it("should return default values when no flags are present", () => {
    const args = ["/path/to/directory"];

    const result = extractFlags(args);

    expect(result.isVerbose).toBe(false);
    expect(result.isListening).toBe(false);
    expect(result.dirPathIndex).toBe(0);
  });
});
