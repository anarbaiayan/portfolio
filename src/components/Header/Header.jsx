import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useLocation } from 'react-router-dom';
import {
  HomeRounded,
  Telegram,
} from '@mui/icons-material';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/CustomButton';
import { styled } from '@mui/material';


const StyledNavbar = styled(Navbar)(() => ({
  marginBottom: '30px',
  backgroundColor: 'white',
  padding: '0 22px 0 0',
  borderRadius: '6px',
  boxShadow: '0px 2px 92px 0px rgba(0, 0, 0, 0.07)',
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  fontWeight: 500,
  paddingRight: '20px',
  color: 'darkslategray',
  textDecoration: 'none',
  '&:hover': {
    color: 'var(--main-color)',
  },
  '&.header_link_active': {
    fontWeight: 500,
    color: 'var(--main-color)',
  }
}));

const HeaderHome = styled(Navbar.Brand)(() => ({
  backgroundColor: 'var(--main-color)',
  padding: '22px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTopLeftRadius: '6px',
  borderBottomLeftRadius: '6px',
}));

const HeaderRight = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',

  '& a > .MuiSvgIcon-root': {
    fontSize: '16px',
    marginRight: '12px',
    color: 'black',
  },
}));

const StyledNav = styled(Nav)(({ theme }) => ({
  marginRight: 'auto'
}));

const Header = (props) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <StyledNavbar expand="lg" sticky='top' >
      {/* Home Link */}
      <Nav.Link as={NavLink} to="/">
        <HeaderHome>
          <HomeRounded />
        </HeaderHome >
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <StyledNav>
          {/* Resume link */}
          <StyledNavLink to='/' className={pathname === '/' ? 'header_link_active' : 'header_link'}>Resume</StyledNavLink>
          {/* Portfolio link */}
          <StyledNavLink to='/portfolio' className={pathname === '/portfolio' ? 'header_link_active' : 'header_link'}>Portfolio</StyledNavLink>
        </StyledNav>

        <HeaderRight >
          {Object.keys(resumeData.socials).map(key =>(
            <a href={resumeData.socials[key].link} rel="noreferrer" target='_blank'>{resumeData.socials[key].icon}</a>
          ))}
          <CustomButton text={'Hire me'} icon={<Telegram />} />
        </HeaderRight >
      </Navbar.Collapse>
    </StyledNavbar>
  )
}

export default Header
