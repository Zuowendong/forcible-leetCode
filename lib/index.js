import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../README.md");

function readMDFile() {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    writeMDFile(data);
  });
}

function statistic(data) {
  const arr = data.split("\n");
  return {
    counts: arr.filter((item) => item.includes("-")).length,
    finished: arr.filter((item) => item.includes("x")).length,
    unfinished: arr.filter((item) => item.includes("[ ]")).length,
  };
}

function writeMDFile(data) {
  const _content = formatContent(data);
  fs.writeFile(filePath, _content, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}

function formatContent(data) {
  const countObj = statistic(data);
  const newText = `总数：${countObj.counts}，已完成：${countObj.finished}，未完成：${countObj.unfinished}`;
  const nextContentIndex = data.indexOf("##");
  const content =
    data.slice(0, 13) +
    `\n\n${newText}` +
    `\n${data.slice(nextContentIndex - 2)}`;
  return content;
}

readMDFile();
