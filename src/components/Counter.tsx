import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  incrementAsync,
  selectCounter,
} from "../store/basicSlice";
import { AppDispatch } from "../store/store";

export default function Counter() {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}
