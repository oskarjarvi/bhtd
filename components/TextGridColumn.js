import { sbEditable } from "@storyblok/storyblok-editable";
import { Storyblok } from "../lib/storyblok";
import styles from "../styles/grid.module.scss";

const TextGridColumn = ({ blok }) => {
  function createMarkup(storyblokHTML) {
    return {
      __html: Storyblok.richTextResolver.render(storyblokHTML),
    };
  }

  const RichTextField = ({ data }) => {
    return <div dangerouslySetInnerHTML={createMarkup(data)} />;
  };

  return (
    <div {...sbEditable(blok)} className={styles.column}>
      <pre>
        <RichTextField data={blok.textContent} />
      </pre>
    </div>
  );
};
export default TextGridColumn;
