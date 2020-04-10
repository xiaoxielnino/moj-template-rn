import Home from './container/home';
import Detail from './container/detail';

// 页面跳转使用 this.props.navigation.navigate(`${name}`)
const RouteConfig = {
    home: {
        screen: Home,
        path: 'home'
    },
    detail: {
        screen: Detail,
        path: 'detail'
    },
};

function InitConfig(route = 'home') {
    return {
        initialRouteName: route,
    };
}


export {
    RouteConfig,
    InitConfig
};
