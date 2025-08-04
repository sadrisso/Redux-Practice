"use client";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "@/features/counter/counterSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncByAmount = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-5 border">
      <p>Count: {count}</p>
      <div className="flex flex-col m-3">
        <button
          className="border px-4 py-2 shadow-md m-2 cursor-pointer rounded-lg hover:bg-gray-700"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="border px-4 py-2 shadow-md m-2 cursor-pointer rounded-lg hover:bg-gray-700"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
      <button
        onClick={handleReset}
        className="px-3 py-1 bg-red-400 cursor-pointer hover:bg-red-600 rounded-md "
      >
        Reset
      </button>
      <input
        className="bg-gray-600 text-black px-1 m-2"
        type="number"
        placeholder="Enter Your Amount"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <button
        className="border px-4 py-2 shadow-md m-2 cursor-pointer rounded-lg hover:bg-gray-700"
        onClick={handleIncByAmount}
      >
        Increment By Amount
      </button>
    </div>
  );
}
