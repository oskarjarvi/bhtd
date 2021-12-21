import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import { NavLinks } from "./Navlinks";

export const DesktopNav = ({ filteredLinks, links, dropdowns }) => {
  return (
    <>
      <Link href="/" passHref>
        <a>
          <Image
            src={"/navLogo.svg"}
            width={150}
            height={30}
            alt={"Bedas logo"}
            className={styles.navLogo}
            quality={100}
          />
        </a>
      </Link>
      <div className={styles.rightContainer}>
        <NavLinks
          links={links}
          dropdowns={dropdowns}
          filteredLinks={filteredLinks}
        />
      </div>
    </>
  );
};
