# Redux React Modül Projesi: Filmler

Bugün, redux felsefesini gördünüz ve redux ile çalışmayı (store oluşturmayı, action oluşturucu fonksiyonları, bir actionu dispatch etmeyi, reducer yaratmayı ve store içerisindeki verileri sayfada görüntülemeyi) öğrendiniz.

## Giriş

Bu projede, küçük bir film veritabanı içeren bir web uygulamasında çalışacak, iki farklı reducer ile işlem yapacaksınız. Hem mevcut tüm state ve action oluşturucuları kullanacak, hem de sıfırdan reducer/redux pairing'leri oluşturacaksınız.

![Film DB örneği](proje-demo.mov)

**_Görevlerinizi tek tek tamamladığınızdan ve ilerlemeden önce her bir görevi test ettiğinizden emin olun.._**

## Talimatlar

### Görev 1: Proje Kurulumu

- [x] Forklayın.
- [x] Klonlayın
- [x] Ana dizine gidin
- [x] `npm install`
- [x] `npm start`

### Görev 2: Proje Gereksinimleri

#### Store oluşturulması ve uygulamaya bağlanması

> _DOM ve film reducer fonksiyonu sizin için hazırlandı, ancak onu redux'a bağlamak size bırakıldı._

- [x] index.js içinde, bir redux store'u yaratmak için `createStore` yöntemini ve bunu App componentınızda kullanmak için `Provider` bileşenini kullanın.

#### Film reducerını bağlamak

> _Reducers klasörü içinde movieReducers dosyası var. Burada state halihazırda tanımlı ve bazı başlangıç verileri girilmiş. Burdaki initial state'i reducerımıza bağlayalım._

- [x] ** movieReducer.js içinde, statein başlangıç değerini initialState olarak atadığımızdan emin olun.** Tüm filmleri burada import edip başlangıç statei olarak store'a koyduğumuza dikkat edin.

- [x] **MovieList bileşeni, tüm filmlerimizi ekrana yazdırır.**
      MovieList componentı içerisinde tüm filmleri göstermek için store'a erişip `movies` değerini kullanmalıyız. `react-redux` içerisinden `useSelector` hookunu kullanarak `movies` değerine erişin.

- [x] **Son olarak MovieHeader, başlık metnini görüntülemek için appTitle'ı kullanır.** Store içerisindeki `appTitle` değerine yine `useSelector` ile erişin ve sayfada düzgün görüntülendiğinden emin olun.

#### Sil ve Film Ekle eylemlerini bağlama

- [x] `movieReducers` dosyası içerisinde `deleteMovie` için yazılmış bir bölüm olduğunu ve movieActions dosyası içerisinde ilgili action oluşturucunun zaten mevcut olduğunu unutmayın.

- [x] **Movie bileşeninde bir silme işlemini tetiklemesi gereken HTML öğesini bulun.** Geçerli filmin id değeri ile deleteMovie'yi çağırmak için gerekli event handlerı oluşturun ve bağlayın. Bu handler içerisinde silme actionunu dispatch ettikten sonra kullanıcıyı push('/movies') komutunu kullanarak tüm filmlere yönlendirin. **(Bu kısımda, useParams ile alıp deleteMovie actionu ile dispatch ettiğiniz id değerinin string olduğunu ve movieReducer içerisinde size sağlanan silme eyleminde buna dikkat etmeniz gerektiğini unutmayın!)**

- [x] movieReducer.js'ye bir ADD_MOVIE casei ekleyin.
- [x] Bu yeni casein, payload aracılığıyla iletilen yeni film değerlerine sahip bir state döndürmesini sağlayın
- [x] movieActions.js'de addMovie için bir action oluşturucu oluşturun.
- [x] Bir filmin eklenmesini tetikleyen bileşeni bulun ve addMovie actionunu bağlayın.
- [x] addMovie'yi çağırmak için gerekli event handlerı oluşturun ve bağlayın.
- [x] Yeni bir film eklerken id değeri olarak Date.now() kullanın.
- [x] Yönlendirmeyi tetiklemek için eyleminizi çağırdıktan sonra push('/movies/') öğesini ekleyin.

#### Favoriler reducerı oluşturun

> _Tamam! Artık film reducerı tamamladığınızdan, en sevdiğiniz film işlevselliğini işlemek için sıfırdan bir reducer oluşturma şansınız var. Reducerları birleştirme konusunda çalışacağız._

- [ ] Favoriler için iş mantığını işlemek için bir reducer dosyası oluşturun. Bu dosyada kullanacağınız InitialState objenize aşağıdaki değerlerini ekleyin:

  - favorites: film nesnesini içeren bir dizi (şimdilik boş)
  - displayFavorites: Uygulamada favorilerin görüntülendiği yan alanın gösterim değerini (göster/gizle) tutan bir boolean

- [ ] **Yeni reducerınızı ./reducers/index.js dosyasına import edin.** Başlangıç ta, switch deyimine yalnızca bir default case ekleyin.

- [ ] **reducers/index.js'de hem filmleri hem de favori filmleri redux'a bağlamak için CombineReducers metodunu kullanın.**

- [ ] **Film işlevlerinizin artık çalışmadığına dikkat edin. Neden?** Film reducera bağlı bileşenin tekrar çalışmasını sağlamak için gerekli değişiklikleri yapın.

- [ ] Store içerisinden `favorites` değerini FavoriteMovieList bileşenine bağlayın ve test edin. (ipucu: yine useSelector kullanın)

- [ ] DisplayFavorites değerini store içerisinden çekerek Movie ve MovieHeader bileşeninde ilgili yerlerde kullanın.

#### Favoriler eylemleri ekleyin

> _Şimdi, uygulamanın geri kalanını kendi başınıza oluşturacaksınız. Bunu yapabilirsiniz!_

1. Aşağıdaki eylemler için action oluşturucuları hazır. Siz de reducer caseleri ve event handler kodlarını ekleyin:

- toggleFavorites : displayFavorites state değerini true ve false olarak değiştirir. displayFavorites false olduğunda, favori filmler alanı uygulamada görünmez.

- addFavorite: Favoriler listesine yeni bir film nesnesi ekler.
- removeFavorite: Gönderilen bir id ile bir film Nesnesini favoriler listesinden kaldırır.

### Esnek Görevler

- Favoriler görüntülenmiyorsa, kullanıcının bir öğeyi favorilere eklemesine izin vermemek mantıklıdır. Ekleme, favori düğmesinin SADECE displayFavorite true ise görüntülenmesi anlamına gelir.

- Şu anda, aynı filmi birden çok kez favorilerinize ekleyebilirsiniz. Yalnızca listede olmayan filmleri favorilere eklenebilir hale getirmek için AddFavorite eylemini güncelleyin.

- Eğer film ana filmler listesinden silinirse, favorilere ekliyse ordan da silinmelidir, kodunuzu buna göre güncelleyin.

- İçeriklerinizi stilleyin ❤️
