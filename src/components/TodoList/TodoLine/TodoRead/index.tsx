import React from 'react';
import { ITodo } from 'reduxTypes';
import { Switch } from '@components';
import styles from './read.module.css';


interface ITodoExtended extends ITodo {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export default function TodoRead({ text, done, onChange }: ITodoExtended) {
  return (
    <div className={styles.todoRead}>
      <p>{text}</p>
      <Switch
        checked={done}
        onChange={onChange}
      />
    </div>
  );
}
