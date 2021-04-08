import styled from "@emotion/styled";

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
};

export const Button = styled.button<ButtonProps>`
  color: ${(props) => (props.primary ? "violet" : "green")};
`;

export const Container = styled.div((props: any) => ({
  display: "flex",
  flexDirection: "column" && props.column,
}));
