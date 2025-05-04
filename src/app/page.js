import NavBar from "../components/NavBar/NavBar";
import ProductNavBar from "../components/NavBar/ProductNavBar";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <ProductNavBar />
      <div className={styles.container}></div>
    </main>
  );
}
