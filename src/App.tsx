import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counters/counterSlice";


function App() {
  const counter = useSelector((store)=> store.value);
  const dispatch = useDispatch()

  const handleIncrement = ()=>{
    dispatch(increment())
  }
  const handleDecrement = ()=>{
    dispatch(decrement())
  }

  return (
    <>
    <div>
      <p>{counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
    </>
  )
}

export default App
