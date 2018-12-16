import Vue from 'vue';
import Router from 'vue-router';
import VueRouter from 'vue-router';
import Home from '../components/Home';

Vue.use(Router)

export default new VueRouter({
    routes: [
        { path: '/index', name: 'Home', component: Home },
        //path:路径 component:把你需要的组件挂载进来
        // { path: '/Test', name: 'test', component: Test },
        //当路径错误或没有这个路径的时候我们会给予一个默认路径
        { path: '*', redirect: '/index' } //404/
    ]
});
