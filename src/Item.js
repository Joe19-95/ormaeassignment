import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import "./Item.css";

function Item({listItem}) {
  const [state, dispatch] = useStateValue();
  const [tog, setTog] = useState(true);
  const [edit, setEdit] = useState("");
  const toggler = () => {
    setTog(!tog)
  }
  const editor = () => {
    dispatch({
      type: "EDIT_ITEM",
      item:[listItem.id,edit]
    });
    setEdit("")
    setTog(!tog)
  }

  const remove = () => {
    dispatch({
      type: "REMOV_ITEM",
      item:listItem.id,
    });
  };
  // console.log(state);
  return (
    <div className="item">
      <div className="desc">
        <div className="flexer" >
        <p>{listItem.id}.</p>
        <p>{listItem.title}</p>

        </div>
        <div>
        <img
          src={listItem.url}
          alt="url"
          className="url"
        ></img>
        <img
          src={listItem.thumbnailUrl}
          alt="thumbnailUrl"
          className="thumbnailUrl"
        ></img>
        </div>
      </div>
      <div className="flexer" >
      <button  onClick={remove} className="remove"  ><b>Remove</b></button>
      <button  onClick={toggler} className="remove1"  ><b>Edit</b></button>
      <div  className={`ok ${tog&& "toggle"}`} >
      <input className="inputpad" value={edit} onChange={(e) => setEdit(e.target.value)} placeholder="Enter new Title" ></input>
      <button  onClick={toggler} onClick={editor} >Ok</button>
      </div>

      </div>
    </div>
  );
}

export default Item;


