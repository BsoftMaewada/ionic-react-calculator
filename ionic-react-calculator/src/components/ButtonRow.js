import React from "react";
import { IonRow } from "@ionic/react";
import styles from "./ButtonRow.css";

const ButtonRow = (props) => (
  <IonRow className={styles.buttonRow}>{props.children}</IonRow>
);

export default ButtonRow;
