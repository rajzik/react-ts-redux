import React from 'react';
import { ITodo } from 'reduxTypes';
import { Subtract } from 'utility-types';

interface ITodoExtended extends Subtract<ITodo, { done: boolean }> {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export default function TodoEdit({ _id, text, onChange }: ITodoExtended) {
  return (
    <div id={_id}>
      <input type="text" value={text} onChange={onChange} />
    </div>
  );
}
