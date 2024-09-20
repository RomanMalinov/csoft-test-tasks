import Header from "../components/header/header";
import Table from "../components/table/table";
import styles from "./page.module.css";

const Page = () => {
  return (
    <main className={styles.page}>
      <Header />
      <Table />
    </main>
  );
};

export default Page;
