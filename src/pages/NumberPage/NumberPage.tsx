import { JSX, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/store';
import { selectErrorNumber, selectIsLoadingNumber, selectNumber } from '@store/slices/numberSlice';
import { fetchNumber } from '@store/thunk/fetchNumber';
import { selectQueryType } from '@store/slices/querySlice';
import styles from './NumberPage.module.scss';

const NumberPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const title = useParams().number as string;
  const queryType = useAppSelector(selectQueryType);
  const number = useAppSelector(selectNumber);
  const isLoading = useAppSelector(selectIsLoadingNumber);
  const errorMsg = useAppSelector(selectErrorNumber);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchNumber({queryArg: `${title}/${queryType}`, signal}));
    return () => {
      controller.abort()
    }
  }, [dispatch, title, queryType])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (errorMsg) {
    return <p>{errorMsg}</p>
  }

  return (
    <div className={styles.number}>
      <h1 className={styles.number__title}>{title}</h1>
      <div className={styles.number__box}>
        <p className={styles.number__text}>{`${number}`}</p>
        <button className={styles.number__btn} onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
};
export default NumberPage;
