import React from 'react';
import PropTypes from 'prop-types';
import PostsListItem from './PostsListItem';

const PostsList = ({ posts }) => {
  return (
    <ul className="grid grid-cols-1 gap-10 w-full max-w-screen-xl max-auto px-8 mt-8">
      {
        posts.edges.map(({ node }) => {
          return (
            <PostsListItem key={node.id} frontmatter={node.frontmatter} />
          );
        })}
    </ul>
  )
}


PostsList.prototype = {
  posts: PropTypes.object.isRequired,
}

export default PostsList;