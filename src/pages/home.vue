<template>
  <div>
    <homeCover />
    <serviceQRcode />
    <my-header />
    <div class="warp">
      <!-- banner -->
      <div class="banner">
        <div class="banner-content"></div>
      </div>
      <!-- 特色优势 -->
      <div class="advantage advantage-bg">
        <div class="advantage-title">
          <img src="@/assets/img/03-特色优势/advantage-title.png" alt="">
        </div>
        <!-- 特色优势详情 -->
        <div class="advantage-content">
          <div v-for="item in advantageItems" :key="item.id" class="advantage-item">
            <div class="advantage-item-icon">
              <img :src="item.icon">
            </div>
            <img :src="item.background">
          </div>
        </div>
      </div>
      <!-- 课程介绍 -->
      <div class="description description-bg">
        <div class="description-title">
          <img src="@/assets/img/04-课程介绍/description-title.png">
        </div>
        <!-- 课程介绍详情 -->
        <div class="description-content">
          <div
            v-for="item in descriptionItems"
            :key="item.id"
            class="description-item"
          >
            <!-- top -->
            <div class="course-top">
              <img :src="item.description">
            </div>
            <!-- 课程名 -->
            <div class="course-title">
              {{ item.course }}
            </div>
            <!-- 课程班型 -->
            <div class="course-num">
              {{ item.courseNum }}
            </div>
            <!-- 课程介绍 -->
            <div 
              class="course-des"
              v-html="item.courseDes"
            >
            </div>
            <div @click="onlineCon" class="description-btn">在线咨询</div>
          </div>
        </div>
      </div>
      <!-- 教师团队 -->
      <div class="teacherTeam teacherTeam-bg">
        <div class="teacherTeam-title">
          <img src="@/assets/img/05-讲师团队/teacher-title.png">
        </div>
        <div class="teacherTeam-content">
          <div
            v-for="item in teachersItems"
            :key="item.id" 
            class="teacherTeam-item"
          >
            <img class="teacher-avatar" src="@/assets/img/05-讲师团队/teacher-avatar.png">
            <div class="teacher-name">
              {{ item.teacherName }}
            </div>
            <div class="teacher-des" v-html="item.teacherDes"></div>
          </div>
        </div>
      </div>
      <!-- 联系我们 -->
      <div class="contactUs">
        <div class="contactUs-content">
          <div class="contactUs-text">
            <div class="contactUs-colorText">
              · 课程咨询 ·
            </div>
            <div class="contactUs-tips">
              微信扫码添加小助手<br>
              了解更多课程详情、<br>
              优惠信息、申领免费资料
            </div>
          </div>
          <div class="serviceVx">
            <img src="@/assets/img/06-课程咨询/二维码.png">
            <div>扫码添加后申领免费资料</div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <div class="footer">
        <div class="footer-content">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import myHeader from '@/components/myHeader.vue';
  import homeCover from '@/components/homeCover.vue';
  import serviceQRcode from '@/components/serviceQRcode.vue'

  export default {
    name: 'myHome',
    components: {
      myHeader,
      homeCover,
      serviceQRcode
    },
    data(){
      return {
        advantageItems: [
          {
            id: '001',
            icon: require('@/assets/img/03-特色优势/优质师资icon.png'),
            background: require('@/assets/img/03-特色优势/优质师资.png')
          },
          {
            id: '002',
            icon: require('@/assets/img/03-特色优势/直播授课icon.png'),
            background: require('@/assets/img/03-特色优势/直播授课.png')
          },
          {
            id: '003',
            icon: require('@/assets/img/03-特色优势/精品小班icon.png'),
            background: require('@/assets/img/03-特色优势/精品小班.png')
          },
          {
            id: '004',
            icon: require('@/assets/img/03-特色优势/讲练结合icon.png'),
            background: require('@/assets/img/03-特色优势/讲练结合.png')
          },
        ],
        descriptionItems: [
          {
            id: '001',
            description: require('@/assets/img/04-课程介绍/求职系统小班/求职系统小班-top.png'),
            course: '求职系统小班',
            courseNum: '每班最高10人',
            courseDes: '由大乘offer独立开发的求职系统班，将目前北美面试时间线清晰呈现，并对时间线上的每个环节进行深入指导。<br/><strong>通过求职系统班你将收获：</strong><br/>10节求职精讲课+5 次简历修改、3次mock话术优化、全程简历督投、面试方向指导等求职全流程服务。'
          },
          {
            id: '002',
            description: require('@/assets/img/04-课程介绍/算法精品小班/算法精品小班-top.png'),
            course: '算法精品小班',
            courseNum: '每班最高10人',
            courseDes: '大乘offer独立开发算法精品小班课程，课程覆盖北美面试90%算法内容，特别针对模板在面试中的应用场景、应用技巧进行针对性课程设计。<br/><strong>通过算法精品班你将收获：</strong><br/>12节每节2+小时算法精讲课、11次全英文真实mock、工业级开发环境实战操作、100+精选题及500+算法题解决方案。'
          }
        ],
        teachersItems: [
          {
            id: '001',
            teacherName: 'Martin老师',
            teacherDes: 'FLAG 面试官，先后毕业于清华计算机系和藤校 CS 专业。作为面试官和面试者参加超过1000+ 场面试，熟悉面试本质，课程设计立足面试官及应聘者两个视角，提供高效精准的解决方案。拥有多年教学经验，所带学生拿遍 FANNG 等几乎所有北美Top Tech 公司的Offer，转码解决方案覆盖 Intern/ New Grad/ 社招等全阶段学员。'
          },
          {
            id: '002',
            teacherName: 'Christy老师',
            teacherDes: ' FLAG面试官，先后毕业于北京邮电大学和北美计算机四校之一。半转码，擅长总结题型和高效刷题，曾刷leetcode 200+题拿下多家大型公司offer，cs能力极强，授课亲和生动。大厂多年面试官经验，参与百场以上面试，熟悉面试细节，了解面试官心态和大厂招聘“内情”。曾帮助多位同学mock interview并顺利上岸。 '
          },
          {
            id: '003',
            teacherName: 'Kevin老师',
            teacherDes: '物理学专业转码选手，三个月转码上岸 FLAG，并同时拿下六家大中型公司 offer。亲历转码全过程，深谙学生转码过程中难点、堵点，可针对不同水平学生做出高效规划，曾帮助几十名学生上岸北美大厂，经验丰富。Leetcode周赛最好成绩国服前五。 '
          },
          {
            id: '004',
            teacherName: '灵茶山艾府老师',
            teacherDes: 'ACM 金牌选手，算法刷题量 6000+，Leetcode CN 竞赛天梯分 Top 10，全球24。活跃于 Leetcode CN 和 B 站等平台讲解周赛解析，广受欢迎。“leetcode残酷群”大神级别选手，对算法知识点有独到的理解，算法讲解细致，拒绝死记硬背，直击算法本质。'
          }
        ],
      }
    },
    methods:{
      onlineCon(){
        this.$store.commit('SHOWQRCODE')
        console.log(this.$store.state.isCover);
      }
    }
  }
