import Vue from 'vue'
import VueRouter from 'vue-router'

//コンポーネント
import Home from '@/views/Home.vue'
import ProductList from '@/views/ProductList.vue' //商品一覧
import Product from '@/views/Product.vue'　　　　　//商品詳細（親ルート）
import productHome from '@/views/Product/Home.vue'
import productReview from '@/views/Product/Review.vue'
import productReviewDetail from '@/views/Product/ReviewDetail.vue'


//VueRouterをプラグインとして登録
Vue.use(VueRouter)

// ルーターにパスとコンポーネントをマッピング
const router = new VueRouter({
    base: '/my-app/',
    mode:'history',
    routes:[
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
                    component: productReviewDetail
                }

            ]
        }
    ]
})

//生成したルーターをエクスポート
export default router