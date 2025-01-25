import { Outlet } from "react-router-dom";
import ProfileFunctional from "./ProfileFunctional";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

const About2 = () => {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">About Us Page</h1>
      <p className="text-lg mb-6">
        This is the FoodVilla Website. We provide the best food in the town.
      </p>
      {/* <Outlet /> */}
      <ProfileFunctional name={"Srishti Malhotra"} />
      <ProfileClass name={"Srishti Malhotra learning Class Components"} xyz={"abc"}/>
    </div>
  );
};

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent-Constructor");
  }
  componentDidMount() {
    // Best palce to make an API Call
    console.log("Parent-ComponentDidMount");
  }
  render() {
    console.log("Parent-Render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the FoodVilla Website. We provide the best food in the town.
        </p>
        <div className="space-y-4">
          <ProfileClass name={"First Child"} />
          {/* <ProfileClass name={"Second Child"} /> */}
          {/* <ProfileFunctional name={"Srishti Malhotra learning Functional Components"} /> */}
        </div>
      </div>
    );
  }
}

export default About2;

// If you want to import the Profile component in the About component without using Outlet, you can do so by importing the Profile component in the About component and rendering it as a child component. Here is an example:
/*

import Profile from "./Profile"; {Line1}

<Profile /> {Line11}

*/


/**
 * 
 * Parent Constructor
 * Parent Render
 *   Child-Constructor First Child
 *   Child-Render First Child
 *   Child-Constructor Second Child
 *   Child-Render Second Child
 * 
 *   DOM IS UPDATED
 * 
 *   Child-componentDidMount First Child
 *   Child-componentDidMount Second Child
 * Parent-componentDidMount
 * 
 */