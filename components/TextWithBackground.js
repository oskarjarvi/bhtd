import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../styles/textWithBackground.module.scss";
import { Storyblok } from "../lib/storyblok";
import DynamicComponent from "./DynamicComponent";

const TextWithBackground = ({ blok }) => {
  function createMarkup(storyblokHTML) {
    return {
      __html: Storyblok.richTextResolver.render(storyblokHTML),
    };
  }

  const RichTextField = ({ data }) => {
    return <div dangerouslySetInnerHTML={createMarkup(data)} />;
  };

  return (
    <div
      {...sbEditable(blok)}
      style={{ backgroundImage: `url(${blok.backgroundImage.filename})` }}
      className={styles.container}
    >
      {blok.title !== "" && <h1>{blok.title}</h1>}
      <div className={styles.textWrapper}>
        <pre className={styles.text}>
          <RichTextField data={blok.textContent} />
        </pre>
      </div>
    </div>
  );
};

export default TextWithBackground;
