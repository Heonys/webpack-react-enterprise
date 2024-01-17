import { ReactElement, ReactNode, useRef } from "react";
type Props = {
  header: ReactElement;
  footer: ReactElement;
  children: ReactNode;
};

const Dialog = ({ header, footer, children }: Props) => {
  const footerRef = useRef(null);

  //   useEffect(() => {
  //     if (!footerRef.current) return;
  //     const target = Array.from(footerRef.current.querySelectorAll("button"));
  //     if (target.length === 0) return;
  //     const activeButton = target[target.length - 1];
  //     activeButton.focus();
  //   }, [footerRef.current]);

  return (
    <div className="Dialog">
      {header && <header>{header}</header>}
      <main>{children}</main>
      {footer && <footer ref={footerRef}>{footer}</footer>}
    </div>
  );
};

export default Dialog;
