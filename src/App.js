import React from 'react';
import Header from './components/header/header'
import './App.css';
import CheckoutPage from './components/Checkoutpage/checkoutpage';
import MaterialLayout from './components/Layout/Layout';

import Footer from './components/footer/footer'
function App() {
  return (
    <div className="App">
      <MaterialLayout>
        <CheckoutPage />
      </MaterialLayout>
    </div>
  );
}

export default App;
