import HomePage from '../../pages/home'
import CheckoutPage from '../../pages/checkoutPage'

export interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}


export const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        exact: true
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: CheckoutPage,
        exact: false
    },

]


