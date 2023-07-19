import { Outlet } from 'react-router-dom';

// components
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTopBtn from "./ScrollToTopBtn";


export default function LayoutWithNav() {
    return (
      <>
        <Header/>
        <div className='container my-5'>
          <Outlet />
        </div>
        <Footer />
        <ScrollToTopBtn />
      </>
    )
  }