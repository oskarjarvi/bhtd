import React from "react";
import DynamicComponent from "../components/DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";
import Image from "next/image";
import styles from "../styles/educationBlock.module.scss";

const EducationBlock = ({ blok }) => {
  return (
    <div {...sbEditable(blok)} className={styles.educationsContainer}>
      <div className={styles.container}>
        <h1>{blok.title}</h1>
        <pre>{blok.educationList}</pre>
        <div className={styles.certImagesContainer}>
          {blok.certImages.length &&
            blok.certImages.map((item, index) => (
              <Image
                key={index}
                height={280}
                width={200}
                src={item.image.filename}
                alt={"certification Image"}
                quality={100}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default EducationBlock;
