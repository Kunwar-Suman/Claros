import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import UserTable from './components/UserTable';

type View = 'home' | 'data';

function App() {
  const [activeView, setActiveView] = useState<View>('home');

  const getTitle = () => {
    switch (activeView) {
      case 'home':
        return 'Dashboard Home';
      case 'data':
        return 'User Data';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={getTitle()} />
        
        <main className="flex-1 overflow-auto p-6">
          {activeView === 'home' && <Home />}
          {activeView === 'data' && <UserTable />}
        </main>
      </div>
    </div>
  );
}

export default App;
