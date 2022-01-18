import Header from './Header';
import Footer from './Footer';

function Layout({children}) {
  return (
    <div className="w-full h-screen bg-slate-400">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
