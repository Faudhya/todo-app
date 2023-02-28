import "./App.css";
import Todo from "./Components/Todo/Todo";

//component
//penulisan dengan format JSX
const App = () => {
    return (
        <div className="App">
            <Todo />
        </div>
    );
};
// return React.createElement("h1", { className: "header" }, "Hello, World!"); //penulisan dengan format react

export default App;
