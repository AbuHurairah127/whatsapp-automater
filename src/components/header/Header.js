import React from "react";
import { styles } from "./HeaderStyles";
const Header = () => {
  return (
    <div style={styles.container}>
      <a style={styles.link} href="/">
        Whatsapp Message Sender
      </a>
    </div>
  );
};

export default Header;
