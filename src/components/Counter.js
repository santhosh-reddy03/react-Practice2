import classes from './Counter.module.css';
import { counterActions } from '../store/counter';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter.count);
  const show = useSelector(state => state.counter.show);
  const dispatch = useDispatch();
  // const incrementHandler = () => dispatch({ type: 'INCREMENT' });
  const incrementHandler = () => dispatch(counterActions.increment());
  const decrementHandler = () => dispatch(counterActions.decrement());
  const increaseHandler = () => dispatch(counterActions.increase(10));
  const toggleCounterHandler = () => dispatch(counterActions.toggle());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{ counter }</div> }
      <div>
        <button onClick={ incrementHandler }>INCREMENT</button>
        <button onClick={ increaseHandler }>Increase by 10</button>
        <button onClick={ decrementHandler }>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
