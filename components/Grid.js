import React from "react";
import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../styles/grid.module.scss";
import { Wrapper } from "./Wrapper";
const Grid = ({ blok }) => {
  return (
    <div {...sbEditable(blok)} className={styles.wrapper}>
      <h1>{blok.title}</h1>
      <Wrapper>
        <div className={styles.gridContainer}>
          {blok.columns.map((item, index) => (
            <DynamicComponent key={index} blok={item} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Grid;
