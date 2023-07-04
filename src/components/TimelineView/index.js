import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineViews = cardDetails => {
    if (cardDetails.categoryId === 'COURSE') {
      return (
        <CourseTimelineCard
          key={cardDetails.id}
          courseTimelineData={cardDetails}
        />
      )
    }
    return <ProjectTimelineCard projectTimelineData={cardDetails} />
  }

  return (
    <div className="timelineViewBgContainer">
      <h1 className="myJourneyHeading">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(eachItem => renderTimelineViews(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
