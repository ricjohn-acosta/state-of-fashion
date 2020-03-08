import React from 'react'
import { connect } from 'react-redux'
import {fetchPosts} from '../actions'
import Post from './Post'

const Subreddit = ({ subreddits, waiting }) => {

  dispatch(fetchPosts())
  return (
    <div>
      {/* {subreddits.map((post, i) =>
      <Post
        key={i}
        author={post.author}
      />
    )} */}
      {waiting === false ? console.log('data from subredditlist component: ', subreddits[0]) : console.log('failed')}

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits,
    waiting: state.waiting
  }
}

const mapDispatchToProps = () => {
  return {
    fetchposts: () => dispatch(fetchPosts)
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps)(Subreddit)
