import Image from "next/image";
import styles from "../styles/footer.module.scss";
export default function Footer({ data }) {
  const { content } = data;

  if (content == undefined) {
    return <></>;
  }
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <Image
            src={content.logo.filename}
            alt={"Bedas logo"}
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <div>
          <p>{content.name}</p>
          <p>{content.address}</p>
        </div>
        <div>
          <p>{content.tel}</p>
          <p>{content.email}</p>
        </div>
        <div>
          <pre>{content.openHours}</pre>
        </div>
      </div>
    </>
  );
}
