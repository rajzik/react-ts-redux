import React, { useState } from 'react';
import { ITodo } from 'reduxTypes';
import TodoEdit from '../TodoEdit';
import TodoRead from '../TodoRead';

interface TodoLineProps extends ITodo {
  onTextChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onDoneChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export default function TodoLine({ onTextChange, onDoneChange, ...props }: TodoLineProps) {
  // React hooks
  const [edit, changeEdit] = useState(false);
  const toggleEdit = () => changeEdit(!edit);

  return (
    <div>
      {edit ? (
        <TodoEdit onChange={onTextChange} {...props} />
      ) : (
        <TodoRead onChange={onDoneChange} {...props} />
      )}
      <button type="button" onClick={toggleEdit}>
        {edit ? 'save' : 'edit'}
      </button>
    </div>
  );
};
