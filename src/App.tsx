import { AuthModal } from './components/AuthModal/AuthModal';

import './App.scss';

function App() {
  return (
    <>
      <div className='App'>
        <header className='header'>
          <AuthModal />
        </header>
      </div>
    </>
  );
}

export default App;
