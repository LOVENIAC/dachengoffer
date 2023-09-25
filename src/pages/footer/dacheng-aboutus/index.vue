<template>
  <div class="wrap">
    <myHeader />
    <div class="container">
      <!-- 关于我们 -->
      <div class="aboutUs">
        <div class="aboutUs-title">{{ $t('footer.footer-info.about-us') }}</div>
        <div class="aboutUs-content">
          <div class="aboutUs-info">
            <div
              :class="`aboutUs-colorText ${$i18n.locale==='en'?'aboutUs-colorText-en':''}`"
            >
              {{ $t('大乘offer') }}
            </div>
            <!-- <div class="aboutUs-slogan">
              {{ $t('slogan') }}
            </div> -->
            <span v-html="$t('AboutUs-companyDes')">
            </span>
          </div>
          <div class="aboutUs-logo">
            <img src="@/assets/img/01-导航栏/logo.png">
          </div>
        </div>
      </div>
      <!-- 联系我们 -->
      <div class="contactUs">
        <div class="contactUs-title">{{ $t('footer.footer-info.contact-us') }}</div>
        <div class="contactUs-content">
          <div class="contactUs-company">
            {{ $t('footer.company') }}
          </div>
          <div>
            {{ $t('footer.company-address') }}<br>
            {{ $t('footer.postcode') }}<br>
            {{ $t('footer.email') }}
          </div>
          <!-- <div class="contactUs-company">
            <strong>Ansky Company Limited</strong>
          </div>
          <div>
            103 Albert Embankment, London SE1 7TL, United Kingdom (This is not a returning address)<br>
            <strong>Company Number</strong>: 11736740<br/>
            <strong>TEL: </strong>442392160686<br/>
            <strong>Email</strong>: dachengoffer@163.com
          </div> -->
        </div>
      </div>
    </div>
    <homeFooter />
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader';
  import HomeFooter from '@/components/HomeFooter';

  export default {
    name: 'dachengAboutUs',
    components:{
      MyHeader,
      HomeFooter
    }
  }
</script>

<style lang="less" scoped>
  .wrap{
    min-width: 1200px;
  }
  .container{
    min-height: calc(100vh - 220px);
    padding-top: 155px;
    padding-bottom: 90px;
    background: url('@/assets/img/09-关于我们/图案背景.png') no-repeat center top;
    background-color: #f5f8fc;
    width: 100%;
    .aboutUs{
      width: 1200px;
      margin: 0 auto;
      border-radius: 20px;
      overflow: hidden;
      height: fit-content;
      background-color: #fff;
      box-shadow: 0 5px #daecfd;
      .aboutUs-title{
        background: linear-gradient( to right,#56b8fd,#428dfe);
        height: 70px;
        color: #fff;
        line-height: 70px;
        font-size: 30px;
        text-align: center;
      }
      .aboutUs-content{
        display: flex;
        .aboutUs-logo{
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            width: 200px;
          }
        }
        .aboutUs-info{
          width: 725px;
          padding: 30px 0;
          padding-left: 82px;
          span{
            margin-top: 10px;
            display: block;
            font-size: 18px;
            color: #2a2a2b;
            line-height: 40px;
          }
          .aboutUs-colorText{
            width: fit-content;
            font-size: 36px;
            font-weight: bold;
            background-image: linear-gradient(to right, #1757fd  , #53a0ff);
            -webkit-background-clip: text;
            color: transparent;
          }
          .aboutUs-colorText-en{
            padding-top: 20px;
            height: 60px;
          }
          .aboutUs-slogan{
            margin: 20px 0;
            font-size: 28px;
            color: #2a2a2b;
          }
        }
      }
    }
    .contactUs{
      width: 1200px;
      margin: 90px auto 0;
      border-radius: 20px;
      overflow: hidden;
      height: 350px;
      background-color: #fff;
      box-shadow: 0 5px #daecfd;
      .contactUs-title{
        background: linear-gradient( to left,#56b8fd,#428dfe);
        height: 70px;
        color: #fff;
        line-height: 70px;
        font-size: 30px;
        text-align: center;
      }
      .contactUs-content{
        user-select: none;
        padding-top: 68px;
        padding-left: 82px;
        width: fit-content;
        div{
          font-size: 22px;
          color: #2a2a2b;
          line-height: 28px;
        }
        .contactUs-company{
          margin-bottom: 25px;
        }
      }
    }
  }
</style>