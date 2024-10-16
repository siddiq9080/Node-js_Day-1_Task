import fs from "fs";

export const createFile = (folder, file, contents, cbFn = () => {}) => {
  if (!fs.existsSync(folder)) {
    fs.mkdir(folder, () => {
      console.log("Folder created successfully");
    });
  }
  fs.writeFile(`${folder}/${file}.txt`, contents, cbFn);
};

export const getFiles = (folder, sucessFn, errorFn) => {
  fs.readdir(folder, (err, data) => {
    if (err) {
      console.log("something error", err);
      errorFn(err);
    } else {
      console.log(data);
      sucessFn(data);
    }
  });
};
