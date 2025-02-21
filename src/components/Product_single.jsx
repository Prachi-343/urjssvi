import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';
import Slider from 'react-slick';
import { fetchProductById } from '../firebase';

const ProductSingle = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={product.photoURL} alt={`Thumbnail ${i}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ast_proSingle_wrapper ast_toppadder70 ast_bottompadder40">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="product_detail_wrap">
              {/* Product Details Start */}
              <div className="product_detail_cover">
                <Row>
                  <Col lg={4} md={4} sm={12} xs={12}>
                    <div className="product_slider">
                      {/* Slides */}
                      <div className="slick_item">
                        <img src={product.photoURL} className="img-responsive" alt="Product" />
                      </div>
                      {/* Slides */}
                    </div>
                  </Col>
                  <Col lg={8} md={8} sm={12} xs={12}>
                    <div className="product_description">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <div className="stock_details">{product.stock} In Stock</div>
                      <div className="prod_quantity">
                        QTY{' '}
                        <input
                          type="number"
                          name="quantity"
                          id="quantity"
                          value={quantity}
                          min="1"
                          onChange={handleQuantityChange}
                        />
                      </div>
                      <div className="product_buy">
                        <a href="/contact" className="buy_btn ast_btn">
                          <i className="fa fa-shopping-cart"></i> Buy Now
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductSingle;