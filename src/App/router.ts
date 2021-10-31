import HomeRouter from './Modules/Home/Router'
import AuthenticationRouter from './Modules/Authentication/Router'

export default [
    ...HomeRouter,
    ...AuthenticationRouter,
];
