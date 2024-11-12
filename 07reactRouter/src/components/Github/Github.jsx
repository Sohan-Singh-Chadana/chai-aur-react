import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Sohan-Singh-Chadana")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-3xl text-white p-4 flex  gap-14 items-center">
      <img src={data.avatar_url} alt="Gith Picture" width={300} />
      <div className="self-start">
        <p> Github followers: {data.followers}</p>
        <p> Name : {data.name}</p>
      </div>
    </div>
  );
}

export default Github;

// * github api method

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/Sohan-Singh-Chadana"
  );
  return response.json();
};
