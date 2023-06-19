import Body from '../../../components/docs/Body';

export default function DoNotHydrate({c}) {
  return (
    <Body parent={c.req.param("parent")} child={c.req.param("id") || ""} c={c} />
  )
}

export async function Head(){
  return({
    title: `Reejs Docs | ${c.req.param("parent").replace(/\b\w/g, l => l.toUpperCase())} - ${c.req.param("id").replace(/\b\w/g, l => l.toUpperCase()) || "404"}`,
    description: "Welcome to the Reejs Documentation. Here you can find all the information you need to get started with Reejs.",
  })
}