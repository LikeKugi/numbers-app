import { FormEvent, JSX, useId, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/store';
import { selectMaxNumbers, selectQueryInitialNumber, setQueryInitialNumber } from '@store/slices/querySlice';
import styles from './Pagination.module.scss';

type PaginationActionType = 'prev' | 'next'


const Pagination = (): JSX.Element => {
  const initialNumber = useAppSelector(selectQueryInitialNumber);
  const maxNumbersAtPage = useAppSelector(selectMaxNumbers);
  const dispatch = useAppDispatch();

  const [number, setNumber] = useState(initialNumber);

  const maxNumber = initialNumber + maxNumbersAtPage - 1;

  const inputId = useId();

  const paginationHandler = (action: PaginationActionType) => {
    switch (action) {
      case 'prev':
        dispatch(setQueryInitialNumber(initialNumber - maxNumbersAtPage));
        return;
      case 'next':
        dispatch(setQueryInitialNumber(initialNumber + maxNumbersAtPage))
        return;
      default:
        return;
    }
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (!Number.isFinite(+number)) return;
    dispatch(setQueryInitialNumber(number));
  }

  return (
    <div className={styles.pagination}>
      <button className={styles.pagination__btn} onClick={() => paginationHandler('prev')}>Previous</button>
      <form className={styles.pagination__form} onSubmit={submitHandler}>
        <label htmlFor={inputId}>{initialNumber}..{maxNumber}</label>
        <input className={styles.pagination__input} id={inputId} type="number" value={number} onChange={(e) => setNumber(+e.target.value)}/>
      </form>
      <button className={styles.pagination__btn} onClick={() => paginationHandler('next')}>Next</button>
    </div>
  );
};
export default Pagination;
