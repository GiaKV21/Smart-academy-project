import styles from "./NavBarItem.module.css";

const NavBarItem = ({ item }) => {
  return (
    <button className={styles.navItem}>
      <div className={styles.icon}>{item.icon}</div>
      <p className={styles.title}>{item.title}</p>
    </button>
  );
};

export default NavBarItem;
