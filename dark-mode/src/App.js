import { Content } from './components/Content';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;

function App() {
  return (
    <Container>
      <Content />
    </Container>
  );
}

export default App;
