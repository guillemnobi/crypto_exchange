import CryptoTableRaw from "./CryptoTableRaw";
import "./Coin.css";

const CryptoTable = ({ coins, search }) => {
  console.log(coins);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    "#",
    "Coin",
    "Symbol",
    "Current Price",
    "Volume",
    "24h %",
    "Mkt Cap",
  ];

  return (
    <div>
      <h3>Crypto Currency Exchange. Updated at ...</h3>
      <table>
        <thead>
          <tr className="coin-row">
            <td className="coin-data">
              <td>{columns[0]}</td>
              <td>{columns[1]}</td>
              <td>{columns[2]}</td>
              <td>{columns[3]}</td>
              <td>{columns[4]}</td>
              <td>{columns[5]}</td>
              <td>{columns[6]}</td>
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin, index) => (
            <CryptoTableRaw
              key={index}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </tbody>
        {/* <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((el, index) => (
              <CryptoTableRaw
                key={index}
                el={el}
                id={index}
                handleDeleteSong={handleDeleteSong}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4">Sin canciones favoritas</td>
            </tr>
          )}
        </tbody> */}
      </table>
    </div>

    // <div>
    //   <h2>CryptoTable</h2>
    //   <h2>
    //     <CryptoTableRaw />
    //   </h2>
    // </div>
  );
};

export default CryptoTable;
