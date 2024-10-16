import express from "express";

import { createFile, getFiles } from "./function.js";

const server = express();

server.use(express.json());

// POST Method

server.post("/create-file", (req, res) => {
  const date = new Date();

  const timeStamp = date.getTime().toString();

  const isoDateTime = date.toISOString().replaceAll(":", "-").split(".")[0];

  createFile("./api-files", isoDateTime, timeStamp, (err) => {
    if (err) {
      return res.status(500).json({ msg: "Error creating file" });
    }
    res.status(201).json({ msg: "Created file successfully" });
  });
});

// GET Method
server.get("/", (req, res) => {
  res.send(
    `<h1 style="color:blue; text-align:center">  Welcome to the File Management API DAY-1 </h1> <br/> `
  );
});

server.get("/get-files", (req, res) => {
  getFiles(
    "./api-files",
    (data) => res.json(data),
    () => res.status(500).json({ msg: "Something went wrong" })
  );
});

const PORT = 4500;

server.listen(PORT, () => {
  console.log("server listening", PORT);
});
