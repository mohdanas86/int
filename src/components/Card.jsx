import { useState, useEffect } from 'react';
import axios from 'axios';
import { RiDoubleQuotesL } from "react-icons/ri";

const Card = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
      console.log(response.data[0]);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center w-full md:w-[80%] mx-auto px-4 md:px-0 py-4">
      <div
        className="flex flex-col justify-center items-start md:w-[40%] w-[80%] bg-white border shadow text-slate-700 p-4 gap-4"
        style={{ borderLeft: "4px solid #17c717" }}
      >
        <div className="text-3xl text-green-600">
          <RiDoubleQuotesL />
        </div>
        {data && data.map((quote, index) => (
          <h2 key={index}>{quote}</h2>
        ))}
      </div>
    </div>
  );
};

export default Card;
