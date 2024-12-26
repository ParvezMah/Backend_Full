import { Todo } from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(403).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const todo = new Todo({
      title,
      description,
    });

    todo.save();

    return res.status(201).json({
      success: true,
      message: "Todo has created successfully",
    });
  } catch (error) {
    console.log("Error in Create Todo Logic : ", error);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    console.log("Error in Get All Todo Logic : ", error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const { title } = req.body;
    console.log("title i updateTodo ", title);

    // if (!title || !description) {
    //   return res.status(403).json({
    //     success: false,
    //     message: "All fields are required.",
    //   });
    // }

    const todo = await Todo.findByIdAndUpdate(todoId, title, { new: true }); // new: true is used to return the modified document rather than the original. By default, it returns the original document.
    await todo.save(); // You do not need to call save() after using findByIdAndUpdate() as it will automatically save the updated document.

    return res.status(200).json({
      success: true,
      message: "Todo has updated successfully",
      todo,
    });
  } catch (error) {
    console.log("Error in Update Todo Logic : ", error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const todo = await Todo.findByIdAndDelete(todoId); // findByIdAndDelete() is used to find a matching document, remove it, and pass the found document (if any) to the callback.
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Todo has deleted successfully",
    });
  } catch (error) {
    console.log("Error in Delete Todo Logic : ", error);
  }
};
