import config from '~/config';

import { HeaderOnly } from '~/layouts';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
const publicRoutes = [
    { path: config.routers.home, component: Home },
    { path: config.routers.following, component: Following },
    { path: config.routers.profile, component: Profile },
    { path: config.routers.upload, component: Upload, layout: HeaderOnly },
    { path: config.routers.search, component: Search, layout: null },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
