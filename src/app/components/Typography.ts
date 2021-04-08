import styled from "@emotion/styled";

export const H1 = styled.h1(
  {
    fontSize: 20,
  },
  (props) => ({ color: props.color })
);

export const H2 = styled.h2(
  {
    fontSize: 15,
  },
  (props) => ({ color: props.color })
);
