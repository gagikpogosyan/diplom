import Card from "../components/Card";
import React from "react";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavourite,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        {...item}
        onFavourite={(obj) => onAddToFavourite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
      />
    ));
  };
  return (
    <>
      <div className="banner">
        <div className="gif"></div>
      </div>

      <div className="content home">
        <div className="d-flex align-center justify-between mb-40 homenav">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все растения"}
          </h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                src="img/btn-remove.svg"
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap cards">{renderItems()}</div>
      </div>
    </>
  );
}

export default Home;
