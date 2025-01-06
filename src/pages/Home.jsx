import React, { useState } from "react";
import widdleIcon from "./../assets/waddle_logo.png";
import "./Home.css";
import CosmicPixelArt from "../assets/Cosmic-Pixel-Art.png";
import MysticForestVibes from "../assets/Mystic-Forest-Vibes.png";
import LunarEclipseSaga from "../assets/Lunar-Eclipse-Saga.png";
import GalacticPulseBeat from "../assets/Galactic-Pulse-Beat.png";
import exploreLogo from "../assets/explore-logo.png";
import { Segmented, Table } from "antd";

function Home() {
  const [alignValue, setAlignValue] = React.useState("TRENDING");
  // Sample data for cards
  const cards = [
    CosmicPixelArt,
    MysticForestVibes,
    LunarEclipseSaga,
    GalacticPulseBeat,
    CosmicPixelArt,
    MysticForestVibes,
    LunarEclipseSaga,
    GalacticPulseBeat,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move next
  const nextSlide = () => {
    if (currentIndex < cards.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to move previous
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const columns = [
    {
      title: "COLLECTION",
      dataIndex: "name",
      width: "60%",
    },
    {
      title: "FLOOR PRICE",
      dataIndex: "age",
      width: "20%",
    },
    {
      title: "VOLUME",
      dataIndex: "address",
      width: "20%",
    },
  ];
  const originalDataSource = [
    { key: "1", name: "John Brown", age: 32, address: 50 },
    { key: "2", name: "Jim Green", age: 42, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
    { key: "3", name: "Joe Black", age: 32, address: 40 },
  ];

  // Function to insert dummy rows
  const addDummyRows = (data) => {
    const newData = [];
    data.forEach((row, index) => {
      newData.push(row);
      // Add dummy row after each real row
      newData.push({
        key: `dummy-${row.key}`,
        isDummy: true, // Flag to identify dummy rows
      });
    });
    return newData;
  };

  const dataSource = addDummyRows(originalDataSource);

  return (
    <>
      {/* Navbar Section */}
      <nav
        class="navbar navbar-expand-lg bg-dark border-bottom border-body py-1"
        data-bs-theme="dark"
        style={{ padding: "0 15px" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <img src={widdleIcon} height={70} alt="" />
            <h5 class="mb-0 navbar-waddle">Waddle</h5>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Collection
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Setting
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  NFT
                </a>
              </li>
            </ul>
            <form class="d-flex align-items-center mt-3 mt-lg-0" role="search">
              <div class="position-relative flex-grow-1 me-2">
                <input
                  class="form-control navbar-input"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <i
                  class="bi bi-search position-absolute"
                  style={{
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "18px",
                    color: "white",
                  }}
                ></i>
              </div>
              <i class="bi bi-person mx-3" style={{ fontSize: "20px" }}></i>
              <button class="btn btn-outline-success get-connect" type="submit">
                Get connect
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="d-flex my-4">
          <h6 className="me-4">Digital</h6>
          <h6 className="me-4">Art</h6>
          <h6 className="me-4">Photography</h6>
          <h6 className="me-4">Music</h6>
          <h6 className="me-4">Gaming</h6>
        </div>
        <div className="top-abbs d-flex justify-content-between align-items-end">
          <div>
            <h1>ABBs</h1>
            <h1>BY ABSTRACT BANANA BROS</h1>

            <div className="d-flex">
              <div>
                <p>FLOOR PRICE</p>
                <p>111.69</p>
              </div>
              <div>
                <p>24 HR VOLUME</p>
                <p>1569.42</p>
              </div>
            </div>
          </div>
          <button className="view-collection-button d-flex justify-content-center align-content-center">
            <span style={{ margin: "auto 0px", fontSize: "18px" }}>
              View Collection
            </span>{" "}
            <i className="bi bi-arrow-up-short"></i>
          </button>
        </div>
      </div>
      <div>
        <h1 className="prominent-collection">PROMINENT COLLECTIONS</h1>
        <div className="carousel-container">
          <button className="carousel-button left" onClick={prevSlide}>
            <i class="bi bi-chevron-left"></i>
          </button>
          <div className="carousel">
            <div
              className="carousel-cards"
              style={{ transform: `translateX(-${(currentIndex * 100) / 4}%)` }} // Move cards to the left
            >
              {cards.map((card, index) => (
                <div className="carousel-card" key={index}>
                  <img className="prominent-collection-img" src={card} alt="" />
                  <div className="card-content d-flex justify-content-between my-2">
                    <h5>Cosmic Pixel Art</h5>
                    <h5>0.5</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-button right" onClick={nextSlide}>
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <Segmented
            value={alignValue}
            style={{
              marginBottom: 8,
            }}
            onChange={setAlignValue}
            options={["TRENDING", "TOP"]}
          />
        </div>
        <div className="table-parent">
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            rowClassName={(record) =>
              record.isDummy ? "dummy-row" : "normal-row"
            }
          />
        </div>
      </div>

      <div className="explore-page">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12" style={{ paddingLeft: "60px" }}>
            <div className="redefine-experience">
              <h1 className="mb-0">REDEFINE YOUR EXPERIENCE!</h1>
            </div>
            <h1 className="explore-brave-world">
              <span>EXPLORE</span> A BRAVE <br /> NEW WORLD
            </h1>
            <p>
              Trade NFTs at the lowest costs and revolutionize your experience!
              Enjoy <br /> secure, seamless, and affordable NFT trading today.
            </p>
            <button className="start-trading">START TRADING</button>
            <button className="learn-more">LEARN MORE</button>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <img src={exploreLogo} height={490} alt="" />
          </div>
        </div>
      </div>

      <footer className="footer">
        {/* Subscription Section */}
        <div className="subscribe-section py-4">
          <div className="d-flex justify-content-between row px-4 gap-3 gap-md-0 px-4">
            <div className="col-sm-12 col-md-8 ">
              <h1 className="fw-bold">Keep informed</h1>
              <p>
                Subscribe to our mailing list for updates on new features,
                drops, collaborations, exciting news & tips on exploring
                WADDLE's Marketplace!
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center col-sm-12 col-md-4">
              <div className="input-group" style={{ maxHeight: "38px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ height: "38px" }} // Adjusting height
                />
                <button
                  className="btn btn-primary pt-0"
                  type="button"
                  style={{ height: "38px" }}
                >
                  <i className="bi bi-search"></i>{" "}
                  {/* Bootstrap Icon for search */}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Main Section */}
        <div className="container py-5">
          <div className="row footer-content">
            {/* Logo and Description */}
            <div className="col-md-4">
              <img
                src={widdleIcon}
                alt="Waddle Logo"
                height={120}
                className="mb-3"
              />
              <p>
                Abstracts Premium Marketplace & Launchpad. Buy, sell & explore
                unique items exclusively on WADDLE.
              </p>
              {/* Social Icons */}
              <div className="d-flex gap-2 social-media-logo">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>Market Place</li>
                <li>Swing</li>
                <li>Launch Pad</li>
                <li>NFT</li>
                <li>Collection</li>
              </ul>
            </div>

            {/* Help */}
            <div className="col-md-4 d-flex flex-column">
              <h5>Help</h5>
              <ul className="list-unstyled">
                <li>Help Center</li>
                <li>Trust and safety</li>
                <li>Privacy settings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-3 border-top">
          <div className="container ">
            <div className="row">
              <p className="mb-0 col-sm-12 col-md-6">
                Copyright © 2024 Waddle, LLC | All rights reserved
              </p>
              <div className="col-sm-12 col-md-6 text-end">
                <a href="#" className="text-white text-decoration-none">
                  Privacy policy
                </a>
                <a href="#" className="text-white text-decoration-none">
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
