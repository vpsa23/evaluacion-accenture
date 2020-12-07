import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Details from '../pages/Details';

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/details",
        component: Details
    },
    {
        path: "/not-found",
        component: NotFound
    },
];

export {
    routes,
    NotFound
};
