import Vue from 'vue'
import Router from 'vue-router'
import learn from '@/view/learn/index'
import login from '@/view/login/index'
import home from '@/view/major/home'
import step1 from '@/view/major/step1'
import step2 from '@/view/major/step2'
import step3 from '@/view/major/step3'
import step4 from '@/view/major/step4'
import step4_1 from '@/view/major/step4_1'
import step5 from '@/view/major/step5'
import step6 from '@/view/major/step6'
import step7 from '@/view/major/step7'
import step9 from '@/view/major/step9'
import nav from '@/view/nav/index'
import risk_test1 from '@/view/risk_test/test1/index'
import risk_test2 from '@/view/risk_test/test2/index'
import risk_test3 from '@/view/risk_test/test3/index'
import risk_test4 from '@/view/risk_test/test4/index'
import risk_test5 from '@/view/risk_test/test5/index'
import risk_test6 from '@/view/risk_test/test6/index'
import risk_test7 from '@/view/risk_test/test7/index'
import risk_test8 from '@/view/risk_test/test8/index'
import risk_test9 from '@/view/risk_test/test9/index'
import risk_test10 from '@/view/risk_test/test10/index'
import result from '@/view/risk_test/result/index'
import report from '@/view/report/index'
import report3 from '@/view/report/pngDownload'
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
        path: '/home',
        component: home, //对应C7
    },
    {
        path: '/step1',
        component: step1, //对应C8
    },
    {
        path: '/step2',
        component: step2, //对应step2
    },
    {
        path: '/step3',
        component: step3, //对应step3
    },
    {
        path: '/step4',
        component: step4, //对应step4
    },
    {
        path: '/step4_1',
        component: step4_1, //对应step4_1 
    },
    {
        path: '/step5',
        component: step5, //对应step5 
    },
    {
        path: '/step6',
        component: step6, //对应step6 
    },
    {
        path: '/step7',
        component: step7, //对应step7 C10
    },
    {
        path: '/step9',
        component: step9, //对应step9 C12
    },
    {
        path: '/report',
        component: report, //实验报告页面 对应C15
    },
    {
        path: '/report3',
        component: report3, //实验报告页面 对应C15
    },
    {
        path: '/nav',
        component: nav, //导航页面 对应C2
    },
    {
        path: '/risk_test1',
        component: risk_test1,//风险评估测试第一题
    },
    {
        path: '/risk_test2',
        component: risk_test2,
    },
    {
        path: '/risk_test3',
        component: risk_test3,
    },
    {
        path: '/risk_test4',
        component: risk_test4,
    },
    {
        path: '/risk_test5',
        component: risk_test5,
    },
    {
        path: '/risk_test6',
        component: risk_test6,
    },
    {
        path: '/risk_test7',
        component: risk_test7,
    },
    {
        path: '/risk_test8',
        component: risk_test8,
    },
    {
        path: '/risk_test9',
        component: risk_test9,
    },
    {
        path: '/risk_test10',
        component: risk_test10,
    },
    {
        path: '/result',
        component: result,//风险评估结果
    }
]

const createRouter = () => new Router({
    routes: constantRoutes
})

const router = createRouter()

export default router