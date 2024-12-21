import mongoose from "mongoose";

// schema : It defines the shape and structure of documents in a MongoDB collection, ensuring consistency.
// Model Creation: Allows the creation of a model that provides methods for querying and interacting with the database
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

export const Todo = mongoose.model("Todo", todoSchema);
