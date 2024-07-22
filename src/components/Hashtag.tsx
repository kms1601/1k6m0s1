import React from 'react';

const Hashtag = ({hashtags}: { hashtags: string[] }) => {
  return (
    <div>
      <ul className="flex flex-wrap">
        {
          hashtags.map((hashtag, i) => {
            return (
              <li key={i} className="mr-5 list-none rounded-3xl bg-blue-400 dark:bg-blue-200 pr-3 pl-3 mt-2">
                <p className="text-primary dark:text-primary-dark text-sm mt-1 mb-1">{hashtag}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Hashtag;