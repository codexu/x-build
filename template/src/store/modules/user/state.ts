import UaParser, { IResult as UaResult } from 'ua-parser-js';

export interface UserInfo {
  id?: string;
  token?: string;
  name?: string;
  avatar?: string;
  roles?: string[];
}

export interface StateType {
  userInfo: UserInfo;
  ua: UaResult;
}

const state: StateType = {
  userInfo: {
    id: undefined,
    token: undefined,
    name: undefined,
    avatar: undefined,
    roles: [],
  },
  ua: new UaParser().getResult(),
};

export default state;
