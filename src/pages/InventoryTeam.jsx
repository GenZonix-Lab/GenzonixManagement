import NewStock from "./NewStock";
import SearchItems from "./SearchItems";
import StockList from "./StockList";
import '@aws-amplify/ui-react/styles.css';

const InventoryTeam = () => {

  return (
    <>
      <div className="container">
        {/* <SearchItems />
        <StockList /> */}
        <NewStock />
      </div>
    </>
  )
}

export default InventoryTeam