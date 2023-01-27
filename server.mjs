import { appendFile, readFile, writeFile, unlink } from "fs/promises";
import path from "path";
import { URL } from "url";

const __dirname = new URL(".", import.meta.url).pathname;

const fileOps = async () => {
  try {
    const data = await readFile(path.join(__dirname, "files", "file1.txt"));
    console.log(data.toString());
    await writeFile(
      path.join(__dirname, "files", "myFile.txt"),
      data.toString()
    );

    await appendFile(
      path.join(__dirname, "files", "myFile.txt"),
      "\n6666666666666"
    );
    const newData = await readFile(path.join(__dirname, "files", "myFile.txt"));
    console.log(newData.toString());

    await unlink(path.join(__dirname, "files", "file2.txt"));
  } catch (err) {
    console.log(err);
  }
};

fileOps();

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});
