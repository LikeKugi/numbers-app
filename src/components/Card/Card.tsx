import { FC, JSX } from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

interface ICardProps {
  title: number | string
  description: string
}

const Card: FC<ICardProps> = ({title, description}): JSX.Element => {
  return (
    <div className={styles.card}>
      <Link className={styles.card__link} to={`/${title}`}>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__description}>{`${description.slice(0, 15)}...`}</p>
        <p className={styles.card__more}>Find out more...</p>
      </Link>
    </div>
  );
};
export default Card;
