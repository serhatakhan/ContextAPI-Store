const BasketItem = ({item, addToBasket, removeFromBasket}) => {
  return (
    <div className="d-flex shadow-sm align-items-center justify-content-between gap-3 p-2 rounded-2">
      <div className="rounded">
        <img
          className="object-fit-contain"
          src={item.image}
          width={100}
          height={100}
        />
      </div>

      <h4 className="me-auto text-truncate"> {item.title} </h4>

      <h4 className="ms-auto text-success"> {item.price}₺ </h4>

      <h6 className="text-nowrap fw-normal mx-2">Miktar: {item.amount} </h6>

      <div className="d-flex gap-1">
        <button onClick={()=> removeFromBasket(item.id)} className="btn btn-sm btn-danger fw-bold">-</button>
        <button onClick={()=> addToBasket(item)} className="btn btn-sm btn-success fw-bold">+</button>
        {/* zaten fonk, basketContext'de hazır olduğu için ve bu fonk zaten sepette eleman varsa yeniden eklemek yerine miktarını güncellediği için burada çağırabiliriz.   */}
      </div>
    </div>
  );
};

export default BasketItem;
