import { HIRE_MENTOR } from './hire.action';

const INITIAL_STATE = {
  hireList : [],
}

export function hire_reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'HIRE_MENTOR':
    return {
      hireList: [...state.hireList, action.payload],
    };

    default :
    return state;
  }
}
