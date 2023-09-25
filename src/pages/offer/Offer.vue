<template>
  <div>
    <dialogPop />
    <homeCover />
    <serviceQRcode />
    <!-- <my-header /> -->
    <div class="warp">
      <!-- banner -->
      <div class="banner">
        <div class="banner-content">
          <div class="banner-dacheng">
            {{ $t('大乘offer') }}
          </div>
          <div class="banner-slogan">
            {{ $t('slogan') }}
          </div>
          <div class="banner-companyDes">
            {{ $t('companyDes') }}
          </div>
        </div>
      </div>
      <!-- 特色优势 -->
      <div class="advantage advantage-bg">
        <div class="advantage-title">
          - {{ $t('特色优势') }} -
        </div>
        <!-- 特色优势详情 -->
        <div class="advantage-content">
          <div
            v-for="item in advantageItems"
            :key="item.id"
            class="advantage-item"
            :style="`background: url('${item.background}') no-repeat center;background-size: cover;`"
          >
            <div class="advantage-item-icon">
              <img :src="item.icon">
            </div>
            <div
              :class="`advantage-item-title ${$i18n.locale==='en'?'advantage-item-title-en':''}`"
              v-text="$i18n.locale=='en'?item['title-en']:item['title']"
            ></div>
            <div
              :class="`advantage-item-text ${$i18n.locale==='en'?'advantage-item-text-en':''}`"
              v-text="$i18n.locale=='en'?item['text-en']:item['text']"
            ></div>
          </div>
        </div>
      </div>
      <!-- 课程介绍 -->
      <div class="description description-bg">
        <div class="description-title">
          - {{ $t('课程介绍') }} -
        </div>
        <!-- 课程介绍详情 -->
        <div class="description-content">
          <div
            v-for="item in descriptionItems"
            :key="item.id"
            class="description-item"
            :style="`height:${$i18n.locale==='en'?550:440}px`"
          >
            <!-- top -->
            <div class="course-top">
              <img :src="$i18n.locale==='en'?item['description-en']:item.description">
            </div>
            <div :class="`course-title ${$i18n.locale=='en'?'course-title-en':''}`">
              <!-- 课程名 -->
              <div class="course-name">
                {{ $i18n.locale=='en'?item['course-en']:item['course'] }}
              </div>
              <!-- 课程班型 -->
              <div class="course-num">
                {{ $i18n.locale=='en'?item['courseNum-en']:item['courseNum'] }}
              </div>
            </div>
            <!-- 课程介绍 -->
            <div
              class="course-des"
              :style="`height:${$i18n.locale==='en'?430:320}px`"
              v-html="$i18n.locale=='en'?item['courseDes-en']:item['courseDes']"
            >
            </div>
            <div
              @click="onlineCon"
              class="description-btn"
            >{{ $t('在线咨询') }}</div>
          </div>
        </div>
      </div>
      <!-- 教师团队 -->
      <div class="teacherTeam teacherTeam-bg">
        <div class="teacherTeam-title">
          - {{ $t('讲师团队') }} -
        </div>
        <div class="teacherTeam-content">
          <div
            v-for="item in teachersItems"
            :key="item.id"
            class="teacherTeam-item"
            :style="`height:${$i18n.locale==='en'?350:320}px`"
          >
            <img
              class="teacher-avatar"
              :src=item.avatar
            >
            <div class="teacher-name">
              {{ $i18n.locale=='en'?item['teacherName-en']:item['teacherName'] }}
            </div>
            <div
              class="teacher-des"
              v-html="$i18n.locale=='en'?item['teacherDes-en']:item['teacherDes']"
            ></div>
          </div>
        </div>
      </div>
      <!-- 联系我们 -->
      <div class="contactUs">
        <div class="contactUs-content">
          <div class="contactUs-text">
            <div class="contactUs-colorText">
              {{ $t('contactUs.contactUs-colorText') }}
            </div>
            <div
              class="contactUs-tips"
              v-html="$t('contactUs.contactUs-tips')"
            >
            </div>
          </div>
          <div class="serviceVx">
            <img src="@/assets/img/06-课程咨询/二维码.png">
            <div>{{ $t('contactUs.serviceVx-tips') }}</div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <!-- <homeFooter /> -->
    </div>
  </div>
