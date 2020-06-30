// state - 创建 state 和 reducer
import { createContainer } from "xlstate";
const STATES = {
  info: {
    name: 'Jack',
    age: 16
  }
};
 
const REDUCERS = {
  setInfo(state, { payload }) {
    return {
      ...state,
      info: {
        ...payload
      }
    };
  },
};
const { Provider, useGloContext } = createContainer(STATES, REDUCERS);
 
export {
  Provider,
  useGloContext
}
