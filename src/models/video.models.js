const mongoose = require("mongoose");
const mongooseAggregratepaginate = require("mongoose-aggregate-paginate-v2");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    videoFile: {
      type: String, // cloudinary url
      required: true,
    },
    thumbnail: {
      type: String, // cloudinary url
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregratepaginate);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
