import React, { useEffect, useState } from "react";
import "../style/Country.css";

const Country = () => {
  const [counts, setCounts] = useState({
    country: 0,
    cities: 0,
    clients: 0,
  });

  const givenCounts = {
    country: 100,
    cities: 150,
    clients: 671,
  };

  const updateInterval = 100;

  useEffect(() => {
    let isMounted = true;
    const increaseCounts = () => {
      setCounts((prevCounts) => ({
        country:
          prevCounts.country < givenCounts.country
            ? prevCounts.country + 5
            : givenCounts.country,
        cities:
          prevCounts.cities < givenCounts.cities
            ? prevCounts.cities + 8
            : givenCounts.cities,
        clients:
          prevCounts.clients < givenCounts.clients
            ? prevCounts.clients + 25
            : givenCounts.clients,
      }));
    };

    const interval = setInterval(() => {
      if (isMounted) {
        increaseCounts();
      }
    }, updateInterval);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="country">
      <div className="container">
        <div className="row reach-section">
          <div className="country-card col-md-4">
            <div className="reach">{counts.country}+ COUNTRIES</div>
          </div>
          <div className="city-card col-md-4">
            <div className="reach">{counts.cities}+ CITIES</div>
          </div>
          <div className="client-card col-md-4">
            <div className="reach">{counts.clients}+ CLIENTS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
