require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const Phone = require("./models/phone");

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
  Phone.find({}).then((notes) => {
    response.json(notes);
  });
});

app.get("/info", (request, response) => {
  Phone.find({}).then((persons) => {
    const date = new Date();
    response.send(
      `<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`
    );
  });
});

app.get("/api/persons/:id", (request, response) => {
  Phone.findById(request.params.id).then((phone) => {
    response.json(phone);
  });
});

// app.delete("/api/persons/:id", (request, response) => {
//   const id = Number(request.params.id);
//   persons = persons.find((person) => person.id === id);
//   response.status(204).end();
// });

app.post("/api/persons", (request, response) => {
  const body = request.body;
  // let personsTotal = {};
  // Phone.find({}).then((persons) => {
  //   personsTotal = persons;
  // });

  if (body.name.length === 0 || body.number.length === 0) {
    return response.status(400).json({
      error: "Enter the data",
    });
    // } else if (personsTotal.find((person) => person.name === body.name)) {
    //   return response.status(400).json({
    //     error: "name must be unique",
    //   });
  } else {
    const phone = new Phone({
      name: body.name,
      number: body.number,
    });

    phone.save().then((savedPhone) => {
      response.json(savedPhone);
    });
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
