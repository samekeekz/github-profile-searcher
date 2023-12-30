import Header from './header/Header';
import Search from './Search';
import Content from './Content';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Modal = () => {
  const [data, setData] = useState();
  const [flag, setFlag] = useState(false);

  console.log(data);
  return (
    <div className="flex flex-col w-[730px]">
      <Header />
      <Search data={data} setData={setData} setFlag={setFlag} />
      <ThreeDots
        visible={flag}
        height="80"
        width="80"
        color="#0079ff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: '0 auto' }}
        wrapperClass=""
      />
      <Content user={data} />
    </div>
  );
};

export default Modal;
