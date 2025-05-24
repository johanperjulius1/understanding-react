import React from "react";
import { useState } from "react";

export default function AddCounter() {
  const [counterShortName, setCounterShortName] = useState("");
  const [counterLongName, setCounterLongName] = useState("");
  const [tab, setTab] = useState("");
  const [startingValue, setStartingValue] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(counterName);
    console.log(startingValue);

    // dont need to be controlled element to access
    // the information. Browser dom code can be used.
    // the target is the dom element.
    const form = event.target;
    // the browser comes with formData object.
    // you give it a browser dom form element and gives back a data strucuture.
    // in which see all the forms data.
    const formData = new FormData(form);
    console.log("hello from form", ...formData);

    const formJson = Object.fromEntries(formData.entries());
    console.log("hello from formJSon", formJson);
    // Above are pure dom way of extracting values without making them controlled components
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <h2>Add counter</h2>
        <p>
          <label htmlFor="counterName">Name</label>
          <input
            name="counterName"
            type="text"
            id="counterName"
            value={counterName}
            placeholder="Your name"
            onChange={(e) => setCounterName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="startingValue">Number</label>
          <input
            name="startingValue"
            type="number"
            id="startingValue"
            value={startingValue}
            placeholder="Your number"
            onChange={(e) => setStartingValue(e.target.value)}
          />
        </p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
