import { IStylesProps } from './../../../types/styles.interfaces';
import styled from "styled-components";

export const FormContainer = styled.form`
  margin-top: 1rem;
  display: flex;
  align-items: flex-end;
  gap: 1.2rem;
  flex-wrap: wrap;
  padding: 1.2rem;
  box-shadow: 0 0 5px #ccc;
  border-radius: 5px;

  @media (max-width: 1150px) {
    justify-content: center;

    button {
      width: 15rem;
    }
  }

  @media (max-width: 1000px) {
    justify-content: center;
    flex-direction: column;

    button {
      height: 2.5rem;
      width: 13rem;
    }
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 2rem;
`

export const Label = styled.label`
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #223745;
  color: white;
  height: 42px;
`;

export const Table = styled.table`
  width: 100%;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
  overflow-x: auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th<IStylesProps>`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 1000) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td<IStylesProps>`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 1000) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const TdIcon = styled.div`
  cursor: pointer;
`

export const RefreshContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
`