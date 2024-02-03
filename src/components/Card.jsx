import { useContext } from "react"
import { BasketContext } from "../context/basketContext"

const Card = ( {product} ) => {
  // console.log(product)

  // elde ettiğimiz veriler arasından addToBasket metodunu aldık. 
  // sonra bu metot, sepete ekle butonu tıklanınca çalışsın. parametrisine de product eklenecek. bu parametre, tam olarak hangi ürünü ekleyeceğimizi söylüyor !!
  const {addToBasket} = useContext(BasketContext)

  
  return (
    <div className="card py-2 shadow" style={{width:"250px"}} >
        <div className="d-flex justify-content-center">
            {/* object-fit-contain ile resmi sığdır diyoruz */}
            <img className="object-fit-contain" height={120} src={product.image} alt={product.name} />
        </div>

        <div className="card-body d-flex flex-column gap-1">
            {/* text-truncate ile yazının 1 satırdan fazla olmamasını sağladık. yoksa kart yapısı bozuluyordu. şimdi ismi uzunsa devamına ... ekleniyor. elipsis özelliğinin karşılığı */}
            <h4 className="text-truncate">{product.title}</h4>
            <p>{product.price} ₺</p>
            <p>{product.category}</p>
            <button onClick={ ()=> addToBasket(product)}>Sepete Ekle</button>
        </div>
    </div>
  )
}

export default Card