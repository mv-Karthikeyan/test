"use client";

import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import HeaderGuest from '../Header/HeaderGuest';
import HeaderUser from '../Header/HeaderUser';

interface LayoutProps {
  children: ReactNode;
  isDashboard?: boolean;
  isLoggedIn?: boolean;
}

const Layout = ({ children, isDashboard = false, isLoggedIn = false }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        {isLoggedIn ? <HeaderUser /> : <HeaderGuest />}
      </header>
      <div className="flex flex-1 overflow-hidden mt-10">
        {isDashboard && <Sidebar />}
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
