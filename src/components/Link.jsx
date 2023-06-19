export default function Link({ to, href, children, className }) {
  return (
    <>
      <a className={className} href={to || href || "#"} onClick={(e) => {
        e.preventDefault();
        window.location.pathname = to || href;
      }}>{children}</a>
    </>
  );
}