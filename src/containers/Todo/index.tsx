import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IApplicationState, ITodoState, ITodo, ITodoData } from 'reduxTypes';
import { Dispatch } from 'redux';
import { todoActions } from '@actions';
import { TodoList, TodoCreate } from '@components';

import styles from './todo.module.css';

interface IPropsFromState {
  todo: ITodoState;
}

interface IPropsFromDispatch {
  fetchTodo: typeof todoActions.fetchRequest;
  createTodo: typeof todoActions.postRequest;
  updateTodo: typeof todoActions.putRequest;
  patchTodo: typeof todoActions.patchRequest;
}

type TodoContainerProps = IPropsFromState & IPropsFromDispatch;
interface ITodoContainer {
  children?: React.ReactNode;
}

interface TodoContainerState {
}

class TodoContainer extends Component<
  TodoContainerProps & ITodoContainer,
  TodoContainerState
  > {

  constructor(props: TodoContainerProps & ITodoContainer) {
    super(props);
    props.fetchTodo();
  }


  render() {
    const { todo: { data }, createTodo, updateTodo, patchTodo } = this.props;
    return <div className={styles.todo}>
      <TodoList
        todos={data}
        onTodoChange={updateTodo}
        onDoneChange={patchTodo}
      />,
      <TodoCreate onSubmit={createTodo} />
    </div>;
  }
}

const mapStateToProps = ({ todo }: IApplicationState) => ({
  todo
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTodo: () => dispatch(todoActions.fetchRequest()),
  createTodo: (data: ITodoData) => dispatch(todoActions.postRequest(data)),
  updateTodo: (data: ITodo) => dispatch(todoActions.putRequest(data)),
  patchTodo: (data: ITodo) => dispatch(todoActions.patchRequest(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
