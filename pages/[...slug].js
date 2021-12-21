import React from "react";
import DynamicComponent from "../components/DynamicComponent";
import Head from "next/head";

import Storyblok, { useStoryblok } from "../lib/storyblok";

export default function Page({ story, preview }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in prevew mode
  story = useStoryblok(story, enableBridge);

  return (
    <div>
      <DynamicComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  // join the slug array used in Next.js catch-all routes
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    // change to `published` to load the published version
    version: "draft", // or published
  };

  if (preview) {
    // set the version to draft in the preview mode
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths() {
  let { data } = await Storyblok.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    // don't create routes for folders and the index page
    if (
      data.links[linkKey].is_folder ||
      data.links[linkKey].slug === "home" ||
      data.links[linkKey].slug === "kurser"
    ) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;

    // remove the pages part from the slug
    // let newSlug = slug.replace('kurser', '');
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
