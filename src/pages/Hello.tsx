import React from 'react';
import { T } from '@components';

export default function HelloPage() {
  return (
    <div>
      <T>greetings</T>
      <p>
        <T>
          this is test of translation
        </T>
        <T id="test" />
      </p>
    </div>
  );
}
