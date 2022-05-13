import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import bgCard from "../../assets/images/back.jpg";
import { setHasOpenedCard } from "../../features/animationCards";
import {
  setCardsToMatch,
  resetCardsToMatch,
} from "../../features/cardToMatchAnimation";

const AnimationCard = (props) => {
  const animationCards = useSelector((state) => state.animationCards.cards);
  const cardsToMatch = useSelector(
    (state) => state.cardToMatchAnimation.cardsToMatch
  );

  const dispatch = useDispatch();

  let screenWidth = window.screen.width;

  useEffect(() => {
    setTimeout(() => {
      if (cardsToMatch.length >= 2) {
        dispatch(resetCardsToMatch());
        dispatch(
          setHasOpenedCard({
            index: cardsToMatch[0].index,
            hasOpened: false,
          })
        );
        dispatch(
          setHasOpenedCard({
            index: cardsToMatch[1].index,
            hasOpened: false,
          })
        );
        return;
      }
      if (screenWidth >= 375 && screenWidth < 768) {
        let random = Math.round(Math.random() * (3 - 0) + 0);
        if (cardsToMatch.length !== 0) {
          if (random === cardsToMatch[0].index) {
            if (random === 3) {
              const newRandom = Math.round(Math.random() * (2 - 0) + 0);
              random = newRandom;
            }
            random++;
          }
          dispatch(setHasOpenedCard({ index: random, hasOpened: true }));
          dispatch(
            setCardsToMatch({
              name: animationCards[random].name,
              randomValue: random,
            })
          );
        } else {
          dispatch(setHasOpenedCard({ index: random, hasOpened: true }));
          dispatch(
            setCardsToMatch({
              name: animationCards[random].name,
              randomValue: random,
            })
          );
        }
      }

      if (screenWidth >= 768) {
        let random = Math.round(Math.random() * (7 - 0) + 0);
        if (cardsToMatch.length !== 0) {
          if (random === cardsToMatch[0].index) {
            if (random === 7) {
              const newRandom = Math.round(Math.random() * (6 - 0) + 0);
              random = newRandom;
            }
            random++;
          }
          dispatch(setHasOpenedCard({ index: random, hasOpened: true }));
          dispatch(
            setCardsToMatch({
              name: animationCards[random].name,
              randomValue: random,
            })
          );
        } else {
          dispatch(setHasOpenedCard({ index: random, hasOpened: true }));
          dispatch(
            setCardsToMatch({
              name: animationCards[random].name,
              randomValue: random,
            })
          );
        }
      }
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsToMatch]);

  return (
    <div className="flex  w-full h-[55%] lg:order-2 lg:h-[40%] xl:h-[45%]">
      <div className="w-3/4 h-3/4 m-auto grid grid-cols-2 grid-rows-2 bg-[rgba(0,0,0,0.3)] backdrop-blur-[5px] shadow-lg perspective-2000 md:grid-cols-4 lg:h-full lg:gap-x-4 pointer-events-none">
        {animationCards.map((item, i) => (
          <div
            className={`relative w-full bg-[rgba(255,255,255,0.5)] preserve cursor-pointer transition-all duration-700 ease-in-out ${
              item.hasOpened ? "open" : ""
            }`}
            key={i}
          >
            <img
              src={item.img}
              alt="animal card"
              className="w-full h-full absolute"
            />
            <img
              src={bgCard}
              alt="back card"
              className="w-full h-full absolute backface-hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(AnimationCard);
