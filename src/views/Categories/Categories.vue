<template lang="pug">
.ca
  .caTop
    .caName {{ name }}
  .caBottom
    router-link.caCard(v-for="item in showPost" :to="'/post/' + item.postid")
      .caPic(:style="{background:　'url(' + item.firstpic + ')', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .caTextBox
        .caDate {{ item.peopleName }}
        .caTitle {{ item.title }}
        .caSubTitle {{ item.pro }}


</template>

<script>
export default {
  data() {
    return {
      inputSearch: null,
      peopleArray: [
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
          video: [],
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
          video: [],
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
          video: [],
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
          video: [],
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
          video: [],
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
          video: [],
          postid: '554968468468452845845',
          tab: ['人物專訪'],

        },
        {
          pro: '見美．踐美．漸美－建構美感生活學習地圖之方案實踐實施計畫',
          title: '溯源為了尋根，建構部落生命美學。',
          peopleName: '屏東縣長榮百合國小校長陳世聰、學生',
          firstpic: require('../../assets/default.png'),
          content: `<p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 新細明體, serif;">因為莫拉克風災遷離家園的屏東縣長榮百合國小，認為唯有尋根才能溯源，找到部落生命美學，建構屬於孩子的自信與生命智慧。</span></p>
            <p style="margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-size: 12.0pt; font-family: Calibri, sans-serif;">36</span><span style="font-size: 12.0pt; font-family: 新細明體, serif;">位長榮百合孩子在</span><span style="font-size: 12.0pt; font-family: Calibri, sans-serif;">3</span><span style="font-size: 12.0pt; font-family: 新細明體, serif;">個小時的跋山涉水之後重返古大社，紮營並探訪大社石板屋，聽長者說部落故事，從舊部落的探訪中認識文化根源，了解北排灣族</span><span style="font-size: 12.0pt; font-family: Calibri, sans-serif;">Ravar</span><span style="font-size: 12.0pt; font-family: 新細明體, serif;">亞族發源的古老部落地理位置、遷徙動線，更就地取材生火炊飯，學習漁獵、體驗傳統生活，也實踐了學校「全人」「整全」「天地人諧和共存」的教育理念。</span> </p>`,
          video: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/yARNtZJjeaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
          postid: '5964564545',
          tab: ['人物專訪'],

        },
      ],
    }
  },
  computed: {
    //頁面名稱
    name() {
      return this.$route.params.categoriesid
    },
    //資料陣列
    showPost() {
      var s = this.inputSearch
      var t = this.$route.params.categoriesid
      if(s!=null) {
        return this.peopleArray.filter(function(item) {return JSON.stringify(item.title + item.content + item.pro + item.peopleName)!=-1 && JSON.stringify(item.tab).indexOf(t)!=-1})
      }else if(s==null) {
        return this.peopleArray.filter(function(item) {return JSON.stringify(item.tab).indexOf(t)!=-1})
      }
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/style.sass'
.ca
  width: 80%
  margin-top: 2vw
  margin-left: 10%
  box-sizing: border-box
  +pad
    width: 95%
    margin-left: 2.5%
  +phone
    width: 100%
    margin-left: 0%
    margin-top: 0vw
  .caTop
    width: 100%
    height: 3vw
    margin-top: 3%
    box-sizing: border-box
    border-bottom: solid 1px #878787
    +flexrow
    +pad
      height: 4vw
      margin-top: 1%
    +phone
      height: 10vw
      border: 0
      margin-top: 0
    .caName
      width: 15%
      // +bb
      font-size: 2vw
      font-weight: 800
      color: #878787
      +pad
        width: 15%
        font-size: 2.5vw
      +phone
        width: 26%
        font-size: 6vw
        font-weight: 800
        line-height: 170%
        color: black
        margin-left: 2vw
  .caBottom
    width: 100%
    height: 40vw
    // margin-left: 10%
    margin-top: 1%
    box-sizing: border-box
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
    .caCard
      width: 20%
      height: 43%
      margin-bottom: 4%
      position: relative
      +pad
        width: 33%
        height: 33vw
        margin-bottom: 4vw

      +phone
        width: 100%
        // height: 33vw
        +flexrow
        border-bottom: solid 1px #878787
      // +bb
      .caPic
        position: relative
        width: 85%
        height: 68%
        +bb
        border-color: #878787
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
      .caTextBox
        width: 100%
        +phone
          width: 60%
        
        .caDate
          width: 85%
          font-size: 0.8vw
          margin-top: 2%
          color: #878787

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
        .caTitle 
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
        .caSubTitle
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
</style>