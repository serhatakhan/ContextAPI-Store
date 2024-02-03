import axios from "axios";
import { createContext, useEffect, useState } from "react";
//react'ın içinde var zaten. yüklenen bir library değil.

/** CONTEXT API

* Uygulamada birden çok bileşenin ihtiyacı olan verileri bileşenlerden bağımısz bir şekilde 
konumlanan merkezlerde yönetmeye yarar.

* Context yapısı içerisinde verilerin state'ini ve verileri değiştirmeye yarayan fonksiyonlar 
tutulabilir.

* Context, tuttuğumuz bu değişkenleri(stateler ve fonk.'lar) bileşenlere doğrudan aktarım 
yapabilen Merkezi State Yönetim aracıdır.
*/

//1) Context yapısının temelini oluşturma,
// React dökümantasyonunda bu şekilde kullanın deniyor ama ProductContext bu ismi biz verdik, istediğmiiz ismi verebiliriz
export const ProductContext = createContext();

//2) Sağlayıcı ve onun tuttuğu verileri tanımla,
// Tuttuğumuz verileri bileşenlere, istediğimiz yerde kullanmamızı sağlıyor yani ! / genelde state şeklinde tutuluyormuşş // ProductProvider ismini biz verdik, başka bir şey de verebilirdik  // elimizde tuttuğumuz products ve category verilerini ProductProvider() sağlayıcı metodu ile uygulamamıza sağlayacağız. ProductProvider aslında bileşendir hoc mantığında. YANİ APP BİLEŞENİMİZ {CHILDREN} OLARAK PRODUCTPROVİDER'A GİDİYOR //4) sonra bu fonksiyonu import edeceğiz main.jsx de
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState("Tüm Ürünler");

  useEffect(()=>{
    // önceki ürünleri kaldır dedik -> yüklenme simgesini görmek istedik. -> niye görünmüyordu? öncekileri silmiyorduk ve ilk veri gelrken null oluyordu. böyle yaparak her yeni veri isteğinde, önceki ürünleri silersek, yükleniyor simgesini görebiliriz.
    setProducts(null)

    // hangi url'e istek atılacağını belirle 
    const url = category === "Tüm Ürünler" 
    ? "https://fakestoreapi.com/products"
    : `https://fakestoreapi.com/products/category/${category}`

    // api isteği at
    axios.get(url).then((res)=> setProducts(res.data)) //api'den aldığımız verileri products state'inde tuttuk
  },[category]) 
  /** kategori her değiştiğined useEffect'in çalışabilmesi için bağımlılık dizisine category'i vereceğiz **/

  // context yapısında tuttuğumuz verileri bileşenlere sağla, önce yukarıda oluşturduğumuz context'in temeli vardı onu çağıracağız. BU TEMELİN İÇİNDE BULUNAN .Provider SAĞLAYICI BİLEŞENİ VAR. DEVAMINA ONU EKLİYORUZ !! bu bir higher order component. kapanış etiketi de var. Sonra value içine sağda solda kullanmak istediğimi verileri yazıyoruz. belki ben bunları elli yerde kullancağım
  // value olarak eklenen veriler, projedeki bütün bileşenler tarafından erişilebilir olur.
  return (
    <ProductContext.Provider value={{ products, category, setCategory }}>
      {children}
    </ProductContext.Provider>
  );
}
// app bileşeni olan {children}'ı da, ProductContext.Provider arasına koyuyoruz son olarak.
