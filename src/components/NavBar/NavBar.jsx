import styles from "./NavBar.module.css";
import NavBarItem from "./NavBarItem";

const DATA = [
  { id: 1, title: "Home", icon: "🏠" },
  { id: 2, title: "Dashboards", icon: "📊" },
  { id: 3, title: "Segments", icon: "👥" },
  { id: 4, title: "Account", icon: "👤" },
  { id: 5, title: "Settings", icon: "⚙️" },
];

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      {DATA.map((item) => (
        <NavBarItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NavBar;
