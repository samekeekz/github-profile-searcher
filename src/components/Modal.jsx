import Header from './header/Header';
import Search from './Search';
import Content from './Content';
import { useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { DataContext } from '../context/Context';

const Modal = () => {
  const { state } = useContext(DataContext);

  return (
    <div className="flex flex-col w-[730px]">
      <Header />
      <Search />
      <ThreeDots
        visible={state.visible}
        height="80"
        width="80"
        color="#0079ff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: '0 auto' }}
        wrapperClass=""
      />
      {!state.visible && <Content />}
    </div>
  );
};

export default Modal;
