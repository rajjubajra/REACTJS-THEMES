import Header from './Header';
import Footer from './Footer';

function Layout({children}) {
  return (
    <div className="w-full h-screen bg-slate-400 static">
      <Header />
      {children}

      <div className="absolute bottom-1 text-center w-full">
        <Footer />
      </div>
      
    </div>
  )
}

export default Layout
