import Vue from 'vue'
import Router from 'vue-router'
import learn from '@/view/learn/index'
import login from '@/view/login/index'
import major7 from '@/view/main/C7'
import major8 from '@/view/main/C8'
import major9 from '@/view/main/C9'
import major10 from '@/view/main/C10'
import major11 from '@/view/main/C11'
import major12 from '@/view/main/C12'
import major13 from '@/view/main/C13'
import nav from '@/view/main/index'
import risk_test from '@/view/risk_test/index'
import report from '@/view/report/index'
import report2 from '@/view/report/index2'

Vue.use(Router)

export const constantRoutes = [{
        path: '/login',
        component: login, //登录页面 对应C1
    },
    {
        path: '/learn',
        component: learn, //基础知识学习页面 对应C3
    },
    // {
    //     path:'/major',
    //     component:major,
    //     children:[
    //         {
    //         path:'/teach',//教学模式
    //         component:teach,
    //         },
    //         {
    //             path:'/test',
    //             component:test,//考核模式
    //         }
    //     ]
    // },
    {
        path: '/major7',
        component: major7, //对应C7
    },
    {
        path: '/major8',
        component: major7, //对应C8
    },
    {
        path: '/major9',
        component: major7, //对应C9
    },
    {
        path: '/major10',
        component: major7, //对应C10
    },
    {
        path: '/major11',
        component: major7, //对应C11
    },
    {
        path: '/major12',
        component: major7, //对应C12
    },
    {
        path: '/major13',
        component: major7, //对应C13
    },
    {
        path: '/report',
        component: report, //实验报告页面 对应C15
    },
    {
        path: '/report2',
        component: report2, //实验报告页面 对应C15
    },
    {
        path: '/nav',
        component: nav, //导航页面 对应C2
    },
    {
        path: '/risk_test',
        component: risk_test,
    }
]

const createRouter = () => new Router({
    routes: constantRoutes
})

const router = createRouter()

export default router