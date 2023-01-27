'use client'
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Events from './Events';
import styles from './admin.module.scss'
import Slides from './Slides';
import { useEffect, useState } from 'react';
import CrearEvento from '../crear-evento/CrearEvento';
import CrearSlide from '../crear-slides/CrearSlide';

export default function Account() {
    const [events, setEvents] = useState()
    const [slides, setSlides] = useState()
    const [crearSlide, setCrearSlide] = useState(false)
    const [crearEvento, setCrearEvento] = useState(false)
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
                <button onClick={() => setCrearEvento(!crearEvento)}>Crear Evento</button>
                <div>
                    {crearEvento ? <CrearEvento /> : null}
                </div>
            </div>
            <div className={styles.bodyContent}>
                <div className={styles.accountGrid}>
                    <Slides content={slides} />
                </div>
                <button onClick={() => setCrearSlide(!crearSlide)}>Crear Slide</button>
                <div>
                    {crearSlide ? <CrearSlide /> : null}
                </div>
            </div>
        </div>
    )
}