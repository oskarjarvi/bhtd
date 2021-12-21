import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../styles/text.module.scss";
import { Storyblok } from "../lib/storyblok";
import DynamicComponent from "./DynamicComponent";
import { Wrapper } from "./Wrapper";
const TextSection = ({ blok }) => {
  function createMarkup(storyblokHTML) {
    return {
      __html: Storyblok.richTextResolver.render(storyblokHTML),
    };
  }

  const RichTextField = ({ data }) => {
    return <div dangerouslySetInnerHTML={createMarkup(data)} />;
  };

  return (
    <div {...sbEditable(blok)} className={styles.textContainer}>
      <Wrapper>
        <div className={styles.textWrapper}>
          <pre className={styles.text}>
            <RichTextField data={blok.content} />
          </pre>
          {blok.link.length
            ? blok.link.map((link, index) => (
                <DynamicComponent key={index} blok={link} />
              ))
            : null}
        </div>
      </Wrapper>
    </div>
  );
};

export default TextSection;
