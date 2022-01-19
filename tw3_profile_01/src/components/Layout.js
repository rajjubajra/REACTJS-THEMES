import Header from './Header';
import Footer from './Footer';


function Layout({children}) {


  return (
    <div className="w-full bg-slate-400 static z-50">
      <div className="z-50 absolute top-0 w-full">
        <Header />
      </div>
    
      {children}

      <div className="mb-bottom-1 text-center w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
