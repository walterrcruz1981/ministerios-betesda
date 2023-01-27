'use client'
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Events from './admin/Events';
import styles from './account.module.scss'
import Slides from './admin/Slides';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Account() {
    const [events, setEvents] = useState()
    const [slides, setSlides] = useState()
    const supabase = useSupabaseClient()

    useEffect(() => {
        getEvents(supabase)
        getSlides(supabase)
    }, [])

    async function getEvents(dataProvider) {
        const { data, error } = await dataProvider
            .from('events')
            .select()
            .order('created_at', { ascending: false })

        if (data) { setEvents(data) }
        return data
    }

    async function getSlides(dataProvider) {

        const { data, error } = await dataProvider
            .from('home-slides')
            .select()
            .order('created_at', { ascending: false })
        if (data) { setSlides(data) }
        return data
    }

    return (
        <div className={styles.account}>

            <div className={styles.bodyContent}>
                <div className={styles.accountGrid}>
                    <Events content={events} />
                </div>
                <div className={styles.accountGrid}>
                    <Slides content={slides} />
                </div>
            </div>
        </div>
    )
}