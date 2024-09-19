import Header from "../components/header/header";
import Table from "../components/table/table";
import styles from "./app.module.css";

const Page = () => {
  return (
    <main className={styles.app}>
      <Header />
      <Table />
    </main>
  );
};

export default Page;
