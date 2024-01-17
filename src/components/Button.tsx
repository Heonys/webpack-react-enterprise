import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: grey;
  border: 2px solid transparent;
  color: white;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

type NativeButton = React.ComponentPropsWithoutRef<"button">;

const Button = ({ children, ...props }: NativeButton) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
