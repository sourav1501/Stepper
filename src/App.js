import React from 'react';
import './App.css';
import CheckoutPage from './components/Checkoutpage/checkoutpage';
import MaterialLayout from './components/Layout/Layout';
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
