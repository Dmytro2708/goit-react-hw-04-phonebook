import styled from "styled-components";
import { Form } from 'formik';

export const StyledForm = styled(Form)`
 display: flex;
    flex-direction: column;
    width: 300px;
        outline: 1px solid grey;
    padding: 10px;
label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
input {
        margin-top: 6px;
        
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
}`;