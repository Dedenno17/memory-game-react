import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setHasOpened } from "../../features/gameCards";
import { setScores } from "../../features/score";
import { setMatches } from "../../features/matches";
import ACard from "./ACard";

const GameCards = () => {
  const gameCards = useSelector((state) => state.gameCards.gameCards);

  const [hasClickedCards, setHasClickedCards] = useState(null);
  const [cardToMatch, setCardToMatch] = useState([]);

  const dispatch = useDispatch();

  const changeHasClickedCards = () => {
    setHasClickedCards((prevState) => {
      if (prevState === null) {
        return (prevState = 1);
      } else {
        return (prevState += 1);
      }
    });
  };

  const changeCardToMatch = (cardName, index) => {
    const newState = { name: cardName, index };
    setCardToMatch((prevState) => [...prevState, newState]);
  };

  const openCardHandler = (index) => {
    dispatch(
      setHasOpened({
        index,
        hasOpened: true,
      })
    );
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (hasClickedCards === 2) {
        if (cardToMatch[0].name === cardToMatch[1].name) {
          dispatch(setMatches());
          dispatch(setScores());
          setHasClickedCards(null);
          setCardToMatch([]);
        }

        if (cardToMatch[0].name !== cardToMatch[1].name) {
          setHasClickedCards(null);
          setCardToMatch([]);
          dispatch(
            setHasOpened({ index: cardToMatch[0].index, hasOpened: false })
          );
          dispatch(
            setHasOpened({ index: cardToMatch[1].index, hasOpened: false })
          );
        }
      }
    }, 700);

    return () => {
      clearTimeout(timeOut);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasClickedCards, cardToMatch]);

  return (
    <div className="container w-full h-[65vh] grid grid-cols-4 grid-rows-4 bg-[rgba(0, 0, 0, 0.2)] backdrop-blur-lg perspective-2000">
      {gameCards.map((item, i) => (
        <ACard
          key={i}
          id={i}
          name={item.name}
          img={item.img}
          hasOpened={item.hasOpened}
          onChangeClickedCards={changeHasClickedCards}
          onChangeCardToMatch={changeCardToMatch}
          onOpenCard={openCardHandler}
          hasClickedCards={hasClickedCards}
          cardToMatch={cardToMatch}
        />
      ))}
    </div>
  );
};

export default GameCards;
