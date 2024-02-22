const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const documentSchema = new Schema({
     documentType: {
          type: String,
          required: true,
     },
     documentUrl: {
          type: String,
          required: true,
     },
     userId: {
          type: Schema.Types.ObjectId,
          ref: "Users",
          required: true,
     },
});

module.exports = model("Documents", documentSchema);
