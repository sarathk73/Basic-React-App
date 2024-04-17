   // In src/components/Layout.js
   import React from 'react';
   import Header from './Header';
   import Footer from './Footer';
   import Navbar from './Navbar';

   const Layout = ({ children }) => (
     <>
       <Header />
       <Navbar />
       <main>{children}</main>
       <Footer />
     </>
   );

   export default Layout;