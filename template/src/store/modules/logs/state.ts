export interface ErrorType {
  error: Error;
  time: Date;
}

export interface StateType {
  errorLogs: ErrorType[];
}

const state: StateType = {
  errorLogs: [],
};

export default state;
