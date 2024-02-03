import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../context/productContext";
import { BasketContext } from './../context/basketContext';

const Header = () => {
  // kategoriler için abone olduk. açıklaması en aşağıda. context'in içindeki setCategory metodunu almak istedik o yüzden onun adını verdik. başka bir isim verince çalışmadı !!
  // sonra bu metodu aşağıda kategoriler onClick olduğunda çalışması için verdik. içine de map ile döndüğümüz categ yazdık
  const {setCategory} = useContext(ProductContext)

  // header'daki kırmızı ürün sayısı için
  const {basket} = useContext(BasketContext)


  // kategorileri de api'den almamız lazım, gereçk proje şeklinde. kategoriler epi'den alınan verilere göre listelenmeli
  // bu kategori verilerini Header dışında başka bir yerde kullanmayacağımız için context yapısında tutmamıza gerek yok. bu veriyi tek alakadar eden yer Header.
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);


  // sepetteki ürün sayısını hesapla
  // amount'u, dizi metotlarından reduce() ile hesaplamak. reduce metodu, dizideki elemanların bir değerini toplamaya yarıyor. mesela hepsini id'sini toplamaya veya hepsini miktarını veya hepsinin fiyatını..
  /* 2 parametre alıyor: ilki total ikincisi sepetteki eleman. bunlar dışında bizden
  ikinci bir parametre daha istiyor. bu da ilk değer olacak. diyor ki toplama yapacağım ama 100 den mi başlayayım, 0 dan mı başlayayım. 0'dan başla dedik. */
  const total = basket.reduce((total, product)=> total + product.amount, 0)


  return (
    <nav className="navbar navbar-dark bg-black sticky-top navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          CONTEXT STORE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Context Store
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Anasayfa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/checkout">
                  <span>Sepet</span>
                  <span className="badge bg-danger ms-1"> {total} </span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kategoriler
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li onClick={()=> setCategory("Tüm Ürünler")}>
                    <a className="dropdown-item" href="#">
                      Hepsi
                    </a>
                  </li>
                  {categories?.map((categ) => (
                    <li onClick={()=> setCategory(categ)}>
                      <a className="dropdown-item" href="#">
                        {categ}
                      </a>
                    </li>
                  ))}
                  {/*!! sıradaki işlem, seçilen kategorinin bilgisini yani kullanıcının hangi 
                  kategoriyi seçtiğini context dosyasında tutmak. bunun için context dosyasında
                  seçilen kategoriyi güncelleyecek bir metod var orada. setCategory. bunu value
                  olarak provider kısmına ekliyoruz. artık bu metoda projedeki tüm bileşenler trf.
                  erişilebilecek. sonra onu burada çağırıp abone olacağız. çünkü bir bileşenden, 
                  belirli bir context yapısındaki veriye erişmek istiyorsak useContext ile abone 
                  olmamız gerek. ve abone olmak istediğimiz contexti de çağırmamız gerek. */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
