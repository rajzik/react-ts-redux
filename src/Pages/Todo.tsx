import React from 'react';
import { TodoContainer } from '@containers';

type Property = {
    [key: string]: any,
};

export default (props: Property) => {
    console.log(props);
    return (
        <TodoContainer {...props} />
    )
}
