import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthModal } from "../Modals/AuthModal";
import "./css/HomeHeader.css";
import { IoBook } from "react-icons/io5";

function HomeHeader({ signInPopup, backgroundColor }) {
  const [modal, setModal] = React.useState(false);
  const location = useLocation();
  return (
    <header>
      <div
        style={{
          backgroundColor: backgroundColor,
        }}
        className="header"
      >
        <div className="header-left">
          <div className="now">
          <Link to={"/"}>
              <IoBook size="50px" />
              </Link>
          </div>
          <div className="then">
          <Link to={"/"}>
          <h2><b>INKSCRIBE</b></h2>
          </Link>
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-options-button">
            <div className="header-right-option">
              <Link to="/our-story">
                <span
                  style={{
                    fontWeight: location.pathname === "/our-story" && "bold",
                    textDecoration:
                      location.pathname === "/our-story" && "underline",
                  }}
                >
                  Our story
                </span>
              </Link>
            </div>
            <div className="header-right-option">
              <Link to="/membership">
                <span
                  style={{
                    fontWeight: location.pathname === "/membership" && "bold",
                    textDecoration:
                      location.pathname === "/membership" && "underline",
                  }}
                >
                  Membership
                </span>
              </Link>
            </div>
            <div className="header-right-option">
              <Link to="/creators">
                <span
                  style={{
                    fontWeight: location.pathname === "/creators" && "bold",
                    textDecoration:
                      location.pathname === "/creators" && "underline",
                  }}
                >
                  Write
                </span>
              </Link>
            </div>
            <div className="header-right-option">
              <span onClick={() => setModal(true)}>Sign In</span>
            </div>
            <div className="header-right-started">
              <span>
                <button
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => setModal(true)}
                >
                  Get started
                </button>
              </span>
            </div>
            <AuthModal
              signInPopup={signInPopup}
              open={modal}
              setOpen={setModal}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
