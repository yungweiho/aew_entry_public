<template lang="pug">
.po
  .poBlock(v-for="item in showPost" :key="item.postid")
    //封面照片
    .poPic(:style="{background:　'url(' + item.firstpic + ')', backgroundSize: 'cover', backgroundPosition: '0 0', backgroundRepeat: 'no-repeat'}")
    //標題
    .poTitle {{ item.title }}
    .poSubTitle
      //日期
      .poDate {{ item.date }}
      //作者
      .poAuthor {{ item.pro }}
    //影片
    .poVideo(v-html="item.video" v-if="item.video")
    //文字內容
    .poContent(v-html="item.content")
    //#
    .poTag
      .poTagText(v-for="tag in item.hashtag") # {{ tag }}
  //推薦
  .poResTitle(v-if="showRes.length>0") 看更多：
  .poRes(v-if="showRes.length>0")
    router-link.Res(v-for="item in showRes.slice(0,3)" :to="'/post/' + item.postid" :style="{background:　'url(' + item.firstpic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}") 
      .block
        .text {{ item.title }}
</template>

<script>
export default {
  data() {
    return {
      NewsArray: [
        {
          pro: '中小學在職教師暨行政人員素養提升計畫',
          title: '日常景框 X 美感生活 X 藝術實踐 2th「補助執行跨域整合美感教案徵選活動」',
          date: '2020/01/03',
          content: `
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
          firstpic: require('../../assets/news/chongte/img01.jpg'),
          tab: ['活動訊息'],
          hashtag: ['美感生活', '藝術實踐'],
          postid: '86548532',
        },
        {
          pro: '中小學在職教師暨行政人員素養提升計畫',
          title: '阮璽X美感素養提升計畫「有溫度的影像」工作坊',
          date: '2020/01/08',
          content: `<p style="text-align: center;"><strong>&nbsp;</strong></p>
            
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
          firstpic: require('../../assets/news/chongte/img02.jpg'),
          tab: ['活動訊息'],
          hashtag: ['攝影', '阮璽'],
          postid: '8658654248532',
        },
        {
          pro: '見美．踐美．漸美-建構美感生活學習地圖之方案實踐實施計畫',
          title: '向陽迎新春，高雄市鳳翔國小打造「向日葵迷宮」新樂園',
          date: '2020/01',
          content: `<p dir="ltr">&nbsp;</p>
            
            <p dir="ltr">始終昂首挺立迎向陽光的向日葵，一直是鳳翔校園中希望的象徵。每一年葵花種籽收成後，交由下一屆學弟妹撒播，就如同希望的傳承般是鳳翔的教育薪傳。</p>
            <p dir="ltr">108學年鳳翔國小加入教育部「美感生活學習地圖」計畫，透過設計思考教學，讓學生發想這一片向日葵花園，除了如同往常般一屆一屆薪火相傳外，還能開創出甚麼新思維。</p>
            <p dir="ltr">孩子有許多天馬行空的發想，最後在共同討論下，設計了一個可以讓人穿梭其中的「向日葵迷宮」，走入規劃路線中，不僅更能親近花海，聆賞花香、蜂舞、蝶飛&hellip;，也蘊藏著屬於孩子自己秘密基地的無限夢想。</p>
            <p dir="ltr">元旦新春，燦黃向日葵迎風搖曳，不僅招睞來蜂蝶採蜜，更引來師生、親子&hellip;在迷宮中，攜手交心共賞遊！</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/rwpmuPqqfIrrgFjnXsWe3qde0rY8OEjzWpldUInbO8uL2GIGsEeR0GVdOY1uwns61nhiVWbs08ZLsHanXQ1UQlGHPQ-YNUSeBQkzVu2p0C7CrOUAvmt8NRkgPLcAhwv2grw20U-z" width="842" height="430" /><img src="https://lh5.googleusercontent.com/5hV7PWOZY9FVTjAuOaDVoYqxUPx9QIsCq2-761kRp3jNLBJeK_Avty8rCLiMTxFXS9-5lA-KR3mtOE26hx8aq-0IFKXL3E4GOe1MbTqDEOwpvu7W4I4I7f8eoh-auuQVQmk_sb4w" width="393" height="450" /><img src="https://lh3.googleusercontent.com/gM2gx94RtFaHh7w_IXZ6s9FhWj4RTyr2pxY1kpr2ijqMbyzem-0wH2B4gWRIMY0U4L5YxxBMIywabOrmcFM_qnQ_SOvZyn7Vn3p1c01mOWvFe5v15RnEmGisza4HLllroX3Xqybb" width="394" height="525" /><img src="https://lh4.googleusercontent.com/Wv2h1XQ8LO9DLkp-UVENI8bnzvJpxANZOD4WGFTH2lk-8JvA0aJKd6HuPUEqRZR5Shf8hAc53wXsLS5b5zA7iDMLYOgEwqebncdM4xBnXQhDPNdXPJIyfeKEtsNkWKvNKTBC0vft" width="845" height="561" /><img src="https://lh3.googleusercontent.com/sE7Qnn1-oSlQjajZXBbdjhVNfEkLNXtznH3zgV1uZQkHJJ3mQmTpvMq0O5gY7bfTjBVnifGYwwqaww4OBj8IGLHzzslyMfCq4EsL-BLR9EkjuBYImaFdUmr-QQrJmv3JjjRsWYtR" width="606" height="810" /><img src="https://lh5.googleusercontent.com/x5zHRnxghFuPRxNHqTBwvovP41EiNP7iF6EWWl_DFL6M1fxhkG4MhwPl_yUuYYuIE-572jzkqzAQQaNTPvAvWrqnJSVf9Ys_Ye5Munu6frd-g4nH-1zdxsyjgX4lltNana7A0awB" width="840" height="600" /><img src="https://lh5.googleusercontent.com/6O34MkLFclwVC5pyU20hziCF8M7mUO2QTPuOyxm3WEXB8jsE_ay_h1rfJgtc2plDbjkZFoHufUqKH597omuG06hWz0uFbQJRHF5kFIqOvJ9oUHDCKAGsb2YLhWjd-lt-Xy-XLn0_" width="845" height="476" /></p>
            <p style="text-align: center;"><br /><br /></p>`,
          firstpic: require('../../assets/news/chien/img01.jpg'),
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
            
            <p dir="ltr">因漲潮時，海汐、河汐相擊之聲，因此汐止有「灘音」之古名，如此美麗的往昔，現在卻陷於「淹水」刻板印象，百年老厝也逐漸凋零消逝。</p>
            <p dir="ltr">青山國中孩子曾經運用光影交錯營造「時光隧道」，布展「古厝光影」讓家鄉與未來對話；加入教育部「美感生活學習地圖」計畫後，教學團隊帶著孩子走訪大稻埕、募集台北老味道，在踏訪風華再造的街徑後，希望也能結合校本課程、資訊科技，跨域創藝找到一條回家的路，在「灘音香徑」中建構屬於自己家鄉的百年風華，喚起汐止居民共同的美好記憶！</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/StKmMJq6KCX9adXNqCxfFCU26dVR9I3EfsVBouyYck4pzhRrGUrReN0tUgShCQ1VGC93rmiP395CITc5IXULQfMVIM-VPS8cDlP678KDstOloIbk8dg3Vzg2kVBj9wPmlkNPrcV0" width="849" height="567" /><img src="https://lh4.googleusercontent.com/BdEkdhrm1Ag3QQdpQfjyzaYifMnHLoqImiJxGtocdX-5SEZtRu5d7rAQZ6grJxfp1mGX3s-2ngPOXikvUgFvo_gXTw7IHod3Pngnd8PL88H82pXA6hPKw1qhgAgOdY2M6d0-8gvU" width="838" height="1257" /><img src="https://lh5.googleusercontent.com/3tf2P2FHvidC1Xt8kg2nfjfbxSk8aTMNs6jg_ZiIKeW_PL-45HMjJe9v_cjFx4VRcrL2OI_Tn7pYkpDdooP814C7D1C9wFTBR97wzJa0FSw1ximk-wtZbeCUfn2aKVWY_UnB3h_J" width="848" height="568" /><img src="https://lh4.googleusercontent.com/EOAJE6veQvXQTvWn2-e-vTjesMK4VUuNH-Z3_lc7kMLR1Wqp93d_pEiVsrHI1IF-HPVmEbR4KdGJQdLi0XBkGyrhiWNhDDWBso_ypFXFMJHsHHg6Pu3lljTOwfhoVhXTN-wTxjR3" width="850" height="847" /><img src="https://lh3.googleusercontent.com/1BNsZEg581IIc_q4u5L9f30-Y2WoLjYDcAjAD5leZUDznCOwfLYszi2kJeVr2lBsrP8oATR0QIhd5cSCeokDA2HjV6tkuVX9SB7YnOwSLr_VYmRrvRsZRfXin8JPaZk1BGWk75LY" width="849" height="836" /><img src="https://lh6.googleusercontent.com/UfkAGTG4ATKq4LsPOfom3JjB-AHKqmwSmOSI6WeM9zsBN1XTZtVLQVeJrHyE9z2VaxMu2D7rROyUbAvFqEQwD4Bf4kaEwgDMpopFT-wUU49M7_meYBfHOx6sIVNagBvh6BkI7ZMG" width="852" height="800" /></p>
            <p style="text-align: center;"><br /><br /></p>`,
          firstpic: require('../../assets/news/chien/img02.jpg'),
          tab: ['活動訊息'],
          hashtag: ['迪化街', '汐止'],
          postid: '868754653248532',
          pic: ['https://drive.google.com/uc?export=view&id=1K2xeJD73Gmu-5mgkoz5bmM-X2p3BXVlC',
            'https://drive.google.com/uc?export=view&id=1HKUhZS8t3vjDjfa-dCSN4REm2qCusVIb',
            'https://drive.google.com/uc?export=view&id=15oldjdePr4HTNztrv9ATCJUhQyLISR67',
            'https://drive.google.com/uc?export=view&id=1-LbCUpLeu7q_BcqiJiptCKXBWZhE2utw',
            'https://drive.google.com/uc?export=view&id=1VvYIzpLy0cElvWZxHWzcWTKwgJnQfCmC',
          ],
          video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jxp-mxYuaPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          pro: '偏鄉藝術美感育苗計畫',
          title: '邀約輔導教師共同研議教案內容',
          date: '2020/01',
          content: `<p>本計畫依照12年國民教育課程綱要之精神與內涵，以「音樂」、「視覺藝術」、「表演藝術」三大藝術領域內涵進行生活美感課程設計。將邀請吳望如、陳盈君、邱美惠、蔡秉峪&hellip;..等多位在藝術教育深耕多年的優秀教師，一同組成課程研議小組，透過創意發想、腦力激盪、雙向溝通，激發嶄新不凡的跨域思維，從而設計具創新、互動、人文及在地特色的教案內容，藉以提升並內化美感認知及素養。</p>`,
          firstpic: require('../../assets/default.png'),
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
          firstpic: require('../../assets/default.png'),
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
          firstpic: require('../../assets/default.png'),
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
          firstpic: require('../../assets/NEWS/yui/img01.jpg'),
          tab: ['活動訊息'],
          hashtag: ['美感社群', '幼兒教育'],
          postid: '8655865542',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【南】區幼兒戲劇教學社群活動─故事戲劇 II',
          date: '2020/02/22',
          content: `<p dir="ltr" style="text-align: left;">由林純華教師以巨人與春天帶領戲劇活動實作，再請國立臺南大學林 玫君院長教授戲劇教學之技巧。小組成員除分享在地節慶戲劇活動實 作成果外，也在老師們的帶領下,進行故事戲劇課程討論。&nbsp;</p>`,
          firstpic: require('../../assets/default.png'),
          tab: ['活動訊息'],
          hashtag: ['故事戲劇', '戲劇教學'],
          postid: '8655464568568532',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【南】區幼兒影像美感培力社群活動─外拍實習',
          date: '2020/02/22',
          content: `<p dir="ltr" style="text-align: left;">承繼去年社群共學時學習到的光線掌握、構圖等技巧，在攝影家邱泓 璋老師的帶領下，於臺南孔廟中外拍實習，進行構圖與觀察力的綜合訓練。</p>`,
          firstpic: require('../../assets/default.png'),
          tab: ['活動訊息'],
          hashtag: ['觀察力', '臺南孔廟'],
          postid: '865546456855453354',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【南】區從瑞吉歐課程看視覺藝術教學社群活動─光影下的色與形',
          date: '2020/02/16',
          content: `<p dir="ltr" style="text-align: left;">從各種物件色彩的觀察開始，陳育瑩教師透過光影遊戲引導學員探討色彩與造型可以如何表現創作。</p>`,
          firstpic: require('../../assets/default.png'),
          tab: ['活動訊息'],
          hashtag: ['色彩', '視覺藝術'],
          postid: '86554645668553354',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【南】區幼兒園美感環境再造社群活動─美感校園案例觀摩',
          date: '2020/02/22',
          content: `<p dir="ltr" style="text-align: left;">參訪交流其他美感校園案例的規劃與執行，並邀請教師分享校園改造案例及創發校園空間美感行動，其中包含具體構想、設計理念、設計主題意象、設計元素、設計構想。&nbsp;</p>`,
          firstpic: require('../../assets/default.png'),
          tab: ['活動訊息'],
          hashtag: ['校園', '設計'],
          postid: '86554546553354',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【中】區美感情境營造社群活動─美感情境共構之實例探究',
          date: '2020/02/21',
          content: `<p dir="ltr" style="text-align: left;">邀請具備運用社區資源建立美感情境經驗、以及與幼兒共構學習情境有豐富經驗之專家經驗分享，再由兩位講師與專家帶領社群成員依據前次社群結束後之作業內容，進行分享討論並提供回饋建議。&nbsp;</p>`,
          firstpic: require('../../assets/default.png'),
          tab: ['活動訊息'],
          hashtag: ['情境營造', '美感'],
          postid: '86554646653354',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【中】區幼兒戲劇教學社群活動─故事、繪本與戲劇活動',
          date: '2020/01/03',
          content: `<p dir="ltr" style="text-align: left;">朝陽科技大學幼兒保育系吳鷰儀助理教授以故事或繪本進行戲劇活動，說明如何藉由自發性戲劇遊戲，與運用文本進行教學引導，提升學員協助幼兒建構戲劇活動，進行表達與創作之能力。&nbsp;</p>`,
          firstpic: require('../../assets/default.png'),
          tab: ['活動訊息'],
          hashtag: ['故事', '戲劇', '繪本'],
          postid: '865546466566564',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【北】區幼兒園餐桌美學社群活動─口布與餐墊',
          date: '2020/03/14',
          content: `<p dir="ltr" style="text-align: left;">讓社群學員透過材質與造形變化認識口布與餐墊之於餐桌美學的意義，並讓教師們嘗試將所學轉化應用於幼兒餐桌美感教學。</p>`,
          firstpic: require('../../assets/default.png'),
          tab: ['活動訊息'],
          hashtag: ['餐桌', '美學'],
          postid: '8655464665655845454',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【北】區運用鬆散素材於美感教育社群活動─鬆散素材運用於幼兒園美感教育之多面向',
          date: '2020/02/22',
          content: `<p dir="ltr" style="text-align: left;">張召雅助理教授從美感教育的概念切入，包含美感課程之選題與運作、具美感特性的學習區類型與運作、例行活動時段融入美感教育之方式與實務、鬆散素材融入美感六大實施原則、美感幼兒園實例等，再針對幼兒園美感教育於課程、學習區、例行活動之規畫進行小組討論。&nbsp;</p>`,
          firstpic: require('../../assets/default.png'),
          tab: ['活動訊息'],
          hashtag: ['鬆散素材', '幼兒園美感教育'],
          postid: '8655464654768464454',
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          title: '【東】區園藝植物營造幼兒園美感環境社群活動─園藝美學四',
          date: '2020/03/14',
          content: `<p dir="ltr" style="text-align: left;">承繼之前認識常見花草植物的課程，鄧明光老師在這次共學中向教師們介紹隨手生活的園藝美學創造，並讓大家分享幼兒利用學校的植物創造的成品。&nbsp;</p>`,
          firstpic: require('../../assets/default.png'),
          tab: ['活動訊息'],
          hashtag: ['園藝', '幼兒園美感教育', '植物'],
          postid: '86554646547545645644',
        },
        {
          pro: '中小學在職教師暨行政人員素養提升計畫',
          firstpic: require('../../assets/ARCHI/chongte/img01.jpg'),
          title: '日常景框 X 美感生活 X 藝術實踐 「補助執行跨域整合美感教案徵選」 活動花絮',
          author: '',
          date: '2020/01/08',
          content: `
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
          firstpic: require('../../assets/ARCHI/chongte/img02.jpg'),
          title: '美感素養提升計畫「感性啟蒙」研習課程 活動花絮',
          author: '',
          date: '2020/01/08',
          content: `
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
          firstpic: require('../../assets/ARCHI/chongte/img03.jpg'),
          title: '美感素養提升計畫X史博館行動博物館 研習課程 活動花絮',
          author: '',
          date: '2020/01/08',
          content: `
            
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
          firstpic: require('../../assets/ARCHI/chongte/img04.jpg'),
          title: '美感素養提升計畫X黎美光 創意 心理工作站 研習課程 活動花絮',
          author: '',
          date: '2020/01/08',
          content: `<p dir="ltr">
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
        //   firstpic: require('../../assets/ARCHI/chongst/img01.jpg'),
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
        //   firstpic: require('../../assets/ARCHI/chongst/img02.jpg'),
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
          firstpic: require('../../assets/ARCHI/chein/img01.jpg'),
          title: '從在地出發，翻轉「養鴨」傳統產業的嘉義縣大林鎮排路國小',
          author: '',
          date: '2019/12',
          content: `<p style="margin: 0cm 0cm 0.0001pt; ;"><span style="">位於純樸鄉間、全校只有</span>18<span style="">個孩子的嘉義縣排路國小，在素有「鴨子媽媽的故鄉」之稱的嘉義大林鎮，一直希望能帶著孩子為家鄉寫故事。</span></p>
            <p style="margin: 0cm 0cm 0.0001pt; ;"><span style="; ">加入教育部「美感生活學習地圖」計畫後，透過以學生為學習主體的課程規劃，教師共同備課、編寫教材，帶著孩子踏查社區、訪談耆老，了解在地特色、傳統產業；在故事回溯、串接後，畫出家鄉養鴨事業的產業鏈，並將養鴨故事彩繪社區，不僅讓社區走出去，更讓開闊的視野在孩子心中拓展</span><span style=";">!</span> </p>`,
          tab: ['活動成果'],
          hashtag: ['在地', '翻轉', '養鴨'],
          postid: '885525546521',
          pic: ['https://drive.google.com/uc?export=view&id=18LrC4pok2EaEs4UbdCNjma86XJyW_w8r',
            'https://drive.google.com/uc?export=view&id=1d048MOSFumjoueLAouhHmYItaAyTq5GY',
            'https://drive.google.com/uc?export=view&id=1qi6neBwY_87PJP1O9UectAQJ7zuEztCe',
            'https://drive.google.com/uc?export=view&id=1zZUj1IXpPhaNJk5YxeHn9IVbD1WHnxO2',
          ],
          video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MqRBBpo1xLw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          pro: '見美．踐美．漸美-建構美感生活學習地圖之方案實踐實施計畫',
          firstpic: require('../../assets/ARCHI/chein/img02.jpg'),
          title: '開展「Kacalisian」生命之旅的屏東縣長榮百合國小',
          author: '',
          date: '2019/11',
          content: `<p style="margin: 0cm 0cm 0.0001pt; ;"><span style="">因為莫拉克遷村建校的屏東縣長榮百合國小，不僅在文化回應教學中，提升學力、建構部學歷，更透過</span>108<span style="">年教育部「美感生活學習地圖」計畫，以「美」為基底，建置「童年山林、全人美學」的校本課程教學，慢慢找回原民孩子的自信。</span></p>
            <p style="margin: 0cm 0cm 0.0001pt; ;"><span style=";">108</span><span style="; ">年</span><span style=";">11</span><span style="; ">月受邀參加華山藝文特區雜學校展，讓部落孩子帶著自信、勇敢、快樂、互助，勇闖台北都市叢林，開展一場</span><span style="; ">「Kacalisian」生命之旅；無論在靜謐山林或喧囂城市，孩子們都展現從容的自信，自在地創發部落生命美學!</span> </p>`,
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
          firstpic: require('../../assets/ARCHI/foreign/img01.jpg'),
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
            <p style="margin: 0cm 0cm 0.0001pt; ;"><strong>&nbsp;</strong></p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/VN962GzSCAA_xuBEDv9NqPIiOZAeqjXR-xqFLQV9CXr8aTPVGk49yDX5d6vdXxB2XLEx5aYqgfu3SEb_JIZtWf9AzBpbUnToF6vHaNE5NUywXvrH11takv1xpdF9OzEet7CeBP0" width="554" height="578" /></p>
            <p dir="ltr">▲黃純敏教授代表團隊贈送台灣藍鵲特色瓷盤給方提斯應用科技大學藝術與表演學院院長尼佛特</p>
            <p style="margin: 0cm 0cm 0.0001pt; ;"><strong>&nbsp;</strong></p>
            <p dir="ltr">在漢斯應用科技大學(Hanze University of Applied Sciences)音樂學院爵士樂學系經理人兼國際關係專員揚&bull;克魯格(Jan-Gerd Kr&uuml;ger) 介紹荷蘭的藝術教育目標為藝術生活化，期盼學生畢業後能與社會做連結，從該校音樂新館練習室的玻璃落地窗設計，讓學生練習的畫面跟周遭社區環境連成一氣，成為城市藝術的一角，藉以拉近學校與社區關係，強化學校與社會的連結。</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/03-YJ8j9ZwAua-NfHUJOB9L2kAhlcCCbcSSBzKQjGOP8dvY71yQJB_u8BbzjQEu6OUOxKZIEgcvMBHSkVhkiLg1zEWmhhETWQNCnPaeJryTPWeN9swt0kBiBufc1cFw66jX9JPg" alt="漢斯應用科技大學" width="556" height="417" />▲漢斯應用科技大學藝術學院設計系主任韋爾海頓、藝術系主任波因特、講師格羅嫩堡與荷蘭團成員合影。</p>
            <p dir="ltr"><img src="https://lh6.googleusercontent.com/SQfaCRhJMhid7pNLUydf-l3FVC04iApWYLx2KSKfuGMDPB_N2EVxMv3zx8yXjxSmuJpYeh2ju2WCX5Xh4O6rE2FY3tDqf0txhv2GpzZ_1mfhMeF10IJTBgSg8UmJSW30eCZo2rk" width="554" height="415" /></p>
            <p dir="ltr">▲荷蘭團觀賞漢斯應用科技大學音樂學院學生樂團上課排練情形</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/XPSFNBlQ3r2u9mu-NYbCp25C4LSSruKAc87BzdXMI-56t4YEPr27p4kbW_rIY7gc0VApOiy6Q8n2TvnJIiHRS_mCSrxV03427xHTZjo4xB8ayA1hmHmjUK6l9EbZE-yRfx2vNlY" width="554" height="343" /></p>
            <p dir="ltr">▲漢斯應用科技大學音樂學院爵士樂系經理人克魯格與荷蘭團合影</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/nVaJg5xkeNcpsf4yTw8D-K5agtRmJ4v8w_wSGyKg7DF5rQdGXEvXslAJpPprhkwikDhumOLkPic2gaYzHp340qCOhDIiLNhxwg_iIid6Jx9RIcMW4K0EOgrNIK_7Wth6GVriiQo" width="554" height="395" /></p>
            <p dir="ltr">▲漢斯應用科技大學藝術學院設計系主任韋爾海頓與美術系講師格羅嫩堡與荷蘭團午餐交流</p>
            <p style="margin: 0cm 0cm 0.0001pt; ;"><strong>&nbsp;</strong></p>
            <p dir="ltr">胡塞爾耶納計畫實驗小學(RK Jenaplan Basisschool De Hussel)源於德國耶納計畫的教育實驗，在參訪前，邀請德國科隆大學沃爾特&middot;海爾曼(Walter Heilmann)教授為參訪團講述耶納混齡學習的幾個目的：創造力的養成、自我決斷力的培養（責任感）、同理心及個人發展、對話與尊重的重視，並陪同參訪該校教學現場，讓團員親身觀察體驗如同在「家庭群組」（family group）裡「客廳」一般的多向交流教室設置以及混齡教學。</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/-MMWzBaLhV4f12ld64qrN2djc4Xaf-EuMY9VcHPxkn6wDo-OSSIrKsudj7TsN50fMbQk-QgYD80MFthi1R4sex_ry5XUmiJeS72XUIkT5xvZBvZV2P5AVMPeIGZvWEY--v6Hdq0" width="554" height="385" /></p>
            <p dir="ltr">▲胡塞爾耶納教育實驗小學校長羅洛夫斯、副校長巴胡古納及海爾曼教授跟荷蘭團合影</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/ocEFAZyn4wkONVZgtr3pTeO9a7E58poxje8oBeSSsmzAi5SzuJa1B57RT-XvkPlQlQVvhZqKYdwSuQKT3ruDbbpBIMX7Y67KYkEN2WTt27AwUC7HW_-eWPC6ny4yPlWHUTuCq98" width="554" height="738" /></p>
            <p dir="ltr">▲林佳玫老師於胡塞爾耶納計畫實驗小學與帶班老師交流</p>
            <p style="margin: 0cm 0cm 0.0001pt; ;"><strong>&nbsp;</strong></p>
            <p dir="ltr">阿瑪迪斯高中(Amadeus Lyceum) 為荷蘭烏特勒支市具代表性的綜合高中之一，重視文化發展與訓練的課程，其文化教育包含藝術、媒體、文化遺產相關知識。副校長馬克&middot;范德維德(Marc Van de Velde)介紹學校除了藝術知能的基礎訓練以外，文化遺產為主題融入式的跨領域學科教學為其亮點，例如以荷蘭建築為課程主題，結合數學與物理的知識，以跨學科的課程模式培養學生的創作能力、技能以及批判思考。</p>
            <p dir="ltr"><img src="https://lh4.googleusercontent.com/oh0BPZDebhlkNMYuqc4dx4C_kZ10MvvYyYRsdQAp8f_zoE4FSkwJUSRJlYCoi8bNkwTP8A0N_JqoJ7oFNZQFgO9CVBhowWgxv_szfhW5eNs8PBsByz0AxuMW_w1i43yjiKSb5UI" width="554" height="277" /></p>
            <p dir="ltr">▲阿瑪迪斯高中副校長范德維德與導覽學生跟荷蘭團合影</p>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr">「沉浸體驗荷式設計藝術之美」</p>
            <p dir="ltr">本次參訪美學亮點，除學校教育及庫勒慕勒美術館、梵谷美術館及國家博物館的重要館藏外，也特別規劃2019年荷蘭設計週Dutch Design Week （簡稱DDW）及恩荷芬設計學院畢業展，讓教師們進行觀展，獲取最新、未來性、創意前瞻的設計概念與環境永續再生的思考。</p>
            <p dir="ltr"><img src="https://lh3.googleusercontent.com/oLvXDqlDcdwUb_mCUSbyWGrZlK7ihoTaNFmIHXj-qOyIdvTejvULhEedMZML0dfZfBrpQcB1Wu7qax2w233aX6bCUkh-sh-Mic47nDYiK_exnk7n74XD8wg-kGBo3slas_eeA8E" alt="荷蘭設計週 團員們被生物設計作品所驚豔" width="556" height="417" />▲荷蘭設計週 團員們被生物設計作品所驚豔</p>
            <p dir="ltr">參訪過程中，黃純敏教授與陳淳迪教授也帶領團員進行深度討論，例如以荷蘭藍瓷與東方青花瓷，指出東西方文化的交流與差異，帶出歷史貿易以及工藝與經濟民生的跨域關係；在參訪完荷蘭風車群，跟團員們討論荷蘭風車的排水工程以及不同時期的設計材質與美學觀點，教師們透過跨學科的討論激盪出更多回響。</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/Ty1XBM_lmjPIBnk5yPUXvDUhzprche-iJpEAX8g1J7FQ4ZST8gFEiRGNMzZncn0hPo3gk8vxpvrFZjmwIen6JrSrs_hWL5x2nuZ0KzAoq2sPLjfjtkdlT8FEcKytPEIAjPK2EyY" alt="陳淳迪教授與老師們分享荷蘭風車排水設計" width="561" height="421" />▲陳淳迪教授與老師們分享荷蘭風車排水設計</p>
            <p style="margin: 0cm 0cm 0.0001pt; ;"><strong>&nbsp;</strong></p>
            <p dir="ltr">團員高雄市新上國小王彥嵓校長表示，此次美感教育工作教師國外進修參訪，看到了荷蘭國民美學上所展露的獨特自信，讓所有團員重新思考，在全球化跨領域整合的當代，臺灣美感教育如何有更新思維；臺中市立文華高中高嘉宏老師表示，透過美感參訪活動及教授的引領下，了解重視人格發展與創造力的荷蘭教育模式，也反應在美學教育及荷蘭設計週眾多的作品中，讓教師在思考其造形美感之餘，也同時進入荷蘭教育養成的思考提問，透過設計與美感，關注全球在地化（Glocalization）的議題。</p>
            <p dir="ltr"><img src="https://lh5.googleusercontent.com/WcZZ_hbIE-z59UIcUfojqwyv9E_bFp09tWzYUGJ_Ds5lghLKf31Ne7Gw2YLmX2cizEydBdDQ0mCF6GZUY7MHhPy_wz99H8ENDw3zsrjeTOCS1eoEwuedCHky3m9BbrVfn_U7AwE" alt="國立博物館 荷蘭團合影" width="559" height="419" />▲國立博物館 荷蘭團合影</p>
            <p style="margin: 0cm 0cm 0.0001pt; ;"><strong>&nbsp;</strong></p>
            <p dir="ltr">荷蘭美感與藝術教育參訪，不僅開啟臺灣與荷蘭的交流契機，提升老師的國際視野與藝文知能，更重要的是凝聚來自全臺美感計畫與學科領域的教師們，投身美感教育改造工程的信心以及彼此間的夥伴關係。明年5月前將陸續透過課程開發、藝術創作、講座、社群交流等方式，在校園、社群媒體、校際聯盟以及全臺美感教育活動中，公開分享參訪經驗，撒播美感教育的種子。<br />期能轉化為開展學生美感經驗與文化知能的教育行動，並鼓舞學生自發學習的動機與熱情，厚植核心素養，進而落實全民美育。</p>
            <p dir="ltr">&nbsp;</p>
            <p style="margin: 0cm 0cm 0.0001pt; ;"><br /><br /></p>`,
          tab: ['參訪成果'],
          hashtag: ['荷蘭', '國際', '參訪'],
          postid: '88958654521',
          pic: [
          ],
          // 
        },
        {
          pro: '美感教育出國計畫',
          firstpic: require('../../assets/ARCHI/foreign/img02.jpg'),
          title: '生活美學‧跨域思維─美感教育教師參訪日本美感教育的融合創生',
          author: '',
          date: '2019/12/13',
          content: `
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
          // 
        },
        {
          pro: '美感教育出國計畫',
          firstpic: require('../../assets/ARCHI/foreign/img03.png'),
          title: '美感教育工作教師赴泰國曼谷探索藝術融入生活之美',
          author: '',
          date: '2019/11/06',
          content: `
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
          // 
        },
        {
          pro: '跨領域美感教育卓越領航計畫',
          firstpic: require('../../assets/ARCHI/foreign/img03.jpg'),
          title: '【108-1跨領域美感教育系列講座工作坊】中區場',
          author: '',
          date: '2019/12/13',
          content: `
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
            <p style="margin: 0cm 0cm 0.0001pt; ;"><br /><br /></p>`,
          tab: ['工作坊成果'],
          hashtag: ['工作坊', '音樂', '跨領域'],
          postid: '885785468456',
          pic: [
          ],
          // 
        },
        {
          pro: '跨領域美感教育卓越領航計畫',
          firstpic: require('../../assets/ARCHI/kua/img01.jpg'),
          title: '【108-1跨領域美感教育系列講座工作坊】北區場',
          author: '',
          date: '2019/12/06',
          content: `
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
          // 
        },
        {
          pro: '跨領域美感教育卓越領航計畫',
          firstpic: require('../../assets/ARCHI/kua/img02.jpg'),
          title: '108-1跨領域美感教育系列講座工作坊】南區場',
          author: '',
          date: '2019/12/20',
          content: `
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
          
        },
        {
          pro: '跨領域美感教育卓越領航計畫',
          firstpic: require('../../assets/ARCHI/kua/img03.jpg'),
          title: '中區種子學校交流分享會',
          author: '',
          date: '2019/10/30',
          content: `
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
          
        },
        {
          pro: '跨領域美感教育卓越領航計畫',
          firstpic: require('../../assets/ARCHI/kua/img04.jpg'),
          title: '臺東種子學校課程協作會議暨課程觀摩',
          author: '',
          date: '2019/10/24',
          content: `
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
          
        },
        {
          pro: '跨領域美感教育卓越領航計畫',
          firstpic: require('../../assets/ARCHI/kua/img05.jpg'),
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
          
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../../assets/ARCHI/yui/img01.jpg'),
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
          
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../../assets/ARCHI/yui/img02.jpg'),
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
          
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../../assets/ARCHI/yui/img03.jpg'),
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
          
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../../assets/ARCHI/yui/img04.jpg'),
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
          
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../../assets/ARCHI/yui/img05.jpg'),
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
          
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../../assets/ARCHI/yui/img06.jpg'),
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
          
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../../assets/ARCHI/yui/img07.jpg'),
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
          
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../../assets/ARCHI/yui/img08.jpg'),
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
          
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../../assets/ARCHI/yui/img09.jpg'),
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
          
        },
        {
          pro: '幼兒園美感教育扎根計畫',
          firstpic: require('../../assets/ARCHI/yui/img10.jpg'),
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
          
        },
        {
          pro: '美感與設計創新計畫',
          firstpic: require('../../assets/ARCHI/meichiao/img01.jpg'),
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
          tab: ['活動成果'],
          hashtag: ['美感教育計畫', '國高中生', '11萬'],
          postid: '6654546845543',
          pic: [
          ],
          
        },
        {
          pro: '美感與設計創新計畫',
          firstpic: require('../../assets/ARCHI/meichiao/img02.jpg'),
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
          
        },
        {
          pro: '學美．美學-校園美感設計實踐計畫',
          firstpic: require('../../assets/proimg/shue/home.png'),
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
          firstpic: require('../../assets/ARCHI/shue/img01.jpg'),
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
          firstpic: require('../../assets/ARCHI/shue/img02.jpg'),
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
          firstpic: require('../../assets/ARCHI/shue/img03.jpg'),
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
          firstpic: require('../../assets/ARCHI/shue/img04.jpg'),
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
          firstpic: require('../../assets/ARCHI/shue/img05.jpg'),
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
          firstpic: require('../../assets/ARCHI/shue/img06.jpg'),
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
          firstpic: require('../../assets/ARCHI/shue/img07.jpg'),
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
          firstpic: require('../../assets/ARCHI/shue/img08.jpg'),
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
          firstpic: require('../../assets/ARCHI/shue/img09.jpg'),
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
          firstpic: require('../../assets/proimg/shue/home.png'),
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
          firstpic: require('../../assets/default.png'),
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
          firstpic: require('../../assets/default.png'),
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
          firstpic: require('../../assets/default.png'),
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
          firstpic: require('../../assets/default.png'),
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
          firstpic: require('../../assets/default.png'),
          title: '偏鄉藝術美感育苗計畫-vision',
          author: '',
          date: '',
          content: ``,
          tab: ['影音成果'],
          hashtag: ['vision'],
          postid: '8854868543538456',
          pic: [
          ],
          video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hbwaW5OEBKM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          pro: '美感與設計創新計畫',
          title: '設計是國力！台灣設計研究院啟動',
          peopleName: '張基義',
          firstpic: require('../../assets/people/meichiao/img01.jpg'),
          content: `<p dir="ltr">｜人物專訪｜張基義<br />&nbsp;台灣創意設計中心董事長、教育部美感與設計課程創新計畫主持人<br /><br />「未來，設計與非設計的界線將更趨模糊，設計將扮演具包容性與整合性的角色，並滲透至每一個領域，成為國家品牌與城市治理的基本配備。」</p>
            <p dir="ltr"><br />｜台灣創意設計中心｜<br />創立於 2003 年的「台灣創意設計中心 ( Taiwan Design Center， TDC )」(以下簡稱台創)，致力以設計驅動創新與產業升級，使臺灣原生的設計能量，持續在各社會及文化領域發揮影響力。台創成立以來透過辦理國內外展覽、舉辦專業設計獎項、推動設計媒合與產學合作、建構展銷平臺和營運創意場域等多種途徑整合效益，期盼能藉助這 16 年來積累的能量，轉型升級為「台灣設計研究院」，讓設計力成為國家最重要的軟實力。</p>
            <p dir="ltr" role="presentation"><strong>&nbsp;</strong></p>
            <p dir="ltr">推動產業 Level Up&nbsp; &nbsp;設計研究是基本功<br />台創中心董事長張基義提到，前瞻英國、荷蘭、泰國、韓國等國家，都因為導入設計思維而提升國家競爭力與經濟實力。在中小企業居多的臺灣，台創除了協助產業培植設計研發能力之外，同時也掌握未來產業趨勢 ； 做好設計研究的基本功 ； 清楚數據以助預測產業的大未來。設計有機會帶領臺灣產業升級，但目前產業並未有此共識，因此，跨域整合從服務設計對社會和企業的分析研究，應用至企業協作，亦是台創努力的項目。</p>
            <p dir="ltr" role="presentation"><strong>&nbsp;</strong></p>
            <p dir="ltr">對民眾來說&nbsp; 設計並不遙遠<br />前瞻基礎建設計畫推動在即，從國家大型建設到地方城市發展，都可利用設計改變公共服務，或提升地方識別系統，讓公共服務內容更升格創新。台創拓展公共服務不遺餘力，積極跟各部會合作，例如跟文化部自 2010 年合作至今的「臺灣文博會」，近年除了舉辦商展，更追加文化策展串聯多元文化議題和主題活動，已成每年文化界最大盛事。 翻轉臺灣美學從公共設計著手，今年台創更與交通部公路總局攜手合作，將重點放在「遊覽車美學」，鎖定明年通車的客運新路線-蘇花改北花線，新式遊覽車從內裝到外裝將全部重新設計，顛覆一切既成的視覺標誌。「校園美感設計實踐計畫」媒合了 8 個設計團隊進入校園，協助全國國小至國中、高中職全面進行校園環境美感改造，無論教室、川堂或是司令臺，都將換上嶄新面貌，落實美感教育從校園生活開始。種種合作計畫都顯示跨部門合作推廣美學成效顯著，揮別以往公部門不重視設計和美學概念嚴重脫勾的現象。</p>
            <p dir="ltr" role="presentation"><strong>&nbsp;</strong></p>
            <p dir="ltr">設計力為城市定調&nbsp; 用設計改變臺灣<br />設計研究院成立後，未來也將加強與地方政府合作，好比今年主辦於屏東的 2019 台灣設計展「超級南ー超級南方，非常台灣」，不只是個單純的設計展，更是善用在地美學、重新定義地方品牌的利器。設計思維導入城市大型活動的籌辦，也有助地方跨單位合作，以設計驅動施政動能。張基義特別提到，台創的服務對象主要針對產業及非設計背景的大眾，除增進國民的美學素養，設計如何導入解決社會議題，也是社會設計的範疇，例如交通動線之改善，或未來老齡照護的問題，甚至怎麼讓臺式設計力輸出國際、推動設計外交，也是未來設計研究院成立後的一大重點。設計研究院將持續扮演公私部門及各產業間的橋樑，催生更多設計實驗場域，訂定與引導設計政策，加強產業的設計研發能力，協助中央、部會到地方政府導入設計施政，讓設計成為臺灣面對未來挑戰的最佳途徑。</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/8nOrN4Xvljq62iGaeopPEXRDm8hARYQmWMs75_ljjYeBgmXTQSczQNJGdkKrY4crC8wQEfdr4SVK98MXi1RvmDgyCJ7GvxPBTFQtiYb6qPA9QvoPtgOlNJbgCjMhsg" width="554" height="831" /></p>
            <p dir="ltr">&nbsp;<img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/abjsX2bDPQeI8ZWH_E-zgB-twRJKqR_6AaovJ0FsTmcJhoHY0ZlPoPmPS7ghwks5BZZTthg1tZtjKDKlr7yli7S9FXp1ZetZQOyLcJWI20sLqRtOvVuRpf1Mb_nz5g" width="554" height="369" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/ah-f557Z4jt9im2uktxh31pBwKQLumiEOfRY0v5vf_2uiDMeARZcXkeWvRARBWI8dNaEzW-n1AKebkUxQMPUO5IEdbByUeCiXZ9ZBZRArQw7oylLxBpVjNU0EFq1Vw" width="554" height="369" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/AIuFJcwvBCJ7Wz0iM6jinkNGh1uRkAL9wUYEuZByTMNq9aBOjbeoQ1sn_bQe6mdYj4i8OOCoI5SNhjDRt4_aCFUZD3H9V0UpRAeyvrkdVArEU3vxUCAWNuB2FdLg1w" width="554" height="240" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/kGylrTCxEPluTgysG1nIpeHg-t9bME-EGmF-bxHirz37buFlovE48z3R5pBwm_a__67_yXO4Rrbx-5K76c0mP4JTy6cwgjiGgjkTEgDprdVFG0O25RO2QzfVH5H8vQ" width="554" height="369" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/jDbHyPZu_w3z_p55b29hZyHVxMGZJo4Gk2IX4xlzsAt_H2RPfyheyIchunTs4vKwYNasCytJoxq1s5k7qV2lxE6YOaLBP37W7offLP27Jbam8BwkVkvpfB8jSQSC9A" width="554" height="369" /></p>
            <p dir="ltr" role="presentation"><br /><br /></p>`,
          video: '',
          postid: '59648464564564545',
          tab: ['人物專訪'],
        },
        {
          pro: '美感與設計創新計畫',
          title: '連結地方與國際的美感教育',
          peopleName: '曾成德',
          firstpic: require('../../assets/people/meichiao/img02.jpg'),
          content: `<p dir="ltr">畢業於哈佛大學設計學院建築碩士，現為國立交通大學人文社會學院院長暨建築研究所講座教授、教育部美感與設計課程創新計畫主持人。曾成德長期投入專業性的社會服務，包括美感教育、永續校園計畫、生活美學運動、環境景觀總顧問等工作。他深信美感教育是透過社群間的溝通與思辨，以展現對於社會的承諾與永續的期許。</p>
            <p dir="ltr">｜前言｜<br />2019年4月19至21日在北美館與忠泰講廳舉辦「美感設計教育創新實驗國際論壇」，邀請了芬蘭、丹麥、美國、日本與臺灣的教育家及設計團隊，分享他們當地設計教育創新的案例，同時，我們也邀集國內的教師與政府教育界重要人士共同討論美感設計教育在實務面與政策面上如何在臺灣落實，以下將專訪論壇策劃者曾成德老師。</p>
            <p dir="ltr">編輯部：為什麼美感設計教育這麼重要?美感設計教育與當代社會的關係是什麼?<br />曾成德：我認為推動美感設計教育的目的是為了培養足以解決社會問題的下一代，但前提是我們必須釐清美感設計教育是什麼(what)?為什麼做(what for)?以及橫跨哪些領域、發生在哪些地方(where)?</p>
            <p dir="ltr">當今全世界都在面臨科技所帶來的困境。例如Faceboo與 YouTube看似拉近群體，實際上卻分裂我們的虛擬平臺上，人們在此交集，卻也在此爭執。因此我們意識到社會需要有一些學習方式使我們的生活變得更好、更凝聚在一起(be together)，以分享彼此重要的價值，這是美感設計教育該擔負的社會意義。</p>
            <p dir="ltr">身為本次論壇的策劃者，您期待透過「美感設計教育創新實驗國際論壇」達到什麼目標?<br />我希望能展示臺灣的老師與學生們在「教」與「學」的成果，他們做出了很多很有意思的案例，這些案例中有著相當多跨領域（where）的產生，這點讓人感到不可思議。</p>
            <p dir="ltr">其實在十多年前我就在討論人文教育了。人文教育重要的目的是在人類的腦袋中建立 DHA（D就是Design，H就是Humanity，A就是Art），這種從個人到群體的培養，讓我們的社會變的更健康。換句話說，這種「從梗到氣（from STEM to STEAM）」的教育新方向，就在希望能培養解決複雜問題的能力、批判思考的能力以及創造力；美感設計教育可以說是一種跨領域整合的能力與展現，這也是我期待能在論壇中激盪出來的內容。</p>
            <p dir="ltr">您對於策劃這場「美感設計教育創新實驗國際論壇」的構思是什麼?論壇中不乏國內外案例的交流，這樣的安排有沒有什麼特別的意涵?<br />在第三期的《美感練習誌》中，由芬蘭國家教育署的 Mikko Hartikainen 講述芬蘭的教育改革，他們以全景式看待學習模式的無課綱計畫，如今成為全世界都在參考的對象。關於教育體制的創新，臺灣也有著豐富的碩果。當時的宜蘭縣政府教育處處長簡菲莉，從宜蘭的經驗出發，分享她串連公部門、學校與設計師的合作，並開展全環境的教育行動。</p>
            <p dir="ltr">對於跨領域的實踐，丹麥設計博物館公共教育部門主任 Nikolina Olsen-Rule，引領我們思索與探究美術館如何與學校串聯，共同推動美感與設計教育。而在各個學科領域與各種媒體之間，倡言美感教育「超領域(transdisciplinary)」的重要推手，美國加州大學聖塔芭芭拉分校Marcos Novak則致力於創造藝術與科技之間的對話。而藉由國內外講者的對話，讓我們看見文化的多樣性。</p>
            <p dir="ltr">面對不同的學習環境，國外創新的教育案例有可能在臺灣發生嗎?在臺灣的環境中，學校教師又可能扮演什麼樣的角色?<br />雖然國外與臺灣的學習環境有所差異，但在臺灣的學習環境中，我們發現不只藝術家與設計師在想這件事情，學校中的師長也帶著學生思考這個問題。老師們相當辛苦的在和既有制度與社會的成見奮戰，他們都是想讓這個社會變得更好，實在值得敬重。</p>
            <p dir="ltr">總而言之，環境塑造美感，美感塑造環境，環境塑造人，美感培養了人。這些人在臺灣各個角落努力著，我相信我們總有一天會創造出屬於自己的美感設計教育。</p>
            <p dir="ltr"><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/a-aTnvtzvQU-X6u0g5Uk3BrLwhFcIFAiCtd3WnFMkeE9_J6c84Aoerp-99346Vj60GMXR48AFYfHUWlNuFjRj05ZTtZkdP1EY44CpvuPUuR1zI4ZxK-Xqv4evZX5yA" width="431" height="601" /></strong></p>
            <p dir="ltr"><strong><br /><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/QWwLgws1H9KOVATv4Hj45ZZCyGWRnhSfRH3I6qmMIkzPg67ul2l8RJcIpu67GLZILqQVUm8ZlcKIKVw1DeMK2q4IVuBKjdbY5VNN3pdlmYlIeW5Ef61ZTm-R0yFcQA" width="554" height="368" /><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/kZejJCLOO-LVs_9eJpZckhn9jaiyQZIMwq-FfYgUsOBqLPQvvWcKnY_fkTej4FeY2MOckKP-dOmqCJEca9jiaCmNp5OCv6-s94eEA81bIcC6rta1IAngdLM6X8fpIA" width="554" height="367" /></strong></p>
            <p dir="ltr"><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/FHY2iiJ1JsIDTtTj7GON7cPJPC202H8Py3cB4HD1n6TtUZYaDQlwEcBS_h-jolI9X_4CBQwbE80epWCgf3L-bFdmxxLHIct8P87KWL1TfRKK35r9_XHbBJLYRl-vTA" width="554" height="229" /></strong></p>
            <p dir="ltr"><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/xqeeG_iwJzsgZjpXEE0K6KUvGuGRDIuGwdC4gyAExPU8NxmITwGuGQT2g6i67hxZl6Z8IbnaV-oKyzCDb2sfl401eWQH78ROYAQp-nMiKxmH9jBASiyFOwFVSNZPmQ" width="554" height="355" /></strong></p>
            <p dir="ltr"><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/bk85JkfwyUGmHNMtyfE_dav5kYThxH88zX_JklKtlpscYQyHsuMbdeZ0Wfc56KrFWrrtVJvSqN06pfPMjhreEy18H2QHMkjMsJHRZTQDGDVBP5vqC4isBShW58-4LQ" width="554" height="185" /><br /></strong> </p>`,
          video: '',
          postid: '596489565',
          tab: ['人物專訪'],

        },
        {
          pro: '美感與設計創新計畫',
          title: '美術館：看不見的設計與溝通',
          peopleName: '劉惠媛',
          firstpic: require('../../assets/people/meichiao/img03.jpg'),
          content: `<p dir="ltr">劉惠媛|國立交通大學跨領域設計學科研究中心顧問、博物館學會理事、教育部美感與設計課程創新計畫主持人</p>
            <p dir="ltr">多元美感經驗的實踐場域<br />當代藝術教育的活動種類多元而豐富，過去我們所熟悉的藝術教育包含有「本質取向」的偏屬藝術智能的學習，例如老師教我們「如何畫一張水彩畫」，或「如何欣賞巴哈樂曲的風格」等；或是偏屬「環境取向」從藝術出發，發展人文藝術的多元的知能等，例如：介紹歌德式建築從去了解歐洲基督宗教文化、學習舞蹈去幫助肢體的協調等。<br /><br />雖不同於學校有系統性的課程規劃，主要是手眼練習和基本繪畫技巧的訓練，培養學生創作及藝術理論的能力。過去一百年，美術館的藝術實踐從包浩斯(Bauhuas)策展到白盒子(White Cube)展示理論，現代藝術與建築空間的表現性和純粹性，把自己打造成為擴展視覺經驗的重要實驗場所。</p>
            <p dir="ltr">透過專業努力，美術館的空間與量身打造的展覽企劃，經「規劃設計」的工作坊、導覽、特展、藝術家面對面等活動，美術館不止於典藏與展示，同時也歡迎人們透過參觀美術館建築體驗開放空間，欣賞當代藝術的展覽裝置，認識藝術家的視角、創意和解決問題的想像。當代美術館的教育，的確可以擴大我們對藝術的想像，並與日常生活產生更多跨域的連結。已然是另一種整合型的加深加廣的學習經驗。</p>
            <p dir="ltr">走進 21 世紀新形態美術館<br />隨著21世紀美術館的角色與功能的擴張，未來的美術館也可能逐漸成為市民的文化生活中心；舉例來說：國立芬蘭基亞斯瑪當代美術館，鄰近赫爾辛基的國會議事館、公共圖書館、中央郵局和音樂廳等，為致力於與學校等教育機構建立合作關係，就特別設有公共服務部門，專門提供「藝術體驗的服務」，從製作展示品解說牌(標語和牆上的文字)到擬定大大小小的活動企劃。希望能為平時沒有機會參與美術館的人，創造交流的契機。</p>
            <p dir="ltr">而美術館作為社群的資源中心，可以讓來自不同背景的觀眾到同一場所經驗美感的張力與解讀展覽的意義。例如丹麥的路易斯安那美術館：透過欣賞建築、展覽設計、主題研究、空間安排與動線等，從認識藝術家到參與工作坊課程，美術館的教育活動，基本上關注許多不同年齡觀眾的學習面向，針對不同年齡的觀眾設計不同的解說工具。針對學齡前兒童，他們以遊戲引導的方式，一同去發現、實驗和創造。對年齡較大的孩童，當代美術館也會以沉浸式體驗（Immersive Experience）及互動裝置吸引注意力，提高專注力。特別值得一提的是世界各國的設計博物館、設計中心、建築中心，均紛紛利用館內的典藏，精心規劃推出一系列設計相關課程，讓國高中的大孩子們可以有許多創意和實作的機會。</p>
            <p dir="ltr">因此，我們可以期待，未來美術館不只是建築物和作品具有魅力，同時也懂得與觀眾創造鏈結，與更多外部機構合作，從參觀者的角度思考服務設計，以展覽和多元的活動為觸媒，變身成為學生、家庭、學校等對象，既舒適又愉快的學習場所。</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/tsojOqH8k-KIvVwM93sykopv0YEyqXyK6ZV32KbdpKIAJI3QKEmnn47Oul45sfWD2TNNAD6xXOFZ3GyAadnTqVaHaXTCSi10tX7Q9k2PI8EPhfMsBAxgtHSO5fT7Fg" width="449" height="623" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/l7Fd5g3kjOdu1xBmvq1ZziAqCpAKZzSgARmzwZ1QQ9ICQA6_UO4HW3U-U5I9fuy6uOpcw6IYn64eD7p1lA1CBw0hQpMrJaxuaCF16rLL9t_cGrCZiVd8nuEyANT9KQ" width="554" height="567" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/z5A8Cj5RrpMH5LFFNU9LTmNkP0_oJ_5YfYlaSl4dP8bRWwCB79q5QPLltoLW84otOvZSXQRj4VArkps5CO_aBaBFJZx3dIJNTVLUm43yzKKWI6nubMFiTChS1gT00g" width="554" height="416" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/3SbQLUXRmfjoWRWM77wbq9LKnWImeqX2Bbs90q96g3QZrcXCd0wOjM6Mesoso6QRrrnO__aBjrSqBqNO1WhcC11T8-KGgM3aVsHRVSAM0IZ4aNGVdjepGj8XM5PzRg" width="554" height="489" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/BMqQW8_qtvcag8rYZ2UUKXAkuxhmqlSz1w5GFl8nyfb79YPMveyW2YX4fkrZaSvCczgLByJRaH12Z6TRvW0HnVhAv9wewNIY67RobAStHVsKV06VmAOgRpsnNPTSUw" width="554" height="416" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/q6n04_ZpfHUIGYQKe4Dz86zaR2S70RJCt8npDPbG0CAWJ41Kh1oec3G1-ftkCgSbd3SxRdhNEyuODe7jgoK2M5bW3jMoG-EpWvl7ToKuPIbjiJVy_SoOEN-3VvwkQQ" width="554" height="416" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/oRZpL10zYlX7wSoB1mhF7wuUusQQ4H2nbmcR-xs39AO188_fDst-nLQhhb8DsL_rUFiM2KIf6z_4zYAq_DKBERT9-EE1Tf6DK5xl1e5ftJlB8UtimwIqsfwNaRLvTA" width="554" height="343" /></p>
            <p>&nbsp;</p>`,
          video: '',
          postid: '5546846564545',
          tab: ['人物專訪'],

        },
        {
          pro: '美感與設計創新計畫',
          title: '你的城色：光影城市的虛與實',
          peopleName: '凌天',
          firstpic: require('../../assets/people/meichiao/img04.jpg'),
          content: `<p dir="ltr">凌天|國立交通大學建築研究所助理教授、教育部美感與設計課程創新計畫協同主持人</p>
            <p dir="ltr">在臺中國家歌劇院五樓深處的凸凸廳是建築師伊東豊雄曲牆建築空間表現的極致。自由流動的結構體，從地板浮起成為牆面，再轉為天頂，讓室內空間如洞穴一般有機而連續。</p>
            <p dir="ltr">將不止息的臺中城市動態，呈現於不斷流動的歌劇院空間之中，是推動《你的城色》作品的主要想法。二十分鐘的投影裝置作品，記錄了從臺中交流道開始，沿著臺灣大道一路往臺中火車站的城市影像，如同地圖街景般向四面曲牆同步投影城市全景，與獨一無二的展場空間沉浸融接。</p>
            <p dir="ltr">展廳共設置十二臺投影機，分別由不同角度，投影分色處理過的城市影像至四面曲牆，交疊形成白光中透著一點殘影的環景效果。畫面圖層以光之三原色(R/G/B 紅綠藍)填色；當觀眾進入展場空間，遮蔽投影光源，原本多道疊加為白光的影像就會顯露互補色光，彩色影子呈現出城市的細緻紋理(綠化植物，行走生活著的人群，車與交通，無聲喧囂的招牌) ，也將觀眾身影投入環境之中，創造屬於自己的城市映像。散落於場地中的白色球體，可隨意推滾，鼓勵觀眾與凹凸空間地形互動，也強調了著光而顯影的表現。</p>
            <p dir="ltr">《你的城色》將熟悉的臺中城市經驗濃縮疊合進凸凸廳，以人身的尺度，漫遊在車行的大道影像上，探討人之於城市、環境、空間的信息接收與回應。觀眾的步伐反映了凸凸廳特有的空間起伏；而人們的多重疊影，又將平常混雜的都市意象解離分層，讓觀賞者的身形參與至城市影像之中；藉由這樣虛實交錯的感官體驗，帶來另一種閱讀城市的可能性。</p>
            <p dir="ltr">《你的城色》臺中國家歌劇院 2019 年新藝計畫</p>
            <p dir="ltr">主要創作|李舲、謝依容、凌天<br />執行製作|范瑄<br />影像顧問|吳振威<br />聲音設計|謝瀞瑩<br />裝置設計|軟設計有限公司</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/zw4mSNLs6F3u9jHKvTGyusTpLizjbSRZpAOOnGAZ9DEQiOMJk3hX721aLhh4dCvNKlb7nz5ONS8YHmyOc5_eOFeA4rQCXAEp2TENf0lpi_g4bmkKqrx373355KLysA" width="554" height="555" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/GOgRpsWYl9Dqyp0jGR6Dslx6IWmS6KXQu5B1fr9XmmrjVvPwu0NyoutJcwlmH7msuIs9MJeJmV-NnRfFlB7t23lYmL1cLUsRXPkSAqxBDiyvdr-Qrw1DQ9A40MTehA" width="554" height="416" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/AiywiIoHkrtGIrcEmBLvVupa1PxhiQ5ZWE_RSp75mleQpx5-gFWEwWhooIqvFwhFtjJ__3ffITONH4OmfVUgYLAWNnSLTnVUkRgmmE5mdKaf7okre3Db8RA8yA9HAQ" width="554" height="555" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/VjrHSCz-XsAFyRHaXR1QQbKxI1jjFnPyrf2PI14aUvKbMqRuBMaleiX2YDppkww845F_KaL9cvXwin4oTpmVJRwU8ui8sSdrhtJYlVSb4EvuDsRDrhe93M0_Iz-piA" width="554" height="369" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/hpqrZOSQgDmErCs-yBD3JJCGZok7Cjp6YVSu_e9AVt5bZ_Ett-z8kcNQ7maeWHTYdtTFsIiAx69ndpHp_ATQ-3Ya4HX6Cw_yhcIQf4z6QenIlyP6P1oBQn0GzA0K_Q" width="554" height="308" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/aVSgJoGEmjB-xTbMyGX8xsD4ZHgMK0_TGRhi8ed38JLJwxhV9ZxOQktQI9vWaXp_jvKQ3Liv0JD8hZ8qJVCJ2UuC8-lVSlyQPrK2-ryKru9ZFPt4A6ldUVRv6XJ4sw" width="554" height="739" /></p>
            <p>&nbsp;</p>`,
          video: '',
          postid: '55496686876845845',
          tab: ['人物專訪'],

        },
        {
          pro: '美感與設計創新計畫',
          title: '建築與展示的美感絮語「美角|生活中的每一課 2.0」展場設計',
          peopleName: '蔡嘉豪',
          firstpic: require('../../assets/people/meichiao/img05.jpg'),
          content: `<p dir="ltr">專訪 蔡嘉豪 | B+P Architects &amp; Planners 本埠建築 + 蔡嘉豪建築師事務所主持建築師<br /><br />「建築空間本身也是一個展品，讓民眾意識到建築新舊的交疊，並感受到兩件事:一是美感教學的創作，二是空間的創作，兩者皆回應了美感教育。」<br /><br />老建築中的展示新意<br />「美角|生活中的每一課 2.0」2019 年春天在具百年歷史的新竹公園開展。座落於其中原空軍工程隊禮堂的老建築「風livehouse」，用空間創作展示美感教育，並激盪一場美學對話。<br /><br />建築師蔡嘉豪在「風 livehouse」中進行空間的實驗，他將畫紙材質、印刷、燈光、建築等元素，創造了「紙屋簷 (Paper Roof)」設 計 作 品。 此展示設計在今年 入圍英國「Dezeen AwardShortlist」、「2019 金點設計獎」，近期又榮獲「2019 Shopping Design Awards | Best 100」。建築具有金屬骨架，調節空間中結構及支撐建築體的牆面。而「紙」作為日常生活中最普遍的創作媒材，亦是學校與美學教育中的基底材；不同的紙材具備不同質感、重量與透光度等特質，展現出不同美的效果。</p>
            <p dir="ltr">蔡嘉豪提及:「這些金屬桁架加上新的構件，拉起紙張畫布與展示桌板，主要用意是為了劃分多個展示區域，藉由屋脊拉長視覺的水平線和空間感。」不僅如此，這些紙、畫布以白色作為主視覺，猶如漂浮在建築之間，讓觀者從視覺中感受紙張的輕薄，並在來回走動中，體會紙的輕盈和建築的沉穩所帶來的身體感，感受對比卻和諧的輕與重。紙張與畫布搭配建築的骨架做支撐，並以美麗且自然的弧度垂吊，在拉伏之間融合自然光、燈光及投影，相隔之間的縫隙也能窺探人影來往的美感。這樣的嘗試讓新展覽與舊建築產生了美感對話，也揭示美感教育在各角落源源不絕的傳唱著。</p>
            <p dir="ltr">空間激發美感教育的訊息<br />蔡嘉豪認為此次展覽並非只是將學校老師實驗及美感教學的教案藉由展示呈現出來，必須也要透過建築空間的巧思表現美感教育的核心價值。建築空間也是展品之一，它是美感教育的創作，也是空間的創作，更讓人意識到老空間中的新舊交疊，回應美感教育內涵與傳承。他傾向先閱讀建築後，再經過構思與設計，用原有建築空間的特性及設計元素突顯展覽內容。<br /><br />建築彷彿是一個舞臺，建築師與策展團隊在這舞臺上精心布置，讓主角在美麗的舞臺上盡情表現自我。紙張作為美感教育的材料，更作為此次展覽空間創作的出發點，蔡嘉豪希望這些紙張與畫布在展覽活動結束後，也可拆卸回歸學校教育繼續使用。這樣的設計對於美感教育的再利用有莫大幫助，可讓資源不斷循環，二創、三創及再創，更緊扣美感教育普及的理念。蔡嘉豪也表示，因為此次展覽也開啟了一些後續效應，他被邀請至新港高中辦理工作坊，持續傳遞美感教育的真諦。</p>
            <p dir="ltr">美感教育是貼近生活的，回到最基本的初衷，讓普羅大眾認識並學習美。它並非刻意的栽培，或是學院科班制式的美術訓練；它是一種生活中的感受力，關乎物件的審美體驗，或是像建築的空間感等。美學教育終要回歸國民教育，教育者要制定適合方法，讓人事物都能在生活每個角落感受美的純粹。</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/aZJ6yWgeYmQK1qtO6d9w02E6PBzwYK570D7x1-p8Blf_oHJHXu-pUfPsWshlFxU8XU5VIaZohqOIk6b83vrqH0jKFLOXu8p1C3Dxt8dZU5WNmCcNieocRmZ-giOfjw" width="554" height="555" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/tp2zwdy297WfMMpscUqi2BPCBK_q5C1wmVhXdFVqZ1aQa3oiN0ln1ccus3ZXXO3OW1OQMmBoG4Gn61Y50O5li5sKiqwYvcjkwTHnr_qi1YerwUvJrmBJVrDF9ymGPg" width="554" height="369" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/krRGZccSYmmCvBDVrLU9CYZE282gCu9O31Vvmkx2rURaGO0pBPmQzXdlPWqauOjFFXbd3ggIXES3p8yy5fVvXlDT8OJmsnl8Jd943OB8a-Ka2uIqfRWgToZoVF3rhg" width="554" height="369" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/URscjHFz0rm-k65OBXyb2SKaZxdGfXCY2ENkGamyxTmgnynhKomq1BT6bmnolxT1p9Drxlu_IfMUZpefa1jMoC5l18BZnVxc4dDwR1SfB9MpyVZQPM6MGpty3_Kolg" width="554" height="341" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/C7uOcsdd8Ndlc69TpyadaL42j5Ge3UU1jT53a8VhE-q1zbwZdPRNahk54hBcsRIyn5zLGqjSjj3KM04o0Y3PkcyuCFfACIrtzsIq7qmd72esQrpR-L9s8IszXNtWhQ" width="554" height="288" /></p>
            <p dir="ltr">&nbsp;</p>
            <p>&nbsp;</p>`,
          video: '',
          postid: '55496595895956845845',
          tab: ['人物專訪'],

        },
        {
          pro: '美感與設計創新計畫',
          title: '如果，美是一種經驗 「美角|生活中的每一課 2.0」作品設計',
          peopleName: '何欣怡',
          firstpic: require('../../assets/people/meichiao/img06.jpg'),
          content: `<p dir="ltr">專訪 何欣怡|國立交通大學建築研究所講師</p>
            <p dir="ltr">「這些設計，目的是要觀者去想一件事，想一種做法，想一個行動，並與作品產生一個獨有的互動，進而得到啟發。」<br /><br />「美角|生活中的每一課 2.0」成果展中「美感小科學：一與二的探索」的創作者何欣怡，以「美感學習構面」中的「結構」與「構成」作為設計的緣起，創造出一系列與人們互動的作品。</p>
            <p dir="ltr">互動性與觸發思考<br />欣怡設計師的創作，強調與觀者之間的互動。透過展覽，她並非提供人們一個答案，而是給予一個範圍，一個讓人們思考問題的範圍。她說：「重要的是分享經驗，進而讓老師們從中獲得靈感與設計教學課程，這才是最有價值的。而看完展覽後，能讓觀眾與老師們能想到一件新的事，一個不一樣的做法，或是一個不曾出現的行動，產生一個獨一無二的互動，這才是我想要的。」設計師擅長透過作品進而引發人們的思考，並開啟人們想像的空間。</p>
            <p dir="ltr">結構與構成<br />六個美感構面中的兩個：結構與構成，是設計師這次主要創作主題。那麼，結構是什麼?首先，結構與生活息息相關，代表的是存在於生活周遭的簡單裝置，譬如「如果地心引力反過來」的鏡相裝置，在看作品本身與鏡子的成像時，會有不一樣的感受。何設計師說：「這個作品的靈感，是來自觀看建築師高地 (Antoni Gaud&iacute;) 的曠世巨作『聖家堂』(Sagrada Fam&iacute;lia) 的過程。那是一次高地在無意間瞥見水晶吊燈的倒影成像時所迸發的。藉由這個生活中的小小片刻，一個不經意的注視，卻造就了當代最偉大的建築作品之一。」<br /><br />欣怡的作品或許沒有高地那樣的震撼效果，但卻傳達了相同的創作過程，甚至可以說是透過作品傳達了高地的審美經驗。而結構與美之間的關係很簡單，就像它存在於生活那般。「如果地心引力反過來」帶出的是結構最簡單的美與引人審思的無價經驗。</p>
            <p dir="ltr">而構成是什麼?構成談的主要是東西在一起的問題，比如藉由作品，促使觀者抓到其中的比例、群體與整體性，進而達到一種恰當的位置關係是相當重要。在剖析作品的時候，設計師使用「一」為基本概念，讓這些小小的元素在作品上發揮作用，並在建構與解構之間，找到每個人心中平衡的樣子，像是作品「如果能把風裝起來」，便充分凸顯了這個主題，它混合截然不同性質的東西，並將許多「一」輕輕一搖，便造就獨一無二的位置分配。</p>
            <p dir="ltr">美學的層次<br />在兩個美學構面中，設計師以不同層次構築她的作品。這個層次從小到大，從個人到群體，從自我意識的審美到公共裝置的呈現。像是「如果地心引力反過來」作品就是屬於比較小層次的作品，是由個人經驗出發所致的成果，而「如果換條路回家」即涉及了公共性的議題。這概念之間流動與演化是自我的審美意識到公共裝置間的審美標準，這其中有一個普世的準則。透過小至大的層次建構，首先的課題是「發現」，亦即發現生活中各式的美，「發現」甚至可以說是貫穿主題的重要概念。接著是探討「功能」型態，最後衍伸至「公共性」，就是作品與群體的關係。作品的層次由小到大，由近至遠，其中的相互關係是密不可分的。</p>
            <p dir="ltr">創新<br />「重要的不是我帶給你什麼，而是你帶走了什麼」設計師說著。「美感小科學：一與二的探索」系列作品著重的是傳達審美經驗，這也是為什麼在這次的展覽中，設計師不斷地強調其中的互動性與玩樂感，而不是讓作品落入教條般無聊的呈現。因此，重點在於創造與啟發。結構與構成系列的作品，也回應著美感教育計畫的宗旨：從生活中出發，並結合如何「使用」的課題，讓美不僅是裝飾，而是一個嚴肅的議題。或許一直以來，美不只缺乏發現，它也缺乏一個認真且更好的觀察者。是時候讓我們再給「美」一次機會吧。</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/igQ8XX2QvbhzHlRrZWGIRPi8HBMSHMqNDRGPQWnaaKi3DucpgujvcH3Ke9Y-1SWuk4FFgkavs-GnExP7TuBjNqplxlAeIHCx6-UMNgBFIt7c7byPPetbKso8rhYgng" width="554" height="369" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/X2mCVbYfBJnz1Czm4WCto5Ay09ASlOx70EBVIFPLxr9cIV8rXj9hrHgwqtEn3eC0AappXoCiP_8FOznGmySxb0hhfLhJHUmhBgy6T-iEB643dfFYweOU43BEe_Npzg" width="554" height="368" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/IRzDLV_a-CEG2NAKgrpXhApSMNXO7x-2MI16FaVzQiqSae7BLtkpNt9qPodb05CkYQ8MBpxQaPwQ5N6roHM28unQYq4oRdKfN52yXGw9JUghPax6gZctqO6zPQxrFQ" width="554" height="369" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/nto8iJu4TuNzNDUdyy62RuQir9YfB-PnAxqgZj-43K5QrDOdKXxbhPj5P05jCAaQZBLB4pmt4xd3HOniO262F9cLxJDt3M-9CWTI9uxl0H0VNW0nQuEDQMluk6jTjw" width="554" height="831" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/Q7xEjVEuwzTbJPXzkD_n_kCcVja8v1678N5xV-PsodjaQrfr-z3-zGyn6OLkL4uaOZ0XC-zdiH7XXdv7M_F1ThaROQeKgVVzdYbXFIiljfifXx80lIc7VHb41wJ8Bg" width="554" height="157" /></p>
            <p dir="ltr"><br /><br /></p>`,
          video: '',
          postid: '554968468468452845845',
          tab: ['人物專訪'],

        },
        {
          pro: '見美．踐美．漸美－建構美感生活學習地圖之方案實踐實施計畫',
          title: '溯源為了尋根，建構部落生命美學。',
          peopleName: '屏東縣長榮百合國小校長陳世聰、學生',
          firstpic: require('../../assets/default.png'),
          content: `<p style="margin: 0cm 0cm 0.0001pt; ;"><span style="">因為莫拉克風災遷離家園的屏東縣長榮百合國小，認為唯有尋根才能溯源，找到部落生命美學，建構屬於孩子的自信與生命智慧。</span></p>
            <p style="margin: 0cm 0cm 0.0001pt; ;"><span style=";">36</span><span style="; ">位長榮百合孩子在</span><span style=";">3</span><span style="; ">個小時的跋山涉水之後重返古大社，紮營並探訪大社石板屋，聽長者說部落故事，從舊部落的探訪中認識文化根源，了解北排灣族</span><span style=";">Ravar</span><span style="; ">亞族發源的古老部落地理位置、遷徙動線，更就地取材生火炊飯，學習漁獵、體驗傳統生活，也實踐了學校「全人」「整全」「天地人諧和共存」的教育理念。</span> </p>`,
          video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yARNtZJjeaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          postid: '5964564545',
          tab: ['人物專訪'],

        },
      ],
    }
  },
  computed: {
    showPost() {
      var s = this.$route.params.postid
      return this.NewsArray.filter(function(item) {return item.postid==s})
    },
    showRes() {
      var t = this.showPost[0].tab
      var p = this.$route.params.postid
      return this.NewsArray.filter(function(item) {return JSON.stringify(item.tab).indexOf(t)!=-1 && item.postid!=p})
    }
  }
  
}
</script>

