import React, { useState } from "react";
import "../styles/Explore.css";
import PopularCategoryCard from "../components/PopularCategoryCard";
import jollofDelights from "../assets/images/jollofDelights.png";
import ebaEgusi from "../assets/images/ebaAndEgusiSoup.png";
import pounedYam from "../assets/images/poundedYamAndEdikaikong.png";
import pepperedSnail from "../assets/images/pepperedSnail.png";
import grilledTilapia from "../assets/images/grilledTilapiaFish.png";
import jollofSmoke from "../assets/images/jollofRiceAndSmokedFish.png";
import amala from "../assets/images/amalaWithGbegiriAndEwedu.png";
import fufu from "../assets/images/fufuOkraSoup.png";

function Explore({ setCart }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.title === item.title,
      );

      if (existingItem) {
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
        return [...prevCart, { ...item, quantity: 1, total: item.price }];
      }
    });
  };

  // Category arrays
  const categoriesPopular = [
    {
      title: "Jollof Rice & Fried Chicken",
      subtitle:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken",
      image: jollofDelights,
      price: 3500,
    },
    {
      title: "Eba & Egusi Soup (Goat Meat)",
      subtitle:
        "Hearty Egusi soup with tender goat meat, served with soft Eba.",
      image: ebaEgusi,
      price: 3500,
    },
    {
      title: "Pounded Yam & Edikaikong",
      subtitle: "Traditional pounded yam with rich, leafy Edikaikong soup.",
      image: pounedYam,
      price: 3500,
    },
    {
      title: "Peppered Snail",
      subtitle: "Spicy and savory peppered snail, perfect as a starter.",
      image: pepperedSnail,
      price: 3500,
    },
    {
      title: "Grilled Tilapia Fish",
      subtitle: "Whole grilled tilapia seasoned with our special spices.",
      image: grilledTilapia,
      price: 3500,
    },
    {
      title: "Jollof Rice & Fried Chicken",
      subtitle:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken",
      image: jollofDelights,
      price: 3500,
    },
  ];

  const categoriesJollof = [
    {
      title: "Jollof Rice & Smoked Fish",
      subtitle: "Flavorful jollof rice served with perfectly smoked fish.",
      image: jollofSmoke,
      price: 3500,
    },
    {
      title: "Party Jollof Rice (Veg)",
      subtitle: "Vegetarian party jollof, full of rich flavors.",
      image: jollofDelights,
      price: 3500,
    },
    {
      title: "Party Jollof Rice (Veg)",
      subtitle: "Vegetarian party jollof, full of rich flavors.",
      image: jollofDelights,
      price: 3500,
    },
  ];

  const categoriesSwallow = [
    {
      title: "Amala with Gbegiri & Ewedu",
      subtitle:
        "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
      image: amala,
      price: 3500,
    },
    {
      title: "Fufu & Okra Soup (Fish)",
      subtitle: "Light Fufu served with fresh okra soup and tilapia fish.",
      image: fufu,
      price: 3500,
    },
    {
      title: "Fufu & Okra Soup (Fish)",
      subtitle: "Light Fufu served with fresh okra soup and tilapia fish.",
      image: fufu,
      price: 3500,
    },
  ];

  return (
    <section>
      <div className="explore-landingBg">
        <h1>Chuks Kitchen</h1>
        <h3>Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k).</h3>
      </div>

      {/* Dropdown Filter */}
      <div className="menu-categories">
        <label htmlFor="menu">Menu Categories</label>
        <br />
        <select
          className="menu"
          id="menu"
          name="menu"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="" hidden>
            Select Menu
          </option>
          <option value="Popular">Popular</option>
          <option value="Jollof">Jollof Rice & Entrees</option>
          <option value="Swallow">Swallow & Soups</option>
        </select>
      </div>

      {/* Render Popular Section */}
      {(!selectedCategory || selectedCategory === "Popular") && (
        <>
          <h2>Popular</h2>
          <div className="card-grid">
            {categoriesPopular.map((menu, index) => (
              <PopularCategoryCard
                key={index}
                image={menu.image}
                title={menu.title}
                subtitle={menu.subtitle}
                price={menu.price}
                onAddToCart={() => handleAddToCart(menu)}
                actionType="icon"
                hideAddToCart={false}
              />
            ))}
          </div>
        </>
      )}

      {/* Render Jollof Section */}
      {(!selectedCategory || selectedCategory === "Jollof") && (
        <>
          <h2>Jollof Rice & Entrees</h2>
          <div className="card-grid">
            {categoriesJollof.map((menu, index) => (
              <PopularCategoryCard
                key={index}
                image={menu.image}
                title={menu.title}
                subtitle={menu.subtitle}
                price={menu.price}
                onAddToCart={() => handleAddToCart(menu)}
                actionType="icon"
                hideAddToCart={false}
              />
            ))}
          </div>
        </>
      )}

      {/* Render Swallow Section */}
      {(!selectedCategory || selectedCategory === "Swallow") && (
        <>
          <h2>Swallow & Soups</h2>
          <div className="card-grid">
            {categoriesSwallow.map((menu, index) => (
              <PopularCategoryCard
                key={index}
                image={menu.image}
                title={menu.title}
                subtitle={menu.subtitle}
                price={menu.price}
                onAddToCart={() => handleAddToCart(menu)}
                actionType="icon"
                hideAddToCart={false}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Explore;
