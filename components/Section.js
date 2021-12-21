import React from "react";
import DynamicComponent from "../components/DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../styles/section.module.scss";

const Section = ({ blok }) => {
  return (
    <div {...sbEditable(blok)} className={styles.container}>
      {blok.blocks.map((item, i) => (
        <DynamicComponent blok={item} key={i} />
      ))}
    </div>
  );
};

export default Section;
