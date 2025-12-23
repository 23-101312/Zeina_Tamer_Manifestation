function setIfMissing(key, value) {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, value);
  }
}

function setJsonIfMissing(key, value) {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

let navItemsAR = ['الرئيسية', 'القصة', 'الأساطير', 'العلم', 'المعرض', 'اتصل بنا'];
let navItemsEN = ['Home', 'Story', 'Myths', 'Science', 'Gallery', 'Contact'];

let heroTitleAR = "ماذا لو لم يكن التخيل سحراً؟";
let heroTitleEN = "What if manifestation <br>isn't magic?";

let heroSubtitleAR = "ما الذي يحدث فعلياً <br>داخل دماغك عندما تؤمن بشيء ما.";
let heroSubtitleEN = "What actually happens <br>inside your brain  when you believe something.";

let skipTextAR = "تخطي";
let skipTextEN = "Skip";

let storyFrame1AR = "قيل لك أن الإيمان وحده يمكن أن يغير حياتك";
let storyFrame1EN = "You were told that belief alone could change your life";

let storyFrame2AR = "أنه إذا تصورت بقوة كافية، ستتبع النتائج";
let storyFrame2EN = "That if you visualized hard enough, results would follow";

let storyFrame3AR = "لكن عندما لم يتغير شيء، لومت نفسك";
let storyFrame3EN = "But when nothing changed, you blamed yourself";

let cardsHeaderTitleAR = "أسطورة واحدة وحقيقة واحدة";
let cardsHeaderTitleEN = "TWO MYTHS & ONE FACT";

let cardsHeaderDescAR = "ثلاث عبارات أدناه. واحدة فقط صحيحة علمياً. اختر بحكمة.";
let cardsHeaderDescEN = "Three statements below. Only one is scientifically true. Choose wisely.";

let cardsHintAR = "اضغط على البطاقة للكشف عما إذا كانت أسطورة أم حقيقة.";
let cardsHintEN = "Tap a card to reveal whether it is a myth or a fact.";

let scienceHeaderTitleAR = "ما الذي يحدث فعلياً في الدماغ";
let scienceHeaderTitleEN = "WHAT ACTUALLY HAPPENS IN THE BRAIN";

let scienceHeaderDescAR = "الإيمان لا يغير الواقع مباشرة. إنه يغير طريقة معالجة دماغك له.";
let scienceHeaderDescEN = "Belief doesn't change reality directly. It changes how your brain processes it.";

let hotspot1TitleAR = "الإيمان يغير ما تلاحظه";
let hotspot1TitleEN = "Belief changes what you notice";

let hotspot1DescAR = "دماغك يفلتر المعلومات. عندما تؤمن بشيء ما، يبدأ دماغك في الانتباه للأشياء التي تطابق ذلك الإيمان وتجاهل ما لا يطابقه.<br><br>لا ترى المزيد. ترى بشكل مختلف.";
let hotspot1DescEN = "Your brain filters information. When you believe something, your brain starts paying attention to things that match that belief and ignoring what doesn't.<br><br>You don't see more. You see differently.";

let hotspot2TitleAR = "الإيمان يغير شعورك بالأشياء";
let hotspot2TitleEN = "Belief changes how things feel";

let hotspot2DescAR = "الدماغ يقرر ما يهم عاطفياً. نفس الموقف يمكن أن يشعرك بالتحفيز أو التوتر أو عدم المعنى اعتماداً على ما تؤمن به عنه.<br><br>لا شيء يتغير في الخارج. الشعور هو الذي يتغير.";
let hotspot2DescEN = "The brain decides what matters emotionally. The same situation can feel motivating, stressful, or meaningless depending on what you believe about it.<br><br>Nothing outside changes. The feeling does.";

let hotspot3TitleAR = "الدافع ليس قوة الإرادة";
let hotspot3TitleEN = "Motivation isn't willpower";

let hotspot3DescAR = "من المرجح أن يكرر دماغك الأفعال التي تشعر بأنها مهمة أو مجزية. المعتقدات تؤثر على أي أفعال تحصل على تلك الأولوية.<br><br>ما يشعر بأنه 'سهل' أو 'صعب' غالباً ما يكون توصيلات الدماغ.";
let hotspot3DescEN = "Your brain is more likely to repeat actions that feel important or rewarding. Beliefs influence which actions get that priority.<br><br>What feels \"easy\" or \"hard\" is often brain wiring.";

let contactHeaderTitleAR = "اتصل بنا";
let contactHeaderTitleEN = "Contact Us";

let contactHeaderDescAR = "تواصل معنا";
let contactHeaderDescEN = "Get in touch with us";

let nameLabelAR = "الاسم";
let nameLabelEN = "Name";

let emailLabelAR = "البريد الإلكتروني";
let emailLabelEN = "Email";

let messageLabelAR = "الرسالة";
let messageLabelEN = "Message";

let submitBtnAR = "إرسال الرسالة";
let submitBtnEN = "Send Message";

let loginLinkAR = "تسجيل الدخول";
let loginLinkEN = "Login";

let statsTitleEN = "Brain by the Numbers";
let statsTitleAR = "الدماغ بالأرقام";

let statsDescEN = "Simple facts backed by neuroscience";
let statsDescAR = "حقائق مبسطة مدعومة بالعلم";

let stat1NumberEN = "86B";
let stat1NumberAR = "٨٦ مليار";
let stat1TextEN = "Neurons in the human brain";
let stat1TextAR = "عدد الخلايا العصبية في دماغ الإنسان";

let stat2NumberEN = "100T+";
let stat2NumberAR = "١٠٠ تريليون+";
let stat2TextEN = "Neural connections (synapses)";
let stat2TextAR = "الوصلات العصبية في الدماغ";

let stat3NumberEN = "5%";
let stat3NumberAR = "٥٪";
let stat3TextEN = "Information processed consciously";
let stat3TextAR = "المعلومات التي نعالجها بوعي";

let footerBrandEN = "What If It Isn't Magic?";
let footerBrandAR = "ماذا لو لم يكن التخيل سحراً؟";

let footerTextEN = "Educational experience based on neuroscience";
let footerTextAR = "تجربة تعليمية مبنية على علم الأعصاب";

let footerCopyEN = "© 2026 All rights reserved";
let footerCopyAR = "© ٢٠٢٦ جميع الحقوق محفوظة";

setJsonIfMissing("navItemsAR", navItemsAR);
setJsonIfMissing("navItemsEN", navItemsEN);

setIfMissing("heroTitleAR", heroTitleAR);
setIfMissing("heroTitleEN", heroTitleEN);
setIfMissing("heroSubtitleAR", heroSubtitleAR);
setIfMissing("heroSubtitleEN", heroSubtitleEN);

setIfMissing("skipTextAR", skipTextAR);
setIfMissing("skipTextEN", skipTextEN);

setIfMissing("storyFrame1AR", storyFrame1AR);
setIfMissing("storyFrame1EN", storyFrame1EN);
setIfMissing("storyFrame2AR", storyFrame2AR);
setIfMissing("storyFrame2EN", storyFrame2EN);
setIfMissing("storyFrame3AR", storyFrame3AR);
setIfMissing("storyFrame3EN", storyFrame3EN);

setIfMissing("cardsHeaderTitleAR", cardsHeaderTitleAR);
setIfMissing("cardsHeaderTitleEN", cardsHeaderTitleEN);
setIfMissing("cardsHeaderDescAR", cardsHeaderDescAR);
setIfMissing("cardsHeaderDescEN", cardsHeaderDescEN);
setIfMissing("cardsHintAR", cardsHintAR);
setIfMissing("cardsHintEN", cardsHintEN);

setIfMissing("scienceHeaderTitleAR", scienceHeaderTitleAR);
setIfMissing("scienceHeaderTitleEN", scienceHeaderTitleEN);
setIfMissing("scienceHeaderDescAR", scienceHeaderDescAR);
setIfMissing("scienceHeaderDescEN", scienceHeaderDescEN);

setIfMissing("hotspot1TitleAR", hotspot1TitleAR);
setIfMissing("hotspot1TitleEN", hotspot1TitleEN);
setIfMissing("hotspot1DescAR", hotspot1DescAR);
setIfMissing("hotspot1DescEN", hotspot1DescEN);

setIfMissing("hotspot2TitleAR", hotspot2TitleAR);
setIfMissing("hotspot2TitleEN", hotspot2TitleEN);
setIfMissing("hotspot2DescAR", hotspot2DescAR);
setIfMissing("hotspot2DescEN", hotspot2DescEN);

setIfMissing("hotspot3TitleAR", hotspot3TitleAR);
setIfMissing("hotspot3TitleEN", hotspot3TitleEN);
setIfMissing("hotspot3DescAR", hotspot3DescAR);
setIfMissing("hotspot3DescEN", hotspot3DescEN);

setIfMissing("contactHeaderTitleAR", contactHeaderTitleAR);
setIfMissing("contactHeaderTitleEN", contactHeaderTitleEN);
setIfMissing("contactHeaderDescAR", contactHeaderDescAR);
setIfMissing("contactHeaderDescEN", contactHeaderDescEN);

setIfMissing("nameLabelAR", nameLabelAR);
setIfMissing("nameLabelEN", nameLabelEN);
setIfMissing("emailLabelAR", emailLabelAR);
setIfMissing("emailLabelEN", emailLabelEN);
setIfMissing("messageLabelAR", messageLabelAR);
setIfMissing("messageLabelEN", messageLabelEN);
setIfMissing("submitBtnAR", submitBtnAR);
setIfMissing("submitBtnEN", submitBtnEN);

setIfMissing("loginLinkAR", loginLinkAR);
setIfMissing("loginLinkEN", loginLinkEN);

setIfMissing("statsTitleEN", statsTitleEN);
setIfMissing("statsTitleAR", statsTitleAR);
setIfMissing("statsDescEN", statsDescEN);
setIfMissing("statsDescAR", statsDescAR);

setIfMissing("stat1NumberEN", stat1NumberEN);
setIfMissing("stat1NumberAR", stat1NumberAR);
setIfMissing("stat1TextEN", stat1TextEN);
setIfMissing("stat1TextAR", stat1TextAR);

setIfMissing("stat2NumberEN", stat2NumberEN);
setIfMissing("stat2NumberAR", stat2NumberAR);
setIfMissing("stat2TextEN", stat2TextEN);
setIfMissing("stat2TextAR", stat2TextAR);

setIfMissing("stat3NumberEN", stat3NumberEN);
setIfMissing("stat3NumberAR", stat3NumberAR);
setIfMissing("stat3TextEN", stat3TextEN);
setIfMissing("stat3TextAR", stat3TextAR);

setIfMissing("footerBrandEN", footerBrandEN);
setIfMissing("footerBrandAR", footerBrandAR);
setIfMissing("footerTextEN", footerTextEN);
setIfMissing("footerTextAR", footerTextAR);
setIfMissing("footerCopyEN", footerCopyEN);
setIfMissing("footerCopyAR", footerCopyAR);

setIfMissing("language", "EN");

setIfMissing("loaded", "true");
