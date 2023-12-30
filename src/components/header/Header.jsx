import Toggle from '../ui/Toggle';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-9">
      <h1 className="text-headingM text-header dark:text-white">devfinder</h1>
      <Toggle />
    </header>
  );
};

export default Header;
