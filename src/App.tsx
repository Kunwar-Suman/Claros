import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import UserTable from './components/UserTable';
import Analytics from './components/Analytics';
import Settings from './components/Settings';

type View = 'home' | 'data' | 'analytics' | 'settings';

function App() {
  const [activeView, setActiveView] = useState<View>('home');

  const getTitle = () => {
    switch (activeView) {
      case 'home':
        return 'Dashboard Home';
      case 'data':
        return 'User Data';
      case 'analytics':
        return 'Analytics';
      case 'settings':
        return 'Settings';
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
          {activeView === 'analytics' && <Analytics />}
          {activeView === 'settings' && <Settings />}
        </main>
      </div>
    </div>
  );
}

export default App;
