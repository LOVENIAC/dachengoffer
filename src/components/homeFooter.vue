<template>
  <div class="footer">
    <div class="footer-content">
      <img
        class="footer-logo"
        src="@/assets/img/07-底部信息/底部logo.png"
      >
      <div class="footer-text">
        <div class="footer-info">
          <router-link
            target="_blank"
            to="/journeyon-about-us"
          >{{ $t("footer.footer-info.about-us") }}</router-link><span>｜</span>
          <router-link
            target="_blank"
            to="/journeyon-about-us"
          >{{ $t("footer.footer-info.contact-us") }}</router-link><span>｜</span>
          <a
            target="_blank"
            href="./journeyon-use-clauses"
          >{{ $t("footer.footer-info.use-clauses") }}</a><span>｜</span>
          <a
            target="_blank"
            href="./journeyon-privacy"
          >{{ $t("footer.footer-info.privacy") }}</a><span>｜</span>
          <a
            target="_blank"
            href="./journeyon-user-agreement"
          >{{ $t("footer.footer-info.user-agreement") }}</a>
        </div>
        {{ $t("footer.company") }}<br>
        {{ $t("footer.company-address") }}<br>
        <a
          target="_blank"
          href="https://beian.miit.gov.cn"
        >{{ $t("footer.company-icp") }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFooter",
};
</script>

<style lang="less">
.footer {
  background-color: #0d2749;
  img {
    display: block;
  }
  .footer-content {
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 1200px;
    height: 160px;
    .footer-logo {
      margin-right: 125px;
      width: 133px;
      height: 36px;
    }
    .footer-text {
      max-width: 700px;
      width: fit-content;
      span {
        margin: 0 20px;
      }
      .footer-info {
        color: #dce9fc;
        font-size: 14px;
        padding-bottom: 20px;
      }
      line-height: 20px;
      color: #c4e2fd;
      font-size: 14px;
    }
  }
}
.fixed {
  position: absolute;
  bottom: 0;
}
</style>