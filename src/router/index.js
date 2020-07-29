import Vue from 'vue'
import Router from 'vue-router'
import learn from '@/view/learn/index'
import login from '@/view/login/index'
//import main from '@/view/main/index'
import nav from '@/view/main/index'
import risk_test from '@/view/risk_test/index'
import report from '@/view/report/index'
import report2 from '@/view/report/index2'
import answer from '@/view/answer/index'
Vue.use(Router)

export const constantRoutes = [{
        path: '/login',
        component: login, //登录页面 对应C1
    },
    {
        path: '/learn',
        component: learn, //基础知识学习页面 对应C3
    },
    {
        path: '/answer',
        component: answer, //快问快答页面
    },
    // {
    //     path:'/main',
    //     component:main,
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