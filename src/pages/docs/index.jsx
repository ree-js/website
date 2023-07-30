import Body from '../../components/docs/Body';

export default function DocsRoot({c}) {
  return (
    <Body parent="Getting Started" child="" />
  )
}

export function generateMetadata(c){
  return({
  title: `Reejs Docs`,
  description: "Welcome to the Reejs Documentation. Here you can find all the information you need to get started with Reejs.",
  icon: "/favicon.ico",
  openGraph: {
    themeColor: "#805ad5",
    type: "website",
  }
  });
};