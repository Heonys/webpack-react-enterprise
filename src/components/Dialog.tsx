import { Box } from "@chakra-ui/react";
import { ReactElement, ReactNode, useRef } from "react";
type Props = {
  header: ReactElement;
  footer: ReactElement;
  children: ReactNode;
};

const Dialog = ({ header, footer, children }: Props) => {
  const footerRef = useRef(null);

  return (
    <Box bg="gray" p={3} className="Dialog">
      {header && <header>{header}</header>}
      <main>{children}</main>
      {footer && <footer ref={footerRef}>{footer}</footer>}
    </Box>
  );
};

export default Dialog;