</template>

<script>
// import homeFooter from "@/components/homeFooter.vue";
// import myHeader from "@/components/myHeader.vue";
import HomeCover from "@/components/HomeCover";
import DialogPop from "@/components/DialogPop";
import ServiceQRcode from "@/components/ServiceQRcode";

export default {
  name: "MyOffer",
  components: {
    HomeCover,
    ServiceQRcode,
    DialogPop
  },
  mounted() {
    this.$store.commit("POPUPS");
    // if (!sessionStorage.getItem("popStatus")) {
    //   this.$store.commit("POPUPS");
    //   sessionStorage.setItem("popStatus", true);
    // }
  },
  data() {
    return {
      show: false,
      advantageItems: [
        {
          id: "001",
          icon: require("@/assets/img/03-特色优势/优质师资icon.png"),
          background: require("@/assets/img/03-特色优势/优质师资-背景.png"),
          title: "优质师资",
          text: "所有课程均由5年以上FLAG经验资深程序员授课，从面试官及应聘者两个视角，提供高效精准的解决方案。",
          "title-en": "High-quality instructors",
          "text-en":
            "All courses are taught by senior programmers with more than 5 years of experience in the FLAG companies. ",
        },
        {
          id: "002",
          icon: require("@/assets/img/03-特色优势/直播授课icon.png"),
          background: require("@/assets/img/03-特色优势/直播授课-背景.png"),
          title: "精品小班",
          text: "采用小班模式，将算法讲解和mock深度融合，一套课程解决面试所有问题。",
          "title-en": "Small high-quality class",
          "text-en":
            "Carried out in the small class mode, the course deeply integrates algorithm explanations and mocks to solve all the interview problems in a set of courses.",
        },
        {
          id: "003",
          icon: require("@/assets/img/03-特色优势/精品小班icon.png"),
          background: require("@/assets/img/03-特色优势/精品小班-背景.png"),
          title: "直播授课",
          text: "全程直播授课，老师根据学员情况针对性讲解，师生实时互动，高效学习。",
          "title-en": "Live classes",
          "text-en":
            "The whole teaching process is conducted in the form of a live stream. Instructors and students can interact in real time so that students can learn efficiently.",
        },
        {
          id: "004",
          icon: require("@/assets/img/03-特色优势/讲练结合icon.png"),
          background: require("@/assets/img/03-特色优势/讲练结合-背景.png"),
          title: "讲练结合",
          text: "高强度刷题督学+丰富的免费助学资料，帮助学员少走弯路，用最短的时间获得面试机会并成功拿下offer。",
          "title-en": "The combination of explaining and practising",
          "text-en":
            "Supervising intensive practising and providing abundant free study materials can help students take less detours, successfully get the offer.",
        },
      ],
      descriptionItems: [
        {
          id: "001",
          description: require("@/assets/img/04-课程介绍/求职系统小班/求职系统小班-top.png"),
          "description-en": require("@/assets/img/04-课程介绍/求职系统小班/求职系统小班-en.png"),
          course: "求职系统小班",
          courseNum: "每班最高10人",
          courseDes:
            "由大乘offer独立开发的求职系统班，将目前北美面试时间线清晰呈现，并对时间线上的每个环节进行深入指导。<br/><strong>通过求职系统班你将收获：</strong><br/>10节求职精讲课+3轮简历精修+3轮BQ修改+实时更新岗位投递直达链接库+保姆式督学+上课人数不超过10人+所有课程结束后给到整期课程回放，以及面试技巧指导等求职全流程服务。",
          "course-en": "Small Systematic Job Hunting Class",
          "courseNum-en": "10 students to the maximum/class",
          "courseDes-en":
            "The Systematic Job Hunting Class, developed independently by Dacheng offer, presents a clear timeline of the current interview in North America and provides in-depth guidance on each step of the timeline.<br/><strong>Through the class, you will acquire</strong><br/>A series of job hunting services, including 10 job hunting courses, 5 resume modifications, 3 mock speech optimizations, full resume supervision and interview (direction) guidance",
        },
        {
          id: "002",
          description: require("@/assets/img/04-课程介绍/算法精品小班/算法精品小班-top.png"),
          "description-en": require("@/assets/img/04-课程介绍/算法精品小班/算法精品小班-en.png"),
          course: "算法精品小班",
          courseNum: "每班最高10人",
          courseDes:
            "大乘offer独立开发算法精品小班课程，课程覆盖北美面试90%算法内容，特别针对模板在面试中的应用场景、应用技巧进行针对性课程设计。<br/><strong>通过算法精品班你将收获：</strong><br/>12节直播课+20多个算法模板+随堂知识点Mock+赠送1场专属Mock+题库永久+实时更新的岗位投递直达链接库+保姆式督学+上课人数不超过10人+所有课程结束后给到整期课程回放。",
          "course-en": "Small High-quality Algorithm Class",
          "courseNum-en": "10 students to the maximum/class",
          "courseDes-en":
            "The small high-quality algorithm courses, developed independently by Dacheng offer, cover 90% algorithm content in North American interview, and specifically include courses for the application of templates in interview scenarios and skills.<br/><strong>Through the class, you will acquire</strong><br/>12 two-hour algorithm courses, 11 real mocks in English, industrial-grade development environment practicing, more than100 selected questions and solutions to more than 500 algorithm questions.",
        },
        {
          id: "003",
          description: require("@/assets/img/04-课程介绍/求职系统小班/求职系统小班-top.png"),
          "description-en": require("@/assets/img/04-课程介绍/求职系统小班/求职系统小班-en.png"),
          course: "北美冲击大厂训练营",
          courseNum: "每月更新",
          courseDes:
            "由大乘offer资深FLAG面试官讲授的训练营指导课，为大家全方面解决：简历+BQ+Coding问题。<br/>通过训练营你将收获：<br/>北美的最新求职趋势解读、市场分析，面试技巧、准备规划、算法刷题技巧与模版等等。",
          "course-en": "[Updated monthly!] Bootcamp Lessons About North American Corporate!",
          "courseNum-en": "",
          "courseDes-en":
            "The Bootcamp lessons, taught by senior FLAG interviewers from Dacheng Offer, provide guidance on resumes, BQ, and coding problems to comprehensively solve your job-hunting concerns.<br/>From Bootcamp, you will gain:<br/>Interpretation of the latest job-hunting trends in North America, market analysis, interview tips, job-hunting preparation and planning, examination skills on algorithm, algorithm templates, etc.",
        },
      ],
      teachersItems: [
        {
          id: "001",
          teacherName: "Martin老师",
          avatar: require("@/assets/img/05-讲师团队/Martin.png"),
          teacherDes:
            "FLAG 面试官，先后毕业于清华计算机系和藤校 CS 专业。作为面试官和面试者参加超过1000+ 场面试，熟悉面试本质，课程设计立足面试官及应聘者两个视角，提供高效精准的解决方案。拥有多年教学经验，所带学生拿遍 FANNG 等几乎所有北美Top Tech 公司的Offer，转码解决方案覆盖 Intern/ New Grad/ 社招等全阶段学员。",
          "teacherName-en": "Mr. Martin",
          "teacherDes-en":
            "Mr. Martin, an interviewer of FLAG companies, graduated from Tsinghua University and an Ivy League college with a major in CS.As an interviewer and interviewee, he has participated in more than 1000 interviews. His course design is based on both perspectives of interviewers and applicants and his students range from intern, new graduates to social recruitment staff.His students have received offers from almost all top tech companies in North America.",
        },
        {
          id: "002",
          teacherName: "Christy老师",
          avatar: require("@/assets/img/05-讲师团队/Christy.png"),
          teacherDes:
            " FLAG面试官，先后毕业于北京邮电大学和北美计算机四校之一。半转码，擅长总结题型和高效刷题，曾刷leetcode 200+题拿下多家大型公司offer，cs能力极强，授课亲和生动。大厂多年面试官经验，参与百场以上面试，熟悉面试细节，了解面试官心态和大厂招聘“内情”。曾帮助多位同学mock interview并顺利上岸。 ",
          "teacherName-en": "Ms. Christy",
          "teacherDes-en":
            "Christy, an interviewer of FLAG companies, graduated from Beijing University of Posts and Telecommunications and one of the four computer schools in North American.She was originally engaged in code-related jobs and successfully moved to programming.She has participated in more than 100 interviews as an interviewer and has helped a number of students mock the interview and successfully get the offer.",
        },
        {
          id: "003",
          teacherName: "Kevin老师",
          avatar: require("@/assets/img/05-讲师团队/Kevin.png"),
          teacherDes:
            "物理学专业转码选手，三个月转码上岸 FLAG，并同时拿下六家大中型公司 offer。亲历转码全过程，深谙学生转码过程中难点、堵点，可针对不同水平学生做出高效规划，曾帮助几十名学生上岸北美大厂，经验丰富。Leetcode周赛最好成绩国服前五。 ",
          "teacherName-en": "Mr. Kevin",
          "teacherDes-en":
            "He was admitted to a FLAG company in three months and received offers from six large and medium-sized companies at the same time.Having experienced the entire process of switching to programming, he is well aware of students’ difficulties and obstacles.He has helped dozens of students get the offer from North American tech giants.His personal best in Leetcode weekly competition was China’s top five.",
        },
        {
          id: "004",
          teacherName: "灵茶山艾府老师",
          avatar: require("@/assets/img/05-讲师团队/灵茶.png"),
          teacherDes:
            "ACM 金牌选手，算法刷题量 6000+，Leetcode CN 竞赛天梯分 Top 10，全球24。活跃于 Leetcode CN 和 B 站等平台讲解周赛解析，广受欢迎。“leetcode残酷群”大神级别选手，对算法知识点有独到的理解，算法讲解细致，拒绝死记硬背，直击算法本质。",
          "teacherName-en": "Mr. Lingcha",
          "teacherDes-en":
            "In LeetcodeCN competition, he ranked top 10, world’s top 24.As an ACM gold medal player, Lingcha Shan Ai Fu has done more than 6000 algorithm exercises.As an ACM gold medal player, Lingcha Shan Ai Fu has done more than 6000 algorithm exercises.As an ACM gold medal player, Lingcha Shan Ai Fu has done more than 6000 algorithm exercises.",
        },
        {
          id: "005",
          teacherName: "白板老师",
          avatar: require("@/assets/img/05-讲师团队/白板.png"),
          teacherDes:
            "11年互联网从业经验，曾任滴滴任职技术专家。现任某货运独角兽后端技术架构师,曾主导过百万级用户出行系统、亿级车联网数据流量中心的技术架构和服务搭建及服务稳定性体系构建。",
          "teacherName-en": "Mr. Bai",
          "teacherDes-en":
            "He used to be a technical expert in Didi and has accumulated 11 years of Internet working experience.He now serves as a back-end technical architect in a top transport company.He once played a dominant role in the construction of technical architecture, service construction and service stability system construction of a travel system with millions of users and a hundreds of millions of Internet of vehicles data center.",
        },
        {
          id: "006",
          teacherName: "段正明老师",
          avatar: require("@/assets/img/05-讲师团队/段正明.png"),
          teacherDes:
            "前TikTok Senior工程师，曾参加过300+次面试，有丰富的面试、应试经验；<br/>ACM算法竞赛金牌选手，有自己系统的算法教学体系；<br/>从事北美求职培训多年，累计帮助200余名同学转码上岸Microsoft Amazon等科技企业。",
          "teacherName-en": "Mr. Duan",
          "teacherDes-en":
            "As a former TikTok Senior Engineer, he has participated in over 300 interviews and has rich experience in interviewing and taking exams;As a gold medalist in the ACM algorithm competition, he has a sound teaching system of algorithm;Having been engaged in job training in North America for many years, he has helped more than 200 students become a computer programmer and get an offer from technology companies such as Microsoft and Amazon.",
        },
        {
          id: "007",
          teacherName: "Alex老师",
          avatar: require("@/assets/img/05-讲师团队/Alex.png"),
          teacherDes:
            "北美大厂在职，斩获近十家大中厂的offer，面试通过率高达90%；<br/>对面试BQ，communication有着深刻研究，曾辅导文科同学准备纽约/欧洲智库咨询公司BQ；<br/>帮助数十名学生上岸Amazon,Salesforce等intern/ng。",
          "teacherName-en": "Mr. Alex",
          "teacherDes-en":
            "He is currently employed by a big company in North American and has received offers from nearly ten large and medium-sized companies, with a pass rate of up to 90% in interviews.He has profound study in interview Behavioral Question (BQ) and communication, and has coached students of liberal arts in preparing for BQ in New York/European think tanks consulting firms.Up till now, he has helped dozens of students get intern/ng offers from Amazon, Salesforce, and other companies.",
        },
        {
          id: "008",
          teacherName: "七海老师",
          avatar: require("@/assets/img/05-讲师团队/七海.png"),
          teacherDes:
            "陆本CS，美国CS硕；北美独角兽在职，斩获十几家大中场的offer；<br>深谙面试官如何从各个角度来考核面试者，从算法到系统设计等熟悉了解所有面试内容；<br>从事北美求职多年，帮助100+名同学成功转码上岸。",
          "teacherName-en": "Mr. Qi",
          "teacherDes-en":
            "Master degree in CS from the United States. Having got offers from more than ten large and medium-sized companies, he is now employed by a North American unicorn company.He is familiar with all interview content from algorithms to system design, and knows how interviewers evaluate interviewees from various perspectives.Engaged in job-hunting industry in North America for many years, he has helped over 100 students become a computer engineer and get an offers successfully.",
        },
      ],
    };
  },
  methods: {
    onlineCon() {
      this.$store.commit("SHOWQRCODE");
      // console.log(this.$store.state.isCover);
    },
  },
};
</script>

