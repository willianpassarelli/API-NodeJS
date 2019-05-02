const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  sharedSex: {
    type: String,
    required: true
  },
  availVacancies: {
    type: Number,
    required: true
  },
  postDate: {
    type: Date,
    default: Date.now
  },
  postClosingDate: {
    type: Date,
    required: false
  },
  urlImg: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  isFeatured: {
    type: Number,
    default: 0
  }
});

PostSchema.plugin(mongoosePaginate);

mongoose.model("Post", PostSchema);
