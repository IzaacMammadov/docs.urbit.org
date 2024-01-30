import React from "react";
import Link from "next/link";
import { join } from "path";
import {
  Markdown,
  getPage,
  getPreviousPost,
  getNextPost,
  capitalize,
} from "@urbit/fdn-design-system";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import ContentNav from "@/components/ContentNav";
import FragmentNav from "@/components/FragmentNav";
import markdocVariables from "@/lib/markdocVariables";
import { index as tooltipData } from "@/../cache/tooltip.js";

export default function Content({
  posts,
  data,
  markdown,
  params,
  previousPost,
  nextPost,
  root,
  path,
}) {
  const firstCrumb = path.split("#")[0];
  const md = JSON.parse(markdown);

  return (
    <div className="flex flex-row h-full w-full">
      <Sidebar className="hidden xl:flex" left>
        <ContentNav posts={posts} root={root} firstCrumb={firstCrumb} />
      </Sidebar>
      <div className="flex flex-col flex-1 min-w-0">
        <MobileNav
          nav={
            <ContentNav
              posts={posts}
              root={root}
              firstCrumb={firstCrumb}
              mobile
            />
          }
        >
          {breadcrumbs(posts, params.slug || [], root)}
        </MobileNav>
        <div className="flex flex-col flex-1 px-5">
          <h1 className="h1 mt-3 !mb-12 md:!mb-[4.6875rem] 3xl:!mb-[5.625rem]">
            {data.title}
          </h1>
          <div className="markdown technical">
            <Markdown.render content={md} tooltipData={tooltipData} />
          </div>
        </div>
      </div>
      <Sidebar className="hidden lg:flex" right>
        <FragmentNav
          markdown={md}
          key={params.slug?.join("/") || Math.random()}
        />
      </Sidebar>
    </div>
  );
}

export const breadcrumbs = (posts, paths, root) => {
  const results = [
    <Link
      className={paths.length > 0 ? "text-brite" : "text-lite"}
      href={`/${root}`}
    >
      {capitalize(root)}
    </Link>,
  ];
  let thisLink = `/${root}`;
  paths.forEach((path, i) => {
    const page = posts.pages?.filter((p) => p.slug === path)?.[0];
    posts = posts.children[path];
    thisLink = join(thisLink, path);
    results.push(
      <span className="text-brite">/</span>,
      <Link
        className={i + 1 < paths.length ? "text-brite" : "text-lite"}
        href={thisLink}
      >
        {posts?.title || page?.title}
      </Link>
    );
  });
  return results;
};

export function getStaticProps(params, root, posts) {
  const { data, content } = getPage(
    join(process.cwd(), `content/${root}`, params.slug?.join("/") || "/"),
    true
  );

  const previousPost =
    getPreviousPost(
      params.slug?.slice(-1).join("") || root,
      ["title", "slug", "weight"],
      join(root, params.slug?.slice(0, -1).join("/") || "/"),
      "weight"
    ) || null;

  const nextPost =
    getNextPost(
      params.slug?.slice(-1).join("") || root,
      ["title", "slug", "weight"],
      join(root, params.slug?.slice(0, -1).join("/") || "/"),
      "weight"
    ) || null;

  const markdown = JSON.stringify(
    Markdown.parse({
      post: { content: String.raw`${content}` },
      variables: markdocVariables,
    })
  );

  return { props: { posts, data, markdown, params, previousPost, nextPost } };
}

export function getStaticPaths(root, posts) {
  const slugs = [];

  const allHrefs = (thisLink, tree) => {
    slugs.push(thisLink, ...tree.pages.map((e) => join(thisLink, e.slug)));
    allHrefsChildren(thisLink, tree.children);
  };

  const allHrefsChildren = (thisLink, children) => {
    Object.entries(children).map(([childSlug, child]) => {
      allHrefs(join(thisLink, childSlug), child);
    });
  };

  allHrefs(`/${root}`, posts);
  return {
    paths: slugs,
    fallback: false,
  };
}
