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
import MiniGame from '../pages/Courses/Game/MiniGame/MiniGame'
import ListenStories from '../pages/Courses/Game/Video/VideoStories'
//news
import News from '../pages/News/News'
//user
import ChangeInfo from '../pages/user/ChangeInfo/ChangeInfo'
import History from '../pages/user/History/History'
//testing
import TestReading from '../pages/testreading'


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
    { path: '/minigame', component: MiniGame },
    { path: '/listenstories', component: ListenStories },
    //news
    { path: '/news', component: News},
    //user
    { path: '/changeInfo', component: ChangeInfo },
    { path: '/history', component: History},
    //testing
    { path: '/testreading', component:TestReading}

]

const privateRoutes = { 
    
}

export { publicRoutes, privateRoutes } 
