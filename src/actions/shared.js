import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { reveiveTweets } from './tweets';
import { setAuthUser } from './authUser';

const AUTHED_ID = 'tylermcginnis';

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users));
        dispatch(reveiveTweets(tweets));
        dispatch(setAuthUser(AUTHED_ID));
      })
  }
}