import { FC } from "react";
import styles from "./page.module.scss";
import StockResume from "./_components/stock";

interface pageProps {}

const ComponentName: FC<pageProps> = ({}) => {
  return (
    <div className={styles.page}>
      <div className={styles.homeLeftBloc}>
        <StockResume />
      </div>
      <div className={styles.homeRightBloc}></div>
    </div>
  );
};

export default ComponentName;
