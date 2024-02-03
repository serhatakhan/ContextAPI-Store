# HOC (Higher Order Components)
<!-- Yüksel Düzey Bileşenler -->
- İçeriğini children propu olarak daha sonrasında gönderebildiğimiz bileşenler.
- Başka bir deyişle: farklı bir componenti veya elementi, kapsar şekilde tanımlanır, o component veya elemet de, children olarak gelir.

* Mesela bir component oluşturduk diyelim. Bu componentin varyantlarını istediğimizde HOC kullanabiliriz. Bu componentin bir tane içinde input olan halini isteyebilirim. Veya bir tane içinde form olan varyantını isteyebilrim veya başka bir tane içinde başka bir şey olan halini isteyebilirim.

* HOC olmasaydı, aynı component içeriğinden farklı componentler oluşturmamız gerekecekti bu da kod kalabalığına sebep olabilecekti. Fakat HOC sayesinde bir component oluşturduk, daha sonra onu kapanış etiketi kullanarak çağırıp içeriğini değiştirip farklı farklı halleriyle kullanabilirim. *Aynı bileşeni farklı farklı şekillerde kullanabiliyoruz.*

* HOC'lar **{children}** parametresi alıyor. Bu da bizim bileşeni çağırırken içine gönderdiğimiz içeriğe denk geliyor.



# CONTEXT API

* VERİLERİ UYGULAMADAKİ BİLEŞENLERDEN BAĞIMSIZ NOKTALARDA YÖNETMEMİZİ SAĞLAR.