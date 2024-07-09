import React, { Component } from "react";
import Avatar from "../chatList/Avatar";

export default class ChatItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  constructor(props) {
    super(props);
    // Initialize state (if needed)
    this.state = {
      // Add any state variables here
    };
    // Bind methods (if any)
    // this.someMethod = this.someMethod.bind(this);
  }

  // Example method (if needed)
  // someMethod() {
  //   // Method logic
  // }

  render() {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{this.props.msg}</div>
          <div className="chat__meta">
            <span>16 mins ago</span>
            <span>Seen 1.03PM</span>
          </div>
        </div>
        <Avatar isOnline="active" image={this.props.image} />
      </div>
    );
  }
}
