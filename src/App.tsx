import Home from './views/Home';
import Drawer from './views/Drawer';
import { useState } from 'react';

function App() {

  const [drawerVisible, setDrawerVisible] = useState(false)


  return (
    <div className="app">
      <div className="player">
        <main className="content">
          <Home />
        </main>
        <Drawer visible={drawerVisible} setVisible={setDrawerVisible}/>
      </div>
    </div>
  )
}

export default App
