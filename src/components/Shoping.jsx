import React, { useEffect, useState } from 'react';
import { fetchAllProducts } from '../firebase';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';

const Shoping = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsList = await fetchAllProducts();
        setProducts(productsList);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="ast_shop_wrapper ast_toppadder70 ast_bottompadder70">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="ast_shop_main">
              <div className="row">
                {products.map(product => (
                  <Product
                    key={product.id}
                    imageSrc={product.photoURL}
                    productName={product.name}
                    price={product.price}
                    productId={product.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = ({ imageSrc, productName, price, productId }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="ast_product_section">
        <div className="ast_product_image">
          <a href={`/product/${productId}`}><img src={imageSrc} className="img-responsive" alt={productName} /></a>
        </div>
        <div className="ast_product_info">
          <h4 className="ast_shop_title"><a href={`/product/${productId}`}>{productName}</a></h4>
          <p>₹{price}</p>
          <div className="ast_info_bottom">
            <a href={`/product/${productId}`} className="ast_add_cart ast_btn">add to cart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoping;