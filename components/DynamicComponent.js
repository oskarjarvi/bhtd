import TwoColumnSection from "./TwoColumnSection";
import Page from "./Page";
import Hero from "./Hero";
import CourseList from "./Courselist";
import Course from "./Course";
import Form from "./Form";
import FormInput from "./FormInput";
import NavigationLink from "./NavigationLink";
import TextColourSection from "./TextColourSection";
import TextWithBackground from "./TextWithBackground";
import TextSection from "./TextSection";
import EducationBlock from "./EducationBlock";
import Grid from "./Grid";
import TextGridColumn from "./TextGridColumn";
import ColourSection from "./ColourSection";
import TextBlock from "./TextBlock";
import VideoBlock from "./VideoBlock";
import ImageList from "./ImageList";
import CourseListItem from "./CourseListItem";
import Section from "./Section";
import TextColumn from "./TextColumn";
import ImageColumn from "./ImageColumn";

// resolve Storyblok components to Next.js components
const Components = {
  twoColumnSection: TwoColumnSection,

  page: Page,
  hero: Hero,
  courselist: CourseList,
  course: Course,
  formSection: Form,
  formInput: FormInput,
  navigationLink: NavigationLink,
  textColourSection: TextColourSection,
  textSection: TextSection,
  textWithBackground: TextWithBackground,
  textColumn: TextColumn,
  imageColumn: ImageColumn,
  educationBlock: EducationBlock,
  grid: Grid,
  textGridColumn: TextGridColumn,
  colourSection: ColourSection,
  textBlock: TextBlock,
  videoBlock: VideoBlock,
  imageList: ImageList,
  courseListItem: CourseListItem,
  section: Section,
};

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} key={blok._uid} />;
  }

  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
