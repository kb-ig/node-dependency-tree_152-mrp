const dependencyTree = require("dependency-tree");
const fs = require("fs/promises");

async function run() {
  const srcFiles = await fs.readdir("./src/");
  console.log('srcFiles', srcFiles);

  const trees = srcFiles.map((filename) =>
    dependencyTree({ filename, directory: "./src" })
  );

  console.log(trees);
}
run();
