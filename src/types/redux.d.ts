

declare module "reduxTypes" {
  
  export interface ITodo {
    _id: string,
    text: string,
    done: boolean,
  }
  
  export interface ITodoState {
    readonly loading: boolean;
    readonly data: ITodo[];
    readonly error?: string;
  }
  
  export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>;
  }

  export interface IApplicationState {
    todo: ITodoState;
  }
}