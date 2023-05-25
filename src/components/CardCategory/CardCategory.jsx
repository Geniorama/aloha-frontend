import styles from './CardCategory.module.css';
import Image from 'next/image';
import ExampleImage from '../../../public/img/home/image 113.jpg';
import Link from 'next/link';

export default function CardCategory({link_position, size, text}) {
  return (
    <div className={`${styles.CardCategory} ${styles[size]}`}>
        <Link href={"/"} className={`${styles.CardCategory__link} ${styles[link_position]}`}>
            <span className={styles.CardCategory__link__text}>
                {text}
            </span>
            <span className={styles.CardCategory__link__arrow}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_396_1127)">
                <path d="M28.332 28.3346L11.6654 11.668" stroke="#222222" strokeWidth="3.33333"/>
                <path d="M28.332 13.334L28.332 28.334L13.332 28.334" stroke="#222222" strokeWidth="3.33333"/>
                </g>
                <defs>
                <clipPath id="clip0_396_1127">
                <rect width="40" height="40" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </span>
        </Link>
       <Image 
            src={ExampleImage}
            fill
            style={{objectFit: 'cover'}}
       /> 
    </div>
  )
}
