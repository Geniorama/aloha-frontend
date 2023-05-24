import styles from './PricingCard.module.css';
import ButtonLink from '../ButtonLink/ButtonLink';

export default function PricingCard({title, desc, price, label_price, href}) {
    return (
        <div className={`${styles.PricingCard} p-4`}>
            <div className={styles.PricingCard__content}>
                <h5 className={styles.Title}>{title}</h5>
                <p className={styles.Desc}>{desc}</p>
                <span className={styles.TextFrom}>Desde -</span>
                <h6 className={styles.Price}>
                    <span className={styles.Price__number}>{price} / </span><br />
                    <span className={styles.Price__text}>{label_price}</span>
                </h6>
            </div>
            <button className={`btn btn-primary mt-3 p-3 ${styles.BtnBuyNow}`}>
                <ButtonLink href={href ? href : '/'} text={'Comprar ahora'} color={'white'} size={'s'}/>
            </button>
        </div>
    )
}
