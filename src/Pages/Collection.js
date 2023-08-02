import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "../Categories";
import { paints_url } from "../utils/constants";
import { links } from "../data";
import Whatsapp from "../Whatsapp";
import Footer from "../Footer";
import FetchPaintsInfo from "../FetchPaintsInfo";
import { is } from "@babel/types";
import Loader from "../Loader";

function Collection() {
  const [gallery, setGallery] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredGallery, setFilteredGallery] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("הכל");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPaintsInfo();
  }, []);

  const fetchPaintsInfo = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(paints_url);
      const data = await response.data;

      setGallery(data);

      const allCategories = [
        "הכל",
        ...new Set(data.map((item) => item.category)),
      ];

      setCategories(allCategories);
      setFilteredGallery(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const filterItems = (category) => {
    if (category === "הכל") {
      setFilteredGallery(gallery);
    } else {
      const newItems = gallery.filter((item) => item.category === category);
      setFilteredGallery(newItems);
      console.log(newItems);
    }
  };
  if (isLoading) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }
  return (
    <main>
      <section className="menu section">
        {/* <div className="title">
          <h3> אוסף העבודות שלי</h3>
          <div className="underline"></div>
        </div> */}
        <Categories
          categories={categories}
          filterItems={filterItems}
          selectedCategory={selectedCategory}
        />
        <FetchPaintsInfo paints={filteredGallery} />
      </section>
      <Whatsapp />
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Collection;
