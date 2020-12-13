import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <div >
            {/* 
                nav
                    div 
                        icon
                        button
                    refs
            */}

            <nav class="bd-gray-50"> 
                <div class=" flex items-end justify-between px-4 py-3">  
                {/* flex pone los elementos icon y button en linea, a la misma altura con items-end (aplicandole block en button)
                con justify-betwwen los separo y  px y py para padding */}

                    <div> {/* Icon div */}
                        <img class="h-8" src="me.png" alt="logo"></img>
                    </div>

                    <div> {/* Button div */}
                        <button type="button" class=" block text-gray-600 hover:text-gray-900">
                            <svg class="block h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div> 

                <div className="px-4 py-3 pb-4" > {/* Refs div */}
                        <a href="/" class="block text-gray-900 font-semibold"> Alicia</a>          
                        <a href="/projects" class="block text-gray-900 font-semibold"> Projects</a>
                        <a href="/lifestyle" class="block text-gray-900 font-semibold"> Lifestyle</a>
                        <a href="/about" class="block text-gray-900 font-semibold"> About</a> 
                </div>
            </nav>         

        </div>
        
    )
}

export default Navbar
