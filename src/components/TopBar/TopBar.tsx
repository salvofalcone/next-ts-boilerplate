"use client";

//React & Next
import React from "react";
import Link from "next/link";

//Store
import { ThunkDispatch } from "redux-thunk";
import type { RootState } from "@/store/store";
import { Action } from "redux";
import { useDispatch, useSelector } from "react-redux";

//Style
import styles from "./TopBar.module.scss";
import { topbarActions } from "@/store/features/topbar/topbarSlice";

const TopBar = () => {
  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch();
  const { activePage } = useSelector((state: RootState) => state.topbar);

  return (
    <ul className={styles.main}>
      <li
        className={activePage === "home" ? styles.active : ""}
        onClick={() => dispatch(topbarActions.setActivePage("home"))}>
        <Link href={"/"} replace>
          Home
        </Link>
      </li>
      <li
        className={activePage === "counter" ? styles.active : ""}
        onClick={() => dispatch(topbarActions.setActivePage("counter"))}>
        <Link href={"counter"} replace>
          Counter
        </Link>
      </li>
    </ul>
  );
};

export default TopBar;
