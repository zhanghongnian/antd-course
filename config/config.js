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
        }]
    }],
};

