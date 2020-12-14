import Head from '../components/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Layout = ({ children }) => (
  <div className="bg-gray-300">
    <Head />
    <Navigation />
    {children}
    <Footer />
  </div>
)

export default Layout