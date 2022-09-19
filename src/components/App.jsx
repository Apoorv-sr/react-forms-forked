import React from "react";

function App() {
  let [name, setName] = React.useState("");
  let [flagValue, setFlagValue] = React.useState(false);

  //the below function will get triggered when any change will be done in the input area,now in normal html forms the change in the input field is tracked by its attribute called value but in react we can use value but we can also use a use state hook here it is "name" to track the changes in the input field and use every where the name for fetching those input value and this is called controlled component ,note we know that using react we break a web page into several components similarly  a hook is also a component
  function handleChange(event) {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    setName(event.target.value);
  }

  function setFlag() {
    setFlagValue(true);
  }

  return (
    <div className="container">
      {/* the below line helps us to render hook i.e name once the user hits submit after the alue of ternary operator is set to true */}
      <h1>Hello {flagValue ? name : ""} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={setFlag}>Submit</button>
    </div>
  );
}

export default App;
