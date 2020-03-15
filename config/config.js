export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            locale: {
            enable: true,
            },
        }],
    ],
    singular: true,
    routes: [{
        path: "/",
        component: "./Layout",
        routes: [{
            path: "/",
            component: "HelloWorld",
        }, {
            path: '/dashboard',
            routes: [
                { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                { path: '/dashboard/workplace', component: 'Dashboard/Workplace' },
            ]
        }]
    }],
};

