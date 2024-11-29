
# Film ve TV Şovları Bilgisi Uygulaması 🎬📺

## Açıklama

Bu, kullanıcıların film ve TV şovlarını arayabileceği React tabanlı bir web uygulamasıdır. Uygulama, [OMDb API](http://www.omdbapi.com/) aracılığıyla film ve TV şovlarının verilerini alır ve kullanıcı dostu bir kart düzeninde gösterir. Uygulama, React, Axios ile HTTP istekleri, Reactstrap ile duyarlı tasarım bileşenleri kullanır ve kullanıcıların bir film veya TV şovunun adını ve/veya yayınlanma yılını girebileceği bir arama özelliği içerir.

---

## Özellikler 🚀

- **Başlık ve Yıl ile Arama**: Kullanıcılar, film veya TV şovunu başlık ve/veya yayın yılı ile arayabilirler.
- **Duyarlı Tasarım**: Mobil öncelikli, duyarlı bir düzen için Reactstrap kullanılarak oluşturulmuştur.
- **API Entegrasyonu**: OMDb API'si ile veri çekilir ve film/TV şovları hakkında bilgi görüntülenir.
- **Film Kartları**: Film ayrıntılarını görsel olarak çekici kartlarda gösterir; film posterleri, değerlendirme puanları ve meta veriler içerir.

---

## Teknoloji Yığını 💻

- **React**: Kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesi.
- **Reactstrap**: React için Bootstrap bileşenleri sağlayan bir kütüphane.
- **Axios**: OMDb API'sine istekler göndermek için kullanılan bir HTTP istemcisi.
- **React Icons**: Arama simgesi gibi özelleştirilebilir simgeler sağlayan bir kütüphane.

---

## Kurulum Talimatları ⚙️

1. **Depoyu klonlayın**:

   ```bash
   git clone https://github.com/bykeremx/Film-or-TvShow-List-App-React.git
   ```

2. **Bağımlılıkları yükleyin**:

   Projenin kök dizininde terminal açarak aşağıdaki komutu çalıştırın:

   ```bash
   npm install
   ```

3. **Uygulamayı çalıştırın**:

   Geliştirme sunucusunu başlatmak için aşağıdaki komutu kullanın:

   ```bash
   npm start
   ```

   Uygulama, [http://localhost:3000](http://localhost:3000) adresinde çalışmaya başlayacaktır.

---

## Kullanım 📲

1. Uygulama açıldığında, kullanıcılar film ve TV şovlarının adını ve (isteğe bağlı olarak) yıl bilgisini girebilecekleri bir form ile karşılaşacaklar.
2. Kullanıcılar "Search Movie!" butonuna tıklayarak arama işlemini başlatabilirler.
3. Arama sonuçları, film başlığı, yayın yılı, IMDB puanı ve türü gibi bilgilerle birlikte film kartları şeklinde görüntülenir.

---


## Kullanılan API 🔗

Uygulama, **OMDb API**'sini kullanarak film ve TV şovları hakkında bilgi alır. API'ye şu şekilde erişebilirsiniz:

- **API URL**: `http://www.omdbapi.com/`
- **Örnek API Anahtarı**: `xxxxxx`

---


## Lisans 📄

Bu proje, MIT Lisansı altında lisanslanmıştır. Detaylar için [LICENSE](./LICENSE) dosyasına bakabilirsiniz.

---
