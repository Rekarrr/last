import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useEffect, useState } from 'react'
import Button from './Button'
import { Link, animateScroll as scroll } from 'react-scroll';
import tail from '../assets/logo.svg'



const navigation = [
  { name: 'Home'},
  { name: 'About'},
  { name: 'Skills'},
  { name: 'Education'},
  { name: 'Contact'},
]

export default function Nav() {
  const [theme, setTheme] = useState('System')
  const [isSticky, setIsSticky] = useState(false);


useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  
  const toggleBackground = (isOpen) => {
    if (isOpen) {
      document.body.classList.add('opaque-background');
    } else {
      document.body.classList.remove('opaque-background');
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
   switch(theme){
     case 'Light':
       document.documentElement.classList.remove('dark')
       localStorage.setItem('theme', 'Light')
       break
     case 'Dark':
       document.documentElement.classList.add('dark')
       localStorage.setItem('theme', 'Dark')
       break
     case 'System':
       if(window.matchMedia('(prefers-color-scheme: dark)').matches){
         document.documentElement.classList.add('dark')
       } else {
         document.documentElement.classList.remove('dark')
       }
       break
     default:
       break
   } 
  },[theme])
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  }

  const themeOptions = {
    Light: <ion-icon name="sunny-outline"></ion-icon>,
    Dark: <ion-icon name="moon-outline"></ion-icon>,
    System: <ion-icon name="desktop-outline"></ion-icon>,
  }



  return (
    <Disclosure  as="nav" className={`sticky top-0 left-0 w-full z-10 bg-transparent dark:bg-gray-800 ${isSticky ? 'bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:border-gray-600' : ''} `}>
      {({ open }) => (
        
        <>
        { useEffect(() => {
          toggleBackground(open);
        }, [open])}


          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="dark:text-white relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-indigo-500 hover:text-white focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className=" flex flex-1 items-center justify-center  sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-14 sm:max-md:mr-[-45px] mt-2 w-auto"
                    src={tail}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex sm:max-md:space-x-0 mt-2 space-x-4">
                    {navigation.map((item) => (
                      <Link
                      to={item.name}
                        key={item.name}
                        spy
                        smooth
                        offset={-9}
                        duration={500}
                        activeClass="active"
                        className="cursor-pointer text-black dark:text-white hover:bg-indigo-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               
               {/* Theme switcher */}
               <div className='flex mb-5 mr-2 justify-between items-center hidden sm:block '>
              <div className="flex text-right mt-9">
                <Menu as="div" className="relative inline-block text-left ">
                  <div className='mr-3'>
                    <Menu.Button className=" flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-black dark:text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                      {<div className= ' text-lg font-medium mt-[1px]'>{themeOptions[theme]}</div>}
                    
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-[107px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <div className="px-1 py-1">
                        {Object.keys(themeOptions).map((themeKey) => (
                          <Menu.Item key={themeKey}>
                            {({ active }) => (
                              <button
                                onClick={() => handleThemeChange(themeKey)}
                                className={` flex justify-between gap-3 px-[4px] ${
                                  active
                                    ? 'bg-indigo-500 text-white'
                                    : 'text-black'
                                } group w-full rounded-md px-3 py-2 text-sm`}
                              >
                                <p className=''>{themeKey}</p>
                                <div className="mt-[2px]">
                                  {themeOptions[themeKey]}
                                </div>
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
               
               
                {/* CV downloader button */}
                <a href='Rekar-Resume.pdf' download>
                <Button  text={'Download CV'} />
                </a>
              </div>
            </div>
          </div>

          <DisclosurePanel className={`sm:hidden absolute w-full ${open && 'fixed  bg-opacity-99 backdrop-blur-[4px] z-10'} ` } >
            <div className={`space-y-1 px-2 pb-3 pt-2 transition ${isSticky? "bg-white rounded-md" : ''}  dark:bg-gray-800 rounded-b-md w-full`}>
              {navigation.map((item) => (
                <Link
                to={item.name}
                  key={item.name}
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  className="text-black dark:text-white hover:bg-indigo-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
              <br />
              <hr className="mr-10 border-t-2 border-gray-800 flex w-full" />
            
            <div className='flex w-full justify-between items-center'>
              <p className="text-black font-medium p-3 pt-7 dark:text-white">Switch Theme</p>
              <div className="flex text-right mt-9">
                <Menu as="div" className="relative inline-block text-left ">
                  <div className='mr-3'>
                    <Menu.Button className=" flex w-full justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                      {<div className='mt-[1px]'>{themeOptions[theme]}</div>}
                      <span className="ml-2">{theme}</span>
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-[107px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <div className="px-1 py-1">
                        {Object.keys(themeOptions).map((themeKey) => (
                          <Menu.Item key={themeKey}>
                            {({ active }) => (
                              <button
                                onClick={() => handleThemeChange(themeKey)}
                                className={`flex justify-between gap-3 px-[4px] ${
                                  active
                                    ? 'bg-indigo-500 text-white'
                                    : 'text-black'
                                } group w-full rounded-md px-3 py-2 text-sm`}
                              >
                                <p className=''>{themeKey}</p>
                                <div className="mt-[2px]">
                                  {themeOptions[themeKey]}
                                </div>
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
