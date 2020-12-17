<template lang="pug">
.rcm
  slider.rcmCardBlock
      slideritem.card(v-for="item in showcards")
        router-link.rcmCard( :to="'/post/' + item.postid" :style="{background:　'url(' + item.firstpic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
export default {
  components: {
      slider,
      slideritem
    },
  data() {
    return {
      homeresultsprojectsArray: [
        {
          pro: '中小學在職教師暨行政人員素養提升計畫',
          firstpic: require('../assets/ARCHI/chongte/img01.jpg'),
          title: '日常景框 X 美感生活 X 藝術實踐 「補助執行跨域整合美感教案徵選」 活動花絮',
          author: '',
          date: '2020/01/08',
          content: `<p dir="ltr"><img src="https://lh5.googleusercontent.com/wmA9SXroreNtPbxkB27YX7i9_AbSVRR9ZIs1dl71IJSE9N84FqOwAe9rP4rRaa0NVobcU3VDtQsMsKm0uiC_8-bp3ADFHhZ2I6pHt9dNpBKr1o6398A4QQY-0BzoyeZ5zmONlFY" width="851" height="600" /></p>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr">美感素養提升計畫&rdquo;知識形塑&rdquo;以「表演藝術」與「新媒體」為核心，透過跨域整合的再吸收，呈現出表演藝術與新媒體藝術的創新多元運用，形塑出跨界、實驗性的美感經驗。從而以教案的發想、溝通、激盪、實踐，發展出多樣化的創意教案，進行創新的教與學並實踐於課堂中，提供實際的操作模組，激發出學生跨域的生活、藝術與美感串聯。</p>
            <p dir="ltr">教案設計以「校園生活」為主題，連結到學生日常生活經驗的提取與思考，運用更多以藝術、科技的多元表現方式，從人與人之間互動中創造出創新與創意的溝通方式，並聚焦在對生活有感的事物，進而形塑美感知識與素養。</p>
            <p style="text-align: center;"><strong><br /></strong> <br /><br /></p>`,
          tab: ['活動成果'],
          hashtag: ['美感生活', '藝術實踐', '日常'],
          postid: '8695421',
          pic: ['https://drive.google.com/uc?export=view&id=1-eLtYHu6gS7cmWaOOm0fQIaWR651_nJx',
            'https://drive.google.com/uc?export=view&id=1JKdVXb4F1sUFnGeUWaLywYCvY6m6G1XL',
            'https://drive.google.com/uc?export=view&id=1y4WK61zT9thmGWDEQAkSzRO2BZjA6wQ_',
            'https://drive.google.com/uc?export=view&id=1j5n7m8tIoV_yTTyIE2y9IqXPNR1stOLO',
            'https://drive.google.com/uc?export=view&id=1qr4G1WHHlSSpR_0YO8Y1K3pk19-4OV6b'
            ],
        },
        {
          pro: '中小學在職教師暨行政人員素養提升計畫',
          firstpic: require('../assets/ARCHI/chongte/img02.jpg'),
          title: '美感素養提升計畫「感性啟蒙」研習課程 活動花絮',
          author: '',
          date: '2020/01/08',
          content: `<p dir="ltr"><img src="https://lh3.googleusercontent.com/nOqYJWOte8sRFFpLBVZzDHbDfn0rY5yB22pQ5x6mw4fSqoE0VfKV1EPtCic5IP2HNfzgGSmUPBpszVaAKIk6CQIedOweFCTzKipMT70X7iIX4Ttgh-9l_0LIxVKOI0NpHOBXByg" width="837" height="550" /></p>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr">感性啟蒙課程，將藝術視為一種身體對感知的活動現象，透過身體感官經驗與藝術實踐的關係，對生活中的美有全新的體驗，重新認識自我的身、心、靈，從而形塑出美感的認知，並發展出得以實踐的具體成果。<br />此計畫分為「行政策展」與「教案設計」兩個面向，透過教職體系的行政人員與非藝術相關背景之教師一同參與，運用美感的可能性與多樣性，串聯生活、文化、鑑賞與經驗的日常生活練習，共同提升美感素養。</p>
            <p style="text-align: center;"><br /><br /></p>`,
          tab: ['研習成果'],
          hashtag: ['藝術實踐', '感性'],
          postid: '869542986521',
          pic: ['https://drive.google.com/uc?export=view&id=1a_cRIDVtjmSKF9eaHd-ZPJjM1GJYqWNP',
            'https://drive.google.com/uc?export=view&id=1kSdg_OscZbprOzkLIEPeQqnuALaW7slJ',
            'https://drive.google.com/uc?export=view&id=1jXLVwsLtaXlbDsfk0zc7LL3v6MA5rlOQ',
            'https://drive.google.com/uc?export=view&id=13cIZNptW6w5qHwj-MaJdCftFefhw3Cs0',
            'https://drive.google.com/uc?export=view&id=1rmhfvej6n7ts9GFotx89gqkCtgadJ5GK'
          ],
        },
        {
          pro: '中小學在職教師暨行政人員素養提升計畫',
          firstpic: require('../assets/ARCHI/chongte/img03.jpg'),
          title: '美感素養提升計畫X史博館行動博物館 研習課程 活動花絮',
          author: '',
          date: '2020/01/08',
          content: `
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/thIsT43nI_YuVHpQR5PY50nqIicpQsEstmD68BDD1dwdFLFPPhSyi7QQrAP4YQDaZBinJZabDzQsBHipScxvAhDA4U3yzEZrdFDHLe7CKtqjallaHS1igON-yZnhz7rU0d2CKI0" width="848" height="550" /></p>
            <p dir="ltr">美感素養提升計畫與國立歷史博物館合作，以策劃展覽思維、融合地方文化特色為主軸，國立歷史博物館年度巡迴之移動式展覽「鈔跑抵家」，主題為了解各國紙鈔貨幣的圖案設計與在地生活使用的美感實用關係。</p>
            <p dir="ltr">從展覽學習如何發想內容、設計宣傳到展演呈現方式&hellip;等，作為美感經驗學習及思考、實踐的方法，從而反思以學生為主體，學校、教師與行政人員如何以主題，融入地方特色與教學策展多元跨域方式的可能。</p>
            <p style="text-align: center;"><br /><br /></p>`,
          tab: ['研習成果'],
          hashtag: ['歷史博物館', '美感經驗學習'],
          postid: '86986546521',
          pic: ['https://drive.google.com/uc?export=view&id=1IUsEmwxY7dcxkxR7S1ZP2JEFXxDHVABK',
            'https://drive.google.com/uc?export=view&id=1_NDxkVw7aYkN7oPFmAQmuB-5QCjUBuSh',
            'https://drive.google.com/uc?export=view&id=1XGFIiV9hx7VehLWB0M9VwVWWofupVcYF',
            'https://drive.google.com/uc?export=view&id=1NZlOM5E-o8cQga9RJD6ZiK0EHEILRsHj',
            'https://drive.google.com/uc?export=view&id=1UNOY2F1GJmiABz3tk0256YVswtQUze1_'
          ],
        },
        {
          pro: '中小學在職教師暨行政人員素養提升計畫',
          firstpic: require('../assets/ARCHI/chongte/img04.jpg'),
          title: '美感素養提升計畫X黎美光 創意 心理工作站 研習課程 活動花絮',
          author: '',
          date: '2020/01/08',
          content: `<p dir="ltr"><img src="https://lh5.googleusercontent.com/fSrIRc_FoYh52VHbAWg7gSQ-zvYbVeOy07EIk9UbdggAAJfx4Iu3OBG6oAGIuBynVH0nBwAVdeMWc4fWdNw4QskrOCvMM1DnVrsllCbBE7GPT0IGXkhO11jHmX4Dv7r8ih5Lw9E" width="829" height="530" /></p>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr">美感素養提升計畫與與"黎美光 創意.心理工作站"合作，將從「沉澱與豐饒」中出發，「沉澱」與「豐饒」為美感素養提升計畫的核心概念，透過即興藝術的賞析與身體實踐，學習「場域共感」的能力，也期盼藉由表演藝術的媒介，讓參與者體會與感知對話的能力。活動也分享藝術家之間的跨域合作，藉由現場音樂、工藝與美術的空間對話，透過即興舞蹈藝術當下變化的豐富，激發場域中共同參與的歡樂與能量。</p>
            <p style="text-align: center;"><br /><br /></p>`,
          tab: ['研習成果'],
          hashtag: ['黎美光', '創意', '心理'],
          postid: '86986686545546521',
          pic: ['https://drive.google.com/uc?export=view&id=1xI_pR9mkq9DnTb2_VNW8Xl17moNEqzEw',
            'https://drive.google.com/uc?export=view&id=1DA8x8hKK9w-x7Ci_h4-WJHHYPkAOfVwf',
            'https://drive.google.com/uc?export=view&id=1QlMVcYr1GISSWhCzGiIhRghybP-L447b',
            'https://drive.google.com/uc?export=view&id=12fmtRu39teDwHzWX__gxsGhocy7TUOQl',
            'https://drive.google.com/uc?export=view&id=1pNs9HKIDBv8qSvkEjYAfsJvd0JOR4WEq'
          ],
        },
        // {
        //   pro: '中小學師資生美感素養培力課程發展計畫',
        //   firstpic: require('../assets/ARCHI/chongst/img01.jpg'),
        //   title: '瑞塘國小陳思言老師至台北教育大學進行美感課程模組實踐。',
        //   author: '',
        //   date: '2019/12/9',
        //   content: ``,
        //   tab: ['活動成果'],
        //   hashtag: ['美感課程', '陳思言'],
        //   postid: '86984586686545546521',
        //   pic: ['https://drive.google.com/uc?export=view&id=1v-meqJ_4xkTwfhKWVn1cpBFA-MGfvAG-',
        //     'https://drive.google.com/uc?export=view&id=1nPtTL3Ei8Njt4VPTHwB1l2YBhhr60S_B',
        //     'https://drive.google.com/uc?export=view&id=1I2nn4SBWK_1TsnMGrhyDExXBQo7Cw_8F',
        //     'https://drive.google.com/uc?export=view&id=1pvl1b4xL8vzxbOzJKX10NjQOdlKJfWMQ',
        //     'https://drive.google.com/uc?export=view&id=1warYV_-1r65XUbgcsw1vpMyP64kNAXsQ'
        //   ],
        // },
        // {
        //   pro: '中小學師資生美感素養培力課程發展計畫',
        //   firstpic: require('../assets/ARCHI/chongst/img02.jpg'),
        //   title: '大業國小陳韻如老師及樂善國小陳維士老師至台北教育大學進行美感課程模組實踐。',
        //   author: '',
        //   date: '2019/12/23',
        //   content: ``,
        //   tab: ['活動成果'],
        //   hashtag: ['美感課程', '陳韻如'],
        //   postid: '86686545546521',
        //   pic: ['https://drive.google.com/uc?export=view&id=1cQ1jJK7gi22gHsnixVkYjz75tYO_9-XI',
        //     'https://drive.google.com/uc?export=view&id=1xxGQwvcl3xLo5AS5HuU_TtZnVmd4tY62',
        //     'https://drive.google.com/uc?export=view&id=1EO107Jl5CkdjFjjpSsZju5uvuGl3LtPr',
        //     'https://drive.google.com/uc?export=view&id=1oBbXkFNswoESKsNk8rzdH8UF74tEXCCb',
        //   ],
        // },
        {
          pro: '見美．踐美．漸美-建構美感生活學習地圖之方案實踐實施計畫',
          firstpic: require('../assets/ARCHI/chein/img01.jpg'),
          title: '從在地出發，翻轉「養鴨」傳統產業的嘉義縣大林鎮排路國小',
          author: '',
          date: '2019/12',
          content: `<p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 新細明體, serif;">位於純樸鄉間、全校只有</span>18<span style="font-family: 新細明體, serif;">個孩子的嘉義縣排路國小，在素有「鴨子媽媽的故鄉」之稱的嘉義大林鎮，一直希望能帶著孩子為家鄉寫故事。</span></p>
            <p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-size: 12.0pt; font-family: 新細明體, serif;">加入教育部「美感生活學習地圖」計畫後，透過以學生為學習主體的課程規劃，教師共同備課、編寫教材，帶著孩子踏查社區、訪談耆老，了解在地特色、傳統產業；在故事回溯、串接後，畫出家鄉養鴨事業的產業鏈，並將養鴨故事彩繪社區，不僅讓社區走出去，更讓開闊的視野在孩子心中拓展</span><span style="font-size: 12.0pt; font-family: Calibri, sans-serif;">!</span> </p>`,
          tab: ['活動成果'],
          hashtag: ['在地', '翻轉', '養鴨'],
          postid: '885525546521',
          pic: ['https://drive.google.com/uc?export=view&id=18LrC4pok2EaEs4UbdCNjma86XJyW_w8r',
            'https://drive.google.com/uc?export=view&id=1d048MOSFumjoueLAouhHmYItaAyTq5GY',
            'https://drive.google.com/uc?export=view&id=1qi6neBwY_87PJP1O9UectAQJ7zuEztCe',
            'https://drive.google.com/uc?export=view&id=1zZUj1IXpPhaNJk5YxeHn9IVbD1WHnxO2',
          ],
          video: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/MqRBBpo1xLw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        },
        {
          pro: '見美．踐美．漸美-建構美感生活學習地圖之方案實踐實施計畫',
          firstpic: require('../assets/ARCHI/chein/img02.jpg'),
          title: '開展「Kacalisian」生命之旅的屏東縣長榮百合國小',
          author: '',
          date: '2019/11',
          content: `<p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 新細明體, serif;">因為莫拉克遷村建校的屏東縣長榮百合國小，不僅在文化回應教學中，提升學力、建構部學歷，更透過</span>108<span style="font-family: 新細明體, serif;">年教育部「美感生活學習地圖」計畫，以「美」為基底，建置「童年山林、全人美學」的校本課程教學，慢慢找回原民孩子的自信。</span></p>
            <p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-size: 12.0pt; font-family: Calibri, sans-serif;">108</span><span style="font-size: 12.0pt; font-family: 新細明體, serif;">年</span><span style="font-size: 12.0pt; font-family: Calibri, sans-serif;">11</span><span style="font-size: 12.0pt; font-family: 新細明體, serif;">月受邀參加華山藝文特區雜學校展，讓部落孩子帶著自信、勇敢、快樂、互助，勇闖台北都市叢林，開展一場</span><span style="font-size: 12.0pt; font-family: 新細明體, serif;">「Kacalisian」生命之旅；無論在靜謐山林或喧囂城市，孩子們都展現從容的自信，自在地創發部落生命美學!</span> </p>`,
          tab: ['活動成果'],
          hashtag: ['生命之旅', '屏東', '長榮百合國小'],
          postid: '8895526521',
          pic: ['https://drive.google.com/uc?export=view&id=11SSdcqksSV4TwgBugd1z685sEbJlwzN4',
            'https://drive.google.com/uc?export=view&id=1Cw8GuO_ydj03MC0pI0K9ElDNyUg00km3',
            'https://drive.google.com/uc?export=view&id=1N0kNkEOti-LwHWKC0IXpun0yX7JviQNA',
            'https://drive.google.com/uc?export=view&id=19ZxxAUPX7R5ONSIq0ip1uiET8i-moOTV',
            'https://drive.google.com/uc?export=view&id=1CpSYl36qGyXVDJswQ8mLsFgn4siJ13d0',
            'https://drive.google.com/uc?export=view&id=14kxHfnyQrwb_qe8EEYyyAVf7n1JqGc1S',
          ],
          video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iQVFhkk-tf0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          pro: '美感教育出國計畫',
          firstpic: require('../assets/ARCHI/foreign/img01.jpg'),
          title: '2019美感教育教師參訪荷蘭美感與藝術教育滿載而歸',
          author: '',
          date: '2019/11/25',
          content: `<p dir="ltr">由計畫共同主持人黃純敏教授及協同主持人陳淳迪教授率團，於108年10月25日至11月3日展開為期10日的荷蘭參訪活動。</p>
            <p dir="ltr">「以學習者為本位的跨學科藝術教育」</p>
            <p dir="ltr">荷蘭的教育體制開放、多元且務實，強調國際多樣性、學生為學習主體的課程彈性以及跟社區社會的連結性。本次參訪大學、中學及小學共4所學校，教師們得以一窺不同教育階段有關美感與藝術教育的環境設施、空間規劃、課程發展與課室教學。</p>
            <p dir="ltr">方提斯應用科技大學(Fontys University of Applied Sciences)藝術與表演學院（School of Fine and Performing Arts）院長卡倫&middot;尼佛特(Karen Neervoort)介紹學校給予學生高度的自主性及自我實踐的機會，鼓勵學生在創作的同時，主動提出跨領域、跨學科的合作需求，學校也會因應學生的需求給予適當的資源與支持。</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/SQfaCRhJMhid7pNLUydf-l3FVC04iApWYLx2KSKfuGMDPB_N2EVxMv3zx8yXjxSmuJpYeh2ju2WCX5Xh4O6rE2FY3tDqf0txhv2GpzZ_1mfhMeF10IJTBgSg8UmJSW30eCZo2rk" width="554" height="415" /></p>
            <p dir="ltr">▲方提斯藝術及表演學院院校方人員導覽及學生介紹作品</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/J1mksUYagSwqftygTtFpHGi89e6Xa_d-fYMPsX-oJb_4xZpeDkcCSy4nsUx0asaZogDwSNsjc3nGRH6wlNih5bXx88d21TMveFvdYmFgDAlcLYk5NRqL9r4EHnDMiDjN1LpDnBE" width="554" height="368" /></p>
            <p dir="ltr">▲黃純敏教授與方提斯應用科技大學國際辦公室主任梵弗利特交流</p>
            <p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>&nbsp;</strong></p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/VN962GzSCAA_xuBEDv9NqPIiOZAeqjXR-xqFLQV9CXr8aTPVGk49yDX5d6vdXxB2XLEx5aYqgfu3SEb_JIZtWf9AzBpbUnToF6vHaNE5NUywXvrH11takv1xpdF9OzEet7CeBP0" width="554" height="578" /></p>
            <p dir="ltr">▲黃純敏教授代表團隊贈送台灣藍鵲特色瓷盤給方提斯應用科技大學藝術與表演學院院長尼佛特</p>
            <p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>&nbsp;</strong></p>
            <p dir="ltr">在漢斯應用科技大學(Hanze University of Applied Sciences)音樂學院爵士樂學系經理人兼國際關係專員揚&bull;克魯格(Jan-Gerd Kr&uuml;ger) 介紹荷蘭的藝術教育目標為藝術生活化，期盼學生畢業後能與社會做連結，從該校音樂新館練習室的玻璃落地窗設計，讓學生練習的畫面跟周遭社區環境連成一氣，成為城市藝術的一角，藉以拉近學校與社區關係，強化學校與社會的連結。</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/03-YJ8j9ZwAua-NfHUJOB9L2kAhlcCCbcSSBzKQjGOP8dvY71yQJB_u8BbzjQEu6OUOxKZIEgcvMBHSkVhkiLg1zEWmhhETWQNCnPaeJryTPWeN9swt0kBiBufc1cFw66jX9JPg" alt="漢斯應用科技大學" width="556" height="417" />▲漢斯應用科技大學藝術學院設計系主任韋爾海頓、藝術系主任波因特、講師格羅嫩堡與荷蘭團成員合影。</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/SQfaCRhJMhid7pNLUydf-l3FVC04iApWYLx2KSKfuGMDPB_N2EVxMv3zx8yXjxSmuJpYeh2ju2WCX5Xh4O6rE2FY3tDqf0txhv2GpzZ_1mfhMeF10IJTBgSg8UmJSW30eCZo2rk" width="554" height="415" /></p>
            <p dir="ltr">▲荷蘭團觀賞漢斯應用科技大學音樂學院學生樂團上課排練情形</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/XPSFNBlQ3r2u9mu-NYbCp25C4LSSruKAc87BzdXMI-56t4YEPr27p4kbW_rIY7gc0VApOiy6Q8n2TvnJIiHRS_mCSrxV03427xHTZjo4xB8ayA1hmHmjUK6l9EbZE-yRfx2vNlY" width="554" height="343" /></p>
            <p dir="ltr">▲漢斯應用科技大學音樂學院爵士樂系經理人克魯格與荷蘭團合影</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/nVaJg5xkeNcpsf4yTw8D-K5agtRmJ4v8w_wSGyKg7DF5rQdGXEvXslAJpPprhkwikDhumOLkPic2gaYzHp340qCOhDIiLNhxwg_iIid6Jx9RIcMW4K0EOgrNIK_7Wth6GVriiQo" width="554" height="395" /></p>
            <p dir="ltr">▲漢斯應用科技大學藝術學院設計系主任韋爾海頓與美術系講師格羅嫩堡與荷蘭團午餐交流</p>
            <p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>&nbsp;</strong></p>
            <p dir="ltr">胡塞爾耶納計畫實驗小學(RK Jenaplan Basisschool De Hussel)源於德國耶納計畫的教育實驗，在參訪前，邀請德國科隆大學沃爾特&middot;海爾曼(Walter Heilmann)教授為參訪團講述耶納混齡學習的幾個目的：創造力的養成、自我決斷力的培養（責任感）、同理心及個人發展、對話與尊重的重視，並陪同參訪該校教學現場，讓團員親身觀察體驗如同在「家庭群組」（family group）裡「客廳」一般的多向交流教室設置以及混齡教學。</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/-MMWzBaLhV4f12ld64qrN2djc4Xaf-EuMY9VcHPxkn6wDo-OSSIrKsudj7TsN50fMbQk-QgYD80MFthi1R4sex_ry5XUmiJeS72XUIkT5xvZBvZV2P5AVMPeIGZvWEY--v6Hdq0" width="554" height="385" /></p>
            <p dir="ltr">▲胡塞爾耶納教育實驗小學校長羅洛夫斯、副校長巴胡古納及海爾曼教授跟荷蘭團合影</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/ocEFAZyn4wkONVZgtr3pTeO9a7E58poxje8oBeSSsmzAi5SzuJa1B57RT-XvkPlQlQVvhZqKYdwSuQKT3ruDbbpBIMX7Y67KYkEN2WTt27AwUC7HW_-eWPC6ny4yPlWHUTuCq98" width="554" height="738" /></p>
            <p dir="ltr">▲林佳玫老師於胡塞爾耶納計畫實驗小學與帶班老師交流</p>
            <p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>&nbsp;</strong></p>
            <p dir="ltr">阿瑪迪斯高中(Amadeus Lyceum) 為荷蘭烏特勒支市具代表性的綜合高中之一，重視文化發展與訓練的課程，其文化教育包含藝術、媒體、文化遺產相關知識。副校長馬克&middot;范德維德(Marc Van de Velde)介紹學校除了藝術知能的基礎訓練以外，文化遺產為主題融入式的跨領域學科教學為其亮點，例如以荷蘭建築為課程主題，結合數學與物理的知識，以跨學科的課程模式培養學生的創作能力、技能以及批判思考。</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/oh0BPZDebhlkNMYuqc4dx4C_kZ10MvvYyYRsdQAp8f_zoE4FSkwJUSRJlYCoi8bNkwTP8A0N_JqoJ7oFNZQFgO9CVBhowWgxv_szfhW5eNs8PBsByz0AxuMW_w1i43yjiKSb5UI" width="554" height="277" /></p>
            <p dir="ltr">▲阿瑪迪斯高中副校長范德維德與導覽學生跟荷蘭團合影</p>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr">「沉浸體驗荷式設計藝術之美」</p>
            <p dir="ltr">本次參訪美學亮點，除學校教育及庫勒慕勒美術館、梵谷美術館及國家博物館的重要館藏外，也特別規劃2019年荷蘭設計週Dutch Design Week （簡稱DDW）及恩荷芬設計學院畢業展，讓教師們進行觀展，獲取最新、未來性、創意前瞻的設計概念與環境永續再生的思考。</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/oLvXDqlDcdwUb_mCUSbyWGrZlK7ihoTaNFmIHXj-qOyIdvTejvULhEedMZML0dfZfBrpQcB1Wu7qax2w233aX6bCUkh-sh-Mic47nDYiK_exnk7n74XD8wg-kGBo3slas_eeA8E" alt="荷蘭設計週 團員們被生物設計作品所驚豔" width="556" height="417" />▲荷蘭設計週 團員們被生物設計作品所驚豔</p>
            <p dir="ltr">參訪過程中，黃純敏教授與陳淳迪教授也帶領團員進行深度討論，例如以荷蘭藍瓷與東方青花瓷，指出東西方文化的交流與差異，帶出歷史貿易以及工藝與經濟民生的跨域關係；在參訪完荷蘭風車群，跟團員們討論荷蘭風車的排水工程以及不同時期的設計材質與美學觀點，教師們透過跨學科的討論激盪出更多回響。</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/Ty1XBM_lmjPIBnk5yPUXvDUhzprche-iJpEAX8g1J7FQ4ZST8gFEiRGNMzZncn0hPo3gk8vxpvrFZjmwIen6JrSrs_hWL5x2nuZ0KzAoq2sPLjfjtkdlT8FEcKytPEIAjPK2EyY" alt="陳淳迪教授與老師們分享荷蘭風車排水設計" width="561" height="421" />▲陳淳迪教授與老師們分享荷蘭風車排水設計</p>
            <p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>&nbsp;</strong></p>
            <p dir="ltr">團員高雄市新上國小王彥嵓校長表示，此次美感教育工作教師國外進修參訪，看到了荷蘭國民美學上所展露的獨特自信，讓所有團員重新思考，在全球化跨領域整合的當代，臺灣美感教育如何有更新思維；臺中市立文華高中高嘉宏老師表示，透過美感參訪活動及教授的引領下，了解重視人格發展與創造力的荷蘭教育模式，也反應在美學教育及荷蘭設計週眾多的作品中，讓教師在思考其造形美感之餘，也同時進入荷蘭教育養成的思考提問，透過設計與美感，關注全球在地化（Glocalization）的議題。</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/WcZZ_hbIE-z59UIcUfojqwyv9E_bFp09tWzYUGJ_Ds5lghLKf31Ne7Gw2YLmX2cizEydBdDQ0mCF6GZUY7MHhPy_wz99H8ENDw3zsrjeTOCS1eoEwuedCHky3m9BbrVfn_U7AwE" alt="國立博物館 荷蘭團合影" width="559" height="419" />▲國立博物館 荷蘭團合影</p>
            <p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>&nbsp;</strong></p>
            <p dir="ltr">荷蘭美感與藝術教育參訪，不僅開啟臺灣與荷蘭的交流契機，提升老師的國際視野與藝文知能，更重要的是凝聚來自全臺美感計畫與學科領域的教師們，投身美感教育改造工程的信心以及彼此間的夥伴關係。明年5月前將陸續透過課程開發、藝術創作、講座、社群交流等方式，在校園、社群媒體、校際聯盟以及全臺美感教育活動中，公開分享參訪經驗，撒播美感教育的種子。<br />期能轉化為開展學生美感經驗與文化知能的教育行動，並鼓舞學生自發學習的動機與熱情，厚植核心素養，進而落實全民美育。</p>
            <p dir="ltr">&nbsp;</p>
            <p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><br /><br /></p>`,
          tab: ['參訪成果'],
          hashtag: ['荷蘭', '國際', '參訪'],
          postid: '88958654521',
          pic: [
          ],
          video: [],
        },
        {
          pro: '美感教育出國計畫',
          firstpic: require('../assets/ARCHI/foreign/img02.jpg'),
          title: '生活美學‧跨域思維─美感教育教師參訪日本美感教育的融合創生',
          author: '',
          date: '2019/12/13',
          content: `<p dir="ltr"><img src="https://lh5.googleusercontent.com/EW6NGrg7zh6gocU7-zGg-YmjUiod5kgbQtRdiZ5DT7L_zyHimhqS_8Q4hV2SrI-I8SmPLAMS4uyhTDue6MOCpZuymbIWTEZ3teFBrZHoo0O2pSQhiJkqqD6MpbC2UwCypU_dGmU" alt="7a631a00 89b3 45f7 Bff8 E051c8c854e7" width="560" height="373" /></p>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr">日本參訪團由臺北市立大學視覺藝術學系高震峰教授及國立臺灣師範大學藝術學院趙惠玲院長率領，於11月21日至27日前往名古屋、京都、大阪等地參訪，成果豐碩。</p>
            <p dir="ltr">名古屋舉辦第72屆日本「全國造形教育研究大會」，是廣受日本重視的全國性視覺藝術教學研究活動，以其嚴謹且具參考價值的專業教學活動著稱，與會者透過現場的課堂觀摩、教學實作、專家議課來探討執行課程的內涵。</p>
            <p dir="ltr">今年大會主題為「感性思維‧共融共生」，課程主軸皆圍繞此議題發展，參訪團以分組方式，分別前往提供公開授課的5所中小學進班觀課。其中分組團員前往名古屋市立小學六年級的課程－「空間創造」，課程設計透過點線面的重組、冷暖色的互換、快與慢的節奏等，投影在不同體積、形狀、質感上，激發學童無限的想像可能。教師在課程設計上著重議題整合，在藝術課堂上不只是教藝術，孩子藉由引導觀察，進而發現情緒，再透過科技結合光學的概念，在教室開放的空間中創造表現，實驗自我情感的不同狀態。觀課中，孩子們都在忙碌創作自己的作品，並勇於舉手發問，一點都不受觀課人員走動的影響，讓參訪團印象深刻。</p>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/PGHB9rzi67D8DjSrIl_IPGY0j8k5Sd6ti15dCn-embG8Tuk48DDTZ30hxBbzrU94rwzjDn3Hadx7nSXZsrQfC-WYbpIkQXH6cfmQG8jhJOY6xXrnIDXI1ahli_d0TbUgHvsfC78" width="549" height="411" /></p>
            <p dir="ltr">▲全造會名古屋小學校授課情況 五年級課程「木頭敲敲敲」</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/lwQXuM0ol66UUQrLeN1Zj0P_VHjNXdAiDlO4t2jyMDF-pKLJgE8tbCDa0JLTDE3CK_O5Vx0UJlI2aXJlUluVX_G0fJ5VY3OtlFGCbHOjeWy8mWrHVl9bGnFpyTfd8hN7a6wVYSw" width="549" height="411" /></p>
            <p dir="ltr">▲名古屋小學校授課情況 一年級課程「動物狂想曲」</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">此外，透過我國駐大阪辦事處的協助，參訪團也得以順利造訪位於京都的「同志社小學校」、「同志社中學校」，以及「嵯峨美術大學」。「同志社小學校」為重視學生適性發展及探索學習的私立小學，校舍為開放場域，教室與走廊如同和室的隔扇，可因使用需求彈性調整，學生們可自在地在各學習角落自我探索、發現問題與尋找答案。在明亮開放的校園空間中，由校長橫井和彥及教務主任田中雅裕引導，除參觀各班的上課樣貌，也巡禮教室內外所展示的學生作品。</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/Q9ycHnNnTp5NbfMKoOGeck75WkExL9-4CLD_QBUNjs4r7Yq5KNQVjHTr_NgMuRjDMBKVc48WeBUYa2aQrEzRRcV7SrKp5ZIwJrBNG2JegFVG1o1xQ5-aNNgmMbNL3ZZ29ZYkKDo" width="554" height="369" /></p>
            <p dir="ltr">▲臺北市立大學視覺藝術學系高震峰教授說明「同志社小學校」參訪重點</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/81DWwGEvB5t3ZUiy2YR39lx_RVaAGJiQ6pnMPqLiPYSLu3JWGTr-GxFlltg5ZgEY7MRUEfYEXaaJuKH2LkUZUUNtfLsDres1SZNxXy3TJVf8qjXouvy7aod-wmj5Uyls-_4B8Fs" width="554" height="369" /></p>
            <p dir="ltr">▲同志社小學校校方與美感教師們團體合照</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">「同志社中學校」雖位於同志社小學校隔壁，但各自獨立，由沼田和也老師引導，介紹在各科中所強調的跨領域學習方式，學生們分科跑班，透過沉浸式教學讓學生自主學習並發想研究主題，築構學習歷程。校方安排手作課程－「創造你的屋頂」，讓教師們思考如何運用一張紙的不同折法，探索美學與力學交會的各種可能性，以創作可乘載超過百倍重量的紙製屋頂。</p>
            <p dir="ltr">「嵯峨美術大學」由校長佐佐木政子及來自臺灣在該校任教的吳塵罡教授帶領參訪各系所課程。該校課程最早由花道開始，最終發展成現今日本最大的花道流派之一「嵯峨御流」。校方為讓參訪團體驗其創校精神，特別安排「花道體驗」，使用各式花材設計湖濱小景；過程中，參訪團藉由「體」與「用」的構圖美學以及身心靈平衡協調的多重感受，獲得了跨領域的美感體驗。</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/h6osexSKodq6R8Km-sCGsQctg8HEnmbfsGY1vFIqVpCvrKvqqeLcyCAJ2NqYm9C5kImdwwy8TppdfRgcMxrSOL7qAiwnyrmJFnvGFvTchkoGnx3mtNao4NPKrhmCH3pwzexA6ds" width="554" height="369" /></p>
            <p dir="ltr">▲嵯峨美術大學花道體驗</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">除前述綜覽日本各學習階段教學現場的行程外，參訪團規劃多場從美感教育帶入文化體驗的活動，包含和服、織布、湯豆腐、和果子、茶道等；透過體驗日本傳統文化的精髓，將美感化為無形，融於生活。國立苗栗高中黃琇苓教師感悟：「花，沒有生命，有，也是你賦予的。它是一種美，形而上的美。以花悟道，花不僅是花。茶，沒有生命，有，也是你賦予的。它是一種美，形而上的美。以茶悟道，茶不僅是茶」。</p>
            <p dir="ltr">來自全國中小學藝術與各學科以及執行美感計畫的教師們，透過本次日本美感跨域體驗之旅，帶著滿滿的收獲與感動，返國後將持續綻放能量，讓臺灣美感教育更加發光發熱。</p>
            <p style="text-align: center;"><br /><br /><br /></p>`,
          tab: ['參訪成果'],
          hashtag: ['日本', '國際', '參訪'],
          postid: '8885464521',
          pic: [
          ],
          video: [],
        },
        {
          pro: '美感教育出國計畫',
          firstpic: require('../assets/ARCHI/foreign/img03.png'),
          title: '美感教育工作教師赴泰國曼谷探索藝術融入生活之美',
          author: '',
          date: '2019/11/06',
          content: `<p dir="ltr"><img src="https://lh4.googleusercontent.com/Xxb_tl6gg_EifbsBYrCxLchjOKPaYHoBsFULWoKAzBF4MirIrxEmtB8lTtnOeLt1oEWTzsM_y2AoKz70IBXxU6dNNVjWTSY6ypA-zSSle3rasRFikPIJv9tIvDTL83t0o0BAO0k" alt="Screenshot (15)" width="560" height="422" /></p>
            <p dir="ltr">▲臺灣美感教育工作教師赴泰國進行美感教育之旅大合影</p>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr">由計畫協同主持人陳韻文副教授率領20位中小學教師，10月15至21日進行為期7天的泰國美感教育進修參訪。本次參訪特色學校包括「威爾斯國際學校」（Wells International School），創辦人張耀浪董事長是屏東潮州鎮人，分享學校的教育理念及辦學模式讓現場教師們非常好奇，彼此交換意見，互動熱絡；「泰國藝術大學附設實驗小學」（The Demonstration School of Silpakorn University）」，副校長維蘇德．波先生（Mr. Wisud Po）介紹該校運用「教師專業學習社群」（professional learning community，簡稱PLC）發展以藝術為基礎課程（Art-based），將藝術廣泛應用於各學科的學習，與臺灣跨領域美感課程有異曲同工之妙，他並表示歡迎未來雙方更深度的交流。</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/73Rr1Pi_Jqx3bMbFbwI4bRkpIOp2XHe8cOaMUvbgMC4LZZaOh71UM65FSdNO8AbS3xVKwheRj0ZOxW7CK-FcFgfiv9nfzWMZPoT5NCpwtw0IRzr4trQT_pcPTV3z2kCnPamO-gc" alt="Screenshot (16)" width="553" height="414" /></p>
            <p dir="ltr">▲威爾斯國際學校董事長與全體泰國進修參訪組成員合影</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/HM3owRYC12BrbNXduj8GD5HcIITPFJHeCbO4I9utPGd9L4esfZQIpLJsbit_gjEeXopLsTyIt9uPhmkYRocAkfYN4GEsv1SGQ7qyxJQH1F2SzSOf7C-Rr2AKCY_7amWLN88TJTE" alt="Screenshot (17)" width="557" height="419" /></p>
            <p dir="ltr">▲威爾斯國際學校藝術教師和臺灣教師交流對話</p>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr">另外，「詩納卡寧威洛大學附設實驗中學（Srinakharinwirot University Prasarnmit Demonstration School）為泰國的明星學校，校方特別介紹該校藝術教育發展有四大主軸，分別為視覺藝術、動畫、設計及數位媒體藝術，通過多元的學習內容及充沛的教學資源，讓學生挖掘出屬於自己的競爭力，也帶領教師們進入各類藝術教室觀摩，該校音樂教師分享一段泰國傳統樂器演奏，並致贈每人1支竹笛，以音樂跨國界交流。透過課堂觀摩泰國藝術教育，以及校方課程內容設計交流，給予參訪教師實質教學增能，加深加廣美感教育實施的多元樣貌，並藉由參與曼谷當地盛大藝文活動接觸和深入認識泰國的藝術、文化、創意產業與生活。</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/IxJ9UwT38ghxG15wS7hLmu3CeCM69tWQhzhLmTCsDnXWFrs4Ya394qLEPLo8nszRmsrxrKrI7Mi0Kl2IuxyWh6mUd-c0HLeGBrXHAmsEL82rA0fGp5-XaM5BdzNM9dYKIf805d8" alt="Screenshot (18)" width="558" height="420" /></p>
            <p dir="ltr">▲校方提供傳統樂器「手搖竹琴」讓成員體驗</p>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr">「曼谷國際表演藝術節」（Bangkok International Performing Art Meeting，簡稱BIPAM）為東南亞地區專業表演藝術平台，由陳韻文副教授代表與東南亞地區藝術工作者進行對話，引述美國教育哲學家梅克辛&middot;葛琳（Maxine Greene）曾說：「美感經驗引領我們通往新的觀看、聆聽、感覺和動作，是認知的、感受的、情感的、想像的整體發展，讓我們能夠了解自己的生命如何與周遭的世界有所關連。」正如人生並非總是輕盈美麗的，20世紀以來的藝術創作者或論者也早已擴延了美和藝術的定義，美感教育即使以邁向更好的人更好的社會為目標，其內涵、邊界或策略仍然有待我們持續探究。</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/-4SJUwNyDwIoTfHXtMHKTQBr2t5L7CCBR6dBPA42XLvpXjHMZxe3IXG3bJoHzTGiZgj9cgckG8biOZPlBGPGIUYC0h7L56iktIaJF1qTcZn1dsoQ-9s4A0735jym89YXRzxDXiU" alt="Screenshot (19)" width="557" height="417" /></p>
            <p dir="ltr">▲「曼谷國際表演藝術節」工作坊結束後，進修參訪組成員熱切討論</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/RWJa_1Zds5zGu3SKSaWFP3rbtDyK_lnzLT-MbOB_1pCxA5k9rE89_IrrsDbt91oq13YNEIsKIbXRucZcEw9RdeD_FsU86RGiT0XaMPv1YlTeEFss53tavAw7pkIujN5XsJ3FYSI" alt="Screenshot (20)" width="558" height="420" /></p>
            <p dir="ltr">▲「曼谷國際表演藝術節」陳韻文副教授與東南亞藝術工作者交流對話</p>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr">其它行程則涵蓋表演藝術、音樂、視覺藝術、建築設計等不同藝術類別，以及歷史文化景觀、當代藝術館舍和體驗工作坊等多元場域，兼容雅俗，揉合傳統與當代，強化教師之教學力及美感素養，並能應用於教學現場，是一趟收穫豐盛的學習之旅。</p>
            <p>&nbsp;</p>`,
          tab: ['參訪成果'],
          hashtag: ['泰國', '國際', '參訪'],
          postid: '885464521',
          pic: [
          ],
          video: [],
        },
        {
          pro: '跨領域美感教育卓越領航計畫',
          firstpic: require('../assets/ARCHI/foreign/img03.jpg'),
          title: '【108-1跨領域美感教育系列講座工作坊】中區場',
          author: '',
          date: '2019/12/13',
          content: `<p dir="ltr"><img src="https://lh4.googleusercontent.com/Pca9vEQaBS_Bf6yvVflObFTg3O332IusW1TpPSr9spsJApP05GlwljTff3HAfyg_MCbKTpi6erdEJZ_UdhbJagUxI4CRlVmK7fwsOXPJcMyPWo4lbSQZJorAAPF-2bL6yFCdNuE" width="554" height="277" /></p>
            <p dir="ltr">參與教師大合照</p>
            <p dir="ltr">12月13日中區場講座工作坊來到國立臺中教育大學舉辦，開場由計畫協同主持人同時也是地主學校人文學院莊敏仁院長歡迎老師們齊聚一堂認識跨領域美感教育。緊接著由計畫協同主持人臺北市立大學高震峰教授，解說課程模組的概念，並透過課程案例介紹，帶給大家對於跨域課程的理解和啟發。接著登場的是跨領域美感卓越亮點推廣講座，邀請到參加國外進修參訪泰國團的嘉義縣大林國小謝金能校長，從食、衣、住、行、文化、教育等面向，分享此行的見聞與心得；國立臺中教育大學施枝芳老師則分享本學期中區師培大學與種子學校交流互動的過程，勉勵老師們培養學生成為對日常生活有感的人。</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/9MaALTvpQAYusX2Tmg8OTgZPZeeNTJ3Bzbt2-MRLJaFx8Pul91OM5fjvDznTGEnJtC8T8ii5w2_A0om-X4ydFubC8_KsBuHWabYKWW7444urhJZVtG8rBT--QAssrZ7kAP6msJs" width="554" height="369" /></p>
            <p dir="ltr">【主持人致詞】莊敏仁院長/國立臺中教育大學</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/CXj6JX3mUl8SkdY4W0Lkh6jsNZA0hotEIetAHsRgJbeZr2vXiNdj2Q2Bqy1nqI98KsLyufYIiYkGxYwjMGPMsTQGeIDCJqzuOtpjjoWcD98pWhrpEovlyxDmGdWGM3DBjY7o5Ps" width="554" height="369" /></p>
            <p dir="ltr">【跨域美感課程模組應用實例】主講人：高震峰教授/臺北市立大學</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/ACEnLIPjbwSgZz2JPkiXwBzcy-6tfWOuIe3fa-7qlthKF6k5W-5KbYrNFPjyd-IAByPiC09HU_yQuTMP2QHO5N1x_ejGNVjGX6JvJ8W7NU4OZZ24pXvVrvoN5OiCe8Z245DEHNU" width="554" height="369" /></p>
            <p dir="ltr">【跨域美感卓越亮點推廣講座─國際參訪泰國團歸國教師分享 】主講人：謝金能校長/嘉義縣大林國小</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/ZRlrHMe38rPwWsOUKRNQvb7hZMmeBphdgxpSByiPfl3SODheSrKgU0F5jI6PYMoeFrRJjMQZdWJmrLgf2FMgvBkd8JkibkiE9n7neu23Yc-WBztvVDgSSSbUWSJbwbMPjmv9Ihk" width="554" height="311" /></p>
            <p dir="ltr">【跨域美感卓越亮點推廣講座─中區合作學校校際串聯 】主講人：施枝芳老師/國立臺中教育大學</p>
            <p dir="ltr">下午場邀請到彰化藝術高中梁嘉倫、柳皓中兩位老師，分享該校將音樂、美術、舞蹈班學生共同合作跨域演出的經驗，由一開始的不熟悉至今已完成3次大型演出，逐步結合數位編輯、動畫製作等課程，成果精彩令人印象深刻。壓軸課程是由臺中教育大學人文學院莊敏仁院長帶著全體老師，透過聆聽、念誦、唱歌、打節奏以及將音樂線條視覺化等方式，以多元感官感受「再別康橋」之美，在動人的音樂聲中結束一天的工作坊。</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/kj9INZVcSlJcb6fhQzBMIEfrJGHpJDeK5lIj40aF3BKcHZCV2VTStguT8IVfa8eb_YB0h_Z1LTlO6XMvopPUx1GeEcLzt0C-yPO6YQHhqr4v7lD-hGu1gZWQHF26szeuxkDmdBM" width="554" height="369" /></p>
            <p dir="ltr">【科技跨音樂美感教育增能講座】主講人：梁嘉倫老師/彰化縣立彰化藝術高中</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/cJ2XL0TDDV72aKaaDuqWrFchJcsw9300roF4p0zLQSpR3q0YewGojj3k7F-EAse1RyeBECVgLB9QiWEmt6Je6KmX4RfysAcZjHgX4MZ-T2ZgB5fXVhd2ayfi5P_y0OIDBtgW9_M" width="554" height="369" /></p>
            <p dir="ltr">【科技跨音樂美感教育增能講座】主講人：柳皓中老師/彰化縣立彰化藝術高中</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/s_uhG4Gg03KkEgowVhwHIp270mmt6gCjznQr6PYx7afRbkeH9HfDbrZ794h1LO_Ei3NbxTVQfuAccB7eFn0SpOnjI79vNeI4IFtt0Hr3G7Y-CbqX-q-pDUmKSf1O92yfu-LhdMM" width="554" height="415" /></p>
            <p dir="ltr">【音樂跨域美感增能工作坊】多元感官跨域美感&mdash;觸動心靈意象的「再別康橋」<br />主講人：莊敏仁院長/國立臺中教育大學</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/c3-jsLRMMnvW63o-OSw7kXBOJ-JnMmS9F6xSv5DFkd6gVX-Gvu-bFq4Y6WfBBf_M_m5pkGA1JZHCWf6gBmaE6zLfgymSkV4eUNenlsNyRv-ZlPCKkuZETYx3X6QFuEAioJkoxg8" width="554" height="415" /></p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/5TL_fNbfxdyZqu2OAJFI_4St5ZKRYUcXvhBAAXuTcneLo7E_GTbx44WsukSt3a4F_-AmIPncMP-fI5mPGYu2plWBWev5d7egBx9NhwTitokc6nHulKMWdbydTYBLXq7rlFjZTg0" width="554" height="369" /><img src="https://lh6.googleusercontent.com/hMcCZGYoMrd7EP-RB-HtlmPgCItIvFhpdn1T37b6nVn25SAXp520k5V-qcdAmrrGFRqrCZX3ZI4wC0qVVdY_KEuo-GyWgsmbqtZZtTYCj5UXGUcvmBPsmd3_ZPkR81tMjlzs16g" width="554" height="415" /></p>
            <p dir="ltr">【音樂跨域美感增能工作坊】過程紀錄</p>
            <p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><br /><br /></p>`,
          tab: ['工作坊成果'],
          hashtag: ['工作坊', '音樂', '跨領域'],
          postid: '885785468456',
          pic: [
          ],
          video: [],
        },
        {
          pro: '跨領域美感教育卓越領航計畫',
          firstpic: require('../assets/ARCHI/kua/img01.jpg'),
          title: '【108-1跨領域美感教育系列講座工作坊】北區場',
          author: '',
          date: '2019/12/06',
          content: `<p dir="ltr"><img src="https://lh4.googleusercontent.com/Vz1jUZmbIZY3AFqedIzNmbjgjsawzG520m3GUZTqGs4WPm0PBJetnLiqov9l2BC14S12FtTC0rlGp3RzTBl3WqrAqbIBAaG5NnekZI_PArRCXFn6zAnSFB62c6ybCVTUeEEbKzY" width="554" height="369" /></p>
            <p dir="ltr">【主持人致詞】黃純敏教授/國立臺灣師範大學</p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <p dir="ltr">12月6日北區場講座工作坊於國立臺灣師範大學舉辦，由計畫共同主持人黃純敏教授歡迎所有關心跨領域美感教育的夥伴在這濕冷的天氣中仍踴躍參加，並首先為大家解說課程模組的概念與課程案例之應用，以及介紹計畫陸續推出的課程小手冊，讓老師們得以更深入瞭解。接著登場的是跨領域美感卓越亮點推廣講座，邀請到國立澎湖科技大學鍾怡慧老師由師培大學的角度分享與種子學校合作的經驗，歡迎種子學校教師善加運用師培資源；臺中市立文華高中高嘉宏老師分享參與國外進修參訪荷蘭團之心得，由荷蘭的歷史、人文背景開場，分享參訪學校與參觀荷蘭設計週的所見所聞，精彩的內容持續到中午用餐時間。</p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/Ftx3zrXznhPQqZHGCyn7Ek7RKJ78xDcRP5baxXfoLxUIig3B-nv-MKhyQtm1cNI9jBEnw9Xno9Zf1byBe_Q5WxQvYwnc-36i5qkSl4BEi5N2w5u2r9uLtbpCyJAqZulW_8rhJ8U" width="554" height="369" /></p>
            <p dir="ltr">【跨域美感課程模組應用實例】主講人：黃純敏教授/國立臺灣師範大學</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/eZAiFRFjaeRiNP-Mx7969ya_lJwhMgYwIzj4KJqmPcDyaHnJVmeSyXNqlEBUGThO-m6rjLfXe_cEMEP20e2KpgyHW6Erix7vZlauL93oMCeO98Fv-S9pevpClXinkPkhIwKs5yc" width="554" height="369" /></p>
            <p dir="ltr">【跨域美感卓越亮點推廣講座 澎湖六校聯合】主講人：鍾怡慧老師/國立澎湖科技大學</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/x3Eb6emKxK48nJM0y1JPO_ls2eT-hUpJqY4V8NLAv2eg7YbNqpc7MChNv40Xa0eLIJ8gja0z_Oqw5RaFprZar0spHEYnEiIixndFKC6HxFUmBBPRLYj-SswfYJE53j-uFpQlsas" width="554" height="369" /></p>
            <p dir="ltr">【跨域美感卓越亮點推廣講座─國際參訪荷蘭團歸國教師分享】主講人：高嘉宏老師/臺中市立文華高中</p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <p dir="ltr">下午場由國立臺北教育大學謝佳叡老師主講數學跨域美感教育，以2020東京奧運宣傳影片為主軸，帶大家發現影片中隱藏的各種數學之美。最後一堂工作坊邀請到Sony數位教室人像攝影師莊粵盛老師，講解攝影的基本概念以及不同情境的拍攝技巧，最後帶領老師們走出教室到校園各角落實際練習，圓滿結束一天的講座工作坊。</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/uzsxYreyjbwDu3sFbD74mhMzZn5EMBr4e2JkvUBi1Z93gDMzbd7wCmH4wHWPyoW17trVvhIiUfrM3Vc3JKapxfCWijaQPTQldwW9e_X9u43EBr2UXw6azQOCveYt1C2LfEmEPIQ" width="554" height="369" /></p>
            <p dir="ltr">【數學跨域美感教育增能講座】主講人：謝佳叡老師/國立臺北教育大學</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/n08gOaLOP-Pkz3kzQK_J6Bh7A39Ho35FxzmJdkyALqRRJf5_xhW_maCjq05K4XEu8EQH1OeYQT-JcmsPDgTouwgZJoppCwdQwoG7BjO4EHO6sI2JIcGh8K5QeAAUrnIMxTUju7w" width="554" height="369" /></p>
            <p dir="ltr">【攝影與影像處理工作坊─攝影之美及基礎實作】主講人：莊粵盛老師/sony數位教室 人像攝影師</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/kais4QjDmpA1mn78OqZNKDzy08zjkwD5402mcfszd829RbTe3OIxoGe9MRgzI8Jg1bZRPpqzX4NGwL_cak1zaq0TulrChHMLzMg-enXlHrorPCbIHxe2T8XWrd4mqUGyoZnbYOY" width="554" height="369" /></p>
            <p dir="ltr">講座工作坊課程情況</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/MNLIKMnr_bKPylNumbfE_zbCw_ksxAqPdLzf4CLuu7uwIJcEgcLTXSx-L05jQA8Et-uIxAQAxrZ4WfcYJFM9P2-LXrnbSw1MxlqcdPcGPFEEj0LfjLDMuoQ9vhnNawH-egivdzs" width="554" height="369" /></p>
            <p dir="ltr">【攝影與影像處理工作坊─攝影之美及基礎實作】戶外練習</p>
            <p dir="ltr"><br /><br /></p>`,
          tab: ['工作坊成果'],
          hashtag: ['工作坊', '數學','攝影', '跨領域'],
          postid: '8853565468456',
          pic: [
          ],
          video: [],
        },
        {
          pro: '跨領域美感教育卓越領航計畫',
          firstpic: require('../assets/ARCHI/kua/img02.jpg'),
          title: '108-1跨領域美感教育系列講座工作坊】南區場',
          author: '',
          date: '2019/12/20',
          content: `<p dir="ltr"><img src="https://lh5.googleusercontent.com/LO0OFr739AgSpIi4ysxFMEKECqzTKsErEDGfCjkGtu6sNUOXL1W_OTNH-pSU2KQT5T3wAzHcoAQiJczlC60VwM1fXAczCA6_APelwx0f_mTfTdxMWSJOOkbBq2SWQCgqRMPhJE4" width="554" height="369" /></p>
            <p dir="ltr">參與教師大合照</p>
            <p dir="ltr">今年的壓軸講座工作坊於國立屏東大學舉辦，首先由國立臺灣藝術大學李其昌副教授歡迎種子學校教師遠道而來一同認識跨領域美感教育！上午場第一堂是由計畫協同主持人臺北市立大學高震峰教授，解說課程模組的概念，並透過課程案例介紹，讓學校教師對於跨域課程有更深的的理解和啟發。接著登場的是跨領域美感卓越亮點推廣講座，邀請到國立高雄師範大學蔡佩桂老師從過往執行的策展案例，分享與種子學校合作的過程以及當中包含的跨領域學習；國外進修參訪講座由苗栗縣信義國小鍾瑞蓉校長以參加日本團的經驗，鼓勵種子學校教師未來把握申請機會，拓展國際視野、落實美感教育。</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/5y5tQqVB_1D40DPs6fLpRrEI4r_gkqJYHDZaOdOZN3SCla9-XJN8790XhjVfDvlxJOvTMQB9-USpdok0FqIt5ecsbEs_O2-M__4L5Mhb07qf4FlGSs12wrknem7oUnhp6ElOrXo" width="554" height="369" /></p>
            <p dir="ltr">【主持人致詞】李其昌副教授/國立臺灣藝術大學</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/JtjVHgrEhCrHe0UZH57HACDUxHg3jvXFDfP2KXvBlV37VUOEcLEBupPJNE05pxAvNDT-NQ3vyeIRTrgmXA8x_QN7IE0Fhb4NsBtA30KtWRJFfEEHJItPFmng6FpaPDxifgEeq9A" width="554" height="369" /></p>
            <p dir="ltr">【跨域美感課程模組應用實例】主講人：高震峰教授/臺北市立大學</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/S9ADCIwhLZPSY_hU0YCRxAeFl7h8e9S33BoZIXt_xKMiz1BLJm5wo65QBSa2fPHQRteKBGyuVK126ZoWB64E140__LU5Mio_6qHlNCC0MLJ6czeUnkKe-lmCVZjZhrz7Ne5wM94" width="554" height="369" /></p>
            <p dir="ltr">【跨域美感卓越亮點推廣講座─師培合作學校校際串聯 】主講人：蔡佩桂老師/國立高雄師範大學</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/nYpju8c5GNm4N_22rDf73YNVae9ZZEyW8SkYVYreENJXRgMx6RHrgG_TDSfDG9ZmUnDq12KzOitiQp6wT3hVwJg6s_QjnUTk8EzAD1bmIep-Tsm6QBfCdsKFUwIyw1_Yb7i4XkA" width="554" height="369" /></p>
            <p dir="ltr">【跨域美感卓越亮點推廣講座─國際參訪日本團歸國教師分享 】主講人：鍾瑞蓉校長/苗栗縣信義國小</p>
            <p dir="ltr">下午場由國立屏東大學伍鴻沂教授從音樂的基本要素與帶給聽眾的感受力，介紹音樂在跨領域美感課程中的輕重與飛揚。壓軸表演藝術跨域美感增能工作坊，邀請到國立臺南大學王婉容老師帶領大家從互相分享至共同討論在地故事，最後透過戲劇創作呈現關於家鄉的記憶與反思。</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/qXgfYfkTYrmcs-K9sLERSi-9Fi_AepMFMZTcoJHQ2KCknkMgWznf2ehCFF0RFYMg30OXJUzPLd6eRVT2pGj41gkKKroPAqUcHo8l4kqDLJUexjBzPrjUpFWmbG59hhbieHWupA0" width="554" height="369" /></p>
            <p dir="ltr">【音樂跨域美感教育增能講座─音樂在跨領域美感課程中的輕重與飛揚 】主講人：伍鴻沂教授/國立屏東大學</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/56uPRV-xCHvIytcaYKHH2D6dYvDJT0x3BtuaFGMcmxwE5KgoXksUyczjFiTqLtXNKNb5qBcAR8AzMC5U2JshvkYZezxyNcDlyhjdLQ6adeq20b4Bx-Y6tEdFmqYLysaT6axWwHw" width="554" height="369" /></p>
            <p dir="ltr">【表演藝術跨域美感增能工作坊─以在地家鄉故事進行反思及記憶作為表演藝術創作教學的方法演練-以戲劇為例 】主講人：王婉容老師/國立臺南大學</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/k6MJUyK8YAdzY9R_AlqU6pP600pgP2JoExZO7a5JAZjvj87BnraxC2KjLioHg2DbYmmrAhinakwtgSAgv5Kp8fGAYDUaJr9INVnd1_QosClN2Mz8vjmwW8NeOMMg5TI6fqPdfLE" width="554" height="369" /><img src="https://lh3.googleusercontent.com/eT2hinGAFjaDCfsPs5zpEKPytS4egA5L1K5Cfy3t7YXrygmVIGbeBNoAxT9O6gpQ4HYCAQfAhOMf4eJ2f4X65UF0z1K1QHzWv7C-cM4bbCM43EibG2B7MPhSSRSFcPbCqgxpOGQ" width="554" height="369" /><img src="https://lh6.googleusercontent.com/3IC4kJkgHTZpw3MqxKEnZKy4HuKSqIWhoznvBvTNnHNU-3wlJbwGoOK8G8ZKV8Glbgo1r3AvvsKJdovN_EHpO8qaTgkSWUyh3N0kWNlcmwLJvJEuhsO2c-IuhtM3O5XASqRNX8U" width="554" height="369" /></p>
            <p dir="ltr">【表演藝術跨域美感增能工作坊】 過程紀錄</p>
            <p dir="ltr"><strong><br /><br /></strong> </p>`,
          tab: ['工作坊成果'],
          hashtag: ['工作坊', '音樂', '表演', '跨領域'],
          postid: '885545455455456',
          pic: [
          ],
          video: [],
        },
        {
          pro: '跨領域美感教育卓越領航計畫',
          firstpic: require('../assets/ARCHI/kua/img03.jpg'),
          title: '中區種子學校交流分享會',
          author: '',
          date: '2019/10/30',
          content: `<p dir="ltr"><img src="https://lh5.googleusercontent.com/x1-cUkdWcwqtMIsD-ml8YaVIL1cQFBM3QG4wWCcMYKzIrkhPVAseo_u1n1I51h2DbSk9gkSTvs4qBuJBjXMGaif7gKLU-pp4XCH8YjcgTkcfz1HWjygIGbqKlWJWtHtg4xpqMk4" width="554" height="415" /></p>
            <p dir="ltr">10月30日於國立臺中教育大學舉辦「中區種子學校交流分享會」，計畫協同主持人國立臺中教育大學人文學院莊敏仁院長邀請本計畫師培委員及諮詢委員，國立彰化師範大學張善貿教授、國立臺中教育大學語文教育學系施枝芳講師、國立臺中教育大學資訊工程學系孔崇旭教授，以及特別邀請國立臺中教育大學音樂學系主任許智惠教授與會，經由各校的課程分享及綜合討論，發掘跨域美感課程多元的樣貌。</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/uyvwgmF-MJN_gd1_X8sB32160Qooce8kTk3oWB63L_iLugHj_My9IeHxQpxALAccfEmfGoadF-7dc_TaD6lgO6vRqTHs9kni8z0FAK1OmmvHvX3BjwHvQubiLhJIEjVU1ohIHG0" width="554" height="415" /><img src="https://lh3.googleusercontent.com/KH_hS-y3ZtG5x8SVg9FeS77vTkuTdYQVem3DS8jpsQXlMBf0fHrRnqyGwpWmh8xBTBWvPfPkGRYofg91Oy18YEn1pFIdYQVUwJEw3AQn-VDQ5dPvxAUx_jWB4fIyZTkCrlSJbMU" width="554" height="415" /></p>
            <p dir="ltr">與會種子學校包含：臺中市、彰化縣、雲林縣及南投縣四個縣市共22校。臺中市潭陽國小張美智組長分享該校以藝術作品引導啟發學生閱讀理解；彰化縣文德國小李政穎校長分享該校以關懷生命為目的，以校園流浪狗豆豆為主角，設計LINE貼圖課程；雲林縣北港國中李明宗主任分享該校針對學生未來圖像規劃「即學活用、創意閱讀、自主探索、合作服務」四大主軸，建立教師共識開始設計課程；南投縣長福國小廖婉雯主任分享以素養導向的跨領域課程，指導學生認識自己、了解世界。各種子學校以充滿在地特色的課程主題，創造跨領域美感教育的新亮點！會議的最後由計畫協同主持人國立臺中教育大學人文學院莊敏仁院長及委員們給予各校鼓勵和建議，期許各校課程執行成果豐富！</p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <p dir="ltr">中區種子學校交流分享會<br />●日期：108年10月30日(三)13:30-16:30<br />●地點：臺中教育大學</p>
            <p dir="ltr"><strong><br /></strong> </p>`,
          tab: ['活動成果'],
          hashtag: ['課程', '分享', '多元', '美感'],
          postid: '8855653255456',
          pic: [
          ],
          video: [],
        },
        {
          pro: '跨領域美感教育卓越領航計畫',
          firstpic: require('../assets/ARCHI/kua/img04.jpg'),
          title: '臺東種子學校課程協作會議暨課程觀摩',
          author: '',
          date: '2019/10/24',
          content: `<p dir="ltr"><img src="https://lh5.googleusercontent.com/2oQpT0Ggco26jC5AjqZLGDeAEIHETSVfAf0MbB03mfc_-Ii1qWjpeZi6uhFyTRwcLEcAVQGTQV_94elDv4mXKyEycBt1Q1pchk2wO4YfM1bZBi4hw34aCwt-yZqqNNQRl_hpN3A" width="555" height="201" /></p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <p dir="ltr">10月24日於臺東縣馬蘭國小舉辦「臺東縣種子學校訪視會議」，由計畫協同主持人國立臺灣藝術大學李其昌副教授特別邀請合作師培大學國立臺東大學郭美女教教授、資源與休閒產業學系廖秋娥副教授、師資培育中心陳玉枝主任、音樂學系林岑陵助理教授，以及臺東和花蓮縣的種子學校校長、教師齊聚一堂，經由各校的課程分享及綜合討論，將跨域美感課程發展出更豐富、精彩的樣貌。</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/QvcIG4bs2Uo96Na1zAMmnbOXbcY2RTncXrXCqzrBHU-017WRTS8rGLb1kQSa_aDJq7udFMX6MU4jtKAeRNJeUHxLhYp4HGVBz-WmsJ6JD17Lx6W6CSYbx3O7sehDtgGx6uXSPAQ" width="549" height="412" /></p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/pviWOamrmYsaSL3lpLuoFDQuNhAwd5Cq-oLDpOGLi0fPTi1XCxUlk-aCQZYBdkGF__GNhFZ4ZkVCiXaUHuS7Nc_EsY0884sTLwOS3xRDAkAC5-01yobUe5o9wW-Md8ieOlqV1Ag" width="553" height="415" /></p>
            <p dir="ltr">會議開場由臺東縣政府教育處資訊暨終身教育科陳冠樺科長給予種子學校勉勵，強調文化與教育互相結合的可能性與重要性，透過地方和中央的資源整合，借重專家學者的專業輔導，期許各校課程執行成果豐碩。</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/gdxu7zpcBa095TOe3mdOtBPBNqXFXVzxwvml4Bw3CywV0UaZeuGYln1bsfbMu3oACy_CRoWkBHnR4lDK3ADX8uAmz9-FDrwVS1CPC89ToUkyxavyiMDexkeBi219eLCgxzF0KX8" width="559" height="419" /></p>
            <p dir="ltr">地主學校馬蘭國小，以「鐵人進行曲」為主題，將在地之光運動鐵人─楊傳廣的故事，透過劇本撰寫、皮影戲製作等課程，認識自身的人文環境，成為自己生命中的鐵人。該校並安排公開觀課，由美術老師帶領學生分組介紹手繪的楊傳廣故事分鏡圖，經由全班同學回饋和討論，互動熱絡的課堂令在場師長印象深刻。大坡國小以身處「稻米原鄉」的地方特色，將食農教育結合視覺藝術、音樂、語文、資訊和綜合活動課程，培養學生與土地的情感連結，將米文化發揚光大；新生國小發展出「漫遊音樂世界裡」課程，以跟著音樂探索奧地利出發，融入資訊、人文課程，將藝術涵養發揮在生活中實踐；三民國小則是規劃「手印狂想曲」課程，串聯語文和藝術領域，運用「五感法」帶領低年級學生深刻地感受童詩之美；臺東高中將各種在地議題，結合藝術領域的基本素養與社會文化的關切，將地理、歷史、國文、公民等學科鑲嵌其中，培養學生的思辨能力；而臺東專校高職部設計出「地景大富翁」系列課程，將美感教育分別融入家政科、機械科及室內空間設計科等課堂中，由美感行動凝聚集體記憶和對生活的感受力。此外，花蓮觀音國小亦分享該校長期教導烏克麗麗課程，結合英語口說和藝術領域，規畫英語音樂劇的演出。會議的最後由長期輔導臺東學校的郭美女教授及諮詢委員給予各校鼓勵和建議，期許各校發展出跨領域美感教育課程新亮點！</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/zn5Y5zpDcgJVitcKES2pftnnmAXRoVaUw4DtiCr01DFgLNkGzksXIbpRJJtbdjYx3qViHxWQ84qlVHQ-Q9hNTgSHud-AVkQcgCVCo8-y0ZZUnwdqfF3-2fS_rqOBNxAIx59RmqA" width="555" height="416" /></p>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr">臺東種子學校課程協作會議暨課程觀摩</p>
            <p dir="ltr">●日期：108年10月24日(四) 13:30-16:30</p>
            <p dir="ltr">●地點：臺東縣馬蘭國小</p>
            <p dir="ltr"><strong><br /></strong> </p>`,
          tab: ['活動成果'],
          hashtag: ['課程觀摩', '課程'],
          postid: '885565685465664256',
          pic: [
          ],
          video: [],
        },
        {
          pro: '跨領域美感教育卓越領航計畫',
          firstpic: require('../assets/ARCHI/kua/img05.jpg'),
          title: '澎湖種子學校課程協作會議暨課程觀摩',
          author: '',
          date: '2019/10/3-4',
          content: `<p dir="ltr">108-1澎湖種子學校課程協作會議於澎湖縣政府舉辦，由本計畫協同主持人國立臺灣藝術大學李其昌副教授及國立臺中教育大學莊敏仁教授特別邀請諮詢委員東方設計學院丘永福教授、國立澎湖科技大學鍾怡慧教授、洪國瑋教授、李佩芳教授及澎湖各種子學校校長、教師，並邀請到澎湖縣政府教育處處長蘇啟昌蒞臨指導，共同召開課程探討與研究會議。</p>
              <p dir="ltr"><img src="https://lh5.googleusercontent.com/SZePyUjRcz6FaVJlMkmb4AsBdunWxQBgSMgPLRGytWst-0vCT7At_YE1tjUtfQUrJwFar75oGwaBjQTNlDo5_BF_zWEzcsY9FD57G8AgST3ttG4W5c0mgiNTMAmN0z9452qP3B0" width="550" height="413" /></p>
              <p dir="ltr"><img src="https://lh5.googleusercontent.com/oBDAnGByAL9Ou0iduTJ2oY09oBeIF0b-Ogp90gaOeL77NIRRDxtujjU54ZbHwbgq42c5vGbqlsFrbw_ild9rcX1o1B9kAeDR4oJ2H4D_oxmDCPyK4XjzmwIbjeri3cPvlN0jhcI" width="553" height="414" /></p>
              <p dir="ltr"><img src="https://lh5.googleusercontent.com/GhoMUaPQC6mdbQ2ZppBXnf88eYlnjCru6xv_-dc4n5ZD_1YqSn3yUoTbncOcyrfdydcB7vpqcamggTXWiXCBhXIRPaKdwUAfdSeFk4tLrFy8I38CfAKCNPSXOIIWQEj7Z80Lxt4" width="555" height="416" /></p>
              <p dir="ltr">種子學校中正國小設計「工筆校園植物圖譜」課程結合自然與藝術領域；中興國小以皮影戲為主軸，將國語文領域與視覺藝術領域整合規劃「光影戲說－皮影戲趣中遊」課程，吉貝國小融入在地石滬特色及精工創作，發展「海神的項鍊－吉貝石滬」課程，成為極富澎湖特色之美感跨域課程；嵵裡國小則是透過表演戲術融入數學領域課程之方式，以「我的家族」及「分分秒秒要把握」課程，引導學生融會貫通數學知識，並提升美感知能；澎南國中強調12年國教「美感素養」中啟動學生內在經驗與對生活、環境之美感連結，規劃「『蓋』有意思」課程，引導學生透過實地踏查，探索社區生活之美，藉以提升學生對於公共領域的美感覺知；澎湖海事學校以在地「乞龜文化」為主題，結合食品烘焙和包裝行銷等課程，培養學生職人精神。</p>
              <p dir="ltr"><img src="https://lh5.googleusercontent.com/7jlVq2Ghp9p4nUmxYX0rPZBcm7TUzFyakCuf4CBoAFIrSAjcRrtBRtA0ycZRzW1bD7uujwsFDntozUSRKmxPluz-me7tKnUCCoagNfVXG9OwiO5PjC3nHHzxcKqQPimp2fSbpGg" width="545" height="340" /></p>
              <p dir="ltr">第二天計畫團隊來到國立澎湖高級海事水產職業學校觀摩跨域課程，郭盈君美術老師首先介紹澎湖傳統「乞龜文化」，引導餐飲科學生創意故事發想，從故事延伸至食品造型設計，學生對課程充滿興趣、專注投入。</p>
              <p dir="ltr"><img src="https://lh3.googleusercontent.com/O3HkisSuJRSB_GtYRMg072ijDA9IxXYHsU-0MIWIiLC6O3rNvYSjG7wnbDJehw26WqLSW2Fk2Wb4XJBK39950_BGp-BdTKY-6mF6XWJg0fNkLhw0QR1Nj0wzRPXrz-mkSMatR9s" width="554" height="415" /></p>
              <p dir="ltr">&mdash;&mdash;</p>
              <p dir="ltr">澎湖種子學校課程協作會議</p>
              <p dir="ltr">●日期：108年10月3日(四) 8:50-16:00</p>
              <p dir="ltr">●地點：澎湖縣政府第三會議室</p>
              <p dir="ltr">國立澎湖高級海事水產職業學校教學觀摩</p>
              <p dir="ltr">●日期：108年10月4日(五) 11:00-13:00</p>
              <p dir="ltr">●地點：國立澎湖高級海事水產職業學校</p>
              <p dir="ltr"><strong><br /></strong> </p>`,
          tab: ['活動成果'],
          hashtag: ['課程觀摩', '課程'],
          postid: '88556568545455456',
          pic: [
          ],
          video: [],
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../assets/ARCHI/yui/img01.jpg'),
          title: '【南】區幼兒戲劇教學社群活動─故事戲劇 I',
          author: '',
          date: '2019/10/19',
          content: `<p dir="ltr">社群學員分組分享戲劇在班級例行性活動中的實踐，且由國立嘉義大學附設實驗國小附設幼兒林彣娉園主任以《逃家小兔》故事為例，說明如何規劃初級與中級故事戲劇活動教案；最後再請國立臺南大學林玫君院長講述故事戲劇課程設計的原則，並帶領學員進行故事戲劇課程討論。</p>
            <p dir="ltr" style="text-align: center;"><img src="https://lh4.googleusercontent.com/OXcGMx0Tr79MdFEJBxwt_CxdlkPkoaLKQckr4h6Y71VQ-lOECLPOXyzhnFLiocmqY9LW03ndWJEPBxjygqnrWCzguVa7Uz-7zu0grm6hr6ap0ehX8B_WUTLAs26sr8VsvU-lut6S" width="405" height="304" /></p>
            <p dir="ltr" style="text-align: center;">&nbsp;逃家小兔：咦！洞裡有聲音耶！小兔子有沒有躲在山洞裡呢?</p>
            <p><strong>&nbsp;</strong></p>
            <div dir="ltr" align="center">
            <table style="width: 468pt;"><colgroup><col /><col /></colgroup>
            <tbody>
            <tr style="height: 0pt;">
            <td>
            <p dir="ltr" style="text-align: center;"><img src="https://lh3.googleusercontent.com/kPsLM6t2PVoZx6gXjUOBfPXzEx5dV8BiElw0EHIIQKYWWvPyRCl_NGWnCxZNgI7x5VTYtwAOQqHVSYHz9hXPAnKchtX-WAI9a6WGUOhNBK_AgthnQBXmhOnPDbGmYG66xflGX8t2" width="112" height="149" /></p>
            <p dir="ltr" style="text-align: center;">逃家小兔：原來小兔子躲進飲料杯了</p>
            </td>
            <td>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/rBbOldCKFHPIo3NP5K5m7wByqhOuvnrPuuXzgnfzub1TrYTkL2RNQwWHPswYGPtDM_EU0rjRxKW-X9F-Os_eKS_mt4NVB2O0gqskgGBrjqWzNsj-Po_qfLaxgJRkZNsoY2dMEyIN" width="198" height="149" /></p>
            <p dir="ltr" style="text-align: center;">逃家小兔：逃家小兔繪本欣賞&nbsp;</p>
            </td>
            </tr>
            <tr style="height: 0pt;">
            <td>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/V2UXmrcomkVoRMy4Zwl3FO7rCAC788j_Yj0Q4gSzN0ktXm4IGaQvN3VhtUzs4IkHKvOmhrwj_Nn75myCKlHhj6Sov11QWodplgV-QgMu4XSahg2ty8ozcdnCQ8oySi21WGrJkDKv" width="198" height="149" /></p>
            <p dir="ltr" style="text-align: center;">童謠戲劇活動分享&nbsp;</p>
            </td>
            <td>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/0Uq5J5kOv97d6I4JIxdrMvP8qpLA7CxuhUKv35qasNu_Ro5BWwTR7WzR6Mwsw7lyF2ZqNf4eEtszB1Kcjcp-v6NTEeEDtW5_1jzDlie7aj0OoWGqfNlOnUO44fI5BcSlfJcUurzH" width="198" height="149" /></p>
            <p dir="ltr" style="text-align: center;">童謠戲劇活動分享與討論</p>
            </td>
            </tr>
            </tbody>
            </table>
            </div>`,
          tab: ['活動成果'],
          hashtag: ['故事戲劇'],
          postid: '88556568643543555456',
          pic: [
          ],
          video: [],
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../assets/ARCHI/yui/img02.jpg'),
          title: '【南】區幼兒戲劇教學社群活動─當戲劇遇上節慶 I',
          author: '',
          date: '2019/11/16',
          content: `<p dir="ltr"><strong>&nbsp;</strong></p>
            <p dir="ltr">先由林純華、王君瑜教師分別以課程實例在地(春節)、西方節慶(聖誕節)帶領戲劇活動分享與實作;林倩如老師則向共學夥伴們分享運 用〈逃家小兔〉的轉化實踐經驗,再請國立臺南大學林玫君院長講解 並引導教師進行討論。&nbsp;</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/n6uzQSZcQJzjKVhL4bL9CI9J4R1yVSZoXlQ1vKGsEf6X6caAL-UnZziYA0PK7_gajxrol1OwcKfr7CKEv_DJKZL3KiHqjho25bV2esWoWmuLtsNNM2weiPt1HLZMyLIgJ1z4vwob" width="405" height="304" /></p>
            <p dir="ltr" style="text-align: center;">聖誕小精靈施展聖誕魔法，彩虹雲帶著大家到北極囉~&nbsp;</p>
            <p dir="ltr" style="text-align: center;"><strong>&nbsp;</strong></p>
            <div dir="ltr" align="left">
            <table style="width: 540px; margin-left: auto; margin-right: auto;"><colgroup><col /><col /></colgroup>
            <tbody>
            <tr style="height: 0pt;">
            <td style="width: 270.219px;">
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/CFNGkEJPStxww3eIcat9QoGt8P8LGAzQsChRJVzhxgCoqJzQ8Y7cGHSbK1zrQYd897l6XzxgGl2KWWWMJVJI2zoXxtW1dy2ap6JOR2QijvCnkgyGW8PrQt6H_uXX6gyIW1WjnDsu" width="198" height="149" /></p>
            </td>
            <td style="width: 241.219px;">
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/4ang9hMdoz742yW7GWSILyAHURVi-sXqBe3kGoCWnCe-C92AzPYnKqEBbRQpqUPYNbH4yPSgD08bWAfaIjiGXq1lVnNlaBb5rgAbckVc1oMzdpxFbP_0WPuF48-JBAVQV0wtQjrw" width="198" height="149" /></p>
            </td>
            </tr>
            <tr style="height: 0pt;">
            <td style="width: 270.219px;">
            <p dir="ltr" style="text-align: left;">小組靜像畫面：從過年的物件發想可能的場景，做出小組靜像畫面。鞭炮旁邊會有哪些人呢？&nbsp;</p>
            </td>
            <td style="width: 241.219px;">
            <p dir="ltr" style="text-align: left; padding-left: 20px">小組靜像畫面：貼春聯時除了人之外，旁邊還有哪些東西呢？<br />&nbsp;</p>
            </td>
            </tr>
            <tr style="height: 0pt;">
            <td style="width: 270.219px;">
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/j1COSH2TnUJSVgUJbPuH0O2WZWKXRgjAOxFARsFPxREYSwew0fA3c2RWlCM2Kz5IEx58ZecxspqELhIxf1I9yQhUXt6arVb9skUaejVnL9hr9U2eIhS2Y_z-Xv9ULzo8ZG7K_nEK" width="198" height="148" /></p>
            </td>
            <td style="width: 241.219px;">
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/1r-0A9nMeM4hYmn9QxRpee_rSPgSdscTizGbupS9V_3ZUwAZJpxpiO7t7XQc83StfAvW76iQ1WtRP3YAVoSMCgOTSrLr6boCej8Sv7nap_R6R-OA4Ax2Z5Puk861M_Ukd-wapE1o" width="198" height="149" /></p>
            </td>
            </tr>
            <tr style="height: 0pt;">
            <td style="width: 270.219px; >
            <p dir="ltr" style="text-align: left;">小組靜像畫面：過年會是誰發紅包？拿到紅包的心情又如何呢？&nbsp;</p>
            </td>
            <td style="width: 241.219px; padding-left: 20px">
            <p dir="ltr" style="text-align: left;">課後討論戲劇與節慶結合的方式！&nbsp;<br /><br /></p>
            </td>
            </tr>
            </tbody>
            </table>
            </div>`,
          tab: ['活動成果'],
          hashtag: ['戲劇', '節慶'],
          postid: '88556568654645555456',
          pic: [
          ],
          video: [],
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../assets/ARCHI/yui/img03.jpg'),
          title: '【南】區幼兒影像美感培力社群活動─幼兒與攝影',
          author: '',
          date: '2019/09/21',
          content: `<p dir="ltr">本次社群共學活動,謝欣君園長以幼兒攝影教學案例開場,接續介紹 相機的認識與使用、基礎攝影原理與實作,與影響照片的關鍵要素, 再帶領學員進行實作練習。</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/s6kndDBo5qZpfbk489MnVQFuWn1Y8D14bRctKsJGD8ZVQgoxE8tEeCQJYToDcMAjzKIuX1g7if9-bekqDoglYVFA_5ZzduWu8m4ZspdICk0swDVMpOeSVH3ctOyAo6W7JvSmhX6Z" width="405" height="304" /></p>
            <p dir="ltr" style="text-align: center;">你用的是哪種相機呢?各有什麼優缺點? 欣君老師逐一介紹各種相機適用情形。&nbsp;</p>
            <p dir="ltr" style="text-align: center;"><img src="https://lh4.googleusercontent.com/zrIrFVSp-qHb05B2vnO6cLvw75ABe_ooH3NkLktmUvj_cs0v9bOxx7BFeJHBdFbXSEK5ltZs89gfFXrDOWCWTbsvfcDcoUtLTQW7XeuswRNyOWop-faC9G4al34PoSnMqRi0edL3" width="418" height="278" /></p>
            <p dir="ltr" style="text-align: center;">你的相機是哪種測光方式，老師們動手找找看、測測看。&nbsp;</p>
            <p dir="ltr" style="text-align: center;"><img src="https://lh5.googleusercontent.com/GJcSB9STxyhMxQa72uq6SzEg5dQ2ogIICD5uHzSZHHqH9K33PY6XhL3jqVCpnPU0_O9cHGLholTBMVLmAqvA8Q44KgEX4qcor5SGaiizpZWuTNFtZrI-fueqX6o-HWd-krDJWl46" width="460" height="344" /></p>
            <p dir="ltr" style="text-align: center;">欣君老師分享帶領孩子探索相機的 教學緣起和歷程。&nbsp;</p>
            <p dir="ltr" style="text-align: center;"><img src="https://lh6.googleusercontent.com/QFjeA0Y8Qztcdm4bDIGqLVie5a-LEScsbWKdj_rmQV3ygwvHfzybcSC1ui1MAaEG44w5myrt5yRoa9cSubR7_cyYLENnLCll4wY6ueY1wgxbaXLdp1W-g1eMbB60bjq4lW8QQcja" width="473" height="315" /></p>
            <p dir="ltr" style="text-align: center;">孩子們的攝影作品，讓爸爸媽媽和老師們驚艷，也看見了孩子們的看見。&nbsp;</p>
            <p dir="ltr" style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr" style="text-align: center;"><img src="https://lh6.googleusercontent.com/INg74VZ0b2j56qGblUp2POKgb4x0tGNrppl5KnL9DVTJ0LO_FZ6EAAJNVMao0Xp4UgtNJmgzMXg6_Y2cnrqdIpm-zvm2SDz5NdwuSfELYrL_scdHQnwtuKqs7G1YkNZE0jmLA0Dv" width="443" height="332" /></p>
            <p dir="ltr" style="text-align: center;">相機的內部長什麼樣子？ <br />一起來看看微單眼相機的感光元件。&nbsp;</p>
            <p dir="ltr" style="text-align: center;"><strong><br /><br /></strong> </p>
            <p style="text-align: center;">&nbsp;</p>`,
          tab: ['活動成果'],
          hashtag: ['幼兒', '攝影'],
          postid: '88555345653653655456',
          pic: [
          ],
          video: [],
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../assets/ARCHI/yui/img04.jpg'),
          title: '【南】區從瑞吉歐課程看視覺藝術教學社群活動─從「色彩遊戲」看見自己',
          author: '',
          date: '2019/09/08',
          content: `<p dir="ltr">黃慧齡教師首先淺談義大利文化背景與瑞吉歐課程的關係，說明瑞吉歐精神中看見「自己」的重要性；再由美術專業的高玉娟教師引導大家從展現自己談藝術創作背後的精神性─其中包含理性的案例解析，與感性的材料素材之運用。</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/c2aUqaXyu_3BXi3uY9_ckBVKy0PwLbmqFo_bfcpF6YLrxw6zxkZ5MmbOg6iA9tHQCz3osL-N0CqfpnKTKGY-fkn92EdmmmcvDj7JUrHrgDG79vOvB3x2KPXjn6zDiuejxBZHjBNJ" width="624" height="699" /></p>
            <p dir="ltr">幼兒以多元的表徵方式進行自畫像創作，了解自己、欣賞自己！&nbsp;</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/nLbKWg7KCXSjwQWBRclbhJ6q5Us_DonOIc7SqvC4Qdr0FBhto9OqstHs0HNsqVPhoAy5N1lcTSgRSswzRigdzzkKakZ1oxR9yKzt0u78AKe9ilQwl3B4e9bbD2OyxMjCTlb6yXON" width="624" height="416" /></p>
            <p dir="ltr">用心看藝術─童年幻遊，創作中看見自己。注重動態生活中心靈之覺察，並進一步將感知加以表現，成為理性與感性兼具的藝術創作。&nbsp;</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/qOJ9n-96mdyG84J6ABBqZWmjXo3o4FG6GUbgn1yqNi_n6QQZjM7l0P9U1a_r5b1Vb9Arq2VjGHKGUbK8dIyxKG7wb8mCz3PEKUFRK9x8f0vZy5NT72BUAwS_Pc7RUaGU8XfLm5e4" width="624" height="468" /></p>
            <p dir="ltr">原來孩子真的有「一百種語言」， 跳脫框架、創造無限的可能！</p>
            <p dir="ltr">&nbsp;<img src="https://lh6.googleusercontent.com/CuxGE88cyNGAj8Q1vvCC27TWg-FOVMI2yn7qSFjt4A0Q2Z3gtSU8_hrrD9FXjuQ_XGQbgK-uFiGpNb2BcDRpEMvi1xTerQUekuoxQvggA7Z9A1reQBD6uGYE7ILIr3Qirk8d8T2F" width="624" height="468" /></p>
            <p dir="ltr">透過遊戲-拉近心跟心之間的距離&nbsp;</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/VClKELCAdtY3lwks3kGsHMY836iVO-WKM3OrixgisoAKFh46oIXAjpkI016S-CIXIO2b06tI1ElkYebSE7kS2neWvoh0O5fdZ6_F0GKdfPQLRSX0H08COlH4zOZX_359j1JYOfPy" width="624" height="468" /></p>
            <p dir="ltr">透過遊戲-拉近心跟心之間的距離&nbsp;</p>
            <p dir="ltr" style="text-align: center;"><strong><br /><br /><br /></strong> </p>
            <p style="text-align: center;">&nbsp;</p>`,
          tab: ['活動成果'],
          hashtag: ['色彩遊戲', '視覺藝術'],
          postid: '8855646545464565456',
          pic: [
          ],
          video: [],
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../assets/ARCHI/yui/img05.jpg'),
          title: '【南】區幼兒園美感環境再造社群活動─空間美學營造與特色學校發展',
          author: '',
          date: '2019/09/21',
          content: `<p dir="ltr">邀請國立臺中教育大學顏名宏副教授分享校園空間美感營造的經驗,，以其多年來投入校園美感環境再造的經驗，向社群的夥伴教師們分享幼兒園的空間營造如何透過在地環境與文化的連結，建構出具啟發性的循環系統，引導幼兒及教師自身透過參與、發現、對話、認同、學習、創意的過程。</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/TKOGbvbT9iCnWjzPAYwC_L3_M5Jd8_WgCJlKQdXIstisQeOOZg7tdIvtuIJNDkNeChytJmSa30tUuh-ZdFoAReP0sBh8pXJOqmLx8zKD5uYvGkAr5NleIQTd8IdfF8BpSM05jefG" width="624" height="468" /></p>
            <p dir="ltr">他指出，形塑師生共同談「美」的記憶發源地，創造停駐腳步的節點，讓幼兒從中親自體驗真實，進而使得校園成為師生與社區公共美學教育的平台，帶出校園美感環境教育的「感染力」與「影響力」，或許可作為教師們透過美感環境再造訴說校園故事的目標。&nbsp;</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/6Gk1PTFkbO3scgKtlXi39Hf-x6La22DPsATiC1P8GTf1nUCrQyx0cQCPMCtQhvDAW5IIyJPqCU9oOMSTzn-vb0Uw8oq7qJjsXwgb4TnHQkOfcd6hWrOgOqO6qI5uC7MnXxIvNN8o" width="624" height="468" /></p>
            <p dir="ltr">本次社群聚會主題分享，鼓勵教師們得以跳脫以往對幼兒園環境想像的窠臼，也藉此重新思考幼兒園空間再造應不只是機能性的提升，而需更貼近營造師生與校園環境及社區的互動關係，讓校園美感環境能夠「活」起來！&nbsp;</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/kz2vbqbZaI2fsgI2scIFBpyRdP2-MvmVoj8_e9az325Uan-WnjoYMHgcOgLR5_nKrenVzfvNu7zyk_X95hP5iZnJQEs-mxBj0OJCTPAGkT4jXB12NK79r2FXYMc-VZ2hKZZeyl5f" width="624" height="468" /></p>
            <p dir="ltr">我們對於幼兒遊憩空間的想像，經常連結到一座座五顏六色的溜滑梯或各種動漫角色所構築的彩繪牆面，而忽略了這些物件在環境中的填充堆疊，對於幼兒美感教育可能造成什麼樣的影響。&nbsp;</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/7RiIXFY2c1dNcvKC5UOM6wII9aSHvHFz80-C88O2jfDAxL9QtlqJqy-UQ6B4g9o7_0Kxj8xE6mqR3rjfTrdx-kHblx8CTPxkxUWnhBwZLLI4EWXoCEpIRI_NT4TRYfMiUm5bGdo6" width="624" height="468" /></p>
            <p dir="ltr">國立臺中教育大學的顏明宏副教授以其多年來投入校園美感環境再造的經驗，向社群的夥伴教師們分享幼兒園的空間營造如何透過在地環境與文化的連結，建構出具啟發性的循環系統，引導幼兒及教師自身透過參與、發現、對話、認同、學習、創意的過程。&nbsp;</p>
            <p dir="ltr" style="text-align: center;"><br /><br /></p>
            <p style="text-align: center;">&nbsp;</p>`,
          tab: ['活動成果'],
          hashtag: ['環境再造', '空間美學'],
          postid: '8855646545465453',
          pic: [
          ],
          video: [],
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../assets/ARCHI/yui/img06.jpg'),
          title: '【中】區美感情境營造社群活動─美的探索與感知 ',
          author: '',
          date: '2019/09/27',
          content: `<p dir="ltr">國立臺中教育大學林佳慧副教授透過社區及幼兒園影片及照片，觸發社群成員的美感，提升社群成員美的感知力，並從社群成員經驗分享，引導其思考幼兒如何感知生活環境中美的策略與作法。&nbsp;</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/0eY73hNfbD5pVFGrT9flo3RlTC-PDjqI42cgYKg-51c0sTS5ole0yOKNbI-teb_HL6VrnBFhBKCfJIG0LxzZdKBdpvIgnbSrUzVCSTW5YSSyqN3qDyWe7Z24HDcakqvkb6tGcGGT" width="624" height="468" /></p>
            <p dir="ltr">從教室中的美感開始做起，考慮環境美學的原則與元素，並試著帶入具體的感官體驗，觀察幼兒的行為轉變並持續修正~讓學習空間更具創意吧！&nbsp;</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/Jb18eZ-31Y5eZzPRGqh5LegxtMzgSOrPd0qzvxxo0-EFo57b0B3bwptzzPt85kBE_ie_5wKFtxUR4zfoovKN6j-WCQY2YdjzCLCnV9rNTEPRquIhS5b2dOB14qnJlaXB6cvt6Slw" width="624" height="468" /></p>
            <p dir="ltr">一個好的學習環境中應該包含哪些元素？佳慧老師建議大家或許可以從教育的學理、美學的觀點、開放的理念、生態的觀念、安全(健康的觀念)幾個部份去思考。</p>
            <p dir="ltr" style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/Ey-VT0xzsZnU4izTM6-6pFH1LRanOHNB-AFpKkJm7_bUQWRCdy4i3LzlSh-XMJkoIDH1n10hyT_jYzOcGFDcO83E1srkd53rTfRB0_SvbecWDoFQAUTDA8KCnF-kVBLvhhytRoui" width="624" height="351" /></p>
            <p dir="ltr">我們可以從環境開始落實美感教育，鼓勵幼兒探索與學習，並建立自己與週圍環境的情感連結 。</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/fgldI9D9o8gFs-dEIGVfThQyt7tbQl4KvaFV8PDAOvP-Hx7Cd2HS76sU3AOwS5sYLKI-oLTrpZqxZn7BVzoagvTgtpSHAXbveg7R_NVFK6EnNF5347S8zu-QtoEoJ60cpQHxIlDH" width="624" height="468" /></p>
            <p dir="ltr">佳慧老師首先向大家說明何謂「美感」及其內涵的轉變。</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/smknVF_v5BR7GtaIRqA-hXrmAkaBD_RAEraZl4YNBARQkJcLSmJj9h246xh1R18pqMByrMmEcEgn-r0devsB3aJsoCA4pwUD5UxZByTHxzdhYEPh8Fowjky9b5XiU5x0RjnYKfvv" width="624" height="468" /></p>
            <p dir="ltr">透過幾個園所環境的美感案例，佳慧老師向大家說明學習環境如何影響幼兒的學習行為。</p>
            <p dir="ltr" style="text-align: center;"><br /><br /></p>
            <p style="text-align: center;">&nbsp;</p>`,
          tab: ['活動成果'],
          hashtag: ['美的探所', '美感情境'],
          postid: '88554658465453',
          pic: [
          ],
          video: [],
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../assets/ARCHI/yui/img07.jpg'),
          title: '【中】區幼兒戲劇教學社群活動─扮演區的戲劇遊戲與想像',
          author: '',
          date: '2019/08/30',
          content: `<p dir="ltr">許多園所的學習區中都設置有扮演區，但我們究竟能夠如何引導幼兒「扮演」呢？朝陽科技大學吳鷰儀助理教授首先帶領社群學員覺察幼兒遊戲中的戲劇元素，提升社群學員對於幼兒戲劇遊戲力與想像力的感知能力，再與學員一同列出扮演區觀察要點並進行討論。&nbsp;</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/tGYAglF85W9pAY4qqpteer_EnlJ1zDwYISVcKBOFbJNhDxNrQd0gNrgWK8A-bvfjC8OzoLSZoiguflCauziVkwRURsaPR3L77lC4qktfNDx0IlEVvGq9TeR52TpN2zfczwRh6Yq-" width="624" height="468" /></p>
            <p dir="ltr">鷰儀老師先請大家將自己帶來的玩具進行分類。&nbsp;</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/95bWsBlgnxmczMRd64djMOMi-4d8Vj_UUTiaGF2gjFff-bhy37_2S497bqf9ps9ky7X9RYwgHdrXBwERJ6OfY7nt5mllKHdX5eUQXV3rUuw_qqokSs5zCgREPrHhcH2dKLHCltqc" width="624" height="468" /></p>
            <p dir="ltr">第一堂課程的開始，首先由以凱老師向大家說明社群相關行政規範。&nbsp;</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/3e6tawQ0896X2U7R2uoRVAE7AHaRTrY1W_Q0cxfcWBjNXnDNEj6HICyQ-JHiT-1N6Za8pNOstbM3QARDwjLobW0y25KjhqZomNrtmry74EAcbF43Ih6sDCREV6huaZd75Pyxgd6H" width="624" height="416" /></p>
            <p dir="ltr">來演戲囉！ 我們用各種玩具組合進行情境布置~&nbsp;</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/2VZa0LD4431xEj3MhnIlrdb7rA7A-M-_6_ZYpa1nyXXpNEjkBo_sut_vOZhs907hu6KEIg8YYBbl5lmt2qgzGLpXimSbfMhKsYmQ4S7oWujBa13GRe1oNvDpeE7wb3YAHbxscafT" width="624" height="468" /></p>
            <p dir="ltr">玩具接龍開始！大家將玩具依相關 特徵排列，接龍說故事~&nbsp;</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/nLeyyTeIFrkn3MU7OduVZQDs19Xvcp0jqfoENFUmCFZcrfVN2s2LJqQip_1sJ828wT8oJv-yQHGrSOmb2tifI8h40Np_ZjxAU6491C3lJE_0OF7Ta6AUkY7eN5Rbrsbi7peICNrs" width="624" height="468" /></p>
            <p dir="ltr">分享幾本閱讀書籍~遊戲童年、 遊戲是孩子的功課、壞人沒有生日。</p>
            <p dir="ltr" style="text-align: center;"><br /><br /></p>
            <p style="text-align: center;">&nbsp;</p>`,
          tab: ['活動成果'],
          hashtag: ['戲劇教學', '遊戲'],
          postid: '665454465453',
          pic: [
          ],
          video: [],
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../assets/ARCHI/yui/img08.jpg'),
          title: '【北】區幼兒園餐桌美學社群活動─餐飲色彩與餐飲創意色彩',
          author: '',
          date: '2019/09/21',
          content: `<p dir="ltr">本次餐桌美學社群的聚會，邀請擁有設計專業的楊時昕老師，引導學員透過食物認識美感顏色、紋理、造型等元素，並鼓勵大家返回園所師生共構進行教學轉化與應用─拍下食物的顏色在例行活動的應用，並引導幼兒在美勞區利用黏土或鬆散素材進行創作。&nbsp;</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/pIdlgPAvXhcPbBfoAp9C7sPpAKlZogdSOvUhhbf7dKtHz_YsFMLmxObxwZi8tCNHNZbg3PLLXgty3kthw7nUcC08HYv8bL7LgS8luX6s08mOZI5f8LFxVWtb_u5VYZga9oAsghBO" width="624" height="468" /></p>
            <p dir="ltr">成員分組，利用各項食材的顏色、質地、線條等，進行創作。</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/HYI2qGcRDYT4MbSSCayYgscv59MctjY0ERurhyfquupxjGV0nzPubg7xsKyseh5KFXK30HC8jHpS5mJG5yDaD5zER4MZBazS0zb3zZBw0WIJMc4d36IwgG0ky0VZBqDxkA0RpD-b" width="624" height="468" /></p>
            <p dir="ltr">小組討論與分享─透過學習單來思考如何將今日所學實際運用至幼兒園例行性活動、主題學習區及環境美學中。</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/Hx6zcP_deYISuLceMIRLVmpxm650h7BZbNp_htNe-gJZoq8ukjQM4tjzmGNJANHdPe9dgJeIXYXDfllOYWelUwhJqr1lkvs_C94GcPxlXGBJldn-GPPpM7QKvH8og4wCMwibORvp" width="624" height="468" /></p>
            <p dir="ltr">分享─各組分享作品的成果及創作的想法。&nbsp;</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/shH5eic4Kbilv-eld0EeuBSWbfqw5qlJxWCONg6UzTuM24UFjF1nbENzNr8OCW-U9IA--I2kqPkiGP-0Kb8N8mZ0ExSjrOFlBh6QoNZipsJYYvQzNkq5jx_XUnsR8euxFw3w3gXb" width="624" height="468" /></p>
            <p dir="ltr">講師利用 Blendoku 手機 APP， 讓成員實際挑戰對色彩的敏銳度。</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/WRRMDkjpGgen12bCAKKJdpR1k2pWGE09wKfDwJ2SOwhrWS4W9w32SAAl7vzUYaPd_Ov9Zt7oaTWFp9OdhM_wIPQnHyc-88Dk4UM-hHqbGbOcAqwehjzSLBx5_adqqJk6je9xTXgQ" width="624" height="832" /></p>
            <p dir="ltr">作品─各組完成具巧思的精彩美感作品。</p>
            <p dir="ltr" style="text-align: center;"><strong><br /><br /></strong> </p>
            <p style="text-align: center;">&nbsp;</p>`,
          tab: ['活動成果'],
          hashtag: ['餐飲色彩', '創意'],
          postid: '66545564564543',
          pic: [
          ],
          video: [],
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../assets/ARCHI/yui/img09.jpg'),
          title: '【北】區運用鬆散素材於美感教育社群活動─鬆散素材運用於視覺藝術',
          author: '',
          date: '2019/09/21',
          content: `<p dir="ltr">本次社群共學活動邀請明新科技大學陳麗媜副教授分享，首先說明鬆散素材運用於視覺藝術的基礎概念，包含美感要素、鬆散素材之特性（形狀、顏色、線條、質感等）、視覺藝術作品類型（平面創作、立體創作）、美勞區之鬆素材與運用等。接著，社群夥伴們一起進行體驗活動美勞區鬆散素材之創作，最後再由各組針對鬆散素材運用於視覺藝術之規劃進行分享與討論。&nbsp;</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/TazekZ8kSlfuj1lNcpP9K7CPnEQCrfuhja4DTECWBtfp39Pg4BqydxPuPqmcpXuzELhNYL3eyUXoGnTtz-J5zZlJzxes3PxEBT_pwdM_4rK9MG9X3ZetYW-QpwkM8vdMPqEwZSYH" width="624" height="303" /></p>
            <p dir="ltr">其實創造鬆散環境並不難，它就在我們的起心動念間。&nbsp;</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/yvfDC1EN_yhX6f7kRTg85dLZj6rEZhC962ngkNT6rwoiqQZ0pqJQDXItBbBiXeeGfL6T-Z7pJH1iogjdwLrKvsIbAutOVx1-Y1BiDHFRJRwWzCsL29pr_MRRHrc8Htsi-G2QjiaF" width="624" height="303" /></p>
            <p dir="ltr">平日隨手可得的物品，會有多少的可能？&nbsp;</p>
            <p dir="ltr">明新科大幼保系陳麗媜教授透過課程活動，讓學員體會：它有無限的可能！&nbsp;</p>
            <p dir="ltr" style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/ZuuTqdg-NfnlzzCV0orlW0HGp1FAmfqfO9svoVfWCzHaoDfIooQK49osvn_HFg1bJVCdPH_nGWKAxP_0Aj6ly3WPwWTiQgganG27v9Es8cJNQV676Vc23DL9TEvtsIjqhjKWVPKx" width="622" height="1280" /></p>
            <p dir="ltr">分組實作&nbsp;</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/25bboi53F1HWeNVUr7DzB0og0aDNTQjQg5skFjHv2NrML3vlRSkoIHRl3Kcns0G-5kA7z8xnf_GBANdf45qGvJxdeiQ1FroQkAsMICmsHN-vhJ4tDd2hs6Ou-D9PrMmB7YdV4OAr" width="622" height="1280" /></p>
            <p dir="ltr">集結各式能自由移動、設計、多元創造、實踐的自然或人工物，學員們重返童心，運發揮巧思將樹枝、果實、花朵、釦子、吸管、瓶蓋等鬆散素材，變身為機器人、恐龍世界、小花園等造型或造景。&nbsp;</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/lRViIHirKync7EPhCFvM6NjqIXc4nxhHzorUOegcKgw_Re_aym2u2t5dN8Uy20hVIZl2KVNBd7px5z0YuSoMFSyA1bGQyaKJLBvrsgiZx-QCO-yabDcMcqBZ5VVmdNnEHj-JmO5d" width="622" height="1280" /></p>
            <p dir="ltr">分組實作&nbsp;</p>
            <p dir="ltr" style="text-align: center;"><br /><br /></p>
            <p style="text-align: center;">&nbsp;</p>`,
          tab: ['活動成果'],
          hashtag: ['鬆散素材', '視覺藝術'],
          postid: '66545656564543',
          pic: [
          ],
          video: [],
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../assets/ARCHI/yui/img10.jpg'),
          title: '【東】區園藝植物營造幼兒園美感環境社群活動─園藝美學',
          author: '',
          date: '2019/09/28',
          content: `<p dir="ltr">由黎惠梅教師帶著學員進行香草植物的五感體驗與校園植物的探索與認識─聞一聞常見的香草植物、泡一壺淡雅的香草茶、說說香草茶中有什麼樣的味道等，且讓大家親手嘗試用不死配方土種出自己的小盆栽、自己動手做水苔球，再運用乾燥後的香草自製香草藥槌等。&nbsp;</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/i1jilKX3PgT95AcOFnQzohw1lawimjW5vTzp1KyHnEQZEsonxjMFUGWvt9jhiRp7wY5ZvbIA5fTCxTXOulGZnu6L1acN_yTR3ojyy_811YYWKAdRGD8Wxd5c1MddvqmDrC_1r4qB" width="624" height="468" /></p>
            <p dir="ltr">記得照顧別人前，先照顧好自己唷！&nbsp;</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/jo62WHEiR2ne-oXseZZqBCC0Zaj4NluVAYerN2aGqWGRBbuHzhIk6_n29CP32mkJwKS8dmwb4EJtbaOfWXB-vmkxHtYHFh9AGSpnoBbmfeSyqC06VPYAcJd5s92vqUvMlJ67P8ly" width="624" height="468" /></p>
            <p dir="ltr">社群帶領人施淑娟教授介紹今日課程講師黎惠梅老師。</p>
            <p dir="ltr" style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/k3wqC5cHEw-a-_GD6my88PKOdXFGzY7WRO2kZng2hyGRye2WglicnIvZcKtu7q2ikgvTu4vqzetahoiu7CjPmCwwJoE2M7_hAJJRkXrz8-MskoG_lVxYkH0gmEV_Z-Jky413-40s" width="624" height="468" /></p>
            <p dir="ltr">認識乾燥的各種香草。</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/juQfuS86PwJYuyoD-3fuhq3fOiXeBDjUBgC52zgllbc4nT7z_1LZrYPAV30qMptYb4_-a86ZBgMCfsqw_ilJ0S1UhxoYu3qm-cegaqH0CPbEgoeUmwrI8TGtH3zNmmuUEZe5Ez_A" width="624" height="468" /></p>
            <p dir="ltr">一層小石頭一層土，大家來換盆！&nbsp;</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/CunsldlEAruOu-2Nk8rE8ZX9ZckxESN0DRsbyRTZsJe21JSIQ7Mq2t81qVHlC0FOxIfj-3lJvDo2L8TepjyMa3AX8ENj2bNB3t1Xi_svB4GQvEJyyH2tJE2SUSwMsYIb1KJHm-OY" width="624" height="468" /></p>
            <p dir="ltr">水苔球重要的塑型時刻。</p>
            <p dir="ltr" style="text-align: center;"><br /><br /></p>
            <p style="text-align: center;">&nbsp;</p>`,
          tab: ['活動成果'],
          hashtag: ['園藝美學', '幼兒園美感'],
          postid: '665456464564543',
          pic: [
          ],
          video: [],
        },
        {
          pro: '美感與設計創新計畫',
          firstpic: require('../assets/ARCHI/meichiao/img01.jpg'),
          title: '教育部美感教育計畫 5年觸及11萬國高中生',
          author: '',
          date: '2019/12',
          content: `<p dir="ltr">教育部108學年啟動第二期「美感教育計畫」，最近辦理「美感教育教師增能工作坊」，全國200位國高中種子教師大集合，藉此增進教學與課程研發創新思維，進而實踐於教學最前線，據統計，至今已累計700多名教師投入開發超過4500小時的美感課程，觸及超過11萬人次的國高中生。</h3>
            <p dir="ltr">為了讓美感從小扎根，教育部103學年啟動「美感教育計畫」，第一期從103學年到107學年，108學年進入第二期，著重生活潛移默化，由教師帶領學生探索、體驗「生活美感」，增進對生活周遭的理解與審美判斷力。</p>
            <p dir="ltr">教育部12日、13日辦理「教師增能工作坊」，200名種子教師參與，實地參訪臺北機廠鐵道博物館，邀請多名專業藝術家、設計師一同思辨美感教育的價值。</p>
            <p dir="ltr">美感教育著重跨領域、打破學科藩籬，不只是藝術教師參與。工作坊中分享的課程案例，包括結合校園空間、南島文化、著作權、專利制度等的探討，運用多元教學方式，創造不同領域的激盪與對話。</p>
            <p dir="ltr">教育部指出，美感教育推動至今，合作教師已超過700名，共同開發了超過4500小時的美感課程，觸及超過11萬人次的國高中生，協助下一代公民成為生活中的觀察者，具備美感和創造力，開創「樂善好美」的社會。</p>
            <p dir="ltr">&nbsp;<img src="https://lh5.googleusercontent.com/t6AMZWoWX66O0x1DEmmbQnUm_0stjc3NH2rU4DY4Mt83jEAbK1QsSk9bflbOWE4b2_77_178KA5q6fMfRP59py00Ps0_SquUNUTaImG1Hl93Ln__bxH93kOCbjaODH-ZZnfihP0" width="838" height="450" /></p>
            <p dir="ltr">&nbsp;<img src="https://lh6.googleusercontent.com/fiIZbdOmJp28SGYeRvbNKwHqOyd-B7j8N_B162cw0yHOtWu30BMxV4mJ8vWeAFF9CoVW1d5dwg1p7wMfLdm13tjIO66xFGoaWWxxNLTKpTMT-xbXs_J4ApEwVX5QfCMnfy4QxOM" width="843" height="450" /></p>
            <p dir="ltr" style="text-align: center;"><br /><br /></p>
            <p style="text-align: center;">&nbsp;</p>`,
          tab: ['綜合成果'],
          hashtag: ['美感教育計畫', '國高中生', '11萬'],
          postid: '6654546845543',
          pic: [
          ],
          video: [],
        },
        {
          pro: '美感與設計創新計畫',
          firstpic: require('../assets/ARCHI/meichiao/img02.jpg'),
          title: '第三、四期《美感練習誌》發行',
          author: '',
          date: '2019/12',
          content: `<p dir="ltr">第三、四期《美感練習誌》將會同時發行！兩期完整地整理國際論壇中多位主講者的分享精華，分別從課程整合、跨域角色、空間體驗、設計創新等面向，對應以遍佈臺灣各地的美感教育課程精選教案。</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/0t87yYKVsB5PjOQb54EiXH4Mp5Y84dumdW-ahocGF6Ygy4nnGtqLHFcguIYfpXyI6Sc8e9hQKkxL4HM8b8BDeOuYz6yTZmGu4reKWX4Y8qbb_nsBm8D74ycgLDJHrg" width="849" height="550" /></p>
            <p dir="ltr" style="text-align: center;"><br /><br /></p>
            <p style="text-align: center;">&nbsp;</p>`,
          tab: ['出版'],
          hashtag: ['美感練習誌'],
          postid: '6657486455543',
          pic: [
          ],
          video: [],
        },
        {
          pro: '學美．美學-校園美感設計實踐計畫',
          firstpic: require('../assets/proimg/shue/home.png'),
          title: '學美．美學｜首支預告片',
          author: '',
          date: '',
          content: `<p dir="ltr">【設計，將讓校園更美好】<br />跟著「學美．美學」首支預告片一起走訪全台9間學校，發現學校應該可以更美的角落，一起提出解決方案。</p>`,
          tab: ['影音成果'],
          hashtag: ['預告片'],
          postid: '658486468443',
          pic: [
          ],
          video: '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesign.movement.on.campus%2Fvideos%2F727145671074627%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
        },
        {
          pro: '學美．美學-校園美感設計實踐計畫',
          firstpic: require('../assets/ARCHI/shue/img01.jpg'),
          title: '學美．美學｜改造司令台—雲林縣山峰華德福國民小學',
          author: '',
          date: '',
          content: `<p dir="ltr">傳統校園裡都有的司令台和操場，在許多的學校積極走出威權教育方式的現今成為了尷尬的存在。負責改造的無有設計將山峰華德福國小閒置的司令台，以在學校附近棲息的大冠鷲為意象，加裝了可伸縮的帆布翅膀擴大遮陽的面積，並結合攀岩牆、斜坡和拉簾的設計，讓司令台變身成為可供學生休憩、玩樂以及學校辦戶外教學的場所。</p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <div dir="ltr" align="left">
            <table><colgroup><col width="284" /><col width="274" /></colgroup>
            <tbody>
            <tr style="height: 15pt;">
            <td>
            <p dir="ltr">改造前</p>
            </td>
            <td>
            <p dir="ltr">改造後</p>
            </td>
            </tr>
            <tr style="height: 297.3pt;">
            <td><br /><img src="https://docs.google.com/drawings/u/0/d/sWYVREDoUPvmjgCzo-lzC6g/image?w=279&amp;h=393&amp;rev=1&amp;ac=1&amp;parent=1j_fRJWQgpsqbQim1qBVs26YpbiDyqh7Q" width="279" height="393" /></td>
            <td><br /><img src="https://docs.google.com/drawings/u/0/d/sJzKTV8HYF11eyEkb0rKIqQ/image?w=273&amp;h=394&amp;rev=1&amp;ac=1&amp;parent=1j_fRJWQgpsqbQim1qBVs26YpbiDyqh7Q" width="273" height="394" /></td>
            </tr>
            </tbody>
            </table>
            </div>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr"><br /><br /></p>`,
          tab: ['影音成果'],
          hashtag: ['司令台', '改造'],
          postid: '6584656845454553',
          pic: [
          ],
          video: '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesign.movement.on.campus%2Fvideos%2F502253137055577%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
        },
        {
          pro: '學美．美學-校園美感設計實踐計畫',
          firstpic: require('../assets/ARCHI/shue/img02.jpg'),
          title: '學美．美學｜改造教室—新北市北港國民小學',
          author: '',
          date: '',
          content: `<p dir="ltr">北港國小的每間教室後方都有一間「教室準備室」，早期是用來存放教具的空間。然而在課程e化的時代，這樣的需求已不復存在。原本的空間多被當成倉庫堆放雜物，不但是空間上的浪費，也讓教室環境顯得雜亂。另外，準備室下方的老舊抽屜的深度太深，更是不符合使用需求。負責改造的共序工事首先打破傳統教室的格局，將黑板的範圍擴張到教室前後的整個牆面，並以可移動式的櫃體取代舊抽屜；再來將準備室轉變成孩子的舞台與祕密基地，改造後的教室除了更寬敞、明亮以外，活用的空間更猶如百變金剛一般，能因應不同課程由師生自行變換模式。</p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <div dir="ltr" align="left">
            <table><colgroup><col width="284" /><col width="274" /></colgroup>
            <tbody>
            <tr style="height: 15pt;">
            <td>
            <p dir="ltr">改造前</p>
            </td>
            <td>
            <p dir="ltr">改造後</p>
            </td>
            </tr>
            <tr style="height: 301.85pt;">
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/sw3qLTzaXkKalhCa3-HQqOA/image?w=279&amp;h=399&amp;rev=1&amp;ac=1&amp;parent=1cjP4XEk27ceFfvKUUycUhV0FXV3QWjx7" width="279" height="399" /></td>
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/sIPt4mGSWZZD0e3B-ZLLebw/image?w=271&amp;h=399&amp;rev=1&amp;ac=1&amp;parent=1cjP4XEk27ceFfvKUUycUhV0FXV3QWjx7" width="271" height="399" /></td>
            </tr>
            </tbody>
            </table>
            </div>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr"><br /><br /></p>`,
          tab: ['影音成果'],
          hashtag: ['教室', '改造'],
          postid: '65846587988553',
          pic: [
          ],
          video: '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesign.movement.on.campus%2Fvideos%2F753871118424146%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
        },
        {
          pro: '學美．美學-校園美感設計實踐計畫',
          firstpic: require('../assets/ARCHI/shue/img03.jpg'),
          title: '學美．美學｜改造餐廳—臺南市新東國民小學',
          author: '',
          date: '',
          content: `<p dir="ltr">新東國小的餐廳建於民國51年，由於年代久遠，比起校內其他空間更多了許多使用的痕跡，且缺乏適合學生使用的桌椅及備餐檯等設備。加上學校地點較為偏僻，部分學生交通不便，因此餐廳同時需要具備滿足學童用餐需求的功能、與可提供課後輔導的複合性機能。負責改造的山川設計將空間進行整體調整，重新規劃桌椅座位，輔以滑輪增加靈活度，並增設備餐檯，滿足100多人的用餐需求，此外更換清玻璃，改善採光的同時引入窗外綠意，並調整照明設備，以供課後輔導使用。另於施工時意外發現早期遺留的壁畫，特別修改圖面，將壁畫的留存納入設計，延續歷史軌跡的同時，極具教育意義。</p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <div dir="ltr" align="left">
            <table><colgroup><col width="284" /><col width="274" /></colgroup>
            <tbody>
            <tr style="height: 15pt;">
            <td>
            <p dir="ltr">改造前</p>
            </td>
            <td>
            <p dir="ltr">改造後</p>
            </td>
            </tr>
            <tr style="height: 304.5pt;">
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/sKEOis795GX-1DGNXK7y_Uw/image?w=280&amp;h=404&amp;rev=1&amp;ac=1&amp;parent=1qmYFxx_kLYM1kZ5ovOhBDSZLu-S0XY7W" width="280" height="404" /></td>
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/sauWSq5oY6elcBh0JUIbHmA/image?w=270&amp;h=404&amp;rev=1&amp;ac=1&amp;parent=1qmYFxx_kLYM1kZ5ovOhBDSZLu-S0XY7W" width="270" height="404" /></td>
            </tr>
            </tbody>
            </table>
            </div>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr"><br /><br /></p>`,
          tab: ['影音成果'],
          hashtag: ['餐廳', '改造'],
          postid: '687987987887988553',
          pic: [
          ],
          video: '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesign.movement.on.campus%2Fvideos%2F499147264058631%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
        },
        {
          pro: '學美．美學-校園美感設計實踐計畫',
          firstpic: require('../assets/ARCHI/shue/img04.jpg'),
          title: '學美．美學｜改造垃圾、資源回收箱、掃具存放區—屏東市大同高級中學',
          author: '',
          date: '',
          content: `<p dir="ltr">大同高中原先提出噴水池、廊道、美術教室等改造需求，經田野調查後由委員發現學校缺乏完善空間規劃，掃具與垃圾桶僅能堆放在走廊上，讓學習空間顯得髒亂。經由委員建議後，將改造標的物更改為室內垃圾與資源回收站的設置，以及戶外掃具的收納。負責改造的唐草設計將垃圾桶與外掃具從教室環境抽離，首先依照垃圾量的觀察結果，重新設計分類項目，並配合垃圾減量的生活教育。針對外掃具，則設計適合戶外的掃具收納站，依照清掃動線定點設置於外掃區。透過改造，大同高中的走廊不只變乾淨了，更優化了垃圾清運與打掃的流程。&nbsp;</p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <div dir="ltr" align="left">
            <table><colgroup><col width="284" /><col width="274" /></colgroup>
            <tbody>
            <tr style="height: 15pt;">
            <td>
            <p dir="ltr">改造前</p>
            </td>
            <td>
            <p dir="ltr">改造後</p>
            </td>
            </tr>
            <tr style="height: 306.05pt;">
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/scBIBff2ZWWVLuSviziDJUw/image?w=279&amp;h=403&amp;rev=1&amp;ac=1&amp;parent=1dpoU420yTYdbaXNf2DuCBJbT-mJib9iq" width="279" height="403" /></td>
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/s5ua-hNr4ZKYhV4fOW9M_AA/image?w=269&amp;h=403&amp;rev=1&amp;ac=1&amp;parent=1dpoU420yTYdbaXNf2DuCBJbT-mJib9iq" width="269" height="403" /></td>
            </tr>
            </tbody>
            </table>
            </div>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr"><br /><br /></p>`,
          tab: ['影音成果'],
          hashtag: ['垃圾、資源回收箱', '掃具存放區', '改造'],
          postid: '6879874684645553',
          pic: [
          ],
          video: '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesign.movement.on.campus%2Fvideos%2F849016702198220%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
        },
        {
          pro: '學美．美學-校園美感設計實踐計畫',
          firstpic: require('../assets/ARCHI/shue/img05.jpg'),
          title: '學美．美學｜改造電纜及管線—新北市沙崙國民小學',
          author: '',
          date: '',
          content: `<p dir="ltr">沙崙國小長期面臨電纜及管線雜亂無規劃的問題，已無功能的廢棄管路沒有進行拆除，新舊管線層層堆疊，為了圖方便而橫過天空或牆面的電纜充斥校園，長期累積的結果就是犧牲孩子培養美感的機會。小學是孩子人格養成的關鍵階段，學生卻對校園雜亂的現象見怪不怪，校長希望改變這個現況。負責改造的東日興業先解析兩棟建築外牆的管線走向與校園整體色彩，然後採用減法設計把管線進行拆除整合，並統一使用灰色管，輔以色彩環標記管線類別，讓整體管線整齊劃一，色彩具系統性與和諧性。</p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <div dir="ltr" align="left">
            <table><colgroup><col width="284" /><col width="274" /></colgroup>
            <tbody>
            <tr style="height: 15pt;">
            <td>
            <p dir="ltr">改造前</p>
            </td>
            <td>
            <p dir="ltr">改造後</p>
            </td>
            </tr>
            <tr style="height: 304.95pt;">
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/srhQKXMRhAytUd6sPxEqxmQ/image?w=280&amp;h=405&amp;rev=1&amp;ac=1&amp;parent=18FHsM-w0dVeac8EMfahoWvDmi3-xAsrh" width="280" height="405" /></td>
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/sHSVs6AUg1blmHPxXlJL_lw/image?w=272&amp;h=406&amp;rev=1&amp;ac=1&amp;parent=18FHsM-w0dVeac8EMfahoWvDmi3-xAsrh" width="272" height="406" /></td>
            </tr>
            </tbody>
            </table>
            </div>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr"><strong><br /></strong> </p>`,
          tab: ['影音成果'],
          hashtag: ['電纜', '管線', '改造'],
          postid: '687987467486748453',
          pic: [
          ],
          video: '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesign.movement.on.campus%2Fvideos%2F2885991988129521%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
        },
        {
          pro: '學美．美學-校園美感設計實踐計畫',
          firstpic: require('../assets/ARCHI/shue/img06.jpg'),
          title: '學美．美學｜改造中廊—苗栗縣豐林國民小學',
          author: '',
          date: '',
          content: `<p dir="ltr">豐林國民小學的中廊位於教學樓的中間位置，與其他學校的中廊不同，是學校師生使用率極高的半室外活動空間，但因年久失修而顯得老舊昏暗，堅硬冰冷的磁磚地板鋪面對孩子活動而言並不友善，殘破不堪的布告欄在使用上成為障礙，此外，中廊後方緊鄰著教室的後走廊，除了數棵福木造景外，還有著年代久遠已不在使用的老式溜滑梯，都極待改善。負責改造的創客吧將中廊與後走廊兩個空間整合為一體，以無縫軟質鋪面改造地坪，引綠意入廊，延伸中廊至後走廊形成緩坡，將原本生硬的廊道空間變得柔和，同時兼作學童的遊樂空間。而原本中廊兩側的佈告欄則採取減法設計，統整規劃外觀視覺，立體化的圓弧造型外框使張貼物內縮，從側面看過去具有遮擋視線的效果，使得張貼範圍整齊美觀，並且輔以良好照明設計，同時提升閱讀與展示的趣味。</p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <div dir="ltr" align="left">
            <table><colgroup><col width="284" /><col width="274" /></colgroup>
            <tbody>
            <tr style="height: 15pt;">
            <td>
            <p dir="ltr">改造前</p>
            </td>
            <td>
            <p dir="ltr">改造後</p>
            </td>
            </tr>
            <tr style="height: 309.45pt;">
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/shezAY-KEjXWFh85elQgXUw/image?w=280&amp;h=408&amp;rev=1&amp;ac=1&amp;parent=1fNvlfwRy76JWblkpdUN0blsyjqTdOJh9" width="280" height="408" /></td>
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/seBvozt6u-dhYHPJG5XqC4A/image?w=271&amp;h=408&amp;rev=1&amp;ac=1&amp;parent=1fNvlfwRy76JWblkpdUN0blsyjqTdOJh9" width="271" height="408" /></td>
            </tr>
            </tbody>
            </table>
            </div>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <p dir="ltr"><a href="https://www.facebook.com/design.movement.on.campus/videos/584788642339549/">影片連結點此</a>（學美．美學Facebook粉絲專頁貼文）</p>
            <p dir="ltr"><br /><br /></p>`,
          tab: ['影音成果'],
          hashtag: ['中廊', '改造'],
          postid: '687945468467486748453',
          pic: [
          ],
          video: '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesign.movement.on.campus%2Fvideos%2F584788642339549%2F&show_text=0&width=560" width="560" height="316" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
        },
        {
          pro: '學美．美學-校園美感設計實踐計畫',
          firstpic: require('../assets/ARCHI/shue/img07.jpg'),
          title: '學美．美學｜改造川堂—花蓮縣明禮國民小學',
          author: '',
          date: '',
          content: `<p dir="ltr">明禮國小是個與社區緊密連結的學校，經歷震災重建，除了翻修過圍牆與門面，缺乏室內活動空間仍是問題，校方希望川堂成為一個多功能的使用空間，可以是表演廳、集會場所、更是凝聚師生、家長及社區居民的重要據點。負責改造的無有設計將明禮國小以打造品牌的概念重新思考，使用平面設計的手法，為校方打造視覺系統，利用造型木夾板改變川堂的空間型態，採用具有展示功能的洞洞板，並以多層次不規則曲面製造出隧道與穿越感，破除原牆面的生硬線條，同時拆除孔子銅像，改以插畫手法呈現，以貼近學童，此外利用大色塊的平面設計營造舞台意象，克服傳統實體舞台較佔空間的劣勢，使得川堂得以被靈活運用。</p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <div dir="ltr" align="left">
            <table><colgroup><col width="284" /><col width="274" /></colgroup>
            <tbody>
            <tr style="height: 15pt;">
            <td>
            <p dir="ltr">改造前</p>
            </td>
            <td>
            <p dir="ltr">改造後</p>
            </td>
            </tr>
            <tr style="height: 304.5pt;">
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/s2SP4D7hKVE3T61V_bZ5x_Q/image?w=280&amp;h=404&amp;rev=1&amp;ac=1&amp;parent=1KOM6oZNcqi2IjVgRv3Dg5Xiy2JUY53eS" width="280" height="404" /></td>
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/sEqbY8wS4Yxb0vGBMZsJSzw/image?w=272&amp;h=404&amp;rev=1&amp;ac=1&amp;parent=1KOM6oZNcqi2IjVgRv3Dg5Xiy2JUY53eS" width="272" height="404" /></td>
            </tr>
            </tbody>
            </table>
            </div>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr"><strong><br /></strong> </p>`,
          tab: ['影音成果'],
          hashtag: ['川堂', '改造'],
          postid: '68794578978456748453',
          pic: [
          ],
          video: '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesign.movement.on.campus%2Fvideos%2F500460084184181%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
        },
        {
          pro: '學美．美學-校園美感設計實踐計畫',
          firstpic: require('../assets/ARCHI/shue/img08.jpg'),
          title: '學美．美學｜改造指標系統—新竹縣竹東高級中學',
          author: '',
          date: '',
          content: `<p dir="ltr">竹東高中的校園緊鄰鳳陽山而身處高坡，建物散落於不同坡面，經歷長年的建物變更及修建，導致原有指標系統失去引導功能，且殘破不易辨識，另因建物間的距離相當遙遠，時常造成來訪賓客迷失方向。負責改造的風泉設計致敬台灣已故名畫家蕭如松老師於竹東高中寫生之作品系列，以澄澈的畫風及沈穩內斂的色彩為基底，簡潔寫意的線條、骨感挑高的造型、近抽象的幾何藝術。藉由設計思維昇華為與校園師生的詩性對話，巧妙打造出一款竹東高中專屬、崇高精神象徵的指標系統。</p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <div dir="ltr" align="left">
            <table><colgroup><col width="284" /><col width="274" /></colgroup>
            <tbody>
            <tr style="height: 15pt;">
            <td>
            <p dir="ltr">改造前</p>
            </td>
            <td>
            <p dir="ltr">改造後</p>
            </td>
            </tr>
            <tr style="height: 304.95pt;">
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/saM5mar6mIe1XOBMX8GJgEg/image?w=281&amp;h=404&amp;rev=1&amp;ac=1&amp;parent=1h6rhu1Fz-SceBLqyKZdjyK5UoY-wbifY" width="281" height="404" /></td>
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/s1ViX77Of1gFa6TGo8ZEIsw/image?w=273&amp;h=404&amp;rev=1&amp;ac=1&amp;parent=1h6rhu1Fz-SceBLqyKZdjyK5UoY-wbifY" width="273" height="404" /></td>
            </tr>
            </tbody>
            </table>
            </div>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr"><strong><br /></strong> </p>`,
          tab: ['影音成果'],
          hashtag: ['指標系統', '改造'],
          postid: '68794578954652468458453',
          pic: [
          ],
          video: '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesign.movement.on.campus%2Fvideos%2F2469742133278248%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
        },
        {
          pro: '學美．美學-校園美感設計實踐計畫',
          firstpic: require('../assets/ARCHI/shue/img09.jpg'),
          title: '學美．美學｜改造指標系統—臺北市和平高級中學',
          author: '',
          date: '',
          content: `<p dir="ltr">和平高中校園主要動線曲折，卻缺乏整體性的指標系統，為了提供來訪的貴賓及新生方向導引，以及各式告示，師生自行製作的臨時性指標張貼在建物各處，材質、尺寸、顏色、字體...等形式不一，缺乏整體規劃，反而使得空間越加錯綜複雜且凌亂，影響建物美觀外，更養成師生隨意張貼的壞習慣。負責改造的風泉設計盤點學校的指標需求，盤點學校的指標需求，並以環境中的馬賽克磁磚裝飾為創意發想，使用簡單的幾何造型堆疊出繪圖文字，讓校園指標系統化，繽紛的色彩應用象徵學生的青春活力，跳脫指標原本冰冷的印象。針對校園張貼各類公告的需求，風泉設計則建議設立布告欄及可移動式指示牌。</p>
            <p dir="ltr"><strong>&nbsp;</strong></p>
            <div dir="ltr" align="left">
            <table><colgroup><col width="284" /><col width="274" /></colgroup>
            <tbody>
            <tr style="height: 15pt;">
            <td>
            <p dir="ltr">改造前</p>
            </td>
            <td>
            <p dir="ltr">改造後</p>
            </td>
            </tr>
            <tr style="height: 318.7pt;">
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/smWD7akM6TAd_ORRo7qqJ1Q/image?w=279&amp;h=421&amp;rev=1&amp;ac=1&amp;parent=1tfXsmYNCIUTDdEWsZiFO-n9lpngT_8L8" width="279" height="421" /></td>
            <td><br /><img src="https://docs.google.com/drawings/u/2/d/s6EPUQxWSqYCWfapfqag4YQ/image?w=270&amp;h=422&amp;rev=1&amp;ac=1&amp;parent=1tfXsmYNCIUTDdEWsZiFO-n9lpngT_8L8" width="270" height="422" /></td>
            </tr>
            </tbody>
            </table>
            </div>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr"><strong><br /></strong> </p>`,
          tab: ['影音成果'],
          hashtag: ['指標系統', '改造'],
          postid: '687945465656453',
          pic: [
          ],
          video: '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesign.movement.on.campus%2Fvideos%2F568089240653019%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
        },
        {
          pro: '學美．美學-校園美感設計實踐計畫',
          firstpic: require('../assets/proimg/shue/home.png'),
          title: '學美．美學｜總紀錄片',
          author: '',
          date: '',
          content: `<p dir="ltr">漢寶德說過，美感是一種國家競爭力。</p>
            <p dir="ltr">而美感教育要從「對生活環境有感」做起。</p>
            <p dir="ltr">在「學美．美學&mdash;校園美感設計實踐計畫」裡，工作團隊與設計師們致力與學校溝通提升「有感認知」，從釐清問題、導入設計方法、執行施作與改造，到學校實際使用與反饋，每個環節都很用心。</p>
            <p dir="ltr">還記得在成果分享展上，許多參與的校長們表示導入美感設計的過程，讓學校師生不斷發現「啊！原來如此」的驚喜，例如台南市新東國小的林校長分享：</p>
            <p dir="ltr">「有了新的餐廳空間後，小朋友講話的聲音變得更輕聲細語了，才發現其實改造的不只是視覺環境、也改造了孩子們的美感行為。」聽到這些實際從本質改變的故事，真的很感動！</p>
            <p dir="ltr">我們知道對於學校來說，符合功能性是首要需求，如何與專業的設計團隊溝通、合作，是很多師長想了解的。</p>
            <p dir="ltr">學美美學計畫接下來也會與美感細胞合作產出一份 #學美美學實踐指南，分享給更多想要投入校園美感改造的學校與設計師，共同打造更多的美感校園！</p>
            <p dir="ltr"><br /><br /></p>`,
          tab: ['影音成果'],
          hashtag: ['美感設計進入校園', '總紀錄片'],
          postid: '6879446862656453',
          pic: [
          ],
          video: '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesign.movement.on.campus%2Fvideos%2F1003383023364722%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
        },
        {
          pro: '偏鄉藝術美感育苗計畫',
          firstpic: require('../assets/achie.png'),
          title: '成果展總影片',
          author: '',
          date: '',
          content: ``,
          tab: ['影音成果'],
          hashtag: ['成果展'],
          postid: '8854846521',
          pic: [
          ],
          video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XdSbaER3a6A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          pro: '偏鄉藝術美感育苗計畫',
          firstpic: require('../assets/achie.png'),
          title: '偏鄉藝術美感育苗計畫宣傳短片',
          author: '',
          date: '',
          content: ``,
          tab: ['影音成果'],
          hashtag: ['宣傳短片'],
          postid: '885488653221',
          pic: [
          ],
          video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MR0jL0nvWbo?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          pro: '偏鄉藝術美感育苗計畫',
          firstpic: require('../assets/achie.png'),
          title: '偏鄉藝術美感育苗計畫-音樂表演',
          author: '',
          date: '',
          content: ``,
          tab: ['影音成果'],
          hashtag: ['音樂表演'],
          postid: '8854886538456',
          pic: [
          ],
          video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZFyVdp5Zu6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          pro: '偏鄉藝術美感育苗計畫',
          firstpic: require('../assets/achie.png'),
          title: '偏鄉藝術美感育苗計畫-視覺藝術',
          author: '',
          date: '',
          content: ``,
          tab: ['影音成果'],
          hashtag: ['視覺藝術'],
          postid: '88548456538456',
          pic: [
          ],
          video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kF6RIWc00WU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          pro: '偏鄉藝術美感育苗計畫',
          firstpic: require('../assets/achie.png'),
          title: '偏鄉藝術美感育苗計畫-vision',
          author: '',
          date: '',
          content: ``,
          tab: ['影音成果'],
          hashtag: ['vision'],
          postid: '8854868543538456',
          pic: [
          ],
          video: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/hbwaW5OEBKM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        },
      ],
    }
  },
  computed: {
    showcards() {
      return this.homeresultsprojectsArray.slice(0,6)
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/style.sass'

.rcm
  width: 95%
  height: 60vw
  box-sizing: border-box
  // +bb
  +phone
    height: 80vw
  .slider-touch
    +pad
      height: 90%
    +phone
      height: 100%
  .swiper-container-horizontal>*>.slider-pagination-bullet
    +pad
      width: 2vw
      height: 2vw
  .swiper-container-horizontal .slider-pagination-bullet-active, .swiper-container-vertical .slider-pagination-bullet-active
    background-color: black !important
  .swiper-container-horizontal>.slider-pagination-bullets
    bottom: 1px !important
    +pad
      // bottom: px !important
      // bottom: -30px !important

      
    +phone
      // height: 50vw
      bottom: -3px !important
    
  .rcmCardBlock
    .card
      width: 80%
      .rcmCard
        width: 100%
        height: 90%
        // +bb
        margin-left: 4%
        +phone
          height: 85%

      
</style>