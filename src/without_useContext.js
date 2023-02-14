// with use of Prop Drilling

import React, { useState } from "react";

function Parent() {
  const [fName, setfName] = useState("firstName");
  const [lName, setlName] = useState("LastName");
  return (
    <>
      <div> This is a Parent Component</div>
      <br />
      <ChildA fName={fName} lName={lName} />
    </>
  );
}
function ChildA({ fName, lName }) {
  return (
    <>
      This is ChildA Component.
      <br />
      <ChildB fName={fName} lName={lName} />
    </>
  );
}
function ChildB({ fName, lName }) {
  return (
    <>
      This is ChildB Component.
      <br />
      <ChildC fName={fName} lName={lName} />
    </>
  );
}
function ChildC({ fName, lName }) {
  return (
    <>
      This is ChildC component.
      <br />
      <ChildD fName={fName} lName={lName} />
    </>
  );
}
function ChildD({ fName, lName }) {
  return (
    <>
      This is ChildD Component.
      <br />
      <h4> Data from Parent component is as follows:</h4>
      <h5>{fName}</h5>
      <h5>{lName}</h5>
    </>
  );
}

export default Parent;
