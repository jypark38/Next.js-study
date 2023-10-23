"use client";
import { useState } from "react";

export default function List() {
  const product = ["Tomato", "Pasta", "Coconut"]; //db에서 가져왔다고 가정
  const [numbers, setNumbers] = useState([0, 0, 0]);

  return (
    <div>
      <h2>Product</h2>

      {product.map((item, idx) => (
        <div className="food" key={idx}>
          <img src={`/food${idx}.png`} alt="" className="food-img" />
          <h4>{item} $40</h4>
          <button
            onClick={() => {
              const copy = [...numbers];
              copy[idx]--;
              setNumbers(copy);
            }}
          >
            -
          </button>
          <span> {numbers[idx]} </span>
          <button
            onClick={() => {
              const copy = [...numbers];
              copy[idx]++;
              setNumbers(copy);
            }}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}
