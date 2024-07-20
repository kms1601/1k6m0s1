import React from 'react';

const Hashtag = ({hashtags} : {hashtags: string[]}) => {
  return (
    <div>
      <li className="flex justify-end mb-0">
        {
          hashtags.map((hashtag, i) => {
            return <p key={i} className="text-description text-sm m-0 ml-2">#{hashtag}</p>
          })
        }
      </li>
    </div>
  );
};

export default Hashtag;