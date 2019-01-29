import React from 'react';
import { ITodo } from 'reduxTypes';

interface ITodoExtended extends ITodo {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export default function TodoRead({ _id, text, done, onChange }: ITodoExtended) {
  return (
    <div id={_id}>
      <p>{text}</p>
      <input type="checkbox" checked={done} onChange={onChange} />
    </div>
  );
}
