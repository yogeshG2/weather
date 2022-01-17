import React from 'react'
import Home from './Pages/Home';

function App() {
  const styles = {
    landing: {
      margin: 'auto',
      width: 800,
      marginTop: '5%',
      border:'2px solid',
      padding:50,
      height:500,
      justifyContent:"center",
      display:'flex'
    }
  }
  return (
    <div style={styles.landing}>

      <Home />
    </div>
  );
}

export default App;