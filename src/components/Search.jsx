import { useEffect, useState } from 'react';
import Button from './ui/button';
const token = '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';

const Search = ({ data, setData, setFlag }) => {
  const [query, setQuery] = useState('');
  const [hidden, setHidden] = useState(true); // State to control visibility

  const fetchData = async () => {
    try {
      setData(null);
      setFlag(true);
      setHidden(true);
      const response = await fetch(`https://api.github.com/users/${query}`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          Authorization: `Bearer ${token}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setFlag(false);
        setData(userData); // Set the userData directly to the state
        setQuery('');
      } else {
        console.error('Failed to fetch user data');
        setHidden(false);
        setFlag(false);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setHidden(false);
      setFlag(false);
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <div className="w-[730px] h-[69px] flex pl-8 pr-2.5 rounded-windowRadius bg-windowBackground dark:bg-windowBackgroundDark mb-6">
      <div className="flex items-center gap-x-6 w-full mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          className="shrink-0 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6087 0C4.7591 0 0 4.74609 0 10.5797C0 16.4133 4.75915 21.1594 10.6087 21.1594C13.2162 21.1594 15.6071 20.2163 17.4563 18.6542L22.575 23.747C22.7449 23.9157 22.9664 24 23.1884 24C23.4118 24 23.635 23.9145 23.8049 23.7438C24.1435 23.4032 24.142 22.8527 23.8017 22.5139L18.6893 17.4274C20.2652 15.5807 21.2174 13.189 21.2174 10.5797C21.2174 4.74609 16.4582 0 10.6087 0ZM16.9346 16.7705C18.5071 15.1744 19.4782 12.9879 19.4782 10.5797C19.4782 5.70488 15.4994 1.73908 10.6087 1.73908C5.71794 1.73908 1.73913 5.70488 1.73913 10.5797C1.73913 15.4542 5.71794 19.4203 10.6087 19.4203C13.0163 19.4203 15.2029 18.4591 16.8027 16.9016C16.8211 16.879 16.8407 16.8571 16.8617 16.836C16.885 16.8125 16.9094 16.7907 16.9346 16.7705Z"
            fill="#0079FF"
          />
        </svg>
        <input
          type="text"
          placeholder="Search GitHub username…"
          className="w-full bg-transparent focus-visible:outline-none text-header text-textM placeholder:text-[#4B6A9B] placeholder:text-textM dark:text-white dark:placeholder:text-white"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-6 shrink-0">
        <span className={`text-[#F74646] text-errorText ${hidden ? 'hidden' : ''}`}>
          No results
        </span>
        <Button onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Search;