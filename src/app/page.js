"use client"
import { decrement, increment } from "@/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-5 border">
      <p>Count: {count}</p>
      <div className="flex flex-col m-3">
        <button className="border px-4 py-2 shadow-md m-2 cursor-pointer rounded-lg hover:bg-gray-700" onClick={handleIncrement}>Increment (+)</button>
        <button className="border px-4 py-2 shadow-md m-2 cursor-pointer rounded-lg hover:bg-gray-700" onClick={handleDecrement}>Decrement (-)</button>
      </div>
    </div>
  );
}
