import Typography from '@mui/material/Typography';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import resumeData from '../../utils/resumeData'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import CustomButton from '../Button/CustomButton';
import DownloadIcon from '@mui/icons-material/Download';
import './Profile.css'

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem className='timeline_firstItem'>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline_content'>
      {!link ? (
        <Typography className='timelineItem_text'>
          <span>{title}</span> {text}
        </Typography>
      ) : (<Typography className='timelineItem_text'>
        <span>{title}</span> <a href={link} target='_blank' rel="noreferrer">{text}</a>
      </Typography>)}
    </TimelineContent>
  </TimelineItem>
)

const Profile = () => {
  return (
    <div className='profile container_shadow' >
      <div className="profile_name">
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>

      <figure className='profile_image'>
        <img src={require('../../assests/images/myPhoto.jpg')} alt="" />
      </figure>

      <div className="profile_info">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Name:" text={resumeData.name} />
          <CustomTimelineItem title="Job:" text={resumeData.title} />
          <CustomTimelineItem title="Email:" text={resumeData.email} />

          {Object.keys(resumeData.socials).map(key => (
            <CustomTimelineItem
              key={key}
              title={key + ':'}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="btn_container">
          <a href="/cv.pdf" download style={{ textDecoration: 'none' }} target='_blank' rel="noreferrer">
            <CustomButton text={'Download CV'} icon={<DownloadIcon />} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile
