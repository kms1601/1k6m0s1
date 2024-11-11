import React from 'react';

const Hashtag = ({hashtags}: { hashtags: string[] }) => {
  return (
    <div>
      <ul className="flex flex-wrap">
        {
          hashtags.map((hashtag, i) => {
            return (
              <li key={i} className="mt-2 mr-5 list-none rounded-3xl bg-blue-400 pr-3 pl-3 dark:bg-blue-200">
                <p className="mt-1 mb-1 text-sm text-primary dark:text-primary-dark">{hashtag}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Hashtag;