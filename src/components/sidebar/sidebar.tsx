import React, { useContext } from 'react'
import { Link } from 'gatsby'
import Logo from './logo.inline.svg'
import { Search, Categories } from '../filter'
import { FilterContext } from '../../state'
import Skip from './skip'
import './sidebar.css'

const Sidebar = () => {
  const { query, results } = useContext(FilterContext)

  return (
    <div className='hidden lg:block lg:w-1/5 xl:w-1/6 py-4 my-2 xl:px-4 lg:pl-6 lg:pr-3 px-4 relative'>
      <Skip />
      <header>
        <h1 className='w-12 pt-1'>
          <Link
            to='/'
            className='logo-dark-300 focus:outline-none focus:text-main'
          >
            <Logo className='stroke-current hover:text-main transition-slow' />
          </Link>
        </h1>
        <p className='pt-4 pb-2'>
          <span className='block py-1'>
            Hi, welcome to Bartol's personal cyberspace!
          </span>
          <span className='block py-1'>
            Here are my thoughts and notes about web development.
          </span>
        </p>
        <Search />
        {query && !!results.length && <Skip />}
      </header>
      <Categories />
      <footer className='absolute bottom-0 right-0 mb-4 text-right'>
        <a href='https://github.com/bartol' className='mr-3 link'>
          GitHub
        </a>
        <Link to='/rss.xml' className='link'>
          RSS
        </Link>
        <span className='block text-dark-500'>© 2019 Bartol Deak</span>
      </footer>
    </div>
  )
}

export default Sidebar
