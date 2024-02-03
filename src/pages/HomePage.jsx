import Loader from "../components/Loader";
import Card from "../components/Card";

//2) bir context yapısına abone olmamızı sağlar
import { useContext } from "react";

//3) abone olmak istediğimiz context'i çağıracağız
import { ProductContext } from "../context/productContext";

const HomePage = () => {
  /*1) Context yapısında tutulan bir veriye projedeki bileşen içerisinde erişmek istiyorsak,
    bileşenden, ilgili Context yapısına abone oluruz. useContext ile */

  //4) abone olundu ve gelen veri context'deki ismiyle alındı. başka isim verince hata oluyor.
  const { products, category } = useContext(ProductContext);

  return (
    <>
      <marquee scrollamount="11" >{"Türkiye'nin En Büyük Online Mağazası | Tüm Ürünlerde Sepette %50 İNDİRİM "}</marquee>
      <h2 className="text-center mt-3">{category && category}</h2>
      <div className="container d-flex flex-wrap justify-content-center gap-5 my-5">
        {/* veriler gelmediyse yükleniyor göster */}
        {!products && <Loader />}

        {/* veriler geldiyse her biri için kart bas. products? --> products varsa anlamında ! */}
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      ;
    </>
  );
};

export default HomePage;
