import { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [list, setList] = useState("");
  const [items, setItems] = useState([]); // Array creation.

  const itemEvent = (event) => {
    setList(event.target.value);
  };

  const listOfItems = () => {
    setItems((prevItems) => {
      return [...prevItems, list];
    });
    setList("");
  };

  const deleteItem = (id) => {
    console.log("Deleted");

    setItems((prevItems) => {
      return prevItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1>TO DO LIST APP</h1>
        <br />
        <input
          type="text"
          placeholder="Add item..."
          value={list}
          onChange={itemEvent}
        />
        <button onClick={listOfItems}> + </button>

        <ol>
          {/* {<li>{list}</li>} */}
          {items.map((itemval, index) => {
            return (
              <ToDoList
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
