import styled from "styled-components";

const Button = styled.button`
  background-color: #790;
  border-radius: 3px;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  color: #fff;
  cursor: pointer;
  font-size: 1.1em;
  padding: 0.7em 1em;
  transition: all 0.175s ease-in-out;
  margin-top: 20px;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    background-color: #799;
  }
  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    background-color: #7823;
  }
}
`;

const QuotesButton = ({ onUpdate }) => {
  return (
    <>
      <Button onClick={onUpdate}> bring me knowledge...</Button>
    </>
  );
};

export { QuotesButton };
