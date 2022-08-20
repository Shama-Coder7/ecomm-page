import './Header.css';
import { FaShoppingCart, FaCaravan } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <div className="header">
        <h4>Shipping and Payment</h4>

        <div>
          <ul className="icon">
            <li>
              {' '}
              <a>
                <FaShoppingCart
                  className="
                shoppingcart"
                />
              </a>
              <a>
                <FaCaravan className="caravan" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
