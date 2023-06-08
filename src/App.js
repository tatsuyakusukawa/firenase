import React from 'react';
import { AuthProvider } from './providers/AuthProvider.js';
import './App.css';
import './service/firebase.js';
import Header from './components/header.js';
import Dashboard from './components/dashboard.js';
import Todolist from './components/Todolist.js';
import IconTabs from './components/Footer.js';
import SwiperTab from './components/SwiperTab.js';

function App() {
  return (
    <AuthProvider>

      <Header />
      <SwiperTab/>
      <IconTabs />
    </AuthProvider>
  );
}

export default App;
