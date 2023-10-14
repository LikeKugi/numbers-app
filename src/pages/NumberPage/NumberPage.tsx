import { JSX, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/store';
import { selectErrorNumber, selectIsLoadingNumber, selectNumber } from '@store/slices/numberSlice';
import { fetchNumber } from '@store/thunk/fetchNumber';

const NumberPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const title = useParams().number as string;
  const number = useAppSelector(selectNumber);
  const isLoading = useAppSelector(selectIsLoadingNumber);
  const errorMsg = useAppSelector(selectErrorNumber);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchNumber({queryArg: title, signal}));
    return () => {
      controller.abort()
    }
  }, [dispatch, title])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (errorMsg) {
    return <p>{errorMsg}</p>
  }

  return (
    <div>
      <h1>{JSON.stringify(number)}</h1>
    </div>
  );
};
export default NumberPage;
