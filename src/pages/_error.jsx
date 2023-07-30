
import {useRouteError} from "npm:react-router-dom@6.13.0?external=react,react-dom";

export default function ErrorBoundary(){
  let error = useRouteError();
  console.log(error);
  return <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-6xl font-bold">Dang It!</h1>
    <p className="text-2xl">Skill Issue Here... Oh wait, it's an Error!</p>
    <p className="text-2xl">{error.message}</p>
  </div>
}