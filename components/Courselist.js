import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import DynamicComponent from "./DynamicComponent";
import styles from "../styles/courseList.module.scss";

const CourseList = ({ blok }) => {
  let courseList = blok.list;

  return (
    <div {...sbEditable(blok)} className={styles.courseListContainer}>
      <div className={styles.courseListHeader}>
        <h1>Kursutbud</h1>
      </div>
      {courseList.map((item, key) => (
        <DynamicComponent key={key} blok={item} />
      ))}
    </div>
  );
};

export default CourseList;
