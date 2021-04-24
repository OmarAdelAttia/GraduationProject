import { Action } from '@ngrx/store';

export const HIRE_MENTOR = 'HIRE_MENTOR';

export class hireMentor implements Action {
  readonly type = HIRE_MENTOR;
  constructor(public payload: object) {}
}
