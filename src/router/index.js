import Vue from 'vue';
import Router from 'vue-router';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Name from '../components/Name';
import Info from '../components/Info';

Vue.use(Router)

export default new VueRouter({
    routes: [
        {
            path: '/index/:id', component: Home,
            children: [
                {
                    path: 'Name',
                    component: Name,
                },
                {
                    path: "Info",
                    component: Info
                }
            ]
        },

        // { path: '/Test', name: 'test', component: Test },
        //当路径错误或没有这个路径的时候我们会给予一个默认路径
        // { path: '*', redirect: '/index' } //404/
    ]
});
