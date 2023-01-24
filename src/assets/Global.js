import styled from "styled-components";

export const StyledForm = styled.div`
  & .form-control {
    width: 26%;
    height: 40px;
    font-size: 1.2rem;
    box-shadow: 1px 1px 3px 3px black;
    margin-left: 33%;
    border: none;
    border-radius: 9px;
    padding: 10px;
    margin-top: 70px;
  }
  & .btn-primary {
    width: 79px;
    height: 40px;
    font-size: 1rem;
    box-shadow: 1px 1px 1px 1px black;
    border-radius: 4px;
    margin-left: 13px;
    padding: 3px;
  }
`;
export const StyledItem = styled.div`
  & .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(194, 194, 194, 0.192);
    padding: 5px 0px;
    padding-left: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.185);
    margin-top: 20px;
    width: 33%;
    margin-left: 440px;
  }
  & .btn-edit {
    margin-right: 10px;
    padding: 4px;
  }

  & .btn-delete {
    margin-right: 8px;
    padding: 4px;
  }
  & .form-title{
    width: 280px;
    height: 30px;
  }
`;
