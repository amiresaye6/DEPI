import ProductsData from '../ProductsData';
import ProductCard from './ProductCard';

function ProductsList () {
    const products = ProductsData.map((product) => {
        // return (
        //     product.price > 100? <ProductCard key={product.id} product={product} />: null
        // )
        return (
            product.price > 100 && (<ProductCard key={product.id} product={product} />)
        )
    })
    console.log(ProductsData)
    return (
        <div className="productslist">
            {products}
        </div>
    )
}

export default ProductsList;