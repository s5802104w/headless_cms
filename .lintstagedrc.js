module.exports = {
  "**/*.ts?(x)": (filenames) => {
    const filePath = filenames.map((file) => file.split(process.cwd())[1]).join(" --file ");
    return [`next lint --file ${filePath}`, `prettier -c ./src`]
  }
};