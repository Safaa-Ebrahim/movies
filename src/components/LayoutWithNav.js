import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from 'react-router-dom';


export default function LayoutWithNav() {
    return (
      <>
        <Header/>
        <div className='container my-5'>
          <Outlet />
        </div>
        <Footer/>
      </>
    )
  }