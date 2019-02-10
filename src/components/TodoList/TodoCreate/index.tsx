import React, { Component, ChangeEvent } from 'react';
import { ITodoData } from 'reduxTypes';
import {
  Card,
  Button,
  TextField,
  Input,
  CardActions,
  CardActionButtons,
  CardPrimaryContent
} from '@components';

interface ITodoExtended {
  onSubmit: (data: ITodoData) => void;
}

interface ITodoCreateState {
  value: string;
}

export default class TodoCreate extends Component<
  ITodoExtended,
  ITodoCreateState
> {
  state = {
    value: ''
  };

  onValueChange = ({
    currentTarget: { value }
  }: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value
    });
  };

  submit = () => {
    const { value } = this.state;
    if (value) {
      this.props.onSubmit({
        text: value,
        done: false
      });
    }
  };

  render() {
    const { value } = this.state;
    return (
      <Card>
        <CardPrimaryContent>
          <TextField label="Create new Todo">
            <Input<HTMLInputElement>
              value={value}
              onChange={this.onValueChange}
            />
          </TextField>
        </CardPrimaryContent>

        <CardActions>
          <CardActionButtons>
            <Button onClick={this.submit}>Create new todo</Button>
          </CardActionButtons>
        </CardActions>
      </Card>
    );
  }
}
