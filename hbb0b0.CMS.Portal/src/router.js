// the config of app router
import Help from './components/help/Help.vue';
import Feedback from './components/feedback/Feedback.vue';
import UserInfo from './components/business/UserInfo.vue';
import DepartmentList from   './components/business/DepartmentList.vue';
import EmployeeList from './components/business/EmployeeList.vue';
import EmployeeDetail from './components/business/EmployeeDetail.vue';
import App from './App.vue'
export default [{
        path: '/index',
        component: App,
        children: [{
                name: '业务',
                path: 'axios',
                component: UserInfo
            },
            {
                name: '部门信息',
                path: 'departmentList',
                component: DepartmentList
            },
            {
                name: '员工信息',
                path: 'employeeList',
                component: EmployeeList
            },

            {
                name: '帮助中心',
                path: 'help',
                component: Help
            },


            {
                name: '意见反馈',
                path: 'feedback',
                component: Feedback
            },
            {
                name:'员工详细信息',
                path:'employeeDetail/:id',
                component:EmployeeDetail
            
            }
        ]
    },
    {
        path: '*',
        redirect: '/index/axios'
    }
]