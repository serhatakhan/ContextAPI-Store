import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import { ProductProvider } from "./context/productContext.jsx";
//4) import ettikten sonra aşağıda app bileşenini sarmalayacağız
// app bileşenine yazdığımız kodlar, kapsayıcıya children propu olarak gider HOC'daki olay yani.
// ProductProvider fonksiyonuna {children} şeklinde parametresine ekleyeceğiz
// sonra bu children propunu ProductContext.Provider'ın içine yazacağız. children uygulammaıza denk geliyor. ve artık products ve category verilerini tüm uygulamanın erişimine sunuyoruz.
// YANİ APP BİLEŞENİMİZ {CHILDREN} OLARAK PRODUCTPROVİDER'A GİDİYOR !!

import { BasketProvider } from "./context/basketContext.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </BasketProvider>
    
    <ToastContainer autoClose={1500} />
  </React.StrictMode>
);
