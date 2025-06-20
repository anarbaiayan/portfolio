import Grid from '@mui/material/Grid'
import Tabs from '@mui/material/Tabs'
import { useState } from 'react'
import Tab from '@mui/material/Tab';
import resumeData from '../../utils/resumeData';
import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grow, Typography } from '@mui/material';

const Portfolio = () => {

  const [tabValue, setTabValue] = useState("All");
  const [openDialog, setOpenDialog] = useState(false);


  return (
    <Grid container className="section" sx={{ paddingBottom: '45px', paddingTop: '45px' }}>
      {/* Title */}
      <Grid className="section_title" sx={{ marginBottom: '30px' }}>
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid size={{ xs: 12 }}>
        <Tabs value={tabValue} indicatorColor='white' className='custon_tabs' onChange={(e, newValue) => setTabValue(newValue)}>
          <Tab label="All" value="All" className={tabValue === "All" ? "customTabs_item active" : "customTabs_item"} />
          {[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
            <Tab label={tag} value={tag} className={tabValue === "All" ? "customTabs_item active" : "customTabs_item"} />
          ))}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid size={{ xs: 12 }}>
        <Grid container spacing={2}>
          {resumeData.projects.map(projects => (
            <>
              {tabValue === projects.tag || tabValue === "All" ?
                <Grid>
                  <Grow in timeout={1000}>
                    <Card className='customCard' onClick={() => setOpenDialog(projects)}>
                      <CardActionArea>
                        <CardMedia className='customCard_image' image={projects.image} title={projects.title} />
                        <CardContent>
                          <Typography className='customCard_title'>
                            {projects.title}
                          </Typography>
                          <Typography className='customCard_description' variant='body2'>
                            {projects.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
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
        <img src="" alt="" />
        <DialogContent>
          {openDialog.description}
        </DialogContent>
        <DialogActions>
          {openDialog?.links?.map(link => (
            <a href={link.link} target='_blank' rel="noreferrer">{link.icon}</a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default Portfolio
