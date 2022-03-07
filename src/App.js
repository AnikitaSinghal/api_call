import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.npoint.io/8f87afbdb4b96f0824aa")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error is", err);
      });
  }, []);
  if (isloading) {
    return "Loading....";
  }
  return <h1>API CALL DEMO</h1>;
}
