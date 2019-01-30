import React, { Component, ChangeEvent } from 'react';
import { ITodoData } from 'reduxTypes';

interface ITodoExtended {
  onSubmit: (data: ITodoData) => void;
}

interface ITodoCreateState {
  value: string;
}

export default class TodoCreate extends Component<
  ITodoExtended,
  ITodoCreateState
> {
  state = {
    value: ''
  };

  onValueChange = ({
    currentTarget: { value }
  }: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value
    });
  };

  submit = () => {
    const { value } = this.state;
    if (value) {
      this.props.onSubmit({
        text: value,
        done: false
      });
    }
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <input type="text" value={value} onChange={this.onValueChange} />
        <button onClick={this.submit}>Create new todo</button>
      </div>
    );
  }
}
