import React from "react";
import LottoCard from "./components/LottoCard";
import "./App.scss";

const App: React.FC = () => {


    return (
        <div className="app">
            <h1>Лото Карточка</h1>
            <LottoCard/>
        </div>
    );
};

export default App;
