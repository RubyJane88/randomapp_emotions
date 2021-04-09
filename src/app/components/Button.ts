import styled from "@emotion/styled";

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? "crimson" : "darkblue")};
  color: aliceblue;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
`;

export const Container = styled.div((props: any) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column" && props.column,
  margin: "1rem",
}));
