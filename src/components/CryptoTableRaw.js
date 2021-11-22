const CryptoTableRaw = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <tr className="coin-row">
      <td className="coin">
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
        <p className="coin-symbol">{symbol}</p>
      </td>
      <td className="coin-data">
        <p className="coin-price">${price}</p>
        <p className="coin-volume">${volume.toLocaleString()}</p>

        {priceChange < 0 ? (
          <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
        )}

        <p className="coin-marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p>
      </td>
    </tr>
  );
};

export default CryptoTableRaw;
