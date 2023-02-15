import React from "react";
import ContentLoader from "react-content-loader";

import AppContext from "../../context";

import styles from "./Card.module.scss";

function Card({
  imageUrl,
  title,
  price,
  id,
  onPlus,
  onFavourite,
  favourited = false,
  loading = false,
}) {
  const { isItemAdded, isFavouriteAdded } = React.useContext(AppContext);
  const [isFavourite, setIsFavourite] = React.useState(favourited);
  const obj = { id, parentId: id, imageUrl, title, price };

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavourite = () => {
    onFavourite(obj);
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={180}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
          <rect x="87" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div>
            <img
              width={133}
              height={112}
              src={imageUrl}
              alt="flowers"
              className={styles.cardImg}
            />
          </div>
          <h5>{title}</h5>
          <div className="d-flex align-center mt-10">
            <div className="d-flex flex-column mr-40">
              <span>Цена:</span>
              <b>{price} руб. /шт</b>
            </div>
            {onFavourite && (
              <div className={styles.favourite} onClick={onClickFavourite}>
                <img
                  src={isFavouriteAdded(id) ? "img/liked.svg" : "img/unliked.svg"}
                  alt="Unliked"
                />
              </div>
            )}
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"
                }
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
