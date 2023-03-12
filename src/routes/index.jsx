import routersConfig from '~/config/router';

import { HeaderOnly } from '~/components/Layout';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
const publicRoutes = [
    { path: routersConfig.home, component: Home },
    { path: routersConfig.following, component: Following },
    { path: routersConfig.profile, component: Profile },
    { path: routersConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routersConfig.search, component: Search, layout: null },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
