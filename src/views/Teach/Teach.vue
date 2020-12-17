<template lang="pug">
.te
  //標題區
  .teTop
    .teName 教學資源
    .teFilterBlock
      .filter(v-for="item in filterArray" @click="open=!open, select_filter=item.id" tabIndex="0" @blur="open=false") {{ item.get.length >=7? item.get.slice(0,7) + '...': item.get }}
        .tri
        .item_block(v-if="open===true && select_filter===item.id")
          .filterItem(v-for="p in item.pro" @click="item.get=p.title") {{ p.title }}
  .teBottom
    //沒有資料時
    .nodata(v-if="showPost.length<=0") 無資料
    //卡片本體
    router-link.teCard(v-for="item in showPost.slice(dp,dp+10)" :key="item.title" :to="'/module/post/' + item.postid")
      .tePic(:style="{background:　'url(' + item.firstpic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .teTextBlock
        .teSubtitle {{ item.domain }} | {{ item.author }}
        .teTitle {{ item.title }}
        .tePro {{ item.pro }}
  .tePageList(v-if="showPost.length>0")
    router-link.tePrev(:to="'/module/page/' + ($route.params.pageid<=1?$route.params.pageid=1:Math.ceil($route.params.pageid-1))")
    router-link.tePage(v-for="item in showPage" :class="{active: item==p}" :to="'/module/page/' + item") {{ item }}
    .teDot(v-if="totalPage.length>8") ...
    router-link.teFinal(v-if="totalPage.length>8" :to="'/module/page/' + totalPage.length") {{ totalPage.length }}
    router-link.teNext(:to="'/module/page/' + ($route.params.pageid>=totalPage.length?$route.params.pageid=totalPage.length:Number($route.params.pageid)+1)")

  
      
</template>

<script>
export default {
  data() {
    return {
      open: false,
      select_filter: '',
      filterArray: [
        {
          id: 1,
          name: '計畫',
          get: '全部',
          pro: [
            {
              title: '全部',
            },
            {
              title: '見美．踐美．漸美－建構美感生活學習地圖之方案實踐實施計畫',
            },
            {
              title: '中小學師資生美感素養培力課程發展計畫',
            },
            {
              title: '偏鄉藝術美感育苗計畫',
            },
            {
              title: '跨領域美感教育卓越領航計畫',
            },
            {
              title: '幼兒園美感教育扎根計畫',
            },
            {
              title: '美感與設計創新計畫',
            },
          ]
        },
        {
          id: 2,
          name: '領域',
          get: '全部',
          pro: [
            {
              title: '全部'
            },
            {
              title: '藝術'
            },
            {
              title: '數學'
            },
            {
              title: '公民與社會'
            },
            {
              title: '音樂'
            },
            {
              title: '表演'
            },
            {
              title: '視覺'
            },
            {
              title: '結構'
            },
            {
              title: '構造'
            },
            {
              title: '質感'
            },
            {
              title: '構成'
            },
            {
              title: '色彩'
            },
            {
              title: '比例'
            },
          ]
        },
        {
          id: 3,
          name: '學習階段',
          get: '全部',
          pro: [
            {
              title: '全部',
            },
            {
              title: '幼兒',
            },
            {
              title: '國小',
            },
            {
              title: '國中',
            },
            {
              title: '高中',
            },
            {
              title: '大學',
            },
          ]
        },
      ],
      teachArray: [
        {
          title: '讓倒垃圾是件美好的事',
          firstpic: require('../../assets/teachdata/chienmie/img/img01.jpg'),
          school: '台中市大元國小',
          author: '楊惠卿、曾竹君老師',
          content: '',
          file: 'https://drive.google.com/open?id=1gMecIbFhHSF6Gn_tRsjhgpkhzY0ke3eX',
          hashtag: ['美好', '倒垃圾'],
          postid: '68542',
          pro: '見美．踐美．漸美－建構美感生活學習地圖之方案實踐實施計畫',
          level: '國中',
          domain: '藝術',
          kind: '課程',
        },
        {
          title: '奇山妙水藝起來-家鄉的心靈地圖',
          firstpic:  require('../../assets/teachdata/chienmie/img/img02.jpg'),
          school: '臺東縣新生國民小學',
          author: '張釋月老師',
          content: '',
          file: 'https://drive.google.com/open?id=1ZzrmemQpMIx8laqXiDqg7gUch9lWF2pQ',
          hashtag: ['奇山妙水', '家鄉'],
          postid: '68554242',
          pro: '見美．踐美．漸美－建構美感生活學習地圖之方案實踐實施計畫',
          level: '國小',
          domain: '藝術',
          kind: '課程',
        },
        {
          title: '山與海的祝福',
          firstpic:  require('../../assets/teachdata/chienmie/img/img03.jpg'),
          school: '台東縣立海國民中學',
          author: '黃意珊、李依純老師',
          content: '',
          file: 'https://drive.google.com/file/d/1eAFUsJbYbjDEhfOmzHUN2wmron27Y6j3/view?usp=sharing',
          hashtag: ['山', '海'],
          postid: '68852542',
          pro: '見美．踐美．漸美－建構美感生活學習地圖之方案實踐實施計畫',
          level: '國小',
          domain: '藝術',
          kind: '課程',
        },
        {
          title: '童年山林.全人美學 -Rinari 真美',
          firstpic:  require('../../assets/teachdata/chienmie/img/img04.jpg'),
          school: '屏東縣 長榮百合國小',
          author: '蘇純慧、李明義、陳慶林老師',
          content: '',
          file: 'https://drive.google.com/open?id=1Qn6jgs6GysFYZ6Zh2xHCv6-etgqlXVH0',
          hashtag: ['山林', '全人美學'],
          postid: '6856238542',
          pro: '見美．踐美．漸美－建構美感生活學習地圖之方案實踐實施計畫',
          level: '國小',
          domain: '藝術',
          kind: '課程',
        },
        {
          title: '客家里山塾‧ 遨遊天地書～龍肚‧My good life',
          firstpic:  require('../../assets/teachdata/chienmie/img/img05.jpg'),
          school: '高雄市美濃區龍肚國小',
          author: '朱郁柔、陳佩馨老師',
          content: '',
          file: 'https://drive.google.com/file/d/14Yq6ATX8AiudqJiRacj5qBEvTQtFgU6h/view?usp=sharing',
          hashtag: ['客家'],
          postid: '68546128542',
          pro: '見美．踐美．漸美－建構美感生活學習地圖之方案實踐實施計畫',
          level: '國小',
          domain: '藝術',
          kind: '課程',
        },
        {
          title: '幸福食空之旅',
          firstpic:  require('../../assets/teachdata/chienmie/img/img06.jpg'),
          school: '高雄市左營區福山國小',
          author: '王鴻原、張乃菁 、吳佳玲、趙秀容、陳郁欣老師',
          content: '',
          file: 'https://drive.google.com/file/d/1ZGjkzNt6xEY3q-FOwwgv2beEttooeRQG/view?usp=sharing',
          hashtag: ['幸福', '食空之旅'],
          postid: '685475412',
          pro: '見美．踐美．漸美－建構美感生活學習地圖之方案實踐實施計畫',
          level: '國小',
          domain: '藝術',
          kind: '課程',
        },
        {
          title: '「生活中的藝術與美感」工作坊',
          firstpic: require('../../assets/default.png'),
          school: '國立屏東大學教育學系',
          author: '鄧宗聖老師、李信宗老師',
          content: `<div>人的生命中， 目光所及無一不是色彩「色 彩」是最能引起我們審美愉 悅感 受的 形式元素之一 ，也是主要呈現美的方式 ！</div>
            <div>邀請你一起來成為「色彩」的藝術家 ！</div>`,
          file: 'https://drive.google.com/uc?export=view&id=1ywmPpLenbKveZ95IJoVyLtuWngxQjnPG',
          hashtag: ['美感', '藝術'],
          postid: '688754542',
          pro: '中小學師資生美感素養培力課程發展計畫',
          level: '大學',
          domain: '藝術',
          kind: '課程',
        },
        {
          title: '「中小學師資生美感素養培力課程之發展（I）」主題（二）自然環境與社會（人為）環境的美感內涵分析',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '',
          content: `<p style="margin: 0cm 0cm 0.0001pt 18pt; ; ; "><span style=";  color: black;">一、時間：每一個模組</span><span style="; ; color: black;">18</span><span style=";  color: black;">小時</span></p>
            <p style="line-height: 3.4pt; margin: 0cm 0cm 0.0001pt; ; "><span style="; ; color: black;">&nbsp;</span></p>
            <p style="margin: 0cm 0cm 0.0001pt 18pt; line-height: 14.4pt; ; "><span style=";  color: black;">二、課程基本原型：</span></p>
            <p style="line-height: 3.6pt; margin: 0cm 0cm 0.0001pt; ; "><span style="; ; color: black;">&nbsp;</span></p>
            <p style="margin: 0cm 0cm 0.0001pt 42pt; ; ; ; "><span style=";  color: black;">（一）知覺</span><span style="; ; color: black;"> perception</span><span style=";  color: black;">：</span><span style="; ; color: black;">noticing deeply, embodying</span></p>
            <p style="line-height: 4.8pt; margin: 0cm 0cm 0.0001pt; ; "><span style="; ; color: black;">&nbsp;</span></p>
            <p style="margin: 0cm 62.3pt 0.0001pt 24pt; ; ; ; "><span style=";  color: black;">（二）探討</span><span style="; ; color: black;"> inquiry</span><span style=";  color: black;">：</span><span style="; ; color: black;">questioning, identifying patterns, </span></p>
            <p style="margin: 0cm 62.3pt 0.0001pt 24pt; ; ; ; "><span style="; ; color: black;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; making connections; exhibiting empathy, </span></p>
            <p style="margin: 0cm 62.3pt 0.0001pt 24pt; ; ; ; "><span style="; ; color: black;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; creating meaning</span></p>
            <p style="line-height: 2.75pt; margin: 0cm 0cm 0.0001pt; ; "><span style="; ; color: black;">&nbsp;</span></p>
            <p style="margin: 0cm 0cm 0.0001pt 24pt; ; ; ; "><span style=";  color: black;">（三）實踐</span><span style="; ; color: black;"> &amp; </span><span style=";  color: black;">省思</span><span style="; ; color: black;"> action &amp; reflection</span><span style=";  color: black;">：</span><span style="; ; color: black;">taking action, </span></p>
            <p style="margin: 0cm 0cm 0.0001pt 24pt; ; ; ; "><span style="; ; color: black;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; reflecting/assessing</span></p>`,
          file: 'https://drive.google.com/uc?export=view&id=1a-z87C6qpYMoTFB-i8-xvG-07mewRXeR',
          hashtag: ['美感', '自然環境'],
          postid: '685288754542',
          pro: '中小學師資生美感素養培力課程發展計畫',
          level: '大學',
          domain: '藝術',
          kind: '課程',
        },
        {
          title: '生活中的藝術與美感原理',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '薛丞堯老師',
          content: `<p style="margin: 0cm 0cm 0.0001pt; ; "><span style="">學習目標：</span></p>
            <p style="margin: 0cm 0cm 0.0001pt; ; "><span style="">1.開啟對「美」的好奇與思考。</span></p>
            <p style="margin: 0cm 0cm 0.0001pt; ; "><span style="">2.</span><span style="">理解「美」的多元意義。</span></p>
            <p style="margin: 0cm 0cm 0.0001pt; ; "><span style="; ">3.</span><span style="; ">學習建構對「美」的感知與敏銳度。</span></p>
            <p style="margin: 0cm 0cm 0.0001pt; ; ">&nbsp;</p>
            <p style="margin: 0cm 0cm 0.0001pt; ; "><span style="; ">核心概念：美的主觀性與客觀性、文化差異、美的原則 </span></p>
            <p style="margin: 0cm 0cm 0.0001pt; ; ">&nbsp;</p>`,
          file: 'https://drive.google.com/uc?export=view&id=1a-z87C6qpYMoTFB-i8-xvG-07mewRXeR',
          hashtag: ['美感', '藝術', '生活'],
          postid: '685285488754542',
          pro: '中小學師資生美感素養培力課程發展計畫',
          level: '大學',
          domain: '藝術',
          kind: '課程',
        },
        {
          title: '恭喜發財，紅包偶來！',
          firstpic: require('../../assets/teachdata/pien/img01.png'),
          school: '',
          author: '邱美惠主任',
          content: ``,
          file: 'https://drive.google.com/uc?export=view&id=1gMOQn96vHMeHyF15YE4pPrmPqcFx6mco',
          hashtag: ['美感', '紅包偶'],
          postid: '688754565442',
          pro: '偏鄉藝術美感育苗計畫',
          level: '國小',
          domain: '表演',
          kind: '課程',
        },
        {
          title: '紙想大聲唱，袋表偶的心',
          firstpic: require('../../assets/teachdata/pien/img03.png'),
          school: '',
          author: '陳冠汝老師',
          content: ``,
          file: 'https://drive.google.com/uc?export=view&id=1VedNqu13_bIUWJazvOlJ3KxM1gQxdTxA',
          hashtag: ['美感', '紙袋'],
          postid: '68875456545546323542',
          pro: '偏鄉藝術美感育苗計畫',
          level: '國小',
          domain: '表演',
          kind: '課程',
        },
        {
          title: '與偶一起舞',
          firstpic: require('../../assets/teachdata/pien/img04.png'),
          school: '',
          author: '張福里老師',
          content: ``,
          file: 'https://drive.google.com/uc?export=view&id=1Copxh3somJBjFWP6UfsI8XjpWjqlLiXp',
          hashtag: ['美感', '偶'],
          postid: '6887545654554645454542',
          pro: '偏鄉藝術美感育苗計畫',
          level: '國小',
          domain: '表演',
          kind: '課程',
        },
        {
          title: '我的朋友在哪裡',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '許純瑛老師',
          content: ``,
          file: 'https://drive.google.com/uc?export=view&id=11VE8e-ajEBll_y-lmP_peVGTGWiY0jYw',
          hashtag: ['音樂'],
          postid: '68875446545454542',
          pro: '偏鄉藝術美感育苗計畫',
          level: '國小',
          domain: '音樂',
          kind: '課程',
        },
        {
          title: '音樂的脈動',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '許純瑛老師',
          content: ``,
          file: 'https://drive.google.com/uc?export=view&id=1URyzGdJChX0AJwERS2Df8XbUG9yJQfX0',
          hashtag: ['音樂'],
          postid: '6887556555454542',
          pro: '偏鄉藝術美感育苗計畫',
          level: '國小',
          domain: '音樂',
          kind: '課程',
        },
        {
          title: '彼得與狼的探險',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '陳冠妤老師',
          content: ``,
          file: 'https://drive.google.com/uc?export=view&id=1MDEJ7PclS52ydCdtC6UkZ2Ody8ZscQbA',
          hashtag: ['音樂'],
          postid: '68875335454542',
          pro: '偏鄉藝術美感育苗計畫',
          level: '國小',
          domain: '音樂',
          kind: '課程',
        },
        {
          title: '我的一棵樹',
          firstpic: require('../../assets/teachdata/pien/img02.jpg'),
          school: '',
          author: '蔡秉峪主任',
          content: ``,
          file: 'https://drive.google.com/uc?export=view&id=1IXEfWefXAdSdocTuwCuxo9RDOh1nvnyg',
          hashtag: ['樹'],
          postid: '688735454542',
          pro: '偏鄉藝術美感育苗計畫',
          level: '國小',
          domain: '視覺',
          kind: '課程',
        },
        {
          title: '深海怪魚',
          firstpic: require('../../assets/teachdata/pien/img02.png'),
          school: '',
          author: '吳望如校長',
          content: ``,
          file: 'https://drive.google.com/uc?export=view&id=1XVZtR8FlFIrbDx4L3b3wmzYVKCDrS1KT',
          hashtag: ['深海怪魚'],
          postid: '688735465442',
          pro: '偏鄉藝術美感育苗計畫',
          level: '國小',
          domain: '視覺',
          kind: '課程',
        },
        {
          title: '青蛙青蛙跳跳跳',
          firstpic: require('../../assets/teachdata/pien/img01.jpg'),
          school: '',
          author: '鄭名惠 老師',
          content: ``,
          file: 'https://drive.google.com/uc?export=view&id=1nJIDk2q73c7UJJh5CSOa5sAsbNMwveMF',
          hashtag: ['青蛙'],
          postid: '6887353262565442',
          pro: '偏鄉藝術美感育苗計畫',
          level: '國小',
          domain: '視覺',
          kind: '課程',
        },
        {
          title: '帶著恐龍去旅行藝術課程教學單元設計',
          firstpic: require('../../assets/teachdata/pien/img03.jpg'),
          school: '',
          author: '蔡秉峪主任',
          content: ``,
          file: 'https://drive.google.com/open?id=1L37Je8bsoL_R8_NXK460d-J817UXSdfA',
          hashtag: ['恐龍'],
          postid: '6885654542',
          pro: '偏鄉藝術美感育苗計畫',
          level: '國小',
          domain: '視覺',
          kind: '課程',
        },
        {
          title: '花蓮縣立國風國中-對稱之美',
          firstpic: require('../../assets/teachdata/kua/img01.jpg'),
          school: '花蓮縣立國風國中',
          author: '留啟民校長、施淑娟主任、翁雅慧組長、林家瑜老師、湯香櫻老師、林秋源、陳郁如老師',
          content: `<p style="margin: 0cm 0cm 0.0001pt; ; ">1.<span style=";">本校跨領域美感課程，探查深化與修正花蓮地區教學資源如何融入課程。</span></p>
            <p style="margin: 0cm 0cm 0.0001pt; ; ">2.<span style=";">新課程之研發配合八下數學的「線對稱」單元，數學老師以簡報賞析生活中「對稱美」之形式原理的藝術品，並透過分組合作學習方式，讓學生在幾分鐘內比賽，依指示找尋左右對稱、上下對稱、上下左右對稱的中文字、各國國旗，並畫出對稱軸，並用色紙摺與剪完成指定圖形，將數學課堂學習活動與生活經驗聯結，不再是演算題目而已。</span></p>
            <p style="margin: 0cm 0cm 0.0001pt; ; ">3.<span style=";">視覺藝術課有三項，設計課延續上學期外聘教師手工皂製作，並以</span>3D<span style=";">列印的皂章模型壓印，線對稱圖案應用體驗；第二項依課本進行剪紙、圖片審美形式分析、水彩拓印等美感造形體驗活動。第三項美術班術科學習，則以設計思考要求，分析對稱圖案視覺化聯結，並依指定完成在食衣住行育樂的主題，思考如何轉化「對稱圖示」為水彩晝創作內容。</span></p>`,
          file: 'https://drive.google.com/uc?export=view&id=16_z9VR_iRs1XfISfcfJXFpAd3mVwRUyQ',
          hashtag: ['對稱'],
          postid: '688565654546546442',
          pro: '跨領域美感教育卓越領航計畫',
          level: '國中',
          domain: '數學',
          pic: [
            'https://drive.google.com/uc?export=view&id=132LxYMWXibInVUsClZJ4NFKymfmUKOYO',
            'https://drive.google.com/uc?export=view&id=1N5HrtYFoejXSNkHtkIGOnPsOhNAm_5Iz'
          ],
          kind: '課程',
        },
        {
          title: '南投秀林國小-「臺灣之美—竹（築）夢飛舞」',
          firstpic: require('../../assets/teachdata/kua/img02.jpg'),
          school: '南投秀林國小',
          author: '楊清豐、黃紹峰、唐子騏、盧孜瑛、余采容、褚懿萱、王馨儀、陳采如',
          content: `<p style="margin: 0cm 0cm 0.0001pt; ; "><span style="; ;">此次美感教育跨領課程以「自然與生活科技」科目五上第四單元&mdash;聲音的探討為出發點，融入在地竹文化特色的跨領域教學活動，讓學生學習如何製作「竹排笛」並且演奏，另外搭配竹山特有的文化「竹編藝術」，全校師生共同佈置學校教學場域以融入在地特有的竹文化特色校園。除此之外，更邀請輔導教授羅雅柔教授以及九九劇團團長黃惠英團長蒞校指導學生竹竿舞與肢體開發課程，讓學生有難忘的經驗，增加了學生於表演藝術能更生動的呈現。</span></p>`,
          file: 'https://drive.google.com/uc?export=view&id=16B0AL9BHFEfMoNLdc4DZzkCaJ5iFeNu7',
          hashtag: ['竹'],
          postid: '688565654556442',
          pro: '跨領域美感教育卓越領航計畫',
          level: '國小',
          domain: '表演、視覺',
          pic: [
            'https://drive.google.com/uc?export=view&id=1rXLzyIIw8FRVV4CWAxcQtva8aJzbZvR8',
            'https://drive.google.com/uc?export=view&id=1juKn_eRCoeB74SnMILoZiYiv5WIU6oVO'
          ],
          kind: '課程',
        },
        {
          title: '國立東石高級中學-「堤岸．提案-關於一條河的美學觀想」',
          firstpic: require('../../assets/teachdata/kua/img03.jpg'),
          school: '國立東石高級中學',
          author: '張世宗、林巖郡、楊牧音 ',
          content: `<p style="margin: 0cm 0cm 0.0001pt; ; "><span style=";">此次跨領域課程除了基本概念之講解與鋪陳外，主要將以戶外觀察、拍攝體驗、分組討論、模型實作之方式，讓學生透過此一學習歷程，開啟與進行周遭環境的觀察，思辨與深化人與土地之關係，並培養同學美感素養、審議民主、合作精神和展示設計之能力。</span></p>`,
          file: 'https://drive.google.com/uc?export=view&id=1QP2FJ25b8RigoOgLJbELUlVigTeptTOH',
          hashtag: ['堤岸'],
          postid: '688565654554465442',
          pro: '跨領域美感教育卓越領航計畫',
          level: '高中',
          domain: '公民與社會',
          pic: [
            'https://drive.google.com/uc?export=view&id=1JgQvSv1ASFrvwUuIu0DmWwYSrrvup_EU',
            'https://drive.google.com/uc?export=view&id=1CiIFgX6bfdIGO6hnV4p41AJuZFQjOf0T'
          ],
          kind: '課程',
        },
        {
          title: '彰化縣立和群國民中學-「超級競選團」',
          firstpic: require('../../assets/teachdata/kua/img04.jpg'),
          school: '彰化縣立和群國民中學',
          author: '袁淑貞校長、劉智賢主任、楊曉娥幹事、劉建麟教師、陳惟純教師、尤婉芬教師、張鳳娟教師、蔡幸芳教師',
          content: `<p style="margin: 0cm 0cm 0.0001pt; ; "><span style=";">公民科與藝能科</span>(<span style=";">音樂、視覺藝術、表演藝術</span>)<span style=";">協同教學，教學主題為『政治參與與選舉』，自「課前準備」、「課程進行」直到「課後評量」，公民科與藝能科教師皆共同討論研發與檢討教材設計，在「課程進行」部份，公民科以著重建立學生參與政治的認知為教學目標，而藝能科則強調競選美學的情意為教學目標，公民與藝能科的協同教學則注重競選宣傳的技能。</span></p>`,
          file: 'https://drive.google.com/uc?export=view&id=14qAUEukr1PpbdelxUJei6BZ55qDrpVUO',
          hashtag: ['超級競選團'],
          postid: '6885656542142',
          pro: '跨領域美感教育卓越領航計畫',
          level: '國中',
          domain: '公民與社會',
          pic: [
            'https://drive.google.com/uc?export=view&id=1-MF7UQkyX5BHxG6oHgajMWcfO37Teg59',
            'https://drive.google.com/uc?export=view&id=1pRgnGZbIuyIguYUpWB2vjyzS9zBd3lab'
          ],
          kind: '課程',
        },
        {
          title: '澎湖縣立澎南國民中學-「澎南沙畫漁村情」',
          firstpic: require('../../assets/teachdata/kua/img05.jpg'),
          school: '澎湖縣立澎南國民中學',
          author: '林清茶校長、鄭維傑主任、王姿翔教師',
          content: `<p style="margin: 0cm 0cm 0.0001pt; ; "><span style=";">藉由視覺藝術課程請學生將自家社區的風俗名情畫出相關特色，再經由姿翔教師利用課程檢視其圖形之可行性，勾勒可否僅用直尺、圓規等數學用具畫出該圖形後，利用社團課</span>(<span style=";">數學研習社</span>)<span style=";">與學生討論如何利用比例尺、直尺、圓規等幾何圖形，明確畫出該選定鄉村風情圖形。</span></p>`,
          file: 'https://drive.google.com/uc?export=view&id=14qAUEukr1PpbdelxUJei6BZ55qDrpVUO',
          hashtag: ['澎南沙畫漁村情'],
          postid: '68856555542',
          pro: '跨領域美感教育卓越領航計畫',
          level: '國中',
          domain: '數學',
          pic: [
            'https://drive.google.com/uc?export=view&id=17NsNEVJp1KJpyOE-TJnBfoTtQvavwcmB',
            'https://drive.google.com/uc?export=view&id=1UKSM_d0QlQkQLz9G7nD2rsxUn5m77ve3',
            'https://drive.google.com/uc?export=view&id=1fdLXpivq-nRW8p18R1TVpe2DegiLO3sN',
            'https://drive.google.com/uc?export=view&id=1ZUhqUjNjfsNH5VqU9h5Hr5x3_vwK6PSh'
          ],
          kind: '課程',
        },
        {
          title: '校園大發現-走入畫的世界',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '',
          content: ``,
          file: 'https://drive.google.com/open?id=1oaFHK8BJn7O2COQDPvPSVUYVs7HFdjlX',
          hashtag: ['畫', '校園'],
          postid: '6859848645842',
          pro: '幼兒園美感教育扎根計畫',
          level: '幼兒',
          domain: '藝術',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '校園大發現-我的公雞朋友',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '',
          content: ``,
          file: 'https://drive.google.com/file/d/1aln7eIaozLqNWJt0wS5ESw35hOn4IIlS/view?usp=sharing',
          hashtag: ['公雞', '校園'],
          postid: '68596846854542',
          pro: '幼兒園美感教育扎根計畫',
          level: '幼兒',
          domain: '藝術',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '食尚小玩家-微風大披薩',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '',
          content: ``,
          file: 'https://drive.google.com/file/d/137-EqVMCI4PphtzOG-10zPBXK2mC0niT/view?usp=sharing',
          hashtag: ['食尚小玩家'],
          postid: '68596846566562',
          pro: '幼兒園美感教育扎根計畫',
          level: '幼兒',
          domain: '藝術',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '小廚師-小小廚師-水果達人',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '',
          content: ``,
          file: 'https://drive.google.com/file/d/1AKzAj8C61_t-Vw6WichewLoY3rmxk1E4/view?usp=sharing',
          hashtag: ['小廚師', '水果達人'],
          postid: '685468464566562',
          pro: '幼兒園美感教育扎根計畫',
          level: '幼兒',
          domain: '藝術',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '創”藝”觀賞做-月亮詩',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '',
          content: ``,
          file: 'https://drive.google.com/file/d/1pnmtb9Hk42nMAKRffUuHFVuiBKn5rVO3/view?usp=sharing',
          hashtag: ['創”藝”觀賞做'],
          postid: '685468464599562',
          pro: '幼兒園美感教育扎根計畫',
          level: '幼兒',
          domain: '藝術',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '115的世界-我是拍照高手',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '',
          content: ``,
          file: 'https://drive.google.com/file/d/1wl2vsAHdcBkPw4oMbktbQoDeydrLde-W/view?usp=sharing',
          hashtag: ['拍照'],
          postid: '6854484155562',
          pro: '幼兒園美感教育扎根計畫',
          level: '幼兒',
          domain: '藝術',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '花布的藝想世界-客家五花',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '',
          content: ``,
          file: 'https://drive.google.com/file/d/1woiZMIjCkOm3ELNDZzEDHKn05AtYbtgb/view?usp=sharing',
          hashtag: ['客家', '花布'],
          postid: '68544845454542',
          pro: '幼兒園美感教育扎根計畫',
          level: '幼兒',
          domain: '藝術',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '金瓜石之美-你的家、我的家',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '',
          content: ``,
          file: 'https://drive.google.com/file/d/1o9MuPm8VWV5HiGsnOwbu2jhMYBYz106z/view?usp=sharing',
          hashtag: ['金瓜石', '家'],
          postid: '68544454545456452',
          pro: '幼兒園美感教育扎根計畫',
          level: '幼兒',
          domain: '藝術',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '我是大竹囝仔-稻田遊戲系列',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '',
          content: ``,
          file: 'https://drive.google.com/file/d/1GiS908GknsrwDbCdsKcnLcF-fwfUI2fV/view?usp=sharing',
          hashtag: ['大竹囝仔', '稻田'],
          postid: '68554645545456452',
          pro: '幼兒園美感教育扎根計畫',
          level: '幼兒',
          domain: '藝術',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '家，我心中認定的家-我的家人',
          firstpic: require('../../assets/default.png'),
          school: '',
          author: '',
          content: ``,
          file: 'https://drive.google.com/file/d/1fSnpbupXzNznxId0J8qRXKYn882QN76t/view?usp=sharing',
          hashtag: ['家', '家人'],
          postid: '6855469845645452',
          pro: '幼兒園美感教育扎根計畫',
          level: '幼兒',
          domain: '藝術',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '穿越花間',
          firstpic: require('../../assets/teachdata/meichiao/img01.jpg'),
          school: '花蓮縣立國風國民中學',
          author: '蔡明潔',
          content: `<p dir="ltr" role="presentation">概要：本課程設計以「結構」為教學核心主軸，從窗景的窺視省思現代建築窗戶的功能及意義，再介紹中國傳統園林建築的花窗設計帶領學生發現花窗結構虛實的美感。傳統花窗常見使用於中國園林設計，不僅可以使單調的牆面上產生虛實的變化，而且由於它隔了一層窗花，可使兩側相鄰空間似隔非隔，景物若隱若現，富於層次美感。花窗本身的花紋圖案在不同角度的光線照射下，會產生富有變化的陰影，成為點綴園景的活潑題材。但是除了視覺美感之外，花窗的某些圖案結構也負有支撐窗框的功能。因此在教學活動中，先讓學生透過解構窗花圖案，發現具有支撐力量的結構圖形，以及單純營造視覺美感效果的裝飾圖形，藉由教學活動實驗操作體驗結構支撐的力量，認識窗花圖案結構的必要性。最後嘗試利用有效的支撐結構設計實用的花窗圖案。&nbsp; <img src="https://lh5.googleusercontent.com/gut2fe1Z4XgDkF70ivql8-CCIfcQj-ryPC_uWUIBymniXopt-MXph_4Nwd8EhM0SEMTiZ_h9KOnzj-0O3Fww2pXD7Av8ZVKyoHpIGA7xfF7-HjdvFVJ0QhUZAxt1db5PQqxD81A" width="846" height="562" /><img src="https://lh5.googleusercontent.com/nj7rbvP3ZZ-OkD2LTo9fX2YWN_B7qQ26xgxFoA0sEH9nplGrXjc52vSb6lJqWxQnYRWJ1fLDAL2B9EeocAXR9gisn3LYA7I3qgeZkYMskGoUDO_tcvuJ09tVgVlTsN33NHXV4Po" width="844" height="565" />&nbsp;<img src="https://lh4.googleusercontent.com/COdwoc40zrh8SavmhmGrwJsmAlbLwVv_kaDAwZlHSW77NG9DdoBuTFUVwEMPzlieqcNYUE7AxNHegFMUXTEYw81nLT8nHQf4eMsrCbAsDVTnx0uRA_g0crbm-6yxJgjCNkHIa9E" width="372" height="558" /> <img src="https://lh3.googleusercontent.com/YKfmlco8cpx3wN2pWRQZLnyIFvVX95ZnMPOQekCv2dxu2VWsIOARdjG2ThU7bq1qI001Nl90E-cfOeb2rHslfNCCK2F-Ui043sEyuKHotRfbef5JIwMwBG8h9OF5S-Q8EaWQB_g" width="373" height="557" /></p>
            <p dir="ltr" style="text-align: center;"><br /><br /></p>
            <p style="text-align: center;">&nbsp;</p>`,
          file: 'https://drive.google.com/file/d/10ZSaybj7zoc7kWTwMwohErcC3u4n-3dC/view?usp=sharing',
          hashtag: ['建築窗戶', '結構'],
          postid: '685546956846542',
          pro: '美感與設計創新計畫',
          level: '國中',
          domain: '結構',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '面紙，不再無固出走！',
          firstpic: require('../../assets/teachdata/meichiao/img02.jpg'),
          school: '臺中市立光德國民中學',
          author: '陳怡如',
          content: `<p dir="ltr" role="presentation">概要：希望能藉課程引導讓學生發現「構造」是存在於生活中的，「構造」是體會物品的外觀與細節可以從思考、實踐它的任務來漸漸成形。課程中設定層層「任務」來思考面紙盒固定在桌子邊的接合構造，感受「部位-外觀-細節」的構造美感關係。「木塊集合練習」體驗木塊、橡皮筋、螺絲間數量、方向、捆束構造產生的接合關係及規律性的美感。軟包裝的衛生紙容易離家出走，造成教室內雜亂，要求學生思考解決方法，引導出重複使用硬面紙盒及如何固定在桌子邊的接合構造。「何處好安身？」設定了「不晃、好抽、易換、能拆、耐用、耐看」階段性任務，漸進式思考「合用」是要符合很多條件的，符合條件才是合用，合用才是符合構造的生活美感。</p>
            <p dir="ltr" style="text-align: center;"><strong><br /><br /></strong></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/SL8833YjCFuaknVYV4R8i84rPd2mB2wJNTvLDvR44krEp1K-eW03-3yHHbCvl7lthfEVvuTNlMrgkpP55nkxGOvPMiwt5K_G2TT5oAcA-fv7kz-JBjQtN0dvYlTtfQ" width="643" height="481" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/dUAGTx0-BFRAgQbeW2m-6MCGLc5DsXj630LnqTaQ1h0kfufAvAaQPjJidEqwfBQdKa4-K4YUFnfbZYB8ftPQ5Tm42enhrBeox6dE-x6Y5aB8Af_Cifqe6zAKRGNiRw" width="643" height="857" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/GvwrNkheYYvjnsJQGoPBjBHbcbHm-OCT9B_Bx-bvctumV8OE75cxdkZC_1qFnJXBSRVcCwLvHNNw5tA9eYKgNUSIGhEs1wsKFqvRbmyj_RpcCnsIBRrdT1-w12t4tg" width="643" height="428" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/A4VUjYyzpyX6Bf21YzO0oBUL8Q3fyUgr-AYh6TW2LwAw-M6apmiM6e4f5Dz_oiyL5wzcs9dwYsWbmr6QR9xJXHcIz-SbzDo235grRtbc9vx6Ik7TBOsCfv1t7Ivgyw" width="643" height="428" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/merjFUnAa8s2GF_1zGiUuqiALpHJKo0L3GFW_PPSa4NcT_CCFih_bgqgQniQGmbLFcbZN52YL1ClXzX8UE0l1OZrEBPSS1GXzYmIki2RG9AVOwWUCUHI3OQ6ip7SMQ" width="643" height="428" /></p>
            <p dir="ltr" style="text-align: center;"><br /><br /></p>
            <p style="text-align: center;">&nbsp;</p>`,
          file: 'https://drive.google.com/file/d/1GE3R88OJwo0n1s10GlQy_LGDfCW67w8g/view?usp=sharing',
          hashtag: ['面紙', '構造'],
          postid: '68554458455456542',
          pro: '美感與設計創新計畫',
          level: '國中',
          domain: '構造',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '拈花惹草',
          firstpic: require('../../assets/teachdata/meichiao/img03.jpg'),
          school: '臺北市立介壽國民中學',
          author: '陳育淳',
          content: `<p dir="ltr" role="presentation">概要：「拈花惹草」的課程設計是處理生活中「花器與花草」的對話，體會一種生活方式的選擇。課程將從「什麼東西可以當花器？」打開序幕，接下來學生們將處理花器的質感議題。學生們藉由分組的討論，了解花器的功能與材質的可能性。各組可以從「鐵器、紙黏土或免燒陶土、水泥」這些材質中選擇，或是自己組別決定該組要處理的花器質感，依照教師給予的工具包，利用減法敲、磨、刷、刮；或是加法塗料等方式處理容器的表面材質，並為其花器選擇適合其質感的植物，表現整組的風格。最後讓學生觀察記錄自己養育盆栽過程與環境。課程進行中透過攝影紀錄歷程與改變，並透過展示與講述（show and tell）分享活動心得。</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/r0LGM34Doyik9Rbr-0-J03VgYxJsNv73IQ_vgiuRJJtzUR2jmr7rr4rReqVgSIWYSGg2mrqcEeSfOLvDregS3Nkc2I80uu-5mwdigk3p77FxY-4nOgk1EIG_sLDxfA" width="482" height="360" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/uZZblT9EU-NWJDe97k-JKt2uSc6_aJveV1xoRkoxv56OhRB3lXIJsHwq_IEnO8-rkAjBUTsNxsK-3BgXiLypiW1BT7Hm7WQ5e4p1u4QFALRj2Ghq4YYQAvjAq3KDqg" width="482" height="361" /></p>
            <p dir="ltr">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img src="https://lh5.googleusercontent.com/66DZIofZmj65RTVEKQWwlD6RY7tVsk0GG1MIhAzbZFjTFkuMHrWsg56d8CHRPNV3FpNlHes5agte27uiQqB3iF6fg-2xEg6Y9m8ROMg5259Tq6K7l-bVBBsMH5OHJQ" width="285" height="174" /> <img src="https://lh6.googleusercontent.com/YF51uKSjwqbv4PhzmaePf7oYqAp9a9EhLeFpLjGQJvcSznMkoOJGJ6kzQwSM6BfxgYk6EKh4-GoXCX1X4vOcm8uWKt3G5TWOnHmBFsCrTtQmiBVvpayT3n24ZVSMAQ" width="233" height="175" /><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/6B9fQW_D6EkQLHYLsUSLTImj9mF2Mn94044vou3XdX9rhHydSUu4DQw7fJLSAlJf-r5dbbbKuZVjY9WtRQKHFee9AxvsC_FQksjLiorefkmIGyvOPBsiBBpbUJuQRQ" width="482" height="271" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/i4nEyCM9iLUy4rhNvLJ99ui5Dhdh7_bKhMZcsPcPuh65a4ch_YoL_r3HuIL7y2fRxbT9ytxxQ3Mm1Ho-LLHYOp-pMmVVn6eq9fAOGZvHWhMlSKuevPSgRfp_Gr2m2w" width="482" height="361" /></p>
            <p dir="ltr" style="text-align: center;"><strong><br /><br /><br /></strong> </p>
            <p style="text-align: center;">&nbsp;</p>`,
          file: 'https://drive.google.com/file/d/12tachwnRBSiviE-Vmog0STFqFObp4klB/view?usp=sharing',
          hashtag: ['花草', '質感'],
          postid: '68554458656566542',
          pro: '美感與設計創新計畫',
          level: '國中',
          domain: '質感',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '重拾被遺忘的技藝（樹皮衣）',
          firstpic: require('../../assets/teachdata/meichiao/img04.jpg'),
          school: '臺東縣立知本國民中學',
          author: '劉吉益',
          content: `<p dir="ltr" role="presentation">概要：本課程設計以「質感」為教學核心主軸、「色彩」為輔。本校多為原住民阿美族、卑南族學生居多，占全校比例百分之六十以上，因受到漢化的影響，老祖宗遺留下來的生活技藝多已遺忘，為使日常生活技藝文化能再次保存下來，本課程先從台東在地天然素材、原住民生活文化介紹起、重新開始摸索、探索製作『樹皮衣』的方法。並透過逐一訪問、訪談都蘭部落耆老的記憶中，重新拼湊建置樹皮衣的製作技術，再利用樹皮的特性，研發以樹皮為材質來創造出各式各樣的適合日常生活文創商品，提升樹皮的使用價值，讓學生能從傳統樹皮技藝文化中，演化成文化創意產品。</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/WHirp2K6uPlX_gYKKT2J7k2XoCdWi23kbMNBsWAIMesTMQPeyCseSFTSBJuRDFGqUyJCRwiS2UVJIOQ6cL23qhQYKEbvwQ40Qj8WTpoq9PCmxmW-Sx1Z6cPOzQIJsw" width="643" height="429" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/zldUI5pesY17paOjhykuK7QVjDr9sbMMtwvmgr_GXg-zCwpCBTmMNacjYj_REt5MkBH1VyIroI62H2KaXBk_o9X5W-vta8bfABMt1bCx3-o5w3Ts6zHNDcsuhBFKww" width="643" height="429" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/IqyLBH0bRhkJHYg2B5h-O_8pFhtK7zDXUxTvRimt-q0PbMwamiIzPNRqKC2UmXOtBLuJJVZpR9BuiZCZBhyK401FUHmSG8wJY49FbfI-V_MvV84uABcg5hhOiKKJ5w" width="643" height="429" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/CbW8iFiOC_sjN4kMSbZHzE2ynjYOW3WbNgqzFzwfG68mGDacY80oHapFM9ewSPQbxZnbLQZ3yn-1MhC59IhrpTN7RL14wvWm2FkSklr9CotnRkzijS6wHR1Wsm7J0g" width="643" height="429" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/_uySUsEawU4DeAOmb1Yvxg3o6Ke7HAZAnO0kBqcioGoWXt0_GaRqv3qLotYirKhO0mJViG6r53oafaIxyk5aJSWv5G50WMJBTau2lQVsyjHtXUFHCcG6LMIYqL1ysw" width="643" height="429" /></p>
            <p dir="ltr" style="text-align: center;"><br /><br /></p>
            <p style="text-align: center;">&nbsp;</p>`,
          file: 'https://drive.google.com/file/d/1EwG4BR5PJQLhWSonNtVUcjLkWDE0_hWn/view?usp=sharing',
          hashtag: ['技藝', '質感'],
          postid: '68554454556542',
          pro: '美感與設計創新計畫',
          level: '國中',
          domain: '質感',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '從「解」與「構」的構造中玩玩傘',
          firstpic: require('../../assets/teachdata/meichiao/img05.jpg'),
          school: '臺東縣立新生國民中學',
          author: '張意佳',
          content: `<p dir="ltr" role="presentation">第一階段從「拆解」生活中文具與用品，發現構造意義，並理解構造間的機能關係與材料的意義與美感；藉由探察校園角落中構造物存在的意義並討論具美感嗎？第二階段是探索材料與再建構的初步練習，讓學生學習?＋?＝10的思考力，給予適當的點、線、面材料，激盪學生創意想法，嚐試依目的需求結合素材，重新組合改裝，給予做中學的初步體驗。第三階段藉由探索生活中的環保素材-雨傘，動手拆解傘的過程中，理解傘結構意義與零件素材的關係而更加深對構造的理解與應用，藉著學生彼此討論的過程中，思考傘骨架如何再應用，引發創意靈感，透過重新定義「傘骨」的新功能，以合宜的結合方法(綁、鎖、縫、卡、串聯、編織)，嚐試以傘骨為主體結合各樣材料，透過草圖設計、動手做、做中學完成應用於生活裡具美感的物件。並運用環保概念，為愛地球而嘗試資源再利用，最後階段學生彼此分享課程中過程的心得與獲得，欣賞大家作品的創意。</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/3Yv79f6c9rGCNqLlOikSUVYVSUgt-Vht0cX4elw8xIumoyU-P8o0RdMyWJkGwGnjsWilf9vLXh5GnNkUQyM5oLY4Crvr_PsZQUm0r1ITu3wKWwscxXFh_71AVvhzhQ" width="643" height="428" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/nVKA2DDbF9oH2DSkw7pAREnQa-7AfUdavptfYRzicQCP7Il38GGF4JZ-Xw9qoRZv8KADTKwCOdxx2ykpwPyZOCFWf5dEluRr7pMwLoSRQHx2ETNGTNUbaj9wEeFZPg" width="643" height="428" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/JfP1HAQKu1NKT5jQbloQNpJAYk5ntLZDhcJNTk-BxBphMWc5cX1FrkGtgs1-tbis4uijjQ6fGmIrgtRXgQW6GMM4b6xi40ExavyJQM_3-OgQrVsN041hlwJN-Lpkzg" width="643" height="428" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/_Udo1KNrUnprWmAKVbx-jdF4yiGvD07XDZGXY6dii22VGFwAwR4sm5HKJNMDUHuzMS7rcq3qIJCVOgr0cQntc_gCN_rhp2xBskUIzRivq_pB2YLLy8PRR6siz7XM3A" width="643" height="428" /></p>
            <p dir="ltr" style="text-align: center;"><br /><br /></p>
            <p style="text-align: center;">&nbsp;</p>`,
          file: 'https://drive.google.com/file/d/1EwG4BR5PJQLhWSonNtVUcjLkWDE0_hWn/view?usp=sharing',
          hashtag: ['傘', '構造'],
          postid: '685578798556542',
          pro: '美感與設計創新計畫',
          level: '國中',
          domain: '構造',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '美哉玉山桌遊趣',
          firstpic: require('../../assets/teachdata/meichiao/img06.jpg'),
          school: '嘉義市立玉山國民中學',
          author: '張銘修',
          content: `<p dir="ltr" role="presentation">概要：玉山國中七年級學生均有攀登麟趾山經驗，從中去思考沿途自然景物與挑戰的感受，遙想這學年攀登玉山前峰的想像進行主題美感應用教學。分組設計出一款跟玉山人文史地、自然生態、挑戰心路歷程有關的桌遊。首先分析現有桌遊的色彩及收納構成，其次進入桌遊設計過程中，以色彩為主要構面進行配色教學，從中引導學生完成色彩計畫，找出自己主題桌遊的主色調與背景色系，再運用強調色進行角色或重點物件配色。輔以構成的美感，從場景、遊戲元件、說明書等之收納，完成立體構成的合宜性教學，以及背景或卡牌設計等平面構成教學，完成玉山美感桌遊。並讓學生反思自身在登山經驗中對於自然與環境議題的感觸，以及未來面對生活事物時對色彩、構成有感覺。</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/SZ01lIRHmu7QmL-Zq-bT6waBYtzBIMh-7fnpHNrOSknvpKh1uiAB7OT1iFKQT11xNxlmSPFBcyxqtYE_IQy6Ke_j_U4cC3ZPTDBe9d-LaJFPzcFCg-1KHWG1OC9eqA" width="643" height="431" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/-nALppa4fCZsFuAwXTGCqbM79QVoTK3dxCJx2GEqWHo2xCddS2fd81VtOn9v0lhz805DPzoG-0B2tXOIkNNYxa4cq386kpLE1v-iuWTVg2I74Dm1N_pow6QiIZ67Aw" width="643" height="431" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/fKN8METG9wYcncuZKkq7rMqYhcPx4qxG3jErjg0GfGdoGxPaUl2Mv9b6ceh1ogl53eTBERDC0XF-871EG0PYt8t6_rJBhC-efD4atYIIFIATM_ufkOoGooIIVCIZWg" width="643" height="431" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/QWwTH4C6wOjiPQeYVPw1jTcDnaGL_iQabLgGXoDUExbYXiEODS4t7TwTD-kmCg4VMT2EM8wkGLHpVPark0Wor4HFCH7DNVO3jnEc0sHSwDPNyZKWW2Bp4rYtmS3ERA" width="643" height="431" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/a2RqYfxUv8jB__v1VkkqQkBXsCmuMnLogRgY9ePSut8eH78rlsHDVMaKUyELEHIX8_0otkWGOG9kis9e_9LK7JOuE9fA1F5E-xgGq1Zu9dSlwwHDjoOIklzxGSgR4g" width="643" height="431" /></p>
            <p dir="ltr" style="text-align: center;"><br /><br /></p>
            <p style="text-align: center;">&nbsp;</p>`,
          file: 'https://drive.google.com/file/d/1XJcAOeb-bm1vMlYhfjd6-GFBxBXG6t3z/view?usp=sharing',
          hashtag: ['桌遊', '構成', '色彩', '綜合'],
          postid: '6486464642',
          pro: '美感與設計創新計畫',
          level: '國中',
          domain: '構成、色彩、綜合',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '組構美感高雄味',
          firstpic: require('../../assets/teachdata/meichiao/img07.jpg'),
          school: '高雄市立前鎮高級中學',
          author: '蔡孟恬',
          content: `<p dir="ltr" role="presentation">概要：學生藉由「1. 發散的構成練習2. 一張食譜的構成分析3. 家常菜的構成創作」三個階段任務練習，讓同學從任務中的討論與分享過程歸納出構成的美感關鍵要素。在資料搜集的過程中發現生活中可見的視覺文化所符合的構成美感關鍵要素；分析現成的印刷品，理解構成的美感關鍵要素在平面設計上的運用。透過主題式的創作任務，強化學生對於美感構面中的構成運用之經驗；結合介紹一道家常菜的主題；完成一件以構成方面訓練為主，認識在地飲食文化為輔的平面創作。</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/EDGT1C6sTbO_2xcJnMEeioWaw12e22xPVaryEtgwwZkXlJunEmjJ6kzQfeoZ0OHZT0PqkQBBQaseEd_tvadpxxtmzc-m40bXlY5ev6cfBYElmQEsZH6R5OHVAxXINA" width="643" height="483" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/ryLszth3scMMBG7Ne6GzuNovUaxrPXFU5UkWO1L5YY3VJMajnQY9ruN7b-pGotKIGlAOvAdBC8wo60i3NBISRPJPtodegPzK1yX2_LBIjyw8NJKBEH981-UCm778cg" width="643" height="483" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/yct80uAtJ-ZGeGZmCLOZ8464A7LuHPUuwO3zfx7b9DTIqLYE1RaSlgsGeDUCtve_aD_dLE2tN1Nwc24q7-27WNOZjA5yvmv3rHto_lZgohJcxiKgd6g9evymBJrRoA" width="643" height="483" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/qfcpV1wWdjf85aTzMi7iwXr7bOo9mUi8Dkig9TVCLj3r3VsonmNVEQ5Us9esn9YiakQF7k40FFrC12fXnJYlulL7eVazVfn2KGYYnBNkXtReikWb8FJcrCd-9ATYuA" width="643" height="857" /></p>
            <p dir="ltr" style="text-align: center;"><strong><br /><br /></strong> </p>
            <p style="text-align: center;">&nbsp;</p>`,
          file: 'https://drive.google.com/file/d/1IWJdblje5s_AYxDe7Fr9JDBqdxKxWMsb/view?usp=sharing',
          hashtag: ['高雄', '構成'],
          postid: '64859655354544642',
          pro: '美感與設計創新計畫',
          level: '高中',
          domain: '構成',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '隱形的操盤手-比例',
          firstpic: require('../../assets/teachdata/meichiao/img08.jpg'),
          school: '臺南市立永仁高級中學',
          author: '陳潔婷',
          content: `<p dir="ltr" role="presentation">概要：教師引導學生發現比例的美感，透過測量生活物件與自己的身形，發現存在比例關係。藉由尋找與測量美醜穿搭圖片，試著找出優劣比例，再經過自行操作身形紙卡的比例分割試驗，找出最適合自己的服飾穿搭比例，並探討自己喜愛的原因、比例與美感的關連性為何。</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.google.com/u/2/d/1sz614GTmNGTw-DYxnaitaNIdwUwsDus6=w2048-h1152" width="643" height="361" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/N1a3uKVrlDkAMGbG3FzPftfLe52OQAcH4MmIVtiyFwnuhrFSQufsNzJzkzxci4JDvRvacY2YYwNIyp46x8mUdqdwIueDgV3mUML_Kz-sXQYYMPoQi8Wir35mVD_Lqw" width="643" height="483" /></p>
            <p>&nbsp;</p>`,
          file: 'https://drive.google.com/file/d/1M1_epXs8RZSwxi3gs6g2s37xpI_0K0Ai/view?usp=sharing',
          hashtag: ['操盤手', '比例'],
          postid: '6485965535465846746842',
          pro: '美感與設計創新計畫',
          level: '高中',
          domain: '比例',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '紙與你相遇──質感的初中階課程',
          firstpic: require('../../assets/teachdata/meichiao/img09.png'),
          school: '南投縣立旭光高級中學',
          author: '黃培茹',
          content: `<p dir="ltr" role="presentation">概要：為了增進學生瞭解質感與生活的關係並提高學生對於生活材質的感知能力，本教案從生活中的材質出發，藉著視、聽、嗅、味、觸五感體驗中發現材質與感覺的關係，並練習質感的描述表達。體驗後接著以學生最常接觸的課本、筆記本、卡片&hellip;等紙張為出發點，從收集生活中的紙材開始，發現紙張的多樣性並了解時代、技術對於紙張製程的影響。藉由《紙張的五個故事》操作來探索材質間的合作與衝突，以手抄紙作為質感經驗，混合回收的紙材與不同異材質如植物、塑膠&hellip;。從發現到探索，進行一段質感之旅。</p>
            <p dir="ltr">&nbsp;</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/xALdzYft8ACbkHPioRy6mAvAOATEkvmtieim67JURvm94ZLsIgHYdzfjcog9SqApsl4w5SAnRbHZaxFFjQX55vkhvf-chKRo4XL3YTF7wTq21upzYX6lRJQW19ERDQ" width="641" height="479" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/Xl5zCXENkQjNhZ5Cnh-qiefkU4tmb1TZxq4Ot_fRyZfmp_10HvCgIqpiqlk0JQEnOr3I_Fy3D_8uEqjrnemrRgT2BKP6Bu40hf1eFLr9rO2eqwXTwRmp3UfMCN5jJw" width="627" height="472" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/E-SSoNcLOHeg-mKAhU8LxYINMttXfucj8NnJmXxY5itPTbVMFOltoStnoQpVV_6gGnHDaIsAeE4JwJqiKabax9jqJxH3GauqU9ILcgyk9-D_dCaUmEI1mQap2SIWvA" width="635" height="474" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/Cn3r5m6gkHQqBuPrECNFDPPva9WaaW7Sb_Fzyj7FMqHSJEX9eYlq_MpVsl9o6DPGX8ZV0MAffvsdsks1fgVEmG5Z7h_IuzMFIVSRzv-dfEGkBKlQygvTu8uVe-i0kQ" width="641" height="479" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/VllTItd8h1r0YQJSrm5AnuRKXxMfoYEteAiOtwZRCxZ3-0UC61DqDWFrfX-D12VosNCh8OWwRyK_DB3Sh8yAbYhxozH_Wi8xJ4V_ZbZ5GkBOmiIZ7xP16N4WLa1H0g" width="330" height="506" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/bsJngFWf-WRT4-i6BtIDLMHnoi7mUryL3kU-fd_sHwBCJL5WfF0H6o4KfgGy597F3xXe4NWztpz5YbXZ-seBnSaa2EjcY1nrx0tdJr8GMCQRwYJRKzV3C-iA5tng_Q" width="445" height="331" /></p>
            <p dir="ltr" role="presentation"><br /><br /></p>`,
          file: 'https://drive.google.com/file/d/1ocLWkJW2xHu82rlNCx9WjvEMofpWCi4C/view?usp=sharing',
          hashtag: ['紙', '質感'],
          postid: '6485959884846746842',
          pro: '美感與設計創新計畫',
          level: '高中',
          domain: '質感',
          pic: [
          ],
          kind: '課程',
        },
        {
          title: '發現海的顏色',
          firstpic: require('../../assets/teachdata/meichiao/img10.jpg'),
          school: '國立基隆高級海事職業學校',
          author: '林維瑜',
          content: `<p dir="ltr" role="presentation">概要：學校屬性與位置皆與海洋有深厚的關係性，而根據分析「藍色」正是全球需求量最大的顏色，是因為藍色傳達的意象是正向且具威信度的，facebook 的創始人Zuckerberg 在設計 facebook 時為什麼選用藍色，也是有所根據，Zuckerberg 本身是紅綠色盲，藍色是他最明白清楚的顏色，而藍色也是男生與女生共同喜好的顏色，所以歷來多間企業如 IBM、Twitter 都用作主色，皆因藍乃大眾顏色，而且冷靜意涵比較全球通用。甚至藍色具有效舒緩緊張情緒之效果，進而促使更多人想找到新的「藍色」。所以以海洋的色彩─「藍色」作為此次課程的發展重點，以身邊可見的大自然藍色(海洋、天空)與人造藍色(本校藍色制服)為出發，讓學生重新思考有關「藍色」的種種可能，並透過廣泛的觀察，重新面對色彩，並藉由觀察、收集、分析、解構與重新的構成來認識色彩，建構屬於基隆海事的「藍色」。</p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/I_F_VXjncCpGJcww0nnrjOSXVx7Z-68fI4Boq_ST5p0I8fnNbSvAaNQmNZzlyq8ruF_kse_O0cYEzORyHKQgHVsU1CamGzGgjF-dUxYIHkiGrPUbztYwTfRj1VUQ2A" width="643" height="483" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/26abq_g-I9mv2CYqWcimhF-NlkFfyQ_EXaSMSvqjGVwUtM_U2Ndb1ktPMwa3g7_XFnsBczCeawtB0dfN1wOtwoG4alRwiYzecgUJntBEhQYi-WXPE_eiEysGr3xf9A" width="643" height="483" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/vKnSUhEjK6LV5O1I63Pr5I8W7NHRM2jenvSxgMx3vPE7BwyJ3n0o5MHNGZExIR3SzYztMlWJ2pDvFSUGfsqfe7NUiaqkhH2NEJH-ZY7CrWNzVlZevHZiIxJKGC3Jbw" width="643" height="857" /></p>
            <p dir="ltr"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/YhcJ_DjpiqyJtb5k93LAomfeAZvrCmt6LRXZpHr0wLwE1-ddLeX7rZOEYFZ7jz0EfEG-dbPo3kkbmjVnCP2gu2fNZFoVlsKmd3wNUJTXl1NTv0TAsX9FeB3tdx-o6w" width="643" height="483" /></p>
            <p dir="ltr" role="presentation"><br /><br /></p>`,
          file: 'https://drive.google.com/file/d/1MKvgIVc40ZMU_PutmhbfDjDiqD2eSkxg/view?usp=sharing',
          hashtag: ['海', '色彩'],
          postid: '648595985465466746842',
          pro: '美感與設計創新計畫',
          level: '高中',
          domain: '色彩',
          pic: [
          ],
          kind: '課程',
        },
      ],
    }
  },
  mounted() {
    console.log(this.filterArray[0].get)
  },
  computed: {
    showPost() {
      //計畫
      var f1 = this.filterArray[0].get
      console.log(f1)
      //專業
      var f2 = this.filterArray[1].get
      //學習階段
      var f3 = this.filterArray[2].get
      //頁碼
      if(f1=='全部' && f2=='全部' && f3=='全部') {
        return this.teachArray
      } else if(f1!='全部' && f2=='全部' && f3=='全部') {
        return this.teachArray.filter(function(item) {return JSON.stringify(item.pro).indexOf(f1)!=-1})
      } else if(f1=='全部' && f2!='全部' && f3=='全部') {
        return this.teachArray.filter(function(item) {return JSON.stringify(item.domain).indexOf(f2)!=-1})
      } else if (f1=='全部' && f2=='全部' && f3 !='全部') {
        return this.teachArray.filter(function(item) {return JSON.stringify(item.level).indexOf(f3)!=-1})
      } else if (f1!='全部' && f2!='全部' & f3=='全部') {
        return this.teachArray.filter(function(item) {return JSON.stringify(item.pro).indexOf(f1)!=-1 && JSON.stringify(item.domain).indexOf(f2)!=-1})
      } else if(f1=='全部' && f2!='全部' && f3 !='全部') {
        return this.teachArray.filter(function(item) {return JSON.stringify(item.domain).indexOf(f2)!=-1 && JSON.stringify(item.level).indexOf(f3)!=-1})
      } else if(f1!='全部' && f2=='全部' && f3!='全部') {
        return this.teachArray.filter(function(item) {return JSON.stringify(item.pro).indexOf(f1)!=-1 && JSON.stringify(item.level).indexOf(f3)!=-1})
      } else if(f1!='全部' && f2!='全部' && f3!= '全部') {
        return this.teachArray.filter(function(item) {return JSON.stringify(item.pro).indexOf(f1)!=-1 && JSON.stringify(item.domain).indexOf(f2)!=-1 && JSON.stringify(item.level).indexOf(f3)!=-1})
      }
    },
    //撈第幾筆資料
    dp() {
      return (this.p-1)*10
    },
    //總頁碼
    totalPage() {
      var page=[];
      for(var i = 1 ; i <= Math.ceil(this.showPost.length / 10) ; i++) {
        page.push(i)
      }
      return page
    },
    //顯示的頁碼
    showPage() {
      var p = this.p
      var totalPage = this.totalPage
      if(totalPage.length <= 8){
        return totalPage
      }else if(totalPage.length>8 && p <=8){
        return totalPage.slice(0,8)
      }else if (totalPage.length>8 && p>8) {
        return totalPage.slice(Number(p)-1, Number(p)+2)
      }
    },
    //現在第幾頁
    p() {
      return this.$route.params.pageid
    }
  },
  watch: {
    '$route'(to,from) {
      if(this.$route.params.pageid > this.totalPage.length)
    {this.$router.push('/module/page/1')}
    }
  },
  beforeUpdate() {
    if(this.$route.params.pageid > this.totalPage.length)
    {this.$router.push('/module/page/1')}
  }
  
}
</script>

<style scoped lang="sass">
@import '@/assets/style.sass'


.te
  width: 80%
  margin-left: 10%
  box-sizing: border-box
  margin-top: 6vw
  padding: 0 0 200px 0
  +phone
    width: 95%
    margin-left: 2.5%
    padding: 0 0 500px 0

    // min-width: 360px
    // min-height: 812px
  .teTop
    position: relative
    width: 100%
    // height: 3vw
    // margin-left: 10%
    margin-top: 3%
    box-sizing: border-box
    // +bb
    border-bottom: solid 1px #878787
    +flexrow
    flex-wrap: wrap
    +pad
      // height: 4vw
      margin-top: 1%
    +phone
      // display: none
      border: 0
      +flexcolumn
    .teName
      width: 15%
      // +bb
      font-size: 2vw
      font-weight: 800
      color: #878787
      +pad
        width: 15%
        font-size: 2.5vw
      +phone
        width: max-content
        font-size: 6vw
        font-weight: 800
        line-height: 170%
        color: black
        
    .teFilterBlock
      position: relative
      +flexrow
      +phone
        +flexcolumn
      .filter
        position: relative
        width: 20vw
        height: 80%
        margin-right: 10px
        background-color: white
        border: solid 0.5px #D2D2D2
        border-radius: 6px
        text-align: center
        font-size: 15px
        letter-spacing: 1.5px
        cursor: pointer
        outline: none
        box-sizing: border-box
        padding: 3px 0 0 0
        color: #878787
        +flexcolumn
        +smallcom
          font-size: 13px
          padding: 1px 0 0 0
        +pad
          height: 90%
          padding: 0
        +phone
          width: 100%
          height: 30px
          font-size: 20px
          margin-bottom: 10px
          
        .tri
          position: absolute
          width: 15px
          height: 15px
          right: 6px
          top: 5px
          background: url('../../assets/pulltri.png')
          +bgcon
          +pad
            top: 2px
          +phone
            top: 6px
            right: 8px
        .item_block
          position: absolute
          background-color: white
          border: solid 0.5px #D2D2D2
          border-radius: 6px
          top: 2.3vw
          width: 100%
          // height: 10vw
          box-sizing: border-box
          padding: 10px 0
          z-index: 99
          +pad
            top: 3vw
          +phone
            top: 35px
          .filterItem
            position: relative
            // margin-bottom: 5px
            border-top: solid 0.5px #999
            padding: 5px 0
            &:hover
              background-color: rgba(#333,0.5)
              color: white
            &:last-child
              border-bottom: solid 0.5px #999
              
    
          
  .teBottom
    width: 100%
    // height: 40vw
    // margin-left: 10%
    margin-top: 1%
    box-sizing: border-box
    position: relative
    // +bb
    +flexrow
    flex-wrap: wrap
    +pad
      margin-top: 2%
      height: auto
    +phone
      +flexcolumn
      width: 95%
      margin-left: 2.5%
      margin-top: 12%
      flex-wrap: initial
      height: auto
    .nodata
      position: absolute
      font-size: 20px
      letter-spacing: 1.5px
      font-weight: bold
      color: #D2D2D2
      left: 49%
      // top: 40%
      margin-top: 10%
      +pad
        left: 45%
      +phone
        left: 42%

    .teCard
      width: 20%
      height: 18vw
      margin-bottom: 4%
      position: relative
      +smallcom
        width: 33%
        height: 33vw
        margin-bottom: 4vw

      +phone
        width: 100%
        // height: 33vw
        +flexrow
        border-bottom: solid 1px #878787
      .tePic
        position: relative
        width: 85%
        height: 68%
        // +bb
        // margin-left: 7.25%
        +pad
          width: 90%
          height: 65%
          margin-left: 5%
          margin-right: 5%
        +phone
          width: 40%
          height: 90%
          margin-left: 0
          margin-right: 0
      .teTextBlock
        width: 100%
        +phone
          width: 60%
        .teSubtitle
          width: 85%
          font-size: 0.8vw
          margin-top: 2%
          color: #878787
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 1
          -webkit-box-orient: vertical

          +pad
            font-size: 1.8vw
            width: 90%
            letter-spacing: 0.1vw
            margin-left: 5%
            margin-right: 5%
          +phone
            width: 90%
            font-size: 3.3vw
            letter-spacing: 0.3vw
        .teTitle
          width: 85%
          font-size: 0.85vw
          margin-top: 2%
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          font-weight: 800

          +pad
            width: 90%
            font-size: 1.8vw
            letter-spacing: 0.1vw
            margin-left: 5%
            margin-right: 5%
          +phone
            width: 90%
            font-size: 4vw
            line-height: 7vw
            margin-top: 3%
        .tePro
          width: 85%
          font-size: 0.8vw
          margin-top: 1%
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          color: #878787

          +pad
            font-size: 1.8vw
            width: 90%
            letter-spacing: 0.1vw
            margin-left: 5%
            margin-right: 5%
          +phone
            width: 90%
            font-size: 4vw
            margin-top: 5%
            -webkit-line-clamp: 1
  .tePageList
    width: 100%
    height: 6vw
    margin-top: 2vw
    // +bb
    +flexrow
    justify-content: center
    +phone
      height: 6vw
      margin-top: 10%
    .tePrev
      width: 1%
      height: 40%
      background: url('../../assets/slide/prev.png')
      +bgcon
      // +bb
      background-position: 0 0
      background-size: 100% auto
      margin-right: 0.5vw
      opacity: 0.5
      margin-top: 0.1%
      cursor: pointer
      +pad
        width: 3%
        height: 100%
        margin-right: 1.8vw
      +phone
        width: 5%
        margin-right: 6vw
    .tePage
      font-size: 0.8vw
      margin-right: 0.5vw
      color: #878787
      cursor: pointer
      +pad
        font-size: 1.8vw
        margin-right: 1.8vw
      +phone
        // width: 5%
        margin-right: 6vw
        font-size: 4vw

      &.active
        color: black
    .teDot
      font-size: 0.8vw
      color: #878787
      margin-right: 0.5vw
      +pad
        font-size: 1.8vw
        margin-right: 1.8vw
      +phone
        width: 5%
        margin-right: 3.5vw
    .teFinal
      font-size: 0.8vw
      margin-right: 0.5vw
      color: #878787
      cursor: pointer
      +pad
        font-size: 1.8vw
        margin-right: 1.8vw
      +phone
        width: 5%
        margin-right: 3.5vw
        font-size: 3.5vw
    .teNext
      width: 1%
      height: 40%
      background: url('../../assets/slide/next.png')
      +bgcon
      // +bb
      background-position: 0 0
      background-size: 100% auto
      opacity: 0.5
      margin-top: 0.1%
      cursor: pointer
      +pad
        width: 3%
        height: 100%
      +phone
        width: 5%
  
</style>