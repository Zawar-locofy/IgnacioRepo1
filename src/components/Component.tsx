import { FunctionComponent } from "react";
import styles from "./Component.module.css";
const Component: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.email}>Email</div>
    </div>
  );
};

export default Component;
