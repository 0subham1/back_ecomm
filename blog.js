const blogList = [
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Parker Hall",
    title:
      "The Best DAW Software Recommended by WIRED’s Resident Musicians (2024)",
    description:
      "From Ableton and Pro Tools to iPad apps—get the most out of your music with these digital audio workstations, or DAWs.",
    url: "https://www.wired.com/story/best-daw-recording-software/",
    urlToImage:
      "https://media.wired.com/photos/669c3d3b61a5726eb1bde157/191:100/w_1280,c_limit/Studio-One-Abstract-Background-SOURCE-Amazon.jpg",
    publishedAt: "2024-07-21T14:00:00Z",
    content:
      "The reason many folks dislike the software? It's very expensive, as is the external hardware sold by Avid, the brand that owns Pro Tools. Many studios forgo updating computers for a very long time fo… [+7909 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "David Nield",
    title: "Here Are the Best Times to Upgrade Your Phone",
    description:
      "Here's how you should play the waiting (or not waiting) game when it comes time to upgrade your phone.",
    url: "https://gizmodo.com/when-is-the-best-time-to-upgrade-your-phone-2000476965",
    urlToImage:
      "https://gizmodo.com/app/uploads/2024/05/072745c469a57e430d22e6226af96732.jpg",
    publishedAt: "2024-07-21T10:30:31Z",
    content:
      "When the time comes to upgrade your phone, it can be both exciting and daunting: A brand new handset awaits, but which one? Dozens of new models are launched yearly to complement the older ones still… [+4999 chars]",
  },
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: "Zachary McAuliffe",
    title: "iOS 18 Beta: Safari's Find on Page Search Function Has a New Home",
    description:
      "Here's where to find the function so you can quickly scan a webpage for a name without almost sending the page to someone.",
    url: "https://www.cnet.com/tech/services-and-software/ios-18-beta-safaris-find-on-page-search-function-has-a-new-home/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/673521d087d9e9a4f4129bf846b784fbed71dd8a/hub/2024/04/05/22de5863-d323-4eb6-91a4-e68706fc6775/ios-18-iphone15-3-00000.jpg?auto=webp&fit=crop&height=675&width=1200",
    publishedAt: "2024-07-21T10:00:04Z",
    content:
      "Apple released the first public beta for iOS 18 on Monday, a little more than a month after the tech giant announced the software at its Worldwide Developers Conference in June. Apple said the update… [+2700 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Lauren Edmonds",
    title:
      "Dozens of illnesses across 28 states are now linked to a company's 'microdosing' gummies and chocolate bars",
    description:
      "The FDA is investigating illnesses linked to microdosing edibles sold by Diamond Shruumz. At least 69 illnesses have been reported across 28 states.",
    url: "https://www.businessinsider.com/microdosing-gummies-chocolate-bars-diamond-shruumz-sick-fda-2024-7",
    urlToImage:
      "https://i.insider.com/669c0cd3fb2b6bedb058f515?width=1200&format=jpeg",
    publishedAt: "2024-07-21T13:24:14Z",
    content:
      'The CDC published a report on "mushroom gummies" sold in Virginia. Douglas Sacha/Getty Images\r\n<ul><li>Over five dozen people reported seeking medical attention after consuming Diamond Shruumz produc… [+2632 chars]',
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Jessica Johnson",
    title:
      "Arizona weather forecast: Dust storm moves through the Phoenix area; power outages impacting thousands",
    description:
      "A massive and dense dust storm moved through the Valley on Sunday, and with it came wind, rain and lightning.",
    url: "https://www.yahoo.com/news/arizona-weather-forecast-dust-storm-210529641.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/dAFt2IFk1APcqh.uHI2Ezw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/ksaz_fox_local_article_698/34f3731b1dec4e2627a53363e5715d6e",
    publishedAt: "2024-07-21T21:05:29Z",
    content:
      "A massive and dense dust storm moved through the Valley on Sunday, and with it came wind, rain and lightning.\r\nThe National Weather Service says a Severe Thunderstorm Warning was issued for Phoenix, … [+7101 chars]",
  },
  {
    source: {
      id: null,
      name: "Xataka.com",
    },
    author: "Fran León",
    title:
      "MediaMarkt sigue de aniversario y estos son los mejores chollos en tecnología en su traca final",
    description:
      "Este año, MediaMarkt está cumpliendo su cumpleaños número 25 y está celebrando una campaña con descuentos en todas las categorías de su tienda. Concretamente, hasta el 29 de julio está llevando a cabo la traca final y estos son algunos de los mejores chollos …",
    url: "https://www.xataka.com/seleccion/mediamarkt-sigue-aniversario-estos-mejores-chollos-tecnologia-su-traca-final",
    urlToImage:
      "https://i.blogs.es/b81116/captura-de-pantalla-2024-07-19-a-las-12.33.27/840_560.png",
    publishedAt: "2024-07-21T08:31:13Z",
    content:
      "Este año, MediaMarkt está cumpliendo su cumpleaños número 25 y está celebrando una campaña con descuentos en todas las categorías de su tienda. Concretamente, hasta el 29 de julio está llevando a cab… [+4281 chars]",
  },
  {
    source: {
      id: null,
      name: "Xataka.com",
    },
    author: "Yúbal Fernández",
    title: "Cómo preparar Google Maps para tus vacaciones de verano",
    description:
      "Vamos a explicarte cómo preparar Google Maps para tus vacaciones de verano, de forma que la aplicación sea uno de los centros neurálgicos de tu viaje. Google Maps tiene muchas funciones, y vas a poder utilizarlo para dejarlo todo listo y configurado para tu t…",
    url: "https://www.xataka.com/basics/como-preparar-google-maps-para-tus-vacaciones-verano",
    urlToImage: "https://i.blogs.es/03019f/maps/840_560.jpeg",
    publishedAt: "2024-07-21T12:01:13Z",
    content:
      "Vamos a explicarte cómo preparar Google Maps para tus vacaciones de verano, de forma que la aplicación sea uno de los centros neurálgicos de tu viaje. Google Maps tiene muchas funciones, y vas a pode… [+8262 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Kurt Knutsson, CyberGuy Report",
    title: "The best free sites for sharing photos and videos with your family",
    description:
      "Kurt the CyberGuy unpacks the best applications to share family photos with loved ones with privacy, security and ease of use for photo sharing.",
    url: "https://www.foxnews.com/tech/best-free-sites-sharing-photos-videos-your-family",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2024/07/1-The-best-free-sites-for-sharing-photos-and-videos-with-your-extended-family.jpg",
    publishedAt: "2024-07-21T14:00:16Z",
    content:
      "In a world where every moment is captured, the question isnt just about taking photos and videos. Its about sharing them with those who matter most. Kim from Tinton Falls, New Jersey, echoes a common… [+11283 chars]",
  },
  {
    source: {
      id: null,
      name: "Digital Trends",
    },
    author: "Luke Larsen",
    title: "We’ve reviewed 33 laptops this year so far. Let’s rank the 6 best",
    description:
      "To say it's been a busy year for laptops would be a severe understatement. Of all the laptops we've reviewed so far, these are the 6 that stood out.",
    url: "https://www.digitaltrends.com/computing/best-new-laptops-of-2024-so-far/",
    urlToImage:
      "https://www.digitaltrends.com/wp-content/uploads/2024/07/surface-laptop-7-06.jpg?resize=1200%2C630&p=1",
    publishedAt: "2024-07-21T12:00:55Z",
    content:
      "It’s been quite a busy year for laptops, especially with all the talk of Windows on Arm and AI PCs. But cutting through all the hype and fluff, there have been some really fantastic laptops we’ve had… [+7205 chars]",
  },
  {
    source: {
      id: null,
      name: "The Atlantic",
    },
    author: "Helen Lewis",
    title: "Tony Blair Wants Us to Stop Worrying and Embrace AI",
    description:
      "He pushed the British left to accept capitalism. Now he’s asking the world to make peace with artificial intelligence.",
    url: "https://www.theatlantic.com/ideas/archive/2024/07/tony-blair-interview-on-ai/679112/?utm_source=feed",
    urlToImage: null,
    publishedAt: "2024-07-21T10:00:00Z",
    content:
      "At first glance, Tony Blair is an unlikely evangelist for the wondrous possibilities of artificial intelligence. As prime minister of Great Britain from 1997 to 2007, he never carried a mobile phone.… [+12850 chars]",
  },
  {
    source: {
      id: null,
      name: "Lapcatsoftware.com",
    },
    author: null,
    title: "Deluge of Fake Mac App Store Reviews",
    description: "Comments",
    url: "https://lapcatsoftware.com/articles/2024/7/1.html",
    urlToImage: null,
    publishedAt: "2024-07-21T00:38:31Z",
    content:
      "Jeff Johnson (My apps, PayPal.Me, Mastodon)\r\nFeedback Assistant Boycott\r\nJuly 20 2024\r\nYesterday I discovered a deluge of recent fake customer reviews for a number of top paid apps in the United Stat… [+3147 chars]",
  },
  {
    source: {
      id: null,
      name: "Github.com",
    },
    author: "mratsim",
    title:
      "Constantine: Nim lang high-performance, zero-dependency cryptography stack",
    description:
      "Constantine: modular, high-performance, zero-dependency  cryptography stack for verifiable computation, proof systems and blockchain protocols. - mratsim/constantine",
    url: "https://github.com/mratsim/constantine",
    urlToImage:
      "https://opengraph.githubassets.com/ac5d162f87a4e60ed42dfd795c5bc85b9a3182c7f2f90d51d2bd9c26ac6ec29f/mratsim/constantine",
    publishedAt: "2024-07-21T21:59:47Z",
    content:
      "Constantine: High performance cryptography for proof systems and blockchain protocols\r\nA cryptographic system should be secure even if everything about the system, except the key, is public knowledge… [+14310 chars]",
  },
  {
    source: {
      id: null,
      name: "Dgerrells.com",
    },
    author: null,
    title: "So you think you know box shadows?",
    description:
      "So you think you know box shadows huh? I bet you didn't know they could do this.",
    url: "https://dgerrells.com/blog/how-not-to-use-box-shadows",
    urlToImage: "https://davidgerrells.com/images/boxshadowrender.jpg",
    publishedAt: "2024-07-21T12:38:39Z",
    content:
      "Box shadows. I love them.\r\nFour years ago I found out my m1 can render a stupid number of these bad boys and so I set out to see just how far you can push them and boy did I. If you are looking for a… [+29838 chars]",
  },
  {
    source: {
      id: null,
      name: "heise online",
    },
    author: "Judith Hohmann",
    title: 'Click Boom Flash: Neue Podcast-Folge "Aerials"',
    description:
      "Die Welt von oben: Bernhard Lang hält in Bildern fest, wie der Mensch die Erde verändert.",
    url: "https://www.heise.de/news/Click-Boom-Flash-Neue-Podcast-Folge-Aerials-9775795.html",
    urlToImage:
      "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/2/0/4/7/1/CtFoto_Podcast_16_9-7c539ba3ce9faccd.png",
    publishedAt: "2024-07-21T07:10:00Z",
    content:
      "Spuren der Menschheit: Bernhard Lang dokumentiert sie aus der Luft. Sein fotografischer Fokus liegt auf den Veränderungen, die der Mensch auf der Erde hinterlässt. Dabei entdeckt er sowohl tiefe Narb… [+1952 chars]",
  },
  {
    source: {
      id: null,
      name: "9to5Mac",
    },
    author: "Michael Burkhardt",
    title:
      "Apple Card promo offers boosted 6% cash back at Exxon, Mobil, and EV charging stations",
    description:
      "Apple recently launched a new Apple Card offer, allowing cardholders to earn some additional cash back while refueling or recharging their cars. This offer lasts until August 15th.\n\n\n\n more…",
    url: "https://9to5mac.com/2024/07/21/apple-card-boosted-cashback-offer/",
    urlToImage:
      "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/Apple-Card-global-rollout.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2024-07-21T13:50:23Z",
    content:
      "Apple recently launched a new Apple Card offer, allowing cardholders to earn some additional cash back while refueling or recharging their cars. This offer lasts until August 15th.\r\nWhile Exxon and M… [+1616 chars]",
  },
  {
    source: {
      id: null,
      name: "Android Police",
    },
    author: "Zach Gray-Traverso",
    title: "How to enable or disable Xfinity Home Wi-Fi Hotspot",
    description:
      "Xfinity customers have hotspot access on the go. You simply need to login into your account from your phone. You can also turn this feature off.",
    url: "https://www.androidpolice.com/xfinity-wifi-home-hotspot-turn-on-off/",
    urlToImage:
      "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/05/xfinity-hero.jpg",
    publishedAt: "2024-07-21T07:04:12Z",
    content:
      "An internet connection is essential whether you're at home or on the go. You'll need an internet service provider (ISP) at home and a mobile carrier when you're on the go to have coverage. What if yo… [+2614 chars]",
  },
  {
    source: {
      id: null,
      name: "Genbeta.com",
    },
    author: "Eva Rodriguez de Luis",
    title:
      "Usar ChatGPT en Mac está bien, pero con este atajo de teclado sube de nivel. Se ha convertido en un imprescindible en mi día a día",
    description:
      "Si acostumbras a usar ChatGPT en tu día a día, es altamente probable que tengas el acceso a la web de OpenAI guardado en tus favoritos o alguna extensión que te permita acceder a este popular modelo de inteligencia artificial. Si además tienes Mac, lo suyo es…",
    url: "https://www.genbeta.com/a-fondo/usar-chatgpt-mac-esta-bien-este-atajo-teclado-sube-nivel-se-ha-convertido-imprescindible",
    urlToImage:
      "https://i.blogs.es/c69cf4/captura-de-pantalla-2024-07-21-a-las-8.51.58/840_560.jpeg",
    publishedAt: "2024-07-21T14:01:40Z",
    content:
      "Si acostumbras a usar ChatGPT en tu día a día, es altamente probable que tengas el acceso a la web de OpenAI guardado en tus favoritos o alguna extensión que te permita acceder a este popular modelo … [+2179 chars]",
  },
  {
    source: {
      id: null,
      name: "AppleInsider",
    },
    author: "news@appleinsider.com (Charles Martin)",
    title: "Apple TV+ offers PlayStation owners a three-month trial offer",
    description:
      "Sony PlayStation 4 or 5 model users who have a PlayStation Network account and have or create an Apple ID can get a three-month free trial of Apple TV+, the company's on-demand video service.PlayStation 4 and 5 owners can enjoy Apple TV+ through their console…",
    url: "https://appleinsider.com/articles/24/07/21/apple-tv-offers-playstation-owners-a-three-month-trial-offer",
    urlToImage:
      "https://photos5.appleinsider.com/gallery/60445-124304-43323-84131-Sony-Apple-TV-xl-xl.jpg",
    publishedAt: "2024-07-21T19:21:32Z",
    content:
      "PlayStation 4 and 5 owners can enjoy Apple TV+ through their console.\r\nSony PlayStation 4 or 5 model users who have a PlayStation Network account and have or create an Apple ID can get a three-month … [+1044 chars]",
  },
  {
    source: {
      id: null,
      name: "AppleInsider",
    },
    author: "news@appleinsider.com (Charles Martin)",
    title:
      "Apple keeps pushing AI industry forward with more open-source models",
    description:
      "Apple's Apple Intelligence research team have released two new small but high-performing language models used to train AI generators.Apple's ability to create incredibly compact yet powerful AI models is unequaled in the industry.The Machine Learning team at …",
    url: "https://appleinsider.com/articles/24/07/21/apple-keeps-pushing-ai-industry-forward-with-more-open-source-models",
    urlToImage:
      "https://photos5.appleinsider.com/gallery/60443-124300-59956-122968-44274-85987-210907-Siri-xl-4225638512-xl-xl.jpg",
    publishedAt: "2024-07-21T16:39:55Z",
    content:
      "Apple's ability to create incredibly compact yet powerful AI models is unequaled in the industry.\r\nApple's Apple Intelligence research team have released two new small but high-performing language mo… [+2418 chars]",
  },
  {
    source: {
      id: null,
      name: "AppleInsider",
    },
    author: "news@appleinsider.com (Christine McKee)",
    title:
      "Amazon's $299 iPad 10th Gen deal is back in stock, marking return of Prime Day pricing",
    description:
      "A fan-favorite during last week's Prime Day, the $299 iPad 10th Generation deal is back in stock while supplies last.Reflecting a $50 discount off Apple's $349 MSRP for the iPad 10th Generation 64GB Wi-Fi model, Amazon's $299 price is the lowest available.Buy…",
    url: "https://appleinsider.com/articles/24/07/21/amazons-299-ipad-10th-gen-deal-is-back-in-stock",
    urlToImage:
      "https://photos5.appleinsider.com/gallery/60444-124302-ipad-10th-generation-price-drop-xl.jpg",
    publishedAt: "2024-07-21T17:41:51Z",
    content:
      "A fan-favorite during last week's Prime Day, the $299 iPad 10th Generation deal is back in stock while supplies last.\r\nReflecting a $50 discount off Apple's $349 MSRP for the iPad 10th Generation 64G… [+1712 chars]",
  },
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: "Liz Kocan",
    title:
      "What Should You Watch This Week? Here's What's New on Netflix, Peacock and More",
    description:
      "Loads of great new shows and the Olympic Opening Ceremony are all streaming the week of July 22 to July 28.",
    url: "https://www.cnet.com/tech/services-and-software/what-should-you-watch-this-week-heres-whats-new-on-netflix-peacock-and-more/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/ce731f409c6e976f586fecac765b683d39c909f5/hub/2024/07/15/c0fad7c4-caf1-4d96-9dc7-c935a05c5dc1/time-bandits.jpg?auto=webp&fit=crop&height=675&width=1200",
    publishedAt: "2024-07-21T12:00:17Z",
    content:
      "It's a big week for sports fans and comedy nerds when it comes to TV. This week, the biggest streaming services are dropping some great shows and movies that star some of the biggest names in comedy … [+1285 chars]",
  },
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: "Amber Guetebier",
    title:
      "Last Chance: Get a Curiosity Stream Lifetime Subscription for 60% Off at StackSocial",
    description:
      "If you love documentaries, this $160 Curiosity Stream lifetime subscription is a great bargain. Act fast, as it's only live for a few more hours.",
    url: "https://www.cnet.com/deals/last-chance-nab-a-curiosity-stream-lifetime-subscription-for-60-off-at-stacksocial/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/430509ea1f49bb3360e8741227e07b18c3f28583/hub/2024/04/02/ca81f201-c8ee-4698-bb6c-315204aed025/curiosity-stream-logo-promo-image.jpg?auto=webp&fit=crop&height=675&width=1200",
    publishedAt: "2024-07-21T16:17:00Z",
    content:
      "Looking for something new to watch alone or with your family and friends? Documentaries can provide you with education on niche topics, different views and entertainment. Streaming these can provide … [+2453 chars]",
  },
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: "Jessica Fierro",
    title:
      "I Bought Tech Dupes on Temu. The Shoddy Gear Wasn't Worth the $1,260 in Savings",
    description:
      "My journey into the shady side of shopping brought me to the world of dupes — from budget alternatives to bad knockoffs of your favorite tech. I put three dupes to the test to see how they compared to the real thing.",
    url: "https://www.cnet.com/tech/features/i-bought-tech-dupes-on-temu-the-shoddy-gear-wasnt-worth-the-1260-in-savings/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/9a3c41ddf08994a51ed1214d1e3b9bd072a4e9d8/hub/2024/07/13/7d35786d-340c-4678-9fad-b2f685243bf6/240710-promo-duped-v02.jpg?auto=webp&fit=crop&height=675&width=1200",
    publishedAt: "2024-07-21T12:00:05Z",
    content:
      "Testing, reporting and writing by Jessica Fierro. Additional reporting and writing by Corinne Reichert.\r\nI'm trying out a new pair of earbuds, and it's not going well.  \r\nThey're dupes, $11 replicas … [+32817 chars]",
  },
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: "Chris Wedel",
    title: "Transform Your Patio: 5 Smart Patio Ideas for Year-Round Fun",
    description:
      "Whether it's hot summer nights or cool fall evenings, your home's patio can be the oasis for it all.",
    url: "https://www.cnet.com/home/yard-and-outdoors/smarten-your-patio-for-year-round-enjoyment/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/be489ff9a96d38133f01829982266530a5cb31af/hub/2024/05/16/cb575a56-b8f4-44c0-b283-60909528470a/nanoleaf-outdoor-string-lights-lifestyle-2.jpg?auto=webp&fit=crop&height=675&width=1200",
    publishedAt: "2024-07-21T13:00:00Z",
    content:
      "Summer is in full swing and that means many are spending more time outside enjoying the warmer weather. OK, so warm may not be the best descriptor for the blazing and humid heat that is sweeping the … [+6592 chars]",
  },
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: "John Carlsen",
    title:
      "Use Your Fans and Cross Ventilation to Cut Down on AC Use this Summer. Here's How",
    description:
      "Blasting the AC will cool you down but it'll also cost you. This smart technique harnesses energy-efficient fans and a natural breeze to cool your home better without jacking up the window unit.",
    url: "https://www.cnet.com/home/use-your-fans-and-cross-ventilation-to-cut-down-on-ac-this-summer-heres-how/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/ab45fb1a53840b53a5bb48e195b7396a05173961/hub/2024/07/15/db14cc1b-9095-4c74-99b6-4f9a89cda553/office-window-fan-with-curious-cat.jpg?auto=webp&fit=crop&height=675&width=1200",
    publishedAt: "2024-07-21T13:11:00Z",
    content:
      "My home office, originally the master bedroom, is the worst room in my apartment for cooling off in the summer. It feels like the roof does nothing to keep the heat out during heatwaves.\r\nIt gets wor… [+8644 chars]",
  },
  {
    source: {
      id: null,
      name: "Yanko Design",
    },
    author: "Srishti Mitra",
    title: "Top 10 Cutting-Edge Earbuds Alternatives To The AirPods",
    description:
      "Top 10 Cutting-Edge Earbuds Alternatives To The AirPodsI love a good pair of earbuds! In fact, I really can’t function without my personal earbuds. Once my earbuds are in, the rest of...",
    url: "https://www.yankodesign.com/2024/07/21/top-10-cutting-edge-earbuds-alternatives-to-the-airpods/",
    urlToImage:
      "https://www.yankodesign.com/images/design_news/2024/07/alternatives-to-airpods/top_10_airpods_alternatives_yanko_design_01.jpg",
    publishedAt: "2024-07-21T10:07:38Z",
    content:
      "I love a good pair of earbuds! In fact, I really cant function without my personal earbuds. Once my earbuds are in, the rest of the world is out. I deep dive into the world of my favorite tunes, away… [+5052 chars]",
  },
  {
    source: {
      id: null,
      name: "Journal du geek",
    },
    author: "Olivier",
    title: "En 2026, les AirPods pourraient intégrer des caméras infrarouges",
    description:
      "Apple n'a pas l'intention de laisser le marché des écouteurs à la concurrence, et prévoirait de nouvelles fonctionnalités inattendues pour les AirPods. En 2026, les utilisateurs pourraient porter des écouteurs dotés de caméras infrarouges intégrées, selon un …",
    url: "https://www.journaldugeek.com/2024/07/21/en-2026-les-airpods-pourraient-integrer-des-cameras-infrarouges/",
    urlToImage:
      "https://www.journaldugeek.com/app/uploads/2024/07/airpods-apple.jpg",
    publishedAt: "2024-07-21T14:00:26Z",
    content:
      "Selon l’analyste Ming-Chi Kuo, les prochains AirPods pourraient être équipés de caméras infrarouges, similaires à celles utilisées pour la reconnaissance faciale Face ID ! Ces caméras pourraient renf… [+2481 chars]",
  },
  {
    source: {
      id: null,
      name: "A Beautiful Mess",
    },
    author: "Emma Chapman",
    title: "Peach Jam",
    description:
      "Peaches have got to be one of those undervalued fruits and I feel that also sums up this peach jam recipe. It’s super easy to make in under 30 minutes with only four ingredients but it’s SO GOOD! This is an easy peach jam recipe without pectin. If you’ve neve…",
    url: "https://abeautifulmess.com/peach-jam/",
    urlToImage:
      "https://abeautifulmess.com/wp-content/uploads/2024/05/peach-jam.jpg",
    publishedAt: "2024-07-21T13:09:00Z",
    content:
      "Peaches have got to be one of those undervalued fruits and I feel that also sums up this peach jam recipe. It’s super easy to make in under 30 minutes with only four ingredients but it’s SO GOOD! Thi… [+4836 chars]",
  },
  {
    source: {
      id: null,
      name: "Applesfera.com",
    },
    author: "Guille Lomener",
    title:
      '"Nunca pensé que me iban a pagar por ver la televisión". Eddy Cue habla sobre cómo funciona Apple internamente en su última entrevista',
    description:
      "Eddy Cue es uno de los trabajadores más veteranos de Apple. Entró en la compañía en 1989 y siempre ha trabajado codo con codo con Steve Jobs y posteriormente junto a Tim Cook. Desde sus inicios, estuvo muy relacionado con los servicios, liderando los equipos …",
    url: "https://www.applesfera.com/apple-1/nunca-pense-que-me-iban-a-pagar-ver-television-eddy-cue-habla-como-funciona-apple-internamente-su-ultima-entrevista",
    urlToImage: "https://i.blogs.es/546d85/eddy-cue/840_560.png",
    publishedAt: "2024-07-21T08:01:13Z",
    content:
      "Eddy Cue es uno de los trabajadores más veteranos de Apple. Entró en la compañía en 1989 y siempre ha trabajado codo con codo con Steve Jobs y posteriormente junto a Tim Cook. Desde sus inicios, estu… [+3795 chars]",
  },
  {
    source: {
      id: null,
      name: "Applesfera.com",
    },
    author: "Álvaro García M.",
    title:
      "Dos joyas ocultas en Apple TV+: nadie daba un duro por ellas, las vi, me enganché y son ya mis series favoritas del año",
    description:
      "Aunque cada vez son más los estrenos de Apple TV+, es más que evidente que no tenemos un catálogo tan extenso como el de otras plataformas como Netflix. Sin embargo, hay series de Apple TV+ que son auténticas joyas ocultas. Y lo digo de verdad, porque no me r…",
    url: "https://www.applesfera.com/servicios-apple/dos-joyas-ocultas-apple-tv-nadie-daba-duro-ellas-vi-me-enganche-mis-series-favoritas-ano",
    urlToImage: "https://i.blogs.es/f349a0/joyas-apple-tv-plus-1/840_560.jpeg",
    publishedAt: "2024-07-21T15:01:38Z",
    content:
      "Aunque cada vez son más los estrenos de Apple TV+, es más que evidente que no tenemos un catálogo tan extenso como el de otras plataformas como Netflix. Sin embargo, hay series de Apple TV+ que son a… [+5462 chars]",
  },
  {
    source: {
      id: null,
      name: "Applesfera.com",
    },
    author: "Isra Fdez",
    title:
      '"Quiero 4.000 cafés": la primera llamada desde un iPhone fue una trolleada de Steve Jobs de la que tuvo que disculparse',
    description:
      "La historia tanto de ese proyecto ultrasecreto llamado iPhone como de su presentación al mundo está llena de anécdotas. Anécdotas como la de la primera llamada de teléfono hecha jamás por un iPhone. Steve Jobs sabía que estaba ante algo único, uno de esos mom…",
    url: "https://www.applesfera.com/curiosidades/quiero-4-000-cafes-primera-llamada-iphone-fue-trolleada-steve-jobs-que-tuvo-que-disculparse-1",
    urlToImage: "https://i.blogs.es/851df6/steve-jobs-con-cafe/840_560.jpeg",
    publishedAt: "2024-07-21T10:01:14Z",
    content:
      "La historia tanto de ese proyecto ultrasecreto llamado iPhone como de su presentación al mundo está llena de anécdotas. Anécdotas como la de la primera llamada de teléfono hecha jamás por un iPhone. … [+2538 chars]",
  },
  {
    source: {
      id: null,
      name: "Applesfera.com",
    },
    author: "Isra Fdez",
    title:
      "Los tres aparatos que están en muchas casas sin usar y sirven como repetidor para mejorar la WiFi en tu iPhone",
    description:
      "Prácticamente, todos tenemos esa habitación en casa a la que no llega bien el Wi-Fi. Existen incluso aplicaciones para medir su rango, alcance y efectividad. La distribución de muchos hogares hace que el router se instale en una punta del mismo, condenando in…",
    url: "https://www.applesfera.com/tutoriales/tres-aparatos-que-estan-muchas-casas-usar-sirven-como-repetidor-para-mejorar-wifi-tu-iphone",
    urlToImage: "https://i.blogs.es/85abdf/router-apple/840_560.jpeg",
    publishedAt: "2024-07-21T14:01:40Z",
    content:
      "Prácticamente, todos tenemos esa habitación en casa a la que no llega bien el Wi-Fi. Existen incluso aplicaciones para medir su rango, alcance y efectividad. La distribución de muchos hogares hace qu… [+4107 chars]",
  },
  {
    source: {
      id: null,
      name: "HYPEBEAST",
    },
    author: "info@hypebeast.com (Hypebeast)",
    title:
      "Blxst Delivers Long-Awaited Debut Album 'I'll Always Come Find You'",
    description:
      "Los Angeles-based artist Blxst has quickly rose to prominence in recent years thanks to his penchant for slick melodies and poignant bars. Now, he has finally released his long-awaited debut album I'll Always Come Find You.The four-disc project clocks in at j…",
    url: "https://hypebeast.com/2024/7/blxst-ill-always-come-find-you-album-info",
    urlToImage:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F07%2F21%2Fblxst-ill-always-come-find-you-album-info-tw.jpg?w=1080&cbr=1&q=90&fit=max",
    publishedAt: "2024-07-21T21:05:18Z",
    content:
      "Los Angeles-based artist Blxst has quickly rose to prominence in recent years thanks to his penchant for slick melodies and poignant bars. Now, he has finally released his long-awaited debut album I’… [+957 chars]",
  },
  {
    source: {
      id: null,
      name: "HYPEBEAST",
    },
    author: "info@hypebeast.com (Hypebeast)",
    title: "Dyson Announces OnTrac, Its Debut Audio-Only Headphones",
    description:
      "Dyson has announced its first-ever set of audio-only headphones, OnTrac, a follow up to its hybrid headphones-meets-air-purifier product from 2023, the Dyson Zone, that drew comparisons to Bane and featured in our best headphones round-up earlier this year. W…",
    url: "https://hypebeast.com/2024/7/dyson-ontrac-headphones-uk-and-us-release-details",
    urlToImage:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F07%2F21%2Fdyson-ontrac-headphones-uk-and-us-release-details-tw.jpg?w=1080&cbr=1&q=90&fit=max",
    publishedAt: "2024-07-21T20:49:33Z",
    content:
      "Dyson has announced its first-ever set of audio-only headphones, OnTrac, a follow up to its hybrid headphones-meets-air-purifier product from 2023, the Dyson Zone, that drew comparisons to Bane and f… [+3241 chars]",
  },
  {
    source: {
      id: null,
      name: "Android Authority",
    },
    author: "Rita El Khoury",
    title:
      "Welcome to the Samsung and Apple confusion era; Google was here first",
    description:
      "Samsung and Apple are finally discovering what it takes to roll out fancy smart features to millions of users, and the reality is it ain't easy.",
    url: "https://www.androidauthority.com/welcome-samsung-apple-confusion-era-3460681/",
    urlToImage:
      "https://www.androidauthority.com/wp-content/uploads/2024/01/Samsung-Galaxy-S24-Ultra-vs-Google-Pixel-8-Pro-vs-Apple-iPhone-15-Pro-Max-1.jpg",
    publishedAt: "2024-07-21T14:00:17Z",
    content:
      "It was bound to happen. At some point, no matter how vertically integrated Apple is from hardware to software and no matter how committed Samsung is to equally delivering features to most of its flag… [+6953 chars]",
  },
  {
    source: {
      id: null,
      name: "Android Authority",
    },
    author: "Ryan Haines",
    title: "Sorry, Samsung, I still don’t want to use Good Lock",
    description:
      "Good Lock has its time and place, but I don't think it belongs on the Flex Window of the Samsung Galaxy Z Flip 6.",
    url: "https://www.androidauthority.com/samsung-galaxy-z-flip-6-good-lock-3461869/",
    urlToImage:
      "https://www.androidauthority.com/wp-content/uploads/2024/07/Samsung-Galaxy-Z-Flip-6-Good-Lock-apps.jpg",
    publishedAt: "2024-07-21T17:00:51Z",
    content:
      "In 2023, Samsung completely changed its Galaxy Z Flip series when it expanded the cover screen and turned it into the Flex Window. It made notifications easier to interact with, widgets more useful, … [+5911 chars]",
  },
  {
    source: {
      id: null,
      name: "Vox",
    },
    author: "Nicole Narea",
    title:
      "Biden is out of the 2024 race. What happens to his campaign donations?",
    description:
      "President Joe Biden announced Sunday that he is dropping out of the 2024 presidential race and endorsed Vice President Kamala Harris as his choice for the Democratic nominee. A practical question follows: What happens to his campaign funds? The Biden campaign…",
    url: "https://www.vox.com/joe-biden/361991/361991biden-campaign-funds-after-drops-out",
    urlToImage:
      "https://platform.vox.com/wp-content/uploads/sites/2/2024/07/gettyimages-2158794750.jpg?quality=90&strip=all&crop=0%2C11.327757632658%2C100%2C77.344484734683&w=1200",
    publishedAt: "2024-07-21T21:30:04Z",
    content:
      "President Joe Biden announced Sunday that he is dropping out of the 2024 presidential race and endorsed Vice President Kamala Harris as his choice for the Democratic nominee. A practical question fol… [+5562 chars]",
  },
  {
    source: {
      id: null,
      name: "Vox",
    },
    author: "Zack Beauchamp",
    title: "This is bigger than Joe Biden",
    description:
      "By dropping out of the 2024 race, President Joe Biden did what we all want our politicians to do: He put his country over his career. Knowing that his party had lost faith in his capacity to beat Donald Trump and that a second Trump term would threaten democr…",
    url: "https://www.vox.com/politics/361999/joe-biden-drops-out-kamala-harris-2024-trump-democracy-hope",
    urlToImage:
      "https://platform.vox.com/wp-content/uploads/sites/2/2024/07/gettyimages-1473595193.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
    publishedAt: "2024-07-21T23:53:16Z",
    content:
      "By dropping out of the 2024 race, President Joe Biden did what we all want our politicians to do: He put his country over his career. Knowing that his party had lost faith in his capacity to beat Don… [+5799 chars]",
  },
  {
    source: {
      id: null,
      name: "Vox",
    },
    author: "Andrew Prokop",
    title:
      "Biden is quitting the 2024 race. What in the world will happen next?",
    description:
      "After weeks of pressure, conjecture, and handwringing at the highest levels of the Democratic Party, President Joe Biden has decided to step aside from the 2024 presidential race.  Which means Democrats will now take a leap into the unknown. The president iss…",
    url: "https://www.vox.com/politics/361827/biden-drops-out-2024-kamala-convention",
    urlToImage:
      "https://platform.vox.com/wp-content/uploads/sites/2/2024/07/GettyImages-2161687527.jpg?quality=90&strip=all&crop=0%2C10.681154543555%2C100%2C78.637690912889&w=1200",
    publishedAt: "2024-07-21T18:02:49Z",
    content:
      "After weeks of pressure, conjecture, and handwringing at the highest levels of the Democratic Party, President Joe Biden has decided to step aside from the 2024 presidential race. \r\nWhich means Democ… [+7423 chars]",
  },
  {
    source: {
      id: null,
      name: "Vox",
    },
    author: "Oshan Jarow",
    title: "How should we sell psychedelics?",
    description:
      "After Colorado became the first state to legalize the sale of recreational cannabis to any adult in 2014, it took just 10 years for about half of the country to follow suit. More than 100 million adults in the US went from having no legal access to the drug t…",
    url: "https://www.vox.com/future-perfect/360200/how-to-buy-psychedelics-lsd-shrooms-stores",
    urlToImage:
      "https://platform.vox.com/wp-content/uploads/sites/2/2024/07/GettyImages-1602502268.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
    publishedAt: "2024-07-21T12:16:59Z",
    content:
      "After Colorado became the first state to legalize the sale of recreational cannabis to any adult in 2014, it took just 10 years for about half of the country to follow suit. More than 100 million adu… [+14630 chars]",
  },
  {
    source: {
      id: null,
      name: "Vox",
    },
    author: "Christian Paz",
    title: "Does Kamala Harris give Democrats a better chance to win?",
    description:
      "Presidential candidates, and their campaigns, are the sum of all in which they exist and what came before them.  Just after he announced he was withdrawing from the 2024 presidential race, President Joe Biden endorsed his vice president, Kamala Harris, as the…",
    url: "https://www.vox.com/2024-elections/361750/biden-drop-out-harris-endorse-polls-against-trump-democrats-dnc",
    urlToImage:
      "https://platform.vox.com/wp-content/uploads/sites/2/2024/07/gettyimages-2159971779.jpg?quality=90&strip=all&crop=0%2C10.723165084465%2C100%2C78.55366983107&w=1200",
    publishedAt: "2024-07-21T18:34:01Z",
    content:
      "Presidential candidates, and their campaigns, are the sum of all in which they exist and what came before them. \r\nJust after he announced he was withdrawing from the 2024 presidential race, President… [+13819 chars]",
  },
  {
    source: {
      id: null,
      name: "Les Numériques",
    },
    author: "Rick",
    title:
      "Actualité : Voici le meilleur jeux vidéo à prix abordable de notre comparatif",
    description:
      "Le jeux vidéo Amazing Alex s'affiche aujourd'hui à 0,79 € chez Apple Store. C'est actuellement le meilleur jeux vidéo à prix abordable de notre comparatif, selon les 10 modèles testés dans notre laboratoire.",
    url: "https://www.lesnumeriques.com/jeux-video/voici-le-meilleur-jeux-video-a-prix-abordable-de-notre-comparatif-n224549.html",
    urlToImage:
      "https://cdn.lesnumeriques.com/optim/produits/0/14392/amazing-alex_1346933358__1200_678__overflow.jpg",
    publishedAt: "2024-07-21T13:18:22Z",
    content:
      "Points fortsRéalisation propre.\nNiveaux téléchargeables gratuits.\nSimple à prendre en main.\nPoints faiblesManque de fun et d'originalité.\nObjets très classiques.Amazing Alex gagne de justesse sa quat… [+150 chars]",
  },
  {
    source: {
      id: null,
      name: "Les Numériques",
    },
    author: "Julien Vercoutère",
    title:
      "Actualité : Android 15 : cette fonction de Google pourrait sauver le batterie de votre Pixel",
    description:
      "Google prépare une nouvelle fonctionnalité pour ses smartphones Pixel avec Android 15 : une option permettant de limiter manuellement la charge des batteries des téléphones Pixel à 80 %. Cette option vise à prolonger la durée de vie des batteries en complémen…",
    url: "https://www.lesnumeriques.com/telephone-portable/android-15-cette-fonction-de-google-pourrait-sauver-le-batterie-de-votre-pixel-n224525.html",
    urlToImage:
      "https://cdn.lesnumeriques.com/optim/news/22/224525/c73cb9bd-android-15-cette-fonction-de-google-pourrait-sauver-le-batterie-de-votre-pixel__1200_678__0-187-2499-1498.jpg",
    publishedAt: "2024-07-21T08:31:00Z",
    content:
      "Les batteries des smartphones se dégradent inévitablement avec le temps, impactant la performance et l'autonomie des appareils. Pour prolonger leur durée de vie, une gestion efficace de la charge est… [+2856 chars]",
  },
  {
    source: {
      id: null,
      name: "Les Numériques",
    },
    author: "Alexandre Scotti",
    title:
      "Actualité : One UI 7 : la prochaine grosse mise à jour des Samsung Galaxy commence à être détaillée",
    description:
      "De premières informations ont finalement fait surface autour de la prochaine mise à jour majeure des Samsung Galaxy : One UI 7.",
    url: "https://www.lesnumeriques.com/telephone-portable/one-ui-7-la-prochaine-grosse-mise-a-jour-des-samsung-galaxy-commence-a-etre-detaillee-n224519.html",
    urlToImage:
      "https://cdn.lesnumeriques.com/optim/news/22/224519/d0ab990d-one-ui-7-la-prochaine-grosse-mise-a-jour-des-samsung-galaxy-commence-a-se-detailler__1200_678__overflow.jpg",
    publishedAt: "2024-07-21T05:53:00Z",
    content:
      "One UI 6 Galaxy S24 Ultra.\r\n© Les Numériques\r\nAlors que One UI 6.1.1, installé nativement sur les Galaxy Z Fold 6 et Galaxy Z Flip 6, s'apprête intégrer de nouveaux smartphones Samsung, la mise à jou… [+2779 chars]",
  },
  {
    source: {
      id: null,
      name: "Xatakamovil.com",
    },
    author: "Eva Rodriguez de Luis",
    title:
      "He hecho inalámbrico el Android Auto y Apple CarPlay de mi coche con un adaptador de 10 euros de AliExpress: lo barato a veces sorprende",
    description:
      "En casa tenemos coches bastante modernos con pantallas compatibles con Android Auto y Apple CarPlay, pero desgraciadamente tenemos que recurrir al cable para conectar el móvil. Es cierto que para viajes largos prefiero ese tipo de conexión, pero para traslado…",
    url: "https://www.xatakamovil.com/analisis/he-hecho-inalambrico-android-auto-apple-carplay-mi-coche-adaptador-10-euros-aliexpress-barato-a-veces-sorprende",
    urlToImage: "https://i.blogs.es/a36d7d/img_8017/840_560.jpeg",
    publishedAt: "2024-07-21T11:01:14Z",
    content:
      "En casa tenemos coches bastante modernos con pantallas compatibles con Android Auto y Apple CarPlay, pero desgraciadamente tenemos que recurrir al cable para conectar el móvil. Es cierto que para via… [+5034 chars]",
  },
  {
    source: {
      id: null,
      name: "Xatakamovil.com",
    },
    author: "Eva Rodriguez de Luis",
    title:
      "He instalado RlaxxTV en mi Smart TV: esto es lo que ofrece esta plataforma gratis alternativa a Pluto TV y Tivify",
    description:
      "Aunque las míticas Netflix, HBO o Prime Video son las que se llevan los titulares por sus megaproducciones, hay vida más allá de estas plataformas y además las hay gratis. Sí, hablamos de los Servicios FAST, una forma de ver tele gratis diferente a la TDT gra…",
    url: "https://www.xatakamovil.com/streaming/he-instalado-rlaxxtv-mi-smart-tv-esto-que-ofrece-esta-plataforma-gratis-alternativa-a-pluto-tv-tivify",
    urlToImage: "https://i.blogs.es/72d3c9/rlaxx-android-tv/840_560.jpeg",
    publishedAt: "2024-07-21T16:04:26Z",
    content:
      "Aunque las míticas Netflix, HBO o Prime Video son las que se llevan los titulares por sus megaproducciones, hay vida más allá de estas plataformas y además las hay gratis. Sí, hablamos de los Servici… [+3482 chars]",
  },
  {
    source: {
      id: null,
      name: "Playpcesor.com",
    },
    author: "Esor Huang",
    title: "生產力配速：低強度執行、高強度完成，幫我持之以恆的具體技巧",
    description:
      "無論做了什麼計畫，往往都趕不上變化，外在環境的人事物有很多我們無法單純掌控的部分， 如果要說我們真正可以掌控的是什麼，那就是我們能「選擇」持之以恆 ，無論遇到任何意外，一個好的目標能堅持下去，那麼最終會有好的結果發生。",
    url: "https://www.playpcesor.com/2024/07/blog-post_21.html",
    urlToImage:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBGK3GXkjeeoZecnRdpHN_565YY7U4lCLKhYZ5IkeVyn805e6h4aw5n_QnOBVj_23U5SPrgndcgBV4RuXiI0Ev9O9XyAzS2fnTXcZH-920MaL4OFiwXG_-1kH-ftIYPonVmOeh1gPCWNVasZ_KuYElWBFBEVUd48BcMycYR6EkZVga0-UjzfLZ/w1200-h630-p-k-no-nu/%E7%94%9F%E7%94%A2%E5%8A%9B%E9%85%8D%E9%80%9F%EF%BC%9A%E4%BD%8E%E5%BC%B7%E5%BA%A6%E5%9F%B7%E8%A1%8C%E3%80%81%E9%AB%98%E5%BC%B7%E5%BA%A6%E5%AE%8C%E6%88%90%EF%BC%8C%E5%B9%AB%E6%88%91%E6%8C%81%E4%B9%8B%E4%BB%A5%E6%81%86%E7%9A%84%E5%85%B7%E9%AB%94%E6%8A%80%E5%B7%A7.png",
    publishedAt: "2024-07-21T08:40:00Z",
    content:
      "無論做了什麼計畫，往往都趕不上變化，外在環境的人事物有很多我們無法單純掌控的部分，如果要說我們真正可以掌控的是什麼，那就是我們能「選擇」持之以恆，無論遇到任何意外，一個好的目標能堅持下去，那麼最終會有好的結果發生。\r\n我自己有許多這樣的「持之以恆」經驗，像是「電腦玩物」持續撰寫了 17 年的時間，因為長期的分享，累積了許多的讀者與成績，也建立起自己獨特的防彈筆記法系統。《高效人生工作法圖解》這本… [+6527 chars]",
  },
  {
    source: {
      id: null,
      name: "Caschys Blog",
    },
    author: "caschy",
    title: "iPad Pro: Nanotexturglas angeschaut",
    description:
      "Ich habe in den letzten Wochen die Möglichkeit gehabt, mit dem neuen iPad Pro zu arbeiten. Ein absolut leistungsstarkes Tablet, das mich immer noch durch iPadOS hindert, „Vollzeit“ damit zu arbeiten. Im Kern des neuen iPad Pro arbeitet der neue...Zum Beitrag:…",
    url: "https://stadt-bremerhaven.de/ipad-pro-nanotexturglas-angeschaut/",
    urlToImage:
      "https://stadt-bremerhaven.de/wp-content/uploads/2024/07/iPad-Pro-Nano-7.jpg",
    publishedAt: "2024-07-21T18:00:48Z",
    content:
      "Ich habe in den letzten Wochen die Möglichkeit gehabt, mit dem neuen iPad Pro zu arbeiten. Ein absolut leistungsstarkes Tablet, das mich immer noch durch iPadOS hindert, Vollzeit damit zu arbeiten. I… [+3495 chars]",
  },
  {
    source: {
      id: null,
      name: "Caschys Blog",
    },
    author: "caschy",
    title: "Für 4,99 Euro: SmartTag Finder ist eine AirTag-Alternative",
    description:
      "Kleiner Tipp für alle, die es ab und an in den Lidl verschlägt und die Lidl Plus nutzen: Ab Donnerstag, den 25.7., verkauft man dort den SmartTag Finder von Silvercrest. Das ist das Modell SSTF A1. Kostet sonst um 10...Zum Beitrag: Für 4,99 Euro: SmartTag Fin…",
    url: "https://stadt-bremerhaven.de/fuer-499-euro-smarttag-finder-ist-eine-airtag-alternative/",
    urlToImage:
      "https://stadt-bremerhaven.de/wp-content/uploads/2024/07/smarttag-finder.jpg",
    publishedAt: "2024-07-21T07:35:43Z",
    content:
      "Kleiner Tipp für alle, die es ab und an in den Lidl verschlägt und die Lidl Plus nutzen: Ab Donnerstag, den 25.7., verkauft man dort den SmartTag Finder von Silvercrest. Das ist das Modell SSTF A1. K… [+803 chars]",
  },
  {
    source: {
      id: null,
      name: "IndieWire",
    },
    author: "Bill Desowitz",
    title: "2025 Oscars: Best Costume Design Predictions",
    description:
      '"Dune: Part Two" is the early favorite, but the fall offers strong competition from "Wicked," "Gladiator II," and "Blitz."',
    url: "https://www.indiewire.com/awards/predictions/2025-oscars-best-costume-design-predictions-academy-awards-1235027153/",
    urlToImage:
      "https://www.indiewire.com/wp-content/uploads/2024/07/rev-1-DUN2-FP-0120r_High_Res_JPEG.jpeg?w=650",
    publishedAt: "2024-07-21T17:00:00Z",
    content:
      "Nominations voting is from January 8-12, 2025, with official Oscar nominations announced January 17, 2025. Final voting is February 11-18, 2025. And finally, the 97th Oscars telecast will be broadcas… [+10594 chars]",
  },
  {
    source: {
      id: null,
      name: "Frandroid",
    },
    author: "Mélanie Capelli",
    title:
      "En solde, la Huawei Watch GT 4 devient une montre connectée pas chère, avec un cadeau en prime",
    description:
      "Une montre très jolie, à l'autonomie musclée et au suivi sportif plutôt efficace, voilà ce que propose la Huawei Watch GT 4. C’est une bonne montre à mettre à votre poignet, surtout maintenant qu’elle coûte moins de 200 € dans un pack pendant les soldes.",
    url: "https://www.frandroid.com/bons-plans/2084656_en-solde-la-huawei-watch-gt-4-devient-une-montre-connectee-pas-chere-avec-un-cadeau-en-prime",
    urlToImage:
      "https://images.frandroid.com/wp-content/uploads/2024/07/xiaomi-watch-gt-4-freebuds-se-soldes-dete-2024.jpg",
    publishedAt: "2024-07-21T07:41:48Z",
    content:
      "Une montre très jolie, à l'autonomie musclée et au suivi sportif plutôt efficace, voilà ce que propose la Huawei Watch GT 4. Cest une bonne montre à mettre à votre poignet, surtout maintenant quelle … [+5876 chars]",
  },
  {
    source: {
      id: null,
      name: "Frandroid",
    },
    author: "Pierre Crochart",
    title:
      "MacBook Air M3 vs MacBook Pro M3 : comment choisir le meilleur ordinateur ?",
    description:
      "Après tout, c'est écrit dessus : le MacBook \"Pro\" est censé être meilleur que les autres, pas vrai ? Nous allons le voir dans ce nouveau comparatif, ce n'est pas si simple. Et ce qui est meilleur pour les uns ne l'est pas forcément pour les autres.",
    url: "https://www.frandroid.com/versus/2021224_macbook-air-m3-vs-macbook-pro-m3-comment-choisir-le-meilleur-ordinateur",
    urlToImage:
      "https://images.frandroid.com/wp-content/uploads/2024/04/apple-macbook-air-m3-design-2.jpeg",
    publishedAt: "2024-07-21T14:02:53Z",
    content:
      "Après tout, c'est écrit dessus : le MacBook \"Pro\" est censé être meilleur que les autres, pas vrai ? Nous allons le voir dans ce nouveau comparatif, ce n'est pas si simple. Et ce qui est meilleur pou… [+8387 chars]",
  },
  {
    source: {
      id: null,
      name: "Frandroid",
    },
    author: "Mélanie Capelli",
    title:
      "Cette tablette familiale de Lenovo est l’affaire en or des soldes ce dimanche",
    description:
      "La tablette d'entrée de gamme Lenovo Tab M11 dispose d'un très bon rapport qualité-prix. Son prix devient encore plus abordable à l’occasion des soldes d’été en passant de 219 euros à 173 euros sur Amazon.",
    url: "https://www.frandroid.com/bons-plans/2085920_cette-tablette-familiale-de-lenovo-est-laffaire-en-or-des-soldes-ce-dimanche",
    urlToImage:
      "https://images.frandroid.com/wp-content/uploads/2024/07/lenovo-tab-m11-soldes-dete-2024.jpg",
    publishedAt: "2024-07-21T15:37:38Z",
    content:
      "La tablette d'entrée de gamme Lenovo Tab M11 dispose d'un très bon rapport qualité-prix. Son prix devient encore plus abordable à loccasion des soldes dété en passant de 219 euros à 173 euros sur Ama… [+4622 chars]",
  },
  {
    source: {
      id: null,
      name: "Lifehacker.ru",
    },
    author: "Вадим Саитов",
    title: "Кому и зачем нужен разъём Thunderbolt в ноутбуке",
    description:
      "Тот самый USB Type-C с необычным значком молнии. Но от привычного интерфейса USB порт отличается довольно сильно.",
    url: "https://lifehacker.ru/thunderbolt-v-noutbuke/",
    urlToImage:
      "https://cdn.lifehacker.ru/wp-content/uploads/2024/07/thunderbolt_1721395756.jpg",
    publishedAt: "2024-07-21T13:00:00Z",
    content:
      "Thunderbolt , Apple Intel. Thunderbolt MacBook, 10 /. USB 3.0 5 /.\r\n Thunderbolt 1- 2- . : Apple\r\nThunderbolt Firewire Apple MacBook iPad. Thunderbolt , .\r\n Thunderbolt 3- 4- . : Kensington\r\nUSB Thun… [+1183 chars]",
  },
  {
    source: {
      id: null,
      name: "Lifehacker.ru",
    },
    author: "Евгения Севастьянова",
    title: "Находки AliExpress: самые интересные и полезные товары",
    description:
      "Нагрудная сумка, портативный вентилятор, светящиеся джибитсы для кроксов, походные аксессуары и не только.",
    url: "https://lifehacker.ru/aliexpress-427/",
    urlToImage:
      "https://cdn.lifehacker.ru/wp-content/uploads/2024/07/Nahodki_AliExpress_samye_interesnye_i_poleznye_tovary_1721513020.jpg",
    publishedAt: "2024-07-21T15:00:00Z",
    content:
      ", . , . . \r\n , . , , . , .\r\n: 5 089 .\r\n. , : 5 , , . \r\n . : , . . 190 × 60 .\r\n: 2 099 .\r\n. , . . , , . , . \r\n . , . , .\r\n: 929 .\r\n. , . , . , .\r\n: 1 949 .\r\n, . , , . Apple Bluetooth «». CR2032.\r\n: 1 … [+271 chars]",
  },
  {
    source: {
      id: null,
      name: "GSMArena.com",
    },
    author: "Chip",
    title: "Top 10 trending phones of week 29",
    description:
      "Sure enough, the series of announcements this week brought a lot of changes to our trending chart, including a brand new leader. The OnePlus Nord 4 stands at the top step, followed by the Samsung Galaxy A55 and Galaxy S24.\n\n[#InlinePriceWidget, 13200, 1#]\n\nRe…",
    url: "https://www.gsmarena.com/top_10_trending_phones_of_week_29-news-63792.php",
    urlToImage:
      "https://fdn.gsmarena.com/imgroot/news/19/04/top10-trending-phones/-952x498w6/gsmarena_002.jpg",
    publishedAt: "2024-07-21T19:20:01Z",
    content:
      "Sure enough, the series of announcements this week brought a lot of changes to our trending chart, including a brand new leader. The OnePlus Nord 4 stands at the top step, followed by the Samsung Gal… [+703 chars]",
  },
  {
    source: {
      id: null,
      name: "GSMArena.com",
    },
    author: "Peter",
    title: "Weekly poll: is the HMD Skyline your next phone?",
    description:
      "The HMD Skyline has attracted a lot of attention. What is it – is it nostalgia for the Nokia N9? Or is it the repairability angle that draws people in? The phone is now available in some countries (on pre-order in others), so we have to ask – will you buy one…",
    url: "https://www.gsmarena.com/weekly_poll_is_the_hmd_skyline_your_next_phone-news-63785.php",
    urlToImage:
      "https://fdn.gsmarena.com/imgroot/news/24/07/weekly-poll-hmd-skyline/-952x498w6/gsmarena_000.jpg",
    publishedAt: "2024-07-21T07:33:01Z",
    content:
      "The HMD Skyline has attracted a lot of attention. What is it is it nostalgia for the Nokia N9? Or is it the repairability angle that draws people in? The phone is now available in some countries (on … [+3002 chars]",
  },
  {
    source: {
      id: null,
      name: "Uol.com.br",
    },
    author: "Vinicius Marques",
    title: "Como ocultar os aplicativos de banco no celular",
    description:
      "Passo a passo: confira as instruções para esconder apps de instituições financeiras da tela inicial dos smartphones iOS e Android\nThe post Como ocultar os aplicativos de banco no celular appeared first on Giz Brasil.",
    url: "https://gizmodo.uol.com.br/como-ocultar-os-aplicativos-de-banco-no-celular/",
    urlToImage:
      "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2024/06/sophie-dupau-tCQ-0qemWyQ-unsplash.jpg",
    publishedAt: "2024-07-21T22:59:33Z",
    content:
      "Além da senha ou da autenticação biométrica — impressão digital ou reconhecimento facial –, para aumentar a segurança de aplicativos de instituições financeiras, uma boa providência é ocultá-los da t… [+2142 chars]",
  },
  {
    source: {
      id: null,
      name: "Uol.com.br",
    },
    author: "Pablo Nogueira",
    title: "Clima: 5 aplicativos que antecipam as condições de temperatura",
    description:
      "Quase todos os apps de clima possuem recursos básicos bem similares, mas existem alguns com mais detalhes sobre condições externas; confira a lista preparada pelo Giz Brasil\nThe post Clima: 5 aplicativos que antecipam as condições de temperatura appeared firs…",
    url: "https://gizmodo.uol.com.br/clima-5-aplicativos-que-antecipam-as-condicoes-de-temperatura/",
    urlToImage:
      "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2024/07/aplicativos-de-clima.jpg",
    publishedAt: "2024-07-21T18:32:17Z",
    content:
      "Os aplicativos de clima e previsão do tempo continuam populares desde quando surgiram, com o app Clima do primeiro iPhone, em 2007. Hoje, com as mudanças climáticas e o consequente calor recorde , os… [+8181 chars]",
  },
  {
    source: {
      id: null,
      name: "Boredpanda.com",
    },
    author: "Jonas Zvilius",
    title: "80 Names That Made People Wonder What The Parents Were Thinking",
    description:
      "Felony, Smurfette, Vegan - no, these aren't random words; they're actual names that people have.\nThe post 80 Names That Made People Wonder What The Parents Were Thinking first appeared on Bored Panda.",
    url: "https://www.boredpanda.com/wildest-people-names/",
    urlToImage:
      "https://www.boredpanda.com/blog/wp-content/uploads/2024/07/wildest-people-names-fb.png",
    publishedAt: "2024-07-21T01:00:12Z",
    content:
      "In today’s world, we’ve grown used to hearing some pretty unusual names, especially with celebrities leading the way by naming their children things like Apple, Blue Ivy, and North.\r\nHowever, these c… [+340 chars]",
  },
  {
    source: {
      id: "el-mundo",
      name: "El Mundo",
    },
    author: "Javier Attard",
    title:
      "Atapuerca: canibalismo, el primer asesinato de la historia y la clave de quiénes somos",
    description:
      "¿Por qué es tan importante el sitio arqueológico de Atapuerca? ¿Qué se ha descubierto allí? ¿Cuál es su origen? ¿Quién es Miguelón? ¿Por qué pararon hasta cinco...",
    url: "https://www.elmundo.es/podcasts/el-mundo-al-dia/2024/07/22/669a6dfbe85ecea7578b4598.html",
    urlToImage:
      "https://phantom-elmundo.unidadeditorial.es/af613840fe07af13d936ed25a3d75301/resize/1200/f/webp/assets/multimedia/imagenes/2024/07/22/17216009226696.jpg",
    publishedAt: "2024-07-21T23:37:30Z",
    content:
      "¿Por qué es tan importante el sitio arqueológico de Atapuerca? ¿Qué se ha descubierto allí? ¿Cuál es su origen? ¿Quién es Miguelón? ¿Por qué pararon hasta cinco especies distintas de homínidos? ¿Qué … [+427 chars]",
  },
  {
    source: {
      id: null,
      name: "La Vanguardia",
    },
    author: "Beatriz Alcántara",
    title:
      "Este gama alta Xiaomi es nuestro gran recomendado por su diseño, su calidad y sus hasta 260 euros de descuento",
    description:
      "La última familia de gama alta lanzada por Xiaomi está formada por 2 terminales: el Xiaomi 14 y el Xiaomi 14 Ultra. Nosotros queremos recomendarte el primero de ellos si buscas un nuevo smartphone que pertenezca al segmento superior. Lo hacemos tanto por el e…",
    url: "https://www.lavanguardia.com/andro4all/ofertas/este-gama-alta-xiaomi-es-nuestro-gran-recomendado-por-su-diseno-su-calidad-y-sus-hasta-260-euros-de-descuento",
    urlToImage:
      "https://www.lavanguardia.com/andro4all/hero/2024/07/pantalla-inicio-xiaomi-14.1721376713.8557.jpg?width=1200",
    publishedAt: "2024-07-21T20:04:12Z",
    content:
      "Hasta 260 euros puedes ahorrarte en la compra de este excelente móvil de gama alta de Xiaomi | Fotografía de Juan Antonio Morales Gil\r\nLa última familia de gama alta lanzada por Xiaomi está formada p… [+4349 chars]",
  },
  {
    source: {
      id: null,
      name: "La Vanguardia",
    },
    author: "David Freire",
    title:
      "8 aplicaciones para Android muy buenas, pero muy poco conocidas, que se merecen una oportunidad",
    description:
      "A pesar de que Google Play Store cuenta con un catálogo realmente amplio de aplicaciones de todo tipo, tanto gratuitas como de pago, normalmente siempre descargamos e instalamos las mismas, que suelen ser, o bien aquellas que gozan de una mayor popularidad en…",
    url: "https://www.lavanguardia.com/andro4all/aplicaciones-gratis/8-aplicaciones-para-android-muy-buenas-pero-muy-poco-conocidas-que-se-merecen-una-oportunidad",
    urlToImage:
      "https://www.lavanguardia.com/andro4all/hero/2024/07/apps-android-19-07-portada.jpg?width=1200",
    publishedAt: "2024-07-21T15:15:00Z",
    content:
      "Aplicaciones en un móvil Android\r\nA pesar de que Google Play Store cuenta con un catálogo realmente amplio de aplicaciones de todo tipo, tanto gratuitas como de pago, normalmente siempre descargamos … [+5886 chars]",
  },
  {
    source: {
      id: null,
      name: "Impress.co.jp",
    },
    author: null,
    title:
      "【Mac Info】iPhoneやMacの紛失・盗難に備えて「探す」アプリの使い方をマスターしよう！",
    description:
      "MacやiPhone、iPadといったAppleデバイスを紛失したり、盗まれたりしたら大事です。そんなときに備えてしっかりと使い方を理解しておきたいのが、MacやiPhone、iPadに標準搭載されている「探す」アプリ。デバイスの紛失に備えてあらかじめすべきこと、また万が一失くなってしまったときに見つけ出す方法やデバイス内のデータを安全に守る方法について解説していきましょう。",
    url: "https://pc.watch.impress.co.jp/docs/column/macinfo/1609772.html",
    urlToImage:
      "https://pc.watch.impress.co.jp/img/pcw/list/1609/772/fig00.png",
    publishedAt: "2024-07-21T21:07:00Z",
    content:
      "MaciPhoneiPadAppleMaciPhoneiPad \r\nMaciPhoneiPadApple \r\n MaciPhoneiPadiCloud() \r\n [ ]iPhoneiPadApple[] \r\n MaciPhoneiPad \r\n[]\r\n Apple(iPhoneMac) \r\n Mac[]Apple IDAppleiPhone \r\n iPhone \r\n () \r\n 1 \r\n [] \r… [+73 chars]",
  },
  {
    source: {
      id: null,
      name: "Tomshw.it",
    },
    author: "Andrea Pellicane",
    title: "MINIMO STORICO: Apple Magic Keyboard ora costa POCHISSIMO! (-69%)",
    description:
      "Siete alla ricerca di una tastiera che possa migliorare la vostra esperienza d'uso con i dispositivi Mac, coniugando efficienza, sicurezza e design? Allora non potete lasciarvi sfuggire questa incredi...",
    url: "https://www.tomshw.it/hardware/minimo-storico-apple-magic-keyboard-ora-costa-pochissimo-69-Spl",
    urlToImage:
      "https://www.tomshw.it/storage/media/2024/07/28914/Apple-Magic-Keyboard----69----21-luglio-2024---Copertina.jpg",
    publishedAt: "2024-07-21T05:35:23Z",
    content:
      "Siete alla ricerca di una tastiera che possa migliorare la vostra esperienza d'uso con i dispositivi Mac, coniugando efficienza, sicurezza e design? Allora non potete lasciarvi sfuggire questa incred… [+1868 chars]",
  },
  {
    source: {
      id: null,
      name: "Googlewatchblog.de",
    },
    author: "Jens",
    title:
      "Pixel 9: Werden Googles neue Smartphones zu teuer? Starker Preisanstieg für die Übergangs-Generation",
    description:
      "In knapp vier Wochen wird Google die Pixel 9-Smartphones auf den Markt bringen, die in vielen Bereichen im Vergleich zum Vorgänger nachlegen - leider auch beim Preis. Die erwarteten Pixel 9-Verkaufspreise springen mit dieser Generation in eine neue Dimension …",
    url: "https://www.googlewatchblog.de/2024/07/pixel-9-werden-googles-neue-smartphones-zu-teuer-starker-preisanstieg-fuer-die-uebergangs-generation/",
    urlToImage:
      "https://www.googlewatchblog.de/wp-content/uploads/pixel-9-pink-leak.jpg",
    publishedAt: "2024-07-21T06:30:40Z",
    content:
      "In knapp vier Wochen wird Google die Pixel 9-Smartphones auf den Markt bringen, die in vielen Bereichen im Vergleich zum Vorgänger nachlegen – leider auch beim Preis. Die erwarteten Pixel 9-Verkaufsp… [+4515 chars]",
  },
  {
    source: {
      id: null,
      name: "mindbodygreen.com",
    },
    author: "https://www.mindbodygreen.com/wc/jason-wachob",
    title: "Why You Should Be Doing Foot Workouts For Longevity + 3 To Try",
    description: "We don't pay nearly enough attention to our foot health.",
    url: "https://www.mindbodygreen.com/articles/5-ways-to-strengthen-your-feet-and-why-its-essential-for-well-being",
    urlToImage:
      "https://mindbodygreen-res.cloudinary.com/image/upload/c_crop,x_0,y_0,w_2000,h_1334/c_fill,w_2000,h_1200,g_auto,fl_lossy,f_jpg/org/9z3pif7ihlyq30ldc.jpeg",
    publishedAt: "2024-07-21T09:00:00Z",
    content:
      "We don't pay nearly enough attention to our foot health. When we do try to take care of our feet, we're bombarded with misinformation about everything from which shoes to buy to how we should walk. C… [+6495 chars]",
  },
  {
    source: {
      id: null,
      name: "Techbang.com",
    },
    author: "cnBeta",
    title: "新款AirPods將配有紅外線鏡頭，以支援Vision Pro增強空間音訊效果",
    description:
      "配備紅外鏡頭的新款AirPods將支援在Vision Pro中增強空間音訊效果\n分析師郭明錤稱，蘋果正計畫推出帶有紅外線感知模組的AirPods，該模組可檢測使用者何時轉頭，從而自動調整 Apple Vision Pro 音訊輸出以配合使用者轉頭。\nApple Vision Pro 配備了內建 Audio Pods，可為休閒聆聽提供非常好的音訊輸出，蘋果也正在努力讓 AirPods 與 Apple Vision Pro 配合使用。\n郭明錤在社群發文中說，這一資訊來自他最新的供應鏈調查。他說，到2026年，蘋果的A…",
    url: "https://www.techbang.com/posts/116529-the-new-airpods-with-an-infrared-lens-will-support-enhanced",
    urlToImage:
      "https://cdn0.techbang.com/system/excerpt_images/116529/original/e50069d9c7662e797c41d90e79043ff8.jpg?1719824690",
    publishedAt: "2024-07-21T23:30:00Z",
    content:
      "AirPods Apple Vision Pro \r\nApple Vision Pro Audio Pods AirPods Apple Vision Pro \r\n2026AirPods AirPods Apple Vision Pro \r\nApple Vision Pro AirPods\r\nNPI AirPods 1000 AirPods\r\n AirPods iPhone 2024 9 iPh… [+10 chars]",
  },
  {
    source: {
      id: null,
      name: "Techbang.com",
    },
    author: "NetEase",
    title:
      "Netflix打擊家庭共享帳號後用戶成長再度變慢，擴大廣告方案作為未來銷售焦點",
    description:
      "隨著使用者增長放緩 Netflix將努力擴大廣告層級作為焦點\n自從打擊家庭共享帳號之後，Netflix迎來了一陣營收的成長高峰。不過，現在這波紅利看來也快到盡頭了。\nNetflix 在 4 月至 6 月期間新增的使用者數量可能是五個季度以來最少的，因為在打擊密碼共享之後推動的大幅增長趨勢有所減弱，並且觀眾的注意力轉移到包括歐洲盃在內的夏季體育賽事上。根據LSEG的資料，該公司在第二季度增加了約482萬使用者。這將是自2023年第一季度以來的最低增幅，約為前三個月新增930萬的一半。\n儘管如此，這家串流媒體巨頭銷售…",
    url: "https://www.techbang.com/posts/116953-with-subscriber-growth-slowing-netflix-will-focus-on-efforts",
    urlToImage:
      "https://cdn2.techbang.com/system/excerpt_images/116953/original/57449baa3b19f464f3e0cd05675e65d1.jpg?1721299777",
    publishedAt: "2024-07-21T01:30:00Z",
    content:
      "Netflix\r\nNetflix 4 6 LSEG4822023930\r\n 6\r\nNetflix202211NetflixNetflix500\r\nNetflix40%\r\nNetflix16.4%95.32021\r\nNetflix·\r\n54000/40%12300\r\nNetflix 35%50019%\r\nNetflixDisney+ 7 26 Netflix\r\n MoffettNathanson … [+115 chars]",
  },
  {
    source: {
      id: null,
      name: "Nakedcapitalism.com",
    },
    author: "Conor Gallagher",
    title: "The US Vassal State of Germany Comes Apart",
    description:
      "Alternative for Germany and Sahra Wagenknecht are likely to perform well as government doubles down on failed policies and castigates voters.",
    url: "https://www.nakedcapitalism.com/2024/07/the-us-vassal-state-of-germany-unravels.html",
    urlToImage:
      "https://www.nakedcapitalism.com/wp-content/uploads/2024/07/Crisis-Constituencies-by-EU-Country-1024x527.png",
    publishedAt: "2024-07-21T10:00:46Z",
    content:
      "Germany must remain an anchor of stability in Europe, Chancellor Olaf Scholz said after his coalition finally passed a budget and headed out for summer recess.\r\nIts unclear exactly how the coalition … [+22405 chars]",
  },
  {
    source: {
      id: null,
      name: "Ascii.jp",
    },
    author: "ASCII",
    title:
      "なんか懐かしい気分、あなたのApple WatchをiPodにする「tinyPod」が登場",
    description: "ケースで変化を出すデバイス流行ってますよね……。",
    url: "https://weekly.ascii.jp/elem/000/004/211/4211069/",
    urlToImage:
      "https://ascii.jp/img/2024/07/20/3767696/l/34c554780dc13225.jpg",
    publishedAt: "2024-07-21T08:00:00Z",
    content:
      "Apple WatchiPodtinyPod\r\ntinyPodApple WatchiPodiPod\r\nApple WatchApple WatchwatchOS\r\n79.99lite29.99Apple Watch Series 9/8/7/SE/6/5/441/10mm 45/44mmUltra49mm\r\nApple WatchApple Watch\r\nlite\r\niPodliteiPhon… [+28 chars]",
  },
  {
    source: {
      id: "techradar",
      name: "TechRadar",
    },
    author: "James Rogerson",
    title: "iPhone 16 colors: every rumored shade for every model",
    description:
      "The iPhone 16 series could come in a mix of new and old shades, many of which have been leaked.",
    url: "https://www.techradar.com/phones/iphone/iphone-16-colors",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/vhvu7HGyknSTnuQWhjxarS-1200-80.png",
    publishedAt: "2024-07-21T06:00:25Z",
    content:
      "One of the biggest decisions you’ll make when choosing an iPhone is the color you buy it in. After all, you’ll probably be keeping this phone for at least a year – and maybe way longer – and you’ll l… [+6042 chars]",
  },
  {
    source: {
      id: "techradar",
      name: "TechRadar",
    },
    author: "David Nield",
    title:
      "The designs of the iPhone SE 4 and the iPhone 16 could have something in common",
    description:
      "We thought the iPhone SE 4 might be based around the iPhone 14 – but it might actually be the iPhone 16.",
    url: "https://www.techradar.com/phones/iphone/the-designs-of-the-iphone-se-4-and-the-iphone-16-could-have-something-in-common",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/o8gaY528ffmeGgkgaf6xSg-1200-80.jpg",
    publishedAt: "2024-07-21T12:30:17Z",
    content:
      "It's been a little while since we heard anything about the iPhone SE 4 – the follow-up to the iPhone SE 3 from 2022 – but a fresh rumor suggests it's going to share some design similarities with the … [+2090 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "Ewan Spence, Senior Contributor, \n Ewan Spence, Senior Contributor\n https://www.forbes.com/sites/ewanspence/",
    title: "Forget The iPhone 16, Apple Has Something Much Better",
    description:
      "The iPhone 16 may be on it's way, but a better iPhone is waiting and it will offer value for money, new hardware, and the power of artificial intelligence.",
    url: "https://www.forbes.com/sites/ewanspence/2024/07/21/apple-iphone-16-iphone-16-pro-ai-apple-intelligence-a18-new-iphone-se/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/669c4114681f6e5de9cb189c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    publishedAt: "2024-07-21T22:30:44Z",
    content:
      "Updated July 21 with new design details of the upcoming iPhone SE.\r\nWith the launch of Apple Intelligence, Apple is ready to join the world of AI-first smartphones. While the iPhone 16 Pro will be th… [+5846 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "Ewan Spence, Senior Contributor, \n Ewan Spence, Senior Contributor\n https://www.forbes.com/sites/ewanspence/",
    title:
      "Apple Loop: Latest iPhone 16 Pro Leaks, iPad Pro Improvements, iPhone 16 Launch Dates",
    description:
      "This week’s Apple headlines; new iPhone 16 features, iPhone 16 Pro launch dates, Apple’s AI delay, improved Files app for iPad Pro, Cellbrite locked out of iOS, Microsoft grants Apple’s AI wish, and more...",
    url: "https://www.forbes.com/sites/ewanspence/2024/07/21/apple-news-headlines-iphone-16-pro-leaks-release-launch-ai-ipad-pro-cellbrite/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/6545a83115c6278c1465a3de/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    publishedAt: "2024-07-21T19:47:28Z",
    content:
      "Updated on July 21 with new details on the Apple AirPods release dates.\r\nTaking a look back at this weeks news and headlines from Apple, including new iPhone 16 features, iPhone 16 Pro launch dates, … [+6468 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "Bill Stone, Contributor, \n Bill Stone, Contributor\n https://www.forbes.com/sites/bill_stone/",
    title: "Technology Stocks Sink Despite Better Earnings",
    description:
      "The 2nd busiest week of earnings includes Magnificent 7 companies and 2Q GDP. The rise of small-caps and banks illustrates the expectations of rate cuts and no recession.",
    url: "https://www.forbes.com/sites/bill_stone/2024/07/21/technology-stocks-sink-despite-better-earnings/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/669bcb25eb3239dfd0d95794/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    publishedAt: "2024-07-21T11:00:00Z",
    content:
      "The S&amp;P 500 slumped by 1.9% for the week. The Magnificent 7, consisting of Microsoft (MSFT), Meta ... [+] Platforms (META), Amazon.com (AMZN), Apple (AAPL), NVIDIA (NVDA), Alphabet (GOOGL), and T… [+5401 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "Russell Flannery, Forbes Staff, \n Russell Flannery, Forbes Staff\n https://www.forbes.com/sites/russellflannery/",
    title: "Middle East Investors Eye Chinese Currency Assets As Ties Deepen",
    description:
      "“Clients more and more are asking for CNY” – shorthand for the Chinese yuan, says BTA Finance’s Humberto Coelho",
    url: "https://www.forbes.com/sites/forbeschina/2024/07/21/middle-east-investors-eye-chinese-currency-assets-as-ties-deepen/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/669cd9127472ac4f0852bab4/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    publishedAt: "2024-07-21T09:56:37Z",
    content:
      "Assets denominated in Chinese yuan have attracted growing interest from Middle East investors. ... [+] (FREDERIC J. BROWN/AFP via Getty Images)\r\nAFP via Getty Images\r\nMiddle East investors are lookin… [+3433 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "Josh Weiss, Contributor, \n Josh Weiss, Contributor\n https://www.forbes.com/sites/joshweiss/",
    title:
      "‘Alien Romulus’ Composer Benjamin Wallfisch Praises New Film As “Extraordinary Piece Of Work”",
    description:
      "‘Alien Romulus’ Composer Benjamin Wallfisch Teases New Film As “Extraordinary Piece Of Work”",
    url: "https://www.forbes.com/sites/joshweiss/2024/07/21/alien-romulus-composer-benjamin-wallfisch-praises-new-film-as-extraordinary-piece-of-work/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/669d188b1b667ade8d49566c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    publishedAt: "2024-07-21T15:05:52Z",
    content:
      "Xenomorph in 20th Century Studios' ALIEN: ROMULUS. Photo courtesy of 20th Century Studios. © 2024 ... [+] 20th Century Studios. All Rights Reserved.\r\n20th Century Studios\r\nSimilar to the light from d… [+3606 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "David Phelan, Senior Contributor, \n David Phelan, Senior Contributor\n https://www.forbes.com/sites/davidphelan/",
    title:
      "WhatsApp About To Launch New Android Feature To Translate Chats. ¡Estupendo!",
    description:
      "WhatsApp will soon be able to sort messages whose meaning is lost to you because it’s in the wrong lingo.",
    url: "https://www.forbes.com/sites/davidphelan/2024/07/21/whatsapp-about-to-launch-new-android-feature-to-translate-chats-estupendo-iphone-15-pro/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/669cc0499a0c065806d36f6a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    publishedAt: "2024-07-21T08:09:31Z",
    content:
      "How multi-lingual are you? I mean, sure, you know those international words from adios to namaste to zeitgeist, but if a group chat on a messaging service has a long message in Spanish, or German or … [+2698 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "Brett Owens, Contributor, \n Brett Owens, Contributor\n https://www.forbes.com/sites/brettowens/",
    title: "5 Newly Minted Dividends: Are They The Start Of Something More?",
    description:
      "Which dividend is most likely to be hiked? Usually, the brand-new payout. Let's look at five brand-new dividends for 2024.",
    url: "https://www.forbes.com/sites/brettowens/2024/07/21/5-newly-minted-dividends-are-they-the-start-of-something-more/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/6699227a801009c330693a86/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    publishedAt: "2024-07-21T14:08:00Z",
    content:
      "One hundred dollar bills for background. Selective focus.\r\ngetty\r\nWhich dividend is most likely to be hiked?\r\nUsually, the brand-new payout.\r\nChief Financial Officers are a conservative bunch. A CFO … [+11668 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "Tim Lammers, Contributor, \n Tim Lammers, Contributor\n https://www.forbes.com/sites/timlammers/",
    title:
      "Box Office: ‘Twisters’ Rises, ‘Moon’ Falls And Sun Sets On ‘Horizon’",
    description:
      "The disaster thriller “Twisters” spins up a bigger opening than expected while \"Fly Me to the Moon” and “Horizon” continue to bomb at this weekend's box office.",
    url: "https://www.forbes.com/sites/timlammers/2024/07/21/box-office-twisters-rises-moon-falls-and-sun-sets-on-horizon/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/669d34a4661ca2050a22efca/0x0.jpg?format=jpg&crop=2592,1458,x0,y1757,safe&height=900&width=1600&fit=bounds",
    publishedAt: "2024-07-21T16:42:49Z",
    content:
      'Daisy Edgar-Jones, Glen Powell and Anthony Ramos in "Twisters."\r\nUniversal Pictures\r\nThe disaster thriller Twisters whipped up a bigger opening than expected while Fly Me to the Moon and Horizon cont… [+3964 chars]',
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "David Rae, Contributor, \n David Rae, Contributor\n https://www.forbes.com/sites/davidrae/",
    title: "Here's How To Realistically Become A Millionaire",
    description:
      "Discover realistic steps to become a millionaire. See practical strategies for saving, investing, and building wealth to achieve financial independence.",
    url: "https://www.forbes.com/sites/davidrae/article/how-to-become-a-millionaire/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/64adc843010b60ecdeedfb13/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    publishedAt: "2024-07-21T18:00:00Z",
    content:
      "You don't need to be born a Kardashian or Jenner to become a millionaire. \r\nGetty Images\r\nThere are an estimated 7.4 million American millionaires. You are probably wondering how to become a milliona… [+9102 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author:
      "Anthony DeMarco, Senior Contributor, \n Anthony DeMarco, Senior Contributor\n https://www.forbes.com/sites/anthonydemarco/",
    title: "Ben Bridge Creates Jewels And Relationships From India To America",
    description:
      "Seattle-based Ben Bridge Jeweler has formed creative collaborations with manufacturers in India to produce unique jewelry concepts for its customers in the U.S.",
    url: "https://www.forbes.com/sites/anthonydemarco/2024/07/21/ben-bridge-creates-jewels-and-relationships-from-india-to-america/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/669c82ae17986ec5a7ddb461/0x0.jpg?format=jpg&crop=1628,916,x0,y197,safe&height=900&width=1600&fit=bounds",
    publishedAt: "2024-07-21T09:47:21Z",
    content:
      "Lisa Bridge, president and CEO of Ben Bridge Jeweler, at Shah Luxury jewelry manufacturer in Mumbai\r\nBen Bridge Jeweler\r\nSuccess as a retail jeweler often comes down to building relationships with cu… [+14968 chars]",
  },
  {
    source: {
      id: null,
      name: "ComputerBase",
    },
    author: "Stefan Sokolowski",
    title:
      "Rechtliche Bedenken: Multimodales KI-Modell von Meta kommt nicht nach Europa",
    description:
      "Meta entwickelt derzeit multimodale KI-Modelle, der Konzern will diese künftig aber nicht in der EU veröffentlichen. Der Grund sind die Regulierungsbedingungen, in diesem Fall vor allem die DSGVO. Die Datenschutzregeln wären eine zu große Hürde beim Erstellen…",
    url: "https://www.computerbase.de/2024-07/rechtliche-bedenken-multimodales-ki-modell-von-meta-kommt-nicht-nach-europa/",
    urlToImage:
      "https://pics.computerbase.de/1/1/3/3/4/3-5fcba0cfcd49d1fc/article-1280x720.23543da0.jpg",
    publishedAt: "2024-07-21T09:31:00Z",
    content:
      "Meta entwickelt derzeit multimodale KI-Modelle, der Konzern will diese künftig aber nicht in der EU veröffentlichen. Der Grund sind die Regulierungsbedingungen, in diesem Fall vor allem die DSGVO. Di… [+2388 chars]",
  },
  {
    source: {
      id: null,
      name: "Antyweb.pl",
    },
    author: "Patryk Koncewicz",
    title: "Apple Watch i kontakt z wodą – czego należy unikać?",
    description:
      "Z jednej strony Apple reklamuje swoje zegarki jako idealne narzędzia dla fanów sportów wodnych, z drugiej ostrzega nawet przed myciem rąk – jak to więc jest z tą wodoodpornością?\n \n The post Apple Watch i kontakt z wodą – czego należy unikać? appeared first o…",
    url: "https://antyweb.pl/apple-watch-i-kontakt-z-woda-czego-nalezy-unikac",
    urlToImage:
      "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2024/07/jmaksizgcn/611122866_S.jpg",
    publishedAt: "2024-07-21T17:53:03Z",
    content:
      "Wybierasz si nad wod i chcesz zabra ze sob Apple Watcha? No pewnie, aden problem przecie producent reklamuje swoje zegarki jako wodoodporne. Pytanie brzmi jednak, czy odporne na kad wod? To ju nie ta… [+3539 chars]",
  },
  {
    source: {
      id: null,
      name: "Antyweb.pl",
    },
    author: "Kamil Świtalski",
    title:
      "6 rzeczy które mam w swoim etui podróżnym z elektroniką. Więcej mi nie potrzeba",
    description:
      "Od ostatniego wpisu na temat mojego etui podróżnego minęło ponad pięć lat. Zdążyło ono ewoluować co najmniej trzykrotnie. Zmieniły się nie tylko technologie, ale rownież moje potrzeby. Patrząc na wpis z 2019 roku czuję się dziwnie: obecnie jestem dużo bardzie…",
    url: "https://antyweb.pl/etui-podrozne-2024-elektronika",
    urlToImage:
      "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2024/07/pspplfgc1m/DSCF2321.jpg",
    publishedAt: "2024-07-21T08:00:15Z",
    content:
      "Rzecz pierwsza: etui samo w sobie. Przez lata przechodziem wiele etapów. Bardziej wyspecjalizowanych, mniej wyspecjalizowanych. W pewnym momencie uznaem e nie potrzeba mi idealnych kieszonek na kady … [+6500 chars]",
  },
  {
    source: {
      id: null,
      name: "Elladodelmal.com",
    },
    author: "noreply@blogger.com (Chema Alonso)",
    title: "Aprendizajes del Crowstrike BSOD: ¿Debes abandonar Windows?",
    description:
      "Supongo que muchos os habéis enterado ya del Blue Screen Of Death que ha provocado el EDR de Crowdstrike en todas las máquinas Windows. Supongo que algunos compañeros aún estáis arreglando máquinas o con los planes de contingencia de muchos de los servicios q…",
    url: "https://www.elladodelmal.com/2024/07/aprendizajes-del-crowstrike-bsod-debes.html",
    urlToImage:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpX0FUTD7tg1qL6ZcILHOWG-wHBioMvCNLrQ39jKn6KT01bu85j9HEp8yfBYM-p6Y3OMZ3mBVuXvGEa3almptJEfxbFO91HqtJ8VDGnEdUuRDHdbZA5nQYScota-XrzC7wqkPo1ve1qrkmJMcaqFbZJrB7PS33J3lFhuycUgDKAnK8GS46uQMc/w1200-h630-p-k-no-nu/BSOD_0.jpg",
    publishedAt: "2024-07-21T08:05:00Z",
    content:
      "Supongo que muchos os habéis enterado ya del Blue Screen Of Death que ha provocado el EDR de Crowdstrike en todas las máquinas Windows. Supongo que algunos compañeros aún estáis arreglando máquinas o… [+7609 chars]",
  },
  {
    source: {
      id: null,
      name: "iLounge",
    },
    author: "Samantha Wiley",
    title: "Apple looking to bolster Apple TV+ content",
    description:
      "Bloomberg recently reported that Apple is in talks with major Hollywood studios to boost its content for Apple TV+. Apple TV+ content has mostly come from original productions, including ‘The Morning Show’ and ‘Ted Lasso’ with a degree of success. But now, th…",
    url: "https://www.ilounge.com/news/apple-tv/apple-looking-to-bolster-apple-tv-content",
    urlToImage:
      "https://www.ilounge.com/wp-content/uploads/2024/07/Apple-TV.png",
    publishedAt: "2024-07-21T01:11:07Z",
    content:
      "Bloomberg recently reported that Apple is in talks with major Hollywood studios to boost its content for Apple TV+.\r\nApple TV+ content has mostly come from original productions, including ‘The Mornin… [+722 chars]",
  },
  {
    source: {
      id: null,
      name: "iLounge",
    },
    author: "Samantha Wiley",
    title: "Apple rolls out new Apple Maps features",
    description:
      "Apple has rolled out several updates to its Apple Maps in line with the 2024 Summer Olympics. This year’s Summer Olympics will be held in Paris on July 26. In line with this, Apple Maps has been updated with featured apps, TV coverage, and more. Landmarks suc…",
    url: "https://www.ilounge.com/news/apple/apple-rolls-out-new-apple-maps-features",
    urlToImage:
      "https://www.ilounge.com/wp-content/uploads/2024/07/Apple-Maps.png",
    publishedAt: "2024-07-21T01:14:18Z",
    content:
      "Apple has rolled out several updates to its Apple Maps in line with the 2024 Summer Olympics.\r\nThis year’s Summer Olympics will be held in Paris on July 26. In line with this, Apple Maps has been upd… [+714 chars]",
  },
  {
    source: {
      id: null,
      name: "iLounge",
    },
    author: "Samantha Wiley",
    title: "The Apple Watch Ultra 2 is On Sale!",
    description:
      "Amazon has all-time low discounts on Apple products such as the Apple Watch SE and the Apple Watch Series 9, as well as Apple Watch Ultra 2. The Apple Watch Ultra 2 is on discount for $100 off from $799.00, featuring carbon neutral technology, a big bright sc…",
    url: "https://www.ilounge.com/news/apple-watch/the-apple-watch-ultra-2-is-on-sale",
    urlToImage:
      "https://www.ilounge.com/wp-content/uploads/2024/07/Apple-Watch-Ultra-2.png",
    publishedAt: "2024-07-21T18:32:41Z",
    content:
      "Amazon has all-time low discounts on Apple products such as the Apple Watch SE and the Apple Watch Series 9, as well as Apple Watch Ultra 2.\r\nThe Apple Watch Ultra 2 is on discount for $100 off from … [+725 chars]",
  },
  {
    source: {
      id: null,
      name: "iLounge",
    },
    author: "Samantha Wiley",
    title: "Apple shares Safari ad focused on privacy",
    description:
      "Apple previewed a Safari ad that has its focus on privacy, designed to emphasize the ways how Safari Protects the user’s privacy in comparison to other browsers. The video features bats and birds flying around smartphones while users are browsing the web, wit…",
    url: "https://www.ilounge.com/news/apple/apple-shares-safari-ad-focused-on-privacy",
    urlToImage:
      "https://www.ilounge.com/wp-content/uploads/2024/07/Apple-7-1024x577.png",
    publishedAt: "2024-07-21T18:31:18Z",
    content:
      "Apple previewed a Safari ad that has its focus on privacy, designed to emphasize the ways how Safari Protects the user’s privacy in comparison to other browsers.\r\nThe video features bats and birds fl… [+730 chars]",
  },
  {
    source: {
      id: null,
      name: "iLounge",
    },
    author: "Samantha Wiley",
    title: "Next iPhone SE may have iPhone 16 rear chassis",
    description:
      "The upcoming iPhone 4 SE may have the rear chassis of the iPhone 16, according to a rumor from China. A leaker by the handle ‘Fixed Focus Digital’ recently went on the Chinese social media site Weibo and said that the iPhone SE 4’s backplate manufacturing pro…",
    url: "https://www.ilounge.com/news/iphone/next-iphone-se-may-have-iphone-16-rear-chassis",
    urlToImage:
      "https://www.ilounge.com/wp-content/uploads/2024/07/iPhone-SE.png",
    publishedAt: "2024-07-21T01:12:56Z",
    content:
      "The upcoming iPhone 4 SE may have the rear chassis of the iPhone 16, according to a rumor from China.\r\nA leaker by the handle ‘Fixed Focus Digital’ recently went on the Chinese social media site Weib… [+600 chars]",
  },
  {
    source: {
      id: null,
      name: "iLounge",
    },
    author: "Samantha Wiley",
    title: "Beats Solo 4 designed with Minecraft theme",
    description:
      "The Apple Beats brand has had various partnerships for the past few years with artists, fashion designers, as well as Disney. The latest collaboration is with Minecraft. For the game’s 15th anniversary, they will launch a Beats Solo 4 special edition headphon…",
    url: "https://www.ilounge.com/news/beats-solo-4-designed-with-minecraft-theme",
    urlToImage:
      "https://www.ilounge.com/wp-content/uploads/2024/07/Beats-Solo-4.png",
    publishedAt: "2024-07-21T18:30:08Z",
    content:
      "The Apple Beats brand has had various partnerships for the past few years with artists, fashion designers, as well as Disney. The latest collaboration is with Minecraft.\r\nFor the game’s 15th annivers… [+636 chars]",
  },
  {
    source: {
      id: null,
      name: "iLounge",
    },
    author: "Samantha Wiley",
    title: "iPhone 16 Pro may come in Titanium Rose color",
    description:
      "The iPhone 16 Pro Max and iPhone 16 Pro will be released with a new color option, which is “Rose”. Ming-Chi Kuo states that the expected colors available for the iPhone 16 Pro and iPhone 16 Pro Max will be “Natural Titanium” or gray, silver or white, black an…",
    url: "https://www.ilounge.com/news/iphone/iphone-16-pro-may-come-in-titanium-rose-color",
    urlToImage:
      "https://www.ilounge.com/wp-content/uploads/2024/07/iPhone-16-Pro-2.png",
    publishedAt: "2024-07-21T18:25:50Z",
    content:
      "The iPhone 16 Pro Max and iPhone 16 Pro will be released with a new color option, which is “Rose”. Ming-Chi Kuo states that the expected colors available for the iPhone 16 Pro and iPhone 16 Pro Max w… [+663 chars]",
  },
  {
    source: {
      id: null,
      name: "Osnews.com",
    },
    author: "Thom Holwerda",
    title: "Managing Classic Mac OS resources in ResEdit",
    description:
      "The Macintosh was intended to be different in many ways. One of them was its file system, which was designed for each file to consist of two forks, one a regular data fork as in normal file systems, the other a structured database of resources, the resource f…",
    url: "https://www.osnews.com/story/140281/managing-classic-mac-os-resources-in-resedit/",
    urlToImage: null,
    publishedAt: "2024-07-21T12:35:36Z",
    content:
      "The Macintosh was intended to be different in many ways. One of them was its file system, which was designed for each file to consist of two forks, one a regular data fork as in normal file systems, … [+1057 chars]",
  },
  {
    source: {
      id: null,
      name: "The Gadgeteer",
    },
    author: "Julie Strietelmeier",
    title: "Circular Ring Slim smart ring review",
    description:
      "REVIEW – Smart rings have been on my radar this year after my RingConn smart ring review, which I really enjoyed. Now, months later, I’ve had the opportunity to test another contender in the growing smart ring market. The Circular Slim smart ring promises to …",
    url: "https://the-gadgeteer.com/2024/07/21/circular-ring-slim-smart-ring-review/",
    urlToImage:
      "https://the-gadgeteer.com/wp-content/uploads/2024/07/circular-slim-smartring-10.jpg",
    publishedAt: "2024-07-21T21:00:21Z",
    content:
      "If you buy something from a link in this article, we may earn a commission. Learn more\r\nREVIEW Smart rings have been on my radar this year after my RingConn smart ring review, which I really enjoyed.… [+9007 chars]",
  },
  {
    source: {
      id: null,
      name: "Tinhte.vn",
    },
    author: "no-reply@tinhte.vn (P.W), P.W",
    title:
      "Resident Evil 7 lên iOS: 83 nghìn lượt tải, nhưng doanh thu chưa được nổi 30 nghìn USD",
    description:
      "Resident Evil 7, ra mắt năm 2017 xứng đáng được xếp vào danh sách những tác phẩm game kinh dị xuất sắc nhất mọi thời đại. Capcom khi ấy đã thành công trong việc đưa series game kinh dị lâu đời của họ trở về đúng với cội nguồn “kinh dị sinh tồn” cực…",
    url: "https://tinhte.vn/thread/resident-evil-7-len-ios-83-nghin-luot-tai-nhung-doanh-thu-chua-duoc-noi-30-nghin-usd.3808727/",
    urlToImage:
      "https://photo2.tinhte.vn/data/attachment-files/2024/07/8399759_RE7-Main-House.webp",
    publishedAt: "2024-07-21T11:03:45Z",
    content:
      "Resident Evil 7, ra mt nm 2017 xng áng c xp vào danh sách nhng tác phm game kinh d xut sc nht mi thi i. Capcom khi y ã thành công trong vic a series game kinh d lâu i ca h tr v úng vi ci ngun kinh d … [+2237 chars]",
  },
  {
    source: {
      id: null,
      name: "Neowin",
    },
    author: "Sayan Sen",
    title:
      "Amazon Deal: B&O Beosound Stage Dolby Atmos soundbar with deep bass now cheapest",
    description:
      "Adding to the list of discounted soundbars from the likes of Nakamachi and Sony, Bang & Olufsen has dropped the price of its Beosound Stage premium sound bar to lowest ever thanks to Amazon Prime. Read more...",
    url: "https://www.neowin.net/deals/amazon-deal-bo-beosound-stage-dolby-atmos-soundbar-with-deep-bass-now-cheapest/",
    urlToImage:
      "https://cdn.neowin.com/news/images/uploaded/2024/07/1721595720_b_n_o_beosound_sound_bar_story.jpg",
    publishedAt: "2024-07-21T21:16:01Z",
    content:
      "There have been plenty of excellent deals lately on various audio products including sound bars and AV receivers (AVRs). These include its Sony's wireless subwoofers SW5 and SW3, which can be paired … [+2404 chars]",
  },
  {
    source: {
      id: null,
      name: "Everything-everywhere.com",
    },
    author: "Gary Arndt",
    title: "The Germ Theory of Disease",
    description:
      "Podcast Transcript For thousands of years, many theories have been put forward as to the cause of communicable diseases.  These theories ranged from the religious to the magical and sometimes quasiscientific, but what they all had in common was that there was…",
    url: "https://everything-everywhere.com/the-germ-theory-of-disease/",
    urlToImage:
      "https://photos.smugmug.com/Other/n-hRFP2/Podcast-Images/i-g54LHM5/0/KHjZGZ6t3TpMtNvHtdL6TBCs9Lrg9h3hqPCVPwN5F/L/1475epart-L.jpg",
    publishedAt: "2024-07-21T08:01:02Z",
    content:
      "Subscribe Apple | Spotify | Amazon |iHeart Radio | Player.FM | TuneInCastbox | Podurama | Podcast Republic | RSS | Patreon\r\nFor thousands of years, many theories have been put forward as to the cause… [+12554 chars]",
  },
  {
    source: {
      id: null,
      name: "Tinhte.vn",
    },
    author: "no-reply@tinhte.vn (ND Minh Đức), ND Minh Đức",
    title:
      "Apple sẽ ra gói đăng ký trả phí để xài các tính năng AI trên iPhone, có thể là Apple Intelligence+",
    description:
      "Các tính năng AI mà Apple giới thiệu tại WWDC dành cho iPhone, iPad hay macOS như AI hỗ trợ viết, AI trong Siri, tạo hình ảnh, emoji trong Playground có thể sẽ phải trả phí để sử dụng, theo một số nguồn tin.",
    url: "https://tinhte.vn/thread/apple-se-ra-goi-dang-ky-tra-phi-de-xai-cac-tinh-nang-ai-tren-iphone-co-the-la-apple-intelligence.3808655/",
    urlToImage:
      "https://photo2.tinhte.vn/data/attachment-files/2024/07/8399533_cover_AI.webp",
    publishedAt: "2024-07-21T03:05:08Z",
    content:
      "Các tính nng AI mà Apple gii thiu ti WWDC dành cho iPhone, iPad hay macOS nh AI h tr vit, AI trong Siri, to hình nh, emoji trong Playground có th s phi tr phí s dng, theo mt s ngun tin.Mc dù ti s kin… [+713 chars]",
  },
];
JSON.stringify(blogList);
module.exports = blogList;
