import { getDest } from "../../src/utility/getDest";

describe("getDest", () => {
  it("should return the destination based on the file extension", () => {
    expect(getDest(".txt")).toBe("documents");
    expect(getDest(".jpg")).toBe("images");
    expect(getDest(".mp3")).toBe("audio");
    expect(getDest(".pdf")).toBe("documents");
    expect(getDest(".exe")).toBe("applications");
  });

  it('should return "others" if the file extension is not found', () => {
    expect(getDest(".xyz")).toBe("others");
    expect(getDest(".abc")).toBe("others");
  });
});
