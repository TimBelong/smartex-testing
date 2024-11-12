import React from "react";
import "./GenerateButton.scss";

interface GenerateButtonProps {
    onClick: () => void;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick }) => (
    <button className="generate-button" onClick={onClick}>
        Сгенерировать заново
    </button>
);

export default GenerateButton;