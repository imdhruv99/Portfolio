import React from "react";
import styled from "styled-components";

const ParagraphStyle = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #5e5c5c;
`;

const ParagraphTexts = (props) => {
  return <ParagraphStyle className={props.className}>{props.children}</ParagraphStyle>;
};

export default ParagraphTexts;
