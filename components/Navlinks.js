import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import useWindowSize from "../utils/hooks";
import { NavLink } from "./NavLink";

export const NavLinks = ({ filteredLinks, links, dropdowns, setMenuClose }) => {
  return (
    <>
      {filteredLinks.length &&
        filteredLinks.map((item, i) => (
          <NavLink key={i} href={item.real_path} name={item.name} />
        ))}
      {dropdowns.length &&
        dropdowns.map((dropdownItem, index) => (
          <NavLink
            key={index}
            name={dropdownItem.name}
            slug={dropdownItem.slug}
          >
            <ul key={index}>
              {links
                .filter((item) => item.parent_id == dropdownItem.id)
                .map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.real_path} name={link.name} />
                  </li>
                ))}
            </ul>
          </NavLink>
        ))}
    </>
  );
};
