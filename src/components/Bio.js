import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from './Image';

function Bio() {
  const occupations = ['Web Developer', 'Content Creator'];

  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <div className="flex flex-col max-w-2xl border border-gray-500 rounded shadow p-4 mt-8">
      <div className="flex">
        <Image className="w-10 h-10 flex-shrink-0" />
        <div className="flex flex-col items-start pl-2 font-rubik">
          <h2 className="md:text-lg lg:text-xl font-medium">
            {data.site.siteMetadata.author}
            </h2>
          <ul className="flex text-xs font-thin">
            { occupations.map((occupation, i) => (
              <li key={i}>
                {occupation.length - 1 === i ? `${occupation}` : `${occupation}, `}
              </li>
            )) }
          </ul>
        </div>

      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}

export default Bio
