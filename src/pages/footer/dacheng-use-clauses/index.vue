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
      <h1 class="bold">使用条款</h1>
      <h2 class="bold underline">概述</h2>
      <p>本网站由大乘offer提供运营。在整个网站中，术语“我们”、“我们”和“我们的”是指大乘offer。大乘offer向您（用户）提供本网站，包括本网站提供的所有信息、工具和服务，前提是您接受此处所述的所有条款、条件、政策和通知。</p>
      <p>通过访问我们的网站和/或从我们处购买东西，您就参与了我们的“服务”，并同意受以下条款和条件（“服务条款”、“条款”）的约束，包括此处引用和/或通过超链接提供的附加条款和条件和政策。这些服务条款适用于网站的所有用户，包括但不限于浏览器、供应商、客户、商家和/或内容贡献者。</p>
      <p>在访问或使用我们的网站之前，请仔细阅读这些服务条款。通过访问或使用网站的任何部分，您同意受这些服务条款的约束。如果您不同意本协议的所有条款和条件，则您可能无法访问网站或使用任何服务。</p>
      <p>如果这些服务条款被视为要约，则接受仅限于这些服务条款。</p>
      <p>添加到当前商店的任何新功能或工具也应遵守服务条款。您可以随时在此页面上查看最新版本的服务条款。我们保留通过在我们的网站上发布更新和/或更改来更新、更改或替换本服务条款的任何部分的权利。您有责任定期检查此页面是否有更改。</p>
      <p>在发布任何更改后，您继续使用或访问网站即表示您接受这些更改。</p>

      <h2 class="bold underline">在线订阅条款</h2>
      <p>通过同意这些服务条款，您表示您至少达到居住所在州或省的成年年龄，或者您已达到居住所在省或州的成年年龄并且您已同意我们允许您的任何未成年家属使用本网站。</p>
      <p>您不得将我们的产品用于任何非法或未经授权的目的，也不得在使用服务时违反您管辖区内的任何法律（包括但不限于版权法）。</p>
      <p>您不得传播任何爬虫、病毒或任何具有破坏性的代码。</p>
      <p>违反或违反任何条款将导致您的服务立即终止。</p>

      <h2 class="bold underline">一般条件</h2>
      <p>我们保留随时以任何理由拒绝向任何人提供服务的权利。</p>
      <p>您了解您的内容（不包括信用卡信息）可能未加密传输，并且涉及（a）通过各种网络传输；以及（b）改变以符合和适应连接网络或设备的技术要求。信用卡信息在网络传输过程中总是加密的。</p>
      <p>您同意，未经我们明确书面许可，不得复制、复制、拷贝、出售、转售或利用服务的任何部分、使用服务或访问服务或提供服务的网站上的任何联系人。</p>
      <p>您同意，未经我们明确书面许可，不得复制、复制、拷贝、出售、转售或利用服务的任何部分、使用服务或访问服务或提供服务的网站上的任何联系人。</p>

      <h2 class="bold underline">信息的准确性、完整性和及时性</h2>
      <p>如果本网站上提供的信息不准确、不完整或不及时，我们不承担任何责任。本网站上的材料仅用于一般信息，在未咨询主要、更准确、更完整或更及时的信息来源的情况下，不得将其作为决策的唯一依据。任何对本网站材料的依赖都由您自己承担风险。</p>
      <p>本网站可能包含某些历史信息。历史信息不一定是最新的，仅供参考。我们保留随时修改本网站内容的权利，但我们没有义务更新本网站上的任何信息。您同意您有责任监控我们网站的更改。</p>

      <h2 class="bold underline">修改服务和价格</h2>
      <p>我们产品的价格如有变动，恕不另行通知。</p>
      <p>我们保留随时修改或终止服务（或其任何部分或内容）的权利，恕不另行通知。</p>
      <p>对于服务的任何修改、价格变更、暂停或终止，我们不对您或任何第三方负责。</p>

      <h2 class="bold underline">退款政策</h2>
      <p>虚拟商品一旦售出，将不接受退货或交换。课程详情页面有不同的课程退款要求。如有特殊情况，请联系课程顾问。</p>

      <h2 class="bold underline">产品或服务</h2>
      <p>某些产品或服务可能仅通过网站在线提供。这些产品或服务的数量可能有限，只能根据我们的退货政策进行退货或更换。</p>
      <p>我们保留权利，但没有义务限制向任何人、地理区域或司法管辖区销售我们的产品或服务。我们可以根据具体情况行使这项权利。我们保留限制我们提供的任何产品或服务数量的权利。所有产品描述或产品定价随时可能更改，恕不另行通知，由我们全权决定。我们保留随时停止任何产品的权利。在禁止的情况下，本网站上的任何产品或服务的报价均无效。</p>
      <p>我们不保证您购买或获得的任何产品、服务、信息或其他材料的质量符合您的期望，也不保证服务中的任何错误将得到纠正。</p>

      <h2 class="bold underline">账单和账户信息的准确性</h2>
      <p>我们保留拒绝您向我们下任何订单的权利。我们可以自行决定限制或取消每个人、每个家庭或每个订单的购买数量。这些限制可能包括由同一客户帐户、同一信用卡和/或使用同一帐单和/或发货地址的订单或在同一客户账户下的订单。如果我们更改或取消订单，我们可能会尝试通过联系订单时提供的电子邮件和/或账单地址/电话号码通知您。我们保留限制或禁止经销商、经销商或分销商下达的订单的权利。</p>
      <p>您同意为在我们商店进行的所有购买提供最新、完整和准确的购买和账户信息。您同意及时更新您的帐户和其他信息，包括您的电子邮件地址、信用卡号码和到期日期，以便我们完成您的交易并根据需要与您联系。</p>
      <p>有关详细信息，请查看我们的退货政策。</p>

      <h2 class="bold underline">可选工具</h2>
      <p>我们可能会为您提供对第三方工具的访问权限，我们既不会监控这些工具，也不会对其进行任何控制或输入。</p>
      <p>您承认并同意，我们提供“现有”和“可用”的工具，无需任何担保、陈述或条件，也无需任何背书。我们不承担因您使用可选第三方工具而产生或与之相关的任何责任。</p>
      <p>您使用本网站提供的可选工具的风险和自由裁量权完全由您自己承担，您应确保您熟悉并批准相关第三方提供商提供的工具的条款。</p>
      <p>您使用本网站提供的可选工具的风险和自由裁量权完全由您自己承担，您应确保您熟悉并批准相关第三方提供商提供的工具的条款。</p>

      <h2 class="bold underline">第三方链接</h2>
      <p>通过我们的服务提供的某些内容、产品和服务可能包括来自第三方的材料。</p>
      <p>本网站上的第三方链接可能会将您指向与我们无关的第三方网站。我们不负责检查或评估内容或准确性，我们不对任何第三方材料或网站，或第三方的任何其他材料、产品或服务承担任何责任。</p>
      <p>本网站上的第三方链接可能会将您指向与我们无关的第三方网站。我们不负责检查或评估内容或准确性，我们不对任何第三方材料或网站，或第三方的任何其他材料、产品或服务承担任何责任。</p>
      <p>请仔细审查第三方的政策和做法，并确保在进行任何交易之前了解它们。有关第三方产品的投诉、索赔、关注或问题应直接向第三方提出。</p>

      <h2 class="bold underline">用户评论、反馈和其他提交</h2>
      <p>如果应我们的要求，您发送了特定的提交材料（例如竞赛参赛作品），或者未经我们的请求，您通过在线、电子邮件、邮寄或其他方式（统称为“评论”）发送了创意想法、建议、建议、计划或其他材料，您同意我们可以在任何时候无限制地编辑、复制、发布、分发、，翻译并在任何媒体中使用您转发给我们的任何评论。我们没有义务（1）对任何评论保密；（2） 为任何评论支付赔偿；或（3）回应任何评论。</p>
      <p>我们可能（但没有义务）监控、编辑或删除我们自行判断为非法、冒犯、威胁、诽谤、诽谤性、色情、淫秽或其他令人反感的内容，或违反任何一方的知识产权或本服务条款。</p>
      <p>您同意您的评论不会侵犯任何第三方的任何权利，包括版权、商标、隐私、人格或其他个人或专有权利。您进一步同意，您的评论不会包含诽谤或其他非法、滥用或淫秽材料，或包含任何可能以任何方式影响服务或任何相关网站运行的计算机病毒或其他恶意软件。您不得使用虚假的电子邮件地址，假装自己以外的人，或在任何评论的来源方面误导我们或第三方。您对自己的任何评论及其准确性负责。对于您或任何第三方发布的任何评论，我们不承担任何责任。</p>

      <h2 class="bold underline">个人信息</h2>
      <p>您通过商店提交的个人信息受我们的隐私政策管辖。</p>

      <h2 class="bold underline">错误、不准确和遗漏</h2>
      <p>我们的网站或服务中可能会出现与产品描述、定价、促销、优惠、产品运输费用、运输时间和可用性相关的印刷错误、不准确或遗漏信息。如果服务或任何相关网站上的任何信息在任何时候不准确（包括在您提交订单后），我们保留更正任何错误、不准确或遗漏的权利，以及更改或更新信息或取消订单的权利。</p>
      <p>除法律要求外，我们没有义务更新、修改或澄清服务或任何相关网站上的信息，包括但不限于定价信息。在服务或任何相关网站上应用的任何指定更新或刷新日期均不应被视为表明服务或任何有关网站上的所有信息已被修改或更新。</p>

      <h2 class="bold underline">禁止使用</h2>
      <p>除了服务条款中规定的其他禁令外，您还被禁止使用本网站或其内容：（a）用于任何非法目的；（b） （二）招揽他人实施或者参与违法行为；（c） 违反任何国际、联邦、省或州法规、规则、法律或地方条例；（d） 侵犯或侵犯我们的知识产权或他人的知识产权；（e） 基于性别、性取向、宗教、种族、种族、年龄、民族血统或残疾的骚扰、辱骂、侮辱、伤害、诽谤、诋毁、恐吓或歧视；（f） 提交虚假或误导性信息；（g） 上传或传输病毒或任何其他类型的恶意代码，这些病毒或代码将或可能以任何方式使用，从而影响服务或任何相关网站、其他网站或互联网的功能或操作；（h） 收集或跟踪他人的个人信息；（i） 垃圾邮件、网络钓鱼、欺诈、借口、蜘蛛、爬行或刮取；（j） 用于任何淫秽或不道德目的；或（k）干扰或规避服务或任何相关网站、其他网站或互联网的安全功能。我们保留因违反任何禁止使用而终止您使用本服务或任何相关网站的权利。</p>

      <h2 class="bold underline">免责声明；责任限制</h2>
      <p>我们不保证、声明或保证您对我们服务的使用不会中断、及时、安全或无错误。</p>
      <p>我们不保证使用该服务可能获得的结果是准确或可靠的。</p>
      <p>您同意，我们可以随时无限期取消服务或随时取消服务，无需通知您。</p>
      <p>您明确同意，您使用或无法使用服务的风险由您自行承担。服务以及通过服务交付给您的所有产品和服务（除非我们明确声明）均按“现状”和“可供您使用”提供，无任何明示或暗示的任何陈述、保证或条件，包括适销性、适销质量、特定用途适用性、耐用性、，所有权和非侵权。</p>
      <p>在任何情况下，大乘offer、我们的董事、高级职员、员工、附属公司、代理、承包商、实习生、供应商、服务提供商或许可方均不对任何伤害、损失、索赔或任何直接、间接、附带、惩罚性、特殊或后果性损害负责，包括但不限于利润损失、收入损失、储蓄损失、数据损失、重置成本、，或因您使用任何服务或使用服务购买的任何产品而产生的任何类似损害，无论是基于合同、侵权（包括疏忽）、严格责任或其他原因，或因您以任何方式使用服务或任何产品而引起的任何其他索赔，包括但不限于任何内容中的任何错误或遗漏，或因使用服务或通过服务发布、传输或以其他方式提供的任何内容（或产品）而产生的任何类型的损失或损害，即使已告知其可能性。由于某些州或司法管辖区不允许排除或限制间接或附带损害赔偿责任，因此在这些州或司法辖区内，我们的责任应在法律允许的最大范围内受到限制。</p>

      <h2 class="bold underline">赔偿</h2>
      <p>您同意赔偿、辩护并使大乘offer和我们的母公司、子公司、附属公司、合伙人、高管、董事、代理人、承包商、许可人、服务提供商、分包商、供应商、实习生和员工免受任何索赔或要求，包括合理的律师费、，由于您违反本服务条款或其引用的文件，或您违反任何法律或第三方的权利，由任何第三方作出。</p>

      <h2 class="bold underline">可分割性</h2>
      <p>如果本服务条款的任何规定被确定为非法、无效或不可执行，则该规定应在适用法律允许的最大范围内可执行，且不可执行部分应视为与本服务条款分离，该决定不得影响任何其他剩余条款的有效性和可执行性。</p>

      <h2 class="bold underline">终止</h2>
      <p>双方在终止日期之前产生的义务和责任应在本协议终止后继续有效。</p>
      <p>本服务条款有效，除非您或我们终止。您可以随时通过通知我们您不再希望使用我们的服务或停止使用我们的网站来终止这些服务条款。</p>
      <p>如果根据我们的唯一判断，您未能或我们怀疑您未能遵守本服务条款的任何条款或规定，我们也可以随时终止本协议，恕不另行通知，您将继续对截至终止日期（包括终止日期）的所有到期金额负责；和/或因此可能拒绝您访问我们的服务（或其任何部分）。</p>

      <h2 class="bold underline">整个协议</h2>
      <p>我们未能行使或执行本服务条款的任何权利或规定，并不构成对该权利或规定的放弃</p>
      <p>本服务条款以及我们在本网站上发布的或与本服务相关的任何政策或操作规则构成您和我们之间的完整协议和理解，并管理您对本服务的使用，取代任何先前或同期的口头或书面协议、通信和建议，您和我们之间的协议（包括但不限于任何先前版本的服务条款）。</p>
      <p>本服务条款解释中的任何歧义均不得解释为对起草方不利。</p>

      <h2 class="bold underline">适用法律</h2>
      <p>本服务条款以及我们向您提供服务的任何单独协议均受中国法律管辖并根据中国法律进行解释。</p>

      <h2 class="bold underline">服务条款的变更</h2>
      <p>服务条款的变更</p>
      <p>我们保留自行决定通过在我们的网站上发布更新和更改来更新、更改或替换本服务条款的任何部分的权利。您有责任定期检查我们的网站是否有更改。在发布本服务条款的任何更改后，您继续使用或访问我们的网站或服务即表示您接受这些更改。</p>

      <h2 class="bold underline">联系人信息</h2>
      <!-- <p>有关服务条款的问题，请发送至dachengoffer@163.com</p> -->
      <p>
        有关服务条款的问题，请发送至dachengoffer@163.com
      </p>
    </div>
    <div v-else>
      <h1 class="bold">Terms of service</h1>
      <h2 class="bold underline">OVERVIEW</h2>
      <p>This website is operated by dachengoffer. Throughout the site, the terms “we”, “us” and “our” refer to dachengoffer. dachengoffer offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.</p>
      <p>By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
      <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>
      <p>If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>
      <p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes.</p>
      <p>Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>
      <h2 class="bold underline">ONLINE SUBSCRIBE TERMS</h2>
      <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
      <p>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</p>
      <p>You must not transmit any worms or viruses or any code of a destructive nature.</p>
      <p>A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>
      <h2 class="bold underline">GENERAL CONDITIONS</h2>
      <p>We reserve the right to refuse service to anyone for any reason at any time.</p>
      <p>You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to the technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.</p>
      <p>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.</p>
      <p>The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>
      <p>ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</p>
      <p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.</p>
      <p>This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</p>
      <h2 class="bold underline">MODIFICATIONS TO THE SERVICE AND PRICES</h2>
      <p>Prices for our products are subject to change without notice.</p>
      <p>We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
      <p>We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the Service.</p>
      <h2 class="bold underline">PRODUCTS OR SERVICES</h2>
      <p>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.</p>
      <p>We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.</p>
      <p>We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.</p>
      <h2 class="bold underline">ACCURACY OF BILLING AND ACCOUNT INFORMATION</h2>
      <p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.</p>
      <p>You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.</p>
      <p>For more detail, please review our Returns Policy.</p>
      <h2 class="bold underline">OPTIONAL TOOLS</h2>
      <p>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.</p>
      <p>You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations, or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.</p>
      <p>Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).</p>
      <p>We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.</p>
      <h2 class="bold underline">THIRD-PARTY LINKS</h2>
      <p>Certain content, products, and services available via our Service may include materials from third parties.</p>
      <p>Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third parties.</p>
      <p>We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites.</p>
      <p>Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third party.</p>
      <h2 class="bold underline">USER COMMENTS, FEEDBACK, AND OTHER SUBMISSIONS</h2>
      <p>If at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.</p>
      <p>We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.</p>
      <p>You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.</p>
      <h2 class="bold underline">PERSONAL INFORMATION</h2>
      <p>Your submission of personal information through the store is governed by our Privacy Policy.</p>
      <h2 class="bold underline">ERRORS, INACCURACIES, AND OMISSIONS</h2>
      <p>Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times, and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).</p>
      <p>We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website should be taken to indicate that all information in the Service or on any related website has been modified or updated.</p>
      <h2 class="bold underline">PROHIBITED USES</h2>
      <p>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</p>
      <h2 class="bold underline">DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h2>
      <p>We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.</p>
      <p>We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.</p>
      <p>You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.</p>
      <p>You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.</p>
      <p>In no case shall dachengoffer, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.</p>
      <h2 class="bold underline">INDEMNIFICATION</h2>
      <p>You agree to indemnify, defend and hold harmless dachengoffer and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns, and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference or your violation of any law or the rights of a third-party.</p>
      <h2 class="bold underline">SEVERABILITY</h2>
      <p>In the event that any provision of these Terms of Service is determined to be unlawful, void, or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>
      <h2 class="bold underline">TERMINATION</h2>
      <p>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.</p>
      <p>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.</p>
      <p>If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).</p>
      <h2 class="bold underline">ENTIRE AGREEMENT</h2>
      <p>The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.</p>
      <p>These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications, and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).</p>
      <p>Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.</p>
      <h2 class="bold underline">GOVERNING LAW</h2>
      <p>These Terms of Service and any separate agreements whereby we provide you shall be governed by and construed in accordance with the laws of China.</p>
      <h2 class="bold underline">CHANGES TO TERMS OF SERVICE</h2>
      <p>You can review the most current version of the Terms of Service at any time on this page.</p>
      <p>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>
      <h2 class="bold underline">CONTACT INFORMATION</h2>
      <!-- <p>Questions about the Terms of Service should be sent to us at dachengoffer@163.com</p> -->
      <p>
        Questions about the Terms of Service should be sent to us at dachengoffer@163.com
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "dacheng-use-clauses",
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