import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Forgot from '../pages/Forgot/Forgot'
import VerifyCode from '../pages/VerifyCode/VerifyCode'
import CoursesInfo from '../pages/Component/CoursesCard/CoursesInfo'
import League from '../pages/League/League'
import LayoutLearn from '../pages/Game/LayoutLearn'
import BigTest from '../pages/Game/BigTest/BigTest'
import Scores from '../pages/Scores/Scores'
import Vocab from '../pages/Game/Vocab'
import ChangeInfo from '../pages/ChangeInfo/ChangeInfo'
import CardList from '../pages/Component/CoursesCard/CoursesCard'
import ListenStories from '../pages/Game/VideoStories'
import MiniGame from '../pages/Game/MiniGame'

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
]

const privateRoutes = { 
    
}

export { publicRoutes, privateRoutes } 
