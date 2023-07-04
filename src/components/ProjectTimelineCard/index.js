import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimelineData} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectTimelineData

  return (
    <div className="courseTimelineContainer1">
      <img src={imageUrl} alt="project" className="projectImage" />
      <div className="titleAndDurationContainer">
        <h1 className="courseTitle">{projectTitle}</h1>
        <div className="timerContainer">
          <AiFillCalendar className="clockIcon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="descriptionPara">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        className="visitLink"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
