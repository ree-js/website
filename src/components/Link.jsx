import { Link as L } from "react-router-dom";
export default function Link({ to, href, children, className }) {
  return (
    <>
      <L className={className} to={to || href || "#"}>{children}</L>
    </>
  );
}