# Redux React Modül Projesi: Filmler

Bugün, redux felsefesini gördünüz ve redux ile çalışmayı (store oluşturmayı, action oluşturucu fonksiyonları, bir actionu dispatch etmeyi, reducer yaratmayı ve store içerisindeki verileri sayfada görüntülemeyi) öğrendiniz.

## Giriş

Bu projede, küçük bir film veritabanı içeren bir web uygulamasında çalışacak, iki farklı reducer ile işlem yapacaksınız. Hem mevcut tüm state ve action oluşturucuları kullanacak, hem de sıfırdan reducer/redux pairing'leri oluşturacaksınız.

![Film DB örneği](./proje-demo.mov)

**_Görevlerinizi tek tek tamamladığınızdan ve ilerlemeden önce her bir görevi test ettiğinizden emin olun.._**

## Talimatlar

### Görev 1: Proje Kurulumu

- [ ] Forklayın.
- [ ] Klonlayın
- [ ] Ana dizine gidin
- [ ] `npm install`
- [ ] `npm start`

### Görev 2: Proje Gereksinimleri

#### Store oluşturulması ve uygulamaya bağlanması

> _DOM ve film reducer fonksiyonu sizin için hazırlandı, ancak onu redux'a bağlamak size bırakıldı._

- [ ] Redux store'u yaratmak için `createStore` fonksiyonunu kullanın.
- [ ] Redux store'u React uygulaması ile ilişkilendirmek için `Provider` bileşenini kullanın.

#### Film reducerını bağlamak

> _`src/reducers/movieReducers.js` içerisinde `reducer` fonksiyonu ve `initialState` öntanımlı olarak gelmektedir. Filmler datası `initialState` içerisine eklenmiştir._

- [ ] `movieReducer.js` içindeki `initialState` reducer'ın başlangıç değeri olarak atanmalıdır.

- [ ] **MovieList bileşeni, tüm filmlerimizi ekrana yazdırır.**
      MovieList component'i içerisindeki `movies` datası redux store'dan çekilmelidir. `react-redux` içerisinden `useSelector` hookunu kullanarak `movies` değerine erişin.

- [ ] **`AppHeader` component'i, başlık metnini görüntülemek için `appTitle` değişkenini kullanır.**  
      `appTitle` değeri redux store'dan çekilmelidir.

- [ ] Son olarak `Movie` componentindeki `movies` datası yine redux store içerisinden çekilmelidir.

#### Sil ve Film Ekle eylemlerini bağlama

- [ ] `movieReducers` dosyası içerisinde `deleteMovie` için yazılmış bir kod bloğu olduğunu ve `movieActions` dosyası içerisinde ilgili **action generator**'ın zaten mevcut olduğunu unutmayın.

- **Silme Action'ı: Movie componentinde** 
  - Silme işleminin tetiklemesi gereken HTML öğesini bulun ve `event handler` oluşturup ve bu DOM öğesine bağlayın.
  - Bu handler içerisinde Filmin `id` değeri ile `deleteMovie` action'ını tetiklemek için `dispatch` edin. 
  - Sonra kullanıcıyı `push('/movies')` komutunu kullanarak filmler sayfasına yönlendirin. 
  - **(Bu kısımda, `useParams` ile aldığınız `id` değerinin `string` olduğunu ve `movieReducer` içerisindeki silme eyleminde buna dikkat etmeniz gerektiğini unutmayın!)**

&nbsp;

- **Film Ekleme Action'ı:**
  - [ ] movieReducer.js'ye bir `ADD_MOVIE` case'i ekleyin.
  - [ ] Bu yeni case'in, `payload` aracılığıyla iletilen film datasını `movies` listesine ekleyin.
  - [ ] `movieActions.js`'de `addMovie` için bir action generator oluşturun.
  - [ ] Bir filmin eklenmesini tetikleyen componenti bulun ve `addMovie` action'ını bağlayın.
  - [ ] `addMovie`'yi çağırmak için gerekli event handlerı oluşturun ve bağlayın.
  - [ ] Yeni bir film eklerken `id` değeri olarak `Date.now()` kullanın.
  - [ ] Film eklendikten sonra filmler sayfasına yönlendirmek için `push('/movies/')` komutunu ekleyin.

#### Favoriler reducerı oluşturun

> _Tebrikler 👏 Artık film reducerı tamamlandığına göre, favori film özelliği için sıfırdan bir reducer oluşturabiliriz. Reducerları birleştirme (`combineReducers`) konusunda çalışacağız._

- [ ] Favoriler özelliği için bir **reducer dosyası** oluşturun. Bu dosyada kullanacağınız `initialState` objesine aşağıdaki değerlerini ekleyin:

  - `favorites { Film[] }`: Film nesnesini içeren bir dizi (başlangıç değeri `[]`).
  - `displayFavorites { Boolean }`: Uygulamada favorilerin göster/gizle değerini tutan bir boolean (başlangıç değeri `false`). 

- [ ] `switch` deyimine `default` case'ini ekleyin.

- [ ] Yeni reducerınızı `./reducers/index.js` dosyasına import edin.

- [ ] `reducers/index.js`'de hem `moviesReducer`'ı hem de favori reducer'ı redux'a bağlamak için `combineReducers` metodunu kullanın.

- [ ] **Film işlevlerinizin artık çalışmadığına dikkat edin. Neden?** &nbsp;`movieReducer`a bağlı componentlerin tekrar çalışmasını sağlamak için gerekli değişiklikleri yapın.

- [ ] Store içerisinden `favorites` değerini `FavoriteMovieList` componentine bağlayın ve test edin.

- [ ] `DisplayFavorites` değerini store içerisinden çekerek `Movie` ve `AppHeader` componentinde ilgili yerlerde kullanın.

#### Favoriler eylemleri ekleyin

> _Şimdi, uygulamanın geri kalanını kendi başınıza oluşturacaksınız. Bunu yapabilirsiniz!_

1. Aşağıdaki eylemler için action generator'lar hazır. Siz de reducer case'leri ve event handler kodlarını ekleyin:

- `toggleFavorites`: `displayFavorites` state değerini `true` ve `false` olarak değiştirir. `displayFavorites` `false` olduğunda, favori filmler componenti uygulamada görünmez.

- `addFavorite`: Favoriler listesine yeni bir film nesnesi ekler.
- `removeFavorite`: Gönderilen bir id ile bir film Nesnesini favoriler listesinden kaldırır.

### Esnek Görevler

- Favoriler görüntülenmiyorsa, kullanıcının bir öğeyi favorilere eklemesine izin vermemek mantıklıdır. Ekleme, favori düğmesinin SADECE displayFavorite true ise görüntülenmesi anlamına gelir.

- Şu anda, aynı filmi birden çok kez favorilerinize ekleyebilirsiniz. Yalnızca listede olmayan filmleri favorilere eklenebilir hale getirmek için AddFavorite eylemini güncelleyin.

- Eğer film ana filmler listesinden silinirse, favorilere ekliyse ordan da silinmelidir, kodunuzu buna göre güncelleyin.

- İçeriklerinizi stilleyin ❤️

Tebrikler! 
&nbsp;
Projeyi başarıyla tamamladın 👏👏👏
