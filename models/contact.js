const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  content: { type: String, required: true },
  sender: { type: String, required: true },
  senderContact: { type: String, required: true },
  dateSent: { type: Date }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
