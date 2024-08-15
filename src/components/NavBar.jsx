import React, {useState} from "react"
import Logo from '../assets/phase3-logo.png'
import {Link} from 'react-router-dom'



const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
    return (
        
        <div className=''>
    <header className='  bg-white sm:flex sm:justify-between'>
      <div className=' flex bg-white px-4 py-3 align-items justify-between'>
        <div><Link to="/">
        <img src={Logo} alt="Logo" />
        </Link>
        </div>

        <div className='sm:hidden'>
          <button onClick={() => handleClick()}>
            {
              isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg>) : (
                <svg className="w-5" viewBox="0 0 100 80" width="40" height="40">
                  <rect width="100" height="20"></rect>
                  <rect y="30" width="100" height="20"></rect>
                  <rect y="60" width="100" height="20"></rect>
                </svg>
              )
            }
          </ button>
        </div>
      </div>
      <nav className={isOpen ? 'block px-2 pt-2 pb-4 ' : 'hidden sm:flex align-items justify-around px-4 py-3' }>
        <Link to="/login" className='block px-6 py-2 font-semibold rounded hover:bg-gray-200 hover:rounded-full sm:mr-3 sm:mt-0'>Login</Link>
        <Link to="/service-request" className='block px-6 py-2 font-semibold rounded hover:bg-gray-200 hover:rounded-full sm:mr-3 sm:mt-0'>Request for Service</Link>
      </nav>
    </header>

           
  </div>
)
}

export default Navbar