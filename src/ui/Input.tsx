import styled from 'styled-components';
import { useAppDispatch } from '../store';
import { addRequirement } from '../features/users/userSlice';

const StyledInput = styled.input`
  margin-left: auto;
  width: 20%;
  border: 1px solid #d1d5db;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  padding: 0.8rem 1.2rem;
`;

function Input() {
  const dispatch = useAppDispatch();

  return (
    <StyledInput
      onChange={e => dispatch(addRequirement(e.target.value))}
      placeholder="Search..."
      type="search"
    />
  );
}

export default Input;
