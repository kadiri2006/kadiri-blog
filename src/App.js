import React, { useEffect, useRef, useState } from "react";
import Images from "./components/Images";
import style from "./components/style.css"
export default function App() {
  const [stat, setstat] = useState(false);
  const testd = useRef(false);

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    if (testd.current) {
     
    } else {
      testd.current = true;
    }
  }, [stat]);

  let clickHandler = () => {
    setstat(!stat);
  };

  return (
    <div>
      
      <h1 className="heading">Collection of Images</h1>
      <div>
        <button onClick={clickHandler} className="btn">click me</button>
      </div>
      {stat ? <Images /> : null}
    </div>
  );
}
