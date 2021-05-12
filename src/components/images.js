import { React, useEffect, useState } from "react";
import style from "./style.css";

export default function Images() {
  const [photos, setphotos] = useState([
    "https://images.unsplash.com/photo-1511684344724-cda927f1ba0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1620246499650-86ee085562fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
    "https://images.unsplash.com/photo-1617932631696-f36237bedf05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  ]);
  const [urlAdd, seturlAdd] = useState(null);

  function ShowImages() {
    return photos.map((img) => {
      return <img src={img} className="indiPhotos" />;
    });
  }

  useEffect(() => {
    //console.log("Images mounted");

    let my = setInterval(() => {
      //console.log("hi");
    }, 1000);

    return () => {
      clearInterval(my);
      //console.log("Image unmount");
    };
  });

  let imageAdd = () => {
    setphotos([...urlAdd]);
  };

  let onChangeForm = (e) => {
    seturlAdd([...photos, e.target.value]);
  };

  return (
    <div>
      //{console.log()}
      <ShowImages />
      <div className="ib">
        <input  type="text" onChange={onChangeForm} />
        <button  onClick={imageAdd}>
          add url to images
        </button>
      </div>
    </div>
  );
}


