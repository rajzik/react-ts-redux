import React, { FormEvent, Component } from 'react';
import { ITodo } from 'reduxTypes';
import TodoEdit from './TodoEdit';
import TodoRead from './TodoRead';

import styles from './line.module.css';

interface TodoLineProps extends ITodo {
  onTextChange: (text: string) => void;
  onDoneChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

interface TodoLineState {
  edit: boolean;
  text: string;
  initialText: string;
}

export default class TodoLine extends Component<TodoLineProps, TodoLineState> {
  static getDerivedStateFromProps(props: TodoLineProps, state: TodoLineState) {
    if (props.text !== state.initialText) {
      return {
        initialText: props.text,
        text: props.text,
      }
    }
    return null;
  }

  constructor(props: TodoLineProps) {
    super(props);
    this.state = {
      edit: false,
      initialText: props.text,
      text: props.text,
    };
  }

  toggleEdit = () => {
    const { edit, text } = this.state;
    const { onTextChange } = this.props;
    if (edit) {
      onTextChange(text);
    }
    this.setState({
      edit: !edit,
    });
  }
  changeText = ({ currentTarget: { value }}: FormEvent<HTMLInputElement>) => {
    this.setState({
      text: value,
    });
  }
  render() {
    const { edit, text } = this.state;
    const { toggleEdit, changeText, props: { onDoneChange } } = this;
    return (
      <div className={styles.todoLine}>
        {edit ? (
          <TodoEdit onChange={changeText} {...this.props} text={text} />
        ) : (
          <TodoRead onChange={onDoneChange} {...this.props} text={text} />
        )}
        <button type="button" onClick={toggleEdit}>
          {edit ? 'save' : 'edit'}
        </button>
      </div>
    );
  }
}

export { TodoEdit, TodoRead };
