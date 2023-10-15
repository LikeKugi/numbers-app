import { JSX, useEffect } from 'react';
import CardList from '@components/CardList/CardList';
import { useAppDispatch, useAppSelector } from '@store/store';
import { selectErrorNumbers, selectIsLoadingNumbers, selectNumbers } from '@store/slices/numbersSlice';
import { fetchNumbers } from '@store/thunk/fetchNumbers';
import { selectQueryInitialNumber, selectMaxNumbers } from '@store/slices/querySlice';
import Pagination from '@components/Pagination/Pagination';

const HomePage = (): JSX.Element => {
  const isLoading = useAppSelector(selectIsLoadingNumbers);
  const errorMsg = useAppSelector(selectErrorNumbers);
  const numbers = useAppSelector(selectNumbers);
  const initialNumber = useAppSelector(selectQueryInitialNumber);
  const maxNumbers = useAppSelector(selectMaxNumbers);
  const maxNumber = initialNumber + maxNumbers - 1;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchNumbers({ queryArg: `${initialNumber}..${maxNumber}`, signal }));
    return () => {
      controller.abort();
    };
  }, [dispatch, initialNumber, maxNumber]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMsg) {
    return <p>{errorMsg}</p>;
  }

  return (
    <>
      <CardList numbers={numbers}/>
      <Pagination/>
    </>
  );
};
export default HomePage;
