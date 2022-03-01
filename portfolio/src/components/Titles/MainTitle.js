import styled from "styled-components";

const TitleStyles = styled.h1`
  font-size: 40px;
  font-weight: 400;
`;

const MainTitle = (props) => {
  return (
    <TitleStyles className={props.className}>{props.children}</TitleStyles>
  );
};

export default MainTitle;
