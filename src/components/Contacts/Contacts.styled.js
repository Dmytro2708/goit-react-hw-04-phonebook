import styled from "styled-components";


export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 400px;
  outline: 1px solid grey;
  padding: 10px;
`;

export const ContactEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  p {
    margin-right: 10px;
  }
  button {
    width: 100px;
    cursor: pointer;
    background-color: orange;
    border-radius: 5px;
    border: none;
    &:hover {
        background-color: blueviolet;
        color: #fff;
        transform: scale(1.1);
    }
  }
`;


