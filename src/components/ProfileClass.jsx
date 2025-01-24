// Profile Component using Class Based Component

import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Creating State variable
    // this.state = {
    //   count: 0,
    //   count2: 1,
    // };
    this.state = {
      userInfo: {
        name: "Dummy name",
        age: 20,
        location: "Dummy location",
      },
    };
    console.log("Child-Constructor " + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/malhotra12052004srishti"
    );
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });

    // API Call
    console.log("Child-ComponentDidMount " + this.props.name);
  }

  componentDidUpdate() {
    console.log("Child-ComponentDidUpdate " + this.props.name);
  }

  componentWillUnmount() {
    console.log("Child-ComponentWillUnmount " + this.props.name);
  }

  render() {
    {
      /* Destructuring the count  */
    }
    // const { count } = this.state;
    console.log("Child-Render " + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this?.state?.userInfo?.avatar_url} />
        <h2>Name: {this?.state?.userInfo?.name}</h2>
        <h4>Location: {this?.state?.userInfo?.location}</h4>
        {/* Destructuring the count  */}
        {/* <h4>Count: {count}</h4> */}

        {/* WE DONOT MUTATE THE STATE DIRECTLY */}
        {/* Never do this.state = something */}
        {/* <button
          onClick={() => {
            this.setState({
              count: 1,
              count2: 2,
            });
          }}
        >
          SetCount
        </button>
        <h4>Count2: {this.state.count2}</h4> */}
      </div>
    );
  }
}

export default Profile;

/**
 *
 * Parent Constructor
 * Parent Render
 * Child-Constructor First Child
 * Child-Render First Child
 * Parent ComponentDidMount
 *
 * DOM IS UPDATED
 * API Call
 *
 * json is logged in the console
 * Child-ComponentDidMount First Child
 * Child-Render First Child
 * Child-ComponentDidUpdate First Child
 *
 * If the Parent Logs are removed then the output will be:
 *
 * Child-Constructor First Child
 * Child-Render First Child
 *
 * API Call
 * setState is called
 * json is logged in the console
 * Child-ComponentDidMount First Child
 *
 * UPDATE CYCLE
 * Child-Render First Child
 * Child-ComponentDidUpdate First Child
 *
 *
 * "Child-ComponentWillUnmount First Child" will be called when the component is removed from the DOM i.e, when the user navigates to another page.
 */

/**
 * 
 * Lifecycle Methods in the Class Components and the Functional Components:
 * 
 * Difference in the functional and the class components:
 * 
 * For the functional Components:
 *
 * useEffect(() => {
 *  API Call
 * }, [count, count2]);
 * 
 * If we use more than 1 useEffect in the functional components then multiple useEffect will be called for each of the useEffects.
 *
 *
 * For the Class Components:
 *
 * componentDidUpdate(prevProps, prevState) {
 *   if (prevState.count !== this.state.count || prevState.count2 !== this.state.count2) {
 *     code
 * }
 * 
 * In the class components, we can use the componentDidUpdate to check if the state has changed or not. We have to use multiple if statements to check if the state has changed or not.
 */
