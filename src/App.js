import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Locations from "./components/Locations";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [destinations, setDestinations] = useState([
    {
      id: "rec6d6T3q5EBIdCfD",
      name: "Best of Paris in 7 Days Tour",
      info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      image:
        "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
      price: "1,995",
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);

  const getTours = async () => {
    const res = await fetch(url);
    const response = await res.json();

    console.log(response);
    setDestinations(response);
    setIsLoading(false);
  };

  const clickUninterested = (id) => {
    setDestinations(destinations.filter((x) => x.id != id));
  };

  useEffect(() => {
    getTours();
  }, []);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {destinations.map((location) => {
              return (
                <div className="cards">
                  <Locations obj={location} />
                  <button
                    className="button-6"
                    onClick={() => {
                      clickUninterested(location.id);
                    }}
                  >
                    Not Interested
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
