import NewStock from "./NewStock";
import SearchItems from "../Components/SearchItems";
import StockList from "./StockList";
import '@aws-amplify/ui-react/styles.css';

import React, { useState } from "react";

const InventoryTeam = () => {
  const [showNewStock, setShowNewStock] = useState(false);

  const handleClick = () => {
    setShowNewStock((prev) => !prev);
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-end justify-content-end">
        <button onClick={handleClick} id="FormToggleButton" className="btn-toggle mb-3">
          {showNewStock ? "Stock Details" : "Add New Stock"}
        </button>
        {!showNewStock && (
          <div id="stocks">
            <SearchItems />
            <StockList />
          </div>
        )}
        {showNewStock && (
          <div id="new-stock">
            <NewStock />
          </div>
        )}
      </div>
    </>
  );
}

export default InventoryTeam