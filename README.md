# Context Store

Bu proje, React kullanılarak geliştirilmiş bir e-ticaret uygulamasıdır. Proje, ürün listesi görüntüleme, ürünleri sepete ekleme ve sepetten çıkarma gibi temel özellikleri içermektedir. Bunun yanı sıra React ile bir e-ticaret uygulaması geliştirmek ve **Context API**, React Router gibi konseptleri anlamak isteyenler için iyi bir başlangıç noktasıdır.

## Özellikler

1. **Ürün Listesi Görüntüleme**: FakeStoreAPI üzerinden alınan ürün verileri, kategoriye göre filtrelenerek kullanıcıya sunulmaktadır.

2. **Sepete Ürün Ekleme**: Kullanıcı, ürünleri sepete ekleyebilir. Aynı üründen birden fazla eklenmesi durumunda miktarı güncellenir.

3. **Sepetten Ürün Çıkarma**: Kullanıcı, sepetindeki ürünleri istediği miktarlarda çıkarabilir. Eğer bir ürünün miktarı 1'den fazlaysa, miktar azaltılarak güncellenir.

4. **LocalStorage Entegrasyonu**: Kullanıcının sepet bilgileri, tarayıcı kapatıldığında bile kaybolmaz. Sepet bilgileri tarayıcı localStorage'inde tutulur.

5. **React Context API Kullanımı**: Ürün listesi ve sepet bilgileri, Context API kullanılarak uygulama genelinde yönetilir.

## Kullanılan Teknolojiler

- React: UI bileşenleri oluşturmak ve yönetmek için kullanılmıştır.
- Axios: API istekleri için kullanılmıştır.
- React Router DOM: Sayfa yönlendirmeleri için kullanılmıştır.
- Context API: Uygulama genelinde bileşen ve fonksiyonları yönetmek için kullanılmıştır.
- Toastify: Kullanıcıya bilgilendirme mesajları göstermek için kullanılmıştır.

## Ekran Gifi

![kayt2-ezgif com-video-to-gif-converter](https://github.com/serhatakhan/ContextAPI-Store/assets/147662915/2ae686f4-b67b-4a9a-99c4-bb7f5f58bd57)


