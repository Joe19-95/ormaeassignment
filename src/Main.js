import React, { useState, useEffect } from "react";
import Item from "./Item";
import instance from "./axios";
import { useStateValue } from "./StateProvider";
import "./Main.css";

function Main() {
  const [itemlis, setList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useStateValue();
  
  const loadless = () => {
    if(counter<=0)
    {
    setCounter(0);

    }else{
    setCounter(counter - 10);
  }
  };
  const loadmore = () => {
    if(counter>=100)
    {
    setCounter(0);

    }else{
    setCounter(counter + 10);
  }
  };
  useEffect(() => {
    async function call() {
      const ob = await instance.get("/photos?_start=0&_limit=100");
      setList(ob.data);
      return ob;
    }
    call();
  }, []);
  useEffect(() => {
    dispatch({
      type: "STORE_STATE",
      item: itemlis,
    });
  }, [itemlis])
  console.log(state.item)
  return (
    <div className="menu">
      {
        state.item.map((m, i) =>{
          if (i > counter && i <= counter + 10) {
            return (
              <Item
                //onClick={()=>handleClick(m)}
                 listItem={m}></Item>
            );
          }
        })
      }
      <div className="buttonclass" >
    { <button onClick={loadless}>Prev 10 Items</button>}
    <div className="space" ></div>
    { <button onClick={loadmore}>Next 10 Items</button>}

      </div>
    </div>
  );
}

export default Main;
