<template>
  <div class="main">
    <div
      @click="changeLang"
      class="language"
    >
      <img
        v-if="$i18n.locale==='zh'"
        src="@/assets/img/01-导航栏/中文icon.png"
      >
      <img
        v-else
        src="@/assets/img/01-导航栏/英文icon.png"
      >
      <span>{{ $t('language') }}</span>
    </div>
    <div v-if="$t('language')=='中文'">
      <h1 class='bold'>隐私政策</h1>
      <p>本隐私政策描述了www.dachengoffer.com（“网站”或“我们”）在您访问或购买网站时收集、使用和披露您的个人信息。</p>
      <h2 class="bold underline">1.收集个人信息</h2>
      <p>当您访问本网站时，我们会收集有关您的设备、您与本网站的互动以及处理您的购买所需的信息。如果您联系我们寻求客户支持，我们也可能会收集更多信息。在本隐私政策中，我们将能够唯一识别个人的任何信息（包括以下信息）称为“个人信息”。有关我们收集哪些个人信息以及原因的更多信息，请参阅下面内容。</p>

      <h2 class="bold underline">2.设备信息</h2>
      <p>收集的个人信息示例：网络浏览器的版本、IP地址、时区、cookie信息、您查看的网站或产品、搜索条件以及您与网站的交互方式。</p>
      <p>收集目的：为您准确加载网站，并对网站使用情况进行分析，以优化我们的网站。</p>
      <p>收集来源：当您使用Cookie、日志文件、网络信标、标签或像素访问我们的网站时，自动收集。</p>

      <h2 class="bold underline">3.订单信息</h2>
      <p>收集的个人信息示例：姓名、账单地址、付款信息（包括信用卡号码）、电子邮件地址和电话号码。</p>
      <p>收款目的：向您提供产品或服务，以履行我们的合同，处理您的付款信息，并向您提供发票和/或订单确认书，与您沟通，检查我们的订单是否存在潜在风险或欺诈，当符合您与我们共享的偏好时，向您提供与我们的产品或服务相关的信息或广告。</p>
      <p>收集来源：您的授权。</p>

      <h2 class="bold underline">4.客户支持信息</h2>
      <p>收集的个人信息示例：订单号名称、账单地址、电子邮件地址和电话号码。</p>
      <p>收款目的：为客户提供支持。</p>
      <p>收集来源：您的授权。</p>
      <p>出于商业目的的披露：电子邮件</p>

      <h2 class="bold underline">5.未成年人</h2>
      <p>本网站不适用于18岁以下的个人。我们无意收集儿童的个人信息。如果您是家长或监护人，并且相信您的孩子已经向我们提供了个人信息，请通过邮箱dachengoffer@163.com联系我们，请求删除。</p>

      <h2 class="bold underline">6.共享个人信息</h2>
      <p>我们与服务提供商共享您的个人信息，以帮助我们提供服务并履行与您的合同，如上所述。例如：</p>
      <p>我们可能会共享您的个人信息，以遵守适用的法律法规，响应传票、搜查令或其他合法的信息请求，或以其他方式保护我们的权利。</p>

      <h2 class="bold underline">7.使用个人信息</h2>
      <p>我们使用您的个人信息向您提供我们的服务，包括：提供产品供销售、处理付款和履行订单，以及让您了解最新的产品、服务和优惠。</p>

      <h2 class="bold underline">8.保持</h2>
      <p>当您通过本网站下订单时，我们将保留您的个人信息作为我们的记录，除非您要求我们删除此信息。有关删除权的更多信息，请参阅下面的“您的权利”部分。</p>

      <h2 class="bold underline">9.Cookies</h2>
      <p>cookie是当您访问我们的网站时下载到您的计算机或设备的少量信息。我们使用多种不同的Cookie，包括功能、性能、广告和社交媒体或内容Cookie。Cookie允许网站记住您的操作和偏好（例如登录和区域选择），从而改善您的浏览体验。这意味着您不必在每次返回网站或从一个页面浏览到另一个页面时重新输入此信息。Cookie还提供有关人们如何使用网站的信息，例如，这是他们第一次访问还是经常访问。</p>

      <p>我们使用以下cookies来优化您在我们网站上的体验并提供我们的服务。</p>

      <h2 class="bold underline">10.报告和分析</h2>
      <p>cookie在您的计算机或移动设备上保留的时间长度取决于它是“持久”还是“会话”cookie。会话cookie会持续到您停止浏览，而持久cookie则会持续到它们过期或被删除。我们使用的大多数cookie都是永久性的，将在下载到您的设备后30分钟至两年内过期。</p>
      <p>您可以通过各种方式控制和管理cookie。请记住，删除或阻止cookie可能会对您的用户体验产生负面影响，我们网站的部分内容可能不再完全可访问。</p>
      <p>大多数浏览器都会自动接受cookies，但您可以通过浏览器控件选择是否接受cookie，这些控件通常位于浏览器的“工具”或“首选项”菜单中。有关如何修改浏览器设置或如何阻止、管理或过滤Cookie的更多信息，请在浏览器的帮助文件中找到。</p>
      <p>此外，请注意，阻止cookie可能不会完全阻止我们与广告合作伙伴等第三方共享信息。要行使您的权利或选择不让这些方使用您的信息，请遵循上述“行为广告”部分中的说明。</p>

      <h2 class="bold underline">11.请勿跟踪</h2>
      <p>请注意，由于业界对如何响应“请勿跟踪”信号没有一致的理解，因此当我们从您的浏览器检测到此类信号时，我们不会改变数据收集和使用惯例。</p>

      <h2 class="bold underline">12.您的权利</h2>
      <p>按照中国相关的法律、法规、标准，以及其他国家、地区的通行做法，我们保障您对自己的个人信息行使以下权利：</p>
      <p>（一）查阅您的个人信息</p>
      <p>（二）更正您的个人信息</p>
      <p>（三）删除您的个人信息</p>
      <p>（四）复制、转移您的个人信息</p>
      <p>（五）响应您的上述请求</p>
      <p>为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。</p>
      <p>在以下情形中，按照法律法规要求，我们将无法响应您的请求：</p>
      <p>1、与国家安全、国防安全有关的；</p>
      <p>2、与公共安全、公共卫生、重大公共利益有关的；</p>
      <p>3、与犯罪侦查、起诉和审判等有关的；</p>
      <p>4、有充分证据表明您存在主观恶意或滥用权利的；</p>
      <p>5、响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的。</p>
      <p>（六）逝者近亲属的权利</p>
      <p>如大乘用户不幸逝世，其近亲属可通过官方渠道联系我们，以获取相关指引来行使法律规定的合法、正当权益。</p>

      <h2 class="bold underline">13.更新</h2>
      <p>我们可能会不时更新本隐私政策，以反映（例如）我们的做法或其他运营、法律或监管原因的变化。在发布任何更改后，您继续使用或访问网站即表示您接受这些更改。</p>

      <h2 class="bold underline">14.联系</h2>
      <p>有关我们的隐私实践的更多信息，如果您有问题，或者您想投诉，请通过电子邮件联系我们：dachengoffer@163.com</p>
      <p>如果您对我们对您投诉的答复不满意，您有权向相关数据保护机构提出投诉。您可以联系您当地的数据保护机构。</p>
    </div>
    <div v-else>
      <h1 class='bold'>Privacy policy</h1>
      <p>This Privacy Policy describes how www.dachengoffer.com (the “Site” or “we”) collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.</p>
      <h2 class="bold underline">1.Collecting Personal Information</h2>
      <p>When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual (including the information below) as “Personal Information”. See the content below for more information about what Personal Information we collect and why.</p>
      <h2 class="bold underline">2.Device information</h2>
      <p>Examples of Personal Information collected: version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</p>
      <p>Purpose of collection: to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.</p>
      <p>Source of collection: Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</p>
      <h2 class="bold underline">3.Order information</h2>
      <p>Examples of Personal Information collected: name, billing address, payment information (including credit card numbers), email address, and phone number.</p>
      <p>Purpose of collection: to provide products or services to you to fulfill our contract, to process your payment information, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</p>
      <p>Source of collection: your authorization.</p>
      <h2 class="bold underline">4.Customer support information</h2>
      <p>Examples of Personal Information collected: order no. name, billing address, email address, and phone number.</p>
      <p>Purpose of collection: to provide customer support.</p>
      <p>Source of collection: your authorization.</p>
      <p>Disclosure for a business purpose: Email</p>
      <h2 class="bold underline">5.Minors</h2>
      <p>The Site is not intended for individuals under the age of 18. We do not intentionally collect Personal Information from children. If you are the parent or guardian and believe your child has provided us with Personal Information, please contact us by email dachengoffer@163.com to request deletion.</p>
      <h2 class="bold underline">6.Sharing Personal Information</h2>
      <p>We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:</p>
      <p>We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant, or other lawful requests for information we receive, or to otherwise protect our rights.</p>
      <h2 class="bold underline">7.Using Personal Information</h2>
      <p>We use your Personal Information to provide our services to you, which includes: offering products for sale, processing payments and fulfillment of your order, and keeping you up to date on new products, services, and offers.</p>
      <h2 class="bold underline">8.Retention</h2>
      <p>When you place an order through the Site, we will retain your Personal Information for our records unless and until you ask us to erase this information. For more information on your right of erasure, please see the ‘Your rights’ section below.</p>
      <h2 class="bold underline">9.Cookies</h2>
      <p>A cookie is a small amount of information that’s downloaded to your computer or device when you visit our Site. We use a number of different cookies, including functional, performance, advertising, and social media or content cookies. Cookies make your browsing experience better by allowing the website to remember your actions and preferences (such as login and region selection). This means you don’t have to re-enter this information each time you return to the site or browse from one page to another. Cookies also provide information on how people use the website, for instance, whether it’s their first time visiting or if they are a frequent visitor.</p>
      <p>We use the following cookies to optimize your experience on our Site and to provide our services.</p>
      <h2 class="bold underline">10.Reporting and Analytics</h2>
      <p>The length of time that a cookie remains on your computer or mobile device depends on whether it is a “persistent” or “session” cookie. Session cookies last until you stop browsing and persistent cookies last until they expire or are deleted. Most of the cookies we use are persistent and will expire between 30 minutes and two years from the date they are downloaded to your device.</p>
      <p>You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and parts of our website may no longer be fully accessible.</p>
      <p>Most browsers automatically accept cookies, but you can choose whether or not to accept cookies through your browser controls, often found in your browser’s “Tools” or “Preferences” menu. More information on how to modify your browser settings or how to block, manage or filter cookies can be found in your browser’s help file .</p>
      <p>Additionally, please note that blocking cookies may not completely prevent how we share information with third parties such as our advertising partners. To exercise your rights or opt-out of certain uses of your information by these parties, please follow the instructions in the “Behavioural Advertising” section above.</p>
      <h2 class="bold underline">11.Do Not Track</h2>
      <p>Please note that because there is no consistent industry understanding of how to respond to “Do Not Track” signals, we do not alter our data collection and usage practices when we detect such a signal from your browser.</p>
      <h2 class="bold underline">12.Your rights</h2>
      <p>In accordance with relevant Chinese laws, regulations, standards, and common practices in other countries and regions, we guarantee that you exercise the following rights against your personal information:</p>
      <p>a: Access your personal information</p>
      <p>b: Correct your personal information</p>
      <p>c: Delete your personal information</p>
      <p>d: Copy and transfer your personal information</p>
      <p>e: Cancel your account</p>
      <p>f: Respond to your above request</p>
      <p>For security purposes, you may be required to provide a written request or otherwise prove your identity. We may ask you to verify your identity before processing your request.</p>
      <p>In the following circumstances, we will not be able to respond to your request in accordance with the requirements of laws and regulations:</p>
      <p>(1)Related to national security and national defense security;</p>
      <p>(2) Related to public safety, public health, and major public interests;</p>
      <p>(3) Related to criminal investigation, prosecution and trial;</p>
      <p>(4) There is sufficient evidence that you have subjective malice or abuse of rights;</p>
      <p>(5) Responding to your request will cause serious damage to the legitimate rights and interests of you or other individuals or organizations.</p>
      <p>g: The rights of the deceased's close relatives</p>
      <p>If a user unfortunately passes away, his close relatives can contact us through official channels to obtain relevant guidance to exercise the legitimate and legitimate rights and interests stipulated by law.</p>
      <h2 class="bold underline">13.Update</h2>
      <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.Your continued use of or access to the Website following the posting of any changes constitutes your acceptance of those changes.</p>
      <h2 class="bold underline">14.Contact</h2>
      <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at dachengoffer@163.com .</p>
      <p>If you are not satisfied with our response to your complaint, you have the right to lodge your complaint with the relevant data protection authority. You can contact your local data protection authority.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "dachengPrivacy",
  mounted() {
    var doc = document.documentElement,
      winW = window.screen.availWidth,
      winH = window.screen.availHeight;
    doc.style.fontSize = (winW > winH ? winH : winW) / 10 + "px";
  },
  methods: {
    changeLang() {
      let locale = localStorage.getItem("language") || "zh";
      let temp = locale === "zh" ? "en" : "zh";
      this.$i18n.locale = localStorage.language = temp; //改变当前语言
    },
  },
};
</script>

<style src="@/assets/css/agreement.css" scoped>
</style>