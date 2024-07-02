import { useEffect } from "react";
import styled from "styled-components";
import HomeIcon from '../assets/images/home-icon.svg';
import SerachIcon from '../assets/images/search-icon.svg';
import WatchIcon from '../assets/images/watchlist-icon.svg';
import OriginalsIcon from '../assets/images/original-icon.svg';
import MoviesIcon from '../assets/images/movie-icon.svg';
import SeriesIcon from '../assets/images/series-icon.svg';
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/userSlice';


const Header = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
        <Logo>Ethio+</Logo>

        {
          !username ? (<Login onClick={handleAuth}>Login</Login>) : (
        <>

        <NavMenu>
            <a href="/Ethio-plus/home">
                <img src={HomeIcon} alt="" />
                <span>HOME</span>
            </a>
            <a>
                <img src={SerachIcon} alt="" />
                <span>SEARCH</span>
            </a>
            <a>
                <img src={WatchIcon} alt="" />
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src={OriginalsIcon} alt="" />
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src={MoviesIcon} alt="" />
                <span>MOVIES</span>
            </a>
            <a>
                <img src={SeriesIcon} alt="" />
                <span>SERIES</span>
            </a>
        </NavMenu>
        <SignOut>
            <UserImg src={userphoto} alt={username} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
        )
        }
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  cursor: pointer;
  margin-top: 4px;
  font-size: 19px;
  letter-spacing: 4px;
  font-weight: bold;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 30px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    position: relative;
    gap: 10px;

    img {
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }

    span {
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;

        &:before {
          content: "";
          background-color: rgb(249, 249, 249);
          border-radius: 0px 0px 4px 4px;
          bottom: -6px;
          height: 2px;
          left: 0px;
          opacity: 0;
          position: absolute;
          right: 0px;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
          width: auto;
        }

        &:hover:before {
          visibility: visible;
          opacity: 1 !important;
          transform: scaleX(1);
        }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-radius: 4px;
    border: 1px solid #f9f9f9;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const UserImg = styled.img`
  height: 100%;
  letter-spacing: 1px;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
