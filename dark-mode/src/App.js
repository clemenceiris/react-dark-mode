import { Content } from './components/Content';
import { useDarkMode } from './styles/useDarkMode';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;

function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  console.log(theme);

  return (
    <Container>
      <Content />
    </Container>
  );
}

export default App;
