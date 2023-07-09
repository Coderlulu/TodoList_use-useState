const [input, setInput] = useState("");
const [todos, setTodos] = useState([]);
const [completeArr, setCompleteArr] = useState([]);
const changeHandler = e => {
    setInput(e.target.value);
};
const submitHandler = e => {
    e.preventDefault();
    setTodos(currentTodos => {
        return [
            ...currentTodos,
            { id: input, title: input, complete: false },
        ];
    });
    setInput("");
};
const DoneHandler = ({ id }) => {
    setTodos(currentTodos => {
        return currentTodos.filter(t => t.id !== id);
    });
    setCompleteArr(completeArr => {
        return [...completeArr, { id: id, title: id, complete: true }];
    });
};

const DeleteHandler = todo => {
    setTodos(currentTodos => {
        return currentTodos.filter(t => t.id !== todo.id);
    });
};
console.log(todos);
return (
    <div>
        <h1>Todo List</h1>
        {/* Input Part */}
        <form onSubmit={submitHandler}>
            <input value={input} onChange={changeHandler} />
            <button type="submit">Add Item</button>
        </form>

    </div>)
};            {/* {/* List Part */
//             <ul>
//             {todos.map(todo => (
//                     <div key={todo.id}>
//                         <li>{todo.title}</li>
//                         <input
//                             type="checkbox"
//                             checked={todo.complete}
//                             onChange={() => DoneHandler(todo)}
//                         />

//                         <button>
//                             <i
//                                 className="fas fa-trash"
//                                 onClick={() => DeleteHandler(todo)}
//                             ></i>
//                         </button>
//                     </div>
//                 ))}
//             </ul> */}
