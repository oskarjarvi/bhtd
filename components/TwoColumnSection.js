import React, { useState, useEffect } from "react";
import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../styles/column.module.scss";
import useWindowSize from "../utils/hooks";
import { Storyblok } from "../lib/storyblok";
import { useSpring, animated } from "react-spring";

const TwoColumnSection = ({ blok }) => {
  const size = useWindowSize();
  const [mobileDropDown, setMobileDropDown] = useState({
    title: "",
    imageUrl: "",
    textContent: "",
  });
  const [openDropDown, setOpenDropDown] = useState(false);
  const [contentMaxHeight, setContentMaxHeight] = useState(0);

  const dropdownProps = useSpring({
    from: { height: 0, opacity: 0.8 },
    to: {
      height: openDropDown ? 500 : 0,
      opacity: openDropDown ? 1 : 0.8,
    },
    config: { duration: 500 },
  });

  const formatArray = () => {
    if (blok.leftColumn[0].component == "textColumn") {
      setMobileDropDown({
        title: blok.leftColumn[0].columnTitle,
        imageUrl: blok.rightColumn[0].image.filename,
        textContent: blok.leftColumn[0].textContent,
      });
    } else {
      setMobileDropDown({
        title: blok.rightColumn[0].columnTitle,
        imageUrl: blok.leftColumn[0].image.filename,
        textContent: blok.rightColumn[0].textContent,
      });
    }
  };
  useEffect(() => {
    if (size.width < 600) {
      formatArray();
    }
  }, [size]);
  function createMarkup(storyblokHTML) {
    return {
      __html: Storyblok.richTextResolver.render(storyblokHTML),
    };
  }

  const RichTextField = ({ data }) => {
    return <div dangerouslySetInnerHTML={createMarkup(data)} />;
  };
  return size.width > 600 ? (
    <div {...sbEditable(blok)} className={styles.gridContainer}>
      <div className={styles.columnContainer}>
        {blok.leftColumn.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
      </div>
      <div className={styles.columnContainer}>
        {blok.rightColumn.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </div>
  ) : (
    <div className={styles.gridContainer}>
      <div
        className={`${styles.toggleContainer}`}
        onClick={() => setOpenDropDown(!openDropDown)}
      >
        <p>{mobileDropDown.title}</p>
      </div>
      <animated.div
        style={{
          ...dropdownProps,
          backgroundImage: `url(${mobileDropDown.imageUrl})`,
        }}
        className={styles.dropDownContainer}
      >
        <div className={styles.textContentContainer}>
          <RichTextField data={mobileDropDown.textContent} />
        </div>
      </animated.div>
    </div>
  );
};

export default TwoColumnSection;
