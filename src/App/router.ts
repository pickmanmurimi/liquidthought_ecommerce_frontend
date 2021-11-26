import HomeRouter from './Modules/Home/Router'
import AuthenticationRouter from './Modules/Authentication/Router'
import CheckoutRouter from './Modules/Checkout/Router'
import OrdersRouter from './Modules/Orders/Router'

export default [
    ...HomeRouter,
    ...AuthenticationRouter,
    ...CheckoutRouter,
    ...OrdersRouter,
];
