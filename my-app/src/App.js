import React from 'react';
import Header from './Header';
import RecipeForm from './RecipeForm';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="main-content">
          <RecipeForm />
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
