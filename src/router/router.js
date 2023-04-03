import Index from '../pages/index/index'
import Home from '../pages/home'
import Transactions from '../pages/transactions/'
import Pending from '../pages/pending'
import Blocks from '../pages/blocks'
import Accounts from '../pages/accounts'
import Address from '../pages/address'
import TransactionsDetail from '../pages/transactionsDetail'
import BlocksDetail from '../pages/blocksDetail'


// 菜单相关路由
export const menus = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/transactions', exact: true, name: 'transactions', component: Transactions },
    { path: '/pending', exact: true, name: 'pending', component: Pending },
    { path: '/blocks', exact: true, name: 'blocks', component: Blocks },
    { path: '/accounts', exact: true, name: 'accounts', component: Accounts },
    { path: '/address', exact: true, name: 'address', component: Address },
    { path: '/transactionsDetail', exact: true, name: 'transactionsDetail', component: TransactionsDetail },
    { path: '/blocksDetail', exact: true, name: 'blocksDetail', component: BlocksDetail },
]

//登录、首页、404路由
export const main = [
    { path: '/',  name: 'Home', component: Index, routes: menus },
    // { path: '/Index',  name: '首页', component: Index, routes: menus },
]

export const routerExport =  {
    main, menus
}