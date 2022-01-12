import React from 'react'
import Home from './Pages/Home';

function App() {
  const styles = {
    landing: {
      margin: 'auto',
      width: '50%',
      marginTop: '10%',
      border:'2px solid',
      padding:50
    }
  }
  return (
    <div style={styles.landing}>

      <Home />
    </div>
  );
}

export default App;
