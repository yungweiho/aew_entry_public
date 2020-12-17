<template lang="pug">
.hn
  //TAB區
  .hnTabBlock
    .hnTab(v-for="item in cate" @click="tab=item.title") {{ item.title }}
      .hnTabTri(:class="{active: tab==item.title}")
  //第一欄
  .hnBlock1
    //左
    router-link.hnPost1(v-for="item in showPost.slice(0,1)" :to="'/post/' + item.postid" :key="item.title")
      .hnPostPic1(:style="{background:　'url(' + item.firstpic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .hnPostText1 
        .hnPostTitle1 {{ item.title }}
        .hnPostSubTitle1 ➤ {{ item.pro }}
        .hnPostDate1 {{ item.date }}
        .hnPostContent1 {{ HtoS(item.content) }}
    //右
    router-link.hnPost2(v-for="item in showPost.slice(1,2)" :to="'/post/' + item.postid" :key="item.title")
      .hnPostPic2(:style="{background:　'url(' + item.firstpic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .hnPostText2
        .hnPostTitle2 {{ item.title }}
        .hnPostSubTitle2 ➤ {{ item.pro }}
        .hnPostDate2 {{ item.date }}
        .hnPostContent2 {{ HtoS(item.content) }}
  //第二欄
  .hnBlock2
    //左
    router-link.hnPost3(v-for="item in showPost.slice(2,3)" :to="'/post/' + item.postid" :key="item.title")
      .hnPostPic3(:style="{background:　'url(' + item.firstpic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .hnPostText3
        .hnPostTitle3 {{ item.title }}
        .hnPostSubTitle3 ➤ {{ item.pro }}
        .hnPostDate3 {{ item.date }}
        .hnPostContent3 {{ HtoS(item.content) }}
    //右
    router-link.hnPost4(v-for="item in showPost.slice(3,4)" :to="'/post/' + item.postid" :key="item.title")
      .hnPostPic4(:style="{background:　'url(' + item.firstpic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .hnPostText4
        .hnPostTitle4 {{ item.title }}
        .hnPostSubTitle4 ➤ {{ item.pro }}
        .hnPostDate4 {{ item.date }}
        .hnPostContent4 {{ HtoS(item.content) }}
  //第三欄
  .hnBlock3
    //左
    router-link.hnPost5(v-for="item in showPost.slice(4,5)" :to="'/post/' + item.postid" :key="item.title")
      .hnPostPic5(:style="{background:　'url(' + item.firstpic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .hnPostText5
        .hnPostTitle5 {{ item.title }}
        .hnPostSubTitle5 ➤ {{ item.pro }}
        .hnPostDate5 {{ item.date }}
        .hnPostContent5 {{ HtoS(item.content) }}
    //右
    router-link.hnPost6(v-for="item in showPost.slice(5,6)" :to="'/post/' + item.postid" :key="item.title")
      .hnPostPic6(:style="{background:　'url(' + item.firstpic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .hnPostText6
        .hnPostTitle6 {{ item.title }}
        .hnPostSubTitle6 ➤ {{ item.pro }}
        .hnPostDate6 {{ item.date }}
        .hnPostContent6 {{ HtoS(item.content) }}
</template>

<script>
export default {
  data() {
    return {
      tab: '',
      cate: [
        {
          id: 1,
          title: '重要公告',
        },
        {
          id: 2,
          title: '活動訊息',
        },
      ],
      NewsArray: [
        {
          pro: '中小學在職教師暨行政人員素養提升計畫',
          title: '日常景框 X 美感生活 X 藝術實踐 2th「補助執行跨域整合美感教案徵選活動」',
          date: '2020/01/03',
          content: `<p dir="ltr"><img src="https://lh4.googleusercontent.com/jkguowjk5Kks-iCZ7vplk88wwUWfwTw89_U0X3ikvpHD4JXrQ3ooJCCFKaJ2MKGiUEurU9Uvbd-xPpK1i-vkGjgZrJPs0YiypxFzSsg5gflVIoQWmJGnyulDrdx7ROEtmqIO-ok" width="553" height="382" /></p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">本次美感教育第二期五年計畫，將落實藝術扎根與五感探索，將身體與感官作為一種發掘美感經驗的位置。美感素養提升計畫以「表演藝術」、「新媒體」兩大核心，結合其他學科的跨域整合，呈現出表演藝術與新媒體藝術的創新多元運用，形塑出跨界、實驗性的美感經驗。從而以教案的發想、溝通、激盪、實踐，發展出多樣化的創意教案，進行創新的教與學並實踐於課堂中，提供實際的操作模組，激發出學生跨域的生活、藝術與美感串聯。</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">教案設計以「校園生活」、「在地文化特色」為主題，連結到學生日常生活經驗的提取與思考，運用藝術、科技的多元表現方式，從人與人之間互動中創造出創新與創意的溝通方式，並聚焦在對生活有感的事物，進而形塑美感知識與素養。</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">/辦理單位/</p>
            <p dir="ltr">指導單位：教育部</p>
            <p dir="ltr">主辦單位：國立臺北藝術大學</p>
            <p dir="ltr">承辦單位：藝術與人文教育研究所</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">/參與資格/</p>
            <p dir="ltr">1.現任公(私)立、實驗、另類國中小合格教師(含代理、代課)。(可跨校合作)</p>
            <p dir="ltr">2.108年度第一學期有入選之教案，若原教案有延續性的課程發展，亦可就發展之新課程再次參加本次徵選活動。</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">/徵件日期/</p>
            <p dir="ltr">即日起至2020年03月01日截止。</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">/教案內容與主題/</p>
            <p dir="ltr">&nbsp;(一)授課對象</p>
            <p dir="ltr">以國中、國小學生為教學對象。</p>
            <p dir="ltr">&nbsp;(二)主題</p>
            <p dir="ltr">以「校園生活」、「在地文化特色」為發展核心，連結到學生日常生活經驗，擴及至社區人文環境、地方文化特色發展及創新，運用更多以藝術、科技的多元表現方式，跨域整合呈現。</p>
            <p dir="ltr">(三)課程內容</p>
            <p dir="ltr">1.以《108年度課綱》作為教材之參考，內容須具體說明理念、教學目標、教學對象、教學時間及教材、教具之使用、教學活動、教學評量(或學習單)、連結領域&hellip;等，請參照附件一(教學方案設計格式)檔案。</p>
            <p dir="ltr">2.課程堂數最少四堂課，以每週1節課（40-45分鐘）為發展，教學活動需實作於課堂上，執行期間於108-2學期（2020年3月至2020年6月間），本計畫團隊將會擇一堂課進班觀課與提供教學回饋。</p>
            <p dir="ltr">3.一間學校至多兩件參選教案，一件教案可有兩位~四位教師合作、亦可跨校合作。(＊若為跨校合作，報名簡章請註明代表處理行政事宜的學校及教師)</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">/報名方式與繳交資料/</p>
            <p dir="ltr">限網路報名，收件截止日期，即日起至2020年03月01日止。</p>
            <p dir="ltr">簡章及報名資料下載位置：<a href="https://drive.google.com/drive/folders/1QidjivjjMTYXIR3GqxFebpfjASwMALBV?usp=sharing">https://drive.google.com/drive/folders/1QidjivjjMTYXIR3GqxFebpfjASwMALBV?usp=sharing</a></p>
            <p dir="ltr">收件網址，請寄至此e-mail：<a href="mailto:aeconference.tnua@gmail.com">aeconference.tnua@gmail.com</a></p>
            <p dir="ltr">繳交資料：</p>
            <p dir="ltr">教案作品，內容以10頁為限，超過部分不列入審查，書寫格式可參照附件一(教學方案設計)檔案，教案請以Word製作，並轉成PDF檔，最後請寄送Word檔與PDF檔各一份給本單位。</p>
            <p dir="ltr">教案檔名：學校名&mdash;教案名稱&mdash;教師名。</p>
            <p dir="ltr">繳交個人基本資料表，詳見附件二。</p>
            <p dir="ltr">繳交觀課時間表，詳見附件三</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">/評選標準/</p>
            <div dir="ltr" align="center">
            <table><colgroup><col width="94" /><col width="85" /><col width="416" /></colgroup>
            <tbody>
            <tr style="height: 0pt;">
            <td>
            <p dir="ltr">評選項目</p>
            </td>
            <td>
            <p dir="ltr">評分佔比</p>
            </td>
            <td>
            <p dir="ltr">說明</p>
            </td>
            </tr>
            <tr style="height: 37.9pt;">
            <td>
            <p dir="ltr">可行性</p>
            </td>
            <td>
            <p dir="ltr">25%</p>
            </td>
            <td>
            <p dir="ltr">轉化之教案能應用在教學場域中，教學活動設計流暢，實施時有助於提升學生自主學習。</p>
            </td>
            </tr>
            <tr style="height: 52.7pt;">
            <td>
            <p dir="ltr">創新性</p>
            </td>
            <td>
            <p dir="ltr">25%</p>
            </td>
            <td>
            <p dir="ltr">1.教案轉化的核心理念與教學活動設計具特色，能啟發學生思考、擴展視野。</p>
            <p dir="ltr">2.構思新穎、開創。</p>
            </td>
            </tr>
            <tr style="height: 0pt;">
            <td>
            <p dir="ltr">完整性</p>
            </td>
            <td>
            <p dir="ltr">25%</p>
            </td>
            <td>
            <p dir="ltr">1.教案轉化的教學活動設計完整且合宜，能有效引起學生學習動機。</p>
            <p dir="ltr">2.有效運用參考之教案相關資源，並妥切轉化於教學策略中，後續延伸活動多元完整。</p>
            </td>
            </tr>
            <tr style="height: 0pt;">
            <td>
            <p dir="ltr">跨域整合</p>
            </td>
            <td>
            <p dir="ltr">25%</p>
            </td>
            <td>
            <p dir="ltr">1.以藝術類別為主要跨域項目，透過與藝術的結合，呈現出新樣貌與美感經驗提升的可能。</p>
            <p dir="ltr">2.兩項專業科目有效的互通連結，結合融洽、運用得宜。</p>
            </td>
            </tr>
            </tbody>
            </table>
            </div>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">/補助款/</p>
            <p dir="ltr">補助課程執行教學教材費，(業務費)新臺幣3萬元整。(入選教案20件)</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">/其他注意事項/</p>
            <p dir="ltr">所有教案內容、文字、圖片、影音等須符合著作財產權之規範，若有違法除取 消評選資格，同時須自行負相關法律責任。</p>
            <p dir="ltr">評選教案若有抄襲他人作品，或冒名頂替參選者，將取消其評選資格。</p>
            <p dir="ltr">評選作品如入選得到補助，其財產著作權同意與主辦單位共有，且承諾對主辦單位不行使著作人格權。</p>
            <p dir="ltr">主辦單位得有以任何形式推廣（如結集出版、展示、上網公佈、光碟燒錄、有聲出版、書報雜誌&hellip;等。）、保存及轉載之權利，且不另支付作者酬勞、版稅。參賽即同意參賽作品將提供主辦單位永久非營利之利用，並不受次數、期限、方式、平台限制。</p>
            <p dir="ltr">重要日期：</p>
            <p dir="ltr">報名與資料提交：即日起至2020年03月01日截止。</p>
            <p dir="ltr">評選期間：2020年03月02日至03月06日</p>
            <p dir="ltr">入選公告：2020年3月9日（本單位官網<a href="https://al.tnua.edu.tw">https://al.tnua.edu.tw</a>），以及主動連繫入選者。</p>
            <p dir="ltr">主辦單位保留變更、修改之權利，以上如有未盡事宜請來電洽詢。</p>
            <p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr">/活動洽詢/</p>
            <p dir="ltr">洽詢信箱：aeconference.tnua@gmail.com</p>
            <p dir="ltr">洽詢專線：02-28961000 分機 3263&nbsp; 張哲軒助理</p>
            <p style="text-align: center;"><strong><br /></strong> <br /><br /></p>`,
          firstpic: require('../assets/news/chongte/img01.jpg'),
          tab: ['活動訊息'],
          hashtag: ['美感生活', '藝術實踐'],
          postid: '86548532',
        },
        {
          pro: '中小學在職教師暨行政人員素養提升計畫',
          title: '阮璽X美感素養提升計畫「有溫度的影像」工作坊',
          date: '2020/01/08',
          content: `<p style="text-align: center;"><strong>&nbsp;</strong></p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/Kj31Ili_9tYUoUdVUfJClkXdfNvCLn_DZHT4KKLri5-CYNcFdSynXOQuYlg2vQEG0dpOOX2EgxZvsrAUhs57LikIBDvY41x3d7W_k4yiHZMvk3iTJIIO2xqxT6-UQQy2pBlcUNc" width="553" height="382" /></p>
            <p dir="ltr">/講師簡介/</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/M_mwEKrN8f_6mqQVw1o17ApF6669pomMPhwJ3gToHIg9yqKo3R-46H4Nw9H-PWZhwtFdGcD194MIK97GQGF9oJzXFf6FAwrTc8R8l5_jwVh4eqAMGVPsGiitbQdhQpTjiIHtZmk" width="553" height="415" /></p>
            <p dir="ltr">阮璽，1981年生於臺北，活躍於海內外攝影活動，曾於TED、各教育機構、企業團體、大專院校擔任講師與攝影比賽評審。第一本攝影集《院喜》黑文化出版，第二本攝影集《院囍》有鹿文化，第三本攝影集《京都電梯・Kyoto Elevator》獨立發行。第四本攝影集《走著橋》於2019於雄獅美術出版。過去三年間曾在海內外舉行個展與聯展三十餘次，展出空間包括台北亦安畫廊、廈門集美阿爾攝影節、台灣雙年展、大理攝影節、麗水攝影節、東京蔦屋書店、蘇州誠品書店，舉辦過的攝影講座超過三百場。（作品網站：Juansea.com）</p>
            <p dir="ltr">/講師的話/</p>
            <p dir="ltr">攝影可以做很多事：記錄生活、創作、表達自己、跟朋友分享喜悅。喜歡拍照只是起步，接下來應知道如何拍出有故事的照片、掌握每次的快門時刻，以及思索攝影師與作品、觀眾之間情感連結的傳達。</p>
            <p dir="ltr">本課程聚焦於如何思考、觀察、選擇到最後透過攝影作品表達自我。透過欣賞世界名家攝影作品，並輔以作品編排、展覽陳列，希望學員們能全方位地了解攝影的諸多面向，逐步發現自我所長，進而建立屬於自己的獨特風格。</p>
            <p dir="ltr">/課程內容/</p>
            <p dir="ltr">1.講師作品分享</p>
            <p dir="ltr">透過講師的多部攝影集、系列創作以及商業合作案如：Leica、Apple、Huawei、小日子、新活水、文獻雜誌等案例，分享實際拍攝應對。及三十多次個展與聯展，分享個人的創意思考與策展經驗。</p>
            <p dir="ltr">2攝影創作技巧、大師作品分享</p>
            <p dir="ltr">攝影技巧教學：等待、群體、活動、秩序、角度、幾何、隔層、倒影、物體、風景、圖案、肖像。</p>
            <p dir="ltr">世界攝影大師及新銳作品分享：Henri Cartier-Bresson、Jacques-Henri Lactique、 Weegee、Josef Koudelka、Eillot Erwitt、William Klein、Robert Frank、Mario Giacomelli、Saul Leiter、Vivian Maier、Lee Friedlander、Alex Ｗebb、Alec Soth、須田一政、牛腸茂雄</p>
            <p dir="ltr">3.學員作品分享、講評</p>
            <p dir="ltr">學員互相分享自己的作品及理念。講師講評。</p>
            <p dir="ltr">/活動資訊/</p>
            <p dir="ltr">近期公告，敬請期待。</p>
            <p dir="ltr">/報名方式/</p>
            <p dir="ltr">近期公告，敬請期待。</p>
            <p style="text-align: center;"><strong><br /></strong> </p>`,
          firstpic: require('../assets/news/chongte/img02.jpg'),
          tab: ['活動訊息'],
          hashtag: ['攝影', '阮璽'],
          postid: '8658654248532',
        },
        {
          pro: '見美．踐美．漸美-建構美感生活學習地圖之方案實踐實施計畫',
          title: '向陽迎新春，高雄市鳳翔國小打造「向日葵迷宮」新樂園',
          date: '2020/01',
          content: `<p dir="ltr">&nbsp;</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/mDF248bDmUv3KiAeKpyh14NHlPIoRwzK_11heHDsgHDI--h6mNqXqqXnVHYIS2GX-h1Qlk5GPzNhbYF2wAd3xyqBIfJBC0z6yXIbAkAm9uIiq7kvqqFkm476TSd5vBwPSWRhnqvb" width="831" height="430" /></p>
            <p dir="ltr">始終昂首挺立迎向陽光的向日葵，一直是鳳翔校園中希望的象徵。每一年葵花種籽收成後，交由下一屆學弟妹撒播，就如同希望的傳承般是鳳翔的教育薪傳。</p>
            <p dir="ltr">108學年鳳翔國小加入教育部「美感生活學習地圖」計畫，透過設計思考教學，讓學生發想這一片向日葵花園，除了如同往常般一屆一屆薪火相傳外，還能開創出甚麼新思維。</p>
            <p dir="ltr">孩子有許多天馬行空的發想，最後在共同討論下，設計了一個可以讓人穿梭其中的「向日葵迷宮」，走入規劃路線中，不僅更能親近花海，聆賞花香、蜂舞、蝶飛&hellip;，也蘊藏著屬於孩子自己秘密基地的無限夢想。</p>
            <p dir="ltr">元旦新春，燦黃向日葵迎風搖曳，不僅招睞來蜂蝶採蜜，更引來師生、親子&hellip;在迷宮中，攜手交心共賞遊！</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/rwpmuPqqfIrrgFjnXsWe3qde0rY8OEjzWpldUInbO8uL2GIGsEeR0GVdOY1uwns61nhiVWbs08ZLsHanXQ1UQlGHPQ-YNUSeBQkzVu2p0C7CrOUAvmt8NRkgPLcAhwv2grw20U-z" width="842" height="430" /><img src="https://lh5.googleusercontent.com/5hV7PWOZY9FVTjAuOaDVoYqxUPx9QIsCq2-761kRp3jNLBJeK_Avty8rCLiMTxFXS9-5lA-KR3mtOE26hx8aq-0IFKXL3E4GOe1MbTqDEOwpvu7W4I4I7f8eoh-auuQVQmk_sb4w" width="393" height="450" /><img src="https://lh3.googleusercontent.com/gM2gx94RtFaHh7w_IXZ6s9FhWj4RTyr2pxY1kpr2ijqMbyzem-0wH2B4gWRIMY0U4L5YxxBMIywabOrmcFM_qnQ_SOvZyn7Vn3p1c01mOWvFe5v15RnEmGisza4HLllroX3Xqybb" width="394" height="525" /><img src="https://lh4.googleusercontent.com/Wv2h1XQ8LO9DLkp-UVENI8bnzvJpxANZOD4WGFTH2lk-8JvA0aJKd6HuPUEqRZR5Shf8hAc53wXsLS5b5zA7iDMLYOgEwqebncdM4xBnXQhDPNdXPJIyfeKEtsNkWKvNKTBC0vft" width="845" height="561" /><img src="https://lh3.googleusercontent.com/sE7Qnn1-oSlQjajZXBbdjhVNfEkLNXtznH3zgV1uZQkHJJ3mQmTpvMq0O5gY7bfTjBVnifGYwwqaww4OBj8IGLHzzslyMfCq4EsL-BLR9EkjuBYImaFdUmr-QQrJmv3JjjRsWYtR" width="606" height="810" /><img src="https://lh5.googleusercontent.com/x5zHRnxghFuPRxNHqTBwvovP41EiNP7iF6EWWl_DFL6M1fxhkG4MhwPl_yUuYYuIE-572jzkqzAQQaNTPvAvWrqnJSVf9Ys_Ye5Munu6frd-g4nH-1zdxsyjgX4lltNana7A0awB" width="840" height="600" /><img src="https://lh5.googleusercontent.com/6O34MkLFclwVC5pyU20hziCF8M7mUO2QTPuOyxm3WEXB8jsE_ay_h1rfJgtc2plDbjkZFoHufUqKH597omuG06hWz0uFbQJRHF5kFIqOvJ9oUHDCKAGsb2YLhWjd-lt-Xy-XLn0_" width="845" height="476" /></p>
            <p style="text-align: center;"><br /><br /></p>`,
          firstpic: require('../assets/news/chien/img01.jpg'),
          tab: ['活動訊息'],
          hashtag: ['迎春', '向日葵'],
          postid: '8658654245628532',
          pic: ['https://drive.google.com/uc?export=view&id=1_05mW6eNZXyGEYcz61GtKeKzxAKXUbvS',
            'https://drive.google.com/uc?export=view&id=1PsCVCU8PorotCQlHT38rbDExmB8XWx1e',
            'https://drive.google.com/uc?export=view&id=1IzvcoiytvS2D1Aq0fdvl5rKzdKjquJXO',
            'https://drive.google.com/uc?export=view&id=1Wi9WCN4iB7_r2XPcWFEOEQv1YHUyOtEO',
            'https://drive.google.com/uc?export=view&id=1hsl5K0KkmHnchWdL5135YqjslBqzx5yw'
          ],
        },
        {
          pro: '見美．踐美．漸美-建構美感生活學習地圖之方案實踐實施計畫',
          title: '年貨沸揚的迪化街裡，尋訪汐止「灘音香徑」',
          date: '2020/01',
          content: `<p dir="ltr">&nbsp;</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/-r3pd3J5Ykc9gSbBI34Bd0XXFa-rSOs3OLqZXCivjxyhpqfTSSDsi-KREZBhXkmBsURNVPilaGR5YOiHsp-qG0gFFAxooJ9r2N2KjLDgceVWSiPuu37wAj2xObpqOY8Zi3V7ebt7" width="850" height="569" /></p>
            <p dir="ltr">因漲潮時，海汐、河汐相擊之聲，因此汐止有「灘音」之古名，如此美麗的往昔，現在卻陷於「淹水」刻板印象，百年老厝也逐漸凋零消逝。</p>
            <p dir="ltr">青山國中孩子曾經運用光影交錯營造「時光隧道」，布展「古厝光影」讓家鄉與未來對話；加入教育部「美感生活學習地圖」計畫後，教學團隊帶著孩子走訪大稻埕、募集台北老味道，在踏訪風華再造的街徑後，希望也能結合校本課程、資訊科技，跨域創藝找到一條回家的路，在「灘音香徑」中建構屬於自己家鄉的百年風華，喚起汐止居民共同的美好記憶！</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/StKmMJq6KCX9adXNqCxfFCU26dVR9I3EfsVBouyYck4pzhRrGUrReN0tUgShCQ1VGC93rmiP395CITc5IXULQfMVIM-VPS8cDlP678KDstOloIbk8dg3Vzg2kVBj9wPmlkNPrcV0" width="849" height="567" /><img src="https://lh4.googleusercontent.com/BdEkdhrm1Ag3QQdpQfjyzaYifMnHLoqImiJxGtocdX-5SEZtRu5d7rAQZ6grJxfp1mGX3s-2ngPOXikvUgFvo_gXTw7IHod3Pngnd8PL88H82pXA6hPKw1qhgAgOdY2M6d0-8gvU" width="838" height="1257" /><img src="https://lh5.googleusercontent.com/3tf2P2FHvidC1Xt8kg2nfjfbxSk8aTMNs6jg_ZiIKeW_PL-45HMjJe9v_cjFx4VRcrL2OI_Tn7pYkpDdooP814C7D1C9wFTBR97wzJa0FSw1ximk-wtZbeCUfn2aKVWY_UnB3h_J" width="848" height="568" /><img src="https://lh4.googleusercontent.com/EOAJE6veQvXQTvWn2-e-vTjesMK4VUuNH-Z3_lc7kMLR1Wqp93d_pEiVsrHI1IF-HPVmEbR4KdGJQdLi0XBkGyrhiWNhDDWBso_ypFXFMJHsHHg6Pu3lljTOwfhoVhXTN-wTxjR3" width="850" height="847" /><img src="https://lh3.googleusercontent.com/1BNsZEg581IIc_q4u5L9f30-Y2WoLjYDcAjAD5leZUDznCOwfLYszi2kJeVr2lBsrP8oATR0QIhd5cSCeokDA2HjV6tkuVX9SB7YnOwSLr_VYmRrvRsZRfXin8JPaZk1BGWk75LY" width="849" height="836" /><img src="https://lh6.googleusercontent.com/UfkAGTG4ATKq4LsPOfom3JjB-AHKqmwSmOSI6WeM9zsBN1XTZtVLQVeJrHyE9z2VaxMu2D7rROyUbAvFqEQwD4Bf4kaEwgDMpopFT-wUU49M7_meYBfHOx6sIVNagBvh6BkI7ZMG" width="852" height="800" /></p>
            <p style="text-align: center;"><br /><br /></p>`,
          firstpic: require('../assets/news/chien/img02.jpg'),
          tab: ['活動訊息'],
          hashtag: ['迪化街', '汐止'],
          postid: '868754653248532',
          pic: ['https://drive.google.com/uc?export=view&id=1K2xeJD73Gmu-5mgkoz5bmM-X2p3BXVlC',
            'https://drive.google.com/uc?export=view&id=1HKUhZS8t3vjDjfa-dCSN4REm2qCusVIb',
            'https://drive.google.com/uc?export=view&id=15oldjdePr4HTNztrv9ATCJUhQyLISR67',
            'https://drive.google.com/uc?export=view&id=1-LbCUpLeu7q_BcqiJiptCKXBWZhE2utw',
            'https://drive.google.com/uc?export=view&id=1VvYIzpLy0cElvWZxHWzcWTKwgJnQfCmC',
          ],
          video: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/jxp-mxYuaPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        },
        {
          pro: '偏鄉藝術美感育苗計畫',
          title: '邀約輔導教師共同研議教案內容',
          date: '2020/01',
          content: `<p>本計畫依照12年國民教育課程綱要之精神與內涵，以「音樂」、「視覺藝術」、「表演藝術」三大藝術領域內涵進行生活美感課程設計。將邀請吳望如、陳盈君、邱美惠、蔡秉峪&hellip;..等多位在藝術教育深耕多年的優秀教師，一同組成課程研議小組，透過創意發想、腦力激盪、雙向溝通，激發嶄新不凡的跨域思維，從而設計具創新、互動、人文及在地特色的教案內容，藉以提升並內化美感認知及素養。</p>`,
          firstpic: require('../assets/NEWS2.png'),
          tab: ['活動訊息'],
          hashtag: ['輔導教師', '教案'],
          postid: '86556148532',
          pic: [
          ],
        },
        {
          pro: '偏鄉藝術美感育苗計畫',
          title: '招募「藝術」、「教育」系所大專院校學生',
          date: '2020/02',
          content: `<p>為使藝術的種子能夠紮實埋進偏鄉及離島等地，提供國中及國小孩子更多接觸藝術與文化的機會，在此廣邀藝術創作及教育相關系所之大專院校在學學生，期待透過各位堅強的韌性及服務的熱忱，展現十足親和力，齊心為孩童貢獻一己之力，並將此次活動所學所聞，作為未來教育生涯的重要養分，提供更多有機土壤，繼續滋養下個世代，讓分享的感動得以延續，讓莘莘學子更加耀眼綻放。</p>`,
          firstpic: require('../assets/NEWS2.png'),
          tab: ['重要公告'],
          hashtag: ['藝術', '教育'],
          postid: '86556542148532',
          pic: [
          ],
        },
        {
          pro: '偏鄉藝術美感育苗計畫',
          title: '打造偏鄉藝術空間，歡迎偏鄉、離島學校加入駐點',
          date: '2020/03',
          content: `<p>為打造具創新思維、創意美學及人文涵養的藝術空間及環境，除了具服務熱忱之教育相關院生，偏鄉或離島之教師亦須提供管道及出口，讓中、小學孩子能在想像力的大千世界盡情揮發、徜徉，接受文藝的薰陶與新奇的碰撞，進而走向美感的康莊大道，以達創意不離手，藝術帶著走。<br />教育為百年千年的事業，需要許許多多化作春泥的花朵一起鋪墊、深耕，讓下個世代更加盛開綻放，故歡迎有興趣之學校加入團隊，成為杏壇接力的一份子。</p>`,
          firstpic: require('../assets/NEWS2.png'),
          tab: ['重要公告'],
          hashtag: ['藝術', '空間', '偏鄉', '離島'],
          postid: '865565421485656356',
          pic: [
          ],
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '教育部「幼兒園美感教育扎根計畫」全國美感社群帶領人聯席會議',
          date: '2020/01/10',
          content: `<p dir="ltr" style="text-align: center;">邀請全國美感社群帶領人與會，分享 108 年社群運作情形與帶領策略分享，及明年 7 月各區社群成果分享預計形式。&nbsp;</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/jNOuyLbAKd4kKDbdnxtcEhoY_UrgPN503LsvVFOkjqnnVDh9Ys9-9jAPq452wK0XRTF9LMTsJD2Ci0wLPwa8NSeth_oXHvTdOMJtzAiPHwgyXwARHd5XIo25YDZEmAm24gWX4qWY" width="426" height="320" /></p>
            <p dir="ltr" style="text-align: center;">國立臺南大學藝術學院林玫君院長開場講述本期計畫進度及重點&nbsp;</p>
            <p><strong>&nbsp;</strong></p>
            <div dir="ltr" align="center">
            <table style="width: 472px;"><colgroup><col /><col /></colgroup>
            <tbody>
            <tr style="height: 0pt;">
            <td style="width: 220.219px;">
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/ZTyIhSmAJZJKBvF4dyaUQu-1JDNmMtXcplO-YU3wxW1auCw4_Y5EuDaAfCM51u3A7usa-7je_cujTaBvJPfhi8Zjl-V7Oaa0o2wb4rgCX6LFXXpqEe1b4E64tixHu8_3VRGqLorD" width="191" height="144" /></p>
            <p dir="ltr">國立臺東大學幼兒教育學系施淑娟副教授分享東區社群運作情形</p>
            </td>
            <td style="width: 223.219px;">
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/YtaErpO_aN6rSIVKKWQliyrZNohxrX22r47tqMfYfuq75YrGyTlR6pdtOLGGpgT56Y5S15xG0_NHBYGqvhfdEMJS2u7XuRED4_YRhhoUzOveZEtpVfBN1LX4TNpMTrM-3Mhsmd40" width="191" height="144" /></p>
            <p dir="ltr">實踐大學王慧敏助理教授 分享北區社群成果預計形式&nbsp;</p>
            </td>
            </tr>
            <tr style="height: 0pt;">
            <td style="width: 220.219px;">
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/FzEvXWZgStWvnjKVsirj9jiDSYlub-hUZnrKDZPDUwssqW-V4kDpmyCqOk5by5V9o_N5EkrAo7LW0xSvl9r99Tar1oELDguu-aIq2A3cGJh-hNsIXLRM2Ez4vsFcb6v4g9zFYXsY" width="191" height="144" /></p>
            <p dir="ltr">張召雅助理教授分享北區運用鬆散素材於美感教育社群帶領策略&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
            </td>
            <td style="width: 223.219px;">
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/F1Ja9PGwbn7Z1FONxZQELLI9QM80hBeDFk9hZIjgKrYaiGqbr0KyeSzsDMqllgNv2ixlQ64ChLQArIdTCdqJegktDjPaSBJVe9Fzb7lZxV2CzKoVPdB8ppWh-1T4ATQFVwnNBxyg" width="191" height="144" /></p>
            <p dir="ltr">經國管理暨健康學院幼兒保育系楊淑雅助理教授分享北區幼兒園美感空間營造社群帶領策略&nbsp;</p>
            </td>
            </tr>
            </tbody>
            </table>
            </div>`,
          firstpic: require('../assets/NEWS/yui/img01.jpg'),
          tab: ['活動訊息'],
          hashtag: ['美感社群', '幼兒教育'],
          postid: '8655865542',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【南】區幼兒戲劇教學社群活動─故事戲劇 II',
          date: '2020/02/22',
          content: `<p dir="ltr" style="text-align: left;">由林純華教師以巨人與春天帶領戲劇活動實作，再請國立臺南大學林 玫君院長教授戲劇教學之技巧。小組成員除分享在地節慶戲劇活動實 作成果外，也在老師們的帶領下,進行故事戲劇課程討論。&nbsp;</p>`,
          firstpic: require('../assets/NEWS2.png'),
          tab: ['活動訊息'],
          hashtag: ['故事戲劇', '戲劇教學'],
          postid: '8655464568568532',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【南】區幼兒影像美感培力社群活動─外拍實習',
          date: '2020/02/22',
          content: `<p dir="ltr" style="text-align: left;">承繼去年社群共學時學習到的光線掌握、構圖等技巧，在攝影家邱泓 璋老師的帶領下，於臺南孔廟中外拍實習，進行構圖與觀察力的綜合訓練。</p>`,
          firstpic: require('../assets/NEWS2.png'),
          tab: ['活動訊息'],
          hashtag: ['觀察力', '臺南孔廟'],
          postid: '865546456855453354',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【南】區從瑞吉歐課程看視覺藝術教學社群活動─光影下的色與形',
          date: '2020/02/16',
          content: `<p dir="ltr" style="text-align: left;">從各種物件色彩的觀察開始，陳育瑩教師透過光影遊戲引導學員探討色彩與造型可以如何表現創作。</p>`,
          firstpic: require('../assets/NEWS2.png'),
          tab: ['活動訊息'],
          hashtag: ['色彩', '視覺藝術'],
          postid: '86554645668553354',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【南】區幼兒園美感環境再造社群活動─美感校園案例觀摩',
          date: '2020/02/22',
          content: `<p dir="ltr" style="text-align: left;">參訪交流其他美感校園案例的規劃與執行，並邀請教師分享校園改造案例及創發校園空間美感行動，其中包含具體構想、設計理念、設計主題意象、設計元素、設計構想。&nbsp;</p>`,
          firstpic: require('../assets/NEWS2.png'),
          tab: ['活動訊息'],
          hashtag: ['校園', '設計'],
          postid: '86554546553354',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【中】區美感情境營造社群活動─美感情境共構之實例探究',
          date: '2020/02/21',
          content: `<p dir="ltr" style="text-align: left;">邀請具備運用社區資源建立美感情境經驗、以及與幼兒共構學習情境有豐富經驗之專家經驗分享，再由兩位講師與專家帶領社群成員依據前次社群結束後之作業內容，進行分享討論並提供回饋建議。&nbsp;</p>`,
          firstpic: require('../assets/NEWS2.png'),
          tab: ['活動訊息'],
          hashtag: ['情境營造', '美感'],
          postid: '86554646653354',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【中】區幼兒戲劇教學社群活動─故事、繪本與戲劇活動',
          date: '2020/01/03',
          content: `<p dir="ltr" style="text-align: left;">朝陽科技大學幼兒保育系吳鷰儀助理教授以故事或繪本進行戲劇活動，說明如何藉由自發性戲劇遊戲，與運用文本進行教學引導，提升學員協助幼兒建構戲劇活動，進行表達與創作之能力。&nbsp;</p>`,
          firstpic: require('../assets/NEWS2.png'),
          tab: ['活動訊息'],
          hashtag: ['故事', '戲劇', '繪本'],
          postid: '865546466566564',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【北】區幼兒園餐桌美學社群活動─口布與餐墊',
          date: '2020/03/14',
          content: `<p dir="ltr" style="text-align: left;">讓社群學員透過材質與造形變化認識口布與餐墊之於餐桌美學的意義，並讓教師們嘗試將所學轉化應用於幼兒餐桌美感教學。</p>`,
          firstpic: require('../assets/NEWS2.png'),
          tab: ['活動訊息'],
          hashtag: ['餐桌', '美學'],
          postid: '8655464665655845454',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【北】區運用鬆散素材於美感教育社群活動─鬆散素材運用於幼兒園美感教育之多面向',
          date: '2020/02/22',
          content: `<p dir="ltr" style="text-align: left;">張召雅助理教授從美感教育的概念切入，包含美感課程之選題與運作、具美感特性的學習區類型與運作、例行活動時段融入美感教育之方式與實務、鬆散素材融入美感六大實施原則、美感幼兒園實例等，再針對幼兒園美感教育於課程、學習區、例行活動之規畫進行小組討論。&nbsp;</p>`,
          firstpic: require('../assets/NEWS2.png'),
          tab: ['活動訊息'],
          hashtag: ['鬆散素材', '幼兒園美感教育'],
          postid: '8655464654768464454',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【東】區園藝植物營造幼兒園美感環境社群活動─園藝美學四',
          date: '2020/03/14',
          content: `<p dir="ltr" style="text-align: left;">承繼之前認識常見花草植物的課程，鄧明光老師在這次共學中向教師們介紹隨手生活的園藝美學創造，並讓大家分享幼兒利用學校的植物創造的成品。&nbsp;</p>`,
          firstpic: require('../assets/NEWS2.png'),
          tab: ['活動訊息'],
          hashtag: ['園藝', '幼兒園美感教育', '植物'],
          postid: '86554646547545645644',
        },
      ],
    }
  },
  
  computed: {
    //找到文章
    showPost() {
      //現在暫時用tab的名稱找
      var s = this.tab
      return this.NewsArray.filter(function(item) {return JSON.stringify(item.tab).indexOf(s)!=-1})
    }
  },
  methods: {
    //轉換HTML
    HtoS(s) {
      return s.replace(/<(?:.|\s)*?>/g,"").replace(/&nbsp;/ig, "").replace(/&hellip;/ig, "").replace(/&mdash;/ig,"")
    },
  }
}
</script>

<style lang="sass">
@import '@/assets/style.sass'
.hn
  width: 95%
  height: 45vw
  // +bb
  background: url('../assets/news1block.png')
  +bgcon
  background-position: 0 0
  background-size: 100% 100%
  margin-left: 2.5%
  //TAB區
  .hnTabBlock
    width: 100%
    height: 5.9%
    // +bb
    +flexrow
    justify-content: space-around
    align-items: center
    position: relative
    .hnTab
      position: relative
      font-size: 1vw
      cursor: pointer
      color: #878787
      font-weight: 800
      // width: 10%
      // height: 20%
      // +flexcolumn
      .hnTabTri
        position: absolute
        +size(0.7vw)
        background: url('../assets/HomeNews/smalltri.png')
        +bgcon
        left: 50%
        margin-left: -0.35vw
        display: none
        &.active
          // +size(500px)
          display: block


  //第一欄
  .hnBlock1
    width: 100%
    height: 22.4%
    box-sizing: border-box
    // +bb
    +flexrow
    //左
    .hnPost1
      width: 50%
      height: 100%
      box-sizing: border-box
      +flexrow
      padding: 2%
      .hnPostPic1
        +size(40%, 100%)
        margin-right: 5%
      .hnPostText1
        width: 50%
        height: 100%

        .hnPostTitle1
          height: 30%
          font-size: 0.9vw
          font-weight: 800
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +smallcom
            font-size: 1vw
            height: 36%
            letter-spacing: 0.1vw
        .hnPostSubTitle1
          height: 20%
          line-height: 1.6vw
          font-size: 0.8vw
          color: #878787
          overflow: hidden !important
          text-overflow: ellipsis !important
          white-space: nowrap !important
          +smallcom
            font-size: 1vw
            margin-top: 0.5vw

        .hnPostDate1
          height: 23%
          font-size: 0.8vw
          color: #A06F21
          +smallcom
            // font-size: 1vw
            margin-top: 0.5vw


        .hnPostContent1
          height: 28%
          font-size: 0.8vw
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +smallcom
            display: none

    //右
    .hnPost2
      width: 50%
      height: 100%
      box-sizing: border-box
      +flexrow
      padding: 2%
      .hnPostPic2
        +size(40%, 100%)
        margin-right: 5%
      .hnPostText2
        width: 50%
        height: 100%
        .hnPostTitle2
          height: 30%
          font-size: 0.9vw
          font-weight: 800
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +smallcom
            font-size: 1vw
            height: 36%
            letter-spacing: 0.1vw

        .hnPostSubTitle2
          height: 20%
          line-height: 1.6vw
          font-size: 0.8vw
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          +smallcom
            font-size: 1vw
            margin-top: 0.5vw
        .hnPostDate2
          height: 23%
          font-size: 0.8vw
          color: #A06F21
          +smallcom
            // font-size: 1vw
            margin-top: 0.5vw
        .hnPostContent2
          height: 28%
          font-size: 0.8vw
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +smallcom
            display: none
  //第二欄
  .hnBlock2
    width: 100%
    height: 44.8%
    box-sizing: border-box
    // +bb
    +flexrow
    //左
    .hnPost3
      width: 24.9%
      height: 100%
      box-sizing: border-box
      // +bb
      padding: 3%

      .hnPostPic3
        +size(100%, 45%)
        // +bb
      .hnPostText3
        height: 55%
        .hnPostTitle3
          height: 32%
          padding: 0.5vw 0 1vw 0
          box-sizing: border-box
          // line-height: 1.6vw
          font-size: 0.9vw
          font-weight: 800
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +smallcom
            font-size: 1vw
            height: 37%
            letter-spacing: 0.1vw
        .hnPostSubTitle3
          height: 26%
          // +bb
          line-height: 1.2vw
          font-size: 0.8vw
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +smallcom
            height: 31%
            font-size: 1vw
            margin-top: 0.5vw
            line-height: 1.5vw
        .hnPostDate3
          height: 19%
          font-size: 0.8vw
          color: #A06F21
          +smallcom
            margin-top: 0.5vw

        .hnPostContent3
          height: 24%
          font-size: 0.8vw
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +smallcom
            display: none
    //右
    .hnPost4
      width: 75.1%
      height: 100%
      box-sizing: border-box
      // +bb
      padding: 6%
      +flexrow

      .hnPostPic4
        +size(40%, 100%)
        margin-right: 5%
      .hnPostText4
        width: 55%
        .hnPostTitle4
          height: 23%
          padding: 0.5vw 0 1vw 0
          box-sizing: border-box
          // line-height: 1.6vw
          font-size: 0.9vw
          font-weight: 800
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +com
            font-size: 1vw
          +smallcom
            font-size: 1.3vw
            height: 28%
        .hnPostSubTitle4
          height: 18%
          // +bb
          line-height: 1.2vw
          font-size: 0.8vw
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +com
            line-height: 1.5vw
            height: 20%
          +smallcom
            height: 22%
            font-size: 1vw
            margin-top: 0.5vw
            line-height: 1.7vw
        .hnPostDate4
          height: 19%
          font-size: 0.8vw
          line-height: 30px
          color: #A06F21
        .hnPostContent4
          height: 25%
          font-size: 0.8vw
          color: #878787
          overflow: hidden
          line-height: 1.2vw
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 3
          -webkit-box-orient: vertical
          +com
            height: 30%
            line-height: 1.5vw
          +smallcom
            height: 30%
            font-size: 1vw
            line-height: 2.1vw
            -webkit-line-clamp: 2


  //第三欄
  .hnBlock3
    width: 100%
    height: 22%
    box-sizing: border-box
    // +bb
    +flexrow
    //左
    .hnPost5
      width: 50%
      height: 100%
      box-sizing: border-box
      +flexrow
      padding: 2%
      // +bb
      .hnPostPic5
        +size(40%, 100%)
        margin-right: 5%
      .hnPostText5
        width: 50%
        height: 100%
        .hnPostTitle5
          height: 30%
          font-size: 0.9vw
          font-weight: 800
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +smallcom
            font-size: 1vw
            height: 40%
            letter-spacing: 0.1vw
        .hnPostSubTitle5
          height: 20%
          line-height: 1.6vw
          font-size: 0.8vw
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          +smallcom
            font-size: 1vw
            margin-top: 0.5vw
        .hnPostDate5
          height: 23%
          font-size: 0.8vw
          color: #A06F21
        .hnPostContent5
          height: 28%
          font-size: 0.8vw
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +smallcom
            display: none
    //右
    .hnPost6
      width: 50%
      height: 100%
      box-sizing: border-box
      +flexrow
      padding: 2%
      // +bb
      .hnPostPic6
        +size(40%, 100%)
        margin-right: 5%
      .hnPostText6
        width: 50%
        height: 100%
        .hnPostTitle6
          height: 30%
          font-size: 0.9vw
          font-weight: 800
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +smallcom
            font-size: 1vw
            height: 40%
            letter-spacing: 0.1vw
        .hnPostSubTitle6
          height: 20%
          line-height: 1.6vw
          font-size: 0.8vw
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          +smallcom
            font-size: 1vw
            margin-top: 0.5vw
        .hnPostDate6
          height: 23%
          font-size: 0.8vw
          color: #A06F21
        .hnPostContent6
          height: 28%
          font-size: 0.8vw
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +smallcom
            display: none
</style>