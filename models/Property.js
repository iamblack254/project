const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }
});

const DetailSchema = new mongoose.Schema({
  iconColor: {
    type: String,
    required: true
  },
  iconPath: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  }
});

const SectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const PropertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [ImageSchema],
  details: [DetailSchema],
  sections: [SectionSchema],
  brochure: {
    image: {
      type: String,
      required: true
    }
  },
  map: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Property', PropertySchema);
