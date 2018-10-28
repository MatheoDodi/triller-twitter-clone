export const RECEIVE_USERS = 'RECEIVE_USERS';

export const reveiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}