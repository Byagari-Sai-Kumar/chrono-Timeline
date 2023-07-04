import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseTimelineData} = props
  const {courseTitle, description, duration, tagsList} = courseTimelineData
  console.log(courseTimelineData)

  return (
    <div className="courseTimelineContainer">
      <div className="titleAndDurationContainer">
        <h1 className="courseTitle">{courseTitle}</h1>
        <div className="timerContainer">
          <AiFillClockCircle className="clockIcon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="descriptionPara">{description}</p>
      <div className="topicsContainer">
        {tagsList.map(eachTopic => (
          <p key={eachTopic.id} className="topicList">
            {eachTopic.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
