import Home from '../pages/Home/Home'
import Login from '../pages/account/Login/Login'
import SignUp from '../pages/account/SignUp/SignUp'
import Forgot from '../pages/account/Forgot/Forgot'
import VerifyCode from '../pages/account/VerifyCode/VerifyCode'
import CoursesInfo from '../pages/Courses/Course/CourseDetail/CourseDetail'
import League from '../pages/Courses/League/League'
import LayoutLearn from '../pages/Courses/Course/LayoutLearn/LayoutLearn'
import BigTest from '../pages/Courses/Course/Bigtest/BigTest'
import Scores from '../pages/Courses/Scores/Scores'
import Vocab from '../pages/Courses/Course/Vocab/Vocab'
import ChangeInfo from '../pages/ChangeInfo/ChangeInfo'
import CardList from '../pages/Courses/Course/CoursesCard/CourseCard'
import ListenStories from '../pages/Courses/Game/Video/VideoStories'
import MiniGame from '../pages/Courses/Game/MiniGame/MiniGame'
import History from '../pages/user/History/History'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/bigtest', component: BigTest },
    { path: '/cardlist', component: CardList },
    { path: '/changeInfo', component: ChangeInfo },
    { path: '/coursesinfo', component: CoursesInfo },
    { path: '/forgot', component: Forgot },
    { path: '/layoutlearn', component: LayoutLearn },
    { path: '/league', component: League },
    { path: '/listenstories', component: ListenStories },
    { path: '/login', component: Login },
    { path: '/minigame', component: MiniGame },
    { path: '/scores', component: Scores },
    { path: '/signup', component: SignUp },
    { path: '/verify', component: VerifyCode },
    { path: '/vocab', component: Vocab },
    { path: '/history', component: History},
]

const privateRoutes = { 
    
}

export { publicRoutes, privateRoutes } 
