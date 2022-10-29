// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }
  return (
    <div className="TimelineContainer">
      <div className="ResponsiveContainer">
        <div className="HeaderContainer">
          <h1 className="Heading">
            MY JOURNEY OF
            <br />
            <span className="MainHeading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{
            primary: 'blue',
            secondary: 'yellow',
            cardBgColor: 'white',
            cardForeColor: 'violet',
            titleColor: 'black',
            titleColorActive: 'red',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          slideShow
          slideItemDuration={4500}
          enableOutline
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
