import styled from "styled-components";

export const TableCaptionStyle = styled.caption`
  z-index: 10;
  width: 100%;
  display: block;
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;

  & > div {
    height: 70px;
    padding-top: 10px;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.3);
    padding: 10px 20px;
  }
  div h2 {
    margin: 0 20px;
  }

  div a,
  div button {
    padding: 10px 20px;
    margin: 0 20px;

    cursor: pointer;
    text-decoration: none;

    background-color: rgba(0, 0, 200, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    color: black;
    font-size: 1em;
    font-weight: bold;
  }
`;
