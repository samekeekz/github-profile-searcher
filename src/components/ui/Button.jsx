import { memo } from 'react';

const Button = ({ onClick }) => {
  return (
    <button
      className="w-[106px] h-12 rounded-[10px] bg-primaryBtn text-white shrink-0 hover:bg-[#60ABFF]"
      onClick={onClick}
    >
      Search
    </button>
  );
};

const memoizedButton = memo(Button);

export default memoizedButton;
