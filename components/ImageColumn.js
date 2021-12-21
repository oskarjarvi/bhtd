import React from "react";
import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";
import Image from "next/image";
import styles from "../styles/column.module.scss";
import { Storyblok } from "../lib/storyblok";

const ImageColumn = ({ blok }) => {
  return (
    <div
      {...sbEditable(blok)}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {blok.image.id && (
        <Image
          layout={"fill"}
          objectFit={"cover"}
          src={blok.image.filename}
          alt={"column image"}
          quality={100}
        />
      )}
    </div>
  );
};

export default ImageColumn;
