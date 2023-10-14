import { JSX, useEffect } from 'react';
import CardList from '@components/CardList/CardList';
import { useAppDispatch, useAppSelector } from '@store/store';
import { selectErrorNumbers, selectIsLoadingNumbers, selectNumbers } from '@store/slices/numbersSlice';
import { fetchNumbers } from '@store/thunk/fetchNumbers';

const HomePage = (): JSX.Element => {
  const isLoading = useAppSelector(selectIsLoadingNumbers);
  const errorMsg = useAppSelector(selectErrorNumbers);
  const numbers = useAppSelector(selectNumbers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchNumbers({ queryArg: `${0}..${19}`, signal }));
    return () => {
      controller.abort();
    }
  }, [dispatch])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (errorMsg) {
    return <p>{errorMsg}</p>
  }

  return (
    <>
      <CardList numbers={numbers} />
    </>
  );
};
export default HomePage;
