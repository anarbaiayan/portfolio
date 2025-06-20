import Grid from '@mui/material/Grid'
import Tabs from '@mui/material/Tabs'
import { useState } from 'react'
import Tab from '@mui/material/Tab';
import resumeData from '../../utils/resumeData';
import { styled } from '@mui/material/styles';
import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grow, Typography } from '@mui/material';

const Portfolio = () => {

  const [tabValue, setTabValue] = useState("All");
  const [openDialog, setOpenDialog] = useState(false);

  const CustomTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
      backgroundColor: 'white',
    },
  });

  const CustomTab = styled(Tab)(({ theme }) => ({
    padding: 0,
    minWidth: 0,
    marginRight: 20,
    textTransform: 'inherit',
    fontSize: 14,
    fontWeight: 400,
    outlineWidth: 0,
    color: 'inherit',
    '&.Mui-selected': {
      color: 'var(--main-color)',
    },
  }));

  const CustomCard = styled(Card)({
    height: '100%',
    maxWidth: '350px',
    boxShadow: '0px 6px 48px 0px rgba(4, 6, 4, 0.08)',
    borderRadius: '5px',
    overflow: 'hidden',
    outlineWidth: '0px',
  });

  const CustomCardMedia = styled(CardMedia)({
    height: '140px',
  });

  const CustomCardTitle = styled(Typography)({
    fontWeight: 500,
  });

  const ProjectDialogImage = styled('img')({
    maxHeight: '300px',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
  });

  const ProjectDialogDescription = styled(Typography)({
    marginTop: '10px',
  });

  const ProjectDialogActions = styled(DialogActions)({
    justifyContent: 'center',
    marginBottom: '10px',
  });

  const ProjectDialogIcon = styled('a')({
    color: 'darkslategray',
    margin: '0px 12px',
    cursor: 'pointer',
  });




  return (
    <Grid container spacing={1} className="section" sx={{ paddingBottom: '45px', paddingTop: '45px' }}>
      {/* Title */}
      <Grid className="section_title" sx={{ marginBottom: '20px' }}>
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid size={{ xs: 12 }}>
        <CustomTabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
          <CustomTab label="All" value="All" />
          {[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
            <CustomTab key={tag} label={tag} value={tag} />
          ))}
        </CustomTabs>

      </Grid>

      {/* Projects */}
      <Grid size={{ xs: 12 }}>
        <Grid container spacing={3}>
          {resumeData.projects.map(projects => (
            <>
              {tabValue === projects.tag || tabValue === "All" ?
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Grow in timeout={1000}>
                    <CustomCard onClick={() => setOpenDialog(projects)}>
                      <CardActionArea>
                        <CustomCardMedia image={projects.background} title={projects.title} />
                        <CardContent>
                          <CustomCardTitle variant='body2'>
                            {projects.title}
                          </CustomCardTitle>
                          <Typography className='customCard_caption' variant='caption' sx={{ color: "gray" }}>
                            {projects.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </CustomCard>
                  </Grow>
                </Grid>
                : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle onClose={() => setOpenDialog(false)}>
          {openDialog.title}
        </DialogTitle>
        <ProjectDialogImage src={openDialog.background} alt="" />
        <DialogContent>
          <ProjectDialogDescription>
            {openDialog.description}
          </ProjectDialogDescription>
        </DialogContent>
        <ProjectDialogActions>
          {openDialog?.links?.map(link => (
            <ProjectDialogIcon href={link.link} target='_blank' rel="noreferrer">{link.icon}</ProjectDialogIcon>
          ))}
        </ProjectDialogActions>
      </Dialog>
    </Grid>
  )
}

export default Portfolio
