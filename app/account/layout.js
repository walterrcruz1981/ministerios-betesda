
'use client'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import styles from './account.module.scss'
import Login from './Login'
import Image from 'next/image'
import { FaSignOutAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function RootLayout({ children }) {
    const cdn = 'https://tczhqchszhcthbqeyrgy.supabase.co/storage/v1/object/public/avatars/'
    const session = useSession()
    const supabase = useSupabaseClient()
    const [profile, setProfile] = useState()
    useEffect(() => {
        if (session) {
            getProfiles()
        }


    }, [session])
    async function getProfiles() {
        const { data } = await supabase.from('profiles')
            .select('full_name, avatar_url')
            .match({ 'id': session.user.id })
            .single()
        if (data) {
            setProfile(data)
        }
    }

    return (
        <div className={styles.accountContainer}>
            {!session ? (
                <div className={styles.login}><Login /></div>

            ) : (
                <div>
                    <div className={styles.titleArea}>
                        <h4>Ministerios Betesda</h4>
                        <div className={styles.userInfo}>
                            <Image src={cdn + profile?.avatar_url || ''} width={50} height={50} alt='avatar image' />
                            <h3>Hola {profile?.full_name}</h3>
                            <FaSignOutAlt className={styles.signOut} onClick={() => supabase.auth.signOut()} />
                        </div>
                    </div>
                    <>
                        <Link href={'/account/evento'}>Crear Eventos</Link>
                        <Link href={'/account/slides'}>Crear Slides</Link>
                        {children}</>
                </div>
            )}
        </div>
    )
}