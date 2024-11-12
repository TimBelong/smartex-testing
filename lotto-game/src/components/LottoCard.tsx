import React from "react";
import "./LottoCard.scss";

interface LottoCardProps {
  numbers: (number | null)[][];
  generatedNumbersRef: React.MutableRefObject<(number | null)[][]>;
}

const LottoCard: React.FC<LottoCardProps> = ({ numbers }) => (
    <div className="lotto-card">
      {numbers.map((row, rowIndex) => (
          <div key={rowIndex} className="lotto-row">
            {row.map((num, colIndex) => (
                <div key={colIndex} className="lotto-cell">
                  {num !== null ? num : ""}
                </div>
            ))}
          </div>
      ))}
    </div>
);

export default LottoCard;