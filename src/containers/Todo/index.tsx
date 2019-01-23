import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IApplicationState, ITodoState, ITodo } from 'reduxTypes';
import { Dispatch } from 'redux';
import { todoActions } from '@actions';
import { TodoList } from '@components';

interface IPropsFromState {
  todo: ITodoState;
}

interface IPropsFromDispatch {
  fetchTodo: typeof todoActions.fetchRequest;
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
    const index = data.findIndex((x: ITodo) => x.id === item.id);
    const newData: ITodo[] = data;
    newData[index] = item;
    this.setState({
      data: newData,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <TodoList
        todos={data}
        onTodoChange={this.doSomethingWithNewTodo}
      />
    );
  }
}

const mapStateToProps = ({ todo }: IApplicationState) => ({
  todo
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTodo: () => dispatch(todoActions.fetchRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
