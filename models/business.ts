import { Schema, model, models } from "mongoose";

const businessSchema = new Schema({
  name: String,
  description: String,
  category: String,
  image: String,
  urls: [
    {
      label: String,
      link: String,
    }
  ]
});

const Business = models.Business || model("Business", businessSchema, "businesses");
export default Business;
