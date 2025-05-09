"use client";
import { useState } from "react";
import NavBarItem from "./NavBarItem";
import styles from "./NavBar.module.css";

const DATA = [
  { id: 1, title: "HTML" },
  { id: 2, title: "CSS" },
  { id: 3, title: "JavaScript" },
  { id: 4, title: "SQL" },
  { id: 5, title: "Python" },
];

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className={styles.container}>
      {DATA.map((item) => (
        <NavBarItem
          key={item.id}
          item={item}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
};

export default NavBar;
