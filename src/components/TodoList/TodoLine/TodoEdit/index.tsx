import React from 'react';
import { ITodo } from 'reduxTypes';
import { Subtract } from 'utility-types';
import styles from './edit.module.css';
import { TextField, Input } from '@components';


interface ITodoExtended extends Subtract<ITodo, { done: boolean }> {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export default function TodoEdit({ _id, text, onChange }: ITodoExtended) {
  return (
    <div className={styles.editLine} id={_id}>
      <TextField label="Change todo text">
        <Input<HTMLInputElement> value={text} onChange={onChange}/>
      </TextField>
    </div>
  );
}
