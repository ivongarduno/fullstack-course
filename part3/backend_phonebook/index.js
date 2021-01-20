const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors())

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

morgan.token("type", function (req, res) {
  return req.headers["content-type"];
});

morgan.token("body", function (req, res, param) {
  return JSON.stringify(req.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const numberPeople = persons.length;
  const date = new Date();
  response.send(
    `<p>Phonebook has info for ${numberPeople} people</p><p>${date}</p>`
  );
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  person ? response.json(person) : response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.find((person) => person.id === id);
  response.status(204).end();
});

const generateId = () => {
  const personId = Math.floor(Math.random() * 1000);
  return personId;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (body.name.length === 0 || body.number.length === 0) {
    return response.status(400).json({
      error: "Enter the data",
    });
  } else if (persons.find((person) => person.name === body.name)) {
    return response.status(400).json({
      error: "name must be unique",
    });
  } else {
    const person = {
      name: body.name,
      number: body.number,
      id: generateId(),
    };

    persons = persons.concat(person);
    response.json(persons);
  }
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
