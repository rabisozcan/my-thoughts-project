

// src/data/test.js
export const test = [ 
  {
    id: 1,
    title: "Ahlak Testi: Kurallar mı, Durumlar mı?",
    emoji: "⚖️",
    description: "Doğru ile yanlış arasındaki çizgiyi ne kadar esnetebilirsin?",
    questions: [
      {
      text: "Bir sihirli değnekle insanların düşüncelerini okuyabilseydin okur muydun?",
      options: [
        { text: "Asla okumam mahremiyet ihlalidir", score: 1 },
        { text: "Sadece hayati durumlarda okurum", score: 2 },
        { text: "Kesinlikle! Herkesin ne düşündüğünü bilmek harika olurdu", score: 3 },
      ],
      },
      {
        text: "İş yerinde büyük bir hata yaptın, kimse fark etmedi. Patronun 'Her şey yolunda mı?' diye soruyor.",
        options: [
          { text: "Hemen itiraf ederim vicdanım rahat etmez", score: 1 },
          { text: "Susarım. Benim yaptığımı bilmiyor sonuçta", score: 3 },
          { text: "Önce hatayı düzeltmeye çalışırım düzelmezse söylerim", score: 2 },

        ],
      },
      {
        text: "Depresyondaki arkadasın intihar düşünceleri olduğunu söyledi. Ailesine söylemeni istemiyor.",
        options: [
          { text: "Hayatı tehlikede hemen ailesine söylerim", score: 1 },
          { text: "Onu terapiye ikna etmeye çalışırım", score: 2 },
          { text: "Söz verdim kimseye söylemem", score: 3 },
        ],
      },
      {
        text: "Evlatlık bir çocuğun annesi itiraf etmek istiyor ama babası hayır bilmesin diyor.  Sen ne dersin?",
        options: [
          { text: "Anne haklı, gerçeği söylemek gerekir", score: 1 },
          { text: "Bunu bilmek ona iyi gelmeyecek. Ömür boyu saklarım", score: 3 },
          { text: "Zamanlaması doğru olmalı, çocuk küçükse henüz söylemem", score: 2 },

        ],
      },
      {
      text: "Bir yapay zeka şirketinde çalışıyorsun. Sistem insanların özel mesajlarını analiz ediyor ama çok faydalı sonuçlar üretiyor. Ne yaparsın?",
      options: [
        { text: "Uyarırım ama işimi riske atmam", score: 2 },
        { text: "İhlal bu, sistemi hemen raporlarım", score: 1 },
        { text: "Hiç karışmam işimden olmaya niyetim yok", score: 3 },
        
      ],
      },
      {
        text: "Arkadaşın 'Bu kıyafet bana yakışıyor mu?' diye soruyor. Berbat görünüyor ama çok heyecanlı.",
        options: [
          { text: "Dürüstçe beğenmediğimi söylerim", score: 1 },
          { text: "Nazikçe alternatif öneririm", score: 2 },
          { text: "Moralini bozmamak için 'çok güzelsin' derim", score: 3 },
        ],
      },
      {
        text: "Toplu taşımada oturuyorsun, yaşlı biri biniyor. Ne yaparsın?",
        options: [
          { text: "Uyuyor taklidi yaparım başkası yer versin", score: 3 },
          { text: "Yer veririm saygı göstermek önemlidir", score: 1 },
          { text: "Duruma göre veririm", score: 2 },
          
        ],
      },
      {
        text: "En yakın arkadaşın senden büyük bir borç aldı. Yıllardır ödemiyor.",
        options: [
          { text: "İletişimi keserim beni kullanıyor", score: 1 },
          { text: "Konuyu açmaya utanırım arkadaşlığımız bozulmasın", score: 3 },
          { text: "Konuşurum, düzeltme şansı veririm", score: 2 },
          
        ],
      },
    ],
    results: {
      low: {
        label: "Mutlakçı (Deontologist) ⚔️",
        desc: "Kurallara Takıntılısın. Senin için ahlak sabittir. Doğru olanı yapmak her zaman en iyisidir' diyorsun. Yalan her zaman yanlış, dürüstlük her zaman doğrudur. İlkelerin senin pusulan.",
      },
      mid: {
        label: "Dengeli Gerçekçi ⚖️",
        desc: "Sen hem ilkelere hem bağlama önem veriyorsun. Aristoteles'in 'orta yol'unu buluyorsun. Ne tamamen katısın ne de tamamen esneksin. Duruma göre hareket ederken değerlerinden tamamen vazgeçmezsin.",
      },
      high: {
        label: "Relatifçi (Bağlamcı) 🌐",
        desc: "Senin için ahlak bağlama göre değişir. Pragmatiksin. Çıkarların önemli. Koşullar ve sonuçlar kararlarını belirler. 'Ne gerekiyorsa onu yaparım' diyorsun ve bu seni zor durumlarda hızlı çözümler üretebiliyor kılıyor.",
      },
    },
  },



  {
    id: 2,
    title: "Özgür İrade vs Determinizm Testi",
    emoji: "🎲",
    description: "Hayatını sen mi yönetiyorsun yoksa akışa mı bıraktın?",
    questions: [
      {
        text: "Sabah erken kalkamadın. Sence neden?",
        options: [
          { text: "Hem uykusuzluk hem motivasyon eksikliği", score: 2 },
          { text: "Biyolojik saatim böyle, gece insanıyım", score: 1 },
          { text: "Disiplinsizim kendimi kontrol edemedim", score: 3 },
        ],
      },
      {
        text: "Mahkemedeki suçlu, çocuklukta sürekli şiddet görmüş. Sokaklarda kalmış. Sence hayat yolunu seçme şansı var mıydı?",
        options: [
          { text: "Evet herkes her koşulda yaptıklarından sorumludur", score: 3 },
          { text: "Kısmen yoktu ama yine de iyiyi seçmeye çalışmalı", score: 2 },
          { text: "Yoktu. geçmişimiz tüm kararlarımızda belirleyicidir", score: 1 },
        ],
      },
      {
      text: "Sevgilin sana yalan söyledi. 'Ailem bana hep yalan söyledi, başka türlüsünü bilmiyorum' diyor.",
      options: [
        { text: "Anlıyorum ama yine de affedemem", score: 2 },
        { text: "Mazeret değil yetişkin olarak doğruyu seçebilirdi", score: 3 },
        { text: "Geçmişi onu buna zorlamış, suçlu hissetmemeli", score: 1 },
        
        
      ],
      },
      {
      text: "Bir anda canın çikolata çekti. Bu istek nereden geliyor?",
      options: [
        { text: "Benim tercihim, istediğim için yiyorum", score: 3 },
        { text: "Vücudumun şekere ihtiyacı var galiba", score: 1 },
        { text: "Reklamlardan etkilenmişimdir", score: 2 },
      ],
      },
      {
        text: "Yetenek yarışmasında finale kalan: 'Ben çalıştım, hak ettim' vs 'Ailem imkan sağladı'. Hangisi haklı?",
        options: [
          { text: "İmkan sağlayan, şartlar belirledi", score: 1 },
          { text: "Çalışan, kendi başarısının sahibi", score: 3 },
          { text: "İkisi de kısmen haklı", score: 2 },
          
        ],
      },
      {
        text: "Bir bilim insanı 'Gelecek zaten yazılı, sadece henüz okumadık' diyor. Katılıyor musun?",
        options: [
          { text: "Ne münasebet geleceğimi ben yazarım", score: 3 },
          { text: "Belki bir kısmı yazılı ama değiştirebilirim", score: 2 },
          { text: "Haklı buldum kadere inanıyorum", score: 1 },
        ],
      },
      {
        text: "Katil 'Beyin tümörüm vardı, öfkemi kontrol edemedim' diyor. MR sonucuna baktık geçrekten de tümör var. Ceza almalı mı?",
        options: [
          { text: "Evet, kesinlikle ceza almalı", score: 3 },
          { text: "Tedavi edilmeli ama hafif bir ceza da almalı", score: 2 },
          { text: "Hayır beyni karar verdi o değil", score: 1 },
        ],
      },
      {
  text: "Google Maps seni yanlış yere yönlendirdi. Ne yaparsın?",
  options: [
    { text: "Benim suçum değil, teknoloji azizliği.", score: 1 },
    { text: "Kendimi suçlarım içgüdüme güvenmeliydim!", score: 3 },
    { text: "Sakinim. Belki evrenin planı bu rotaydı.", score: 2 },
  ],
      },
    ],
    results: {
      low: {
        label: "Determinist (Akışa Bırakan) 🧬",
        desc: "Sen hayatın akışına bırakmayı tercih ediyorsun! 'Oluruna bırakıyorum' diyorsun ve bu rahat tavrın sayesinde stres yapmıyorsun.  Beynin, çevren, geçmişin... hepsi seni yönetiyor. Özgür irade bir illüzyon. Bu harika bir özellik ama bazen kontrolü ele almak da gerekebilir.",
      },
      mid: {
        label: "Uyumcu (Compatibilist) ⚖️",
        desc: "Sen denge insanısın. Hem determinizmi hem özgür iradeyi savunabilirsin. Spinoza ile Sartre'ı aynı masada oturtursun. Bazen kaderin yazar, bazen sen kalemi eline alırsın. İkisi de gerçek",
      },
      high: {
        label: "Hayatının Şoförü",
        desc: "Sen hayatının tamamen kontrolünün sende olduğuna inanıyorsun. 'Her şey benim seçimim' diyorsun ve bu seni güçlü kılıyor. Ama bazen küçük sürprizlere de yer vermek hayatı daha eğlenceli yapar",
      },
    },
  },



  {
    id: 3,
    title: "Yaşam Tarzı Testi",
    emoji: "🌅",
    description: "Anı mı yaşarsın geleceği mi?",
    questions: [
      {
     text: "Cuma akşamı ve hafta sonu boş. Ne yapıyorsun?",
      options: [
        { text: "Anlık karar veririm, canım ne isterse", score: 2 },
        { text: "Arkadaşlarla buluşur eğlenirim", score: 3 },
        { text: "Haftalık planıma bakarım", score: 1 },
      ],
      },
      {
        text: "Hayatta en önemli şey nedir?",
        options: [
          { text: "Disiplin edinmek erdemli olmak", score: 1 },
          { text: "Dengeli bir hayat", score: 2 },
          { text: "Mutlu olmak, anı yaşamak", score: 3 },
          
        ],
      },
      {
      text: "Öldükten sonra insanlar seni nasıl hatırlasın isterdin?",
      options: [
        { text: "'Hayat dolu biriydi' diyenler", score: 3 },
        { text: "'Güvenilir ve erdemli biriydi' diyenler", score: 1 },
        { text: "'İyi bir denge kurmayı başarmıştı' diyenler", score: 2 }
      ],
      },
      {
      text: "Beklenmedik bir ekstra paran geldi. İlk aklına gelen?",
      options: [
        { text: "Hemen avmye gidip mağaza mağaza gezerim", score: 3 },
        { text: "Bir kısmını harcar kalanını biriktiririm", score: 2 },
        { text: "Doğrudan birikime veya yatırıma eklerim", score: 1 },
      ],
      },
      {
        text: "İşinden atıldın. İlk düşüncen ne olur?",
        options: [
          { text: "Felaket, taksitlerimi nasıl ödeyeceğim hayat bitti", score: 3 },
          { text: "Üzgünüm tabii ama bir yol bulurum", score: 2 },
          { text: "Kontrolüm dışında gelişti, yeni fırsatlar var", score: 1 },
        ],
      },
      {
        text: "Acı çekmek sence:",
        options: [
          { text: "Büyümenin bir parçası", score: 1 },
          { text: "Kaçınılması gereken bir şey", score: 3 },
          { text: "Bazen gerekli bir süreç", score: 2 },
          
        ],
      },
      {
      text: "Sabah alarmın çaldı, 10 dakika daha uyumak istiyorsun. Ne yaparsın?",
      options: [
        { text: "Hemen kalkarım disiplin önemli", score: 1 },
        { text: "Biraz daha uyur sonra kalkarım", score: 2 },
        { text: "Uyurum, vücudum bunu istiyor", score: 3 },
        
      ],
      },
      {
        text: "Bir gün öleceksin. Bu seni nasıl hissettiriyor?",
        options: [
          { text: "Kaygılandırıyor, şimdi yaşamalıyım", score: 3 },
          { text: "Bazen düşünüyorum ama çok takılmıyorum", score: 2 },
          { text: "Doğal bir süreç, korkulacak şey değil", score: 1 },
        ],
      },
    ],
    results: {
      low: {
        label: "Stoic (Planlı İlerleyen) ",
        desc: "Sen duygularını kontrol ediyorsun. Sen hayatında disiplin ve planlamaya önem veriyorsun. 'Önce iş, sonra eğlence' diyorsun. Bu seni garantici biri yapıyor.",
      },
      mid: {
        label: "Dengeli ⚖️",
        desc: "Sen dengedesin. Hem hazdan hem erdemden pay alıyorsun. Aristoteles'in 'altın orta yol' öğrencisisin. Ne aşırı haz düşkünüsün ne de katı bir disiplin manyağı. Hayatı bir denge oyunu gibi görüyorsun: Bazen spontane olmak gerekiyor bazen plan.",
      },
      high: {
        label: "Hedonist (Haz Peşinde Anı Yaşayan)🎠 ",
        desc: "Mutluluk senin için her şey demek. Sen hayatın kendisini kutlayansın! Epicurus'un 'Haz, hayatın amacıdır' sözünü fazla içselleştirmişsin. İnsanlar bazen 'şu hayatı hiç ciddiye almıyorsun' diyebilir ama sen biliyorsun: Asıl ciddiye alınması gereken, yaşamın kendisidir. Hayat bi gün o da bugüncüsün. ",
      },
    },
  },




  {
    id: 4,
    title: "Nihilizm vs Varoluşçuluk Testi",
    emoji: "🌌",
    description: "Hayatın bir anlamı var mı?",
    questions: [
      {
        text: "Evren 13.8 milyar yaşında, sen 80 yıl yaşayacaksın. Bu seni nasıl hissettiriyor?",
        options: [
          { text: "Anlamsız geliyor, ne fark eder ki", score: 3 },
          { text: "Büyük resimde küçüğüm ama önemliyim", score: 2 },
          { text: "Bu bana sorumluluk veriyor, anlamı ben yaratırım", score: 1 },
        ],
      },
      {
        text: "100 yıl sonra kimse seni hatırlamayacak. Bu bilgi seni nasıl etkiliyor?",
        options: [
          { text: "Hiçbir şeyin önemi yok demek", score: 3 },
          { text: "Üzücü ama şimdiki hayatıma odaklanırım", score: 2 },
          { text: "O zaman şimdi yaşamalıyım", score: 1 },
        ],
      },
      {
        text: "Tanrı yoksa her şey mübah mıdır?",
        options: [
          { text: "Hayır ama ahlak zorlaşır", score: 2 },
          { text: "Evet, objektif ahlak olmaz", score: 3 },
          { text: "Hayır, biz anlamı yaratırız", score: 1 },
        ],
      },
      {
      text: "Bir depremde her şeyini kaybeden bir aileyle konuşuyorsun. 'Neden biz?' diye soruyorlar. Ne dersin?",
      options: [
        { text: "Bu zorluğun üstesinden birlikte geleceğiz, yeniden inşa edeceğiz", score: 1 },
        { text: "Bazen kötü şeyler iyi insanların başına gelir, bunu kabul etmek zor", score: 2 },
        { text: "Doğa rastgele hareket eder kimseye özel muamele yok", score: 3 }
      ],
      },
      {
      text: "Bir bulmaca çözüyorsun ama bir baktın ki cevap anahtarı yok. Nasıl hissedersin?",
      options: [
        { text: "Kendi cevabımın doğru olduğuna inanırım", score: 1 },
        { text: "Boşa zaman kaybı yaşadım sinirlenirim", score: 3 },
        { text: "Eğlence bu sonuç önemli değil", score: 2 },
        
      ],
      },
      {
        text: "Bir sanat galerisinde dolaşırken yarım kalmış bir tablo gördün. Yanındaki plakette ressamın ölümü nedeniyle yarım kaldığı yazıyor. Bu tablo hakkında ne düşünürsün?",
        options: [
          { text: "Zamanla her şey yok olacağını tekrar hatırlarım... Her şey boş", score: 3 },
          { text: "Yarım kalmış olması onu daha da değerli kılıyor, çünkü hayat da böyle yarım kalabilir.", score: 2 },
          { text: "Belki de birisi onu tamamlamalı böylece ressamın amacı gerçekleşmiş olur.", score: 1 },
        ],
      },
      {
      text: "En sevdiğin dizinin finali berbat bitti. Tüm o saatler boşa mı gitti?",
      options: [
        { text: "Kısmen üzülürüm daha iyi bitebilirdi", score: 2 },
        { text: "Evet bu dizi tam olarak zaman kaybıydı", score: 3 },
        { text: "Hayır çünkü izlerken keyif aldım", score: 1 },
      ],
      },
      {
      text: "İstanbul'da bir sokak kedisi görüyorsun. Kimseye ait değil, kendi başının çaresine bakıyor. Bu sana ne hissettiriyor?",
      options: [
        { text: "O kedi bile hayatta kalma mücadelesi veriyor, her canlının bir değeri var", score: 1 },
        { text: "Doğa böyle işte, her canlı kendi yolunu bulur", score: 2 },
        { text: "Kedi de ben de aynıyız, hayatımızın bir anlamı yok", score: 3 }
      ],
      },
    ],
    results: {
      low: {
        label: "Varoluşçu (Anlam İnşacısı) 🔥",
        desc: "Sen hayatındaki her anı, her ilişkiyi ve her deneyimi anlamlandırmaya çalışan bir insansın. Geçmişinle güçlü bağlar kuruyor ve onu geleceğe taşıyorsun. Aile, gelenek ve anılar senin için çok değerli. Sartre'ın dediği gibi: 'İnsan kendi yaptıklarından ibarettir.' Sen de kendi hayatını anlamlı kılmak için sürekli çaba gösteriyorsun.",
      },
      mid: {
        label: "Dengeli (Akışın Ustası) ⚖️",
        desc: "Sen hem boşluğu hem anlamı görebiliyorsun. Camus: 'Anlamsızlığı kabul edip yine de yaşamayı seçmek.' Hayatı hem kabul ediyor hem kendi değerlerini yaratıyorsun.",
      },
      high: {
        label: "Nihilist (Anlamsızcı) 🕳️",
        desc: "Sen için kurallar ve anlamlar önemli değil. 'Hayat zaten anlamsız, o zaman neden stres yapayım?' diyerek kayıtsız kalıyorsun. Bu rahat tavrın seni özgür kılıyor ama bazen amaçsız da hissettirebilir.",
      },
    },
  },




  {
    id: 5,
    title: "Bilginin Kaynağı Testi",
    emoji: "🔍",
    description: "Gerçeği nasıl bilirsin? Akıl mı, deneyim mi?",
    questions: [
      {
      text: "Yeni bir şehre taşındın ve kaybolduğunu fark ettin. Ne yaparsın?",
      options: [
        { text: "Yerlilere sorar onların deneyimlerinden faydalanırım", score: 1 },
        { text: "Mantığımla yön bulmaya çalışır işaretleri yorumlarım", score: 3 },
        { text: "Hem haritaya bakar hem insanlara danısırım", score: 2 }
      ],
      },
      {
      text: "Bir bebek hiçbir şey öğretilmeden konuşmayı öğreniyor. Bu sana ne düşündürür?",
      options: [
        { text: "Bazı bilgiler doğuştan geliyor zihinde zaten var", score: 3 },
        { text: "İçinde bir potansiyel var ama çevre onu açığa çıkarıyor", score: 2 },
        { text: "Her sey öğrenme ve taklitten ibaret", score: 1 },
      ],
      },
      {
      text: "Bir makine bozuldu ve tamir etmen gerekiyor. Nasıl başlarsın?",
      options: [
        { text: "Kullanım kılavuzunu okurum", score: 2 },
        { text: "Daha önce benzer bir şeyi nasıl tamir ettiğimi hatırlarım", score: 1 },
        { text: "Deneme-yanılma yöntemiyle çalışmaya başlarım", score: 3 },
      ],
      },
      {
      text: "Doğuştan görme engelli biri 'Mavi nedir?' diye soruyor. Ne söylersin?",
      options: [
        { text: "'Görmeden anlayamazsın' derim", score: 1 },
        { text: "'470nm dalga boyu ışık' derim, tanımlayabilirim", score: 3 },
        { text: "'Sakinlik hissi veren soğuk bir ton' diye benzetme yaparım", score: 2 }
      ]
      },
      {
      text: "Bir gece rüyanda bir formül buldun. Sabah hatırladığında doğru çıktı. Ne düşünürsün?",
      options: [
        { text: "Bilinçaltım verileri işledi, sadece fark etmedim.", score: 3 },
        { text: "Evren bazen cevapları sezgiyle gönderir.", score: 2 },
        { text: "Şans. Denk geldi o kadar.", score: 1 },
      ],
      },
      {
      text: "Bir şair 'aşk'ı hiç aşık olmadan anlatabilir mi?",
      options: [
        { text: "Evet hayal gücü gerçek deneyimin yerini alabilir", score: 3 },
        { text: "Hayır - duygu olmadan kelimelerin içi boş kalır", score: 1 },
        { text: "Anlatmasına anlatır da duyguyu okuyucuya pek geçiremez gibi", score: 2 }
      ],
      },
      {
      text: "Matematik sınavında hissettiğin cevap doğru çıktı. Neden?",
      options: [
        { text: "Önceki deneyimlerim ve kas hafızası", score: 1 },
        { text: "Bilinçaltım aslında hesapladı, ben sadece fark etmedim", score: 3 },
        { text: "Rastlantı veya iyi bir tahmin olma ihtimali var", score: 2 }
      ]
      },
      {
        text: "Çocuk 'Ateş yakıcıdır' bilgisine nasıl ulaşır?",
        options: [
        { text: "Bir kez dokunur, bir daha unutmaz.", score: 1 },
        { text: "Elini yakan birini görür çıkarım yapar.", score: 3 },
        { text: "Söyleneni duyar, hem inanır hem test eder.", score: 2 },
      ],
      },
    ],
    results: {
      low: {
        label: "Deneyimci Gerçekçi🔬",
        desc: "Senin için gerçek, dokunulabilir, hissedilebilir olmalı. Somut düşünüyorsun. Sana göre her şey deneyimden gelir. Ama dikkat etmelisin bazı bilgiler deneyimin ötesinde olabilir. Deneyimlemediğin her şeyi reddetmek seni sınırlandırır",
      },
      mid: {
        label: "Dengeli (Akıl & Deneyim) ⚖️",
        desc: "Sen her iki dünyanın değerini biliyorsun. Teoriyi düşünmeden anlayamazsın, ama deneyimsiz bilgi eksik. Akıl ve duyu senin için birlikte çalışır. Esnek bir düşünme yapın var dogmatik değilsin",
      },
      high: {
        label: "Rasyonel Düşünür 🧠",
        desc: " Senin için bilgi doğuştandır ve her şeyden önce gelir. Platon'un idealar dünyası gibi, gerçek bilgi deneyimin ötesinde diyorsun. Senin için fiziksel deneyim zorunlu değil, düşünmek yeter. Ama dikkat her şeyi mantığa indirgemen empatiyi öldürebilir",
      },
    },
  },



  {
    id: 6,
    title: "Egoizm vs Altruizm Testi",
    emoji: "💖",
    description: "Kendin için mi yaşıyorsun, başkaları için mi?",
    questions: [
      {
        text: "Son paran var. Kendine yemek alacaksın ama dilenci para istedi. Ne yaparsın?",
        options: [
        { text: "Veririm yoksa vicdanım rahat etmez", score: 1 },
        { text: "Yarısını veririm, hem o yesin hem ben", score: 2 },
        { text: "Vermem, dilenciler genelde organize çalışıyor", score: 3 },
        ],
      },
      {
        text: "Arkadaşın taşınıyor, yardım istiyor. Ama senin de planların var. Ne yaparsın?",
        options: [
          { text: "Taşınma şirketi öneririm", score: 3 },
          { text: "Kısa süreliğine yardım eder sonra planıma geçerim", score: 2 },
          { text: "Planımı iptal eder, tüm gun cançeme yardım ederim", score: 1 },
        ],
      },
      {
      text: "Bir kitap yazıyorsun. Kahramanın bir seçim yapacak: Ya herkesi kurtaracak ama unutulacak, ya da sadece bir kişiyi kurtaracak ama efsane olacak. Kahramanın ne yapsın?",
      options: [
        { text: "Herkesi kurtarsın unutulsa da gerçek kahramanlık budur", score: 1 },
        { text: "Bir kişiyi kurtarsın PR yapmak önemli", score: 3 },
        { text: "İkisini de yapmanın yolunu arasın", score: 2 }
      ]
      },
      {
        text: "Yol kenarında arabası arızalanmış biri var. Acelen var. Ne yaparsın?",
        options: [
          
          { text: "Durur hızlıca sorarım ne oldu diye", score: 2 },
          { text: "Sağa çeker o kişiye yardım ederim", score: 1 },
          { text: "Yoluma bakarım dünyadaki tek insan ben değilim ya", score: 3 },
        ],
      },
      {
      text: "Birine yardım etmek seni mutlu ettiğinde gerçekten onun için mi yoksa kendini iyi hissetmek için mi yapıyorsun?",
      options: [
        { text: "İkisi de mutluluk paylaşınca artıyor", score: 2 },
        { text: "Kendimi iyi hissetmek için çünkü iyilik özünde bencildir.", score: 3 },
        { text: "Sadece onun için yaparım", score: 1 },
      ],
      },
      {
      text: "Ölümsüzlük iksiri buldun. Sadece bir kişi içebilir.",
      options: [
        
        { text: "Sevdiğim birine veririm onun yaşaması beni mutlu eder", score: 1 },
        { text: "Yok ederim ölümsüzlük doğal düzene aykırı", score: 2 },
        { text: "Tabii ki kendim içerim", score: 3 }
      ],
      },
      {
      text: "Zaman makinen var. Tarihteki bir olayı değiştirebileceksin. Ne yaparsın?",
      options: [
        { text: "Kendim için avantajlı bir şeyi değiştiririm", score: 3 },
        { text: "Dünyadaki bir trajediyi engellerim çünkü daha çok kişi etkileniyor", score: 1 },
        { text: "Sonuçlarını bilmediğim için hiçbir şeyi değiştirmem", score: 2 }
      ],
      },
      {
        text: "Bir felakette önce kimi kurtarmalılar?",
        options: [
          { text: "Önce can sonra canan beni kurtarsınlar", score: 3 },
          { text: "Duruma göre karar versinler", score: 2 },
          { text: "En zayıf olanı, kendim son sırada olabilirim", score: 1 },
        ],
      },
    ],
    results: {
      low: {
        label: "Altruist (Özverili) 💝",
        desc: " Bilinçaltında 'biz' kavramı kök salmış. Senin için başkalarının mutluluğu önemli. Kendinden önce başkalarını düşünürsün. Ama dikkat: Sürekli kendinden vermek sonunda seni tüketebilir.",
      },
      mid: {
        label: "Dengeli (Karşılıklıcı) ⚖️",
        desc: "Sen hem kendini hem başkalarını düşünüyorsun. Ne tamamen egoist ne de tamamen özgecisin. Aristoteles'in 'orta yolu'ndasın. Lazım olursa insanlara yardım edersin ama kendini de ihmal etmezsin.",
      },
    high: {
      label: "Egoist (Bencil) 👤",
      desc: `Sen kendini önceliklendiriyorsun. 'Önce ben, sonra başkaları' diyorsun. Dikkat: Aşırı egoizm yalnızlığa ve izolasyona yol açabilir.

 İlginç gerçek:  
En özgeci görünen insanlar bile "kendileri için" yardım ediyor. Çünkü yardım etmek onları mutlu ediyor. Yani herkes biraz egoist aslında — sen sadece dürüstsün`,
    },
    },
  },
];


