import styles from './sermones.module.scss'
import Image from "next/image"
export default async function VideoCard({ content }) {
    const defaultImage = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80'
    const videoDetails = await content;
    const { title, thumbnails } = await videoDetails;
    return (
        <div className={styles.videoCardContainer}>
            <Image height={200} width={300} src={thumbnails.medium?.url || defaultImage} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}