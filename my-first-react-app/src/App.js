import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponents from './components/MyComponents';
function App() {
  return (
    <div className="App">
     <MyComponents name="bengisucam"></MyComponents>
     <MyComponents name = "bilgecam"></MyComponents>
     <MyComponents name = "bilgeecam" This is my > children </MyComponents>
     <MyComponents name = "bilgeeecam" This is my > children </MyComponents>

    </div>
  );
}

export default App;
