"use client";

import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("home");

  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }

  return (
    <div>
      <button
        onClick={() => handleTabClick("home")}
        style={{ fontWeight: activeTab === "home" ? "bold" : "normal" }}
      >
        Home
      </button>

      <button
        onClick={() => handleTabClick("about")}
        style={{ fontWeight: activeTab === "about" ? "bold" : "normal" }}
      >
        About
      </button>

      <button
        onClick={() => handleTabClick("contact")}
        style={{ fontWeight: activeTab === "contact" ? "bold" : "normal" }}
      >
        Contact
      </button>

      <div>
        {activeTab === "home" && <p>This is Home page.</p>}
        {activeTab === "about" && <p>This is About page.</p>}
        {activeTab === "contact" && <p>This is Contact page.</p>}
      </div>
    </div>
  );
}

export default Tabs;
