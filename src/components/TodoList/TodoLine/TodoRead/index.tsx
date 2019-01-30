import React from 'react';
import { ITodo } from 'reduxTypes';

import styles from './read.module.css';

interface ITodoExtended extends ITodo {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export default function TodoRead({ _id, text, done, onChange }: ITodoExtended) {
  return (
    <div className={styles.todoRead} id={_id}>
      <p className={styles.todoText}>{text}</p>
      <input
        className={styles.todoDone}
        type="checkbox"
        checked={done}
        onChange={onChange}
      />
    </div>
  );
}
