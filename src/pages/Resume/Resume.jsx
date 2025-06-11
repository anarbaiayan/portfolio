import { Grid, Paper, Typography, styled } from '@mui/material'
import resumeData from '../../utils/resumeData'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import WorkIcon from '@mui/icons-material/Work';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import SchoolIcon from '@mui/icons-material/School';
import TimelineDot from '@mui/lab/TimelineDot';


const AboutText = styled(Typography)(({ theme }) => ({
  color: 'darkslategray',
  fontSize: 'smaller',
  lineHeight: '22px',
  whiteSpace: 'pre-line',
}));

const TimelineTitle = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 500,
}));

const TimelineDate = styled(Typography)(() => ({
  color: 'darkslategray',
}));

const TimelineDescription = styled(Typography)(() => ({
  color: 'gray',
  fontSize: 'small',
  marginTop: '6px',
}));

const ServiceBox = styled('div')(() => ({
  height: '100%',
  textAlign: 'center',
}));

const ServiceTitle = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '35px',
  textAlign: 'center',
}));

const ServiceDescription = styled(Typography)(() => ({
  color: '#989898',
  borderColor: 'var(--main-color)',
  marginRight: '5px',
  textAlign: 'center',
}));

const ServiceIcon = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  '& .MuiSvgIcon-root': {
    fontSize: '46px',
    marginLeft: 0,
    fontWeight: 300,
    color: 'darkslategray',
  },
}));

const SkillPaper = styled(Paper)(() => ({
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0px 0px 48px 0px rgba(4, 6, 4, 0.08)',
  minHeight: '186px',
  height: '100%',
}));

const SkillTitle = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '35px',
}));

const SkillDescription = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
  color: '#989898',
  fontWeight: 400,
  lineHeight: '18px',
}));

const StyledTimelineDot = styled(TimelineDot)(() => ({
  borderColor: 'var(--main-color)',
  padding: '2px',
  marginRight: '5px',
}));

const ContactInfoItem = styled(Typography)(() => ({
  fontSize: '14px',
  color: '#787878',
  lineHeight: '34px',
  '& > span': {
    color: 'black',
    fontWeight: 500,
  },
}));

const ContactSocialsContainer = styled(Grid)(() => ({
  marginTop: '25px',
}));

const ContactSocial = styled(Grid)(() => ({
  '& a > .MuiSvgIcon-root': {
    fontSize: '16px',
    marginRight: '10px',
    color: 'black',
  },
}));




const Resume = () => {
  return (<>
    {/* About page */}
    <Grid container className="section" sx={{ paddingBottom: '45px' }}>
      <Grid className="section_title" sx={{ marginBottom: '30px' }}>
        <span></span>
        <h6 className='section_title_text'>
          About me
        </h6>
      </Grid>
      <Grid size={{ xs: 12 }} className="section_content">
        <AboutText variant='body2'>
          {resumeData.about}
        </AboutText>
      </Grid>
    </Grid>
    {/* Experience, education */}
    <Grid container className="section" sx={{ paddingBottom: '45px' }}>
      <Grid className="section_title" sx={{ marginBottom: '30px' }}>
        <span></span>
        <h6 className='section_title_text'>
          Resume
        </h6>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grid container>
          {/* Working history */}
          <Grid size={{ sm: 12, md: 6 }}>
            <CustomTimeline title={"Working History"} icon={<WorkIcon />}>
              {resumeData.experiences.map((experience => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent>
                    <TimelineTitle>{experience.title}</TimelineTitle>
                    <TimelineDate variant='caption'>{experience.date}</TimelineDate>
                    <TimelineDescription variant='body2'>{experience.description}</TimelineDescription>
                  </TimelineContent>
                </TimelineItem>
              )))}
            </CustomTimeline>
          </Grid>
          {/* Education */}
          <Grid size={{ sm: 12, md: 6 }}>
            <CustomTimeline title={"Education History"} icon={<SchoolIcon />}>
              {resumeData.education.map((education => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent>
                    <TimelineTitle>{education.title}</TimelineTitle>
                    <TimelineDate variant='caption'>{education.date}</TimelineDate>
                    <TimelineDescription variant='body2'>{education.description}</TimelineDescription>
                  </TimelineContent>
                </TimelineItem>
              )))}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
    {/* Services */}
    <Grid container className="section" sx={{ paddingBottom: '45px' }}>
      <Grid className="section_title" sx={{ marginBottom: '30px' }}>
        <span></span>
        <h6 className='section_title_text'>
          Services
        </h6>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grid container spacing={2}>
          {resumeData.services.map(service => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <ServiceBox>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription variant='caption'>{service.description}</ServiceDescription>
              </ServiceBox>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>

    {/* Skills */}
    <Grid container spacing={3} className="section" sx={{ paddingBottom: '45px', justifyContent: 'space-between' }}>
      {resumeData.skills.map(skill => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <SkillPaper elevation={0}>
            <SkillTitle  variant='h6'>
              {skill.title}
            </SkillTitle>
            {skill.description.map(item => (
              <SkillDescription  variant='body2'>
                <StyledTimelineDot  variant='outlined' />{item}
              </SkillDescription>
            ))}
          </SkillPaper>
        </Grid>
      ))}
    </Grid>

    {/* Contact */}
    <Grid container className="section">
      <Grid size={{xs: 12, lg: 5}}>
        <Grid container>
          <Grid className="section_title" sx={{ marginBottom: '30px' }}>
            <span></span>
            <h6 className='section_title_text'>Contact Information</h6>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <ContactInfoItem>
                  <span>Phone: </span>{resumeData.phone}
                </ContactInfoItem>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <ContactInfoItem>
                  <span>Job: </span>{resumeData.title}
                </ContactInfoItem>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <ContactInfoItem>
                  <span>Email: </span>{resumeData.email}
                </ContactInfoItem>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <ContactSocialsContainer container>
              {Object.keys(resumeData.socials).map((key) => (
                <ContactSocial >
                  <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon}</a>
                </ContactSocial>
              ))}
            </ContactSocialsContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
  )
}

export default Resume
