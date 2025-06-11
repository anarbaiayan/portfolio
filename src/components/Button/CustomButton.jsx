import { Button, styled, Box } from '@mui/material'

const CustomStyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'var(--main-color)',
  fontSize: '14px',
  fontWeight: 500,
  border: 0,
  borderRadius: '50px',
  padding: '1px 12px',
  lineHeight: '35px',
  minWidth: '100px',
  outline: 'none',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'var(--main-color)',
  },
}))

const IconContainer = styled(Box)(() => ({
  color: '#000',
  background: '#fff',
  borderRadius: '50px',
  height: '27px',
  width: '27px',
  lineHeight: '29px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiSvgIcon-root': {
    fontSize: '16px',
  },
}));

const ButtonText = styled('span')(() => ({
  fontSize: '14px',
  textTransform: 'none',
  textAlign: 'center',
  width: '100%',
  marginRight: '5px',
  marginLeft: '5px',
  color: '#000'
}));

const CustomButton = ({ text, icon }) => {
  return (
    <CustomStyledButton
      endIcon={
        icon ? <IconContainer>{icon}</IconContainer> : null
      }
    >
      <ButtonText>{text}</ButtonText>
    </CustomStyledButton>
  )
}

export default CustomButton
