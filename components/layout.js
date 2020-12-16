import Head from '../components/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Layout = ({ children }) => (
  <div className="bg-white flex flex-col min-h-screen ">
    <header>
      <Head />
      <Navigation/>
    </header>
    
    <main className="flex-grow">
      {children}
    </main>   
    
    <Footer/>
  </div>
)

export default Layout