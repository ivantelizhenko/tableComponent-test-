import styled, { keyframes } from 'styled-components';

const l2 = keyframes`
  to{background-size: 100% 3px}
`;

const Spinner = styled.div`
  width: fit-content;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  padding-bottom: 8px;
  background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
  animation: l2 2s linear infinite;

  &:before {
    content: 'Loading...';
  }
`;

export default Spinner;
