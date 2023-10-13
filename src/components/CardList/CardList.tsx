import { JSX } from 'react';
import Card from '@components/Card/Card';
import styles from './CardList.module.scss';

const CardList = (): JSX.Element => {
  const cards = new Array(50).fill(5);
  return (
    <div className={styles.list}>
      {cards.map((card, idx) => <Card title={card} description={`${card} is a number`} key={idx}/>)}
    </div>
  );
};
export default CardList;