<style lang="sass">
@import '@/assets/style.sass'

iframe
  +pad
    width: 100%
  +phone
    width: 100%
    height: 55vw
    
img
  +pad
    width: 100%
  +phone
    width: 100%
    height: auto
.po
  width: 100%
  box-sizing: border-box
  margin-top: 5vw
  +pad
    margin-top: 2vw
  +phone
    // margin-top: 2vw
  .poBlock
    width: 80%
    margin-left: 10%
    +phone
      width: 95%
      margin-left: 2.5%
    //封面照片
    .poPic
      width: 100%
      height: 50vw
      
      +pad
        height: 45vw
      +phone
        height: 70vw
    //標題
    .poTitle
      font-size: 2vw
      font-weight: 800
      color: #878787
      padding: 1.5vw 0 1vw 0
      +pad
        font-size: 3.5vw
      +phone
        font-size: 5.5vw
    .poSubTitle
      +flexrow
      // +bb
      +phone
        +flexcolumn
        margin-top: 2vw
      //日期
      .poDate
        font-size: 1vw
        color: #878787
        letter-spacing: 0.05vw
        +pad
          font-size: 2vw
          letter-spacing: 0.2vw
        +phone
          font-size: 3.8vw
          // margin-top: 1vw
      //作者
      .poAuthor
        font-size: 1vw
        color: #878787
        margin-left: 2%
        letter-spacing: 0.05vw
        +pad
          font-size: 2vw
          letter-spacing: 0.3vw
        +phone
          font-size: 3.8vw
          margin-left: 0
          margin-top: 1vw


    //影片
    .poVideo
      margin-top: 2vw
      margin-bottom: 2vw
      +phone
        width: 100%
        height: auto
    //文字內容
    .poContent
      border-bottom: solid 1px #878787
      line-height: 3vw
      letter-spacing: 0.1vw
      color: #878787
      +pad
        line-height: 5vw
      +phone
        line-height: 10vw
        font-size: 4.3vw
      
    //#
    .poTag
      +flexrow
      padding: 1.5vw 0 0 0
      .poTagText
        font-size: 1vw
        color: #878787
        margin-right: 1vw
        +pad
          font-size: 2vw
        +phone
          font-size: 4.3vw



  //推薦
  .poResTitle
    width: 80%
    margin-left: 10%
    font-size: 1.5vw
    // font-weight: 800
    margin-top: 2%
    +pad
      font-size: 2.5vw
    +phone
      width: 95%
      margin-left: 2.5%
      font-size: 5vw
      font-weight: 800
  .poRes
    width: 80%
    margin-left: 10%
    +flexrow
    +phone
      +flexcolumn
      width: 95%
      margin-left: 2.5%
    .Res
      width: 25%
      height: 20vw
      margin-right: 2vw
      margin-top: 2vw
      position: relative
      +pad
        width: 33%
      +phone
        width: 100%
        height: 80vw
      &:hover
        .block
          opacity: 1
          transition: 0.5s
      .block
        width: 100%
        height: 100%
        background-color: rgba(#333,0.7)
        // font-weight: 800
        // line-height: 200%
        +flexcolumn
        align-items: center
        justify-content: center
        opacity: 0
        transition: 0.5s
        +pad
          opacity: 1
          height: 40%
          bottom: 0
          position: absolute
        

          

        .text
          width: 95%
          font-size: 1.5vw
          color: white
          font-weight: 800
          text-align: center
          line-height: 2.3vw
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          // +bb
          height: 23%
          +pad
            height: 60%
            line-height: 2.5vw
          +phone
            font-size: 6vw
            line-height: 8vw
            height: 47%
            letter-spacing: 0.8vw



      

</style>