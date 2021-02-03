require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const Note = require("./models/note");

// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     date: "2019-05-30T17:30:31.098Z",
//     important: true,
//   },
// ];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (request, response) => {
  // response.json(notes);
  Note.find({}).then((notes) => {
    response.json(notes);
  });
});

app.get("/api/notes/:id", (request, response) => {
  // const id = Number(request.params.id);
  // const note = notes.find((note) => note.id === id);
  // note ? response.json(note) : response.status(404).end();
  Note.findById(request.params.id).then((note) => {
    response.json(note);
  });
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

// const generateId = () => {
//   const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
//   return maxId + 1;
// };

app.post("/api/notes", (request, response) => {
  const body = request.body;

  // if (!body.content) {
  //   return response.status(400).json({
  //     error: "content missing",
  //   });
  // }
  if (body.content === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  // const note = {
  //   content: body.content,
  //   important: body.important || false,
  //   date: new Date(),
  //   id: generateId(),
  // };
  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  });

  // notes = notes.concat(note);

  // response.json(note);
  note.save().then((savedNote) => {
    response.json(savedNote);
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const http = require("http");

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify(notes));
// });

//CAMBIOS EN VIVO
//npm install --save-dev nodemon
