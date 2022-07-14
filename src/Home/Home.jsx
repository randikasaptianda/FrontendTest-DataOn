import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { FaRegCommentDots } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import image from "../Image/img1.jpg";
import "../../src/Home/style.css";

const Home = () => {
  return (
    <section id="main">
      <div className="container">
        <div className="navLogout">
          <Link to="/">
            <div className="logoutIcon">
              <ArrowBackIcon />
            </div>
          </Link>
        </div>
        <div className="header">
          <h1>City News</h1>
        </div>
        <div className="Part">
          <div className="Part1">
            <div className="imgPart1">
              <img src={image} alt="img1"></img>
            </div>
            <div className="descPart1">
              <div className="headerPart1">
                <div className="profilePart1">
                  <img src={image} alt="profile1"></img>
                </div>
                <div className="namePart1">
                  <h4>Andree-Ann Labranche</h4>
                  <h5>18 Nov</h5>
                </div>
              </div>
              <div className="textPart1">
                <p>We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.</p>
              </div>
              <div className="iconPart1">
                <div className="iconShare">
                  <FiShare2 />
                </div>
                <div className="commentLike">
                  <div className="iconComment">
                    <p>256</p>
                    <FaRegCommentDots />
                  </div>
                  <div className="iconLike">
                    <p>4k</p>
                    <AiOutlineHeart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Part2">
            <div className="imgPart2">
              <img src={image} alt="img1"></img>
            </div>
            <div className="descPart2">
              <div className="headerPart2">
                <div className="namePart2">
                  <h5>17 Nov</h5>
                  <h4>Adrien Stone</h4>
                </div>
                <div className="profilePart2">
                  <img src={image} alt="img1"></img>
                </div>
              </div>
              <div className="textPart2">
                <p>If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.</p>
              </div>
            </div>
          </div>

          <div className="Part3">
            <div className="imgPart3">
              <img src={image} alt="img1" />
            </div>
            <div className="descPart3">
              <div className="headerPart3">
                <div className="profilePart3">
                  <img src={image} alt="img1" />
                </div>
                <div className="namePart3">
                  <h5>16 Nov</h5>
                  <h4>Bernard Noian</h4>
                </div>
              </div>
              <div className="textPart3">
                <p>You can't fall if you don't climb. But there's no joy in living your whole life on the.</p>
              </div>
            </div>
          </div>

          <div className="Part4">
            <div className="imgPart4">
              <img src={image} alt="img1"></img>
            </div>
            <div className="descPart4">
              <div className="headerPart4">
                <div className="namePart4">
                  <h5>17 Nov</h5>
                  <h4>Adrien Stone</h4>
                </div>
                <div className="profilePart4">
                  <img src={image} alt="img1"></img>
                </div>
              </div>
              <div className="textPart4">
                <p>If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.</p>
              </div>
            </div>
          </div>

          <div className="Part5">
            <div className="imgPart5">
              <img src={image} alt="img1" />
            </div>
            <div className="descPart5">
              <div className="headerPart5">
                <div className="profilePart5">
                  <img src={image} alt="img1" />
                </div>
                <div className="namePart5">
                  <h5>16 Nov</h5>
                  <h4>Bernard Noian</h4>
                </div>
              </div>
              <div className="textPart5">
                <p>You can't fall if you don't climb. But there's no joy in living your whole life on the.</p>
              </div>
            </div>
          </div>

          <div className="Part6">
            <div className="imgPart6">
              <img src={image} alt="img1"></img>
            </div>
            <div className="descPart6">
              <div className="headerPart6">
                <div className="namePart6">
                  <h5>17 Nov</h5>
                  <h4>Adrien Stone</h4>
                </div>
                <div className="profilePart6">
                  <img src={image} alt="img1"></img>
                </div>
              </div>
              <div className="textPart6">
                <p>If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.</p>
              </div>
            </div>
          </div>

          <div className="Part7">
            <div className="imgPart7">
              <img src={image} alt="img1" />
            </div>
            <div className="descPart7">
              <div className="headerPart7">
                <div className="profilePart7">
                  <img src={image} alt="img1" />
                </div>
                <div className="namePart7">
                  <h5>16 Nov</h5>
                  <h4>Bernard Noian</h4>
                </div>
              </div>
              <div className="textPart7">
                <p>You can't fall if you don't climb. But there's no joy in living your whole life on the.</p>
              </div>
            </div>
          </div>
          <div>
            <button className="postNewsBtn">POST NEWS</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
