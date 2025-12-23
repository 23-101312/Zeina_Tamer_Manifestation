if(localStorage.getItem("loaded")){
}else{
  let loaded = true;
  
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
  
  let galleryTitle1AR = "قوة الإيمان في الدماغ";
  let galleryTitle1EN = "The Power of Belief in the Brain";
  let galleryShort1AR = "اكتشف كيف يؤثر الإيمان على معالجة دماغك للمعلومات وكيف يغير إدراكك للواقع.";
  let galleryShort1EN = "Discover how belief affects your brain's processing of information and changes your perception of reality.";
  let galleryFull1AR = "اكتشف كيف يؤثر الإيمان على معالجة دماغك للمعلومات وكيف يغير إدراكك للواقع. عندما تؤمن بشيء ما، يبدأ دماغك في إعادة تنظيم نفسه لملاحظة الأنماط التي تدعم معتقداتك وتجاهل ما لا يدعمها. هذه العملية العصبية تشرح لماذا يبدو أن التخيل 'يعمل' أحياناً - ليس بسبب السحر، بل بسبب كيفية عمل دماغك.";
  let galleryFull1EN = "Discover how belief affects your brain's processing of information and changes your perception of reality. When you believe something, your brain begins to reorganize itself to notice patterns that support your beliefs and ignore what doesn't. This neural process explains why manifestation seems to 'work' sometimes - not because of magic, but because of how your brain functions.";
  
  let galleryTitle2AR = "الأساطير مقابل العلم";
  let galleryTitle2EN = "Myths vs Science";
  let galleryShort2AR = "فصل الحقيقة عن الخيال في عالم التخيل والتفكير الإيجابي.";
  let galleryShort2EN = "Separating fact from fiction in the world of manifestation and positive thinking.";
  let galleryFull2AR = "فصل الحقيقة عن الخيال في عالم التخيل والتفكير الإيجابي. بينما يمكن للتفكير الإيجابي أن يحسن مزاجك ويدفعك للعمل، فإن فكرة أن الكون 'يستجيب' لأفكارك هي أسطورة. العلم الحقيقي يكمن في فهم كيفية تأثير معتقداتك على سلوكك وليس على الواقع الخارجي.";
  let galleryFull2EN = "Separating fact from fiction in the world of manifestation and positive thinking. While positive thinking can improve your mood and motivate action, the idea that the universe 'responds' to your thoughts is a myth. The real science lies in understanding how your beliefs affect your behavior, not external reality.";
  
  let galleryTitle3AR = "إعادة توصيل الدماغ";
  let galleryTitle3EN = "Rewiring the Brain";
  let galleryShort3AR = "كيف تتغير شبكاتك العصبية عندما تتبنى معتقدات جديدة وتتخذ إجراءات متسقة.";
  let galleryShort3EN = "How your neural networks change when you adopt new beliefs and take consistent action.";
  let galleryFull3AR = "كيف تتغير شبكاتك العصبية عندما تتبنى معتقدات جديدة وتتخذ إجراءات متسقة. التغيير الحقيقي لا يأتي من التفكير وحده، بل من الجمع بين المعتقدات الإيجابية والأفعال المتسقة. عندما تتصرف بناءً على معتقداتك، تقوم بإنشاء مسارات عصبية جديدة تدعم أهدافك.";
  let galleryFull3EN = "How your neural networks change when you adopt new beliefs and take consistent action. Real change doesn't come from thinking alone, but from combining positive beliefs with consistent actions. When you act on your beliefs, you create new neural pathways that support your goals.";
  
  let galleryTitle4AR = "الوعي والإدراك";
  let galleryTitle4EN = "Consciousness & Perception";
  let galleryShort4AR = "استكشف العلاقة المعقدة بين ما تعتقد أنه حقيقي وما هو حقيقي بالفعل.";
  let galleryShort4EN = "Explore the complex relationship between what you believe is real and what actually is real.";
  let galleryFull4AR = "استكشف العلاقة المعقدة بين ما تعتقد أنه حقيقي وما هو حقيقي بالفعل. دماغك لا يعرض الواقع كما هو، بل يبني نموذجاً للواقع بناءً على معتقداتك وتجاربك السابقة. هذا يفسر لماذا يمكن لشخصين رؤية نفس الموقف بشكل مختلف تماماً.";
  let galleryFull4EN = "Explore the complex relationship between what you believe is real and what actually is real. Your brain doesn't display reality as it is, but builds a model of reality based on your beliefs and past experiences. This explains why two people can see the same situation completely differently.";
  
  let galleryTitle5AR = "العلم وراء التخيل";
  let galleryTitle5EN = "The Science Behind Manifestation";
  let galleryShort5AR = "فهم الآليات العصبية التي تجعل بعض تقنيات التخيل تبدو فعالة.";
  let galleryShort5EN = "Understanding the neural mechanisms that make some manifestation techniques seem effective.";
  let galleryFull5AR = "فهم الآليات العصبية التي تجعل بعض تقنيات التخيل تبدو فعالة. عندما تتخيل هدفاً، تنشط نفس المناطق في دماغك التي تنشط عند تحقيق الهدف فعلياً. هذا لا يجعل الهدف يحدث تلقائياً، لكنه يعد دماغك للعمل والاستفادة من الفرص عندما تظهر.";
  let galleryFull5EN = "Understanding the neural mechanisms that make some manifestation techniques seem effective. When you visualize a goal, you activate the same brain regions that activate when actually achieving the goal. This doesn't make the goal happen automatically, but it prepares your brain for action and to take advantage of opportunities when they arise.";
  
  let galleryTitle6AR = "من الخيال إلى الواقع";
  let galleryTitle6EN = "From Imagination to Reality";
  let galleryShort6AR = "الجسر بين التفكير الإيجابي والنتائج الفعلية يكمن في الفهم العلمي.";
  let galleryShort6EN = "The bridge between positive thinking and actual results lies in scientific understanding.";
  let galleryFull6AR = "الجسر بين التفكير الإيجابي والنتائج الفعلية يكمن في الفهم العلمي. التخيل والتفكير الإيجابي يمكن أن يحسن أداءك ويدفعك للعمل، لكن النتائج الحقيقية تأتي من الجمع بين المعتقدات الإيجابية والأفعال المتسقة والاستراتيجيات الفعالة.";
  let galleryFull6EN = "The bridge between positive thinking and actual results lies in scientific understanding. Visualization and positive thinking can improve your performance and motivate action, but real results come from combining positive beliefs with consistent actions and effective strategies.";
  
  let readMoreAR = "اقرأ المزيد";
  let readMoreEN = "Read More";
  let readLessAR = "اقرأ أقل";
  let readLessEN = "Read Less";
  
  let mythCard1AR = "إذا آمنت بقوة كافية، سيوفر لك الكون ما تريده.";
  let mythCard1EN = "If you believe hard enough, the universe will deliver what you want.";
  let mythCard2AR = "كتابة التأكيدات تعيد توصيل دماغك تلقائياً.";
  let mythCard2EN = "Writing affirmations rewires your brain automatically.";
  let mythCard3AR = "الإيمان يغير طريقة فلترة دماغك وتفسيره للمعلومات.";
  let mythCard3EN = "Belief changes how your brain filters and interprets information.";
  
  let mythResultAR = "أسطورة";
  let mythResultEN = "MYTH";
  let scienceResultAR = "علم";
  let scienceResultEN = "SCIENCE";
  
  let winMessageAR = "لقد فزت! هذه حقيقة مثبتة علمياً.";
  let winMessageEN = "You win! This is the scientifically proven fact.";
  let loseMessageAR = "لقد خسرت! هذه أسطورة وليست حقيقة.";
  let loseMessageEN = "You lose! This is a myth, not a fact.";
  
  let language = "EN";
  
  localStorage.setItem("navItemsAR", JSON.stringify(navItemsAR));
  localStorage.setItem("navItemsEN", JSON.stringify(navItemsEN));
  localStorage.setItem("heroTitleAR", heroTitleAR);
  localStorage.setItem("heroTitleEN", heroTitleEN);
  localStorage.setItem("heroSubtitleAR", heroSubtitleAR);
  localStorage.setItem("heroSubtitleEN", heroSubtitleEN);
  localStorage.setItem("skipTextAR", skipTextAR);
  localStorage.setItem("skipTextEN", skipTextEN);
  localStorage.setItem("storyFrame1AR", storyFrame1AR);
  localStorage.setItem("storyFrame1EN", storyFrame1EN);
  localStorage.setItem("storyFrame2AR", storyFrame2AR);
  localStorage.setItem("storyFrame2EN", storyFrame2EN);
  localStorage.setItem("storyFrame3AR", storyFrame3AR);
  localStorage.setItem("storyFrame3EN", storyFrame3EN);
  localStorage.setItem("cardsHeaderTitleAR", cardsHeaderTitleAR);
  localStorage.setItem("cardsHeaderTitleEN", cardsHeaderTitleEN);
  localStorage.setItem("cardsHeaderDescAR", cardsHeaderDescAR);
  localStorage.setItem("cardsHeaderDescEN", cardsHeaderDescEN);
  localStorage.setItem("cardsHintAR", cardsHintAR);
  localStorage.setItem("cardsHintEN", cardsHintEN);
  localStorage.setItem("scienceHeaderTitleAR", scienceHeaderTitleAR);
  localStorage.setItem("scienceHeaderTitleEN", scienceHeaderTitleEN);
  localStorage.setItem("scienceHeaderDescAR", scienceHeaderDescAR);
  localStorage.setItem("scienceHeaderDescEN", scienceHeaderDescEN);
  localStorage.setItem("hotspot1TitleAR", hotspot1TitleAR);
  localStorage.setItem("hotspot1TitleEN", hotspot1TitleEN);
  localStorage.setItem("hotspot1DescAR", hotspot1DescAR);
  localStorage.setItem("hotspot1DescEN", hotspot1DescEN);
  localStorage.setItem("hotspot2TitleAR", hotspot2TitleAR);
  localStorage.setItem("hotspot2TitleEN", hotspot2TitleEN);
  localStorage.setItem("hotspot2DescAR", hotspot2DescAR);
  localStorage.setItem("hotspot2DescEN", hotspot2DescEN);
  localStorage.setItem("hotspot3TitleAR", hotspot3TitleAR);
  localStorage.setItem("hotspot3TitleEN", hotspot3TitleEN);
  localStorage.setItem("hotspot3DescAR", hotspot3DescAR);
  localStorage.setItem("hotspot3DescEN", hotspot3DescEN);
  localStorage.setItem("contactHeaderTitleAR", contactHeaderTitleAR);
  localStorage.setItem("contactHeaderTitleEN", contactHeaderTitleEN);
  localStorage.setItem("contactHeaderDescAR", contactHeaderDescAR);
  localStorage.setItem("contactHeaderDescEN", contactHeaderDescEN);
  localStorage.setItem("nameLabelAR", nameLabelAR);
  localStorage.setItem("nameLabelEN", nameLabelEN);
  localStorage.setItem("emailLabelAR", emailLabelAR);
  localStorage.setItem("emailLabelEN", emailLabelEN);
  localStorage.setItem("messageLabelAR", messageLabelAR);
  localStorage.setItem("messageLabelEN", messageLabelEN);
  localStorage.setItem("submitBtnAR", submitBtnAR);
  localStorage.setItem("submitBtnEN", submitBtnEN);
  localStorage.setItem("loginLinkAR", loginLinkAR);
  localStorage.setItem("loginLinkEN", loginLinkEN);
  localStorage.setItem("galleryTitle1AR", galleryTitle1AR);
  localStorage.setItem("galleryTitle1EN", galleryTitle1EN);
  localStorage.setItem("galleryShort1AR", galleryShort1AR);
  localStorage.setItem("galleryShort1EN", galleryShort1EN);
  localStorage.setItem("galleryFull1AR", galleryFull1AR);
  localStorage.setItem("galleryFull1EN", galleryFull1EN);
  localStorage.setItem("galleryTitle2AR", galleryTitle2AR);
  localStorage.setItem("galleryTitle2EN", galleryTitle2EN);
  localStorage.setItem("galleryShort2AR", galleryShort2AR);
  localStorage.setItem("galleryShort2EN", galleryShort2EN);
  localStorage.setItem("galleryFull2AR", galleryFull2AR);
  localStorage.setItem("galleryFull2EN", galleryFull2EN);
  localStorage.setItem("galleryTitle3AR", galleryTitle3AR);
  localStorage.setItem("galleryTitle3EN", galleryTitle3EN);
  localStorage.setItem("galleryShort3AR", galleryShort3AR);
  localStorage.setItem("galleryShort3EN", galleryShort3EN);
  localStorage.setItem("galleryFull3AR", galleryFull3AR);
  localStorage.setItem("galleryFull3EN", galleryFull3EN);
  localStorage.setItem("galleryTitle4AR", galleryTitle4AR);
  localStorage.setItem("galleryTitle4EN", galleryTitle4EN);
  localStorage.setItem("galleryShort4AR", galleryShort4AR);
  localStorage.setItem("galleryShort4EN", galleryShort4EN);
  localStorage.setItem("galleryFull4AR", galleryFull4AR);
  localStorage.setItem("galleryFull4EN", galleryFull4EN);
  localStorage.setItem("galleryTitle5AR", galleryTitle5AR);
  localStorage.setItem("galleryTitle5EN", galleryTitle5EN);
  localStorage.setItem("galleryShort5AR", galleryShort5AR);
  localStorage.setItem("galleryShort5EN", galleryShort5EN);
  localStorage.setItem("galleryFull5AR", galleryFull5AR);
  localStorage.setItem("galleryFull5EN", galleryFull5EN);
  localStorage.setItem("galleryTitle6AR", galleryTitle6AR);
  localStorage.setItem("galleryTitle6EN", galleryTitle6EN);
  localStorage.setItem("galleryShort6AR", galleryShort6AR);
  localStorage.setItem("galleryShort6EN", galleryShort6EN);
  localStorage.setItem("galleryFull6AR", galleryFull6AR);
  localStorage.setItem("galleryFull6EN", galleryFull6EN);
  localStorage.setItem("readMoreAR", readMoreAR);
  localStorage.setItem("readMoreEN", readMoreEN);
  localStorage.setItem("readLessAR", readLessAR);
  localStorage.setItem("readLessEN", readLessEN);
  localStorage.setItem("mythCard1AR", mythCard1AR);
  localStorage.setItem("mythCard1EN", mythCard1EN);
  localStorage.setItem("mythCard2AR", mythCard2AR);
  localStorage.setItem("mythCard2EN", mythCard2EN);
  localStorage.setItem("mythCard3AR", mythCard3AR);
  localStorage.setItem("mythCard3EN", mythCard3EN);
  localStorage.setItem("mythResultAR", mythResultAR);
  localStorage.setItem("mythResultEN", mythResultEN);
  localStorage.setItem("scienceResultAR", scienceResultAR);
  localStorage.setItem("scienceResultEN", scienceResultEN);
  localStorage.setItem("winMessageAR", winMessageAR);
  localStorage.setItem("winMessageEN", winMessageEN);
  localStorage.setItem("loseMessageAR", loseMessageAR);
  localStorage.setItem("loseMessageEN", loseMessageEN);
  localStorage.setItem("language", language);
  localStorage.setItem("loaded", loaded);
}

