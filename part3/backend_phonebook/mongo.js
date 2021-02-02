const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Phone = mongoose.model("Phone", phoneSchema);

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
} else if (process.argv.length < 4) {
  const password = process.argv[2];

  const url = `mongodb+srv://ivon:${password}@fullstackcourse.z8gro.mongodb.net/phone-book?retryWrites=true&w=majority`;

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  Phone.find({}).then((result) => {
    console.log("phone book:");
    result.forEach((phone) => {
      console.log(`${phone.name} ${phone.number}`);
    });

    mongoose.connection.close();
  });
} else {
  const password = process.argv[2];
  const name = process.argv[3];
  const number = process.argv[4];

  const url = `mongodb+srv://ivon:${password}@fullstackcourse.z8gro.mongodb.net/phone-book?retryWrites=true&w=majority`;

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  const phone = new Phone({
    name: name,
    number: number,
  });

  phone.save().then((result) => {
    console.log(`added ${result.name} number ${result.number} to phonebook`);
    mongoose.connection.close();
  });
}
