import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  flex: 1;
  border: 1px solid ${(props) => (props.error ? 'red' : '#eee')};
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #2cd697;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  //centrarliza todo conteudo do botão ao centro
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) => props.loading
    && css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    border: 1px solid #c4efca;
    border-radius: 5px;
    margin-bottom: 7px;
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /**Aplica estilização em toda li menos na primeira tag */
    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #284387;
      text-decoration: none;
    }
  }
`;
