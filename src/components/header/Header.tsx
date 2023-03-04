import Nav from "../nav";
import Brand from "./Brand";

import HeaderAuth from "@/features/auth/headerAuth";
import styles from "./header.module.scss";

function header() {
  return (
    <header className={styles.header}>
      <Brand />
      <Nav className={styles.nav} />
      <HeaderAuth />
    </header>
  );
}

export default header;
