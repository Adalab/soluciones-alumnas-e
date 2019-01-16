import React, {Component} from "react";

class TextInput extends Component {
  render() {
    return (
      <form action="" method="">
        <textarea onKeyUp={this.props.input} name="textarea" rows="30" cols="50"></textarea>
      </form>
    );
  }
}

export default TextInput;