import { FC, JSX } from 'react';
import Card from '@components/Card/Card';
import styles from './CardList.module.scss';
import { INumbers } from '@/types/store/numbersSliseTypes';

interface ICardListProps {
  numbers: INumbers,
}

const CardList: FC<ICardListProps> = ({numbers}): JSX.Element => {
  return (
    <div className={styles.list}>
      {Object.entries(numbers).sort((a, b) => +a[0] - +b[0]).map(([number, description], idx) => <Card title={number} description={`${description} is a number`} key={idx}/>)}
    </div>
  );
};
export default CardList;
