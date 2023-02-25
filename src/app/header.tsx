import Brand from "./brand";
import Nav from "./nav";

import styles from "./header.module.scss";

function header() {
  return (
    <header className={styles.header}>
      <Brand />
      <Nav />
    </header>
  );
}

export default header;
