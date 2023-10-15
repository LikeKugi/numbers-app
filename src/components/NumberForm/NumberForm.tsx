import { ChangeEvent, FormEvent, JSX, useId, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/store';
import { selectQueryType, setQueryType } from '@store/slices/querySlice';
import { QueryType } from '@/types/store/querySliceTypes';
import styles from './NumberForm.module.scss';
import { useNavigate } from 'react-router-dom';

const NumberForm = (): JSX.Element => {
  const queryType = useAppSelector(selectQueryType);
  const [activeType, setActiveType] = useState<QueryType>(queryType);
  const inputId = useId();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [queryNumberValue, setQueryNumberValue] = useState<number | string>('');

  const activeTypeHandler = (type: QueryType) => {
    if (type === activeType) return;
    setActiveType(type);
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const numberValue = e.target.value;
    if (numberValue.length === 0) {
      setQueryNumberValue('');
      return;
    }
    if (!Number.isFinite(+numberValue)) {
      setQueryNumberValue('');
      return;
    }
    setQueryNumberValue(+numberValue);
  };

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (activeType !== queryType) {
      dispatch(setQueryType(activeType));
    }
    navigate(`/${queryNumberValue}`);
  }

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles.form__actions}>
        <button className={`${styles.form__btn} ${activeType === 'trivia' ? styles.active : ''}`}
                onClick={() => activeTypeHandler('trivia')}>Trivia
        </button>
        <button className={`${styles.form__btn} ${activeType === 'math' ? styles.active : ''}`}
                onClick={() => activeTypeHandler('math')}>Math
        </button>
        <button className={`${styles.form__btn} ${activeType === 'year' ? styles.active : ''}`}
                onClick={() => activeTypeHandler('year')}>Year
        </button>
        <button className={`${styles.form__btn} ${activeType === 'date' ? styles.active : ''}`}
                onClick={() => activeTypeHandler('date')}>Date
        </button>
      </div>
      <label className={styles.form__label} htmlFor={inputId}>Learn about number: </label>
      <input className={styles.form__input}
             type="number"
             id={inputId}
             placeholder={'Number...'}
             value={queryNumberValue}
             onChange={inputHandler}/>
      <button className={styles.form__btn}
              type={'submit'}>Learn
      </button>
    </form>
  );
};
export default NumberForm;
