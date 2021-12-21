import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/navbar.module.scss";
import useWindowSize from "../utils/hooks";
import { NavLinks } from "./Navlinks";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export default function Navbar({ children, links }) {
  const size = useWindowSize();

  const [dropdownItems, setDropdownItems] = useState([]);
  const [newLinks, setNewLinks] = useState([]);

  useEffect(() => {
    let dropdownParent = links.length && links.filter((item) => item.is_folder);
    let filteredList =
      links.length &&
      links.filter((item) => !item.is_folder && item.parent_id != 89193917);

    setNewLinks(filteredList);
    setDropdownItems(dropdownParent);
  }, [links]);

  return (
    <nav className={styles.navbar}>
      {size.width > 768 ? (
        <DesktopNav
          links={links}
          dropdowns={dropdownItems}
          filteredLinks={newLinks}
        />
      ) : (
        <MobileNav
          links={links}
          dropdowns={dropdownItems}
          filteredLinks={newLinks}
        />
      )}
    </nav>
  );
}
