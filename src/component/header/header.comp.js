import React from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { connect } from "react-redux";
import './header.style.scss'
import {auth} from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.comp';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header = ({currentUser,hidden}) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon></CartIcon>
      </div>
     {hidden ? null : <CartDropdown />}
    </div>
  );
};
const mapState = ({user: {currentUser}, cart :{hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapState,null)(Header);