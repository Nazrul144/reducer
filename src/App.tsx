import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counters/counterSlice";


function App() {
  const counter = useSelector((store) => store.counter);
  console.log(counter)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>
      <div>
        
        <div className="flex gap-3 mt-4">
          <h3>Counter: {counter}</h3>
          <button className="font-bold border-2 border-amber-800  p-2 rounded-xl cursor-pointer" onClick={handleIncrement}>Increment</button>
          <button className="font-bold border-2 border-amber-800  p-2 rounded-xl cursor-pointer" onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
