import { HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Document } from 'postcss'
import React, { useEffect, useRef, useState } from 'react'
import { AiFillHome, AiOutlineAlignRight, AiOutlineSearch } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { RxCross1, RxCross2 } from 'react-icons/rx'

const NavbarSearch = () => {

    //search
    useEffect(() => {
        const input = document.querySelector('input');
        // const form = document.querySelector('form');
        input.focus();
    }, [])

    const clear = () => {
        if (query.length !== 0) {
            setQuery('');
            inputRef.current.value = '';
        }
    }

    const [query, setQuery] = useState('');

    const inputRef = useRef('')


    //nav

    const mobileView = () => {
        const mv = document.getElementById('mv');
        const toggle = document.getElementById('switch');
        const cross = document.getElementById('cross');
        const ham = document.getElementById('ham');

        if (toggle.innerText === 'ON') {
            toggle.innerText = 'OFF';
            mv.style.display = 'none'
            cross.style.display = 'none'
            ham.style.display = 'block'
            mv.style.height = '0'
        } else {
            ham.style.display = 'none'
            cross.style.display = 'inline'
            toggle.innerText = 'ON';
            mv.style.display = 'block'
            mv.style.height = 'calc( 50vh - 3.84rem )'
        }
    }
    return (
        <nav className='navbarSearch'>
            <div className="one">
                <Link href='/' className='nav-home'>
                    <img src="image2.png" alt="logo" height={30} width={30} />
                    <p className='p'>Coursurf</p>
                </Link>
                <Link href='/about'><p>About</p></Link>
                <Link href='/dev'><p>Filter</p></Link>
            </div>
            <div className="two">
                <div className='search'>
                    <form className='searchLocal' action={`/details/${query.split(' ').join('-')}`}>
                        <Link href={`/details/${query.split(' ').join('-')}`} className='icon'>
                            <AiOutlineSearch className='searchIcon' />
                        </Link>

                        <input type="text" autoFocus className='input' ref={inputRef} placeholder="Search from over 10,000+ courses" onChange={e => setQuery(e.target.value)} />
                        <span className='cross'><RxCross2 onClick={clear} className='crossSvg' /></span>
                    </form>
                </div>
                <div className="buttons">Sign-up</div>
                <div className="buttons">Login</div>
                {/* <p id='switch'></p>
                <AiOutlineAlignRight id='ham' color='#333' size={26} />
                <RxCross1 id='cross' color='#333' size={26} />
                <div layout animate={{ type: 'spring' }} className="mobile-links" id='mv'>
                    <Link href='/about'>About</Link>
                    <Link href='/dev'>Filter</Link>
                    <Link href='/'>SignUp</Link>
                    <Link href='/'>Login</Link>
                </div> */}
            </div>
        </nav>
    )
}

export default NavbarSearch