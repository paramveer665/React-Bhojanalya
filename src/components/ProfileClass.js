import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      last_name: "Chauhan",
      count1: 0,
      count2: 0,
    };
  }
  render() {
    const { last_name } = this.state;

    return (
      <div>
        <h3>This is class Profile</h3>
        <h4>
          Name: {this.props.name} {last_name}
        </h4>
        <h5>Button 1</h5>
        <button onClick={() => this.setState({ count1: 2, count2: 10 })}>
          Click me
        </button>
        <h5>Count 1:{this.state.count1}</h5>
        {/* <h5>Button 2</h5>
        <button>Click me</button> */}
        <h5>Count 2:{this.state.count2}</h5>
      </div>
    );
  }
}

export default ProfileClass;
