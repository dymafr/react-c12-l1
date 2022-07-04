import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/pages/Homepage';
import styles from './App.module.scss';

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
