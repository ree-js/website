import React from 'react';
import Body from '../../../components/docs/Body';
import { useLocation } from "react-router-dom";

export default function Docs() {
  let params = useLocation().pathname.split("/").slice(2);
  return (
    <Body parent={params[0]} child={params[1] || ""} />
  )
}

export function generateMetadata(c){
  return({
  title: `Reejs Docs | ${c.req.param("parent").replaceAll("-"," ")?.replace(/\b\w/g, l => l.toUpperCase())} - ${c.req.param("id")?.replaceAll("-"," ").replace(/\b\w/g, l => l.toUpperCase()) || "404"}`,
  description: "Welcome to the Reejs Documentation. Here you can find all the information you need to get started with Reejs.",
  icon: "/favicon.ico",
  openGraph: {
    themeColor: "#805ad5",
    type: "website",
  }
  });
};