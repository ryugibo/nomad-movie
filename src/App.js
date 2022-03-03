import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState();
  const [usd, setUsd] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setSelectedCoin(json[0].id);
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChangeUsd = (event) => {
    setUsd(event.target.value);
  };
  const onChangeSelect = (event) => {
    setSelectedCoin(event.target.value);
  };
  return (
    <div>
      <h1>The Coins!{loading ? "" : ` (${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChangeSelect}>
            {coins.map((coin) => {
              return (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                </option>
              );
            })}
          </select>
          <input
            value={usd}
            onChange={onChangeUsd}
            type="number"
            placeholder="input usd"
          />
          {"USD "} <br />
          {usd === "" ? null : (
            <div>
              {usd /
                coins.find((coin) => coin.id === selectedCoin).quotes.USD.price}
              &nbsp;{coins.find((coin) => coin.id === selectedCoin).symbol}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
