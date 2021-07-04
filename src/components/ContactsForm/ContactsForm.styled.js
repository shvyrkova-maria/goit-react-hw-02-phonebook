import styled from '@emotion/styled/macro';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const DebounceInput = styled.input`
  border: 1px solid var(--main-color);
  border-radius: 5px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Button = styled.button`
  display: inline-block;
  min-width: 150px;
  padding: 12px 12px;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-color);
  background-color: lightslategray;
  text-transform: uppercase;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 4px 3px 12px -1px var(--accent-color);
  }
`;
