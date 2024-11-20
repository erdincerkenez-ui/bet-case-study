import React, { useEffect, Suspense, lazy, useState } from "react";
import { fetchBets } from "./utils/api";
import { useBetContext } from "./context/Context";
import Loader from "./components/Shared/Loader";
import "./styles/table.css";
import "./styles/cart.css";

const TableHeader = lazy(() => import("./components/Table/TableHeader"));
const BetList = lazy(() => import("./components/Table/BetList"));
const Cart = lazy(() => import("./components/Shared/Cart"));

const App = () => {
  const { bets, setBets } = useBetContext();
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item, columnKey, extraData) => {
    setCartItems((prev) => {
      if (!item) {
        // Eğer veri boşsa kolon key'e göre filtrele
        return prev.filter((cartItem) => cartItem.columnKey !== columnKey);
      } else {
        // Yeni veri ekle
        const newItem = {
          columnKey, // Benzersiz kolon id
          mbs: extraData.mbs, // MBS değeri
          code: extraData.code, // Kod (C objesi)
          match: extraData.match, // Maç adı (N objesi)
          rate: item, // Oran değeri
        };
        // Önceki aynı satırdan gelen verileri kaldır, yeni veriyi ekle
        return [...prev.filter((cartItem) => cartItem.rowKey !== extraData.rowKey), newItem];
      }
    });
  };
  

  useEffect(() => {
    const loadBets = async () => {
      const data = await fetchBets();
      setBets(data);
    };
    loadBets();
  }, [bets]);

  return (
    <div className="table-container">
      <Suspense fallback={<Loader />}>
        <TableHeader totalData={bets.length} />
        <BetList bets={bets} onAddToCart={handleAddToCart}/>
        <Cart cartItems={cartItems} />
      </Suspense>
    </div>
  );
};

export default App;
