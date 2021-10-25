import Mainlayout from "./layout/mainLayout";
import Courses from './page/khoahoc'
import Course_detail from './page/course__detail'
import Page404 from './page/404'
import Home from './page/home';
import Team from "./page/team";
import Register from "./page/register";
const routers = [
    {
        path: '/',
        component: Mainlayout,
        routers: [
            {
                path: '/cfd__template',
                component: Home,
                exact: true
            },
            {
                path: '/team',
                component: Team,

            },
            {
                path: '/courses',
                component: Courses,
            },
            {
                path: '/course/:slug',
                component: Course_detail,
            },
            {
                path: '/register/:slug',
                component: Register,
            }, {

                component: Page404,
            },

        ]
    },


]
export default routers;