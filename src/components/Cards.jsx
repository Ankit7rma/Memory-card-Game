// import { useEffect } from "react";
// import { useState } from "react";

// const Cards = () => {
//   const [currentScore, setCurrentScore] = useState(0);
//   const [maxScore, setMaxScore] = useState(0);
//   const [cardsData, setCardsData] = useState([]);

//   useEffect(() => {
//     const fetchCards = async () => {
//       const response = await fetch(
//         "https://api.slingacademy.com/v1/sample-data/photos"
//       );
//       const data = await response.json();
//       // console.log(data.results);
//       setCardsData(data.photos);
//     };
//     fetchCards();
//     console.log(cardsData);
//   }, []);
//   // const shuffleCards = () => {
//   //   const shuffledCards = [...cardsData];
//   //   for (let i = shuffledCards.length - 1; i > 0; i--) {
//   //     const j = Math.floor(Math.random() * (i + 1));
//   //     [shuffledCards[i], shuffledCards[j]] = [
//   //       shuffledCards[j],
//   //       shuffledCards[i],
//   //     ];
//   //   }
//   //   setCardsData(shuffledCards);
//   // };
//   const shuffleCards = () => {
//     const shuffledCards = [...cardsData].sort(() => Math.random() - 0.5);
//     setCardsData(shuffledCards);
//   };
//   const handleClick = () => {
//     setCurrentScore((currentScore) => currentScore + 1);
//     shuffleCards();
//   };
//   return (
//     <div className="w-full h-full  bg-purple-600 rounded-md p-15 ">
//       <div className="float-right mr-60">
//         <h1 className="text-2xl fixed text-black-600">
//           Current Score: {currentScore}
//         </h1>
//         <h1 className=" text-2xl fixed mt-7 text-gray-200">
//           Max Score: {maxScore}
//         </h1>
//       </div>
//       <div className="flex flex-wrap">
//         {cardsData.map((el) => {
//           return (
//             <div
//               onClick={handleClick}
//               key={el.title}
//               className="flex flex-col gap-3 p-10 m-10 bg-neutral-500 rounded-lg"
//             >
//               <h1 className="text-2xl flex flex-wrap">{el.title}</h1>
//               <img src={el.url} alt={el.title} className="w-64 h-64" />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Cards;
import { useEffect, useState } from "react";

const Cards = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [cardsData, setCardsData] = useState([]);
  const [clickedTitles, setClickedTitles] = useState([]);

  // const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(
        "https://api.slingacademy.com/v1/sample-data/photos"
      );
      const data = await response.json();
      setCardsData(data.photos);
    };
    fetchCards();
  }, []);

  const shuffleCards = () => {
    const shuffledCards = [...cardsData].sort(() => Math.random() - 0.5);
    setCardsData(shuffledCards);
  };

  const handleClick = (title) => {
    if (clickedTitles.includes(title)) {
      // If the title is already clicked, reset currentScore and the clickedTitles array
      setMaxScore(currentScore);
      setCurrentScore(0);
      setClickedTitles([]);
    } else {
      setCurrentScore((currentScore) => currentScore + 1);
      setClickedTitles((prevTitles) => [...prevTitles, title]);
    }

    shuffleCards();
  };

  return (
    <div className="w-full h-full bg-purple-600 rounded-md p-15">
      <div className="float-right mr-60">
        <h1 className="text-2xl fixed text-black-600">
          Current Score: {currentScore}
        </h1>
        <h1 className="text-2xl fixed mt-7 text-gray-200">
          Max Score: {maxScore}
        </h1>
      </div>
      <div className="flex flex-wrap">
        {cardsData.map((el) => (
          <div
            onClick={() => handleClick(el.title)}
            key={el.title}
            className="flex flex-col gap-3 p-10 m-10 bg-neutral-500 rounded-lg"
          >
            <h1 className="text-2xl flex flex-wrap">{el.title}</h1>
            <img src={el.url} alt={el.title} className="w-64 h-64" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
