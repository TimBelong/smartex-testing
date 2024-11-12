import React, { useRef, useState } from "react";
import LottoCard from "./components/LottoCard";
import GenerateButton from "./UI/GenerateButton";
import "./App.scss";

const generateLottoCardNumbers = (): (number | null)[][] => {
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

const App: React.FC = () => {
    const [numbers, setNumbers] = useState(generateLottoCardNumbers);
    const numbersRef = useRef(numbers);

    const handleGenerateNewCard = () => {
        const newNumbers = generateLottoCardNumbers();
        setNumbers(newNumbers);
        numbersRef.current = newNumbers;
    };

    return (
        <div className="app">
            <h1>Лото Карточка</h1>
            <LottoCard numbers={numbers} generatedNumbersRef={numbersRef} />
            <GenerateButton onClick={handleGenerateNewCard} />
        </div>
    );
};

export default App;