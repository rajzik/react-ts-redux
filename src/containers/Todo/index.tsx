import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IApplicationState, ITodoState } from 'reduxTypes';
import { Dispatch } from 'redux';
import { todoActions } from '@actions';

interface IPropsFromState {
  todo: ITodoState
}

interface IPropsFromDispatch {
  fetchTodo: typeof todoActions.fetchRequest;
}

type TodoContainerProps = IPropsFromState & IPropsFromDispatch;
interface ITodoContainer{
  children?: React.ReactNode
}

class TodoContainer extends Component<TodoContainerProps & ITodoContainer> {
  constructor(props: TodoContainerProps & ITodoContainer){
    super(props);
    props.fetchTodo();
  }
  render() {
    return (<div></div>);
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
