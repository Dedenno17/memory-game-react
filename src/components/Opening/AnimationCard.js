import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import bgCard from "../../assets/images/back.jpg";
import { setHasOpened } from "../../features/gameCards";

const AnimationCard = (props) => {
  const gameCards = useSelector((state) => state.gameCards.gameCards);

  const [cardToMatch, setCardToMatch] = useState([]);

  const dispatch = useDispatch();

  let screenWidth = window.screen.width;

  useEffect(() => {
    setTimeout(() => {
      if (cardToMatch.length >= 2) {
        // console.log("stop");
        return;
      }
      if (screenWidth >= 375 && screenWidth < 768) {
        let random = Math.round(Math.random() * (3 - 0) + 0);
        if (cardToMatch.length !== 0) {
          if (random === cardToMatch[0].index) {
            if (random === 3) {
              const newRandom = Math.round(Math.random() * (2 - 0) + 0);
              random = newRandom;
            }
            random++;
          }
          dispatch(setHasOpened({ index: random, hasOpened: true }));
          setCardToMatch((prevState) => {
            const newState = { index: random, name: gameCards[random].name };
            return [...prevState, newState];
          });
        } else {
          dispatch(setHasOpened({ index: random, hasOpened: true }));
          setCardToMatch((prevState) => {
            const newState = { index: random, name: gameCards[random].name };
            return [...prevState, newState];
          });
        }
      }
      //   console.log("hello from effect 1");
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardToMatch]);

  useEffect(() => {
    setTimeout(() => {
      if (cardToMatch.length >= 2) {
        // console.log(cardToMatch);
        setCardToMatch([]);
        dispatch(
          setHasOpened({ index: cardToMatch[0].index, hasOpened: false })
        );
        dispatch(
          setHasOpened({ index: cardToMatch[1].index, hasOpened: false })
        );
      }
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardToMatch]);

  return (
    <div className="flex  w-full h-[55%] lg:order-2 lg:h-[40%] xl:h-[45%]">
      <div className="w-3/4 h-3/4 m-auto grid grid-cols-2 grid-rows-2 bg-[rgba(0,0,0,0.3)] backdrop-blur-[5px] shadow-lg perspective-2000 md:grid-cols-4 lg:h-full lg:gap-x-4 ">
        {gameCards.map((item, i) => (
          <div
            className={`relative w-full bg-[rgba(255,255,255,0.5)] preserve cursor-pointer transition-all duration-700 ease-in-out ${
              item.hasOpened ? "open" : ""
            }`}
            key={i}
          >
            <img
              src={item.img}
              alt="animal card"
              className="w-full h-full absolute pointer-events-none"
            />
            <img
              src={bgCard}
              alt="back card"
              className="w-full h-full absolute pointer-events-none backface-hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(AnimationCard);
