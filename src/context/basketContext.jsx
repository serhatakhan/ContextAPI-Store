import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

// 1) context yapısı tanımla
export const BasketContext = createContext()

// 2) context'de tutulacak verileri uygulamaya aktracak bir sağlayıcı bileşen tanımla.
// sağlayıcı bileşen olduğu için ve bize çağrıştırması için Provider ekledik ismine. 
// APP, CHILDREN OLARAK BURAYA GELİYOR. maın.jsx DE APP'I SARMALADAIK. 
export function BasketProvider ({children}) {
    const [basket, setBasket] = useLocalStorage("basket",[]) // bir kütüphane kullandık, normalde sayfayı yenileyince state'de tuttuklarımız gidiyor. ktüüphane sayesined localStorage'e ekliyor. kullanımı da bu şekilde. useState yerine böyle yapıyoruz ve locale kaydederken bir isim veriliyor "basket de onun için."

    // SEPETE ÜRÜN EKLER
    const addToBasket = (newProduct)=>{
        //a) bu üründen sepette var mı kontrol et
        const found =  basket.find((i)=> i.id === newProduct.id) // sepetteki bütün elemanlara i diyecek olursak, sepetteki herhngi bir ürünün id'si, yeni eklenen ürünün id'sine eşit mi? eğer bir şey bulursan, bulduğunu found değişkenine aktar.
        // console.log(found), ilk undefined geldi. çünkü sepette yoktu. aynı ürünü tekrar ekleyince veri geldi.

        if(found){
            //b) ürün sepette varsa miktarını 1 arttır
            //b-1) bulunan ürünün miktarını 1 arttır
            const updated = {...found, amount: found.amount + 1}  // bir obje oluşturduk ve önce bulunan elemanın bütün değerlerini buraya dağıttık sonra miktarını,bulunan elemanın miktarının 1 fazlasına eşitleyeceğim. buna da son olarak updated dedik.

            //b-2) sepet dizisindeki eski ürünün yerine güncel halini koy. çünkü sepette amount:1 hali var. diziyi dönüp yeni bir dizi oluşturarak yapabilriiz bunu. o yüzden map kullandık.
            const newBasket = basket.map((item)=> item.id === updated.id ? updated : item)

            //b-3) sepeti güncelle
            setBasket(newBasket)

            toast.info(`Ürün Miktarı Arttırıldı (${updated.amount})`)

        }else{
            //c) ürün sepette yoksa ürünü sepete ekle (miktarı 1'e eşitle)
            setBasket([...basket, {...newProduct, amount: 1}]) 
            //sepete daha önceden eklenen elemenları spread operatörü ile birlikte tanımladık sonrasında ise,
            //yeni eklenen ürünleri bir obje içine aktar. Bunun yanında bir de amount değeri ekle ve değeri 1 olsun
            //yani yeni ürünün resminin, isminin vs yanına bir de amount ekleyip değerini 1 yaptık.

            toast.success("Ürün Sepete Eklendi")
        }
    }

    // SEPETTEN ÜRÜNÜ KALDIRIR
    // kaldırma, silme işlemleri her zaman id'ye göre yapılır.
    const removeFromBasket = (delete_id)=>{
        // sepetteki ürünü bul
        const found = basket.find((i)=> i.id === delete_id)

        if(found.amount > 1){
            // miktarı 1'den fazlaysa miktarı 1 azalt
            const updated = {...found, amount:found.amount - 1}  // yani bulduğumuz elemanın tüm bilgilerini aldık, bütün bilgileri arasından amount bilgisini güncelledik. bunu da 1 eksiği olsun şeklinde tanımladık.

            const newBasket = basket.map((i)=> i.id === updated.id ? updated : i) //üstte eklemede yaptığımız mantığın aynısı

            setBasket(newBasket)

            toast.error(`Ürün Miktarı Azaltıldı (${updated.amount})`)

        } else{
            // miktarı 1'e eşitse ürünü diziden kaldır. 
            // EĞER DİZİDEN BİR ELEMAN KALDIRACAKSAK BUNUN 2 YOLU VAR: *SPLICE* VE *FILTER*
            // splice, diziyi doğrudan güncellediğinden, state tuttuğumuzdan kullanamıyouz. ondan dolayı filter kullanacağız.
            const filtred = basket.filter((i)=> i.id !== delete_id)

            // sepeti güncelle
            setBasket(filtred)

            toast.error("Ürün Sepetten Kaldırıldı")
        }
    }


    return(
        <BasketContext.Provider value={{basket, addToBasket, removeFromBasket}} >
            {children}
        </BasketContext.Provider>
    )
}


