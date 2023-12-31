import Home from '../pages/Home/Home'
//account
import Login from '../pages/account/Login/Login'
import SignUp from '../pages/account/SignUp/SignUp'
import Forgot from '../pages/account/Forgot/Forgot'
import VerifyCode from '../pages/account/VerifyCode/VerifyCode'
//courses
import CardList from '../pages/Courses/Course/CoursesCard/CourseCard'
import CoursesInfo from '../pages/Courses/Course/CourseDetail/CourseDetail'
import Vocab from '../pages/Courses/Course/Vocab/Vocab'
import LayoutLearn from '../pages/Courses/Course/LayoutLearn/LayoutLearn'
import BigTest from '../pages/Courses/Course/Bigtest/BigTest'
import Scores from '../pages/Courses/Scores/Scores'
import League from '../pages/Courses/League/League'
//game
import GameScreen from '../pages/Courses/Game/GameScreen/GameScreen'
import GameFallingWords from '../pages/Courses/Game/DropGame/DropGame'
import MiniGame from '../pages/Courses/Game/MiniGame/MiniGame'
import ListenStories from '../pages/Courses/Game/Video/VideoStories'
//news
import News from '../pages/News/News'
//user
import CreateCourse from '../pages/user/CreateCourse/CreateCourse'
import ChangeInfo from '../pages/user/ChangeInfo/ChangeInfo'
import History from '../pages/user/History/History'
import CheckLevel from '../pages/CheckLevel/Checklevel'

//testing
import TestSkill from '../pages/testskill/testskill'
import TestReading from '../pages/testskill/testreading'
import TestListening from '../pages/testskill/TestListen/testlistening'
//Admin or Manager
import ManagerList from '../pages/AdminManager/ManagerList/ManagerList'
import CreateManager from '../pages/AdminManager/ManagerList/CreateManager/CreateManager'
import CourseReview from '../pages/AdminManager/CourseReview/CourseReview'
import AddCourse from '../pages/AdminManager/CourseReview/AddCourse/AddCourse'

//Support
import SupportAdmin from '../pages/Support/SupportAdmin'
import ChatRealTime from '../pages/Support/SupportEngine/SupportWindow/ChatRealTime'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    //account
    { path: '/login', component: Login },
    { path: '/forgot', component: Forgot },
    { path: '/signup', component: SignUp },
    { path: '/verify', component: VerifyCode },
    //courses
    { path: '/cardlist', component: CardList },
    { path: '/coursesinfo', component: CoursesInfo },
    { path: '/vocab', component: Vocab },
    { path: '/layoutlearn', component: LayoutLearn },
    { path: '/bigtest', component: BigTest },
    { path: '/scores', component: Scores },
    { path: '/league', component: League },
    //games
    { path: '/game', component: GameScreen },
    { path: '/dropgame', component: GameFallingWords },
    { path: '/minigame', component: MiniGame },
    { path: '/listenstories', component: ListenStories },
    //news
    { path: '/news', component: News},
    //user
    { path: '/createcourse', component: CreateCourse },
    { path: '/changeInfo', component: ChangeInfo },
    { path: '/history', component: History},
    { path: '/checklevel', component: CheckLevel},
    //testing
    { path: '/testskill', component: TestSkill},
    { path: '/testreading', component: TestReading},
    { path: '/testlistening', component: TestListening},
    //admin, manager
    { path: '/managerlist', component: ManagerList},
    { path: '/createmanager', component: CreateManager},
    { path: '/coursereview', component: CourseReview},
    { path: '/addcourse', component: AddCourse},

    //support, DirectChat
    { path: '/support', component: SupportAdmin },
    { path: '/chat', component: ChatRealTime},

]

const privateRoutes = { 
    
}

export { publicRoutes, privateRoutes } 
