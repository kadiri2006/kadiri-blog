import React, { useEffect, useRef, useState } from "react";
import Images from "./components/Images";
export default function App() {
  const [stat, setstat] = useState(false);
  const testd = useRef(false);

  useEffect(() => {
    console.log("App mount");
  }, []);

  useEffect(() => {
    if (testd.current) {
      console.log("App updated");
    } else {
      testd.current = true;
    }
  }, [stat]);

  let clickHandler = () => {
    setstat(!stat);
  };

  return (
    <div>
      {console.log("App render")}
      <h1>hello iam kadiir</h1>
      <div>
        <button onClick={clickHandler}>click me</button>
      </div>
      {stat ? <Images /> : null}
    </div>
  );
}