</script>

<style lang="less">
  body{
    min-width: 1200px;
    width: 100%;
  }
  .banner{
    width: 100%;
    height: 450px;
    background-color: #d4e2fa;
    .banner-content{
      background: url('@/assets/img/02-首图banner/banner.png') no-repeat center;
      height: 450px;
    }
  }
  // 特色 介绍
  .advantage-bg{
    background-color:#f4f8fd
  }
  .description-bg{
    background: url('@/assets/img/04-课程介绍/description-bg.png') no-repeat center;
  }
  .teacherTeam-bg{
    background:#f4f8fd
  }
  .advantage,.description,.teacherTeam{
    padding-top: 40px;
    .advantage-title,.description-title,.teacherTeam-title{
      margin: 0 auto;
      width: fit-content;
      img{
        height: 35px;
        width: 188px
      }
    }
    .advantage-content,.description-content,.teacherTeam-content{
      padding-top: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width:1200px;
      margin: 0 auto;
      .advantage-item{
        width: 550px;
        height: 200px;
        position: relative;
        margin-bottom: 80px;
        .advantage-item-icon{
          position: absolute;
          left: 60px;
          top: -20px;
        }
      }
      .description-item{
        border-radius: 20px;
        position: relative;
        height: 440px;
        width: 560px;
        margin-bottom: 80px;
        .course-top{
          z-index:200;
          position: absolute;
        }
        .course-title{
          z-index: 250;
          user-select: none;
          position: absolute;
          font-size: 28px;
          color: #fffc04;
          left: 42px;
          top: 45px;
        }
        .course-num{
          z-index: 250;
          user-select: none;
          position: absolute;
          font-size: 20px;
          color: #fff;
          left: 42px;
          top: 88px;
        }
        .course-des{
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
        .description-btn{
          z-index: 200;
          height: 40px;
          width: 165px;
          display: block;
          position: absolute;
          bottom: -20px;
          left: 200px;
          background-color: #428dfe;
          border-radius: 10px;
          font-size: 20px;
          color: #fff;
          line-height: 40px;
          text-align: center;
          user-select: none;
          pointer-events: auto;
          cursor: pointer;
        }
      }
      .teacherTeam-item{
        position: relative;
        height: 320px;
        width: 560px;
        margin-bottom: 50px;
        border-radius: 25px;
        background-color: #fff;
        .teacher-avatar{
          position: absolute;
          left: 130px;
          top: 20px;
          width: 115px;
        }
        .teacher-name{
          position: absolute;
          left: 290px;
          top: 70px;
          font-size: 20px;
          color: #1a73f9;
        }
        .teacher-des{
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
  .teacherTeam{
    padding-bottom: 40px;
  }
  .contactUs{
    background-color: #3275e9;
    width: 100%;
    height: 240px;
    .contactUs-content{
      position: relative;
      background: url('@/assets/img/06-课程咨询/课程咨询-bg.png') no-repeat center;
      height: 240px;
      width: 1200px;
      margin: 0 auto;
      .contactUs-text{
        text-align: center;
        position: absolute;
        left: 375px;
        top: 50px;
        .contactUs-colorText{
          font-size: 28px;
          color: #fffc04;
        }
        .contactUs-tips{
          margin-top: 25px;
          text-align: center;
          color: #fff;
          font-size: 20px;
          line-height: 30px;
        }
      }
      .serviceVx{
        position: absolute;
        right: 380px;
        top: 30px;
        img{
          display: block;
          margin: 0 auto;
          width: 160px;
          height: 160px;
          border-radius: 10px;
        }
        div{
          margin-top: 15px;
          font-size: 15px;
          color: #ffffff;
        }
      }
    }
  }
  .footer{
    background-color: #0d2749;
    width: 100%;
    img{
      display: block;
      margin: 0 auto;
    }
    .footer-content{
      background: url('@/assets/img/07-底部信息/底部信息.png') no-repeat center;
      height: 100px;
    }
  }
</style>