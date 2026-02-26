import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import PopularCategoryCard from "../components/PopularCategoryCard";
import jollofDelights from "../assets/images/jollofDelights.png";
import swallowAndSoups from "../assets/images/swallowAndSoups.png";
import grillsAndBBQ from "../assets/images/grillsAndBBQ.png";
import spicyTilapia from "../assets/images/spicyTilapiaPepperSoup.png";
import jollofRice from "../assets/images/jollofRiceAndFriedChicken.png"
import egusiSoup from "../assets/images/egusiSoupAndPounedYam.png"
import "../styles/Home.css";

function Home({ setCart }) {
  // navigate the explore page
  const navigate = useNavigate();
  // add cart to my order
 const handleAddToCart = (item) => {
   setCart((prevCart) => {
     const existingItem = prevCart.find(
       (cartItem) => cartItem.title === item.title,
     );

     if (existingItem) {
       // Increase quantity and total
       return prevCart.map((cartItem) =>
         cartItem.title === item.title
           ? {
               ...cartItem,
               quantity: cartItem.quantity + 1,
               total: (cartItem.quantity + 1) * cartItem.price,
             }
           : cartItem,
       );
     } else {
       // Add new item with total
       return [...prevCart, { ...item, quantity: 1, total: item.price }];
     }
   });
 };
//  search food categories
const [searchTerm, setSearchTerm] = useState("");
  // Array of object cards with out add to cart
  const categories = [
    { title: "Jollof Delights", image: jollofDelights },
    { title: "Swallow & Soups", image: swallowAndSoups },
    { title: "Grills & BBQ", image: grillsAndBBQ },
  ];
  // Array of object cards with add to cart
  const categoriesWithAddCart = [
    {
      title: "Spicy Tilapia Pepper Soup",
      subtitle:
        "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
      image: spicyTilapia,
      price: 3500,
    },
    {
      title: "Jollof Rice & Fried Chicken",
      subtitle:
        "Our signature Jollof rice, cooked to perfection,served with succulent fried chicken",
      image: jollofDelights,
      price: 3500,
    },

    {
      title: "Jollof Rice & Fried Chicken",
      subtitle:
        "Our signature Jollof rice, cooked to perfection,served with succulent fried chicken",
      image: jollofDelights,
      price: 3500,
    },
    {
      title: "Jollof Rice & Fried Chicken",
      subtitle:
        "Our signature Jollof rice, cooked to perfection,served with succulent fried chicken",
      image: jollofDelights,
      price: 3500,
    },
    {
      title: "Jollof Rice & Fried Chicken",
      subtitle:
        "Our signature Jollof rice, cooked to perfection,served with succulent fried chicken",
      image: jollofRice,
      price: 3500,
    },
    {
      title: "Egusi Soup & Pounded Yam",
      subtitle:
        "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
      image: egusiSoup,
      price: 3500,
    },
  ];
  const filteredFoods = categoriesWithAddCart.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <>
      {/* home page */}
      <section>
        {/* text,buttons and input overlay on bg image */}
        <div className="landing-bg">
          <h1 className="landing-title">
            The Heart of Nigerian Home <br /> Cooking
          </h1>
          <h3 className="landing-subtitle">
            Handcrafted with passion, delivered with care.
          </h3>
          <button
            className="discover-button"
            id="discover-button"
            onClick={() => navigate("/explore")}
          >
            Discover what's new
          </button>
          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="search"
              placeholder="What are you craving for today?"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        {/* cards mapping */}
        <div className="home-container">
          <h2 className="menu-title">Popular Categories</h2>
          <div className="card-grid">
            {categories.map((category, index) => (
              <PopularCategoryCard
                key={index}
                title={category.title}
                image={category.image}
              />
            ))}
          </div>
          {/* link to view more */}
          <a href="#" className="view-more-link">
            View All Categories
          </a>
          {/* cards with add to cart mapping */}
          <h2 className="menu-title">Chef's Specials</h2>
          <div className="card-grid card-grid-lg">
            {(searchTerm ? filteredFoods : categoriesWithAddCart).map(
              (category, index) => (
                <PopularCategoryCard
                  key={index}
                  title={category.title}
                  image={category.image}
                  subtitle={category.subtitle}
                  price={category.price}
                  onAddToCart={() => handleAddToCart(category)}
                />
              ),
            )}
          </div>
          {/* link to view more */}
          <a href="#" className="view-more-link">
            View All Specials
          </a>
          {/* home bottom page and text, buttons overlay on bg image */}
          <div className="landing-bg bottom-bg">
            <h1 className="landing-title">
              Introducing Our New Menu Additions!
            </h1>
            <h3 className="landing-subtitle">
              Explore exciting new dishes, crafted with the freshest ingredients
              and authentic Nigerian flavors. Limited time offer!
            </h3>
            <button
              className="discover-button"
              onClick={() => navigate("/explore")}
            >
              Discover what's new
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
