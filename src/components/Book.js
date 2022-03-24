import React, { useState, useEffect } from "react";

export default function Book() {
  const [message, setMessage] = useState("Hi there, how are you?");
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("trigger use effect hook");

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 1000);
  });

  return (
    <div>
      <inputd
        type="text"
        value={text}
        placeholder="yo"
        onChange={(e) => setText(e.target.value)}
      />

      <h1>{message}</h1>
      {/* {console.log("now it is on render")} */}
    </div>
  );
}
export const Foo = () => {
  return (
    <div>
      <h3>yo this is second func</h3>
      <h3>yo this is second func</h3>
    </div>
  );
};
