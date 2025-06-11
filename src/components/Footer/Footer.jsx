import { Typography, styled } from "@mui/material"
import resumeData from "../../utils/resumeData";


const FooterContainer = styled('div')(() => ({
  backgroundColor: '#1e1e1e',
  color: 'white',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '70px',
  borderRadius: '8px',
  padding: '20px 25px',
}));

const StyledCopyright = styled(Typography)(() => ({
  fontSize: 'small',
  textAlign: 'end',
  color: '#9c9c9c',
}));

const Footer = () => {
  return (
    <FooterContainer sx={{ mb: 2 }}>
      <div className="footer_left">
        <Typography className="footer_name">
          {resumeData.name}
        </Typography>
      </div>
      <div className="footer_right">
        <StyledCopyright>
          © 2025 All rights reserved. 
        </StyledCopyright >
      </div>
    </FooterContainer >
  )
}

export default Footer
