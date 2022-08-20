import React from 'react';
// import { useHistory } from 'react-router-dom';
import './Home.css';
import { FaArrowLeft, FaCaravan } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

// import { NavLink } from 'react-router-dom';
import Login from './Login';

const Home = () => {
  // let navigate = useNavigate();
  // const routeChange = () =>{
  //   let path = `./components/Login.js`;
  //   navigate(path);
  // }

  return (
    <>
      <div className="home">
        <div className="home-left-section">
          <div className="buttons-in">
            <div>
              <Login size="sm"> Login</Login>
            </div>

            <Button className="signup">SIGN UP</Button>
          </div>
          <div>
            <h3>Shipping Information</h3>
            <div className="row">
              <div className="col-1">
                <input
                  type="text"
                  className="col-1-input"
                  placeholder="Email"
                />
              </div>
              <div className="col-2">
                <input
                  type="text"
                  className="col-2-input"
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <input
                  type="text"
                  className="col-1-input"
                  placeholder="First Name"
                />
              </div>
              <div className="col-2">
                <input type="text" className="col-2-input" placeholder="City" />
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <input
                  type="text"
                  className="col-1-input"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-2">
                <input
                  type="text"
                  className="col-2-input"
                  placeholder="Postal Code/ZIP"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <input
                  type="text"
                  className="col-1-input"
                  placeholder="Phone number"
                />
              </div>
              <div className="col-2">
                <select
                  type="text"
                  className="col-3-input"
                  placeholder="Poland"
                >
                  <option>Poland</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="home-center-section">
          <h3>Payment Method</h3>

          <div className="row">
            <Button className="paypal">
              <img className="col-1-img" src="./Images/paypal.webp" alt=""/>
            </Button>
            <Button className="visa">
              <img className="col-2-img" src="./Images/visa.jpg" alt=""/>
            </Button>

            <Button className="master-card">
              <img className="col-3-img" src="./Images/master-card.png" alt=""/>
            </Button>
          </div>

          <div className="row">
            <Button className="maestro-card">
              {' '}
              <img className="col-1-img2" src="./Images/maestro-card.png" alt=""/>
            </Button>
            <Button className="discover-card">
              {' '}
              <img className="col-2-img2" src="./Images/discover-card.jpg" alt=""/>
            </Button>
            <Button className="deal">
              {' '}
              <img className="col-3-img2" src="./Images/deal.png" alt=""/>
            </Button>
          </div>

          <h3>Delivery Method</h3>
          <div className="row">
            <Button className="inpost">
              <img className="col-1-img3" src="./Images/inpost.png" alt=""/>
            </Button>
            <Button className="dpd">
              <img className="col-2-img3" src="./Images/dpd.png" alt=""/>
            </Button>
          </div>
          <div className="row">
            <Button className="dnl">
              <img className="col-1-img4" src="./Images/dnl.png" alt=""/>
            </Button>
            <Button className="fedex">
              <img className="col-2-img4" src="./Images/fedex.jpg" alt=""/>
            </Button>
          </div>
        </div>

        <div className="home-right-section">
          <h3>Your Cart</h3>
          <div className="cart-section">
            <div>
              <img className="cart-img" src="./Images/tshirt-1.jpg" alt=""/>
            </div>

            <div className="cart-detail">
              <p>T-Shirt</p>
              <div className="cart-detail-1">
                <p>Summer Vibes</p>
                <p className="cart-price">$89.99</p>
              </div>
              <p className="cart-code">#261311</p>
            </div>
          </div>
          <div className="cart-section">
            <div>
              <img className="cart-img2" src="./Images/tshirt-3.jpg" alt=""/>
            </div>

            <div className="cart-detail">
              <p>T-Shirt</p>
              <div className="cart-detail-1">
                <p>Summer Vibes</p>
                <p className="cart-price">$89.99</p>
              </div>
              <p className="cart-code">#212315</p>
            </div>
          </div>

          <div className="cart-total-button">
            {' '}
            <Button className="cart-total">
              <p className="cart-cost-text">Total Cost</p>{' '}
              <p className="cart-cost">$159,98</p>
            </Button>
          </div>

          <div className="cart-shipping">
            <FaCaravan className="shipping-icon" />

            <p className="shipping-text">
              you are $30,02 away
              <br /> from free shipping!{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
          <FaArrowLeft className="back-icon" />
          <button className="back">Back</button>
        </div>
        <div className="last-buttons">
          <Button className="continue-shopping">Continue Shopping</Button>
          <Button className="proceed-payment">Proceed to Payment</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
