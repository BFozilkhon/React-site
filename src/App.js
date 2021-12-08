import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletes, save } from "./Redux/CounterSlice";

export const App = () => {
  const data = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        type="text"
      />
      <button
        onClick={() =>
          dispatch(
            save({
              name: name,
            })
          )
        }
      >
        Save
      </button>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>action</th>
        </tr>

        {data.map((value) => {
          return (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>
                <button
                  onClick={() =>
                    dispatch(
                      deletes({
                        id: value.id,
                      })
                    )
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default App;
