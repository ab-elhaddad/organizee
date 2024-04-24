export type FileType = {
  name: string;
  extensions: string[];
};

const fileTypes: FileType[] = [
  {
    name: "images",
    extensions: [".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"],
  },
  { name: "videos", extensions: [".mp4", ".mkv"] },
  { name: "audio", extensions: [".mp3", "mpeg", "wav"] },
  {
    name: "documents",
    extensions: [".pdf", ".docx", ".doc", ".txt"],
  },
  { name: "spreadsheets", extensions: [".csv", ".xls", ".xlsx"] },
  { name: "presentations", extensions: [".ppt", ".pptx"] },
  { name: "applications", extensions: [".exe", ".dmg", ".app", ".msi"] },
  { name: "compressed", extensions: [".zip", ".rar", ".7z", ".iso"] },
  {
    name: "code",
    extensions: [
      ".js",
      ".ts",
      ".html",
      ".css",
      ".py",
      ".java",
      ".cpp",
      ".c",
      ".php",
    ],
  },
  { name: "torrents", extensions: [".torrent"] },
  { name: "shortcuts", extensions: [".lnk"] },
  { name: "fonts", extensions: [".ttf", ".otf", ".woff", ".woff2"] },
  { name: "scripts", extensions: [".sh", ".bat", ".cmd", "ps1"] },
  { name: "configurations", extensions: [".json", ".xml", ".yaml", ".yml"] },
  { name: "others", extensions: [] },
];

export default fileTypes;
