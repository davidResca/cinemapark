import React from "react";
import ComboCard from '../components/ComboCard';
import Header from '../components/Header'
function CandyBar() {
  return (
    <div className="bg-[url('./assets/img/candyBarBg.png')] bg-cover bg-fixed h-screen text-white">
      <p>¡Elige tus compañeros de aventuras!</p>
      <ComboCard />
      <div>

      </div>
    </div>
  );
}

export default CandyBar;
