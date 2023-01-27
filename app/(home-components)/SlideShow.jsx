'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import styles from './home.module.scss'
import Image from 'next/image';
import somosImage from '../../public/images/hero/somos.webp'
import ministeriosImage from '../../public/images/ministerios/media.webp'
import Link from 'next/link';

export default function SlideShow({ content }) {
    const cdn = 'https://tczhqchszhcthbqeyrgy.supabase.co/storage/v1/object/public/betesda-images/'

    return (
        <Splide options={{ arrows: false, gap: 1 }}>
            {content?.map(slide => (
                <SplideSlide key={slide.id} className={styles.slide}>
                    <Link href={slide.url}><button className='primary-button'>{slide.buttonText}</button></Link>
                    <Image src={cdn + slide.image || somosImage} width={1000} height={500} alt='somos  image' priority />
                </SplideSlide >
            ))}
            <SplideSlide className={styles.slide}>
                <Link href={'/ministerios/betesda-media'}><button className='primary-button'>Ministerio de Media</button></Link>
                <Image src={ministeriosImage} width={1200} height={600} alt='media image' />
            </SplideSlide>

        </Splide>
    )
}