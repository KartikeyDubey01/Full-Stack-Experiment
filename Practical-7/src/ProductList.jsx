function ProductList(){
    return(
        <div>
            <h2>Product List</h2>
            <div className="product">
                <p><b>Wireless Mouse</b></p>
                <p>Price: $25</p>
                <p>Status: In Stock</p>
            </div>
            <div className="product">
                <p><b>Keyboard</b></p>
                <p>Price: $45</p>
                <p>Status: Out Of Stock</p>
            </div>
            <div className="product">
                <p><b>Monitor</b></p>
                <p>Price: $150</p>
                <p>Status: In Stock</p>
            </div>
        </div>
    )
}

export default ProductList;