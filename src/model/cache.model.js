import mongoose, { mongo } from "mongoose";

const cacheSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      requiured: true,
    },
    value: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

cacheSchema.pre("save", async function (next) {
  const cache = this.constructor;
  const count = cache.countDocuments();
  if (count >= 10) {
    next();
  }
});

export const Cache = mongoose.model("Cache", cacheSchema);
