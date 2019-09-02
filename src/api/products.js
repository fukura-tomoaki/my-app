// 商品リストの配列
const database =[
    {id: 1, name: '商品A', price: 100, context:'商品A詳細'},
    {id: 2, name: '商品B', price: 200, context:'商品B詳細'},
    {id: 3, name: '商品C', price: 300, context:'商品C詳細'}
]

// エクスポート先で使用できる関数オブジェクト
export default {
    fetch(id) {return database},
    find(id) {return database.find(el => el.id === id)},
    asyncFind(id, callback) {
        setTimeout(() => {
            callback(database.find(el => el.id === id))
        },1000)
    }
}