import React, { useState } from "react";

const BetItem = ({ bet, onAddToCart, itemIndex }) => {

  const { D, DAY, LN, T, N, OCG, C } = bet; // `C`: Kod, `N`: Maç adı
  const [selectedColumns, setSelectedColumns] = useState({});

  const handleColumnClick = (columnKey, value) => {
    if (!value) return; // Eğer kolon tıklanamazsa işlem yapma

    setSelectedColumns((prev) => {
      const updatedState = { ...prev };
      const rowKey = columnKey.split("-")[0]; // Satır id

      // Aynı satırdaki diğer kolonların seçimlerini kaldır
      Object.keys(updatedState).forEach((key) => {
        if (key.startsWith(rowKey)) {
          delete updatedState[key];
          onAddToCart(null, key); // Önceki kolonun verisini kaldır
        }
      });

      // Yeni kolon seçimi yap
      if (prev[columnKey]) {
        delete updatedState[columnKey];
        onAddToCart(null, columnKey); // Sepetten çıkar
      } else {
        updatedState[columnKey] = true;

        // Ekstra veri: MBS, Kod, Maç adı
        const extraData = {
          mbs: OCG[1]?.MBS || "", // OCG içindeki MBS
          code: C, // Kod
          match: N, // Maç adı
          rowKey, // Satır anahtarı
        };

        onAddToCart(value, columnKey, extraData); // Sepete gönder
      }

      return updatedState;
    });
  };

  return (
    <>
      {/* İlk Satır */}
      <div className="table-row first-row">
        <div className="table-cell">{D} {DAY} {LN}</div>
        <div className="table-cell">Yorumlar</div>
        <div className="table-cell"></div>
        <div className="table-cell">1</div>
        <div className="table-cell">x</div>
        <div className="table-cell">2</div>
        <div className="table-cell">Alt</div>
        <div className="table-cell">Üst</div>
        <div className="table-cell">H1</div>
        <div className="table-cell">1</div>
        <div className="table-cell">x</div>
        <div className="table-cell">2</div>
        <div className="table-cell">H2</div>
        <div className="table-cell">1-X</div>
        <div className="table-cell">1-2</div>
        <div className="table-cell">X-2</div>
        <div className="table-cell">Var</div>
        <div className="table-cell">Yok</div>
        <div className="table-cell">+99</div>
      </div>

      {/* İkinci Satır */}
      <div className="table-row">
        <div className="table-cell">
          <strong>{D.split(".")[2]}</strong> {T} - {N}
        </div>
        <div className="table-cell">Yorumlar</div>
        <div className="table-cell">{OCG[1]?.MBS || ""}</div>

        {/* 4., 5., ve 6. kolonlar */}
        {["4a", "4b", "4c"].map((columnKey, index) => {
          const uniqueColumnKey = `${itemIndex}-${columnKey}`;
          const value = OCG[1]?.OC[index]?.O || ""; // Değer kontrolü
          return (
            <div
              key={uniqueColumnKey}
              className="table-cell"
              style={{
                backgroundColor: selectedColumns[uniqueColumnKey]
                  ? "yellow"
                  : "transparent",
                cursor: value ? "pointer" : "default",
              }}
              onClick={() => value && handleColumnClick(uniqueColumnKey, value)}
            >
              {value}
            </div>
          );
        })}

        {/* 7. ve 8. kolonlar */}
        {[OCG[5]?.OC[25]?.O, OCG[5]?.OC[26]?.O].map((value, index) => {
          const columnKey = `${itemIndex}-col${7 + index}`;
          return (
            <div
              key={columnKey}
              className="table-cell"
              style={{
                backgroundColor: selectedColumns[columnKey]
                  ? "yellow"
                  : "transparent",
                cursor: value ? "pointer" : "default",
              }}
              onClick={() => value && handleColumnClick(columnKey, value)}
            >
              {value || ""}
            </div>
          );
        })}

        {/* 9., 10., 11., 12., 13. kolonlar (Boş) */}
        {Array(5).fill("").map((_, index) => (
          <div key={`empty-${index}`} className="table-cell"></div>
        ))}

        {/* 14., 15., ve 16. kolonlar */}
        {[OCG[2]?.OC[3]?.O, OCG[2]?.OC[4]?.O, OCG[2]?.OC[5]?.O].map((value, index) => {
          const columnKey = `${itemIndex}-col${14 + index}`;
          return (
            <div
              key={columnKey}
              className="table-cell"
              style={{
                backgroundColor: selectedColumns[columnKey]
                  ? "yellow"
                  : "transparent",
                cursor: value ? "pointer" : "default",
              }}
              onClick={() => value && handleColumnClick(columnKey, value)}
            >
              {value || ""}
            </div>
          );
        })}

        {/* 17., 18. kolonlar (Boş) */}
        {Array(2).fill("").map((_, index) => (
          <div key={`empty-second-${index}`} className="table-cell"></div>
        ))}

        {/* 19. Kolon (Sabit) */}
        <div className="table-cell">3</div>
      </div>
    </>
  );
};

export default BetItem;
