// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <>
      <div className="CourseTitleAndDurationContainer">
        <h1 className="CourseTitle">{courseTitle}</h1>
        <div className="DurationContainer">
          <AiFillClockCircle color="171f46" />
          <p className="Duration">{duration}</p>
        </div>
      </div>
      <p className="CourseDescription">{description}</p>
      <ul className="CourseTagsList">
        {tagsList.map(course => (
          <li key={course.id} className="CourseTagItem">
            <p className="CourseTag">{course.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
