import "./Todo.css";
import { useState } from "react";
import TodoList from "../Todo-list/Todo-list";
import TodoCreate from "../todo-create/TodoCreate";

const Todo = () => {
    const [getTodos, setTodos] = useState([
        { id: 1, title: "eat" },
        { id: 2, title: "sleep" },
        { id: 3, title: "code" },
    ]);

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo));
    };

    return (
        <div>
            <h3>To Do List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo} />
            <TodoList dataTodos={getTodos} />
        </div>
    );
};

export default Todo;
