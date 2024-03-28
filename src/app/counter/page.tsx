"use client";

//React & Next
import React, { useState } from "react";

//Components
import BaseButton from "@/components/BaseButton/BaseButton";

//Styles
import styles from "./Counter.module.scss";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <main className={styles.main}>
      <div className={styles.main__counter}>
        <BaseButton
          text="-"
          onClick={() => setCount(count - 1)}
          className="calculator"
        />
        <span>{count}</span>
        <BaseButton
          text="+"
          onClick={() => setCount(count + 1)}
          className="calculator"
        />
      </div>
    </main>
  );
}
