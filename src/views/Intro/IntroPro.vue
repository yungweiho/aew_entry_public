<template lang="pug">
.intropro
  .introproSlideShow(v-if="showprojectArray.length != 0")
    .introproSlideShowPicBlock(v-for="item in showprojectArray" )
      .introproSlideShowprev(@click="slideposition==0? slideposition= item.slidepic.length-1 : slideposition--")
      .introproSlideShowNext(@click="slideposition==item.slidepic.length-1? slideposition=0 : slideposition++")
      transition(name="fade" mode="out-in")
        .introproSlideShowPic(v-for="pics in item.slidepic.slice(slideposition, slideposition+1)" :key="pics.pic"  @mouseover.prevent="havemouse()" @mouseleave="nomouse()" :style="{background: 'url(' + pics.pic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    .introslidedot
      .dot(v-for="item in introslidedotArray" :class="{dotbright : item==slideposition+1}" @click="slideposition=item-1")
  .introPicBlock()
  .introproContentBlock(v-for="item in showprojectArray" :key="item.title")
    .introproContentTitle {{ item.title }}
    .introproContent(v-html="item.content")
    


</template>

<script>
export default {
  data() {
    return {
      slideposition: 0,
      slide: '',
      projectArray: [
        {
          id: 1,
          title: '美感教育資源整合平台建置計畫',
          content: `<div>落實教育部於「美感教育中長程計畫:第二期五年計畫(108年至112年)」計畫推行理念。</div>
            <div>持續改善美感教育資源與分享機制之建置。</div>
            <div>建構一個掌握全國美感教育資源之美感教育資源整合平台。</div>
            <div>整合與管理第一期計畫相關網站平台、人才資源庫、課程教案、藝術文化等美感教育資源。</div>
            <div>以朝向永續經營美感教育發展為最終目標。</div>`,
          projectid: 'edu',
          pic: 'https://drive.google.com/uc?export=view&id=1Sin0pgMcNH5KyADW6CpD_iSafvbodGc9',
          kind: '支持體系',
          slidepic: [
            {
              pic: require('../../assets/intro/EDU/img01.jpg')
            },
            {
              pic: require('../../assets/intro/EDU/img02.jpg')
            },
            {
              pic: require('../../assets/intro/EDU/img03.jpg')
            },
            {
              pic: require('../../assets/intro/EDU/img04.jpg')
            },
            {
              pic: require('../../assets/intro/EDU/img05.jpg')
            },
            {
              pic: require('../../assets/intro/EDU/img06.jpg')
            },
            {
              pic: require('../../assets/intro/EDU/img07.jpg')
            },
            {
              pic: require('../../assets/intro/EDU/img08.jpg')
            },
          ],
        },
        {
          id: 2,
          title: '亞太地區美感教育研究室',
          content: `<ul>
            <li>
            <div>「亞太地區美感教育研究室」以「臺灣美力基地、亞太社群網絡」為設立宗旨，致力於成為國內「美感教育研究發展基地」，規劃與執行長期、系統性的美感教育研究與課程實驗方案。</div>
            </li>
            <li>
            <div>研究 ： 結合十二年國民基本教育課程綱要，進行國內外案例研究，並且研發學生藝術涵養與美感素養評估架構與工具，以及教學指引。</div>
            </li>
            <li>
            <div>連結 ： 辦理工作坊、研習、國際論壇等推展研究成果，連結國內外美感教育研究社群網絡。</div>
            </li>
            <li>
            <div>實作 ： 生活與環境、聲音與身體美感教育課程實作。</div>
            </li>
            <li>
            <div>影響 ： 中小學美感教育實踐之影響評估，回饋政策與精進課程教學。</div>
            </li>
            </ul>
            <div><img style="width: 20vw; display: block; margin-left: auto; margin-right: auto;" src="http://aesthetic-education.fbilab.co/projects/static/img/img02.40931a1.png" /></div>
            <div style="text-align: center;font-weight: bold; margin-top: 3%;">美感教育圖像</div>
            <div><strong>美在此身。</strong></div>
            <div>每個人皆是一首會呼吸的詩，而自身即是此身的詩人，在日日的自我書寫、自我描繪、自我編織中，此身成為獨具風格的藝術品。</div>
            <div><strong>美在對話。</strong></div>
            <div>社會是一座文化展演場，在彼此對話、互相凝視的過程中，共同舞蹈、一起吟唱出各異且相融的生命歌謠。</div>
            <div><strong>美在天地。</strong></div>
            <div>在春花秋月夏草冬陽中，在浩瀚星空、蔥鬱林木中，看見生命的流轉、時間的無垠；透過輕拂的微風、飄落的枯葉、躍動的松鼠，聽見天地的聲音。</div>
            <div>&nbsp;</div>
            <div>美從身體出發，於日常細節中慢慢而緩緩地感知身體，在生活過程的呼吸、凝視、微風中，學會愛自己、愛他人、愛自然。</div>
            <div>&nbsp;</div>
            <div style="text-align: center; color: black"><a href="http://apoae.naer.edu.tw/">計畫網站連結</a></div>`,
          projectid: 'apoae',
          pic: '',
          kind: '支持體系',
          slidepic: [
            {
              pic: require('../../assets/proimg/yartai/10.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img06.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img07.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img08.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img10.jpg')
            },
          ],
        },
        {
          id: 3,
          title: '美感教育出國計畫',
          content: `<ul>
            <li>
            <p>為達成十二年國民基本教育倡導全人教育之課程精神，落實「自發」、「互動」及「共好」的理念，提升教師國際視野與相關知能是不可或缺的。透過國外進修參訪加強多樣化美感體驗，拓展教師國際視野與人文素養；經由國際美感教育的觀課交流，與當地教育人員進行專業對話，教師得以接軌國際教育趨勢；藉由國外教學媒材蒐集，增能教師，強化教師教學力，並進而激發學生學習動機。</p>
            <p>教師國外進修參訪得以吸收各國教育經驗優勢與多元文化，藉以融會十二年國民基本教育之課程發展精神，促進本國教育多元面貌。教師回國後公開分 享參訪經驗或開放觀課，以擴散國際交流效益，提升教師國際視野，進而引導 學生多元開展各種互動能力，發揮自發主動學習之動機與熱情，厚植核心素養。</p>
            </li>
            <li>增進教學內涵：透過實際參與國外中小學進班觀課與教學活動，觀察各國教育現場師生互動模式，與專業教育從業人員進行經驗交流對話，融會各國教育特色，藉以強化參訪教師之教課能力。</li>
            <li>國際視野：經由異國街區探訪，走讀多元文化，感受其公民美學，並藉此觀察各國如何將美感落實於日常，了解國際美學實踐之趨勢，以達到開拓參訪教師國際視野之目標。</li>
            <li>強化美感素養：藉由走訪異國藝文機構感受不同空間美學，體驗各類藝術面貌，並期望藉由參訪國外藝術跨域特色案例，吸收STEAM、THEMAS教育內涵，以利參訪教師提升美感素養，並能應用於教學現場培養全民美感素養。</li>
            <li>推廣交流經驗：經由參訪教師返國經驗及心得分享回饋，推廣其異國美感體驗予我國教育專業人員，借以擴散參訪之效益，傳達美感教育之重要性於全國教育現場。</li>
            <li>落實美感教育：透過海外實地踏查，觀察各地街區、教室、校園或藝文機構等場域美感營造之呈現，創新美感落實於課堂及教學現場之可能，開創參訪教師美感新思維。</li>
            </ul>`,
          projectid: 'project3',
          pic: '',
          kind: '支持體系',
          slidepic: [
            {
              pic: require('../../assets/proimg/foreign/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/foreign/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/foreign/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/foreign/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/foreign/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/foreign/img06.jpg')
            },
          ],
        },
        {
          id: 4,
          title: '中小學在職教師暨行政人員美感素養提升計畫',
          content: `<p>本次美感教育第二期五年計畫，將落實藝術扎根與五感探索，鼓勵 教師將身體與感官作為一種發掘美感經驗的位置，計畫將從「藝術感性 啟蒙」與「藝術知識形塑」兩大面向推動。將藝術視為一種身體對感知 的活動現象，透過身體的感官經驗與藝術實踐的親密關係，重新對生活 有感，進而形塑美感知識與素養。</p>
            <p>計畫以中小學在職教師暨行政人員為對象，透過課程參與，喚起藝 術與美感的經驗；而為讓成果效益更加著實與擴散，除美感素養種子教 師之培訓外，也配合教師社群的經營，再由各縣市種子教師與行政人員 共同合作，進行縣市內美感素養提升課程模組規劃、執行與推廣，課程 都會安排藝術活動策劃、管理、教學等不同面向的融合課程。</p>
            <div>主要目標為：</div>
            <ul>
            <li>發展適合中小學在職教師、教育行政人員(含校長、主任等主管)美感素養提升課程模組，持續刺激教師及教育行政人員美感素養提升，創造美感特色與未來。</li>
            <li>依美感素養提升課程模組，辦理各縣市教師研習工作坊，培育具有美感素養之「專業種子教師」，並以「種子教師」為擴散核心，進行縣市內美感素養提升計畫的推廣與落實，實現美感體驗融入生活與學習，生活即是統整藝術的表現。</li>
            <li>持續辦理表演藝術與新媒體藝術美感素養教材教法研習課程，提升教師教案之設計及研發，活化教學的能力，推廣教學及藝術創作，每位教師都是教學藝術家的理念。</li>
            </ul><p style="text-align: center;"><a href="https://al.tnua.edu.tw/">計畫網站連結</a></p>`,
          projectid: 'al',
          pic: '',
          kind: '人才培育',
          slidepic: [
            {
              pic: require('../../assets/proimg/chongteacher/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/chongteacher/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/chongteacher/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/chongteacher/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/chongteacher/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/chongteacher/img06.jpg')
            },
            {
              pic: require('../../assets/proimg/chongteacher/img07.jpg')
            },
            {
              pic: require('../../assets/proimg/chongteacher/img08.jpg')
            },
          ],
        },
        {
          id: 5,
          title: '幼兒園美感教育扎根計畫',
          content: `<p>為延續國家重點政策發展方向─「美感教育從幼起」，並落實新頒佈之幼兒園教保活動課程大綱美感領域內涵，本計畫奠基於過去成果，整合大專校院夥伴教師之專業與教學動能，除連結既有的105所美感特色園，並協助各縣市建置美感基地園外；更為提升教保服務人員的美感素養，組織美感社群，形塑區域共學網絡。</p>
            <p>透過「鷹架共學」、「區內共學」及「跨區共學」等方式，強化教保服務人員「美感課程」、「美感生活」、「美感環境」領域的美感經驗，並鼓勵其發展具「在地」和「校本」特色之美感教學實踐方案；另外，為協助縣市政府建立美感基地園，亦提供各縣市美感基地園遴選建議條件、諮詢專家人力資料庫與檢核機制，以支持美感基地園發展幼兒美感教育。</p>
            <p>期許教保服務人員在參與共學與發展課程的歷程中，能逐步累積自身幼兒美感教育專業知能，培育幼兒美感教育人才庫，成為地方擴散美感教育的種子。綜合上述，本計畫具體執行策略如下：</p>
            <ul>
            <li>推動教保服務人員美感共學社群：提升教保服務人員美感素養，強化其美感課程設計與實踐能力，鼓勵發展具在地特色的美感課程，建置多元跨域的課程示例。</li>
            <li>陪伴縣市發展幼兒美感基地幼兒園：建立跨縣市、跨領域之專業輔導網絡。</li>
            <li>協助縣市政府擴散幼兒美感教育成果：深化幼兒園課綱美感領域內涵，培養幼兒美感教育宣講人才，建立人力資料庫，擴散美感向下扎根成果。</li>
            </ul>
            <p style="text-align: center;"><a href="https://www.facebook.com/%E5%B9%BC%E5%85%92%E5%9C%92%E7%BE%8E%E6%84%9F%E6%95%99%E8%82%B2%E6%89%8E%E6%A0%B9%E8%A8%88%E7%95%AB-1106541892742456/">計畫網站連結</a></p>`,
          projectid: 'project5',
          pic: '',
          kind: '課程與活動',
          slidepic: [
            {
              pic: require('../../assets/proimg/children/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/children/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/children/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/children/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/children/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/children/img06.jpg')
            },
            {
              pic: require('../../assets/proimg/children/img07.jpg')
            },
            {
              pic: require('../../assets/proimg/children/img08.jpg')
            },
            {
              pic: require('../../assets/proimg/children/img09.jpg')
            },
          ],
        },
        {
          id: 6,
          title: '跨領域美感教育卓越領航計畫 ',
          content: `<h4>計畫理念</h4>
            <p>隨著十二年國民基本教育的啟動，臺灣教育改革走向新的里程碑。強調培養以人為本的「終身學習者」，以「自發」、「互動」及「共好」為理念，本計畫自許成為美感教育的卓越領航，擬持續深耕於跨領域美感教育課程面向，並以輔導與推廣為本階段計畫之主軸，連結十二年國民基本教育階段，建構更全面而永續的跨領域美感教育樣態。</p>
            <h4>計畫目標</h4>
            <div>(一)銜接並推廣跨領域課程之發展</div>
            <div>(二)紮根跨領域美感課程旗艦基地</div>
            <div>(三)建構跨領域美感課程實踐模組</div>
            <div>(四)串聯各機構跨領域美感資源&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>(五)整合跨領域美感素養生活運用</div>
            <h4>跨領域美感課程之定義</h4>
            <p>跨領域美感課程係指以藝術概念、美感元素與藝術資源等，融整其他學科之教學，作為活化、輔助學科學習的媒介、資源與策略。課程規劃可包含下列兩大面向：</p>
            <p>（一）使用藝術媒介、藝術資源等素材，及應用藝術實作、藝術鑑賞等活動，輔助、活化教學。</p>
            <p>（二）就學科單元中與藝術領域交集之知識結構或美感共通性等，融整課程。</p>
            <h4>計畫實施對象</h4>
            <p>1. 國小至中等階段，有志於發展跨領域美感教育之種子學校。</p>
            <p>2. 師資培育大學及合作大學，紮根於師資職前學生之培育及提供學校教師增能諮詢。</p>
            <p>3. 以藝術教師為啟動者，聯合其他學科領域之教師組成跨領域美感課程教師團隊。</p>
            <h4>計畫預期成果</h4>
            <p>自108至110年度，計畫預期成果為152所國小及中等學校產出跨領域美感課程教案總計608件，與十二年國教之推動接軌。</p><p style="text-align: center;"><a href="https://www.inarts.world/?fbclid=IwAR3zIEm2X0ltFNbCDqSrupuRkLUhs3ooUXR1sEVQeMqYgQoCYyKFEoKAnsQ">計畫網站連結</a></p>`,
          projectid: 'inarts',
          pic: '',
          kind: '課程與活動',
          slidepic: [
            {
              pic: require('../../assets/proimg/kua/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/kua/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/kua/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/kua/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/kua/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/kua/img06.jpg')
            },
            {
              pic: require('../../assets/proimg/kua/img07.jpg')
            },
            {
              pic: require('../../assets/proimg/kua/img08.jpg')
            },
            {
              pic: require('../../assets/proimg/kua/img09.jpg')
            },
          ],
        },
        {
          id: 7,
          title: '美感與設計創新計畫',
          content: `<h4>在課堂中發現、生活中探索，在未來裡實踐。</h4>
            <p>依據教育部美感教育中長程計畫第一期五年計畫，承繼第一階 段「視覺形式美感教育實驗計畫」之成果，以前期開啟視覺美 感的覺察力為基礎，進而期望凝聚美感課程的共識與具體發展 ，本階段主要任務在於建制一個精進平臺。此一平臺的主要工 作分別為內容、教材、課綱的產生，種子講師的培育，種子教 師的增能，以及對社會大眾的傳播、推動，而最重要的則是培 養能夠賞析「美」，具有實作「設計」能力的中學生為下一代 公民。</p>
            <p>我們不只是期待能教育學生，更期待能影響老師，當老師以「生活」來因「人」施教，讓這個人產生美感的共鳴，就能期待重新實現在學習的行為上，然後進一步擴散到他的生活中。教學是途徑，但「生活中的美感體現」才是真正的課程目標，才是我們期待的教學結果，而未來，我們也期待美感從基本知能轉化為素養的動能，以美感與設計，建構嶄新的學習方式。</p>
            <p>&nbsp;</p>
            <p style="text-align: center;"><a href="https://www.aade.org.tw/">計畫網站連結</a></p>`,
          projectid: 'aade',
          pic: '',
          kind: '課程與活動',
          slidepic: [
            {
              pic: require('../../assets/proimg/meichiao/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/meichiao/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/meichiao/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/meichiao/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/meichiao/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/meichiao/img06.jpg')
            },
            {
              pic: require('../../assets/proimg/meichiao/img07.jpg')
            },
            {
              pic: require('../../assets/proimg/meichiao/img08.jpg')
            },
          ],
        },
        {
          id: 8,
          title: '樂器銀行',
          content: `<p>在過去的台灣社會，惜物愛物是一種習慣。我們吃不完的食物，就讓豢養的家禽解決；已經穿不下的衣褲，留在弟妹身上延續。但現今社會隨處可見的浪費也成為一種習慣。在物資充分的現在，早已習慣家中堆滿物品卻視而不見，如果有一個平台也能讓樂器重新獲得生命，讓自己對音樂的情感延續到孩子們身上，讓他們藉由音樂，重新看待自己的生命，也重新讓世人審視資源的平衡。</p>
            <h4>宗旨</h4>
            <p>教育部全國首創的「樂器銀行」，結合產官學界資源，集結各學校的閒置樂器和接受民間團體及產業界捐贈，讓樂器媒合、維修與交換。並以扶持偏鄉音樂教育為主。</p>
            <p style="text-align: center;"><a href="https://musicbank.moe.gov.tw/">計畫網站連結</a></p>`,
          projectid: 'musicbank',
          pic: '',
          kind: '課程與活動',
          slidepic: [
            {
              pic: require('../../assets/proimg/yuichi/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/yuichi/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/yuichi/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/yuichi/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/yuichi/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/yuichi/img06.jpg')
            },
            {
              pic: require('../../assets/proimg/yuichi/img07.jpg')
            },
            {
              pic: require('../../assets/proimg/yuichi/img08.jpg')
            },
          ],
        },
        {
          id: 9,
          title: '偏鄉藝術美感育苗計畫',
          content: `<p>為落實教育部於 107 年進行之「美感教育中長程計畫:第二期五年計畫(107 年至 111 年)」,並配合十二年國民教育課程綱要,國立臺灣藝術大學辦理「偏 鄉藝術美感育苗計畫」,並依據美感教育第二期的推動策略與具體方案在人才培 育與課程活動相關具體方案內容,規劃執行三大面向:</p>
            <p>一、設計生活美感與創新課程：</p>
            <p>依照 12 年國民教育課程綱要之精神與內涵，以 藝術領域三大內涵（音樂、視覺藝術、表演藝術）進行生活美感課程設計，以 此創新課程為基礎，進行職前師培生教學專業涵育、偏鄉美感課程教學教學與 體驗。</p>
            <p>二、提升職前藝術師資生美感教學專業素養：</p>
            <p>聯結各大專校院之藝術領域師培 單位、藝術專業系所，以培育未來從事藝術教育相關專業人員之教學與課程設 計專業知能，以厚實藝術專業人才的基礎。</p>
            <p>三、推展偏鄉美感課程教學與學習體驗：</p>
            <p>課程服務對象為偏鄉、離島及都會弱 勢等國小學生，冀以給予缺乏藝術教育專業師資之學校，深耕美感課程學習及 體驗，藉此給予偏鄉學童縮小藝術教育學習落差。&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <h4>偏鄉藝術美感育苗計畫的實施，對於師資生、偏遠地區學童與在職教師都 有長期及深遠益處，其成果可達成以下成效：</h4>
            <p>一、透過藝術師培生年藉由實地參與學校、社區服務之工作經驗，除磨練增進 自我本職專業學能，並透過巡迴服務體驗，培養從試教育工作的熱忱與使命 感，並建構及磨練團體合作之意識與默契，增進師培生之專業信念與知能。</p>
            <p>二、藉由教育服務計畫之美感課程及藝術體驗活動，發掘偏鄉地區之國中小學 學生之潛在藝術天分；除可彌補偏鄉藝術教育資源不足、偏鄉藝術專業師資不 足之問題，並實踐十二年基本國民教育課程綱要之精神，達成適才揚行之理 念。</p>
            <p>三、透過設計符合 12 年國民教育課程綱要之藝術領域（音樂、視覺藝術、表演 藝術）生活美感課程，以此創新課程為基礎，除可進行職前師培生教學專業涵 育，並透過課程內容分享至全國在職教師，藉以達到擴散推廣美感教育課程之效果。</p>
            <p style="text-align: center;"><a href="http://raac.ntua.edu.tw/">計畫網站連結</a></p>`,
          projectid: 'raac',
          pic: '',
          kind: '課程與活動',
          slidepic: [
            {
              pic: require('../../assets/proimg/pien/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/pien/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/pien/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/pien/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/pien/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/pien/img06.jpg')
            },
            {
              pic: require('../../assets/proimg/pien/img07.jpg')
            },
            {
              pic: require('../../assets/proimg/pien/img08.jpg')
            },
            {
              pic: require('../../assets/proimg/pien/img09.jpg')
            },
            {
              pic: require('../../assets/proimg/pien/img10.jpg')
            },
            {
              pic: require('../../assets/proimg/pien/img11.jpg')
            },
            {
              pic: require('../../assets/proimg/pien/img12.jpg')
            },
          ],
        },
        {
          id: 10,
          title: '廣達游於藝計畫',
          content: `<p>廣達《游於藝》計畫是與國內外博物館合作，策畫適合中小學生學習的教育展覽，將古今中外的藝術展品帶入校園，促使學校師生能以輕鬆自然的方式接觸藝術，並藉由藝術的學習與陶冶，讓身心均衡發展，成就美好的人生。</p>
            <p>廣達《游於藝》計畫參與學校，2004至2018年台灣22縣市，1,050所學校參與，累計2,513巡迴場次，3,165,257參與人次。</p>
            <h4>計畫執行共有五項環節：</h4>
            <p>1. 巡迴展</p>
            <p>與國內外博物館合作，將豐厚的文化資源透過研究與轉化，產生主題架構，並製作複製畫及學習物件，策劃成適合中、小學學生學習的教育展覽，於各校巡迴展出2到4週時間，讓校園化身為美術館，師生在校內即能欣賞展覽。</p>
            <p>2. 教育推廣</p>
            <p>公開徵募計畫參與學校，透過地區學校策略結盟，引導運用展覽主題發展地區特色教學，鼓勵跨領域教師組成教學團隊，透過分布廣闊的學校，將展覽推廣至社區，達到文化均富之成效。</p>
            <p>3. 教師研習營</p>
            <p>邀請專家學者講授展覽內容及核心議題，引導教師在短時間內習得大量美感認知與藝術形式的跨領域課程設計方式。</p>
            <p>4. 創意教學</p>
            <p>鼓勵教師運用展覽資源、發揮創意，設計統整性的教學內容，引導學生體驗學習，展現教師課程設計創意，並帶出學生學習創意。</p>
            <p>5. 藝術小尖兵培訓</p>
            <p>規劃「導覽解說」、「肢體表達」、「博物館參觀見習」等課程，提供學生導覽及欣賞畫作的方法，在養成過程中提升學生自主學習、思考判斷以及問題解決的能力。</p>
            <div><img style="width: 30vw; display: block; margin-left: auto; margin-right: auto;" src="http://aesthetic-education.fbilab.co/projects/static/img/img10.5d62f7a.jpg" /></div>
            <p style="text-align: center;"><a href="https://iic.quanta-edu.org/">計畫網站連結</a></p>`,
          projectid: 'quanta-edu',
          pic: '',
          kind: '課程與活動',
          slidepic: [
            {
              pic: require('../../assets/proimg/kuang/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/kuang/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/kuang/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/kuang/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/kuang/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/kuang/img06.jpg')
            },
            {
              pic: require('../../assets/proimg/kuang/img07.png')
            },
            {
              pic: require('../../assets/proimg/kuang/img08.jpg')
            },
            {
              pic: require('../../assets/proimg/kuang/img09.jpg')
            },
            {
              pic: require('../../assets/proimg/kuang/img10.png')
            },
          ],
        },
        {
          id: 11,
          title: '原住民歌謠、舞蹈傳習計畫',
          content: `<div>
            <p>隨著科技的快速發展，台灣在高度現代化發展的今天，致使山區部落的孩子在資源及資訊不足的限制下，普遍信心不足，國內在倡導族群融合的今天，應以發揮族群特質及長才為策略，協助其在長期弱勢的「情境」中，重建信心。「自信」是人類能力之源，而發揮個人或族群所長，則是建立自信，族群永續經營與發展的方案，也是原住民教育的重要方針。</p>
            </div>
            <div>
            <p>原住民孩子普遍因為上述信心問題，面對快速變遷及陌生的環境，容易畏懼而退縮，影響課業的學習，如果能夠從建立信心上著手，在課業的學習、成就的提昇方面將大有助益。給孩子機會、舞台、鼓勵與掌聲，是建立信心的基礎。舞蹈對原住民的孩子來說，是最容易學習的項目之一，透過族群舞蹈（含歌謠、祭儀）教育，瞭解族群傳統的工作、生活型態，以及祭典、民俗&hellip;等內涵，從學習中 體會族人的生活智慧，進而提昇新世代多元族群的內化概念及民族自信，是為舞蹈教育之目的。過程中對傳統族群祭儀舞蹈的採集、傳承、發揚，族群認同，貢獻極大；歌唱對原住民的孩子來說， 亦是容易學習的項目之一，透過族群歌謠（含祭典、儀式&hellip;）教育，瞭解族群傳統的生活型態，以及祭典、民俗&hellip;等內涵，從學習中體會族人的生活智慧，進而提昇新世代多元族群的內化概念及民族自信，是為歌謠教育之目的； 傳統舞蹈及歌謠的學習，讓孩子了解自己的文化，尋找族群的生命力，並產生自我接納、自我認同，進而建立自信的能量。</p>
            </div>
            <div>
            <p>台灣的原住民傳統歌謠文化，兼具優美深遠的特色，是族群尋根朔源、自我認同，與永續發展的核心價值；但這些部落傳統文化藝術之美，卻瀕臨失傳。而部落學校為學習與族群永續發展的中心，雖然音樂舞蹈節奏等為部落兒童之天賦，但部落學校普遍缺乏相關之專業師資（部落學校普遍缺乏音樂及舞蹈的專業教師），縣市政府教育處編列預算普遍不足，又地處偏遠交通不便，致使學校外聘專業師資發展相關教育方案困難重重，並持續停滯在教育資源不足的困境中。 長期外聘部落耆老或專業講師，專業規劃並有計畫的施以培訓課程，發展傳統歌謠教育，需要穩定充裕的教育經費的持續支持。因此，積極號召國內基金會搭建「扶植平台」透過資源整合，支持與督促部落學校成立傳統歌謠習唱團隊，扶植其成為部落舞蹈文化藝術的傳承中心。</p>
            <p style="text-align: center;"><a href="http://www.tecofound.org.tw/amazing/2019/index.html">計畫網站連結</a></p>
            <p style="text-align: center;"><a href="http://www.tecofound.org.tw/indigene/album.html">計畫網站連結</a></p>
            <p style="text-align: center;"><a href="http://www.tecofound.org.tw/science/2018/index.html">計畫網站連結</a></p>
            </div>`,
          projectid: 'amazing',
          pic: '',
          kind: '課程與活動',
          slidepic: [
            {
              pic: require('../../assets/proimg/yuang/home.jpg')
            },
            {
              pic: require('../../assets/proimg/yuang/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/yuang/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/yuang/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/yuang/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/yuang/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/yuang/img06.jpg')
            },
            {
              pic: require('../../assets/proimg/yuang/img07.jpg')
            },
            {
              pic: require('../../assets/proimg/yuang/img08.jpg')
            },
            {
              pic: require('../../assets/proimg/yuang/img09.jpg')
            },
            {
              pic: require('../../assets/proimg/yuang/img10.jpg')
            },
            {
              pic: require('../../assets/proimg/yuang/img11.jpg')
            },
            {
              pic: require('../../assets/proimg/yuang/img12.jpg')
            },
          ],
        },
        {
          id: 12,
          title: '文化輕旅行',
          content: `<div>
            <p>教育部為提升偏遠地區學生美感體驗之機會，自104年起補助偏鄉學校學生參訪國立故宮博物院，培養學生接觸美感場域習慣，涵養美感經驗。108年延續故宮文化輕旅行模式，擴大與國家表演藝術中心-臺中國家歌劇院、國立故宮博物院-北部院區、國立故宮博物院-南部院區、奇美博物館、高雄市立美術館五所藝文場館合作，辦理「『文化輕旅行』教育部補助極度偏遠、特殊偏遠地區學校學子前往藝文場館參訪實施計畫」，針對「極度偏遠」、「特殊偏遠」地區學校由教育部補助參訪學校交通費及保險費，各合作場館提供本館或特展之免費導覽服務及門票費用，希望藉由持續積極推動偏鄉學子美感體驗教育，促使學生在求學的過程，至少能有一次體驗場館之美的機會，讓美的經驗與感動與生活真實連結。</p>
            </div>
            <div>&nbsp;</div>`,
          projectid: 'project12',
          pic: '',
          kind: '課程與活動',
          slidepic: [
            {
              pic: require('../../assets/proimg/wenhua/home.jpg')
            },
            {
              pic: require('../../assets/proimg/wenhua/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/wenhua/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/wenhua/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/wenhua/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/wenhua/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/wenhua/img06.jpg')
            },
          ],
        },
        {
          id: 13,
          title: '學美．美學－校園美感設計實踐計畫',
          content: `<div>
            <p>為落實「美感教育中長程計畫第2期5年計畫（108- 112年）」：方案4-1設計校園生活美感實踐計畫，本部於 108年2月15日以臺教師(一)字第1080007217號函核定補助 財團法人臺灣設計創意中心辦理「學美‧美學&mdash;校園美感設 計實踐計畫」。</p>
            <p>本計畫透過設計思考與創新力量的導入，串連學校特 色及各種校園環境美感資源，將設計美學轉化為行動，以 設計思維翻轉教育、以設計翻轉校園，讓「美學」融入學 生校園生活，也讓學生從中「學美」。</p>
            <p>期待藉由專業設計團隊的帶領，營造美的校園環境， 增進師生對生活周遭的理解與審美判斷力，提升校園環境 的在地性與全球視野，並達到設計美學擴散校園，成為全 民美感共學之場域。</p>
            <p style="text-align: center;"><a href="https://www.facebook.com/design.movement.on.campus/?tn-str=k*F">計畫網站連結</a></p>
            </div>
            <div>&nbsp;</div>`,
          projectid: 'Design-Movement-on-Campus',
          pic: '',
          kind: '學習環境',
          slidepic: [
            {
              pic: require('../../assets/proimg/shue/home.jpg')
            },
            {
              pic: require('../../assets/proimg/shue/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/shue/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/shue/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/shue/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/shue/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/shue/img06.jpg')
            },
            {
              pic: require('../../assets/proimg/shue/img07.jpg')
            },
            {
              pic: require('../../assets/proimg/shue/img08.jpg')
            },
          ],
        },
        {
          id: 14,
          title: '見美．踐美．漸美－建構美感生活學習地圖之方案實踐實施計畫',
          content: `<div>
            <div>
            <h4>計畫理念</h4>
            <ul>
            <li>美而有感：開啟學生對生活、學習覺知力、體察力。</li>
            <li>教育無域：以學習者為中心，處處是學生感知實踐教室。</li>
            <li>空間無間：讓家庭、社區成為終身學習的核心所在。</li>
            <li>學思再創：透過跨界思維、跨域實踐，師生共構「美感生活學習地圖」，在方案實踐中建立自發、互動、共好素養。</li>
            </ul>
            <h4>計畫定位</h4>
            <ul>
            <li>「美感生活學習地圖」定義：「地圖」不僅是視覺之「地圖描繪」，更應是一種問題解決、歷程導引的學習歷程「藍圖」。</li>
            <li>以「學生」為學習主體：從問題之覺察、構思解決策略到問題解決之方案實踐，以課程教學為鷹架、以學生學習實踐為主體。</li>
            <li>以「學生生活」為實踐場域：</li>
            </ul>
            <p>(一)實踐場域：從校園到家庭、社區之學生日常生活空間。</p>
            <p>(二)實踐內涵：深入組織文化、生活習慣、人際互動問題解決</p>
            <p>(三)實踐方式：運用設計思考、跨界思維、跨域整合，實踐方案。</p>
            <h4>執行方式</h4>
            <ul>
            <li>108年3月-108年6月：建置教學模組</li>
            </ul>
            <div>建構專案輔導基地；專案基地學校增能與課程教學模組研發、方案實踐應用；縣市學校可參與增能、觀課，以豐厚提案內涵。</div>
            <ul>
            <li>108年7月-108年8月：縣市學校宣導</li>
            </ul>
            <div>基地學校成果發表、縣市薦選學校參與提案申請與評選。</div>
            <ul>
            <li>108年9月-109年5月：縣市學校課程教學與方案實踐</li>
            </ul>
            <div>入選之提案學校進行「美感生活學習地圖」建構與方案具體實踐。</div>
            <ul>
            <li>109年6月-109年7月：方案推廣</li>
            </ul>
            <div>評選並表揚優良縣市提案學校之「美感生活學習地圖」方案實踐成果；成效優良學校轉型為「美感種子學校」，擔任後續計畫推展之輔導學校；進行「美感生活學習地圖」方案實踐之發表推廣、計畫檢討與修整。</div>
            <h4>預期效益</h4>
            <ul>
            <li>新視野、新思維：</li>
            </ul>
            <div>透過跨界資源、跨域統整，以「設計思考」從覺察感知、構思策略到問題解決、行動實踐，開拓親師生新視野、心思維。</div>
            <ul>
            <li>有溫度、有彩度：</li>
            </ul>
            <div>將「設計思考」轉化為校園美感生活行動實踐，以美感經驗改變校園組織文化氛圍，開展具人文關懷與溫度之美感生活場域。</div>
            <ul>
            <li>覺知力、行動力：</li>
            </ul>
            <div>透過具啟發性之「美感生活學習地圖」，啟迪親師生創藝發想，並在行動實踐中，建立美感共學之生活領域。</div>
            <ul>
            <li>DFC(Design For Chaange)化「知道」為「做到」：</li>
            </ul>
            <div>讓國中小學生透過覺察省思、行動實踐，深刻感受自己也能發揮影響力，改變學習情境、實踐美力，促使學生美感素養之內化與轉化，奠立公民美感素養。</div>
            <ul>
            <li>從校園「課程教學」到庶民生活美學素養：</li>
            </ul>
            <div>從校園生活到家庭、社區生活，真正回到學生生活情境，透過學生方案實踐成效，讓社區居民感受只要有心、用心，並付諸行動，就能造成周遭生活情境之正向改變，引領社區美感行動風潮。</div>
            </div>
            <div id="fb-root">
            <div data-href="http://aesthetic-education.fbilab.co/projects/#/12" data-layout="button_count" data-size="large" data-mobile-iframe="true">&nbsp;</div>
            </div>
            <div>
            <div>&nbsp;</div>
            </div>
            </div>
            <div>&nbsp;</div>`,
          projectid: 'project14',
          pic: '',
          kind: '學習環境',
          slidepic: [
            {
              pic: require('../../assets/proimg/chenmei/home.jpg')
            },
            {
              pic: require('../../assets/proimg/chenmei/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/chenmei/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/chenmei/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/chenmei/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/chenmei/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/chenmei/img06.jpg')
            },
            {
              pic: require('../../assets/proimg/chenmei/img07.jpg')
            },
            {
              pic: require('../../assets/proimg/chenmei/img08.jpg')
            },
          ],
        },
        {
          id: 15,
          title: '校園美感環境再造計畫 ',
          content: `<div>
            <h3 style="text-align: center;">一個以小搏大的校園美感教育環境計畫</h3>
            <h4>理念</h4>
            <h4><span style="text-decoration: underline;">美學場域：一個可以體驗他人訴說故事的地方</span></h4>
            <p>&nbsp; &nbsp; 名為「教育部中長程美感教育計劃」，在103-107五年期間，從幼兒教育到中等教育，從點的美感創意活動獎勵，到線的美感教育各項子計畫施行，進行全面性的公民美感教育翻轉組織佈陳。這場美感新生活運動，不僅僅是一個計畫案，而是希望透過參與、互動、創造、價值轉換所建構的經驗裡，不間斷在生活中發生「動態演進歷程」，不間斷的提升國民美感素養。</p>
            <h4>目標</h4>
            <h4><span style="text-decoration: underline;">校園美感環境教育場：一座充滿師生共同談「美」的記憶發源地 </span></h4>
            <p>&nbsp; &nbsp; 本案設定為「教育部輔助各縣市高級中等以下學校校園美感環境再造計畫」之輔助計畫，旨在營造兼顧自然環境、在地文化、學校需求及整體視覺美感之校園，進而透過「境教」方式，提升自我學習環境之認同感，運用學校校園環境的美感激化過程，培育師生們思維價值的潛意識，更重視運用環境的美感激化，能更協助師生培養細膩而沈潛的人格形塑與美的素養、營造具有美感之校園教學情境、創造美感體驗和文化探索、教師與學生之間交流對話的場域、催化校園知性與美育的逐步改善認知；改善校園與周邊社區介面美學，兼顧自然環境、在地文化、學校需求及整體美感之教育場域，彰顯學校區域環境特色，打造校園與緊鄰社區的美感共學場域，成為一座超越圍牆的「公共美學教育場」。</p>
            <p style="text-align: center;"><a href="https://www.facebook.com/%E6%A0%A1%E5%9C%92%E7%BE%8E%E6%84%9F%E7%92%B0%E5%A2%83%E5%86%8D%E9%80%A0%E8%A8%88%E7%95%AB-1747184578660436/">計畫網站連結</a></p>
            </div>
            <div>&nbsp;</div>`,
          projectid: 'caepo',
          pic: '',
          kind: '其他',
          slidepic: [
            {
              pic: require('../../assets/proimg/school/home.jpg')
            },
            {
              pic: require('../../assets/proimg/school/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/school/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/school/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/school/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/school/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/school/img06.jpg')
            },
            {
              pic: require('../../assets/proimg/school/img07.jpg')
            },
            {
              pic: require('../../assets/proimg/school/img08.jpg')
            },
          ],
        },
        {
          id: 16,
          title: '各級學校教育人員生活美感電子書發展計畫',
          content: `<div>
            <p style="text-align: left;">「各級學校教育人員生活美感電子書發展計畫」是教育部委託成功大學建築系團隊執行的研究計畫，以美感的「一個核心、六個構面」為基本架構，製作成三種版本的電子書，在這裡，您可以了解我們的計畫理念，也可以對電子書版本特性有初步認識，進而挑選您需要的版本，開啟充滿美感的閱讀經驗。</p>
            <p style="text-align: center;"><a href="https://www.aesthetics.moe.edu.tw/">計畫網站連結</a></p>
            </div>
            <div>&nbsp;</div>`,
          projectid: 'aesthetics',
          pic: '',
          kind: '其他',
          slidepic: [
            {
              pic: require('../../assets/proimg/yartai/10.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img01.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img02.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img03.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img04.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img05.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img06.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img07.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img08.jpg')
            },
            {
              pic: require('../../assets/proimg/yartai/img10.jpg')
            },
          ],
        },
        {
          id: 17,
          title: '學長姐好優秀巡演計畫',
          content: `<p>1. 鼓勵於全國學生音樂比賽、全國學生創意戲劇比賽、全國學生舞蹈比賽、全國師生鄉土歌謠比賽等決賽中表現優秀(特優及優等)之學生團隊及高中職以上表演藝術相關科系所，研提表演活動企劃，將活動帶到中小學校園或所屬社區、離島或參與國際交流演出活動，公開演出予學生、社區民眾或國際人士觀賞，運用其優異藝術學習成果，協助公部門推動藝術教育扎根。<br />2. 翻新藝術推廣模式，結合有關學校、社區、公部門舉辦一系列有意義之表演活動，運用館校協力策略，推廣藝術教育。<br />3. 運用「藝拍即合」網站系統，選出「好優Show學生藝團」促成全臺之學校、社區及本館協力，共同合作推動藝術普及教育，演出成果並剪輯精采片段於網路分享，擴大推廣效益。</p>`,
          projectid: '',
          pic: '',
          kind: '課程與活動',
          slidepic: [
            {
              pic: 'https://drive.google.com/uc?export=view&id=1aNemw9N42fUmlvlW00ZSqXABQlMhFhpT'
            },
            {
              pic: 'https://drive.google.com/uc?export=view&id=1y46cS6DeoGP8qBoXs8rxN1la5_gjRG--'
            },
            {
              pic: 'https://drive.google.com/uc?export=view&id=1LeZSV8yNecsXHWepBSEuAD6JcHT1vUXv'
            },
          ],
        },
        {
          id: 18,
          title: '藝起來尋美-美感體驗教育計畫',
          content: `<p>「『藝起來尋美』-教育部推動國中小學辦理美感體驗教育計畫」是為了因應十二年國教課綱「藝術涵養與美感素養」，並落實「美感教育中長期第二期五年計畫」，由教育部媒合藝文場館、種子學校及師資培育三方，共創共學，打造符合館所特色、連接生活情境的新形態美感課程與教案。冀期透過結合藝文場館及生活場域資源，發展文化美感體驗課程，引發學生從自身出發，連結生活與情境的美感經驗，並鼓勵學生至藝文場館參觀，培養接觸美感場域之習慣，增進生活美感經驗，開拓學生藝術與美感體驗之多元途徑。</p>`,
          projectid: '',
          pic: '',
          kind: '課程與活動',
          slidepic: [
            {
              pic: require('../../assets/intro/shmei/img01.png')
            },
            {
              pic: require('../../assets/intro/shmei/img02.png')
            },
            {
              pic: require('../../assets/intro/shmei/img03.png')
            },
            {
              pic: require('../../assets/intro/shmei/img04.png')
            },
          ],
        },
        {
          id: 19,
          title: '廣達設計學習計畫',
          content: `<h4 style="text-align: left;">點燃對學習的渴望！ Design learning makes learning desirable</h2>
            <p style="text-align: left;">設計學習計畫將「設計思考」轉化應用在教育的行動上， 經過「設計」的學習，讓孩子擁有思辨、溝通、合作、創新的核心力。</p>
            <h3 style="text-align: center;">用任務引發熱情與自主學習</h3>
            <p style="text-align: left;">廣達「設計學習」計畫（Design Learning program）為廣達文教基金會自2013年推出的教育創新計畫，結合「設計思考」以及「Design-Based Learning」任務導向為課程設計的方法，讓教師透過設計出一個讓學生「有使命感的任務」，打造出能夠點燃學習熱情的情境。</p>
            <h3 style="text-align: center;">強調學習歷程培養4C能力</h3>
            <p style="text-align: left;">培訓教師以「學習設計師」的身分，引導教師進行課程創新，教師在教學的過程依學生需求提供協助，突破傳統師生的教學知識傳遞的模式。學生在整合性任務的探究中，經歷邏輯思考、創新思考、同儕合作、行動實踐的過程，培養出思辨、溝通、合作、創新思考4C核心能力(Criticalthinking、Communication、Collaboration、Creativity)。</p>
            <h3 style="text-align: center;">6&frac12;轉動教與學的關鍵歷程</h3>
            <p style="text-align: left;">透過六個階段的行動方案，協助學校教師與學生完成任務、轉動教學。</p>
            <p style="text-align: center;"><img style="width: 405px;" src="http://aesthetic-education.fbilab.co/projects/static/img/01.0a6c4a2.png" height="320" /></p>
            <h3 style="text-align: center;">一堂不想下課的學習！</h3>
            <p style="text-align: left;">「那種在孩子的眼中，我看到噴發的學習烈火，讓我感受到知識產生的美感，不只是作品表象的美好，而是關乎藉由策展，我們找尋到的知識寶藏，令我感受到痴迷以及狂喜。」</p>
            <div style="text-align: right;">-桃園市光明國小廖健茗老師</div>
            <p style="text-align: left;">「它比較活化，要一直思考一直要想出新的創意，你還要懂得交流想法，而且比較需要分工合作，還要有自己動手做自己所想的東西。」</p>
            <div style="text-align: right;">-新北市漳和國中學生</div>
            <p style="text-align: left;">「設計學習課程，充份燒腦，燒掉壞細胞，燒活好細胞。沒有排山倒海的痛苦，只有活耀激盪的思考，真是一次愉悅歡喜的學習旅程。」</p>
            <div style="text-align: right;">-屏東縣大成國小余文玲老師</div>
            <p style="text-align: left;">「這是一股能量的氣場，讓人不知不覺中將腦內細胞喚醒、運作，努力讓教學現場的孩子們更有深植內心的感受。」</p>
            <div style="text-align: right;">-台中市大肚國小張家華老師</div>
            <p style="text-align: left;">「對教師而言，最大的成長是教學思維的改變，包括團隊合作、導引學生自主學習、跨域共備、策展思考等，藉由參與廣達設計學習計畫，完整教學歷程所帶來的成長，提升教學效益。」</p>
            <div style="text-align: right;">-苗栗縣通霄國中鄭生祥老師</div>
            <h3 style="text-align: center;">改變教與學的真實行動</h3>
            <h3>&nbsp;</h3>
            <p style="text-align: center;"><span style="color: #000000;"><a style="color: #000000;" href="http://new.quanta-edu.org/zh-tw/educate.php?act=design_plan">了解更多</a></span><img style="width: 575px; display: block; margin-left: auto; margin-right: auto;" src="http://aesthetic-education.fbilab.co/projects/static/img/img10.aee299b.jpg" height="351" /><br /><a href="https://www.youtube.com/watch?v=uIeHhgR3Sr0&amp;feature=youtu.be" style="color: #000000;">影片介紹</a></p>`,
          projectid: '',
          pic: '',
          kind: '課程與活動',
          slidepic: [
            {
              pic: 'https://drive.google.com/uc?export=view&id=1Ok1S0aUAffgGGRab_J-CMvVz5RU2aW2_'
            },
            {
              pic: 'https://drive.google.com/uc?export=view&id=1efGK5uTwcZMld4MrGTKa2jTokp-v6yTm'
            },
            {
              pic: 'https://drive.google.com/uc?export=view&id=1n_WzA2qQnwgk9-Xm3t3rurg5wDY-_itF'
            },
            {
              pic: 'https://drive.google.com/uc?export=view&id=1SPE6UgOcra76o_nUuzVZrqQBruVwasj_'
            },
          ],
        },
      ],
    };
  },

  computed: {
    introslidedotArray() {
      return this.showprojectArray[0].slidepic.length
    },
    showprojectArray() {
      var t = this.$route.params.projectid
      return this.projectArray.filter(function(item) {return item.id==t})
    }
  },
  mounted() {
    this.slide = setInterval(() => this.setPosition(), 8000)
  },
  
  methods: {
    setPosition() {
      if(this.slideposition >= this.showprojectArray[0].slidepic.length-1){
        this.slideposition = 0
      }else{
        this.slideposition += 1
        }
      },
    havemouse() {
      clearInterval(this.slide)
    },
    nomouse() {
      this.slide = setInterval(() => this.setPosition(), 8000)
    }
  },
  beforeDestroy() {
    clearInterval(this.slide)
  }
}
</script>

<style lang="sass">
@import "@/assets/style.sass"
img
  

.intropro
  width: 95%
  margin-left: 5%
  position: relative
  // margin-left: 30%
  box-sizing: border-box
  right: 0
  // +borderblack
  +flexcolumn
  align-items: center
  // margin-top: 20px
  +phone
    width: 100%
    margin-left: 0
  .introproSlideShow
    width: 100%
    height: 40vw
    // +bb
    // min-height: 35vh
    // +borderblack
    +phone
      height: 60vw
    .introproSlideShowPicBlock
      width: 100%
      height: 90%
      position: relative
      // +bb
      .introproSlideShowprev
        position: absolute
        +size(10%)
        z-index: 10
        background: url('../../assets/slide/buttonleft.png')
        +bgcon
        top: 50%
        margin-top: -5%
        opacity: 0.6
        transition-duration: 0.2s
        cursor: pointer
        &:hover
          +size(11%)
          transition-duration: 0.2s
          opacity: 0.8
      .introproSlideShowNext
        position: absolute
        +size(10%)
        z-index: 10
        background: url('../../assets/slide/buttonright.png')
        +bgcon
        top: 50%
        left: 90%
        // right: 39%
        margin-right: 2.5%
        margin-top: -5%
        opacity: 0.6
        transition-duration: 0.2s
        cursor: pointer

        &:hover
          +size(11%)
          transition-duration: 0.2s
          opacity: 0.8
      .introproSlideShowPic
        width: 100%
        height: 100%
        // animation: fade 1s ease both
    .introslidedot
      +flexrow
      width: 100%
      height: 10%
      // +bb
      // margin-left: 60px
      // margin-top: 10px
      .dot
        width: 6%
        height: 10%
        margin-left: 0.5vw
        margin-top: 1vw
        // margin-top: 10px
        border-radius: 20px
        cursor: pointer
        +bb
        border-color: #878787
        +phone
          margin-left: 1vw
          height: 15%
          margin-top: 1.5vw
        &.dotbright
          
          // margin-top: 10px
          border-radius: 20px
          background-color: #878787
          // +bb

  .introproContentBlock
    width: 100%
    // height: max-content
    +font
    .introproContentTitle
      font-size: 2vw
      font-weight: bold
      +phone
        font-size: 6vw
    .introproContent
      margin-top: 1vw
      line-height: 2vw 
      font-size: 1vw
      letter-spacing: 0.11vw
      +phone
        font-size: 4vw
        line-height: 8vw

</style>