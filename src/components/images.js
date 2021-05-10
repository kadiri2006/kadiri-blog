import React, { useEffect } from "react";

export default function Images() {
  useEffect(() => {
    console.log("Images mounted");

    let my = setInterval(() => {
      console.log("hi");
    }, 1000);

    return () => {
      clearInterval(my);
      console.log("Image unmount");
    };
  });

  return (
    <img
      src="https://images.unsplash.com/photo-1511684344724-cda927f1ba0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      alt="helpless"
    />
  );
}
