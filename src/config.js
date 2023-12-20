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
    title: 'رحلات رجال في الشمس',
    subtitle: 'Memory, dreams, and reality',
    byline: 'Madeleine Gallop',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'full',
            // hidden: false,
            // title: 'Introduction and ',
            image: '/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/meninthesuncover-01.jpg',
            description: 'Three Palestinian men take journeys hoping to reach Kuwait....',
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
            image1: 'data:image/jpeg;base64,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',
            image2: '/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/images/AssadHeadshot.png',
            image3: '/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/images/AbuQaisHead.png',
            marker1: true,
            marker2: true,
            marker3: true,
            description1: 'Marwan',
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
            description: "نعلم أن كل رجل غادر فلسطين في نكبة عام ١٩٤٨. اسعد من الرملة و ابو قيس من قرية قريبة من يافا. لا نعرف بالضبط من وين مروان،  فوضعته في شمال فلسطين، في عكا، حيث ينتمي كنفاني. <br><br><i><span style='color: #777777'>مثلت أبو قيس و مروان بخطوط منقطة لتمثيل الشكوك حول من أين هم<\i><\span><br><br><span style='color: #D93D5C'>انقر على الرموز لمعرفة اكثر<\span>",
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
                text: 'عاش أبو قيس في قرية قريبة من يافا مع زوجته وابنه قيس حتى هجوم الجيش الإسرائيلي<br><br><img src="/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/images/QaisVillageNearYaffa.png" alt="Image Alt Text" style="width: 200px; height: auto;">',
                image: "/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/images/QaisVillageNearYaffa.png"
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
                text: "مروان، من فلسطين"
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
            hidden: true,
            title: 'Third Title',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
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
                text: 'ذهب أبو قيس وعائلته إلى مخيم للاجئين خارج فلسطين (بعيداً عن خط النار) حيث سيقضون السنوات العشر القادمة. شعر أبو قيس بالخجل من ترك أرضه، وبالضغط من أجل إعالة أسرته. رجل عاد مؤخراً من الكويت يصف التجربة ويخبر أبو قيس أنه فقد شبابه وبلده. وبعد ذلك يقرر أبو قيس الذهاب إلى الكويت<br><br><img src="/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/images/QaisRefugeeCamp.png" alt="Image Alt Text" style="width: 200px; height: auto;">',
                },
                {origin: [34.86161, 31.92999], //Ramla
                destination: [35.93962, 31.93019],
                color: "#D93DBB",
                icon: "assad_icon-03",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "A2",
                text: 'في عمان، يواجه اسعد مشاكل مع الشرطة بسبب أنشطته الناشطة. وفي النهاية، يعطيه عمه المال ليذهب إلى الكويت، على أمل أن يعود اسعد ويتزوج بنته. اسعد لا يريد الزواج من البنت، لكنه يأخذ الفلوس ويذهب إلى الكويت<br><br><img src="/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/images/AssadJordan.png" alt="Image Alt Text" style="width: 200px; height: auto;">',
                },
                {origin: [35.08703, 32.91745], //Acre?? 
                destination: [43.66050, 34.60925],
                color: "#D99E3D",
                icon: "marwan_outlined-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "M2",
                text: "Marwan's brother fled to Kuwait before him, leaving school when the family left Palestine."
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
            hidden: true,
            title: 'Third Title',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
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
                icon: "qais_outlined-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "Q3",
                text: 'وصل أبو قيس شمال البصرة إلى منطقة تسمى شط العرب حيث يلتقي نهرا دجلة والفرات فيشكلان نهرا واحدا. وجد نفسه في بستان من أشجار النخيل بجانب الماء<br><br><img src="/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/images/AbuQaisShatAlArab.png" style="width: 200px; height: auto;">',
                },
                {origin: [35.93962, 31.93019], //Ramla
                destination: [47.80551, 30.53819],
                color: "#D93DBB",
                icon: "assad_icon-03",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "A3",
                text: 'واجه اسعد رحلة صعبة إلى البصرة. وافق أحد المهربين على نقله من عمان إلى بغداد، لكن المهرب طلب من اسعد أن يتجول في منطقة H4 في الأردن ثم تركه. وجدوه زوجان أجنبيان على الطريق وأخذوه إلى البصرة. وهناك أقام في فندق الشط مع مروان وساعد الرجال في التفاوض<br><br><img src="/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/images/AssadH4.png" style="width: 200px; height: auto;">',
                },
                {origin: [43.60170, 34.64992], //Acre?? 
                destination: [47.80551, 30.53819],
                color: "#D99E3D",
                icon: "marwan_outlined-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/assad_icon-03.svg",
                id: "M3",
                text: "Marwan also stays in the Shatt Al-Arab hotel."
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
            hidden: true,
            title: 'Third Title',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [47.36687, 29.92355],
                zoom: 7.3,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [47.80551, 30.53819], //village near Jaffa
                destination: [47.71766, 30.12715],
                color: "#5C8451",
                icon: "truck_icon-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "S1",
                text: "Abul Kheizuran takes the three men to Safwa, where they get into the tank for the first time.”"
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
            hidden: true,
            title: 'Third Title',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [47.36687, 29.92355],
                zoom: 7.3,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [47.71766, 30.12715], //village near Jaffa
                destination: [47.70867, 30.10687],
                color: "#5C8451",
                icon: "truck_icon-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "S2",
                text: "Then men get out near a hill hiding Sawfa, prepare to cross into Kuwait.”"
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
            hidden: true,
            title: 'Third Title',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [47.36687, 29.92355],
                zoom: 7.3,
                pitch: 0,
                bearing: 0
            },
            routes: [
                {origin: [47.70867, 30.10687], //village near Jaffa
                destination: [47.63514, 29.57875],
                color: "#5C8451",
                icon: "truck_icon-01",//"/Users/madeleinegallop/Desktop/DimaFinalProject/storytelling-main/men-in-the-sun/assets/qais_icon-04.svg",
                id: "S3",
                text: "Abul Kheizuran is too late, the three men have died by the time they cross into Kuwait near Mutlaa. he takes thier bodies and dumps them outside the city.”"
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
            title: 'Third Title',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [47.36687, 29.92355],
                zoom: 7.3,
                pitch: 0,
                bearing: 0
            },
            routes: [
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
            id: 'chapter-11',
            alignment: 'left',
            hidden: true,
            title: 'Third Title',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [40.24918, 31.47661],
                zoom: 5.68,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
