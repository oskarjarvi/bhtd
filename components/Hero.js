import React from "react";
import Image from "next/image";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../styles/hero.module.scss";
import DynamicComponent from "./DynamicComponent";
import { useSpring, animated } from "react-spring";
import useWindowSize from "../utils/hooks";

const Hero = ({ blok }) => {
  const size = useWindowSize();

  const imgProps = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.2)" },
    config: { duration: 5000 },
  });

  const logoProps = useSpring({
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(0%)" },
  });
  const navProps = useSpring({
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0%)" },
  });

  return (
    <div {...sbEditable(blok)} className={styles.heroContainer}>
      <animated.div
        className={styles.heroImage}
        style={{
          ...imgProps,
          backgroundImage: `url(${blok.Image.filename})`,
        }}
      />

      {blok.logo.id ? (
        <div className={styles.logoContainer}>
          <animated.div className={styles.logo} style={logoProps}>
            <Image
              src={blok.logo.filename}
              alt={blok.alt}
              layout={"fill"}
              quality={100}
              objectFit="cover"
            />
          </animated.div>
        </div>
      ) : null}
      {blok.text !== "" ? (
        <h1 className={styles.heroText}>{blok.text}</h1>
      ) : null}
      {blok.links.length ? (
        <div className={styles.navLinkContainer}>
          <animated.div className={styles.linkContainer} style={navProps}>
            {blok.links.map((link, index) => (
              <DynamicComponent key={index} blok={link} />
            ))}
          </animated.div>
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
