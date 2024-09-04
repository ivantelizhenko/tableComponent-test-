import styled from 'styled-components';

const Spinner = styled.div`
  width: fit-content;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  padding-bottom: 8px;
  background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;

  &:before {
    content: 'Loading...';
  }
`;

export default Spinner;