<style lang="less" scoped>
body {
  min-width: 1200px;
  width: 100%;
}
.warp {
  min-width: 1200px;
}
.banner {
  width: 100%;
  height: 450px;
  background: url("https://nodestatic.fbstatic.cn/pan/downloads/0fa8b788fe8f3317a901224f157c0b58.png") no-repeat center;
  background-color: #d4e2fa;
  .banner-content {
    user-select: none;
    padding-top: 80px;
    height: 450px;
    width: 1200px;
    margin: 0 auto;
    .banner-dacheng {
      height: 45px;
      font-size: 40px;
      font-weight: bolder;
      width: fit-content;
      background-image: linear-gradient(to right, #1757fd, #53a0ff);
      -webkit-background-clip: text;
      color: transparent;
    }
    .banner-slogan {
      width: 600px;
      padding-top: 30px;
      color: #2a2a2b;
      font-size: 28px;
    }
    .banner-companyDes {
      font-size: 18px;
      padding-top: 30px;
      width: 625px;
      color: #2a2a2b;
      line-height: 30px;
    }
  }
}
// 特色 介绍
.advantage-bg {
  background-color: #f4f8fd;
}
.description-bg {
  background: url("@/assets/img/04-课程介绍/description-bg.png") no-repeat
    center;
}
.teacherTeam-bg {
  background: #f4f8fd;
}
.advantage,
.description,
.teacherTeam {
  padding-top: 40px;
  .advantage-title,
  .description-title,
  .teacherTeam-title {
    height: 40px;
    margin: 0 auto;
    width: fit-content;
    font-size: 33px;
    font-weight: bolder;
    background-image: linear-gradient(45deg, #1757fd, #53a0ff);
    -webkit-background-clip: text;
    color: transparent;
  }
  .advantage-content,
  .description-content,
  .teacherTeam-content {
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    .advantage-item {
      width: 550px;
      height: 200px;
      position: relative;
      margin-bottom: 80px;
      .advantage-item-icon {
        position: absolute;
        left: 60px;
        top: -20px;
      }
      .advantage-item-title {
        position: absolute;
        top: 50px;
        right: 45px;
        font-size: 28px;
        color: #25211b;
      }
      .advantage-item-title-en {
        top: 30px;
        max-width: 300px;
        font-size: 20px;
        text-align: center;
      }
      .advantage-item-text {
        position: absolute;
        left: 45px;
        bottom: 35px;
        width: 460px;
        font-size: 18px;
        line-height: 32px;
        color: #25211b;
      }
      .advantage-item-text-en {
        text-align: left;
        top: 90px;
        word-break: break-all;
      }
    }
    .description-item:last-child{
      margin-left: auto;
      margin-right: auto;
    }
    .description-item {
      border-radius: 20px;
      position: relative;
      height: 440px;
      width: 560px;
      margin-bottom: 80px;
      .course-top {
        z-index: 200;
        position: absolute;
      }
      .course-title {
        z-index: 250;
        user-select: none;
        position: absolute;
        left: 42px;
        top: 45px;
        .course-name {
          font-size: 28px;
          color: #fffc04;
        }
        .course-num {
          padding-top: 15px;
          z-index: 250;
          user-select: none;
          font-size: 20px;
          color: #fff;
        }
      }
      .course-title-en {
        top: 55px;
      }
      .course-des {
        z-index: 100;
        position: absolute;
        top: 120px;
        line-height: 35px;
        padding: 58px 24px 0px 36px;
        width: 560px;
        height: 320px;
        font-size: 18px;
        color: #3a3a39;
        border: 1px solid #e4e5e6;
        border-radius: 0 0 20px 20px;
      }
      .description-btn {
        z-index: 200;
        height: 40px;
        width: 165px;
        display: block;
        position: absolute;
        bottom: -20px;
        left: 200px;
        background-color: #428dfe;
        border-radius: 10px;
        font-size: 15px;
        color: #fff;
        line-height: 40px;
        text-align: center;
        user-select: none;
        pointer-events: auto;
        cursor: pointer;
      }
    }
    .teacherTeam-item {
      position: relative;
      height: 320px;
      width: 560px;
      margin-bottom: 50px;
      border-radius: 25px;
      background-color: #fff;
      .teacher-avatar {
        border-radius: 50%;
        position: absolute;
        left: 130px;
        top: 20px;
        width: 115px;
      }
      .teacher-name {
        position: absolute;
        left: 290px;
        top: 70px;
        font-size: 20px;
        color: #1a73f9;
      }
      .teacher-des {
        position: absolute;
        top: 165px;
        color: #25211b;
        padding: 0 30px 0 50px;
        font-size: 14px;
        line-height: 25px;
      }
    }
  }
}
.teacherTeam {
  padding-bottom: 40px;
}
.contactUs {
  background: url("@/assets/img/06-课程咨询/课程咨询-bg.png") no-repeat center;
  background-color: #3275e9;
  width: 100%;
  height: 240px;
  .contactUs-content {
    display: flex;
    align-items: center;
    height: 240px;
    max-width: 1200px;
    width: fit-content;
    margin: 0 auto;
    .contactUs-text {
      text-align: center;
      .contactUs-colorText {
        font-size: 28px;
        color: #fffc04;
      }
      .contactUs-tips {
        max-width: 300px;
        width: fit-content;
        margin-top: 25px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        line-height: 30px;
      }
    }
    .serviceVx {
      img {
        display: block;
        margin: 0 auto;
        width: 160px;
        height: 160px;
        border-radius: 10px;
      }
      div {
        text-align: center;
        width: 350px;
        margin-top: 15px;
        font-size: 15px;
        color: #ffffff;
      }
    }
  }
}
</style>