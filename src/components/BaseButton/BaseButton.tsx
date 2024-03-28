"use client";

import React from "react";

//Style
import styles from "./BaseButton.module.scss";

//Utils
import { BaseButtonInterface } from "@/utils/interfaces";

const BaseButton = ({
  className = "normal",
  text,
  isDisabled = false,
  onClick,
}: BaseButtonInterface) => {
  return (
    <button disabled={isDisabled} onClick={onClick} className={styles[className]}>
      {text}
    </button>
  );
};

export default BaseButton;
