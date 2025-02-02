import React from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';

const Shoping = () => {
  return (
    <div className="ast_shop_wrapper ast_toppadder70 ast_bottompadder70">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="ast_shop_main">
              <div className="row">
                <Product
                  imageSrc="https://dummyimage.com/264x211"
                  productName="navgraha Yantra"
                  price="$30.00"
                />
                <Product
                  imageSrc="https://dummyimage.com/264x211"
                  productName="rudraksha"
                  price="$30.00"
                />
                <Product
                  imageSrc="https://dummyimage.com/264x211"
                  productName="feng shui"
                  price="$30.00"
                />
                <Product
                  imageSrc="https://dummyimage.com/264x211"
                  productName="gemstones"
                  price="$30.00"
                />
                <Product
                  imageSrc="https://dummyimage.com/264x211"
                  productName="jadi-buti"
                  price="$30.00"
                />
                <Product
                  imageSrc="https://dummyimage.com/264x211"
                  productName="gift items"
                  price="$30.00"
                />
                <Product
                  imageSrc="https://dummyimage.com/264x211"
                  productName="Yantra"
                  price="$30.00"
                />
                <Product
                  imageSrc="https://dummyimage.com/264x211"
                  productName="gemstones"
                  price="$30.00"
                />
                <Product
                  imageSrc="https://dummyimage.com/264x211"
                  productName="Feng shui"
                  price="$30.00"
                />
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="ast_pagination">
                    <ul className="pagination">
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a className="active" href="#">Next</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="ast_shop_sidebar sidebar_wrapper">
              <aside className="widget widget_filter">
                <h4 className="widget-title">filter by price</h4>
                <div id="slider-range" className="price-filter-range" name="rangeInput"></div>
                <div className="filter_input">
                  <input type="text" min="0" max="9900" id="min_price" className="price-range-field" />
                  <input type="text" min="0" max="10000" id="max_price" className="price-range-field" />
                </div>
                <button className="price-range-search ast_btn" id="price-range-submit">Search</button>
              </aside>
              <aside className="widget widget_categories">
                <h4 className="widget-title">Categories</h4>
                <ul>
                  <li><a href="#">yantra</a></li>
                  <li><a href="#">navgraha yantra</a></li>
                  <li><a href="#">books</a></li>
                  <li><a href="#">gemstone</a></li>
                  <li><a href="#">ring</a></li>
                  <li><a href="#">feng shui</a></li>
                  <li><a href="#">lucky stones</a></li>
                </ul>
              </aside>
              <aside className="widget widget_latest_product">
                <h4 className="widget-title">new products</h4>
                <ul>
                  <li><a href="#">gemstone</a></li>
                  <li><a href="#">navgraha yantra</a></li>
                  <li><a href="#">rings</a></li>
                  <li><a href="#">yantra</a></li>
                  <li><a href="#">books</a></li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = ({ imageSrc, productName, price }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="ast_product_section">
        <div className="ast_product_image">
          <a href="shop_single.html"><img src={imageSrc} className="img-responsive" alt={productName} /></a>
        </div>
        <div className="ast_product_info">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
          <h4 className="ast_shop_title"><a href="shop_single.html">{productName}</a></h4>
          <p>{price}</p>
          <div className="ast_info_bottom">
            <a href="cart.html" className="ast_add_cart ast_btn">add to cart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoping;