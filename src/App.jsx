import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { styled } from '@mui/material';

import './App.css';


const MainContent = styled('div')(() => ({
  backgroundColor: 'white',
  minHeight: '100vh',
  borderRadius: '6px',
  marginBottom: '30px',
  padding: '30px',
}));

function App() {
  return (
    <Router>
      <Container className={'top_60'}>
        <Grid container spacing={4}>
          <Grid item size={{xs:12, sm:12, md:4, lg:3}} >
            <Profile />
          </Grid>
          <Grid item size={{xs: 12, sm: 12, md: 8, lg: 9}}>
            <Header />
            <MainContent className="container_shadow">
              <Routes>
                <Route path="/" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </MainContent>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
