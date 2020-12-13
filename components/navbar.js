import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <div>
            <ul classname='menu'>
                <li>
                    <Link href="/"> Alicia</Link>
                </li>
                <li>
                    <Link href="/projects"> Projects</Link>
                </li>
                <li>
                    <Link href="/lifestyle"> Lifestyle</Link>
                </li>
                <li>
                    <Link href="/about"> About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
