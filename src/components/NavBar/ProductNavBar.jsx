"use client";
import { useState } from "react";
import NavBarItem from "./NavBarItem";
import styles from "./NavBar.module.css";

const DATA = [
  { id: 1, title: "products", link: "/products" },
  { id: 2, title: "cart", link: "/cart" },
  { id: 3, title: "profile", link: "/profile" },
];

const ProductNavBar = () => {
  const [activeTab, setActiveTab] = useState("products");

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

export default ProductNavBar;
