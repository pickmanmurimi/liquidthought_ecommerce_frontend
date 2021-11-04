import HomeRouter from './Modules/Home/Router'
import AuthenticationRouter from './Modules/Authentication/Router'
import CheckoutRouter from './Modules/Checkout/Router'

export default [
    ...HomeRouter,
    ...AuthenticationRouter,
    ...CheckoutRouter
];
