export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export const reveiveTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}