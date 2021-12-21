import React from "react";
import DynamicComponent from "../components/DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../styles/colourSection.module.scss";

const ColourSection = ({ blok }) => {
  return (
    <div {...sbEditable(blok)} className={styles.container}>
      {blok.content.map((item, i) => (
        <DynamicComponent blok={item} key={i} />
      ))}
    </div>
  );
};

export default ColourSection;
