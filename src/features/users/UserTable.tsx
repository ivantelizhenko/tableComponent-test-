import styled from 'styled-components';
import UserRow from './UserRow';
import Spinner from '../../ui/Spinner';
import { useAppSelector } from '../../store';
import Empty from '../../ui/Error';

const StyledTable = styled.div`
  border: 1px solid #e5e7eb;

  font-size: 1.4rem;
  background-color: #fff;
  border-radius: 7px;
  overflow: hidden;
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.8fr 1fr 1fr 1.2fr 0.2fr;
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
  padding: 1.6rem 2.4rem;

  background-color: #f9fafb;
  border-bottom: 1px solid #f3f4f6;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: #4b5563;
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

function filterFunction(target: string, requirement: string) {
  const targetArr = target.split(' ');
  return targetArr.some(word =>
    word.toLowerCase().startsWith(`${requirement.toLowerCase()}`)
  );
}

function UserTable() {
  const { users, isLoading, error, requirement } = useAppSelector(
    state => state.user
  );

  const filteredUsers = users.filter(
    (user: {
      user: {};
      phone: string;
      email: string;
      username: string;
      name: string;
    }) => {
      if (
        filterFunction(user.phone, requirement) ||
        filterFunction(user.email, requirement) ||
        filterFunction(user.name, requirement) ||
        filterFunction(user.username, requirement)
      )
        return user;
    }
  );

  if (isLoading) return <Spinner />;
  if (error?.length) return <Empty message={error.message} />;

  return (
    <StyledTable>
      <StyledHeader>
        <div></div>
        <div>User</div>
        <div>Username</div>
        <div>Phone</div>
        <div>Email</div>
        <div></div>
      </StyledHeader>
      {!filteredUsers.length ? (
        <Empty message="No users could be found."></Empty>
      ) : (
        <StyledBody>
          {filteredUsers.map(
            (userData: {
              id: number;
              name: string;
              username: string;
              phone: string;
              email: string;
            }) => (
              <UserRow key={userData.id} userData={userData} />
            )
          )}
        </StyledBody>
      )}
    </StyledTable>
  );
}

export default UserTable;
