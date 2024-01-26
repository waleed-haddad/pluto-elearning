import { CourseBanner } from "../components/CoursesPage/CourseBanner";
import { CourseList } from "../components/CoursesPage/CourseList";
import "../components/CoursesPage/CoursePage.css"

export default function Courses() {
    return(
      <div className="coursePage">
        <CourseBanner />
        <h1 className="divider">Courses List</h1>
        <CourseList />
      </div>
    )
  }