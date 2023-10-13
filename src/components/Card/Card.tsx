import { FC, JSX } from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

interface ICardProps {
  title: number
  description: string
}

const Card: FC<ICardProps> = ({title, description}): JSX.Element => {
  return (
    <div className={styles.card}>
      <Link className={styles.card__link} to={'/'}>
        <h2>{title}</h2>
        <p>{`${description.slice(0, 25)}...`}</p>
        <p>Find out more...</p>
      </Link>
    </div>
  );
};
export default Card;
