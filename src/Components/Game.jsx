import React, { useContext, useEffect, useState } from "react";
import "../function/createArray";
import { ArrayQuestionsQuotes } from "../function/createArray";
import "../style/Game.css";
import ButtonNextQuest from "./ButtonNextQuest";
import ButtonMenu from "./ButtonMenu";
import { GenreContext } from "../hook/context";
import { spatnavInstance, useSection } from "@salutejs/spatial";

const Game = ({
  res,
  setModalRes,
  assistant_global,
  menu,
  setMenu,
  answ,
  setAnsw,
  next,
  setNext,
}) => {
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [arrayQuestions, setArrayQuestions] = useState([]);
  const [btnState, setBtnState] = useState(false);
  const [btn, setBtnColor] = useState(
    Array(4).fill({ background: "white", color: "black" })
  );
  const [offGameButton, setOffGameButton] = useState(false);
  const [BtnMenuState, setBtnMenuState] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const { genre } = useContext(GenreContext);

  const [allButtonSection, customizeAllButton] = useSection("AllButton");
  const [gameButtonSection, customizeGameButton] = useSection("GameButton");

  useEffect(() => {
    if (currentQuestions !== 9) {
      if (answ !== null && btnState === false) {
        customizeGameButton({
          disabled: true,
        });
        checkAnsw(answ - 1);
        setAnsw(null);
      }
    } else {
      if (answ !== null && BtnMenuState === false) {
        customizeGameButton({
          disabled: true,
        });
        checkAnsw(answ - 1);
        setAnsw(null);
      }
    }
  }, [answ]);

  useEffect(() => {
    if (menu) {
      window.history.go(-1);
      setMenu(false);
      setBtnMenuState(false);
    }
  }, [menu]);

  useEffect(() => {
    if (next && btnState) {
      setCurrentQuestions(currentQuestions + 1);
      setBtnState(false);
      const afterClick = btn.map((o) => {
        return { ...o, background: "white", color: "black" };
      });
      setBtnColor(afterClick);
      setOffGameButton(false);
      setBtnMenuState(false);
      customizeGameButton({
        disabled: false,
      });
      spatnavInstance.focus("GameButton");
    }
    setNext(false);
  }, [next]);

  function isLengthZero() {
    if (arrayQuestions.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function isLastQuestions() {
    if (currentQuestions === 9) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    setArrayQuestions(ArrayQuestionsQuotes(genre));
    spatnavInstance.focus("GameButton");
    setModalRes(false);
  }, []);

  const checkAnsw = (number) => {
    setBtnState(true);
    setBtnMenuState(true);
    const afterClick = btn.map((o, index) => {
      if (
        index === number &&
        number + 1 === arrayQuestions[currentQuestions].validAnswers
      ) {
        setCorrectAnswers(correctAnswers + 1);
        if (isLastQuestions()) {
          assistant_global(null, "suggestRes");
        } else {
          assistant_global(null, "correctAnsw");
        }
        return { ...o, background: "rgb(0, 180, 3)", color: "white" };
      } else if (
        index === number &&
        number + 1 !== arrayQuestions[currentQuestions].validAnswers
      ) {
        if (isLastQuestions()) {
          assistant_global(null, "suggestRes");
        } else {
          assistant_global(null, "uncorrectAnsw");
        }
        return { ...o, background: "rgb(197, 26, 0)", color: "white" };
      } else if (index === arrayQuestions[currentQuestions].validAnswers - 1) {
        return { ...o, background: "rgb(0, 180, 3)", color: "white" };
      } else {
        return { ...o, background: "white", color: "black" };
      }
    });
    setBtnColor(afterClick);
    setOffGameButton(true);
  };

  return (
    <div {...allButtonSection} className="game_menu">
      <h1
        style={{
          color: "white",
          fontFamily: "Cinzel",
          fontSize: "2.2vw",
          lineHeight: "3.5vh",
        }}
      >
        Цитата {currentQuestions + 1}/10:<pre></pre>
        {isLengthZero() ? (
          <div>Привет</div>
        ) : (
          arrayQuestions[currentQuestions].Quote
        )}
      </h1>
      <div
        {...gameButtonSection}
        className="sn-section-root game_button"
        style={offGameButton ? { pointerEvents: "none" } : {}}
      >
        <button
          className="sn-section-item btn_answ"
          tabIndex={-1}
          style={{ background: btn[0].background, color: btn[0].color }}
          id="btn_answ1"
          onClick={() => assistant_global("1", "checkAnsw")}
        >
          {isLengthZero() ? (
            <div></div>
          ) : (
            arrayQuestions[currentQuestions].Author[0]
          )}
        </button>
        <button
          className="sn-section-item btn_answ"
          tabIndex={-1}
          style={{ background: btn[1].background, color: btn[1].color }}
          id="btn_answ2"
          onClick={() => assistant_global("2", "checkAnsw")}
        >
          {isLengthZero() ? (
            <div></div>
          ) : (
            arrayQuestions[currentQuestions].Author[1]
          )}
        </button>
        <button
          className="sn-section-item btn_answ"
          tabIndex={-1}
          style={{ background: btn[2].background, color: btn[2].color }}
          id="btn_answ3"
          onClick={() => assistant_global("3", "checkAnsw")}
        >
          {isLengthZero() ? (
            <div></div>
          ) : (
            arrayQuestions[currentQuestions].Author[2]
          )}
        </button>
        <button
          className="sn-section-item btn_answ"
          tabIndex={-1}
          style={{ background: btn[3].background, color: btn[3].color }}
          id="btn_answ4"
          onClick={() => assistant_global("4", "checkAnsw")}
        >
          {isLengthZero() ? (
            <div></div>
          ) : (
            arrayQuestions[currentQuestions].Author[3]
          )}
        </button>
      </div>
      {isLastQuestions() ? (
        <ButtonMenu
          res={res}
          setModalRes={setModalRes}
          correctAnswers={correctAnswers}
          state_btnMenu={BtnMenuState}
          handleClick={assistant_global}
        />
      ) : (
        <ButtonNextQuest state_btn={btnState} handleClick={assistant_global} />
      )}
    </div>
  );
};

export default Game;
