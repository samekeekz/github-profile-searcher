import Modal from './components/Modal';
import { ContextProvider } from './context/Context';

function App() {
  return (
    <ContextProvider>
      <div className="bg-background dark:bg-backgroundDark min-w-[100wh] min-h-[100vh] flex justify-center pt-20">
        <Modal />
      </div>
    </ContextProvider>
  );
}

export default App;
