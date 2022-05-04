import styled from "styled-components";

const Style = styled.div`
  margin: 3rem 5.5rem;
  color: "white";
`;

const Container = (props) => {
  return <Style>{props.children}</Style>;
};

export default Container;
