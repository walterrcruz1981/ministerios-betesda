import Image from 'next/image'
import Link from 'next/link'
import styles from './cards.module.scss'

function EventCard({ content }) {
    const defaultImage = 'https://images.unsplash.com/photo-1529973625058-a665431328fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    const cdn = 'https://tczhqchszhcthbqeyrgy.supabase.co/storage/v1/object/public/betesda-images/'

    return (
        <Link href={`/eventos/${content.id}`}>
            <div className={styles.eventCard}>
                <Image src={cdn + content.image || defaultImage} width={600} height={300} alt='event card image' />
                <p>{content.title}</p>
                <p className={styles.description}>{content.location}</p>
            </div>
        </Link>
    )
}

export default EventCard