import { useState } from "react";
import Modal from "./components/Modal";

const App = () => {

  //1) hangi butonu açtığımızın state'ini tutuyoruz, örnekk HOC için.
  const [isOpen, setIsOpen] = useState(null)
  console.log(isOpen)

  //4) kapatma butonlarını yaptık son olarak. 
  //sonra bu fonksiyonu, tek tek kullandığımız tüm modal'lara göndermemiz gerekiyor.
  //sonra bunu modal.jsx de children yanına parametre vereceğiz ve oradaki butona tıklanınca çalışmasını isteyeceğiz
  const close = ()=>{
    setIsOpen(null)
  }

  return (
    <div className="d-flex flex-column gap-5">
      <h1>Anasayfa</h1>

      <h1>Kategoriler</h1>

      <a href="/">Elektronik</a>
      <a href="/">Giyim</a>
      <a href="/">Teknoloji</a>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et
        sapiente possimus quia velit illo ducimus, repellat ad qui delectus
        neque esse. Totam molestias ad nemo excepturi, recusandae quis.
        Repellendus odio necessitatibus, provident molestiae cupiditate sapiente
        temporibus assumenda suscipit atque voluptas alias nam voluptatem
        delectus asperiores minus iure? Minima, distinctio!
      </p>

      {/*2) hangi butona tıkladığımızın state'ini tuttuk. HOC için örnek */}
      <button onClick={()=>setIsOpen("login")} className="btn btn-dark">Giriş Yap</button>
      <button onClick={()=>setIsOpen("mode")} className="btn btn-dark">Koyu Mod</button>
      <button onClick={()=>setIsOpen("warn")} className="btn btn-dark">Uyarı</button>

      {/*3) hangi butona tıklandığında onun modalı açılsın istediğimiz için koşul yazıyoruz */}
      {
        isOpen === "login" ? (<Modal close={close} >
          <form>
            <input type="text" />
            <input type="text" />
          </form>
        </Modal>)
        : isOpen === "mode" ? (<Modal close={close}>
          <label >Koyu mod</label>
          <input type="checkbox" />
        </Modal>)
        : isOpen === "warn" ? (<Modal close={close}>
          <h3>Silmek istediğinizden emin misiniz?</h3>
        </Modal>)
        : ("")
      }




      {/* Normal Bileşen Kullanımı */}
      {/* <Modal /> */}

      {/* HOC Bileşen Kullanımı - kapanış etiketi var dikkat! */}
      {/* <Modal>
        <label>Şİfrenizi Giriniz:</label>
        <input type="text" />
      </Modal> */}
    </div>
  );
};

export default App;
