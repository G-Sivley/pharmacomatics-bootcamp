import React from 'react'

const Navbar = () => {
  return (
   <nav class="bg-background-blue text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap">
            Pharmacomatics Bootcamp
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        {/* Need to make this so it changes from hidden to remove hidden when the button is pressed */}
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-background-blue md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-background-blue">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white bg-accent rounded md:bg-transparent md:text-accent md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 "
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
  )
}

export default Navbar