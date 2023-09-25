<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <div class="banner-content">
        <div class="banner-title">大乘留学</div>
        <div class="banner-des">
          大乘留学隶属于北京倍学管理咨询服务有限公司，我们以”职业导向型留学规划”为核心理念，深耕留学培训行业，
          <span style="font-weight: bold;">业务范围涵盖：名校留学申请、海外生活服务、就业求职规划等，旨在一站式解决留学及求职问题。</span>
        </div>
      </div>
      <div class="abroadData">
        <div class="abroadData-content">
          <div
            v-for="item in abroadDataList"
            :key="item.title"
            class="abroadData-item"
          >
            <div>
              <div>
                <div class="abroadNum">
                  <span>{{ item.num }}</span>
                  <span
                    style="font-size: 24px;"
                    :class="item.symbol==='+'? `special`: ``"
                  >{{ item.symbol }}</span>
                </div>
                <span class="abroadTitle">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 项目类别 -->
    <div class="itemCategory">
      <div class="itemCategory-wrap">
        <div class="itemCategory-title">
          项目类别
        </div>
        <div class="itemCategory-line"></div>
        <div class="itemCategory-content">
          <div class="itemCategory-list">
            <div
              v-for="item in itemCategoryList"
              :key="item.title"
              :style="`background: url('${item.background}') no-repeat center;background-size: cover;`"
            >
              <div>
                <img
                  class="itemCategory-avatar"
                  :src="item.avatar"
                >
                <span v-html="item.title"></span>
              </div>
            </div>
          </div>
          <div class="contactUs">
            <div class="contactUs-tips">
              <span>了解更多留学规划信息、定制专属留学服务</span>
              <div>
                <span>微信扫码添加小助手</span>
                <img src="@/assets/img/大乘留学/03-项目类别/指引箭头.png">
              </div>
            </div>
            <div class="serviceQRCode">
              <img src="@/assets/img/大乘留学/03-项目类别/二维码.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 服务内容 -->
    <div class="serviceContent">
      <div class="serviceContent-wrap">
        <!-- 标题 -->
        <div class="serviceContent-title">
          服务内容
        </div>
        <div class="serviceContent-line"></div>
        <!-- 内容 -->
        <div class="serviceContent-content">
          <div
            v-for="item in serviceContentList"
            :key="item.text"
            class="item"
          >
            <div class="item-left">
              <img :src="item.icon">
              <span>{{ item.title }}</span>
            </div>
            <div
              class="item-right"
              :style="`background: url('${item.background}')`"
            >
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 覆盖学科分支 -->
    <div class="coverSubject">
      <div class="coverSubject-wrap">
        <!-- 标题 -->
        <div class="coverSubject-title">
          覆盖学科分支
        </div>
        <div class="coverSubject-line"></div>
        <!-- 内容 -->
        <div class="coverSubject-content">
          <div
            v-for="item in coverSubjectList"
            :key="item.subject"
            class="coverSubject-item"
          >
            <div
              class="subject"
              :style="`background: no-repeat center bottom/auto 75px url('${item.subjectBackground}'`"
            >
              <span>{{ item.subject }}</span>
            </div>
            <div class="detail">
              <span v-html="item.detail">
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 顾问团队 -->
    <div class="teachers">
      <div class="teachers-wrap">
        <!-- 标题 -->
        <div class="teachers-title">
          顾问团队
        </div>
        <div class="teachers-line"></div>
        <!-- 内容 -->
        <div class="teachers-content">
          <div
            v-for="item in teachersList"
            :key="item.name"
            class="teachers-item"
          >
            <div class="avatar">
              <div :style="`background: no-repeat center bottom/auto 100px url('${item.avatar}'),linear-gradient(to right, #53a0ff, #1757fd)`"></div>
            </div>
            <div class="tearcher-des">
              <div>
                <span class="teacher-name">{{ item.name }}</span>
                <span
                  class="teacher-major"
                  v-html="item.major"
                ></span>
              </div>
              <span v-html="item.des">
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/font/BebasNeue-Regular.ttf";
import "@/assets/font/Alibaba-PuHuiTi-Regular.ttf";
export default {
  name: "MyAbroad",
  data() {
    return {
      abroadDataList: [
        {
          num: "98.6",
          symbol: "%",
          title: "申请成功率",
        },
        {
          num: "10年",
          symbol: "+",
          title: "留学行业经验",
        },
        {
          num: "1200",
          symbol: "+",
          title: "海外高校师资",
        },
        {
          num: "5000",
          symbol: "+",
          title: "服务学员人数",
        },
        {
          num: "10000",
          symbol: "+",
          title: "名校录取offer",
        },
        {
          num: "80.63",
          symbol: "%",
          title: "国内/境外就业率",
        },
      ],
      itemCategoryList: [
        {
          background: require("@/assets/img/大乘留学/03-项目类别/背景-美国名校计划.png"),
          avatar: require("@/assets/img/大乘留学/03-项目类别/icon-美国名校计划.png"),
          title: "美国名校计划<br/>（含TOP 30）",
        },
        {
          background: require("@/assets/img/大乘留学/03-项目类别/背景-英国名校计划.png"),
          avatar: require("@/assets/img/大乘留学/03-项目类别/icon-英国名校计划.png"),
          title: "英国名校计划<br/>（含G5）",
        },
        {
          background: require("@/assets/img/大乘留学/03-项目类别/背景-多目的地申请计划.png"),
          avatar: require("@/assets/img/大乘留学/03-项目类别/icon-多目的地申请计划.png"),
          title: "多目的地申请计划",
        },
        {
          background: require("@/assets/img/大乘留学/03-项目类别/背景-高端博士计划.png"),
          avatar: require("@/assets/img/大乘留学/03-项目类别/icon-高端博士计划.png"),
          title: "高端博士计划",
        },
      ],
      serviceContentList: [
        {
          title: "个性定校",
          background: require("@/assets/img/大乘留学/04-服务内容/01.png"),
          icon: require("@/assets/img/大乘留学/04-服务内容/个性定校icon.png"),
          text: "根据学生就读院校及专业背景情况，结合出国预算、语言要求以及学校录取要求等，以专业排名、学校综合排名、将来就业发展为参考维度，提供1V1规划服务。",
        },
        {
          title: "背景提升",
          background: require("@/assets/img/大乘留学/04-服务内容/02.png"),
          icon: require("@/assets/img/大乘留学/04-服务内容/背景提升icon.png"),
          text: "根据初步的目标院校和专业，制定完善具体的硬性和软性背景提升计划。与此同时，全程严格按照申请规划时间线跟进学生状态，软硬兼施，帮助学生实现双突破。",
        },
        {
          title: "文书服务",
          background: require("@/assets/img/大乘留学/04-服务内容/03.png"),
          icon: require("@/assets/img/大乘留学/04-服务内容/文书服务icon.png"),
          text: "资深文书老师原创，不限修改次数，外籍导师润色语言。",
        },
        {
          title: "面试辅导",
          background: require("@/assets/img/大乘留学/04-服务内容/04.png"),
          icon: require("@/assets/img/大乘留学/04-服务内容/面试辅导icon.png"),
          text: "相关专业学长学姐提供资深的行为面和技术面辅导。",
        },
        {
          title: "海外服务",
          background: require("@/assets/img/大乘留学/04-服务内容/05.png"),
          icon: require("@/assets/img/大乘留学/04-服务内容/海外服务icon.png"),
          text: "提供完善的海外接机，住宿等生活服务；转学、转专业、课后辅导等学习服务。",
        },
        {
          title: "求职指导",
          background: require("@/assets/img/大乘留学/04-服务内容/06.png"),
          icon: require("@/assets/img/大乘留学/04-服务内容/求职指导icon.png"),
          text: "提供名企实习、海外求职、考公考编等就业服务，助力学生斩获理想offer。",
        },
      ],
      coverSubjectList: [
        {
          subject: "商科",
          subjectBackground: require("@/assets/img/大乘留学/05-覆盖学科分支/商科-背景.png"),
          detail:
            "金融 | 会计 | 管理 | 市场 | 精算量化<br/>金融 | 金融科技 | 工商管理<br/>人力资源管理 | 物流管理",
        },
        {
          subject: "文科",
          subjectBackground: require("@/assets/img/大乘留学/05-覆盖学科分支/文科-背景.png"),
          detail:
            "文学 | 政治 | 历史 | 哲学 | 拉丁语<br/>比较文学 | 古希腊语 | 西班牙语<br/>东亚文化研究",
        },
        {
          subject: "理科",
          subjectBackground: require("@/assets/img/大乘留学/05-覆盖学科分支/理科-背景.png"),
          detail:
            "数学 | 统计 | 物理 | 化学 | 生物<br/>地质 | 医学 | 药学 | 神经科学<br/>牙医学 | 临床心理学",
        },
        {
          subject: "工科",
          subjectBackground: require("@/assets/img/大乘留学/05-覆盖学科分支/工科-背景.png"),
          detail:
            "计算机科学 | 电子电气工程<br/>化学工程 | 生物医药工程<br/>通信工程 | 机械工程 | 材料工程<br/>信息工程 | 土木工程 | 软件工程",
        },
        {
          subject: "社科",
          subjectBackground: require("@/assets/img/大乘留学/05-覆盖学科分支/社科-背景.png"),
          detail:
            "经济 | 社会 | 传媒 | 法律 | 教育<br/>国际关系 | 公共政策 | 公共卫生<br/>社会心理| 教育心理",
        },
        {
          subject: "艺术与交叉学科",
          subjectBackground: require("@/assets/img/大乘留学/05-覆盖学科分支/艺术与交叉学科-背景.png"),
          detail:
            "建筑设计 | 交互设计 | 平面设计<br/>服装设计 | 城市规划 | 设计管理<br/>音乐教育 | 音乐管理 | 钢琴演奏",
        },
      ],
      teachersList: [
        {
          name: "曹老师",
          major: "数学专业",
          des: "帝国理工学院博士<br/>剑桥大学硕士",
          avatar: require("@/assets/img/大乘留学/06-顾问团队/曹老师.png"),
        },
        {
          name: "崔老师",
          major: "化学专业",
          des: "剑桥大学博士<br/>帝国理工学院硕士",
          avatar: require("@/assets/img/大乘留学/06-顾问团队/崔老师.png"),
        },
        {
          name: "方老师",
          major: "数据科学专业",
          des: "伦敦大学学院硕士<br/>曼切斯特大学学士",
          avatar: require("@/assets/img/大乘留学/06-顾问团队/方老师.png"),
        },
        {
          name: "唐老师",
          major: "教育学专业",
          des: "剑桥大学博士<br/>剑桥大学硕士",
          avatar: require("@/assets/img/大乘留学/06-顾问团队/唐老师.png"),
        },
        {
          name: "陆老师",
          major: "<br/>金融工程+计算机专业",
          des: "帝国理工学院硕士<br/>西郊利物浦大学学士",
          avatar: require("@/assets/img/大乘留学/06-顾问团队/陆老师.png"),
        },
        {
          name: "Martin老师",
          major: "",
          des: "FLAG面试官<br/>藤校计算机硕士<br/>清华大学学士",
          avatar: require("@/assets/img/大乘留学/06-顾问团队/Martin老师.png"),
        },
        {
          name: "Alex老师",
          major: "",
          des: "北美大厂在职<br/>斩获近十家大中厂offer<br/>面试通过率高达90%",
          avatar: require("@/assets/img/大乘留学/06-顾问团队/Alex老师.png"),
        },
        {
          name: "七海老师",
          major: "",
          des: "陆本CS，美国CS硕士<br/>斩获十几家大中厂offer<br/>帮助100+名同学成功转码上岸",
          avatar: require("@/assets/img/大乘留学/06-顾问团队/七海老师.png"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-display: swap;
  font-family: "BebasNeue-Regular";
  src: url('https://nodestatic.fbstatic.cn/pan/downloads/8e526b6b8f6c5f501f1291e2b7ce7cc9.ttf') format("truetype");
}
@font-face {
  font-display: swap;
  font-family: "Alibaba-PuHuiTi-Regular";
  src: url('https://nodestatic.fbstatic.cn/pan/downloads/cd57ab189b9edb7112fe8f9914e00105.ttf') format("truetype");
}
.wrap {
}
.banner {
  position: relative;
  width: 100%;
  height: 700px;
  background: url("https://nodestatic.fbstatic.cn/pan/downloads/0347036ee35e60a0bda653518277759c.png") no-repeat
    center;
  background-color: #263450;
  .banner-content {
    padding-top: 130px;
    width: 1150px;
    color: #fff;
    margin: 0 auto;
    .banner-title {
      font-weight: bold;
      font-size: 60px;
      text-align: center;
    }
    .banner-des {
      line-height: 45px;
      font-weight: normal;
      padding-top: 46px;
      font-size: 24px;
    }
  }
  .abroadData {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 138px auto 0;
    width: 1200px;
    height: 350px;
    background-color: #428bfe;
    .abroadData-content {
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      width: 1104px;
      height: 300px;
      .abroadData-item {
        width: 368px;
        height: 150px;
        box-shadow: 0 0 0 1px #5599fc;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        // div {
        //   height: 37px;
        //   line-height: 37px;
        .abroadNum {
          position: relative;
          text-align: center;
          font-size: 40px;
          font-weight: bold;
          height: 37px;
          line-height: 37px;
          span {
            margin-left: 2px;
            font-family: "BebasNeue-Regular", "Alibaba-PuHuiTi-Regular";
          }
          .special {
            position: absolute;
            top: calc(26%);
            font-size: 40px !important;
          }
        }
        // }
        .abroadTitle {
          display: block;
          padding-top: 22px;
          font-size: 22px;
          font-family: "Alibaba-PuHuiTi-Regular";
        }
      }
    }
  }
}
.itemCategory-wrap,
.serviceContent-wrap,
.teachers-wrap,
.coverSubject-wrap {
  overflow: auto;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  .itemCategory-title,
  .serviceContent-title,
  .teachers-title {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-family: "Alibaba-PuHuiTi-Regular";
    height: 58px;
    line-height: 58px;
    width: 195px;
    background-color: #bfddfb;
    font-size: 30px;
    text-align: center;
    color: #252c37;
    margin: 0 auto;
    z-index: 100;
  }
  .itemCategory-line,
  .serviceContent-line,
  .teachers-line,
  .coverSubject-line {
    position: absolute;
    background-color: #bfd8fe;
    height: 1px;
    width: 100%;
    top: 29px;
  }
}
.itemCategory {
  background-color: #f1f6fe;
  height: 900px;
  width: 100%;
  padding-top: 160px;
  .itemCategory-content {
    position: relative;
    margin-top: 258px;
    background-color: #dfe7fa;
    width: 1200px;
    height: 400px;
    .itemCategory-list {
      width: 1102px;
      height: 282px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: -140px;
      left: 50%;
      transform: translate(-50%);
      > div {
        width: 262px;
        display: flex;
        align-items: center;
        justify-content: center;

        .itemCategory-avatar {
          margin: 0 auto;
          display: block;
          width: 77px;
          height: 77px;
        }
        span {
          line-height: 30px;
          padding-top: 22px;
          display: block;
          font-size: 26px;
          color: #fff;
          font-family: "Alibaba-PuHuiTi-Regular";
          text-align: center;
        }
      }
    }
  }
  .contactUs {
    display: flex;
    padding-top: 200px;
    margin: 0 auto;
    width: fit-content;
    font-size: 20px;
    color: #252c37;
    .contactUs-tips {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 18px;
        height: 40px;
        font-size: 22px;
        color: #fff;
        width: 375px;
        background: linear-gradient(to right, #459af7, #5070db);
        border-radius: 20px;
      }
      img {
        margin-left: 20px;
        width: 18px;
        height: 18px;
      }
    }
    .serviceQRCode {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 92px;
      width: 148px;
      height: 148px;
      background-color: #bfd8fe;
      border-radius: 5px;
      img {
        width: 130px;
        height: 130px;
        border-radius: 5px;
      }
    }
  }
}
.serviceContent {
  background-color: #fff;
  height: 910px;
  width: 100%;
  padding-top: 60px;
  .serviceContent-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 1200px;
    height: fit-content;
    margin: 118px auto 90px;
    .item:nth-of-type(1),
    .item:nth-of-type(2) {
      height: 260px;
      margin: 0;
    }
    .item {
      font-family: "Alibaba-PuHuiTi-Regular";
      margin-top: 30px;
      height: 160px;
      width: 580px;
      display: flex;
      .item-left {
        height: 100%;
        width: 220px;
        background: linear-gradient(to right, #54b2fc, #5599fc);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          height: 70px;
          display: block;
        }
        span {
          display: block;
          margin-top: 14px;
          color: #fff;
          font-size: 22px;
        }
      }
      .item-right {
        height: 100%;
        width: 360px;
        background-color: #edf4fd !important;
        background-position: right bottom !important;
        background-repeat: no-repeat !important;
        padding: 0 23px 0 35px;
        font-size: 20px;
        line-height: 37px;
        display: flex;
        align-items: center;
      }
    }
  }
}
.coverSubject {
  height: 1250px;
  background: url("@/assets/img/大乘留学/05-覆盖学科分支/覆盖学科分支-大背景.png")
    no-repeat bottom center/auto 1250px;
  background-color: #3671e0;
  padding-top: 60px;
  .coverSubject-title {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-family: "Alibaba-PuHuiTi-Regular";
    height: 58px;
    line-height: 58px;
    width: 230px;
    background-color: #fff;
    font-size: 30px;
    text-align: center;
    color: #3e76df;
    margin: 0 auto;
    z-index: 100;
  }
  .coverSubject-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 1200px;
    height: fit-content;
    margin: 84px auto 0;
    .coverSubject-item {
      margin-top: 34px;
      width: 380px;
      height: 280px;
      .subject {
        height: 75px;
        span {
          display: inline-block;
          font-family: "Alibaba-PuHuiTi-Regular";
          padding-left: 52px;
          font-size: 28px;
          color: #4d5b5b;
          height: 75px;
          line-height: 75px;
          font-weight: 700;
        }
      }
      .detail {
        height: 205px;
        background-color: rgba(205, 230, 255, 0.1);
        display: flex;
        align-items: center;
        span {
          line-height: 40px;
          font-size: 20px;
          color: #fff;
          padding-left: 50px;
          display: inline-block;
          font-family: "Alibaba-PuHuiTi-Regular";
        }
      }
    }
  }
}
.teachers {
  background-color: #fff;
  height: fit-content;
  width: 100%;
  padding-top: 60px;
  .teachers-wrap {
    .teachers-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 1200px;
      height: fit-content;
      margin: 58px auto 107px;
      .teachers-item {
        margin-top: 110px;
        width: 275px;
        height: 242px;
        background-color: #ebf1fb;
        position: relative;
        .avatar {
          background-color: #ebf1fb;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          border: 2px solid #fff;
          position: absolute;
          transform: translate(50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          div {
            border-radius: 50%;
            width: 115px;
            height: 115px;
          }
        }
        .tearcher-des {
          margin-top: 95px;
          div {
            text-align: center;
            line-height: 27px;
            .teacher-name {
              font-weight: bold;
              font-family: "Alibaba-PuHuiTi-Regular";
              font-size: 20px;
              color: #0e81fe;
            }
            .teacher-major {
              padding-left: 15px;
              font-weight: bold;
              font-family: "Alibaba-PuHuiTi-Regular";
              font-size: 20px;
              color: #2b313c;
            }
          }
          > span {
            font-family: "Alibaba-PuHuiTi-Regular";
            font-size: 18px;
            display: block;
            padding-top: 7px;
            text-align: center;
            line-height: 32px;
          }
        }
      }
    }
  }
}
</style>