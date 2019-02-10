import React from 'react';
import { ITodo } from 'reduxTypes';
import TodoLine, { TodoEdit, TodoRead } from './TodoLine';
import TodoCreate from './TodoCreate';

interface TodoListProps {
  todos: ITodo[];
  onTodoChange: (newTodo: ITodo) => void;
  onDoneChange: (newTodo: ITodo) => void;
}

function CurryOnTodoChange(
  onTodoChange: (newTodo: ITodo) => void,
  item: ITodo
) {
  return (text: string) => {
    const newTodo = {
      ...item,
      text
    };
    onTodoChange(newTodo);
  };
}

function CurryOnTodoDone(onDoneChange: (newTodo: ITodo) => void, item: ITodo) {
  return () => {
    onDoneChange(item);
  };
}

export default function TodoList({
  todos,
  onTodoChange,
  onDoneChange
}: TodoListProps) {
  return (
    <>
      {todos.map(item => (
        <TodoLine
          key={item._id}
          {...item}
          onDoneChange={CurryOnTodoDone(onDoneChange, item)}
          onTextChange={CurryOnTodoChange(onTodoChange, item)}
        />
      ))}
    </>
  );
}

export { TodoLine, TodoEdit, TodoRead, TodoCreate };
