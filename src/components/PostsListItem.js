import React from 'react';
import PropTypes from 'prop-types';


const PostsListItem = ({ frontmatter }) => {
  const { title, description, date } = frontmatter;
  return (
    <li key={title} className="mb-4 font-rubik cursor-pointer hover:text-blue-600">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">{title}</h2>
      <h3 className="text-md md:text-lg text-gray-500 font-thin italic my-1">{date}</h3>
      <p className="text-xl sm:text-2xl text-gray-800 md:text-3xl font-roboto font-light">{description}</p>
    </li>
  )
}

PostsListItem.prototype = {
  frontmatter: PropTypes.object,
}

export default PostsListItem
