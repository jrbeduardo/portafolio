import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = () => {
  return (
    <div className='content font-sans'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
