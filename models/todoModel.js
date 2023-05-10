const { mongoose } = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  title: {
    type: "String",
    require: true,
  },

  description: {
    type: "String",
  },
});

const Todo = mongoose.model("todolist", ToDoSchema);

module.exports = Todo;
