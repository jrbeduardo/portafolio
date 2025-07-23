import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import FloatingWhatsAppButton from './FloatingWhatsAppButton'

export const Layout = () => {
  return (
    <div className='content font-sans'>
        <Header/>
        <Outlet/>
        <Footer/>
        <FloatingWhatsAppButton />
    </div>
  )
}
