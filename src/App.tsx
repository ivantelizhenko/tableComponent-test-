import GlobalStyles from './styles/GlobaslStyles';
import styled from 'styled-components';
import { fetchUsers } from './features/users/userSlice';
import { useAppDispatch } from './store';
import { useEffect } from 'react';
import Users from './pages/Users';

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  background-color: #f9fafb;
  height: 100vh;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
`;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Main>
        <Container>
          <Users />
        </Container>
      </Main>
    </>
  );
}

export default App;
