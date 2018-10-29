import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { formatTweet, formatDate } from '../utils/helpers';
import { TiArrowBackOutline, TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti';
import { handleToggleTweet } from '../actions/tweets';


class Tweet extends Component {
  toParent = (e, parentId) => {
    e.preventDefault();

    this.props.history.push(`/trill/${parentId}`);
  }

  handleLike = (e) => {
    e.preventDefault
    const { dispatch, tweet, authedUser } = this.props;

    console.log(tweet.id);
    dispatch(handleToggleTweet({
      id: tweet.id,
      hasLiked: tweet.hasLiked,
      authedUser
    }))
  }

  render() {
    const { tweet } = this.props;
    if ( tweet === null ) return <p>This Trill doesn't exist</p>

    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      id,
      parent
    } = tweet;

    return (
      <Link to={`/trill/${id}`} className='tweet'>
        <img src={avatar} alt={`avatar of ${name}`} className='avatar' />
        <div className='tweet-info'>
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button className='replying-to' onClick={(e) => this.toParent(e, parent.id)}>
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className='tweet-icons'>
            <TiArrowBackOutline className='tweet-icon' />
            <span>{replies !== 0 && replies}</span>
            <button className='heart-button' onClick={this.handleLike}>{hasLiked ? <TiHeartFullOutline color='#E0245E' className='tweet-icon' /> : <TiHeartOutline className='tweet-icon' />}</button>
            <span>{likes !==0 && likes}</span>
          </div>
        </div>
      </Link>
    )
  }
}

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser,
    tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
  }
}

export default withRouter(connect(mapStateToProps)(Tweet));