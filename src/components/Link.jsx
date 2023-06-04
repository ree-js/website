import { useEffect, useRef, hydrate } from 'react';
import LoadingBar from 'npm:react-top-loading-bar@2.3.1?external=react,react-dom';

export default function Link({ to, href, children, className }) {
  let ref = useRef(null);
  return (
    <>
      <LoadingBar color='#f11946' ref={ref} />
      <a className={className} href={to || href || "#"} onClick={(e) => {
        e.preventDefault();
        console.log("hmm");
        if (!(to || href)) return;
        ref.current.continuousStart();
          window.location.pathname = to || href;
      }}>{children}</a>
    </>
  );
}