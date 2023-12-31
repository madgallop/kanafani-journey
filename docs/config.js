var config = {
    style: 'mapbox://styles/madgallop/clq8xzd5t001u01obgze9fdz2',
    accessToken: 'pk.eyJ1IjoibWFkZ2FsbG9wIiwiYSI6ImNsbmhzYzVnajE4eWsybm51bG43bjhuZWUifQ.PAvoy0phwrKGWDEBf75VSA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'عبر الحدود',
    subtitle: 'رجال في الشمس على الخريطة',
    byline: 'مادلين',
    // footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'full',
            // hidden: false,
            // title: 'Introduction and ',
            image: 'https://github.com/madgallop/kanafani-journey/blob/main/assets/meninthesuncover-01.jpg?raw=true',
            description: 'تستكشف الخريطة التالية رحلات الرجال في رواية "رجال في الشمس" التي كتبها غسان كنفاني عام ١٩٦٣ و فيلم "المخدوعون." تركز الخريطة على تجارب ثلاثة رجال فلسطينيين - أبو قيس واسعد ومروان - إنهم يتنقلون بين تحديات نكبة عام ١٩٤٨ عبر مخيمات اللاجئين والرحلات الصعبة إلى الحدود الكويتية. تعكس قصصهم الأمل واليأس وتصور الحقائق ظالمة التي تواجهها أجيال من الفلسطينيين',
            location: {
                center: [40.24918, 31.47661],
                zoom: 5.68,
                pitch: 0,
                bearing: 0,
                },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'full',
            hidden: false,
            // title: 'Second Title',
            image1: 'https://github.com/madgallop/kanafani-journey/blob/main/assets/images/MarwaHeadshotReal.png?raw=true',
            image2: 'https://github.com/madgallop/kanafani-journey/blob/main/assets/images/AssadHeadshot.png?raw=true',
            image3: 'https://github.com/madgallop/kanafani-journey/blob/main/assets/images/AbuQaisHead.png?raw=true',
            marker1: true,
            marker2: true,
            marker3: true,
            description1: 'مروان يمثل الجيل الجديد. ليس لديه ذكريات واضحة عن فلسطين، لكنه يحمل مسؤولية الأجيال الأكبر سنا. مروان يرمز إلى الهجر لأن أخوه ثم والده تركه. وبينما كان يأمل في البقاء في المدرسة، اختار الذهاب إلى الكويت لدعم والدته وإخوته',
            description2: 'يمثل اسعد الجيل الأوسط من الفلسطينيين. وهو ناشط سياسي يسافر إلى الكويت هربا من الشرطة الأردنية والتزامات عائلته الزوجية. وفي حين أن أبو قيس بطيء وعاجز في التكيف مع الواقع بعد النكبة، اسعد يتذكر الماضي ولكن لديه أكبر سيطرة في الحاضر',
            description3: 'أبو قيس، الأكبر بين الرجال الثلاثة، يمثل الجيل الأكبر سنا، وهو تذكير بفلسطين، كما كانت في الماضي. لديه ارتباط قوي بأشجار الزيتون وأرضه، وهو نادم على ترك منزله في فلسطين. يسافر إلى الكويت بداعي الخجل والحاجة إلى استعادة ما فقده',
            // description: 'These men are....',
            location: {
                center: [40.24918, 31.47661],
                zoom: 5.68,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        //has all origins and destinations as just simple points
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            // title: 'Third Title',
            description: '<span style="color: #D93D5C"><i>انقر على نقطة رمادية على الخريطة لقراءة موقعها أو استمر في التمرير لعرض القصة<\i><\span>',
            location: {
                center: [40.24918, 31.47661],
                zoom: 5.68,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [34.78160, 32.02187], //qais
                // destination: [35.28463, 32.71906],
                color: "white",
                icon: "locationMarker-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "S1",
                text: "قرية قريبة من يافا، فلسطين"
                // iconSize: .5, // Set the icon size for this marker

                },
                {origin: [34.86161, 31.92999], //assad
                // destination: [34.74845, 32.05105],
                color: "white",
                icon: "locationMarker-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "S2",
                text: "الرملة، فلسطين"
                // iconSize: .5, // Set the icon size for this marker

                },
                {origin: [35.08703, 32.91745], //marwan
                // destination: [34.74845, 32.05105],
                color: "white",
                icon: "locationMarker-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "S3",
                text: "عكا، فلسطين"
                // iconSize: .5, // Set the icon size for this marker

                },
                {origin: [38.93271, 33.43336], //qais
                // destination: [34.74845, 32.05105],
                color: "white",
                icon: "locationMarker-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "S4",
                text: "مخيم الوليد للاجئين، العراق"
                // iconSize: .5, // Set the icon size for this marker

                },
                {origin: [35.93962, 31.93019], //assad
                // destination: [34.74845, 32.05105],
                color: "white",
                icon: "locationMarker-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "S5",
                text: "عمان، الأردن"
                // iconSize: .5, // Set the icon size for this marker

                },
                {origin: [43.66050, 34.60925], //marwan
                // destination: [34.74845, 32.05105],
                color: "white",
                icon: "locationMarker-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "S6",
                text: "مخيم الكرامة للاجئين، العراق"
                // iconSize: .5, // Set the icon size for this marker

                },
                {origin: [47.80551, 30.53819], //basra
                // destination: [34.74845, 32.05105],
                color: "white",
                icon: "locationMarker-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "S7",
                text: "البصرة، العراق"
                // iconSize: .5, // Set the icon size for this marker

                },
                {origin: [47.71766, 30.12715], //crossing 1
                // destination: [34.74845, 32.05105],
                color: "white",
                icon: "locationMarker-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "S8",
                text: "سفوان، حدود العراق"
                // iconSize: .5, // Set the icon size for this marker

                },
                {origin: [47.63514, 29.57875], //crossing 2
                // destination: [34.74845, 32.05105],
                color: "white",
                icon: "locationMarker-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "S9",
                text: "المطلاع، حدود الكويت"
                // iconSize: .5, // Set the icon size for this marker

                },
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        //has origins
        {
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: "فلسطين قبل النكبة",
            // image: './path/to/image/source.png',
            description:"قبل نكبة عام ١٩٤٨ كان الرجال الثلاثة يعيشون في فلسطين مع عائلاتهم.  اسعد من الرملة و ابو قيس من قرية قريبة من يافا. لا نعرف بالضبط من وين مروان، فوضعته في شمال فلسطين، في عكا، حيث ينتمي كنفان<br><br><i>مثلت أبو قيس و مروان بخطوط منقطة لتمثيل الشكوك حول من أين هم<\i><br><br><span style='color: #D93D5C'>انقر على الرموز لمعرفة اكثر<\span>",
            location: {
                center: [34.92452, 31.94914],
                zoom: 7.5,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [34.78160, 32.02187], //village near Jaffa
                // destination: [35.28463, 32.71906],
                color: "#3D8DD9",
                icon: "qais_outlined-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "Q1",
                text: 'عاش أبو قيس في قرية قريبة من يافا مع زوجته وابنه قيس حتى هجوم الجيش الإسرائيلي<br><br><img src="https://github.com/madgallop/kanafani-journey/blob/main/assets/images/QaisVillageNearYaffa.png?raw=true" alt="Image Alt Text" style="width: 200px; height: auto;">',
                image: "https://github.com/madgallop/kanafani-journey/blob/main/assets/images/QaisVillageNearYaffa.png?raw=true"
                },
                {origin: [34.86161, 31.92999], //Ramla
                // destination: [34.74845, 32.05105],
                color: "#D93DBB",
                icon: "assad_icon-03",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "A1",
                text: 'اسعد من مدينة الرملة في فلسطين، وذهب إلى عمان بعد النكبة',
                },
                {origin: [35.07506, 32.92854], //Acre?? 
                // destination: [34.74845, 32.05105],
                color: "#D99E3D",
                icon: "marwan_outlined-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "M1",
                text: "مروان من فلسطين، ولكننا لا نعرف الكثير عن حياته قبل النكبة، ربما لا يملك ذكريات عنها"
                },
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        //first chapter with origins and destinations 
        {
            id: 'chapter-5',
            alignment: 'left',
            hidden: false,
            title: 'مخيمات اللاجئين بعد النكبة',
            // image: './path/to/image/source.png',
            description: 'بعد النكبة، يغادر الرجال فلسطين ويعيشون لمدة عشر سنوات في مخيمات اللاجئين خارج البلاد. ذهب أسعد إلى عمان، وبينما لا نعرف أين ذهب أبو قيس ومروان، اعتقدت أنهم ربما ذهبوا إلى مخيمات اللاجئين الفلسطينيين داخل العراق. الظروف صعبة في المخيمات، والرجال يحلمون بحياة مختلفة<br><br><span style="color: #D93D5C">انقر على الرموز لمعرفة اكثر<\span>',
            location: {
                center: [36.91460, 31.54914], 
                zoom: 5.5,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [34.78160, 32.02187], //village near Jaffa
                destination: [38.93271, 33.43336],
                color: "#3D8DD9",
                icon: "qais_outlined-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "Q2",
                text: 'ذهب أبو قيس وعائلته إلى مخيم للاجئين خارج فلسطين (بعيداً عن خط النار) حيث سيقضون السنوات العشر القادمة. شعر أبو قيس بالخجل من ترك أرضه، وبالضغط من أجل إعالة أسرته. رجل عاد مؤخراً من الكويت يصف التجربة ويخبر أبو قيس أنه فقد شبابه وبلده. وبعد ذلك يقرر أبو قيس الذهاب إلى الكويت<br><br><img src="https://github.com/madgallop/kanafani-journey/blob/main/assets/images/QaisRefugeeCamp.png?raw=true" alt="Image Alt Text" style="width: 200px; height: auto;">',
                },
                {origin: [34.86161, 31.92999], //Ramla
                destination: [35.93962, 31.93019],
                color: "#D93DBB",
                icon: "assad_icon-03",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "A2",
                text: 'في عمان، يواجه اسعد مشاكل مع الشرطة بسبب أنشطته الناشطة. وفي النهاية، يعطيه عمه المال ليذهب إلى الكويت، على أمل أن يعود اسعد ويتزوج بنته. اسعد لا يريد الزواج من البنت، لكنه يأخذ الفلوس ويذهب إلى الكويت<br><br><img src="https://github.com/madgallop/kanafani-journey/blob/main/assets/images/AssadJordan.png?raw=true" alt="Image Alt Text" style="width: 200px; height: auto;">',
                },
                {origin: [35.08703, 32.91745], //Acre?? 
                destination: [43.66050, 34.60925],
                color: "#D99E3D",
                icon: "marwan_outlined-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "M2",
                text: 'بعد النكبة، عاش مروان وعائلته في مخيم للاجئين خارج فلسطين. أرسل أخه زكريا أموال للعائلة، لكنه توقف بعد أن تزوج سراً. بعد ذلك، ترك والد مروان العائلة، ليتزوج ويعيش في منزل مع امرأة أخرى، وجاء دور مروان ليذهب "يغوص في المقلاة<br><br><img src="https://github.com/madgallop/kanafani-journey/blob/main/assets/images/MarwanRefugeeCamp.png?raw=true" alt="Image Alt Text" style="width: 200px; height: auto;">',
                },
            ],
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-6',
            alignment: 'left',
            hidden: false,
            title: 'البصرة عام ١٩٥٨',
            image: 'https://github.com/madgallop/kanafani-journey/blob/main/assets/images/allTheMenInBasra.png?raw=true',
            description: 'تلتقي رحلات الرجال الثلاثة في حرارة شهر أغسطس عام ١٩٥٨ في البصرة، بعد عشر سنوات من النكبة. يحاولون لايجاد على مهرب لنقلهم عبر الحدود إلى الكويت. توصلوا إلى اتفاق مع رجل اسمه أبو الخيزران الذي يوافق على لأخذهم إلى الكويت داخل شاحنته<br><br><span style="color: #D93D5C">انقر على الرموز لمعرفة اكثر<\span>',
            location: {
                center: [41.22126, 31.54914],
                zoom: 5.8,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [38.93271, 33.43336], //village near Jaffa
                destination: [47.80551, 30.53819],
                color: "#3D8DD9",
                icon: "qais_icon-04",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "Q3",
                text: 'وصل أبو قيس شمال البصرة إلى منطقة تسمى شط العرب حيث يلتقي نهرا دجلة والفرات فيشكلان نهرا واحدا. وجد نفسه في بستان من أشجار النخيل بجانب الماء<br><br><img src="https://github.com/madgallop/kanafani-journey/blob/main/assets/images/AbuQaisShatAlArab.png?raw=true" style="width: 200px; height: auto;">',
                },
                {origin: [35.93962, 31.93019], //Ramla
                destination: [47.80551, 30.53819],
                color: "#D93DBB",
                icon: "assad_icon-03",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "A3",
                text: 'واجه اسعد رحلة صعبة إلى البصرة. وافق أحد المهربين على نقله من عمان إلى بغداد، لكن المهرب طلب من اسعد أن يتجول في منطقة H4 في الأردن ثم تركه. وجدوه زوجان أجنبيان على الطريق وأخذوه إلى البصرة. وهناك أقام في فندق الشط مع مروان وساعد الرجال في التفاوض<br><br><img src="https://github.com/madgallop/kanafani-journey/blob/main/assets/images/AssadH4.png?raw=true" style="width: 200px; height: auto;">',
                },
                {origin: [43.60170, 34.64992], //Acre?? 
                destination: [47.80551, 30.53819],
                color: "#D99E3D",
                icon: "marwan_icon-02",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "M3",
                text: 'يصل مروان إلى البصرة، ويفشل في الاتفاق مع مهرب غاضب. يعرض رجل اسمه أبو الخيزيران المساعدة. مروان في فندق الشط حيث يلتقي باسعد<br><br><img src="https://github.com/madgallop/kanafani-journey/blob/main/assets/images/MarwanBasra.png?raw=true" style="width: 200px; height: auto;">',
                },
                {origin: [47.80551, 30.53819], //basra
                color: "#3D8DD9",
                icon: "truck_icon-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "AB1",
                text:'أبو الخيزران<br><br><img src="https://github.com/madgallop/kanafani-journey/blob/main/assets/images/AbulKeizuran.png?raw=true" style="width: 200px; height: auto;">',
                },
            ],
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-7',
            alignment: 'left',
            hidden: false,
            title: 'من البصرة إلى صفوان',
            image: 'https://github.com/madgallop/kanafani-journey/blob/main/assets/images/FirstStop.png?raw=true',
            description: 'يقود الرجال السيارة حتى السيارة قريبة من مكتب الحدود العراقية في صفوان. يدخل أبو قيس وأسعد ومرقان إلى خزان المياه، و يخبرهم أبو خيزران أنه سيفتح الخزان بعد خمسة أو ستة دقائق',
            location: {
                center: [47.36687, 29.92355],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [47.80551, 30.53819], //village near Jaffa
                destination: [47.71766, 30.16815],
                color: "#5C8451",
                icon: "truck_icon-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "S1",
                // text: "Abul Kheizuran takes the three men to Safwa, where they get into the tank for the first time.”"
                }
            ],
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-8',
            alignment: 'left',
            hidden: false,
            title: 'مكتب حدود سفوان',
            image: 'https://github.com/madgallop/kanafani-journey/blob/main/assets/images/AbuInTheOfficeStop1.png?raw=true',
            description: 'أبو الخيزران يتعامل مع الضباط على الحدود العراقية بينما ينتظر الرجال في خزان المياه',
            location: {
                center: [47.36687, 29.92355],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [47.71766, 30.16815], //village near Jaffa
                destination: [47.71500, 30.12493],
                color: "#5C8451",
                icon: "truck_icon-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "S2",
                // text: "Then men get out near a hill hiding Sawfa, prepare to cross into Kuwait.”"
                }
            ],
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-9',
            alignment: 'left',
            hidden: false,
            title: 'مكتب حدود سفوان إلى ٥٠م خارجه',
            image: 'https://github.com/madgallop/kanafani-journey/blob/main/assets/images/PostBorderStop1.png?raw=true',
            description: 'يفتح أبو الخيزران الخزان بعد ست دقائق. الرجال متعبون وضعفاء. مروان يعبر خوفه من وصوله إلى الكويت حيا',
            location: {
                center: [47.36687, 29.92355],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [47.71500, 30.12493], //village near Jaffa
                destination: [47.71438, 30.10117],
                color: "#5C8451",
                icon: "truck_icon-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "S3",
                }
            ],
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-10',
            alignment: 'left',
            hidden: false,
            title: 'قريب من مكتب حدود الكويت',
            image: 'https://github.com/madgallop/kanafani-journey/blob/main/assets/images/preBorder2Shot.png?raw=true',
            description: 'مرة أخرى، يجب على الرجال دخول خزان المياه. يقول أبو خيزران إنه سيفتحه هذه المرة بعد سبع دقائق',
            location: {
                center: [47.36687, 29.92355],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [47.71438, 30.10117], //village near Jaffa
                destination: [47.70148, 30.07836],
                color: "#5C8451",
                icon: "truck_icon-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "S4",
                }
            ],
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-11', //border office two
            alignment: 'left',
            hidden: false,
            title: 'في مكتب الحدود الكويتية',
            image: 'https://github.com/madgallop/kanafani-journey/blob/main/assets/images/borderStop2.png?raw=true',
            description: 'هذه المرة، يقضي أبو خيزران وقت طويل في مكتب الحدود حيث يسأله الرجال هناك عن راقصة يعتقدون أنه كان يراها في البصرة. هذا المشهد متوتر وساخر، حيث أن أبو خيزران عاجزاً جنسياً. يمزح الضباط مع أبو خيزران وهو يحاول المغادرة. يستمر الحدث بأكمله أكثر من عشرين دقيقة.<br><br>في الفيلم، يضرب الرجال الموجودون في خزان المياه جوانبه مع مرور الوقت، ويقاومون حالتهم، لكن في الكتاب يظل الرجال في صمت',
            location: {
                center: [47.36687, 29.92355],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [47.70148, 30.07836], //village near Jaffa
                destination: [47.66433, 30.03867],
                color: "#5C8451",
                icon: "truck_icon-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "S5",
                }
            ],
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-12', //stop 50k from border office
            alignment: 'left',
            hidden: false,
            title: 'على بعد ٥٠م من مكتب الحدود الكويتي',
            image: 'https://github.com/madgallop/kanafani-journey/blob/main/assets/images/postBorder2Stop.png?raw=true',
            description: 'يقود أبو خيزران سيارته بسرعة إلى مكان مخفي وينظر بخوف إلى خزان المياه. لا يوجد صوت، فقط الصمت. ويقول اسم اسعد ولكن لا يوجد رد. يدخله، ويعلم أن اسعد ومروان وأبو قيس قد ماتوا',
            location: {
                center: [47.36687, 29.92355],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [47.66433, 30.03867], //village near Jaffa
                destination: [47.65949, 29.96426],
                color: "#5C8451",
                icon: "truck_icon-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "S6",
                }
            ],
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-14', //dumping bodies step-- adjust locations 
            alignment: 'left',
            hidden: false,
            title: 'منطقة القمامة خارج مدينة الكويت',
            image: 'https://github.com/madgallop/kanafani-journey/blob/main/assets/images/FinalDump.png?raw=true',
            description: 'يأخذ جثث الرجال إلى منطقة القمامة خارج مدينة الكويت. يترك الجثث هناك بعد أن أخذ أموالهم وساعة مروان. في الكتاب، عنده أبو الخيزران فكرة واحدة فقط، ويكررها عبر الصحراء: <br><br><i><span style="color: #D93D5C">لماذة لم يدقوا جران الخزان؟<\span><\i>',
            location: {
                center: [47.6000, 29.57875],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [47.65949, 29.96426],
                destination: [47.6000, 29.57875], //final destination 
                color: "#5C8451",
                icon: "truck_icon-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "S7",
                },
                {origin: [47.45000, 29.57875], //final destination 
                color: "#5C8451",
                icon: "dead-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "D1",
                text: "Abul Kheizuran is too late, the three men have died by the time they cross into Kuwait near Mutlaa. he takes thier bodies and dumps them outside the city.”"
                },
                {origin: [47.40000, 29.57875], //village near Jaffa
                color: "#5C8451",
                icon: "dead-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "D2",
                text: "Abul Kheizuran is too late, the three men have died by the time they cross into Kuwait near Mutlaa. he takes thier bodies and dumps them outside the city.”"
                },
                {origin: [47.35000, 29.57875], //village near Jaffa
                color: "#5C8451",
                icon: "dead-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "D3",
                text: "Abul Kheizuran is too late, the three men have died by the time they cross into Kuwait near Mutlaa. he takes thier bodies and dumps them outside the city.”"
                },
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-15', //overview map and concluding statement -- write concluding statement 
            alignment: 'center',
            hidden: false,
            // title: 'Third Title',
            // image: './path/to/image/source.png',
            description: '<span style="color: #AA1823">نهاية القصة حزينة ويائسة. سافر الرجال في القصة عبر الشرق الأوسط من فلسطين إلى الحدود الكويتية، بحثا عن حياة أفضل لأنفسهم ولأسرهم. نجوا من النكبة، وعشر سنوات في مخيمات اللاجئين، ورحلات صعبة إلى البصرة، لتنتهي حياتهم دقائق من الكويت على أيدي أنظمة فاسدة وظروف غير عادلة. في حين أن كل قصة مختلفة، الأجيال الثلاثة من الرجال الفلسطينيين الذين يمثلهم أبو قيس واسعد ومروان يمثلون الخيارات المستحيلة التي يواجهها الفلسطينيون تحت ظروف ظالمة الاحتلال الإسرائيلي  وخارجه<\span>',
            location: {
                center: [40.24918, 31.47661],
                zoom: 5.68,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [47.45000, 29.57875], //final destination 
                color: "#5C8451",
                icon: "dead-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "D1",
                // text: "Abul Kheizuran is too late, the three men have died by the time they cross into Kuwait near Mutlaa. he takes thier bodies and dumps them outside the city.”"
                },
                {origin: [47.40000, 29.57875], //village near Jaffa
                color: "#5C8451",
                icon: "dead-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "D2",
                // text: "Abul Kheizuran is too late, the three men have died by the time they cross into Kuwait near Mutlaa. he takes thier bodies and dumps them outside the city.”"
                },
                {origin: [47.35000, 29.57875], //village near Jaffa
                color: "#5C8451",
                icon: "dead-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "D3",
                // text: "Abul Kheizuran is too late, the three men have died by the time they cross into Kuwait near Mutlaa. he takes thier bodies and dumps them outside the city.”"
                },
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
