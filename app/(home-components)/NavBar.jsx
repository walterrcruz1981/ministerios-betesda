'use client'
import styles from './home.module.scss'
import logo from '../../public/images/logo/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { FcMenu, FcMinus } from 'react-icons/fc';
import { menuLinks as navLinks } from './menuLinks'
import { FaSignOutAlt } from 'react-icons/fa'


import { useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const NavBar = () => {

    const session = useSession()
    const supabase = useSupabaseClient()

    const logoLink = '/'
    const [activeNav, setActiveNav] = useState(true)

    return (
        <div className={styles.navbarContainer}>

            <div className={styles.logo}>
                <Link href={logoLink}>
                    <Image width={75} height={75} src={logo} alt='logo' />
                </Link>
            </div>
            <div className={styles.navLinks}>
                {navLinks.map((link, index) => (
                    <Link key={index} href={link.url}>{link.name}</Link>
                ))}
                <div className={styles.admin}>
                    {session ? <Link href={'/account'}>Admin</Link> : null}
                    {session ? <FaSignOutAlt onClick={() => supabase.auth.signOut()} /> : null}
                </div>
            </div>
            <div className={styles.mobileNav}>
                {!activeNav ? <FcMinus onClick={() => setActiveNav(!activeNav)} className={styles.hamburger} /> :
                    < FcMenu onClick={() => setActiveNav(!activeNav)} className={styles.hamburger} />
                }
                {!activeNav ? <div className={styles.menuLinks}>
                    {navLinks.map(link => (
                        <Link key={link.name} href={link.url} onClick={() => setActiveNav(!activeNav)}>{link.name}</Link>
                    ))}
                    <div className={styles.admin}>
                        {session ? <Link href={'/account'}>Admin</Link> : null}
                        {session ? <FaSignOutAlt onClick={() => supabase.auth.signOut()} /> : null}
                    </div>
                </div> : null}
            </div>


        </div>
    )
}

export default NavBar