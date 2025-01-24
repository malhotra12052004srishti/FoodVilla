import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    // API Call
    console.log('useEffect called');
  });
  console.log("Rendering functional component");
  return (
    <div>
      <h1>Profile Functional Component</h1>
      <h2>Name: {props.name}</h2>
      <h4>Count: {count}</h4>
      <button
        onClick={() => {
          setCount(1);
          setCount2(2);
        }}
      >
        Count
        <br/>
        Count2
      </button>
      <h4>Count2: {count2}</h4>
    </div>
  );
};

export default Profile;
