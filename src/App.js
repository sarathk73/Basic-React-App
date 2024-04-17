   // src/App.js
   import React from 'react';
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import Layout from './components/Layout';
   import Home from './pages/Home';
   import Services from './pages/Services';
   import About from './pages/About';
   import Contact from './pages/Contact';

   const App = () => {
     return (
       <Router>
         <Layout>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/services" element={<Services />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
           </Routes>
         </Layout>
       </Router>
     );
   };

   export default App;