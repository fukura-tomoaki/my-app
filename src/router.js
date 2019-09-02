import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import ProductList from '@/views/ProductList.vue' //商品一覧
import Product from '@/views/Product.vue'　　　　　//商品詳細（親ルート）

// プロダクトの子ルートたち
import productHome from '@/views/Product/Home.vue'
import productReview from '@/views/Product/Review.vue'
import productReviewDetail from '@/views/Product/ReviewDetail.vue'
import store from './store';


//VueRouterをプラグインとして登録
Vue.use(VueRouter)

// ルーターにパスとコンポーネントをマッピング
const router = new VueRouter({
    base: '/my-app/',
    mode:'history',
    routes:[
        {
            path: '/',
            component: Home
        },
        //商品一覧ページ
        { 
            path:'/product',
            component: ProductList
        },
        // 商品情報ページ
        { 
            path:'/product/:id',
            component: Product, 
            props: route => ({id: Number(route.params.id)}),
            children: [
                // 商品詳細（デフォルトルート）
                {
                    name: 'product-home',
                    path: '',
                    component: ProductHome
                },
                // 商品のレビュー一覧
                {
                    name: 'product-review',
                    path: 'review',
                    component: productReview
                },
                // 商品のレビュー詳細
                {
                    name: 'review-detail',
                    path: 'review/:rid',
                    component: productReviewDetail,
                    props: route => ({
                        rid: Number(route.params.rid)
                    })
                }

            ]
        }
    ]
})


// ルーターナビゲーション前にフック
router.beforeEach((to, from ,next) => {
    store.commit('view/start')
    next()
})

// ルーターナビゲーション後にフック
router. afterEach((to, from ,next) => {
    store.commit('view/end')
})

//生成したルーターをエクスポート
export default router