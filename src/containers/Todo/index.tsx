import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IApplicationState, ITodoState, ITodo, ITodoData } from 'reduxTypes';
import { Dispatch } from 'redux';
import { todoActions } from '@actions';
import { TodoList, TodoCreate } from '@components';

interface IPropsFromState {
  todo: ITodoState;
}

interface IPropsFromDispatch {
  fetchTodo: typeof todoActions.fetchRequest;
  createTodo: typeof todoActions.postRequest;
}

type TodoContainerProps = IPropsFromState & IPropsFromDispatch;
interface ITodoContainer {
  children?: React.ReactNode;
}

interface TodoContainerState {
  data: ITodo[];
}

class TodoContainer extends Component<
  TodoContainerProps & ITodoContainer,
  TodoContainerState
> {
  state = {
    data: []
  };

  constructor(props: TodoContainerProps & ITodoContainer) {
    super(props);
    props.fetchTodo();
  }

  componentWillReceiveProps(nextProps: TodoContainerProps & ITodoContainer) {
    this.setState({
      data: nextProps.todo.data
    });
  }

  doSomethingWithNewTodo = (item: ITodo) => {
    const { data } = this.state;
    const index = data.findIndex((x: ITodo) => x._id === item._id);
    const newData: ITodo[] = data;
    newData[index] = item;
    this.setState({
      data: newData,
    });
  };

  render() {
    const { data } = this.state;
    return [
      <TodoList
        todos={data}
        onTodoChange={this.doSomethingWithNewTodo}
      />,
      <TodoCreate onSubmit={this.props.createTodo} />
    ];
  }
}

const mapStateToProps = ({ todo }: IApplicationState) => ({
  todo
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTodo: () => dispatch(todoActions.fetchRequest()),
  createTodo: (data: ITodoData) => dispatch(todoActions.postRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
