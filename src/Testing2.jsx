import React, { useState, useEffect } from "react";

const Testing2 = () => {
  const [reverseGeocodedAddress, setReverseGeocodedAddress] = useState(null);

  useEffect(() => {
    const apiKey = "pk.abc469b9f78bca652e6cedf09705e250";
    const latitude = 23.73007 ;
    const longitude = 90.38744;

    // Construct the API URL for reverse geocoding
    const apiUrl = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`;

    // Make a GET request to the LocationIQ API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // const address = data.display_name;
        // const address = data.display_name;
        const fullAddress = data.display_name;
        // Find the index of "Dhaka" in the full address
        const dhakaIndex = fullAddress.indexOf("Dhaka");
        // If "Dhaka" is found, slice the address up to "Dhaka"
        const slicedAddress =
          dhakaIndex !== -1
            ? fullAddress.slice(0, dhakaIndex + "Dhaka".length)
            : fullAddress;

        const address = slicedAddress;
        //   setAddress(address);
        //   console.log("Address: " + address);
        setReverseGeocodedAddress(address);
      })
      .catch((error) => {
        console.error("Error fetching address:", error);
      });
  }, []);

  return (
    <div>

      <h2>Reverse Geocoded Address:</h2>
      <p>{reverseGeocodedAddress}</p>
    </div>
  );
};

export default Testing2;
