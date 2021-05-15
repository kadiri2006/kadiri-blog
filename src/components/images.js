import { React, useState } from "react";
import Image from "./Image.js";

export default function Images() {
  const [photos, setphotos] = useState([
    "https://images.unsplash.com/photo-1511684344724-cda927f1ba0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1620246499650-86ee085562fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
    "https://images.unsplash.com/photo-1617932631696-f36237bedf05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  ]);
  const [urlAdd, seturlAdd] = useState(photos);
  const [enterValue, setenterValue] = useState("");
  const [mouseE, setmouseE] = useState("");
  const [obindex, setobindex] = useState("");

  function ShowImages() {
    return photos.map((imge, index) => 
      <Image
        handleonMouseLeave={handleonMouseLeave}
        img={imge}
        handleMouseEnter={handleMouseEnter}
        index={index}
        handleClick={handleClick}
        obindex={obindex}
      />
    );
  }

  let handleonMouseLeave = () => {
    setobindex("");
  };

  let handleClick = (index) => {
    let x = [...photos];
    setphotos(x.filter((x, index) => index != mouseE));
    seturlAdd(x.filter((x, index) => index != mouseE));
  };

  let handleMouseEnter = (index) => {
    setmouseE(index);

    setobindex(index);
  };

  let handleClick2 = () => {
    setenterValue("");
    console.log([...urlAdd]);
    setphotos([...urlAdd]);
  };

  let handleChange = (x) => {
    seturlAdd([...photos, x.target.value]);
    setenterValue(x.target.value);
  };

  return (
    <div>
      <div style={{ display: "flex", width: "500px" }}>
        <ShowImages />
      </div>

      <div style={{ display: "flex" }} className="ib">
        <input type="text" onChange={handleChange} value={enterValue} />
        <button onClick={handleClick2}>add url to images</button>
      </div>
    </div>
  );
}
