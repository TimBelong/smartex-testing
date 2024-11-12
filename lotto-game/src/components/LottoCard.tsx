import React, { useState } from "react";
import "../App.scss";

const generateLottoCard = (): (number | null)[][] => {
  const card: (number | null)[][] = Array.from({ length: 3 }, () =>
      Array(9).fill(null)
  );

  const columns = [
    [1, 9],
    [10, 19],
    [20, 29],
    [30, 39],
    [40, 49],
    [50, 59],
    [60, 69],
    [70, 79],
    [80, 90],
  ];

  for (let row = 0; row < 3; row++) {
    let filled = 0;
    while (filled < 5) {
      const col = Math.floor(Math.random() * 9);
      if (card[row][col] === null) {
        const [min, max] = columns[col];
        let number: number;
        do {
          number = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (
            card.flat().includes(number) ||
            card[row].includes(number)
            );
        card[row][col] = number;
        filled++;
      }
    }
  }

  return card;
};

const LottoCard: React.FC = () => {
  const [card, setCard] = useState(generateLottoCard);

  const handleGenerateNewCard = () => {
    setCard(generateLottoCard());
  };

  return (
      <div className="lotto-card">
        {card.map((row, rowIndex) => (
            <div key={rowIndex} className="lotto-row">
              {row.map((num, colIndex) => (
                  <div key={colIndex} className="lotto-cell">
                    {num !== null ? num : ""}
                  </div>
              ))}
            </div>
        ))}
        <button onClick={handleGenerateNewCard}>Сгенерировать заново</button>
      </div>
  );
};

export default LottoCard;