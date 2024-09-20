import Image from "next/image";
import styles from "./header.module.css";
import logo from "../header/logo/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titlesConteiner}>
        <h1 className={styles.title}>Тестовое задание</h1>
        <h2 className={styles.subTitle}>Frontend-разработчик: Малинов Роман Владиславович</h2>
      </div>
      <Image className={styles.logo} src={logo} alt="Логотип" />
    </header>
  );
};

export default Header;
