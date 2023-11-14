import React, { useState, useEffect, useContext } from "react";
import ProfileComponent from "./ProfileComponent";
import { AuthContext } from "../../Providers/AuthProviders";
import BarLoader from "react-spinners/BarLoader";
import { Link } from "react-router-dom";

function PersonList2({ searchString }) {
  const userId = localStorage.getItem("userID");
  const [recommendationValue, setRecommendationValue] = useState(0);
  const { user } = useContext(AuthContext);
  const isLoggedIn = !!userId; // Convert to a boolean
  
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefreshClick = () => {
    // Increment the key to trigger a re-render
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#4C40ED",
  };

  const [loading, setLoading] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);
  const predefinedColors = ["#4C40ED", "#0000FF", "#ab20fd"];
  const [dataArray, setDataArray] = useState([]);
  const [initialData, setInitialData] = useState([]);

  const x = searchString;

  const apiUrl = `http://localhost:5000/providers/providers/${userId}/${x}`;
  const apiUrlnew = `https://smart-recommendation-model.vercel.app/api/v1/hello?id=${userId}&category=${x}`;
  const [recommendationId, setRecommendationId] = useState(null);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % predefinedColors.length);
    }, 1500);

    return () => clearInterval(colorInterval);
  }, []);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setDataArray(data);
        setInitialData(data); // Store the initial data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apiUrl]);

  const recommendation = async () => {
    setRecommendationValue(1);
    try {
      console.log("Hello");
      const response = await fetch(apiUrlnew);
      const data = await response.json();

      if (data) {
        setRecommendationId(data.recommendation);
      }
      console.log(recommendationId); // Move the log here
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch data based on recommendationId or recommendationValue
    if (recommendationId !== null || recommendationValue === 1) {
      const apiUrlnew2 = `http://localhost:5000/providers/providersProfile?id=${recommendationId}`;
      fetch(apiUrlnew2)
        .then((response) => response.json())
        .then((data) => {
          setDataArray(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [recommendationId]);

  const handleShowAllClick = () => {
    // Reset the recommendation state and show the initial results
    setRecommendationValue(0);
    setRecommendationId(null);
    setDataArray(initialData);
  };

  if (!user) {
    return (
      <div style={{ marginLeft: "50%", marginTop: "2%" }}>
        {isLoggedIn ? (
          <BarLoader
            color={predefinedColors[colorIndex]}
            loading={loading}
            css={override}
            size={9}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <p style={{ marginLeft: "-25%" }}>
            Please{" "}
            <Link to={"/login"}>
              <span style={{ color: "#4C40ED" }}>Login</span>
            </Link>{" "}
            or{" "}
            <Link to={"/reg"}>
              <span style={{ color: "#4C40ED" }}>Signup</span>
            </Link>{" "}
            first
          </p>
        )}
      </div>
    );
  }

  return (
    <section key={refreshKey}>
      <div
        className="tooltip tooltip-right"
        data-tip="This recommendation system provides personalized suggestions to users based on their history and preferences"
      >
        <button
          style={{ marginBottom: "10px", marginTop: "10px", color: "white" , whiteSpace: "nowrap"}}
          onClick={recommendation}
          className="btn btn-primary"
        >
          Smart Recommendation
        </button>
       
      </div> {recommendationValue === 1 && (
          <p
            style={{ marginTop: "5px", marginBottom: "5px", fontSize: "18px" }}
          >
            Recommended <span style={{ color: "#4C40ED" }}>{x}</span> for you
          </p>
        )}
      {dataArray.slice(0, 5).map((person, personIndex) => (
        <ProfileComponent {...person} key={person.id} />
      ))}
      {recommendationValue === 1 && (
        <button
          style={{ marginBottom: "10px", marginTop: "10px", color: "white" }}
          onClick={handleShowAllClick}
          className="btn btn-primary"
        >
          Show All
        </button>
      )}
    </section>
  );
}

export default PersonList2;
