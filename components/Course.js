import React from "react";

import { sbEditable } from "@storyblok/storyblok-editable";
import DynamicComponent from "./DynamicComponent";
import styles from "../styles/course.module.scss";

const Course = ({ blok }) => {
  return (
    <div {...sbEditable(blok)} className={styles.course}>
      {blok.block.length
        ? blok.block.map((item, i) => <DynamicComponent blok={item} key={i} />)
        : null}
    </div>
  );
};

export default Course;
