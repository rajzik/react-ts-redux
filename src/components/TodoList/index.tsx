import React from 'react';
import { ITodo } from 'reduxTypes';
import TodoLine, { TodoEdit, TodoRead } from './TodoLine';
import TodoCreate from './TodoCreate';

interface TodoListProps {
  todos: ITodo[];
  onTodoChange: (newTodo: ITodo) => void;
}

function CurryOnTodoChange(
  onTodoChange: (newTodo: ITodo) => void,
  item: ITodo,
  property: 'text' | 'done'
) {
  return ({
    currentTarget: { value, checked }
  }: React.FormEvent<HTMLInputElement>) => {
    const newTodo = {
      ...item,
      [property]: value === "on" ? checked : value
    };

    onTodoChange(newTodo);
  };
}

export default function TodoList({ todos, onTodoChange }: TodoListProps) {
  return (
    <>
      {todos.map(item => (
        <TodoLine
          key={item._id}
          {...item}
          onDoneChange={CurryOnTodoChange(onTodoChange, item, 'done')}
          onTextChange={CurryOnTodoChange(onTodoChange, item, 'text')}
        />
      ))}
    </>
  );
}

export {
  TodoLine,
  TodoEdit, 
  TodoRead,
  TodoCreate
}
