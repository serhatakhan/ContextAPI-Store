import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import BasketItem from "../components/BasketItem";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);

  // ürün sayısını hesapla, aşağıdaki yerine koy
  const totalAmount = basket.reduce((total, i)=> total + i.amount, 0)

  // toplam fiyatı hesapla
  const totalPrice = basket.reduce((total,i)=> total + (i.price * i.amount), 0)
  // total parametresi, şu ana kadar biriktirilmiş toplam fiyatı temsil eder. i parametresi, mevcut sepet öğesidir.
  // total + (i.price * i.amount): Bu kısım, her sepet öğesinin fiyatını miktarıyla çarpar ve bu değeri toplam fiyata ekler.
  // 0: Bu, reduce fonksiyonunun başlangıç değeridir. Toplam fiyatı başlangıçta sıfır olarak ayarlaR.

  return (
    <div className="container my-4 d-flex flex-column gap-4">
      {/* sepette ürün yoksa */}
      {basket.length === 0 && (
        <p className="text-center my-5 fs-5 fw-bold">
          <span className="mx-1">Öncelikle sepete bir ürün ekleyiniz.</span>
          <Link className="fw-bold" to={"/"} >Ürünler</Link>
        </p>
      )}

      {/* sepette ürün varsa */}
      {basket?.map((item) => (
        <BasketItem
          key={item.id}
          item={item}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
        />
      ))}

      <div className="container border border-3 border-black rounded-2 d-flex flex-column p-3 fs-5 my-2">
        <p className="fw-bold mt-2">Ürün Sayısı: <span className="text-warning"> {totalAmount} Adet </span> </p>
        <p className="fw-bold">Toplam Fiyat: <span className="text-success"> {totalPrice.toFixed(2)} ₺ </span> </p>
        {/* fiyat, virgülden sonra çok basamaklı olabiliyordu. toFixed(2) ile virgülden sonraki 2 basamağını aldık */}
      </div>
    </div>
  );
};

export default CheckoutPage;
