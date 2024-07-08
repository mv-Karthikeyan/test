"use client";

import { useEffect, useState } from 'react';
import HeaderGuest from '../Header/HeaderGuest';
import HeaderUser from '../Header/HeaderUser';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {isLoggedIn ? '' : <HeaderGuest />}
      <div className="flex flex-1">
          {isLoggedIn && <Sidebar />}
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
