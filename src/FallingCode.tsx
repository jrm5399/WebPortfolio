import React, { useEffect, useState } from "react";

const FallingCode: React.FC = () => {
  const [characters, setCharacters] = useState<string[]>([]);

  const getRandomCharacter = () => {
    const characters =
      "!@#$%^&*()1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const getRandomTopPosition = () => {
    return Math.floor(Math.random() * window.innerHeight);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCharacters((prevCharacters) => [
        ...prevCharacters,
        getRandomCharacter(),
      ]);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="falling-code">
      {characters.map((character, index) => (
        <span
          key={index}
          style={{
            color: "green",
            position: "absolute",
            top: `${getRandomTopPosition()}px`,
            left: `${Math.random() * 100}vw`,
          }}
        >
          {character}
        </span>
      ))}
    </div>
  );
};

export default FallingCode;
