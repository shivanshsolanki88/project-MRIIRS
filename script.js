  const schemesData = [
            {
                id: 1,
                name: "Mukhyamantri Parivar Samridhi Yojana",
                hindiName: "मुख्यमंत्री परिवार समृद्धि योजना",
                description: "Financial assistance scheme providing ₹6,000 per year to eligible families in Haryana.",
                hindiDescription: "वित्तीय सहायता योजना जो हरियाणा में पात्र परिवारों को प्रति वर्ष ₹6,000 प्रदान करती है।",
                category: "SC/ST/OBC Welfare",
                ministry: "Haryana Social Justice Department",
                state: "Haryana",
                type: "State",
                beneficiary: "Families",
                launchDate: "2019-08-20",
                lastUpdated: "2025-01-15",
                imageUrl: "https://1.bp.blogspot.com/-ayINaPHHieQ/XkocZD6hAfI/AAAAAAAASRQ/KBiY-JjibUgkLIlenHmgTaIxIZOeKxIlgCLcBGAsYHQ/s640/parivar-samriidhi-yojana-1.jpg",
                link: "https://saralharyana.gov.in/mps",
                eligibility: "Family income less than ₹1.8 lakh per annum, must be Haryana resident",
                hindiEligibility: "पारिवारिक आय प्रति वर्ष ₹1.8 लाख से कम, हरियाणा का निवासी होना चाहिए",
                benefits: "₹6,000 per year in three installments, additional benefits for girl child",
                documents: "Aadhaar card, residence proof, income certificate, bank account details",
                applicationProcess: "Online through Saral portal or at CSC centers"
            },
            {
                id: 2,
                name: "Haryana Kisan Samman Nidhi",
                hindiName: "हरियाणा किसान सम्मान निधि",
                description: "Additional income support of ₹5,000 per acre per year to farmers over central PM-KISAN scheme.",
                hindiDescription: "केंद्रीय पीएम-किसान योजना के अतिरिक्त किसानों को प्रति एकड़ प्रति वर्ष ₹5,000 की अतिरिक्त आय सहायता।",
                category: "Agriculture",
                ministry: "Haryana Agriculture Department",
                state: "Haryana",
                type: "State",
                beneficiary: "Farmers",
                launchDate: "2020-06-01",
                lastUpdated: "2025-03-10",
                imageUrl: "https://krushidukan.bharatagri.com/cdn/shop/articles/Blog_5_July_2023_1.webp?v=1688539656",
                link: "https://haryana.gov.in/kisan",
                eligibility: "Landholding farmers in Haryana, maximum 5 acres",
                hindiEligibility: "हरियाणा में भूमि धारक किसान, अधिकतम 5 एकड़",
                benefits: "₹5,000 per acre per year (max ₹25,000) in addition to PM-KISAN",
                documents: "Land records, Aadhaar, bank account details",
                applicationProcess: "Automatic for PM-KISAN beneficiaries, others can apply online"
            },
            {
                id: 3,
                name: "Mukhyamantri Antyodaya Parivar Utthan Yojana",
                hindiName: "मुख्यमंत्री अंत्योदय परिवार उत्थान योजना",
                description: "Comprehensive scheme for upliftment of poorest families with monthly income less than ₹15,000.",
                hindiDescription: "मासिक आय ₹15,000 से कम के सबसे गरीब परिवारों के उत्थान के लिए व्यापक योजना।",
                category: "SC/ST/OBC Welfare",
                ministry: "Haryana Social Justice Department",
                state: "Haryana",
                type: "State",
                beneficiary: "Poor Families",
                launchDate: "2024-01-01",
                lastUpdated: "2025-02-20",
                imageUrl: "https://pbs.twimg.com/media/E5SKE37VcAIJ2ZI.jpg",
                link: "https://saralharyana.gov.in/antyodaya",
                eligibility: "Family income < ₹15,000/month, priority to SC/ST families",
                hindiEligibility: "पारिवारिक आय < ₹15,000/माह, एससी/एसटी परिवारों को प्राथमिकता",
                benefits: "Monthly pension, education support, health insurance, skill development",
                documents: "Aadhaar, income certificate, caste certificate (if applicable)",
                applicationProcess: "Online application through Saral portal with verification by local officials"
            },
            {
                "id": 4,
                    "name": "Haryana State Meritorious Incentives Scheme",
                    "hindiName": "हरियाणा राज्य मेधावी प्रोत्साहन योजना",
                    "description": "Financial incentives for top-performing students in each stream to encourage academic excellence.",
                    "hindiDescription": "प्रत्येक स्ट्रीम में शीर्ष प्रदर्शन करने वाले छात्रों को शैक्षणिक उत्कृष्टता को प्रोत्साहित करने के लिए वित्तीय प्रोत्साहन।",
                    "category": "Education",
                    "ministry": "Department of Higher Education, Haryana",
                    "state": "Haryana",
                    "type": "State",
                    "beneficiary": "Top-performing students in each stream",
                    "launchDate": "2005-06-01",
                    "lastUpdated": "2025-01-05",
                    "imageUrl": "https://scholarshipstatuscheck.com/wp-content/uploads/2023/12/Haryana-State-Meritorious-Incentive-Scheme-1.jpg",
                    "link": "https://www.theglobalscholarship.org/scholarships/haryana-state-meritorious-incentives-scheme",
                    "eligibility": "Top three students in each stream; Haryana domicile",
                    "hindiEligibility": "प्रत्येक स्ट्रीम में शीर्ष तीन छात्र; हरियाणा निवासी",
                    "benefits": "₹5,000 for first position, ₹3,000 for second, ₹2,000 for third",
                    "documents": "Mark sheets, domicile certificate",
                    "applicationProcess": "Apply through the official scholarship portal with required documents"
            },
            {
                id: 5,
                name: "Mukhyamantri Mahila Udyamita Yojana",
                hindiName: "मुख्यमंत्री महिला उद्यमिता योजना",
                description: "Interest-free loans up to ₹3 lakh for women entrepreneurs in Haryana.",
                hindiDescription: "हरियाणा में महिला उद्यमियों के लिए ₹3 लाख तक का ब्याज मुक्त ऋण।",
                category: "Women",
                ministry: "Haryana Women and Child Development Department",
                state: "Haryana",
                type: "State",
                beneficiary: "Women",
                launchDate: "2023-03-08",
                lastUpdated: "2025-03-01",
                imageUrl: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/opportunity-bannerImages/1726048799.png",
                link: "https://haryanawcd.gov.in/udyamita",
                eligibility: "Women aged 18-55, Haryana resident, business plan",
                hindiEligibility: "18-55 वर्ष की महिलाएं, हरियाणा निवासी, व्यवसाय योजना",
                benefits: "Interest-free loan up to ₹3 lakh, 5 year repayment",
                documents: "Aadhaar, residence proof, business plan, bank details",
                applicationProcess: "Online application with business proposal to District Industries Center"
            },
            {
                id: 6,
                name: "Haryana Gauvansh Samvardhan Yojana",
                hindiName: "हरियाणा गौवंश संवर्धन योजना",
                description: "Scheme for conservation and promotion of indigenous cattle with financial assistance.",
                hindiDescription: "वित्तीय सहायता के साथ देशी गायों के संरक्षण और प्रचार के लिए योजना।",
                category: "Agriculture",
                ministry: "Haryana Animal Husbandry Department",
                state: "Haryana",
                type: "State",
                beneficiary: "Farmers",
                launchDate: "2022-01-26",
                lastUpdated: "2025-02-15",
                imageUrl: "https://www.haryana.gov.in/wp-content/uploads/2022/01/gauvansh-samvardhan.jpg",
                link: "https://haryana.gov.in/gauvansh",
                eligibility: "Haryana farmers with indigenous cattle",
                hindiEligibility: "देशी गायों वाले हरियाणा के किसान",
                benefits: "₹30,000 per indigenous cow, insurance coverage",
                documents: "Aadhaar, cattle ownership proof, bank details",
                applicationProcess: "Application at local veterinary hospital with cattle verification"
            },
            {
                id: 7,
                name: "Mukhyamantri Shehri Awas Yojana",
                hindiName: "मुख्यमंत्री शहरी आवास योजना",
                description: "Affordable housing scheme for urban poor with subsidy up to ₹2.5 lakh.",
                hindiDescription: "शहरी गरीबों के लिए ₹2.5 लाख तक की सब्सिडी के साथ किफायती आवास योजना।",
                category: "Housing",
                ministry: "Haryana Urban Local Bodies Department",
                state: "Haryana",
                type: "State",
                beneficiary: "Urban Poor",
                launchDate: "2021-10-02",
                lastUpdated: "2025-01-30",
                imageUrl: "https://www.haryana.gov.in/wp-content/uploads/2021/10/shehri-awas-yojana.jpg",
                link: "https://haryana.gov.in/shehriawas",
                eligibility: "Urban residents with annual income < ₹3 lakh, no pucca house",
                hindiEligibility: "वार्षिक आय < ₹3 लाख, कोई पक्का घर नहीं",
                benefits: "Subsidy up to ₹2.5 lakh, low-interest loans",
                documents: "Income certificate, residence proof, Aadhaar",
                applicationProcess: "Online application through HAREGA portal with document verification"
            },
            {
                id: 8,
                name: "Haryana Prerit Vikas Yojana",
                hindiName: "हरियाणा प्रेरित विकास योजना",
                description: "Skill development program with stipend for unemployed youth in Haryana.",
                hindiDescription: "हरियाणा में बेरोजगार युवाओं के लिए स्टाइपेंड के साथ कौशल विकास कार्यक्रम।",
                category: "Employment",
                ministry: "Haryana Skill Development Department",
                state: "Haryana",
                type: "State",
                beneficiary: "Unemployed",
                launchDate: "2024-04-01",
                lastUpdated: "2025-03-15",
                imageUrl: "https://www.haryana.gov.in/wp-content/uploads/2024/03/prerit-vikas-yojana.jpg",
                link: "https://haryanaskill.gov.in/prerit",
                eligibility: "Haryana youth aged 18-35, unemployed, minimum 10th pass",
                hindiEligibility: "18-35 वर्ष के हरियाणा के युवा, बेरोजगार, न्यूनतम 10वीं पास",
                benefits: "3-6 months training with ₹5,000 monthly stipend, placement assistance",
                documents: "Aadhaar, educational certificates, unemployment affidavit",
                applicationProcess: "Online registration at Haryana Skill Development portal"
            },
            {
                id: 9,
                name: "Haryana Divyangjan Pension Yojana",
                hindiName: "हरियाणा दिव्यांगजन पेंशन योजना",
                description: "Monthly pension scheme for persons with disabilities in Haryana.",
                hindiDescription: "हरियाणा में दिव्यांग व्यक्तियों के लिए मासिक पेंशन योजना।",
                category: "Disabled",
                ministry: "Haryana Social Justice Department",
                state: "Haryana",
                type: "State",
                beneficiary: "Disabled",
                launchDate: "2020-01-01",
                lastUpdated: "2025-02-10",
                imageUrl: "https://www.haryana.gov.in/wp-content/uploads/2020/01/divyang-pension.jpg",
                link: "https://haryanasocialjustice.gov.in/divyang",
                eligibility: "Haryana resident with 40%+ disability, family income < ₹3 lakh",
                hindiEligibility: "40%+ दिव्यांगता वाले हरियाणा निवासी, पारिवारिक आय < ₹3 लाख",
                benefits: "₹2,500 per month pension, additional benefits for severe disabilities",
                documents: "Disability certificate, Aadhaar, income proof, bank details",
                applicationProcess: "Online application through Saral portal or at district social welfare office"
            },
            {
                "id": 10,
                "name": "Post Matric Scholarship for SC Students",
                "hindiName": "अनुसूचित जाति छात्रों के लिए पोस्ट मैट्रिक छात्रवृत्ति",
                "description": "Scholarship for SC students pursuing post-matric education to support their academic journey.",
                "hindiDescription": "पोस्ट-मैट्रिक शिक्षा प्राप्त कर रहे अनुसूचित जाति के छात्रों के लिए छात्रवृत्ति।",
                "category": "Education",
                "ministry": "Department of Social Justice and Empowerment",
                "state": "Haryana",
                "type": "State",
                "beneficiary": "SC students pursuing post-matric education",
                "launchDate": "2006-07-01",
                "lastUpdated": "2025-01-05",
                "imageUrl": "https://iirfranking.com/scholarship/wp-content/uploads/2022/09/Post-Matric-Scholarship-For-SC-Students.jpg",
                "link": "https://haryanascbc.gov.in/post-matric-scholarship-scheme-for-sc-students",
                "eligibility": "SC students with family income less than ₹2.5 lakh per annum",
                "hindiEligibility": "पारिवारिक आय ₹2.5 लाख प्रति वर्ष से कम वाले अनुसूचित जाति के छात्र",
                "benefits": "Tuition fee reimbursement and maintenance allowance",
                "documents": "Caste certificate, income certificate, academic records",
                "applicationProcess": "Apply online through the official portal with necessary documents"
            },
            {
                id: 11,
                name: "Haryana Solar Pump Scheme",
                hindiName: "हरियाणा सोलर पंप योजना",
                description: "Subsidy scheme for solar-powered irrigation pumps for farmers.",
                hindiDescription: "किसानों के लिए सौर ऊर्जा से चलने वाले सिंचाई पंपों के लिए सब्सिडी योजना।",
                category: "Agriculture",
                ministry: "Haryana Renewable Energy Department",
                state: "Haryana",
                type: "State",
                beneficiary: "Farmers",
                launchDate: "2022-04-01",
                lastUpdated: "2025-03-05",
                imageUrl: "https://www.haryana.gov.in/wp-content/uploads/2022/04/solar-pump-scheme.jpg",
                link: "https://haryanarenewable.gov.in/solarpump",
                eligibility: "Haryana farmers with agricultural land, no existing solar pump",
                hindiEligibility: "कृषि भूमि वाले हरियाणा के किसान, कोई मौजूदा सोलर पंप नहीं",
                benefits: "Up to 75% subsidy on solar pumps (max ₹1.5 lakh for 5HP pump)",
                documents: "Land records, Aadhaar, bank details, farmer certificate",
                applicationProcess: "Online application through HAREDA portal with technical inspection"
            },
            {
                id: 12,
                name: "Haryana Startup Policy",
                hindiName: "हरियाणा स्टार्टअप पॉलिसी",
                description: "Support scheme for startups with funding, mentorship and infrastructure support.",
                hindiDescription: "फंडिंग, मेंटरशिप और बुनियादी ढांचे के समर्थन के साथ स्टार्टअप्स के लिए सहायता योजना।",
                category: "Employment",
                ministry: "Haryana Industries Department",
                state: "Haryana",
                type: "State",
                beneficiary: "Entrepreneurs",
                launchDate: "2024-01-01",
                lastUpdated: "2025-02-28",
                imageUrl: "https://www.haryana.gov.in/wp-content/uploads/2024/01/startup-policy.jpg",
                link: "https://haryanaindustries.gov.in/startup",
                eligibility: "Registered startup less than 5 years old, innovative business model",
                hindiEligibility: "पंजीकृत स्टार्टअप 5 साल से कम पुराना, नवीन व्यावसायिक मॉडल",
                benefits: "Up to ₹25 lakh grant, 100% stamp duty exemption, incubation support",
                documents: "Startup registration, business plan, financial projections, team details",
                applicationProcess: "Online application through Haryana Startup Portal with pitch presentation"
            },
            
  {
   
    id: 14,
    name: "Bhavantar Bharpai Yojana",
    hindiName: "भावांतर भरपाई योजना",
    description: "Price deficiency payment scheme to compensate farmers when market price falls below MSP.",
    hindiDescription: "जब बाजार मूल्य एमएसपी से नीचे चला जाता है, तो किसानों को मूल्य अंतर की भरपाई के लिए सहायता।",
    category: "Agriculture",
    ministry: "Haryana Horticulture Department",
    state: "Haryana",
    type: "State",
    beneficiary: "Horticulture Farmers",
    launchDate: "2020-07-15",
    lastUpdated: "2025-02-01",
    imageUrl: "https://hortharyana.gov.in/images/bby-banner.jpg",
    link: "https://hortharyana.gov.in/en/bhavantar-bharpai-yojana",
    eligibility: "Farmers growing notified horticultural crops in Haryana and registered on 'Meri Fasal Mera Byora'.",
    hindiEligibility: "हरियाणा में अधिसूचित बागवानी फसलें उगाने वाले और मेरी फसल मेरा ब्यौरा पोर्टल पर पंजीकृत किसान।",
    benefits: "Compensation for difference between MSP and average market price for specified crops.",
    documents: "Crop details, land ownership proof, Aadhaar, bank account details",
    applicationProcess: "Register on 'Meri Fasal Mera Byora' portal during cropping season"
},
{
    id: 15,
    name: "Mera Pani Meri Virasat",
    hindiName: "मेरा पानी मेरी विरासत",
    description: "Incentivizes farmers to shift from water-intensive crops like paddy to sustainable alternatives.",
    hindiDescription: "किसानों को धान जैसे जल-गहन फसलों से वैकल्पिक फसलों की ओर स्थानांतरित करने के लिए प्रोत्साहन।",
    category: "Agriculture",
    ministry: "Haryana Agriculture & Farmers Welfare Department",
    state: "Haryana",
    type: "State",
    beneficiary: "Farmers growing paddy",
    launchDate: "2020-05-15",
    lastUpdated: "2025-01-10",
    imageUrl: "https://cdn.downtoearth.org.in/library/large/2020-06-04/0.71997700_1591268852_farmers-in-kurukshetra.jpg",
    link: "https://agriharyana.gov.in/",
    eligibility: "Paddy-growing farmers shifting to pulses, maize or vegetables",
    hindiEligibility: "धान की जगह दालें, मक्का या सब्जियां उगाने वाले किसान",
    benefits: "₹7,000 per acre",
    documents: "Aadhaar, land records, crop sowing proof",
    applicationProcess: "Apply via Meri Fasal Mera Byora"
},
{
    id: 16,
    name: "Seed Subsidy Scheme",
    hindiName: "बीज सब्सिडी योजना",
    description: "Provides subsidies on certified seeds of wheat, mustard, etc.",
    hindiDescription: "गेहूं, सरसों आदि के प्रमाणित बीजों पर सब्सिडी।",
    category: "Agriculture",
    ministry: "Haryana Agriculture Department",
    state: "Haryana",
    type: "State",
    beneficiary: "Registered farmers",
    launchDate: "2020-08-01",
    lastUpdated: "2025-02-25",
    imageUrl: "https://www.agrifarming.in/wp-content/uploads/2020/02/Seed-Subsidy.jpg",
    link: "https://agriharyana.gov.in/",
    eligibility: "Farmers with valid registration",
    hindiEligibility: "वैध पंजीकरण वाले किसान",
    benefits: "30–50% subsidy on seed purchase",
    documents: "Seed bill, Aadhaar, registration proof",
    applicationProcess: "Apply online through agriharyana.gov.in"
},
{
    id: 17,
    name: "Crop Insurance Scheme (PMFBY - State Enhanced)",
    hindiName: "फसल बीमा योजना (पीएमएफबीवाई - राज्य संशोधित)",
    description: "Covers crop loss due to natural calamities with state top-up subsidy.",
    hindiDescription: "प्राकृतिक आपदाओं के कारण फसल क्षति के लिए बीमा और राज्य द्वारा अतिरिक्त सब्सिडी।",
    category: "Agriculture",
    ministry: "Haryana Agriculture Insurance Cell",
    state: "Haryana",
    type: "State",
    beneficiary: "All enrolled farmers",
    launchDate: "2021-04-01",
    lastUpdated: "2024-11-15",
    imageUrl: "https://pmfby.gov.in/assets/img/PMFBY_slider_1.jpg",
    link: "https://pmfby.gov.in/",
    eligibility: "Farmers registered under PMFBY",
    hindiEligibility: "पीएमएफबीवाई के अंतर्गत पंजीकृत किसान",
    benefits: "Compensation for crop loss with added state benefits",
    documents: "Crop sowing details, Aadhaar, land records",
    applicationProcess: "Via CSC or PMFBY portal"
},
{
    id: 18,
    name: "Soil Health Card Scheme (State Enhanced)",
    hindiName: "मिट्टी स्वास्थ्य कार्ड योजना (राज्य संस्करण)",
    description: "Provides personalized soil analysis and fertility advice.",
    hindiDescription: "व्यक्तिगत मिट्टी विश्लेषण और उर्वरता संबंधी सलाह।",
    category: "Agriculture",
    ministry: "Haryana Soil Testing Lab",
    state: "Haryana",
    type: "State",
    beneficiary: "All farmers",
    launchDate: "2021-06-01",
    lastUpdated: "2024-10-20",
    imageUrl: "https://static.pib.gov.in/WriteReadData/userfiles/image/SHC165097.jpg",
    link: "https://soilhealth.dac.gov.in/",
    eligibility: "All farmers in Haryana",
    hindiEligibility: "हरियाणा के सभी किसान",
    benefits: "Free soil testing and crop-wise recommendation",
    documents: "Land details, Aadhaar",
    applicationProcess: "Through nearest agriculture office"
},
{
    id: 19,
    name: "Farm Machinery Bank Scheme",
    hindiName: "कृषि यंत्र बैंक योजना",
    description: "Custom Hiring Centres (CHCs) get up to 80% subsidy on equipment.",
    hindiDescription: "कस्टम हायरिंग केंद्रों को कृषि उपकरणों पर 80% तक की सब्सिडी।",
    category: "Agriculture",
    ministry: "Haryana Agriculture Engineering Department",
    state: "Haryana",
    type: "State",
    beneficiary: "Farmer groups/SHGs/Cooperatives",
    launchDate: "2020-09-01",
    lastUpdated: "2025-01-30",
    imageUrl: "https://agrimachinery.nic.in/ImageGallery/farm.jpg",
    link: "https://agrimachinery.nic.in/",
    eligibility: "Farmer groups or registered SHGs",
    hindiEligibility: "पंजीकृत किसान समूह या स्वयं सहायता समूह",
    benefits: "80% subsidy on machines",
    documents: "Group registration, bank details",
    applicationProcess: "Apply via agriharyana.gov.in"
},
{
    id: 20,
    name: "Organic Farming Scheme",
    hindiName: "जैविक खेती योजना",
    description: "Encourages organic farming with financial assistance and training.",
    hindiDescription: "जैविक खेती को बढ़ावा देने के लिए वित्तीय सहायता और प्रशिक्षण।",
    category: "Agriculture",
    ministry: "Haryana Horticulture Department",
    state: "Haryana",
    type: "State",
    beneficiary: "Small and marginal farmers",
    launchDate: "2021-03-10",
    lastUpdated: "2024-12-01",
    imageUrl: "https://vikaspedia.in/agriculture/organic-farming.jpg",
    link: "https://hortharyana.gov.in/",
    eligibility: "Farmers switching to organic practices",
    hindiEligibility: "जैविक खेती में परिवर्तित किसान",
    benefits: "₹10,000/acre/year for 3 years",
    documents: "Aadhaar, land records",
    applicationProcess: "Via horticulture department portal"
},
{
    id: 21,
    name: "Drip Irrigation Subsidy Scheme",
    hindiName: "ड्रिप सिंचाई सब्सिडी योजना",
    description: "Provides subsidy on micro-irrigation systems like drip and sprinkler.",
    hindiDescription: "ड्रिप और स्प्रिंकलर जैसे सूक्ष्म सिंचाई प्रणालियों पर सब्सिडी।",
    category: "Agriculture",
    ministry: "Haryana Agriculture Department",
    state: "Haryana",
    type: "State",
    beneficiary: "All farmers",
    launchDate: "2020-08-20",
    lastUpdated: "2024-10-01",
    imageUrl: "https://microirrigation.gov.in/Images/homeimg.jpg",
    link: "https://microirrigation.gov.in/",
    eligibility: "Farmers in water-stressed zones",
    hindiEligibility: "जल संकटग्रस्त क्षेत्रों के किसान",
    benefits: "Up to 80% subsidy on drip/sprinkler systems",
    documents: "Land proof, irrigation plan",
    applicationProcess: "Apply online at agriharyana portal"
},
{
    id: 22,
    name: "Agriculture Skill Development Program",
    hindiName: "कृषि कौशल विकास कार्यक्रम",
    description: "Skill-based training for farmers on modern techniques.",
    hindiDescription: "आधुनिक तकनीकों पर किसानों के लिए कौशल प्रशिक्षण।",
    category: "Agriculture",
    ministry: "Haryana Skill Development Mission",
    state: "Haryana",
    type: "State",
    beneficiary: "Rural youth and farmers",
    launchDate: "2021-01-05",
    lastUpdated: "2025-03-01",
    imageUrl: "https://skills.gov.in/images/slider/agriculture.jpg",
    link: "https://hsdm.org.in/",
    eligibility: "18–45 years old rural residents",
    hindiEligibility: "18–45 वर्ष के ग्रामीण निवासी",
    benefits: "Free training and certification",
    documents: "Aadhaar, residence proof",
    applicationProcess: "Register via HSDM portal"
},
  {
    "id": 23,
    "name": "Mukhya Mantri Muft Ilaj Yojana",
    "hindiName": "मुख्यमंत्री मुफ्त इलाज योजना",
    "description": "Free treatment for poor families in government hospitals.",
    "hindiDescription": "गरीब परिवारों को सरकारी अस्पतालों में मुफ्त इलाज।",
    "category": "Health",
    "ministry": "Health Department, Haryana",
    "state": "Haryana",
    "type": "State",
    "beneficiary": "BPL and EWS families",
    "launchDate": "2020-05-15",
    "lastUpdated": "2025-01-01",
    "imageUrl": "https://example.com/muft_ilaj.jpg",
    "link": "https://haryanahealth.nic.in/",
    "eligibility": "Resident of Haryana with BPL or EWS card",
    "hindiEligibility": "बीपीएल या ईडब्ल्यूएस कार्ड धारक हरियाणा निवासी",
    "benefits": "Free medical treatment in public hospitals",
    "documents": "BPL card, Aadhaar, residence proof",
    "applicationProcess": "Visit nearest government hospital"
  },
  {
    "id": 24,
    "name": "Ayushman Bharat Haryana",
    "hindiName": "आयुष्मान भारत हरियाणा",
    "description": "Cashless treatment up to ₹5 lakh under PM-JAY in empanelled hospitals.",
    "hindiDescription": "पैनल में शामिल अस्पतालों में ₹5 लाख तक कैशलेस इलाज।",
    "category": "Health",
    "ministry": "Health Department",
    "state": "Haryana",
    "type": "Central + State",
    "beneficiary": "Eligible families as per SECC",
    "launchDate": "2020-08-01",
    "lastUpdated": "2024-11-20",
    "imageUrl": "https://images.bhaskarassets.com/web2images/521/2024/11/06/734bf7cd-1a41-4fe4-a4db-2740b954a90e_1730876374166.jpg",
    "link": "https://ayushmanbharat.haryana.gov.in/",
    "eligibility": "Families in SECC 2011 list",
    "hindiEligibility": "SECC 2011 सूची में दर्ज परिवार",
    "benefits": "₹5 lakh per family per year cashless treatment",
    "documents": "Aadhaar, Ayushman Card",
    "applicationProcess": "Check eligibility online, visit empanelled hospital"
  },
  {
    "id": 25,
    "name": "Haryana Chirayu Yojana",
    "hindiName": "हरियाणा चिरायु योजना",
    "description": "Extends Ayushman Bharat benefits to more low-income groups.",
    "hindiDescription": "आयुष्मान भारत की सुविधाएं अधिक गरीब परिवारों तक पहुँचाना।",
    "category": "Health",
    "ministry": "Health & Family Welfare Department",
    "state": "Haryana",
    "type": "State",
    "beneficiary": "Low-income families",
    "launchDate": "2022-12-21",
    "lastUpdated": "2025-01-22",
    "imageUrl": "https://sarkariyojana.com/wp-content/uploads/2025/01/haryana-ayushman-chirayu-yojana.webp",
    "link": "https://chirayuayushmanharyana.in/",
    "eligibility": "Families with income below ₹1.8 lakh/year",
    "hindiEligibility": "₹1.8 लाख से कम वार्षिक आय वाले परिवार",
    "benefits": "₹5 lakh cashless health cover",
    "documents": "Parivar Pehchan Patra, Aadhaar, income certificate",
    "applicationProcess": "Apply through PPP portal or Ayushman Helpdesk"
  },
  {
    "id": 26,
    "name": "Free Dialysis Scheme",
    "hindiName": "मुफ्त डायलिसिस योजना",
    "description": "Free dialysis for kidney patients at government hospitals.",
    "hindiDescription": "सरकारी अस्पतालों में गुर्दे रोगियों के लिए मुफ्त डायलिसिस।",
    "category": "Health",
    "ministry": "Health Department",
    "state": "Haryana",
    "type": "State",
    "beneficiary": "Kidney patients",
    "launchDate": "2021-03-10",
    "lastUpdated": "2024-12-15",
    "imageUrl": "https://example.com/dialysis.jpg",
    "link": "https://haryanahealth.nic.in/",
    "eligibility": "Diagnosis of chronic kidney disease",
    "hindiEligibility": "पुरानी किडनी रोग की पुष्टि",
    "benefits": "Free dialysis twice a week",
    "documents": "Medical diagnosis, Aadhaar",
    "applicationProcess": "Refer from doctor, visit nearest govt hospital"
  },
  {
    "id": 27,
    "name": "Janani Suraksha Yojana – Haryana",
    "hindiName": "जननी सुरक्षा योजना – हरियाणा",
    "description": "Financial assistance for institutional deliveries.",
    "hindiDescription": "संस्थागत प्रसव के लिए वित्तीय सहायता।",
    "category": "Health",
    "ministry": "Health Department",
    "state": "Haryana",
    "type": "Central + State",
    "beneficiary": "Pregnant women (BPL/SC/ST)",
    "launchDate": "2020-01-05",
    "lastUpdated": "2025-02-18",
    "imageUrl": "https://cdn.s3waas.gov.in/s3c16a5320fa475530d9583c34fd356ef5/uploads/2022/04/2022040697.jpg",
    "link": "https://haryanahealth.nic.in/",
    "eligibility": "Pregnant women from BPL/SC/ST categories",
    "hindiEligibility": "बीपीएल/एससी/एसटी श्रेणी की गर्भवती महिलाएं",
    "benefits": "₹1,400 to ₹2,500 per delivery",
    "documents": "BPL card, pregnancy proof",
    "applicationProcess": "Apply at government hospital during check-up"
  },
  {
    "id": 28,
    "name": "National Health Mission – Haryana",
    "hindiName": "राष्ट्रीय स्वास्थ्य मिशन – हरियाणा",
    "description": "Strengthening healthcare infrastructure and services.",
    "hindiDescription": "स्वास्थ्य सेवाओं और ढांचे को मजबूत करना।",
    "category": "Health",
    "ministry": "NHM Haryana",
    "state": "Haryana",
    "type": "Central + State",
    "beneficiary": "General public",
    "launchDate": "2020-06-01",
    "lastUpdated": "2024-11-01",
    "imageUrl": "https://www.nhmharyana.gov.in/assets/images/nhm.jpg",
    "link": "https://nhmharyana.gov.in/",
    "eligibility": "Residents of Haryana",
    "hindiEligibility": "हरियाणा के निवासी",
    "benefits": "Access to primary healthcare, maternal-child care, etc.",
    "documents": "Not specific",
    "applicationProcess": "Automatic via government institutions"
  },
  {
    "id": 29,
    "name": "Mukhyamantri Cancer Rahat Kosh",
    "hindiName": "मुख्यमंत्री कैंसर राहत कोष",
    "description": "Financial assistance up to ₹2.5 lakh for cancer treatment.",
    "hindiDescription": "कैंसर इलाज के लिए ₹2.5 लाख तक की वित्तीय सहायता।",
    "category": "Health",
    "ministry": "Health Department",
    "state": "Haryana",
    "type": "State",
    "beneficiary": "Cancer patients",
    "launchDate": "2021-10-01",
    "lastUpdated": "2024-08-10",
    "imageUrl": "https://example.com/cancer_help.jpg",
    "link": "https://haryanahealth.nic.in/",
    "eligibility": "Diagnosed with cancer and income below ₹3 lakh/year",
    "hindiEligibility": "कैंसर पीड़ित और वार्षिक आय ₹3 लाख से कम",
    "benefits": "₹1.5–2.5 lakh financial aid",
    "documents": "Medical certificate, income certificate, Aadhaar",
    "applicationProcess": "Apply at district civil surgeon office"
  },
  {
    "id": 30,
    "name": "Covid-19 Relief Assistance Scheme",
    "hindiName": "कोविड-19 राहत सहायता योजना",
    "description": "Financial aid for COVID-affected families in Haryana.",
    "hindiDescription": "कोविड प्रभावित परिवारों को वित्तीय सहायता।",
    "category": "Health",
    "ministry": "Disaster Management + Health Dept.",
    "state": "Haryana",
    "type": "State",
    "beneficiary": "COVID-affected families",
    "launchDate": "2021-06-01",
    "lastUpdated": "2023-09-30",
    "imageUrl": "https://example.com/covid_relief.jpg",
    "link": "https://haryanahealth.nic.in/",
    "eligibility": "Families with a COVID-19 death or severe illness",
    "hindiEligibility": "कोविड मौत या गंभीर बीमारी से प्रभावित परिवार",
    "benefits": "₹50,000 one-time relief",
    "documents": "Death certificate, Aadhaar",
    "applicationProcess": "Apply via local administration or online"
  },
  {
  "id": 31,
  "name": "Anemia Mukt Haryana Abhiyan",
  "hindiName": "एनीमिया मुक्त हरियाणा अभियान",
  "description": "State-level initiative to reduce anemia among women and children by regular screening, iron supplementation, and awareness drives.",
  "hindiDescription": "महिलाओं और बच्चों में एनीमिया को कम करने के लिए नियमित जांच, आयरन सप्लीमेंट और जागरूकता अभियान के माध्यम से एक राज्य स्तरीय पहल।",
  "category": "Health",
  "ministry": "Women & Child Welfare Department and Health Department",
  "state": "Haryana",
  "type": "State",
  "beneficiary": "Women (15-49 years), adolescent girls, and children (6 months to 5 years)",
  "launchDate": "2020-07-15",
  "lastUpdated": "2024-10-25",
  "imageUrl": "https://static.pib.gov.in/WriteReadData/userfiles/image/image00104I5.jpg",
  "link": "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1227&lid=222",
  "eligibility": "Females aged 15-49, adolescent girls, and children under 5 years of age in Haryana",
  "hindiEligibility": "हरियाणा में 15-49 आयु वर्ग की महिलाएं, किशोरियाँ, और 5 वर्ष से कम आयु के बच्चे",
  "benefits": "Free iron and folic acid tablets, deworming, screening and treatment through government health workers and schools",
  "documents": "Aadhaar, age proof (school ID or birth certificate), Anganwadi/Health center record",
  "applicationProcess": "Enrollment through schools, Anganwadi centers, or ASHA workers"
},
{
    "id": 32,
    "name": "Project Sarvoday",
    "hindiName": "परियोजना सर्वोदय",
    "description": "Integrated village development program focusing on health, education, skill development, and environment.",
    "hindiDescription": "स्वास्थ्य, शिक्षा, कौशल विकास और पर्यावरण पर केंद्रित एकीकृत ग्राम विकास कार्यक्रम।",
    "category": "Health",
    "ministry": "Government of Haryana in collaboration with M3M Foundation",
    "state": "Haryana",
    "type": "State",
    "beneficiary": "Residents of selected villages in Nuh district",
    "launchDate": "2023-07-16",
    "lastUpdated": "2025-03-15",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Project_Sarvoday_logo.jpg/220px-Project_Sarvoday_logo.jpg",
    "link": "https://en.wikipedia.org/wiki/Project_Sarvoday",
    "eligibility": "Residents of the 81 selected villages in Nuh district",
    "hindiEligibility": "नूह जिले के चयनित 81 गांवों के निवासी",
    "benefits": "Enhanced primary healthcare services, renewable energy sources, potable drinking water, and water conservation initiatives",
    "documents": "Proof of residence in the selected villages",
    "applicationProcess": "Participation through Village Management and Development Committees (VMDCs)"
  },
 {
  "id": 34,
  "name": "Haryana Police Constable Recruitment 2025",
  "hindiName": "हरियाणा पुलिस कांस्टेबल भर्ती 2025",
  "description": "Recruitment for 5,600 Constable (GD) positions in Haryana Police under Advt. No. 14/2024.",
  "hindiDescription": "हरियाणा पुलिस में 5,600 कांस्टेबल (GD) पदों के लिए भर्ती, विज्ञापन संख्या 14/2024 के तहत।",
  "category": "Education",
  "ministry": "Haryana Staff Selection Commission (HSSC)",
  "state": "Haryana",
  "type": "State",
  "beneficiary": "Male and Female candidates who have passed 10+2 and qualified in the Haryana CET Group C exam",
  "launchDate": "2024-09-10",
  "lastUpdated": "2025-05-15",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGwdJgnj_j2CL9K1zVnNFZuU0v_b81x6htA&s",
  "link": "https://www.hssc.gov.in",
  "eligibility": "10+2 pass with Hindi/Sanskrit as one of the subjects; CET Group C qualified; Age 18–25 years",
  "hindiEligibility": "10+2 पास, हिंदी/संस्कृत एक विषय के रूप में; CET ग्रुप C उत्तीर्ण; आयु 18–25 वर्ष",
  "benefits": "Government job with pay scale ₹21,700–₹69,100; allowances as per Haryana government norms",
  "documents": "CET Group C scorecard, ID proof, academic certificates, domicile",
  "applicationProcess": "Online application through HSSC portal; no application fee for all categories"
} ,
{
  "id": 35,
  "name": "UPSC Civil Services Examination 2025",
  "hindiName": "UPSC सिविल सेवा परीक्षा 2025",
  "description": "Recruitment for All India Services including IAS, IPS, IFS, and other central services.",
  "hindiDescription": "IAS, IPS, IFS और अन्य केंद्रीय सेवाओं के लिए भर्ती।",
  "category": "Education",
  "ministry": "Union Public Service Commission (UPSC)",
  "state": "All India",
  "type": "National",
  "beneficiary": "Graduates from any state, including Haryana",
  "launchDate": "2025-02-01",
  "lastUpdated": "2025-05-15",
  "imageUrl": "data:image/jpeg;base64,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",
  "link": "https://www.upsc.gov.in",
  "eligibility": "Graduation from a recognized university; Age 21–32 years; Indian citizen",
  "hindiEligibility": "मान्यता प्राप्त विश्वविद्यालय से स्नातक; आयु 21–32 वर्ष; भारतीय नागरिक",
  "benefits": "Prestigious government positions with pay scale as per 7th CPC; allowances as per government norms",
  "documents": "ID proof, academic certificates, domicile",
  "applicationProcess": "Online application through UPSC portal"
},
{
  "id": 36,
  "name": "SSC Combined Graduate Level (CGL) Examination 2025",
  "hindiName": "SSC संयुक्त स्नातक स्तर (CGL) परीक्षा 2025",
  "description": "Recruitment for Group B and Group C posts in various ministries and departments of the Government of India.",
  "hindiDescription": "भारत सरकार के विभिन्न मंत्रालयों और विभागों में ग्रुप B और ग्रुप C पदों के लिए भर्ती।",
  "category": "Education",
  "ministry": "Staff Selection Commission (SSC)",
  "state": "All India",
  "type": "National",
  "beneficiary": "Graduates from any state, including Haryana",
  "launchDate": "2025-03-01",
  "lastUpdated": "2025-05-15",
  "imageUrl": "https://images.shiksha.com/mediadata/images/articles/1745333399phpFB2VYA.jpeg",
  "link": "https://ssc.nic.in",
  "eligibility": "Graduation from a recognized university; Age 18–32 years",
  "hindiEligibility": "मान्यता प्राप्त विश्वविद्यालय से स्नातक; आयु 18–32 वर्ष",
  "benefits": "Central government jobs with pay scale as per 7th CPC; allowances as per government norms",
  "documents": "ID proof, academic certificates, domicile",
  "applicationProcess": "Online application through SSC portal"
},
{
  "id": 37,
  "name": "IBPS Probationary Officer (PO) Examination 2025",
  "hindiName": "IBPS प्रोबेशनरी ऑफिसर (PO) परीक्षा 2025",
  "description": "Recruitment for Probationary Officer posts in public sector banks across India.",
  "hindiDescription": "भारत भर के सार्वजनिक क्षेत्र के बैंकों में प्रोबेशनरी ऑफिसर पदों के लिए भर्ती।",
  "category": "Education",
  "ministry": "Institute of Banking Personnel Selection (IBPS)",
  "state": "All India",
  "type": "National",
  "beneficiary": "Graduates from any state, including Haryana",
  "launchDate": "2025-04-01",
  "lastUpdated": "2025-05-15",
  "imageUrl": "https://www.cheggindia.com/wp-content/uploads/2021/04/GE-14589-ibps-po-v1-1024x512.png",
  "link": "https://www.ibps.in",
  "eligibility": "Graduation from a recognized university; Age 20–30 years",
  "hindiEligibility": "मान्यता प्राप्त विश्वविद्यालय से स्नातक; आयु 20–30 वर्ष",
  "benefits": "Banking sector jobs with pay scale as per 7th CPC; allowances as per government norms",
  "documents": "ID proof, academic certificates, domicile",
  "applicationProcess": "Online application through IBPS portal"
},
{
  "id": 38,
  "name": "RRB Non-Technical Popular Categories (NTPC) 2025",
  "hindiName": "RRB गैर-तकनीकी लोकप्रिय श्रेणियाँ (NTPC) परीक्षा 2025",
  "description": "Recruitment for various non-technical posts in Indian Railways.",
  "hindiDescription": "भारतीय रेलवे में विभिन्न गैर-तकनीकी पदों के लिए भर्ती।",
  "category": "Education",
  "ministry": "Indian Railways",
  "state": "All India",
  "type": "National",
  "beneficiary": "Graduates and undergraduates from any state, including Haryana",
  "launchDate": "2025-05-01",
  "lastUpdated": "2025-05-15",
  "imageUrl": "https://www.adda247.com/jobs/wp-content/uploads/2025/05/14133707/RRB-NTPC-Exam-Date-2025-Out.jpg",
  "link": "https://www.rrbcdg.gov.in",
  "eligibility": "10+2 or Graduation from a recognized board/university; Age 18–30 years",
  "hindiEligibility": "10+2 या स्नातक, मान्यता प्राप्त बोर्ड/विश्वविद्यालय से; आयु 18–30 वर्ष",
  "benefits": "Central government jobs with pay scale as per 7th CPC; allowances as per government norms",
  "documents": "ID proof, academic certificates, domicile",
  "applicationProcess": "Online application through RRB portal"
},
{
  "id": 39,
  "name": "Haryana CET Group C Examination 2025",
  "hindiName": "हरियाणा सीईटी ग्रुप C परीक्षा 2025",
  "description": "Common Eligibility Test for Group C posts in Haryana government departments.",
  "hindiDescription": "हरियाणा सरकार के विभागों में ग्रुप C पदों के लिए सामान्य पात्रता परीक्षा।",
  "category": "Education",
  "ministry": "Haryana Staff Selection Commission (HSSC)",
  "state": "Haryana",
  "type": "State",
  "beneficiary": "10th/12th/Graduates from Haryana",
  "launchDate": "2025-06-01",
  "lastUpdated": "2025-05-15",
  "imageUrl": "https://myeducationwire.b-cdn.net/wp-content/uploads/2024/07/Haryana-CET-2025.webp",
  "link": "https://www.hssc.gov.in",
  "eligibility": "10th/12th/Graduates from Haryana",
  "hindiEligibility": "हरियाणा के 10वीं/12वीं/स्नातक पास छात्र",
  "benefits": "One-time eligibility test for multiple Group C recruitments",
  "documents": "ID proof, academic certificates, domicile",
  "applicationProcess": "Online through HSSC portal"
},
 {
    "id": 40,
    "name": "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    "hindiName": "आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना",
    "description": "A national health insurance scheme providing ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
    "hindiDescription": "द्वितीयक और तृतीयक देखभाल अस्पताल में भर्ती के लिए प्रति परिवार प्रति वर्ष ₹5 लाख की राष्ट्रीय स्वास्थ्य बीमा योजना।",
    "category": "Health",
    "ministry": "Ministry of Health and Family Welfare",
    "state": "All States including Haryana",
    "type": "Central",
    "beneficiary": "Economically vulnerable families",
    "launchDate": "2018-09-23",
    "lastUpdated": "2025-01-05",
    "imageUrl": "https://wpblogassets.paytm.com/paytmblog/uploads/2024/10/How-to-Download-Ayushman-card-in-2024.jpg",
    "link": "https://abdm.gov.in/",
    "eligibility": "Families identified as per SECC 2011 data; no cap on family size, age, or gender.",
    "hindiEligibility": "SECC 2011 डेटा के अनुसार पहचाने गए परिवार; परिवार के आकार, आयु या लिंग पर कोई सीमा नहीं।",
    "benefits": "Cashless hospitalization for listed procedures across empaneled hospitals.",
    "documents": "Aadhaar card, ration card, or any government-recognized ID.",
    "applicationProcess": "Automatic enrollment based on SECC data; verify eligibility on the official portal."
  },
  {
    "id": 41,
    "name": "Pradhan Mantri Bharatiya Janaushadhi Pariyojana (PMBJP)",
    "hindiName": "प्रधानमंत्री भारतीय जनऔषधि परियोजना",
    "description": "Provides quality generic medicines at affordable prices through dedicated stores.",
    "hindiDescription": "समर्पित स्टोर्स के माध्यम से किफायती कीमतों पर गुणवत्ता वाली जेनेरिक दवाएं प्रदान करता है।",
    "category": "Health",
    "ministry": "Department of Pharmaceuticals",
    "state": "All States including Haryana",
    "type": "Central",
    "beneficiary": "General public",
    "launchDate": "2008-04-01",
    "lastUpdated": "2025-01-05",
    "imageUrl": "https://i.ytimg.com/vi/p3BjcCMCIY4/maxresdefault.jpg",
    "link": "https://janaushadhi.gov.in",
    "eligibility": "Open to all citizens.",
    "hindiEligibility": "सभी नागरिकों के लिए खुला।",
    "benefits": "Access to over 1,000 generic medicines at reduced prices.",
    "documents": "No documents required for purchase.",
    "applicationProcess": "Visit nearest Jan Aushadhi Kendra to purchase medicines."
  },
  {
    "id": 42,
    "name": "National Health Mission (NHM)",
    "hindiName": "राष्ट्रीय स्वास्थ्य मिशन",
    "description": "Aims to provide accessible, affordable, and quality healthcare to the rural population.",
    "hindiDescription": "ग्रामीण आबादी को सुलभ, किफायती और गुणवत्ता युक्त स्वास्थ्य सेवा प्रदान करने का लक्ष्य।",
    "category": "Health",
    "ministry": "Ministry of Health and Family Welfare",
    "state": "All States including Haryana",
    "type": "Central",
    "beneficiary": "Rural population",
    "launchDate": "2005-04-12",
    "lastUpdated": "2025-01-05",
    "imageUrl": "data:image/png;base64,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",
    "link": "https://nhm.gov.in",
    "eligibility": "Residents of rural areas.",
    "hindiEligibility": "ग्रामीण क्षेत्रों के निवासी।",
    "benefits": "Strengthening healthcare infrastructure and services in rural areas.",
    "documents": "Varies based on specific programs under NHM.",
    "applicationProcess": "Contact local health centers or ASHA workers for enrollment."
  },
  {
    "id": 43,
    "name": "Mission Indradhanush",
    "hindiName": "मिशन इंद्रधनुष",
    "description": "Immunization program aiming to cover all children and pregnant women against vaccine-preventable diseases.",
    "hindiDescription": "टीका-रोकथाम योग्य बीमारियों के खिलाफ सभी बच्चों और गर्भवती महिलाओं को कवर करने का लक्ष्य रखने वाला टीकाकरण कार्यक्रम।",
    "category": "Health",
    "ministry": "Ministry of Health and Family Welfare",
    "state": "All States including Haryana",
    "type": "Central",
    "beneficiary": "Children under 2 years and pregnant women",
    "launchDate": "2014-12-25",
    "lastUpdated": "2025-01-05",
    "imageUrl": "https://ehealth.eletsonline.com/wp-content/uploads/2018/01/Mandsaur-mp-The-second-phase-of-the-rainbow-mission-until-December-7-to-14-news-in-hindi-119724.png",
    "link": "https://missionindradhanush.in/",
    "eligibility": "Children up to 2 years and pregnant women.",
    "hindiEligibility": "2 वर्ष तक के बच्चे और गर्भवती महिलाएं।",
    "benefits": "Free immunization against 12 vaccine-preventable diseases.",
    "documents": "Child's birth certificate, mother's ID proof.",
    "applicationProcess": "Visit nearest government health center or Anganwadi."
  },
  {
    "id": 44,
    "name": "National Tuberculosis Elimination Program (NTEP)",
    "hindiName": "राष्ट्रीय क्षय रोग उन्मूलन कार्यक्रम",
    "description": "Aims to eliminate tuberculosis in India by 2025 through free diagnosis and treatment.",
    "hindiDescription": "नि:शुल्क निदान और उपचार के माध्यम से 2025 तक भारत में क्षय रोग को समाप्त करने का लक्ष्य।",
    "category": "Health & Wellness",
    "ministry": "Ministry of Health and Family Welfare",
    "state": "All States including Haryana",
    "type": "National",
    "beneficiary": "Individuals diagnosed with tuberculosis",
    "launchDate": "1997-01-01",
    "lastUpdated": "2025-01-05",
    "imageUrl": "https://image.prepladder.com/prepladder/2024/04/02114829/National-TB-Elimination-Programme.webp",
    "link": "https://dghs.mohfw.gov.in/national-tuberculosis-elimination-programme.php",
    "eligibility": "All TB patients.",
    "hindiEligibility": "सभी टीबी मरीज।",
    "benefits": "Free TB diagnosis, treatment, and support services.",
    "documents": "Medical records confirming TB diagnosis.",
    "applicationProcess": "Register at nearest DOTS center or government hospital."
  },
  {
        "id": 45,
        "name": "Old Age Samman Allowance",
        "hindiName": "वृद्धावस्था सम्मान भत्ता",
        "description": "Provides a monthly pension to senior citizens of Haryana to ensure their financial security.",
        "hindiDescription": "हरियाणा के वरिष्ठ नागरिकों को उनकी वित्तीय सुरक्षा सुनिश्चित करने के लिए मासिक पेंशन प्रदान करता है।",
        "category": "Senior Citizens",
        "ministry": "Haryana Social Justice Department",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "Senior Citizens",
        "launchDate": "1987-01-01",
        "lastUpdated": "2025-04-01",
        "imageUrl": "https://i.ytimg.com/vi/6qQ1F_8f2Rk/maxresdefault.jpg",
        "link": "https://socialjusticehry.gov.in/",
        "eligibility": "Age 60 years or above, Haryana resident, income from all sources not exceeding ₹2,00,000 per annum.",
        "hindiEligibility": "आयु 60 वर्ष या उससे अधिक, हरियाणा निवासी, सभी स्रोतों से आय प्रति वर्ष ₹2,00,000 से अधिक नहीं।",
        "benefits": "Monthly pension of ₹3,000 (as of latest updates).",
        "documents": "Aadhaar card, Parivar Pehchan Patra (PPP), bank account details, age proof.",
        "applicationProcess": "Online application through the Saral Haryana portal or at local welfare offices."
    },
    {
        "id": 46,
        "name": "Saksham Yuva Yojana",
        "hindiName": "सक्षम युवा योजना",
        "description": "Provides unemployment allowance and honorarium for temporary work to educated unemployed youth in Haryana.",
        "hindiDescription": "हरियाणा में शिक्षित बेरोजगार युवाओं को बेरोजगारी भत्ता और अस्थायी काम के लिए मानदेय प्रदान करता है।",
        "category": "Employment & Skill Development",
        "ministry": "Haryana Employment Department",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "Unemployed Youth",
        "launchDate": "2016-11-01",
        "lastUpdated": "2025-03-20",
        "imageUrl": "https://sakshamyojna.in/wp-content/uploads/2023/11/Saksham-Yojana-Haryana.webp",
        "link": "https://hreyahs.gov.in/",
        "eligibility": "Haryana domicile, age 18-35, registered with employment exchange, specific educational qualifications (10+2, Graduate, Post-Graduate).",
        "hindiEligibility": "हरियाणा का निवासी, आयु 18-35, रोजगार कार्यालय में पंजीकृत, विशिष्ट शैक्षणिक योग्यता (10+2, स्नातक, स्नातकोत्तर)।",
        "benefits": "Monthly unemployment allowance from ₹900 to ₹3,000 and an honorarium of ₹6,000 for 100 hours of work.",
        "documents": "Educational certificates, residence proof, Aadhaar card, employment exchange registration.",
        "applicationProcess": "Online registration on the Saksham Yuva portal."
    },
    {
        "id": 47,
        "name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        "hindiName": "प्रधानमंत्री फसल बीमा योजना",
        "description": "A comprehensive crop insurance scheme to provide financial support to farmers suffering crop loss/damage arising out of unforeseen events.",
        "hindiDescription": "अप्रत्याशित घटनाओं से फसल हानि/क्षति का सामना करने वाले किसानों को वित्तीय सहायता प्रदान करने के लिए एक व्यापक फसल बीमा योजना।",
        "category": "Agriculture & Farmers",
        "ministry": "Ministry of Agriculture & Farmers Welfare",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Farmers",
        "launchDate": "2016-02-18",
        "lastUpdated": "2025-01-15",
        "imageUrl": "https://www.bajajallianz.com/content/dam/bagic/pmfby/pmfby-banner.png",
        "link": "https://pmfby.gov.in/",
        "eligibility": "All farmers including sharecroppers and tenant farmers growing notified crops in notified areas.",
        "hindiEligibility": "अधिसूचित क्षेत्रों में अधिसूचित फसलें उगाने वाले सभी किसान, जिनमें बटाईदार और किरायेदार किसान शामिल हैं।",
        "benefits": "Insurance coverage against crop loss due to natural calamities, pests, and diseases.",
        "documents": "Land records, Aadhaar card, bank account details, crop sowing certificate.",
        "applicationProcess": "Through financial institutions, insurance companies, or the National Crop Insurance Portal."
    },
    {
        "id": 48,
        "name": "Haryana Widow and Destitute Women Pension Scheme",
        "hindiName": "हरियाणा विधवा एवं निराश्रित महिला पेंशन योजना",
        "description": "Provides monthly financial assistance to widows and destitute women in Haryana for their livelihood.",
        "hindiDescription": "हरियाणा में विधवाओं और निराश्रित महिलाओं को उनके जीवनयापन के लिए मासिक वित्तीय सहायता प्रदान करती है।",
        "category": "Women & Child Development",
        "ministry": "Haryana Social Justice Department",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "Women",
        "launchDate": "1980-01-01",
        "lastUpdated": "2025-04-01",
        "imageUrl": "https://thesarkariyojana.com/wp-content/uploads/2023/11/haryana-vidhwa-pension-yojana.jpg",
        "link": "https://socialjusticehry.gov.in/",
        "eligibility": "Woman aged 18 years and above, Haryana resident, family income less than ₹2,00,000 per annum.",
        "hindiEligibility": "18 वर्ष और उससे अधिक आयु की महिला, हरियाणा निवासी, पारिवारिक आय प्रति वर्ष ₹2,00,000 से कम।",
        "benefits": "Monthly pension of ₹3,000 (as of latest updates).",
        "documents": "Husband's death certificate, Aadhaar card, PPP ID, income certificate, bank details.",
        "applicationProcess": "Application through the Saral Haryana portal or at the District Social Welfare Office."
    },
    {
        "id": 49,
        "name": "Pradhan Mantri Awas Yojana - Gramin (PMAY-G)",
        "hindiName": "प्रधानमंत्री आवास योजना - ग्रामीण",
        "description": "A central government scheme to provide affordable housing to the rural poor, aiming for 'Housing for All' by 2024.",
        "hindiDescription": "ग्रामीण गरीबों को किफायती आवास प्रदान करने के लिए एक केंद्रीय सरकारी योजना, जिसका लक्ष्य 2024 तक 'सबके लिए आवास' है।",
        "category": "Housing & Infrastructure",
        "ministry": "Ministry of Rural Development",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2016-04-01",
        "lastUpdated": "2025-02-10",
        "imageUrl": "https://www.livemint.com/lm-img/img/2024/01/15/1600x900/PMAY_G_1705325514088_1705325514275.jpg",
        "link": "https://pmayg.nic.in/",
        "eligibility": "Homeless families or families living in kutcha or dilapidated houses in rural areas, based on SECC 2011 data.",
        "hindiEligibility": "ग्रामीण क्षेत्रों में बेघर परिवार या कच्चे या जीर्ण-शीर्ण घरों में रहने वाले परिवार, SECC 2011 डेटा के आधार पर।",
        "benefits": "Financial assistance for the construction of a pucca house with basic amenities.",
        "documents": "Aadhaar card, bank account details, job card (if applicable), consent to use Aadhaar.",
        "applicationProcess": "Beneficiaries are identified from the SECC 2011 data and verified by the Gram Sabha."
    },
    {
        "id": 50,
        "name": "Dr. B.R. Ambedkar Medhavi Chhatra Yojana",
        "hindiName": "डॉ. बी.आर. अम्बेडकर मेधावी छात्र योजना",
        "description": "An incentive scheme for meritorious students from Scheduled Castes and Backward Classes in Haryana.",
        "hindiDescription": "हरियाणा में अनुसूचित जाति और पिछड़े वर्गों के मेधावी छात्रों के लिए एक प्रोत्साहन योजना।",
        "category": "SC/ST/OBC Welfare",
        "ministry": "Welfare of SC & BC Department, Haryana",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "SC/ST/OBC",
        "launchDate": "2009-11-01",
        "lastUpdated": "2025-01-25",
        "imageUrl": "https://haryanascbc.gov.in/sites/default/files/dr-ambedkar-medhavi-chhattar-sansodhit-yojna_0.jpg",
        "link": "https://haryanascbc.gov.in/",
        "eligibility": "SC/BC students of Haryana who secure prescribed percentage of marks in Matric, 10+2, and Graduation.",
        "hindiEligibility": "हरियाणा के एससी/बीसी छात्र जो मैट्रिक, 10+2 और स्नातक में निर्धारित प्रतिशत अंक प्राप्त करते हैं।",
        "benefits": "One-time cash incentive ranging from ₹8,000 to ₹12,000 based on the academic level.",
        "documents": "Caste certificate, mark sheets, domicile certificate, bank account details.",
        "applicationProcess": "Online application through the Saral Haryana portal after the declaration of results."
    },
    {
        "id": 51,
        "name": "Haryana Teacher Eligibility Test (HTET) 2025",
        "hindiName": "हरियाणा शिक्षक पात्रता परीक्षा (HTET) 2025",
        "description": "State-level eligibility test to determine the eligibility of candidates for appointment as teachers in schools of Haryana.",
        "hindiDescription": "हरियाणा के स्कूलों में शिक्षकों के रूप में नियुक्ति के लिए उम्मीदवारों की पात्रता निर्धारित करने हेतु राज्य स्तरीय पात्रता परीक्षा।",
        "category": "Education & Scholarships",
        "ministry": "Board of School Education, Haryana (BSEH)",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "Students",
        "launchDate": "2025-09-01",
        "lastUpdated": "2025-05-20",
        "imageUrl": "https://www.cheggindia.com/wp-content/uploads/2021/09/GE-18171-htet-v1-1-1024x512.png",
        "link": "https://sarkariresult.com.im/htet-2025-admit-card/",
        "eligibility": "Varies by level (PRT, TGT, PGT) but generally includes specific educational degrees (e.g., D.Ed., B.Ed.) and academic qualifications.",
        "hindiEligibility": "स्तर के अनुसार भिन्न (पीआरटी, टीजीटी, पीजीटी) लेकिन आम तौर पर विशिष्ट शैक्षणिक डिग्री (जैसे डी.एड., बी.एड.) और शैक्षणिक योग्यता शामिल है।",
        "benefits": "Eligibility certificate to apply for teacher posts in Haryana government schools.",
        "documents": "Academic certificates, ID proof, photograph, signature.",
        "applicationProcess": "Online application through the official BSEH portal when notifications are released."
    },
    {
        "id": 52,
        "name": "Atal Pension Yojana (APY)",
        "hindiName": "अटल पेंशन योजना",
        "description": "A central government pension scheme focused on the unorganized sector to provide a guaranteed minimum monthly pension after the age of 60.",
        "hindiDescription": "असंगठित क्षेत्र पर केंद्रित एक केंद्रीय सरकार की पेंशन योजना जो 60 वर्ष की आयु के बाद एक गारंटीकृत न्यूनतम मासिक पेंशन प्रदान करती है।",
        "category": "Senior Citizens",
        "ministry": "Ministry of Finance",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2015-05-09",
        "lastUpdated": "2025-03-01",
        "imageUrl": "https://www.bankofbaroda.in/files/2023-01/atal-pension-yojana-desktop.jpg",
        "link": "https://npscra.nsdl.co.in/atal-pension-yojana.php",
        "eligibility": "Any Indian citizen between 18 to 40 years of age with a bank account.",
        "hindiEligibility": "18 से 40 वर्ष की आयु के बीच का कोई भी भारतीय नागरिक जिसके पास बैंक खाता हो।",
        "benefits": "Fixed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 after retirement, based on the contribution.",
        "documents": "Aadhaar card, bank account details.",
        "applicationProcess": "Enrollment through the bank or post office where the individual has a savings account."
    },
    {
        "id": 53,
        "name": "Sukanya Samriddhi Yojana (SSY)",
        "hindiName": "सुकन्या समृद्धि योजना",
        "description": "A small deposit scheme by the Government of India meant exclusively for a girl child, as part of the 'Beti Bachao Beti Padhao' campaign.",
        "hindiDescription": "भारत सरकार द्वारा 'बेटी बचाओ बेटी पढ़ाओ' अभियान के हिस्से के रूप में विशेष रूप से बालिकाओं के लिए एक छोटी जमा योजना।",
        "category": "Women & Child Development",
        "ministry": "Ministry of Finance",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Women",
        "launchDate": "2015-01-22",
        "lastUpdated": "2025-04-01",
        "imageUrl": "https://d2av8kbir6lh9m.cloudfront.net/uploads/509_661af9404c9fb.png",
        "link": "https://www.nsiindia.gov.in/(S(2uq4bj55zmgcq055sj4l4z55))/InternalPage.aspx?Id_Pk=89",
        "eligibility": "Parents or legal guardians can open an account for a girl child below the age of 10.",
        "hindiEligibility": "माता-पिता या कानूनी अभिभावक 10 वर्ष से कम उम्र की बालिका के लिए खाता खोल सकते हैं।",
        "benefits": "High interest rate, tax benefits under Section 80C. Funds can be used for the girl's higher education and marriage.",
        "documents": "Birth certificate of the girl child, ID and address proof of the guardian.",
        "applicationProcess": "Open an account at any post office or authorized commercial bank branch."
    },
    {
        "id": 54,
        "name": "Pradhan Mantri MUDRA Yojana (PMMY)",
        "hindiName": "प्रधानमंत्री मुद्रा योजना",
        "description": "Provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises for income-generating activities.",
        "hindiDescription": "गैर-कॉर्पोरेट, गैर-कृषि लघु/सूक्ष्म उद्यमों को आय-अर्जक गतिविधियों के लिए ₹10 लाख तक का ऋण प्रदान करती है।",
        "category": "Employment & Skill Development",
        "ministry": "Ministry of Finance",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Entrepreneurs",
        "launchDate": "2015-04-08",
        "lastUpdated": "2025-03-10",
        "imageUrl": "https://i.ytimg.com/vi/vF0xW9s8T-U/maxresdefault.jpg",
        "link": "https://www.mudra.org.in/",
        "eligibility": "Any Indian citizen with a business plan for a non-farm sector income-generating activity like manufacturing, processing, trading or service sector.",
        "hindiEligibility": "कोई भी भारतीय नागरिक जिसके पास विनिर्माण, प्रसंस्करण, व्यापार या सेवा क्षेत्र जैसी गैर-कृषि क्षेत्र की आय-अर्जक गतिविधि के लिए व्यावसायिक योजना है।",
        "benefits": "Collateral-free loans under three categories: Shishu (up to ₹50,000), Kishor (₹50,001 to ₹5 lakh), and Tarun (₹5 lakh to ₹10 lakh).",
        "documents": "Business plan, ID proof, address proof, photograph.",
        "applicationProcess": "Approach any lending institution (Banks, NBFCs, MFIs) or apply online through the Udyamimitra portal."
    },
    {
        "id": 55,
        "name": "Stand-Up India Scheme",
        "hindiName": "स्टैंड-अप इंडिया योजना",
        "description": "Facilitates bank loans between ₹10 lakh and ₹1 crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch.",
        "hindiDescription": "प्रत्येक बैंक शाखा से कम से कम एक अनुसूचित जाति (SC) या अनुसूचित जनजाति (ST) उधारकर्ता और कम से कम एक महिला उधारकर्ता को ₹10 लाख से ₹1 करोड़ के बीच बैंक ऋण की सुविधा प्रदान करती है।",
        "category": "SC/ST/OBC Welfare",
        "ministry": "Ministry of Finance",
        "state": "All India",
        "type": "Central",
        "beneficiary": "SC/ST/OBC",
        "launchDate": "2016-04-05",
        "lastUpdated": "2025-02-20",
        "imageUrl": "https://www.indiafilings.com/learn/wp-content/uploads/2018/04/Standup-India-Scheme.jpg",
        "link": "https://www.standupmitra.in/",
        "eligibility": "SC/ST or women entrepreneurs, above 18 years of age, for setting up a greenfield enterprise in manufacturing, services or the trading sector.",
        "hindiEligibility": "18 वर्ष से अधिक आयु के एससी/एसटी या महिला उद्यमी, जो विनिर्माण, सेवा या व्यापार क्षेत्र में एक नया उद्यम स्थापित कर रहे हों।",
        "benefits": "Composite loan (including term loan and working capital) between ₹10 lakh and ₹1 crore.",
        "documents": "Business plan, caste certificate (if applicable), ID proof, and other documents as required by the bank.",
        "applicationProcess": "Apply directly at a bank branch or through the Stand-Up India portal."
    },
    {
        "id": 56,
        "name": "Mukhya Mantri Vivah Shagun Yojana",
        "hindiName": "मुख्यमंत्री विवाह शगुन योजना",
        "description": "Provides financial assistance (Shagun) for the marriage of daughters of poor families, widows, and destitute women in Haryana.",
        "hindiDescription": "हरियाणा में गरीब परिवारों, विधवाओं और निराश्रित महिलाओं की बेटियों के विवाह के लिए वित्तीय सहायता (शगुन) प्रदान करती है।",
        "category": "Women & Child Development",
        "ministry": "Welfare of SC & BC Department, Haryana",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "Women",
        "launchDate": "2005-01-01",
        "lastUpdated": "2025-03-15",
        "imageUrl": "https://cm-haryanacmoffice.in/wp-content/uploads/2023/12/Mukhya-Mantri-Vivah-Shagun-Yojana.jpg",
        "link": "https://saralharyana.gov.in/",
        "eligibility": "Resident of Haryana, family income criteria vary by category (BPL, SC, Widow, etc.), girl must be 18 years or older.",
        "hindiEligibility": "हरियाणा का निवासी, पारिवारिक आय मानदंड श्रेणी के अनुसार भिन्न (बीपीएल, एससी, विधवा, आदि), लड़की की आयु 18 वर्ष या उससे अधिक होनी चाहिए।",
        "benefits": "Financial assistance ranging from ₹11,000 to ₹71,000 depending on the category of the beneficiary.",
        "documents": "Marriage registration certificate, residence proof, caste certificate, BPL card, bank details.",
        "applicationProcess": "Online application on the Saral Haryana portal within a specified period after the marriage."
    },
    {
        "id": 57,
        "name": "Assistance to Disabled Persons for Purchase/Fitting of Aids/Appliances (ADIP Scheme)",
        "hindiName": "सहायक उपकरणों/उपकरणों की खरीद/फिटिंग के लिए विकलांग व्यक्तियों को सहायता (एडिप योजना)",
        "description": "Provides grants for the purchase and fitting of assistive devices to persons with disabilities to promote their physical, social, and psychological rehabilitation.",
        "hindiDescription": "विकलांग व्यक्तियों को उनके शारीरिक, सामाजिक और मनोवैज्ञानिक पुनर्वास को बढ़ावा देने के लिए सहायक उपकरणों की खरीद और फिटिंग के लिए अनुदान प्रदान करती है।",
        "category": "Persons with Disabilities",
        "ministry": "Ministry of Social Justice and Empowerment",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Persons with Disabilities",
        "launchDate": "1981-01-01",
        "lastUpdated": "2025-01-30",
        "imageUrl": "https://vikaspedia.in/social-welfare/schemes-for-persons-with-disabilities/adip-scheme-for-distribution-of-aids-and-assistive-devices/adip_scheme.jpg",
        "link": "https://adip.depwd.gov.in/",
        "eligibility": "Indian citizen with 40% or more disability, monthly income not exceeding ₹20,000 from all sources.",
        "hindiEligibility": "40% या अधिक विकलांगता वाला भारतीय नागरिक, सभी स्रोतों से मासिक आय ₹20,000 से अधिक नहीं।",
        "benefits": "Free assistive devices up to ₹10,000 for persons with income up to ₹15,000/month. 50% concession for those with income between ₹15,001 and ₹20,000/month.",
        "documents": "Disability certificate, income certificate, ID proof, photograph.",
        "applicationProcess": "Apply through implementing agencies like NGOs, District Disability Rehabilitation Centres (DDRCs)."
    },
    {
        "id": 58,
        "name": "Rashtriya Vayoshri Yojana (RVY)",
        "hindiName": "राष्ट्रीय वयोश्री योजना",
        "description": "A central scheme to provide physical aids and assisted-living devices free of cost to senior citizens belonging to the BPL category.",
        "hindiDescription": "बीपीएल श्रेणी के वरिष्ठ नागरिकों को मुफ्त में भौतिक सहायता और सहायक-जीवित उपकरण प्रदान करने के लिए एक केंद्रीय योजना।",
        "category": "Senior Citizens",
        "ministry": "Ministry of Social Justice and Empowerment",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Senior Citizens",
        "launchDate": "2017-04-01",
        "lastUpdated": "2025-02-18",
        "imageUrl": "https://i.ytimg.com/vi/u1N6C-T8dE0/maxresdefault.jpg",
        "link": "https://socialjustice.gov.in/schemes/33",
        "eligibility": "Senior citizens (age 60+), belonging to the BPL category and suffering from age-related disability/infirmity.",
        "hindiEligibility": "वरिष्ठ नागरिक (आयु 60+), जो बीपीएल श्रेणी से संबंधित हैं और आयु से संबंधित विकलांगता/दुर्बलता से पीड़ित हैं।",
        "benefits": "Free distribution of devices like walking sticks, elbow crutches, wheelchairs, hearing aids, spectacles, and dentures.",
        "documents": "BPL card or proof of BPL status, age proof, ID card (Aadhaar).",
        "applicationProcess": "Beneficiaries are identified through assessment camps organized by implementing agencies in selected districts."
    },
    {
        "id": 59,
        "name": "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
        "hindiName": "प्रधानमंत्री मातृ वंदना योजना",
        "description": "A maternity benefit program providing partial wage compensation to pregnant and lactating women for their first live birth.",
        "hindiDescription": "एक मातृत्व लाभ कार्यक्रम जो गर्भवती और स्तनपान कराने वाली महिलाओं को उनके पहले जीवित जन्म के लिए आंशिक मजदूरी मुआवजा प्रदान करता है।",
        "category": "Women & Child Development",
        "ministry": "Ministry of Women and Child Development",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Women",
        "launchDate": "2017-01-01",
        "lastUpdated": "2025-04-05",
        "imageUrl": "https://static.india.com/wp-content/uploads/2023/02/Pradhan-Mantri-Matru-Vandana-Yojana.jpg",
        "link": "https://pmmvy.wcd.gov.in/",
        "eligibility": "All pregnant and lactating women, excluding those who are in regular employment with the Central/State Government or PSUs.",
        "hindiEligibility": "सभी गर्भवती और स्तनपान कराने वाली महिलाएं, केंद्र/राज्य सरकार या सार्वजनिक उपक्रमों में नियमित रोजगार वाली महिलाओं को छोड़कर।",
        "benefits": "Cash incentive of ₹5,000 in three installments, subject to fulfilling specific health and nutrition conditions.",
        "documents": "Mother-Child Protection (MCP) card, Aadhaar card of woman and her husband, bank account details.",
        "applicationProcess": "Registration at the local Anganwadi Centre (AWC) or approved Health facility."
    },
    {
        "id": 60,
        "name": "Haryana CET Group D Exam 2025",
        "hindiName": "हरियाणा CET ग्रुप D परीक्षा 2025",
        "description": "Common Eligibility Test (CET) for recruitment to various Group D posts in Haryana government departments, boards, and corporations.",
        "hindiDescription": "हरियाणा सरकार के विभागों, बोर्डों और निगमों में विभिन्न ग्रुप D पदों पर भर्ती के लिए सामान्य पात्रता परीक्षा (CET)।",
        "category": "Employment & Skill Development",
        "ministry": "Haryana Staff Selection Commission (HSSC)",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "Unemployed Youth",
        "launchDate": "2025-07-01",
        "lastUpdated": "2025-06-01",
        "imageUrl": "https://www.jagranjosh.com/images/2023/October/21102023/hssc-group-d-exam-analysis-2023.jpg",
        "link": "https://hssc.gov.in/",
        "eligibility": "Minimum 10th (Matriculation) pass from a recognized board with Hindi/Sanskrit as one of the subjects. Age 18-42 years.",
        "hindiEligibility": "किसी मान्यता प्राप्त बोर्ड से न्यूनतम 10वीं (मैट्रिक) पास जिसमें हिंदी/संस्कृत एक विषय हो। आयु 18-42 वर्ष।",
        "benefits": "A single examination provides eligibility for applying to numerous Group D government jobs in Haryana for a specified period.",
        "documents": "10th class certificate, ID proof, domicile certificate, photograph, signature.",
        "applicationProcess": "Online application through the official HSSC one-time registration portal when notifications are released."
    },
    {
        "id": 61,
        "name": "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
        "hindiName": "प्रधानमंत्री जीवन ज्योति बीमा योजना",
        "description": "A government-backed life insurance scheme providing a renewable one-year term life cover of ₹2 lakh for death due to any reason.",
        "hindiDescription": "एक सरकारी समर्थित जीवन बीमा योजना जो किसी भी कारण से मृत्यु के लिए ₹2 लाख का नवीकरणीय एक वर्षीय टर्म लाइफ कवर प्रदान करती है।",
        "category": "Senior Citizens",
        "ministry": "Ministry of Finance",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2015-05-09",
        "lastUpdated": "2025-05-01",
        "imageUrl": "https://www.bankofbaroda.in/-/media/project/bob/countrysites/india/blogs/images/what-is-pradhan-mantri-jeevan-jyoti-bima-yojana-and-its-benefits.jpg",
        "link": "https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Jeevan-Jyoti-Bima-Yojana(PMJJBY)",
        "eligibility": "Indian citizens aged 18-50 years with a bank or post office account.",
        "hindiEligibility": "18-50 वर्ष की आयु के भारतीय नागरिक जिनके पास बैंक या डाकघर में खाता है।",
        "benefits": "₹2 lakh life cover on death of the insured member.",
        "documents": "Aadhaar card, bank/post office account details.",
        "applicationProcess": "Enrollment through the participating bank or post office via an auto-debit facility."
    },
    {
        "id": 62,
        "name": "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
        "hindiName": "प्रधानमंत्री सुरक्षा बीमा योजना",
        "description": "A government-backed accident insurance scheme offering a one-year renewable cover for accidental death and disability.",
        "hindiDescription": "एक सरकारी समर्थित दुर्घटना बीमा योजना जो आकस्मिक मृत्यु और विकलांगता के लिए एक वर्षीय नवीकरणीय कवर प्रदान करती है।",
        "category": "Employment & Skill Development",
        "ministry": "Ministry of Finance",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2015-05-09",
        "lastUpdated": "2025-05-01",
        "imageUrl": "https://assets-news.housing.com/news/wp-content/uploads/2022/11/02181215/Pradhan-Mantri-Suraksha-Bima-Yojana-PMSBY-All-you-need-to-know-FB-1200x700-compressed.jpg",
        "link": "https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Suraksha-Bima-Yojana(PMSBY)",
        "eligibility": "Indian citizens aged 18-70 years with a bank or post office account.",
        "hindiEligibility": "18-70 वर्ष की आयु के भारतीय नागरिक जिनके पास बैंक या डाकघर में खाता है।",
        "benefits": "₹2 lakh for accidental death and permanent total disability; ₹1 lakh for permanent partial disability.",
        "documents": "Aadhaar card, bank/post office account details.",
        "applicationProcess": "Enrollment through participating banks/post offices with an auto-debit facility."
    },
    {
        "id": 63,
        "name": "Pradhan Mantri Ujjwala Yojana (PMUY)",
        "hindiName": "प्रधानमंत्री उज्ज्वला योजना",
        "description": "Provides deposit-free LPG connections to women from poor households to safeguard their health and reduce drudgery.",
        "hindiDescription": "गरीब परिवारों की महिलाओं को उनके स्वास्थ्य की रक्षा करने और परिश्रम को कम करने के लिए जमा-मुक्त एलपीजी कनेक्शन प्रदान करती है।",
        "category": "Women & Child Development",
        "ministry": "Ministry of Petroleum and Natural Gas",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Women",
        "launchDate": "2016-05-01",
        "lastUpdated": "2025-03-31",
        "imageUrl": "https://static.pib.gov.in/WriteReadData/userfiles/image/image001P7AD.jpg",
        "link": "https://www.pmuy.gov.in/",
        "eligibility": "Adult women belonging to poor households (BPL, SC/ST, PMAY-G beneficiaries, etc.) who do not have an LPG connection in their household.",
        "hindiEligibility": "गरीब परिवारों (बीपीएल, एससी/एसटी, पीएमएवाई-जी लाभार्थी, आदि) से संबंधित वयस्क महिलाएं जिनके घर में एलपीजी कनेक्शन नहीं है।",
        "benefits": "Deposit-free LPG connection, first refill and stove provided free of cost.",
        "documents": "KYC form, Aadhaar card, ration card, bank account details.",
        "applicationProcess": "Apply online through the PMUY portal or submit an application at the nearest LPG distributorship."
    },
    {
        "id": 64,
        "name": "PM-Kisan Maan-Dhan Yojana",
        "hindiName": "पीएम-किसान मान-धन योजना",
        "description": "A voluntary and contributory pension scheme for small and marginal farmers to provide social security and a fixed pension.",
        "hindiDescription": "छोटे और सीमांत किसानों के लिए सामाजिक सुरक्षा और एक निश्चित पेंशन प्रदान करने के लिए एक स्वैच्छिक और अंशदायी पेंशन योजना।",
        "category": "Agriculture & Farmers",
        "ministry": "Ministry of Agriculture & Farmers Welfare",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Farmers",
        "launchDate": "2019-09-12",
        "lastUpdated": "2025-02-15",
        "imageUrl": "https://www.india.gov.in/spotlight/sites/upload_files/npi/public/images/pm-kisan-maan-dhan-yojana-inner.jpg",
        "link": "https://maandhan.in/pmsym",
        "eligibility": "Small and Marginal Farmers aged 18 to 40 years, owning cultivable land up to 2 hectares.",
        "hindiEligibility": "18 से 40 वर्ष की आयु के छोटे और सीमांत किसान, जिनके पास 2 हेक्टेयर तक की कृषि योग्य भूमि है।",
        "benefits": "A minimum fixed pension of ₹3,000 per month on attaining the age of 60.",
        "documents": "Aadhaar card, bank account details.",
        "applicationProcess": "Enrollment through Common Service Centres (CSC) or online at maandhan.in."
    },
    {
        "id": 65,
        "name": "PM-SVANidhi Scheme",
        "hindiName": "पीएम-स्वनिधि योजना",
        "description": "A micro-credit facility that provides affordable working capital loans to street vendors to resume their livelihoods.",
        "hindiDescription": "एक सूक्ष्म-ऋण सुविधा जो स्ट्रीट वेंडरों को अपनी आजीविका फिर से शुरू करने के लिए सस्ता कार्यशील पूंजी ऋण प्रदान करती है।",
        "category": "Employment & Skill Development",
        "ministry": "Ministry of Housing and Urban Affairs",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Entrepreneurs",
        "launchDate": "2020-06-01",
        "lastUpdated": "2025-01-20",
        "imageUrl": "https://vikaspedia.in/social-welfare/unorganised-sector-1/pm-svanidhi-scheme/pm-svanidhi.png",
        "link": "https://pmsvanidhi.mohua.gov.in/",
        "eligibility": "Street vendors/hawkers in urban areas with a Certificate of Vending/Identity Card.",
        "hindiEligibility": "शहरी क्षेत्रों में वेंडिंग प्रमाण पत्र/पहचान पत्र वाले स्ट्रीट वेंडर/फेरीवाले।",
        "benefits": "Initial working capital loan up to ₹10,000, with subsequent loans of ₹20,000 and ₹50,000 with good repayment.",
        "documents": "Vending Certificate/ID Card, Aadhaar, bank account details.",
        "applicationProcess": "Apply online through the PM-SVANidhi portal or with the help of Urban Local Body (ULB) officials."
    },
    {
        "id": 66,
        "name": "POSHAN Abhiyaan (National Nutrition Mission)",
        "hindiName": "पोषण अभियान (राष्ट्रीय पोषण मिशन)",
        "description": "A flagship program to improve nutritional outcomes for children, pregnant women, and lactating mothers.",
        "hindiDescription": "बच्चों, गर्भवती महिलाओं और स्तनपान कराने वाली माताओं के लिए पोषण संबंधी परिणामों में सुधार के लिए एक प्रमुख कार्यक्रम।",
        "category": "Health & Wellness",
        "ministry": "Ministry of Women and Child Development",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Women & Child",
        "launchDate": "2018-03-08",
        "lastUpdated": "2025-04-10",
        "imageUrl": "https://www.iasgyan.in/ig-uploads/images/poshan%20abhiyaan.png",
        "link": "https://poshanabhiyaan.gov.in/",
        "eligibility": "Children (0-6 years), pregnant women, and lactating mothers.",
        "hindiEligibility": "बच्चे (0-6 वर्ष), गर्भवती महिलाएं, और स्तनपान कराने वाली माताएं।",
        "benefits": "Aims to reduce stunting, under-nutrition, anemia, and low birth weight through technology and convergence.",
        "documents": "Registration at Anganwadi Centre.",
        "applicationProcess": "Services are delivered through the Anganwadi Services network."
    },
    {
        "id": 67,
        "name": "Haryana Parivar Pehchan Patra (PPP)",
        "hindiName": "हरियाणा परिवार पहचान पत्र",
        "description": "A unique 8-digit ID for each family in Haryana, designed to enable smooth and automatic delivery of government schemes and services.",
        "hindiDescription": "हरियाणा में प्रत्येक परिवार के लिए एक अद्वितीय 8-अंकीय आईडी, जिसे सरकारी योजनाओं और सेवाओं की सुगम और स्वचालित डिलीवरी को सक्षम करने के लिए डिज़ाइन किया गया है।",
        "category": "Housing & Infrastructure",
        "ministry": "Citizen Resources Information Department, Haryana",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2020-07-04",
        "lastUpdated": "2025-06-01",
        "imageUrl": "https://meraparivar.haryana.gov.in/images/logo-cm.png",
        "link": "https://meraparivar.haryana.gov.in/",
        "eligibility": "Every family residing in Haryana is required to enroll.",
        "hindiEligibility": "हरियाणा में रहने वाले प्रत्येक परिवार को नामांकन कराना आवश्यक है।",
        "benefits": "Acts as a primary ID for availing benefits of various Haryana government schemes. Helps in automatic identification of eligible beneficiaries.",
        "documents": "Aadhaar card of all family members, bank account details, mobile number.",
        "applicationProcess": "Enroll or update details online through the PPP portal or at designated CSC/Saral Kendras."
    },
    {
        "id": 68,
        "name": "JEE (Main) - Joint Entrance Examination",
        "hindiName": "जेईई (मुख्य) - संयुक्त प्रवेश परीक्षा",
        "description": "A national-level engineering entrance examination for admission to various undergraduate engineering programs (B.E./B.Tech) in NITs, IIITs, and other Centrally Funded Technical Institutions.",
        "hindiDescription": "एनआईटी, आईआईआईटी और अन्य केंद्रीय वित्तपोषित तकनीकी संस्थानों में विभिन्न स्नातक इंजीनियरिंग कार्यक्रमों (बी.ई./बी.टेक) में प्रवेश के लिए एक राष्ट्रीय स्तर की इंजीनियरिंग प्रवेश परीक्षा।",
        "category": "Education & Scholarships",
        "ministry": "National Testing Agency (NTA)",
        "state": "All India",
        "type": "National",
        "beneficiary": "Students",
        "launchDate": "2002-01-01",
        "lastUpdated": "2025-01-10",
        "imageUrl": "https://images.hindustantimes.com/img/2023/01/11/550x309/jee_main_2023_1673406172968_1673406173333_1673406173333.png",
        "link": "https://jeemain.nta.nic.in/",
        "eligibility": "Candidates who have passed the 10+2 or equivalent examination with Physics, Chemistry, and Mathematics.",
        "hindiEligibility": "वे उम्मीदवार जिन्होंने भौतिकी, रसायन विज्ञान और गणित के साथ 10+2 या समकक्ष परीक्षा उत्तीर्ण की है।",
        "benefits": "Admission to prestigious engineering colleges across India. It is also the eligibility test for JEE (Advanced) for admission to IITs.",
        "documents": "10th and 12th mark sheets, ID proof, photograph, signature.",
        "applicationProcess": "Online registration through the official NTA JEE (Main) portal during the application window."
    },
    {
        "id": 69,
        "name": "NEET-UG - National Eligibility cum Entrance Test",
        "hindiName": "नीट-यूजी - राष्ट्रीय पात्रता सह प्रवेश परीक्षा",
        "description": "A single national-level entrance examination for admission to undergraduate medical courses (MBBS/BDS) and other allied courses in India.",
        "hindiDescription": "भारत में स्नातक चिकित्सा पाठ्यक्रमों (एमबीबीएस/बीडीएस) और अन्य संबद्ध पाठ्यक्रमों में प्रवेश के लिए एक एकल राष्ट्रीय स्तर की प्रवेश परीक्षा।",
        "category": "Education & Scholarships",
        "ministry": "National Testing Agency (NTA)",
        "state": "All India",
        "type": "National",
        "beneficiary": "Students",
        "launchDate": "2013-01-01",
        "lastUpdated": "2025-02-01",
        "imageUrl": "https://medbots.in/uploads/exams/exam_images/law_(60)1.jpg",
        "link": "https://neet.nta.nic.in/",
        "eligibility": "Candidates who have passed 10+2 or equivalent with Physics, Chemistry, Biology/Biotechnology, and English. Minimum age of 17 years.",
        "hindiEligibility": "वे उम्मीदवार जिन्होंने भौतिकी, रसायन विज्ञान, जीव विज्ञान/जैव प्रौद्योगिकी और अंग्रेजी के साथ 10+2 या समकक्ष उत्तीर्ण किया है। न्यूनतम आयु 17 वर्ष।",
        "benefits": "Admission to medical, dental, and AYUSH colleges across India.",
        "documents": "10th and 12th mark sheets, ID proof, photograph, signature, fingerprints.",
        "applicationProcess": "Online registration through the official NTA NEET-UG portal during the application window."
    },
    {
        "id": 70,
        "name": "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
        "hindiName": "प्रधानमंत्री कौशल विकास योजना",
        "description": "A flagship skill training scheme to enable Indian youth to take up industry-relevant skill training that will help them in securing a better livelihood.",
        "hindiDescription": "भारतीय युवाओं को उद्योग-प्रासंगिक कौशल प्रशिक्षण लेने में सक्षम बनाने के लिए एक प्रमुख कौशल प्रशिक्षण योजना जो उन्हें बेहतर आजीविका हासिल करने में मदद करेगी।",
        "category": "Employment & Skill Development",
        "ministry": "Ministry of Skill Development and Entrepreneurship",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Unemployed Youth",
        "launchDate": "2015-07-15",
        "lastUpdated": "2025-03-01",
        "imageUrl": "https://content.jdmagicbox.com/comp/jd_social/news/2018/aug/20/images/b111530d47376a92_1534764953.jpg",
        "link": "https://www.pmkvyofficial.org/",
        "eligibility": "Unemployed youth, college/school dropouts. Specific criteria may apply based on the chosen course.",
        "hindiEligibility": "बेरोजगार युवा, कॉलेज/स्कूल छोड़ने वाले। चुने गए पाठ्यक्रम के आधार पर विशिष्ट मानदंड लागू हो सकते हैं।",
        "benefits": "Free short-duration skill training, assessment, and certification. Placement assistance and monetary rewards upon successful certification.",
        "documents": "Aadhaar card, bank account details.",
        "applicationProcess": "Enroll at an accredited training center or online through the PMKVY portal."
    },
    {
        "id": 71,
        "name": "Kisan Credit Card (KCC) Scheme",
        "hindiName": "किसान क्रेडिट कार्ड (केसीसी) योजना",
        "description": "Provides farmers with timely access to credit for their cultivation and other needs in a flexible and cost-effective manner.",
        "hindiDescription": "किसानों को उनकी खेती और अन्य जरूरतों के लिए लचीले और लागत प्रभावी तरीके से समय पर ऋण उपलब्ध कराता है।",
        "category": "Agriculture & Farmers",
        "ministry": "Ministry of Finance",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Farmers",
        "launchDate": "1998-08-01",
        "lastUpdated": "2025-04-15",
        "imageUrl": "https://www.sbi.co.in/documents/16012/109723521/111021-Agri-KCC-Banner-Eng.jpg/d0c32688-6623-28f0-1015-e23a3da01297",
        "link": "https://agricoop.gov.in/en/PolicyInit/KCC",
        "eligibility": "All farmers - individuals/joint borrowers, tenant farmers, oral lessees & sharecroppers. Also extended to animal husbandry and fisheries farmers.",
        "hindiEligibility": "सभी किसान - व्यक्ति/संयुक्त उधारकर्ता, किरायेदार किसान, मौखिक पट्टेदार और बटाईदार। पशुपालन और मत्स्य पालन किसानों के लिए भी विस्तारित।",
        "benefits": "Short-term credit for crop cultivation, post-harvest expenses, and consumption requirements. Low-interest rates and flexible repayment.",
        "documents": "Land documents, ID proof (Aadhaar, PAN), photograph.",
        "applicationProcess": "Apply at any commercial bank, RRB, or cooperative bank by filling a simple one-page form."
    },
    {
        "id": 72,
        "name": "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
        "hindiName": "प्रधानमंत्री कृषि सिंचाई योजना",
        "description": "A national mission to improve farm productivity and ensure better utilization of water resources by focusing on 'Har Khet Ko Pani' and 'More Crop Per Drop'.",
        "hindiDescription": "'हर खेत को पानी' और 'मोर क्रॉप पर ड्रॉप' पर ध्यान केंद्रित करके कृषि उत्पादकता में सुधार और जल संसाधनों का बेहतर उपयोग सुनिश्चित करने के लिए एक राष्ट्रीय मिशन।",
        "category": "Agriculture & Farmers",
        "ministry": "Ministry of Agriculture & Farmers Welfare",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Farmers",
        "launchDate": "2015-07-01",
        "lastUpdated": "2025-02-28",
        "imageUrl": "https://pmksy.gov.in/images/slider/slide-1.jpg",
        "link": "https://pmksy.gov.in/",
        "eligibility": "All farmers are eligible to avail benefits under the scheme.",
        "hindiEligibility": "सभी किसान योजना के तहत लाभ उठाने के पात्र हैं।",
        "benefits": "Financial assistance/subsidy for adopting micro-irrigation systems (drip/sprinkler), creating water sources, and efficient water management.",
        "documents": "Land ownership records, Aadhaar card, bank passbook.",
        "applicationProcess": "Apply through the respective state's Agriculture or Horticulture department."
    },
    {
        "id": 73,
        "name": "Rashtriya Gokul Mission",
        "hindiName": "राष्ट्रीय गोकुल मिशन",
        "description": "A mission to conserve and develop indigenous bovine breeds in a scientific and holistic manner for enhancing milk production and productivity.",
        "hindiDescription": "दूध उत्पादन और उत्पादकता बढ़ाने के लिए वैज्ञानिक और समग्र तरीके से स्वदेशी गोजातीय नस्लों का संरक्षण और विकास करने का एक मिशन।",
        "category": "Agriculture & Farmers",
        "ministry": "Ministry of Fisheries, Animal Husbandry & Dairying",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Farmers",
        "launchDate": "2014-12-16",
        "lastUpdated": "2025-03-12",
        "imageUrl": "https://dahd.nic.in/sites/default/filess/Rashtriya%20Gokul%20Mission%20(1).jpg",
        "link": "https://dahd.nic.in/schemes/programmes/rashtriya-gokul-mission",
        "eligibility": "State Implementing Agencies (SIA), cattle breeders, farmers, and dairy cooperatives.",
        "hindiEligibility": "राज्य कार्यान्वयन एजेंसियां (SIA), पशु प्रजनक, किसान और डेयरी सहकारी समितियां।",
        "benefits": "Establishment of 'Gokul Grams' (integrated cattle development centers), assistance for breed improvement, and awards for farmers maintaining indigenous breeds.",
        "documents": "Varies based on the specific component of the scheme being applied for.",
        "applicationProcess": "Proposals are submitted by State Governments to the central ministry for funding and implementation."
    },
    {
        "id": 74,
        "name": "PM Matsya Sampada Yojana (PMMSY)",
        "hindiName": "प्रधानमंत्री मत्स्य संपदा योजना",
        "description": "A comprehensive scheme to bring about a 'Blue Revolution' through sustainable and responsible development of the fisheries sector in India.",
        "hindiDescription": "भारत में मत्स्य पालन क्षेत्र के सतत और जिम्मेदार विकास के माध्यम से 'नीली क्रांति' लाने के लिए एक व्यापक योजना।",
        "category": "Agriculture & Farmers",
        "ministry": "Ministry of Fisheries, Animal Husbandry & Dairying",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Farmers",
        "launchDate": "2020-09-10",
        "lastUpdated": "2025-04-20",
        "imageUrl": "https://dof.gov.in/sites/default/files/2020-09/pmmsy-eng_0.jpg",
        "link": "https://dof.gov.in/pmmsy",
        "eligibility": "Fishers, fish farmers, fish workers, entrepreneurs, SHGs, and Fishermen Cooperative Societies.",
        "hindiEligibility": "मछुआरे, मत्स्य पालक, मत्स्य श्रमिक, उद्यमी, स्वयं सहायता समूह और मछुआरा सहकारी समितियां।",
        "benefits": "Financial assistance for enhancing fish production, infrastructure development, and establishing a robust fisheries management framework.",
        "documents": "Project proposal, land/water body documents, ID proof, caste certificate (if applicable).",
        "applicationProcess": "Apply through the respective State/UT Fisheries Department with a detailed project report (DPR)."
    },
    {
        "id": 75,
        "name": "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
        "hindiName": "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम (मनरेगा)",
        "description": "A social security scheme that aims to enhance livelihood security in rural areas by providing at least 100 days of guaranteed wage employment in a financial year.",
        "hindiDescription": "एक सामाजिक सुरक्षा योजना जिसका उद्देश्य एक वित्तीय वर्ष में कम से कम 100 दिनों के गारंटीकृत मजदूरी रोजगार प्रदान करके ग्रामीण क्षेत्रों में आजीविका सुरक्षा को बढ़ाना है।",
        "category": "Employment & Skill Development",
        "ministry": "Ministry of Rural Development",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2006-02-02",
        "lastUpdated": "2025-04-01",
        "imageUrl": "https://s3-ap-southeast-1.amazonaws.com/rbplus/wp-content/uploads/2020/04/16183021/MGNREGA.jpg",
        "link": "https://nrega.nic.in/",
        "eligibility": "Every adult member of a rural household who is willing to do unskilled manual work.",
        "hindiEligibility": "एक ग्रामीण परिवार का प्रत्येक वयस्क सदस्य जो अकुशल शारीरिक कार्य करने को तैयार है।",
        "benefits": "Legal guarantee of 100 days of wage employment per rural household. Creation of durable assets in rural areas.",
        "documents": "Application form, residence proof, Aadhaar card, photograph.",
        "applicationProcess": "Register with the local Gram Panchayat to get a Job Card."
    },
    {
        "id": 76,
        "name": "Pashu Kisan Credit Card Scheme",
        "hindiName": "पशु किसान क्रेडिट कार्ड योजना",
        "description": "A scheme by the Haryana Government to provide credit to farmers for meeting their working capital requirements for animal husbandry activities.",
        "hindiDescription": "हरियाणा सरकार द्वारा किसानों को पशुपालन गतिविधियों के लिए उनकी कार्यशील पूंजी की आवश्यकताओं को पूरा करने के लिए ऋण प्रदान करने की एक योजना।",
        "category": "Agriculture & Farmers",
        "ministry": "Haryana Animal Husbandry & Dairying Department",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "Farmers",
        "launchDate": "2019-12-01",
        "lastUpdated": "2025-03-25",
        "imageUrl": "https://i.ytimg.com/vi/1_1F_z0jN4g/maxresdefault.jpg",
        "link": "https://pashudhanharyana.gov.in/",
        "eligibility": "Farmers in Haryana who own livestock like cows, buffaloes, goats, sheep, or poultry.",
        "hindiEligibility": "हरियाणा के किसान जिनके पास गाय, भैंस, बकरी, भेड़ या मुर्गी जैसे पशुधन हैं।",
        "benefits": "Short-term loan up to ₹3 lakh. Loan up to ₹1.60 lakh is collateral-free. Low-interest rate of 4% if repaid on time.",
        "documents": "Animal health certificate, ID proof (Aadhaar), land records, bank account details.",
        "applicationProcess": "Apply at the nearest bank branch with the required documents."
    },
    {
        "id": 77,
        "name": "Rashtriya Bal Swasthya Karyakram (RBSK)",
        "hindiName": "राष्ट्रीय बाल स्वास्थ्य कार्यक्रम",
        "description": "An initiative under the National Health Mission aiming at early identification and intervention for children from birth to 18 years to cover defects at birth, deficiencies, diseases, and developmental delays.",
        "hindiDescription": "राष्ट्रीय स्वास्थ्य मिशन के तहत एक पहल जिसका उद्देश्य जन्म से 18 वर्ष तक के बच्चों में जन्मजात दोष, कमियों, बीमारियों और विकासात्मक देरी को कवर करने के लिए शीघ्र पहचान और हस्तक्षेप करना है।",
        "category": "Health & Wellness",
        "ministry": "Ministry of Health and Family Welfare",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Women & Child",
        "launchDate": "2013-02-01",
        "lastUpdated": "2025-02-10",
        "imageUrl": "https://nhm.gov.in/images/pdf/programmes/RBSK/img/rbsk_child_img.jpg",
        "link": "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=992&lid=364",
        "eligibility": "All children aged 0-18 years enrolled in Anganwadis and government/government-aided schools.",
        "hindiEligibility": "आंगनवाड़ियों और सरकारी/सरकारी सहायता प्राप्त स्कूलों में नामांकित 0-18 वर्ष की आयु के सभी बच्चे।",
        "benefits": "Free screening, referral, and treatment for 30 selected health conditions.",
        "documents": "Enrollment in Anganwadi/school.",
        "applicationProcess": "Screening is conducted by dedicated mobile health teams at Anganwadis and schools."
    },
    {
        "id": 78,
        "name": "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)",
        "hindiName": "प्रधानमंत्री सुरक्षित मातृत्व अभियान",
        "description": "Provides pregnant women with a fixed day of assured, comprehensive, and quality antenatal care, free of cost, universally.",
        "hindiDescription": "गर्भवती महिलाओं को सार्वभौमिक रूप से, मुफ्त में, एक निश्चित दिन पर सुनिश्चित, व्यापक और गुणवत्तापूर्ण प्रसव पूर्व देखभाल प्रदान करता है।",
        "category": "Health & Wellness",
        "ministry": "Ministry of Health and Family Welfare",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Women",
        "launchDate": "2016-06-09",
        "lastUpdated": "2025-03-05",
        "imageUrl": "https://vikaspedia.in/schemes/health-schemes/pradhan-mantri-surakshit-matritva-abhiyan-pmsma/pmsma.jpg/@@images/5858079d-3fcd-40cd-a043-4a00508542cd.jpeg",
        "link": "https://pmsma.nhp.gov.in/",
        "eligibility": "All pregnant women in their 2nd and 3rd trimesters.",
        "hindiEligibility": "अपनी दूसरी और तीसरी तिमाही में सभी गर्भवती महिलाएं।",
        "benefits": "Free health check-ups, investigations (like ultrasound, blood tests), and counseling by a specialist on the 9th of every month at designated health facilities.",
        "documents": "Mother-Child Protection (MCP) Card.",
        "applicationProcess": "Visit the designated public health facility on the 9th of any month."
    },
    {
        "id": 79,
        "name": "AMRUT Mission",
        "hindiName": "अमृत मिशन",
        "description": "Atal Mission for Rejuvenation and Urban Transformation (AMRUT) aims to provide basic services like water supply, sewerage, and urban transport to households in selected cities to improve the quality of life.",
        "hindiDescription": "कायाकल्प और शहरी परिवर्तन के लिए अटल मिशन (अमृत) का उद्देश्य जीवन की गुणवत्ता में सुधार के लिए चयनित शहरों में घरों को पानी की आपूर्ति, सीवरेज और शहरी परिवहन जैसी बुनियादी सेवाएं प्रदान करना है।",
        "category": "Housing & Infrastructure",
        "ministry": "Ministry of Housing and Urban Affairs",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2015-06-25",
        "lastUpdated": "2025-01-28",
        "imageUrl": "https://static.smartcitiescouncil.com/styles/panopoly_image_original/public/amrut-atal-mission-rejuvenation-and-urban-transformation.jpg",
        "link": "https://amrut.mohua.gov.in/",
        "eligibility": "Residents of the 500 cities selected under the AMRUT mission.",
        "hindiEligibility": "अमृत मिशन के तहत चयनित 500 शहरों के निवासी।",
        "benefits": "Development of infrastructure related to water supply, sewerage management, storm water drainage, non-motorized urban transport, and green spaces.",
        "documents": "Not applicable for individuals; it is a project-based mission.",
        "applicationProcess": "Projects are proposed and implemented by State Governments and Urban Local Bodies (ULBs)."
    },
    {
        "id": 80,
        "name": "Smart Cities Mission",
        "hindiName": "स्मार्ट सिटीज मिशन",
        "description": "A mission to develop 100 cities across the country, making them citizen-friendly and sustainable by applying 'Smart' solutions.",
        "hindiDescription": "'स्मार्ट' समाधान लागू करके देश भर में 100 शहरों को विकसित करने, उन्हें नागरिक-अनुकूल और टिकाऊ बनाने का एक मिशन।",
        "category": "Housing & Infrastructure",
        "ministry": "Ministry of Housing and Urban Affairs",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2015-06-25",
        "lastUpdated": "2025-02-25",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/d/d7/Smart_Cities_Mission_logo.png",
        "link": "https://smartcities.gov.in/",
        "eligibility": "Residents of the 100 cities selected through a competitive process. (In Haryana: Karnal and Faridabad).",
        "hindiEligibility": "एक प्रतिस्पर्धी प्रक्रिया के माध्यम से चयनित 100 शहरों के निवासी। (हरियाणा में: करनाल और फरीदाबाद)।",
        "benefits": "Improved core infrastructure, clean and sustainable environment, and a better quality of life through the application of smart solutions.",
        "documents": "Not applicable for individuals; it is a project-based mission.",
        "applicationProcess": "Implemented by a Special Purpose Vehicle (SPV) set up for each city."
    },
    {
        "id": 81,
        "name": "Swachh Bharat Mission (Gramin & Urban)",
        "hindiName": "स्वच्छ भारत मिशन (ग्रामीण और शहरी)",
        "description": "A nationwide campaign to achieve universal sanitation coverage and to make India Open Defecation Free (ODF).",
        "hindiDescription": "सार्वभौमिक स्वच्छता कवरेज प्राप्त करने और भारत को खुले में शौच से मुक्त (ओडीएफ) बनाने के लिए एक राष्ट्रव्यापी अभियान।",
        "category": "Health & Wellness",
        "ministry": "Ministry of Jal Shakti (Gramin) & Ministry of Housing and Urban Affairs (Urban)",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2014-10-02",
        "lastUpdated": "2025-04-22",
        "imageUrl": "https://i.ndtvimg.com/i/2018-01/swachh-bharat-abhiyan_650x400_71517056333.jpg",
        "link": "https://swachhbharatmission.gov.in/",
        "eligibility": "Rural and urban households without access to toilets.",
        "hindiEligibility": "शौचालय की सुविधा के बिना ग्रामीण और शहरी परिवार।",
        "benefits": "Incentive of ₹12,000 for the construction of individual household latrines (IHHL). Focus on solid and liquid waste management.",
        "documents": "Aadhaar card, bank account details, photograph.",
        "applicationProcess": "Apply through the local Gram Panchayat or Urban Local Body."
    },
    {
        "id": 82,
        "name": "Unique Disability ID (UDID) Card",
        "hindiName": "विशिष्ट विकलांगता आईडी (यूडीआईडी) कार्ड",
        "description": "A project to create a national database for Persons with Disabilities and to issue a unique ID card to each, which will be the single document of identification and verification.",
        "hindiDescription": "विकलांग व्यक्तियों के लिए एक राष्ट्रीय डेटाबेस बनाने और प्रत्येक को एक अद्वितीय आईडी कार्ड जारी करने की एक परियोजना, जो पहचान और सत्यापन का एकमात्र दस्तावेज होगा।",
        "category": "Persons with Disabilities",
        "ministry": "Ministry of Social Justice and Empowerment",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Persons with Disabilities",
        "launchDate": "2016-12-01",
        "lastUpdated": "2025-05-10",
        "imageUrl": "https://www.thehindu.com/theme/images/th-online/logo-1200x1200.png",
        "link": "https://www.swavlambancard.gov.in/",
        "eligibility": "All persons with disabilities as defined in the RPwD Act, 2016.",
        "hindiEligibility": "RPwD अधिनियम, 2016 में परिभाषित सभी विकलांग व्यक्ति।",
        "benefits": "A single card for identity and availing various government benefits and schemes, valid across India.",
        "documents": "Disability certificate, photograph, signature/thumb impression, ID proof.",
        "applicationProcess": "Apply online at the Swavlamban card portal or through District Disability Rehabilitation Centres (DDRCs)."
    },
    {
        "id": 83,
        "name": "Pradhan Mantri Vaya Vandana Yojana (PMVVY)",
        "hindiName": "प्रधानमंत्री वय वंदना योजना",
        "description": "A pension scheme for senior citizens that provides an assured pension based on a lump sum investment, managed by LIC.",
        "hindiDescription": "वरिष्ठ नागरिकों के लिए एक पेंशन योजना जो एकमुश्त निवेश के आधार पर एक सुनिश्चित पेंशन प्रदान करती है, जिसका प्रबंधन एलआईसी द्वारा किया जाता है।",
        "category": "Senior Citizens",
        "ministry": "Ministry of Finance",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Senior Citizens",
        "launchDate": "2017-05-04",
        "lastUpdated": "2025-03-31",
        "imageUrl": "https://licindia.in/CorporateSite/media/LIC-Corporate/Product/PMVVY-Campaign-Banner-Eng_Final.jpg",
        "link": "https://licindia.in/Products/Pension-Plans/Pradhan-Mantri-Vaya-Vandana-Yojana",
        "eligibility": "Citizens aged 60 years and above.",
        "hindiEligibility": "60 वर्ष और उससे अधिक आयु के नागरिक।",
        "benefits": "Provides a guaranteed pension at a specified rate for 10 years. Maximum investment limit is ₹15 lakh.",
        "documents": "Aadhaar card, PAN card, bank details, proof of age.",
        "applicationProcess": "Purchase the policy online from the LIC website or offline through LIC agents/branches."
    },
    {
        "id": 84,
        "name": "Haryana Ladli Scheme",
        "hindiName": "हरियाणा लाडली योजना",
        "description": "A scheme to improve the status of the girl child and to combat female foeticide by providing financial assistance to families on the birth of a second girl child.",
        "hindiDescription": "दूसरी बेटी के जन्म पर परिवारों को वित्तीय सहायता प्रदान करके बालिका की स्थिति में सुधार लाने और कन्या भ्रूण हत्या से निपटने की एक योजना।",
        "category": "Women & Child Development",
        "ministry": "Haryana Women and Child Development Department",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "Women & Child",
        "launchDate": "2005-08-20",
        "lastUpdated": "2025-02-22",
        "imageUrl": "https://wcdhry.gov.in/wp-content/uploads/2023/12/ladli.jpg",
        "link": "https://wcdhry.gov.in/schemes-for-children/ladli-scheme/",
        "eligibility": "Families with a second girl child born on or after August 20, 2005, residing in Haryana.",
        "hindiEligibility": "20 अगस्त 2005 को या उसके बाद जन्मी दूसरी बेटी वाले परिवार, जो हरियाणा में रहते हैं।",
        "benefits": "Financial assistance of ₹5,000 per year for five years is invested in a Kisan Vikas Patra in the name of the second girl child, which matures when she turns 18.",
        "documents": "Birth certificates of both girl children, residence proof, Aadhaar cards.",
        "applicationProcess": "Apply through the local Anganwadi Centre within one year of the birth of the second girl child."
    },
    {
        "id": 85,
        "name": "Haryana State Transport Bus Pass Scheme",
        "hindiName": "हरियाणा राज्य परिवहन बस पास योजना",
        "description": "Provides concessional bus passes to students and other eligible categories for travel in Haryana Roadways buses.",
        "hindiDescription": "छात्रों और अन्य पात्र श्रेणियों को हरियाणा रोडवेज की बसों में यात्रा के लिए रियायती बस पास प्रदान करता है।",
        "category": "Education & Scholarships",
        "ministry": "Transport Department, Haryana",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "Students",
        "launchDate": "1990-01-01",
        "lastUpdated": "2025-06-30",
        "imageUrl": "https://gurgaonmerijan.com/wp-content/uploads/2025/04/Untitled-design-2025-04-23T160603.892.jpg",
        "link": "https://hartrans.gov.in/bus-passes/",
        "eligibility": "Students of recognized schools/colleges/universities in Haryana, senior citizens, persons with disabilities, and other specified categories.",
        "hindiEligibility": "हरियाणा के मान्यता प्राप्त स्कूलों/कॉलेजों/विश्वविद्यालयों के छात्र, वरिष्ठ नागरिक, विकलांग व्यक्ति और अन्य निर्दिष्ट श्रेणियां।",
        "benefits": "Free or highly subsidized travel in Haryana Roadways buses.",
        "documents": "Institute ID card, fee receipt, Aadhaar card, photograph.",
        "applicationProcess": "Apply online through the Haryana Roadways portal or offline at bus depots."
    },
    {
        "id": 86,
        "name": "National Food Security Act (NFSA)",
        "hindiName": "राष्ट्रीय खाद्य सुरक्षा अधिनियम (एनएफएसए)",
        "description": "An act to provide for food and nutritional security by ensuring access to an adequate quantity of quality food at affordable prices.",
        "hindiDescription": "सस्ती कीमतों पर पर्याप्त मात्रा में गुणवत्तापूर्ण भोजन तक पहुंच सुनिश्चित करके खाद्य और पोषण सुरक्षा प्रदान करने के लिए एक अधिनियम।",
        "category": "Health & Wellness",
        "ministry": "Ministry of Consumer Affairs, Food & Public Distribution",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2013-09-10",
        "lastUpdated": "2025-04-01",
        "imageUrl": "https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2013/09/06/Photos/food%20security--621x414.jpg",
        "link": "https://dfpd.gov.in/nfsa-act.htm",
        "eligibility": "Households identified as eligible by State Governments under Antyodaya Anna Yojana (AAY) and Priority Households (PHH).",
        "hindiEligibility": "राज्य सरकारों द्वारा अंत्योदय अन्न योजना (एएवाई) और प्राथमिकता वाले परिवारों (पीएचएच) के तहत पात्र के रूप में पहचाने गए परिवार।",
        "benefits": "Provides highly subsidized food grains (rice, wheat, coarse grains) through the Targeted Public Distribution System (TPDS).",
        "documents": "Ration Card (AAY or PHH).",
        "applicationProcess": "Application for a ration card is made to the respective state's food and civil supplies department."
    },
    {
        "id": 87,
        "name": "Deen Dayal Upadhyaya Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM)",
        "hindiName": "दीनदयाल अंत्योदय योजना - राष्ट्रीय ग्रामीण आजीविका मिशन",
        "description": "Aims at poverty alleviation by organizing the rural poor into Self Help Groups (SHGs) and providing them with financial and livelihood support.",
        "hindiDescription": "ग्रामीण गरीबों को स्वयं सहायता समूहों (एसएचजी) में संगठित करके और उन्हें वित्तीय और आजीविका सहायता प्रदान करके गरीबी उन्मूलन का लक्ष्य।",
        "category": "Employment & Skill Development",
        "ministry": "Ministry of Rural Development",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Women",
        "launchDate": "2011-06-01",
        "lastUpdated": "2025-03-20",
        "imageUrl": "https://nrlm.gov.in/images/logo.png",
        "link": "https://nrlm.gov.in/",
        "eligibility": "Primarily targets rural poor women to form Self Help Groups.",
        "hindiEligibility": "मुख्य रूप से ग्रामीण गरीब महिलाओं को स्वयं सहायता समूह बनाने के लिए लक्षित करता है।",
        "benefits": "Access to credit, training, and support for various livelihood activities. Promotion of women-led enterprises.",
        "documents": "Aadhaar card, BPL card (if available).",
        "applicationProcess": "Joining or forming an SHG at the village level, which is then linked to the mission's network."
    },
    {
        "id": 88,
        "name": "Haryana ITI Admissions",
        "hindiName": "हरियाणा आईटीआई प्रवेश",
        "description": "Centralized online admission process for diploma and certificate courses in various technical and non-technical trades in Government and Private Industrial Training Institutes (ITIs) of Haryana.",
        "hindiDescription": "हरियाणा के सरकारी और निजी औद्योगिक प्रशिक्षण संस्थानों (आईटीआई) में विभिन्न तकनीकी और गैर-तकनीकी ट्रेडों में डिप्लोमा और सर्टिफिकेट पाठ्यक्रमों के लिए केंद्रीकृत ऑनलाइन प्रवेश प्रक्रिया।",
        "category": "Education & Scholarships",
        "ministry": "Skill Development & Industrial Training Department, Haryana",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "Students",
        "launchDate": "2025-06-01",
        "lastUpdated": "2025-05-25",
        "imageUrl": "https://img2.freejobalert.com/freejobalert/2025/07/haryana-iti-admission-2025-26-application-form-courses-fees-at-admissionsitiharyanagov-686650a3ddca62247699-1200.webp",
        "link": "https://itiharyana.gov.in/",
        "eligibility": "Candidates who have passed 8th, 10th, or 12th class, depending on the trade they are applying for. Must be a resident of Haryana.",
        "hindiEligibility": "वे उम्मीदवार जिन्होंने 8वीं, 10वीं या 12वीं कक्षा उत्तीर्ण की है, जो उनके द्वारा आवेदन किए जा रहे ट्रेड पर निर्भर करता है। हरियाणा का निवासी होना चाहिए।",
        "benefits": "Opportunity to gain vocational skills and certification, leading to employment or self-employment.",
        "documents": "Academic mark sheets, domicile certificate, category certificate, Aadhaar card.",
        "applicationProcess": "Online registration and choice filling on the official Haryana ITI admissions portal."
    },
    {
        "id": 89,
        "name": "National Apprenticeship Promotion Scheme (NAPS)",
        "hindiName": "राष्ट्रीय शिक्षुता प्रोत्साहन योजना",
        "description": "A scheme to promote apprenticeship training by sharing a portion of the stipend cost with employers and providing basic training cost.",
        "hindiDescription": "नियोक्ताओं के साथ वजीफे की लागत का एक हिस्सा साझा करके और बुनियादी प्रशिक्षण लागत प्रदान करके शिक्षुता प्रशिक्षण को बढ़ावा देने की एक योजना।",
        "category": "Employment & Skill Development",
        "ministry": "Ministry of Skill Development and Entrepreneurship",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Unemployed Youth",
        "launchDate": "2016-08-19",
        "lastUpdated": "2025-04-18",
        "imageUrl": "https://www.apprenticeshipindia.gov.in/images/msde-new.png",
        "link": "https://www.apprenticeshipindia.gov.in/",
        "eligibility": "Candidates who have completed basic education/skill training (e.g., ITI pass-outs, graduates) and are seeking on-the-job training.",
        "hindiEligibility": "वे उम्मीदवार जिन्होंने बुनियादी शिक्षा/कौशल प्रशिक्षण पूरा कर लिया है (जैसे, आईटीआई पास-आउट, स्नातक) और नौकरी पर प्रशिक्षण की तलाश में हैं।",
        "benefits": "Earn a stipend during training, gain practical experience, and get a nationally recognized certificate.",
        "documents": "Aadhaar card, educational/technical qualification certificates, bank account.",
        "applicationProcess": "Candidates register on the Apprenticeship India portal and apply for opportunities posted by establishments."
    },
    {
        "id": 90,
        "name": "Pre-Matric Scholarship for Minorities",
        "hindiName": "अल्पसंख्यकों के लिए प्री-मैट्रिक छात्रवृत्ति",
        "description": "Provides financial assistance to students from minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) for education from Class I to X.",
        "hindiDescription": "अल्पसंख्यक समुदायों (मुस्लिम, ईसाई, सिख, बौद्ध, जैन, पारसी) के छात्रों को कक्षा I से X तक की शिक्षा के लिए वित्तीय सहायता प्रदान करता है।",
        "category": "Education & Scholarships",
        "ministry": "Ministry of Minority Affairs",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Students",
        "launchDate": "2008-01-01",
        "lastUpdated": "2025-07-31",
        "imageUrl": "https://d2w7l1p59qkl0r.cloudfront.net/article/wp-content/uploads/2022/08/16105403/Pre-Matric-Scholarship-for-Minorities.jpg",
        "link": "https://scholarships.gov.in/",
        "eligibility": "Students from minority communities studying in Class 1 to 10, with family income not exceeding ₹1 lakh per annum, and having secured at least 50% marks in the previous final examination.",
        "hindiEligibility": "कक्षा 1 से 10 में पढ़ने वाले अल्पसंख्यक समुदायों के छात्र, जिनकी पारिवारिक आय प्रति वर्ष ₹1 लाख से अधिक नहीं है, और जिन्होंने पिछली अंतिम परीक्षा में कम से कम 50% अंक प्राप्त किए हैं।",
        "benefits": "Admission fee, tuition fee, and maintenance allowance.",
        "documents": "Minority community certificate, income certificate, mark sheet of previous year, Aadhaar card.",
        "applicationProcess": "Online application on the National Scholarship Portal (NSP)."
    },
    {
        "id": 91,
        "name": "One Stop Centre Scheme (Sakhi)",
        "hindiName": "वन स्टॉप सेंटर योजना (सखी)",
        "description": "Provides integrated support and assistance under one roof to women affected by violence, both in private and public spaces.",
        "hindiDescription": "निजी और सार्वजनिक दोनों स्थानों पर हिंसा से प्रभावित महिलाओं को एक ही छत के नीचे एकीकृत सहायता और सहायता प्रदान करता है।",
        "category": "Women & Child Development",
        "ministry": "Ministry of Women and Child Development",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Women",
        "launchDate": "2015-04-01",
        "lastUpdated": "2025-04-08",
        "imageUrl": "https://wcd.nic.in/sites/default/files/logo_6.png",
        "link": "https://wcd.nic.in/schemes/one-stop-centre-scheme",
        "eligibility": "Any woman or girl (including those below 18 years) affected by violence.",
        "hindiEligibility": "हिंसा से प्रभावित कोई भी महिला या लड़की (18 वर्ष से कम आयु वालों सहित)।",
        "benefits": "Provides emergency and non-emergency services including medical aid, legal assistance, psycho-social counseling, and temporary shelter.",
        "documents": "No mandatory documents required to access services.",
        "applicationProcess": "Women can approach the One Stop Centre directly or through the women's helpline number 181."
    },
    {
        "id": 92,
        "name": "UGC-NET - University Grants Commission National Eligibility Test",
        "hindiName": "यूजीसी-नेट - विश्वविद्यालय अनुदान आयोग राष्ट्रीय पात्रता परीक्षा",
        "description": "A test to determine the eligibility for 'Assistant Professor' and 'Junior Research Fellowship and Assistant Professor' in Indian universities and colleges.",
        "hindiDescription": "भारतीय विश्वविद्यालयों और कॉलेजों में 'सहायक प्रोफेसर' और 'जूनियर रिसर्च फेलोशिप और सहायक प्रोफेसर' के लिए पात्रता निर्धारित करने की एक परीक्षा।",
        "category": "Education & Scholarships",
        "ministry": "National Testing Agency (NTA)",
        "state": "All India",
        "type": "National",
        "beneficiary": "Students",
        "launchDate": "1989-01-01",
        "lastUpdated": "2025-03-15",
        "imageUrl": "https://static.toiimg.com/thumb/msid-98518832,width-1280,height-720,resizemode-4/98518832.jpg",
        "link": "https://ugcnet.nta.nic.in/",
        "eligibility": "Candidates with a Master's degree or equivalent with at least 55% marks.",
        "hindiEligibility": "कम से कम 55% अंकों के साथ मास्टर डिग्री या समकक्ष वाले उम्मीदवार।",
        "benefits": "Eligibility for Assistant Professorship and Junior Research Fellowship (JRF), which includes a monthly stipend for Ph.D. research.",
        "documents": "Master's degree certificate, category certificate, ID proof.",
        "applicationProcess": "Online application through the official NTA UGC-NET portal, conducted twice a year."
    },
    {
        "id": 93,
        "name": "National Means-cum-Merit Scholarship Scheme (NMMSS)",
        "hindiName": "राष्ट्रीय मीन्स-कम-मेरिट छात्रवृत्ति योजना",
        "description": "A centrally sponsored scholarship scheme to award scholarships to meritorious students of economically weaker sections to arrest their drop-out at class VIII.",
        "hindiDescription": "आर्थिक रूप से कमजोर वर्गों के मेधावी छात्रों को आठवीं कक्षा में उनकी पढ़ाई छोड़ने से रोकने के लिए छात्रवृत्ति प्रदान करने के लिए एक केंद्र प्रायोजित छात्रवृत्ति योजना।",
        "category": "Education & Scholarships",
        "ministry": "Department of School Education & Literacy",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Students",
        "launchDate": "2008-05-01",
        "lastUpdated": "2025-08-10",
        "imageUrl": "https://etvbharatimages.akamaized.net/etvbharat/prod-images/320-214-16544584-262-16544584-1664798485952.jpg",
        "link": "https://scholarships.gov.in/",
        "eligibility": "Students studying in Class IX, who have secured at least 55% marks in the Class VIII examination and whose parental income is not more than ₹3.5 lakh per annum.",
        "hindiEligibility": "कक्षा IX में पढ़ने वाले छात्र, जिन्होंने कक्षा VIII की परीक्षा में कम से कम 55% अंक प्राप्त किए हैं और जिनके माता-पिता की आय प्रति वर्ष ₹3.5 लाख से अधिक नहीं है।",
        "benefits": "Scholarship of ₹12,000 per annum to study from Class IX to Class XII in government-aided schools.",
        "documents": "Income certificate, caste certificate, mark sheets, domicile certificate.",
        "applicationProcess": "Students must appear for a selection test conducted by the State Government. Applications are then submitted on the National Scholarship Portal (NSP)."
    },
    {
        "id": 94,
        "name": "e-NAM (National Agriculture Market)",
        "hindiName": "ई-नाम (राष्ट्रीय कृषि बाजार)",
        "description": "A pan-India electronic trading portal which networks the existing APMC mandis to create a unified national market for agricultural commodities.",
        "hindiDescription": "एक अखिल भारतीय इलेक्ट्रॉनिक ट्रेडिंग पोर्टल जो कृषि जिंसों के लिए एक एकीकृत राष्ट्रीय बाजार बनाने के लिए मौजूदा एपीएमसी मंडियों को नेटवर्क करता है।",
        "category": "Agriculture & Farmers",
        "ministry": "Ministry of Agriculture & Farmers Welfare",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Farmers",
        "launchDate": "2016-04-14",
        "lastUpdated": "2025-04-30",
        "imageUrl": "https://www.enam.gov.in/web/Content/assets/images/logo.png",
        "link": "https://www.enam.gov.in/",
        "eligibility": "Farmers, Traders, and Buyers registered with APMC mandis integrated with the e-NAM platform.",
        "hindiEligibility": "ई-नाम प्लेटफॉर्म के साथ एकीकृत एपीएमसी मंडियों में पंजीकृत किसान, व्यापारी और खरीदार।",
        "benefits": "Provides better price discovery for farmers through transparent auctioning and access to a wider market.",
        "documents": "Aadhaar card, bank passbook.",
        "applicationProcess": "Farmers can register on the e-NAM portal or at their local APMC mandi."
    },
    {
        "id": 95,
        "name": "Haryana Scheduled Castes Finance and Development Corporation (HSFDC) Loan Scheme",
        "hindiName": "हरियाणा अनुसूचित जाति वित्त एवं विकास निगम (एचएसएफडीसी) ऋण योजना",
        "description": "Provides loans at subsidized interest rates to members of Scheduled Castes in Haryana for setting up self-employment ventures.",
        "hindiDescription": "हरियाणा में अनुसूचित जाति के सदस्यों को स्वरोजगार उद्यम स्थापित करने के लिए रियायती ब्याज दरों पर ऋण प्रदान करता है।",
        "category": "SC/ST/OBC Welfare",
        "ministry": "Welfare of SC & BC Department, Haryana",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "SC/ST/OBC",
        "launchDate": "1971-01-02",
        "lastUpdated": "2025-03-22",
        "imageUrl": "https://hsfdc.org.in/images/logo.png",
        "link": "https://hsfdc.org.in/",
        "eligibility": "Members of Scheduled Castes of Haryana, living below the poverty line, aged between 18 and 60.",
        "hindiEligibility": "हरियाणा की अनुसूचित जातियों के सदस्य, जो गरीबी रेखा से नीचे जीवन यापन कर रहे हैं, जिनकी आयु 18 से 60 के बीच है।",
        "benefits": "Subsidized loans for various income-generating activities in agriculture, industry, and service sectors.",
        "documents": "Caste certificate, income certificate, project report, Aadhaar card, residence proof.",
        "applicationProcess": "Apply through the District Manager of HSFDC in the respective district."
    },
    {
        "id": 96,
        "name": "Deen Dayal Upadhyaya Gram Jyoti Yojana (DDUGJY)",
        "hindiName": "दीनदयाल उपाध्याय ग्राम ज्योति योजना",
        "description": "A scheme designed to provide continuous power supply to rural India by separating agriculture and non-agriculture feeders.",
        "hindiDescription": "कृषि और गैर-कृषि फीडरों को अलग करके ग्रामीण भारत को निरंतर बिजली की आपूर्ति प्रदान करने के लिए बनाई गई एक योजना।",
        "category": "Housing & Infrastructure",
        "ministry": "Ministry of Power",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2015-07-25",
        "lastUpdated": "2025-01-25",
        "imageUrl": "https://ddugjy.in/images/logo.png",
        "link": "https://ddugjy.in/",
        "eligibility": "Aimed at all rural households, especially those without electricity connections.",
        "hindiEligibility": "सभी ग्रामीण परिवारों का लक्ष्य, विशेष रूप से जिनके पास बिजली कनेक्शन नहीं है।",
        "benefits": "Strengthening of sub-transmission and distribution infrastructure, feeder separation, and rural electrification to ensure 24x7 power for all.",
        "documents": "Not applicable for individuals; it is an infrastructure scheme.",
        "applicationProcess": "Implemented by State Power Distribution Companies (DISCOMs)."
    },
    {
        "id": 97,
        "name": "Ayushman Bharat Health and Wellness Centres (AB-HWCs)",
        "hindiName": "आयुष्मान भारत - स्वास्थ्य और कल्याण केंद्र",
        "description": "A component of Ayushman Bharat to upgrade existing Sub-Health Centres and Primary Health Centres to provide Comprehensive Primary Health Care.",
        "hindiDescription": "व्यापक प्राथमिक स्वास्थ्य देखभाल प्रदान करने के लिए मौजूदा उप-स्वास्थ्य केंद्रों और प्राथमिक स्वास्थ्य केंद्रों को उन्नत करने के लिए आयुष्मान भारत का एक घटक।",
        "category": "Health & Wellness",
        "ministry": "Ministry of Health and Family Welfare",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2018-04-14",
        "lastUpdated": "2025-04-14",
        "imageUrl": "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2022/04/20081748/Ayushman-Bharat-Health-and-Wellness-Centres.jpg",
        "link": "https://ab-hwc.nhp.gov.in/",
        "eligibility": "All citizens, especially those in rural and underserved areas.",
        "hindiEligibility": "सभी नागरिक, विशेष रूप से ग्रामीण और असेवित क्षेत्रों में रहने वाले।",
        "benefits": "Free essential drugs and diagnostic services, and care for maternal and child health, communicable and non-communicable diseases closer to the community.",
        "documents": "No specific documents required to access services.",
        "applicationProcess": "Visit the nearest Health and Wellness Centre for services."
    },
    {
        "id": 98,
        "name": "Beti Bachao, Beti Padhao (BBBP) Scheme",
        "hindiName": "बेटी बचाओ, बेटी पढ़ाओ योजना",
        "description": "A national campaign aimed at addressing the declining Child Sex Ratio (CSR) and empowering the girl child through education and social change.",
        "hindiDescription": "गिरते बाल लिंगानुपात (सीएसआर) को संबोधित करने और शिक्षा और सामाजिक परिवर्तन के माध्यम से बालिकाओं को सशक्त बनाने के उद्देश्य से एक राष्ट्रीय अभियान।",
        "category": "Women & Child Development",
        "ministry": "Ministry of Women and Child Development",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Women & Child",
        "launchDate": "2015-01-22",
        "lastUpdated": "2025-05-15",
        "imageUrl": "https://i0.wp.com/iasnext.com/wp-content/uploads/2024/02/Beti-Bachao-Beti-Padhao.webp",
        "link": "https://mon.nic.in/scheme/beti-bachao-beti-padhao/",
        "eligibility": "The scheme targets all families, particularly in districts with low Child Sex Ratio.",
        "hindiEligibility": "यह योजना सभी परिवारों को लक्षित करती है, विशेष रूप से कम बाल लिंगानुपात वाले जिलों में।",
        "benefits": "Focuses on awareness campaigns, preventing gender-biased sex selection, and promoting girls' education and participation.",
        "documents": "Not an individual benefit scheme; it is a social campaign.",
        "applicationProcess": "Implemented through district-level task forces and community engagement."
    },
    {
        "id": 99,
        "name": "HPSC Civil Services (HCS) Examination",
        "hindiName": "एचपीएससी सिविल सेवा (एचसीएस) परीक्षा",
        "description": "A state-level competitive examination conducted by the Haryana Public Service Commission for recruitment to various executive and allied state civil services.",
        "hindiDescription": "विभिन्न कार्यकारी और संबद्ध राज्य सिविल सेवाओं में भर्ती के लिए हरियाणा लोक सेवा आयोग द्वारा आयोजित एक राज्य स्तरीय प्रतियोगी परीक्षा।",
        "category": "Employment & Skill Development",
        "ministry": "Haryana Public Service Commission (HPSC)",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "Unemployed Youth",
        "launchDate": "2025-03-01",
        "lastUpdated": "2025-02-15",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xW7g4zXJ9L-lK6kC-o9H6E5QzRj-y5kzA&s",
        "link": "https://hpsc.gov.in/",
        "eligibility": "Bachelor's Degree from a recognized university. Age typically between 21-42 years (with relaxations).",
        "hindiEligibility": "किसी मान्यता प्राप्त विश्वविद्यालय से स्नातक की डिग्री। आयु आमतौर पर 21-42 वर्ष के बीच (छूट के साथ)।",
        "benefits": "Recruitment to prestigious posts like HCS (Executive Branch), DSP, Tehsildar, etc., in the Haryana Government.",
        "documents": "Graduation certificate, ID proof, domicile certificate, photograph.",
        "applicationProcess": "Online application through the official HPSC portal when the recruitment notification is released."
    },
    {
        "id": 100,
        "name": "Prime Minister's Employment Generation Programme (PMEGP)",
        "hindiName": "प्रधानमंत्री रोजगार सृजन कार्यक्रम",
        "description": "A credit-linked subsidy program for setting up new micro-enterprises in the non-farm sector.",
        "hindiDescription": "गैर-कृषि क्षेत्र में नए सूक्ष्म-उद्यम स्थापित करने के लिए एक क्रेडिट-लिंक्ड सब्सिडी कार्यक्रम।",
        "category": "Employment & Skill Development",
        "ministry": "Ministry of Micro, Small & Medium Enterprises (MSME)",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Entrepreneurs",
        "launchDate": "2008-08-15",
        "lastUpdated": "2025-04-25",
        "imageUrl": "https://www.startupindia.gov.in/content/dam/invest-india/Blogs/pmegp_bannernew.jpg",
        "link": "https://www.kviconline.gov.in/pmegpeportal/",
        "eligibility": "Any individual above 18 years of age, who has passed at least VIII standard for projects costing above ₹10 lakh in manufacturing and above ₹5 lakh in the business/service sector.",
        "hindiEligibility": "18 वर्ष से अधिक आयु का कोई भी व्यक्ति, जिसने विनिर्माण में ₹10 लाख से अधिक और व्यापार/सेवा क्षेत्र में ₹5 लाख से अधिक की परियोजनाओं के लिए कम से कम आठवीं कक्षा उत्तीर्ण की हो।",
        "benefits": "Provides subsidy on the project cost (15%-35% depending on category and location) for setting up a new enterprise.",
        "documents": "Project report, educational certificates, KYC documents, caste/special category certificate if applicable.",
        "applicationProcess": "Online application on the PMEGP e-portal."
    },
    {
        "id": 101,
        "name": "Integrated Child Development Services (ICDS)",
        "hindiName": "एकीकृत बाल विकास सेवाएं",
        "description": "A comprehensive program for early childhood care and development, providing a package of services including supplementary nutrition, immunization, and pre-school education.",
        "hindiDescription": "प्रारंभिक बचपन की देखभाल और विकास के लिए एक व्यापक कार्यक्रम, जो पूरक पोषण, टीकाकरण और पूर्व-स्कूली शिक्षा सहित सेवाओं का एक पैकेज प्रदान करता है।",
        "category": "Women & Child Development",
        "ministry": "Ministry of Women and Child Development",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Women & Child",
        "launchDate": "1975-10-02",
        "lastUpdated": "2025-06-01",
        "imageUrl": "https://vikaspedia.in/social-welfare/women-and-child-development/child-development-1/icds-systems-strengthening-and-nutrition-improvement-project-issnip/icds.png/@@images/330b62e4-cce8-49f3-8b7c-3f41fc86d066.png",
        "link": "https://wcd.nic.in/schemes/integrated-child-development-services-icds",
        "eligibility": "Children up to 6 years of age, pregnant women, and lactating mothers.",
        "hindiEligibility": "6 वर्ष तक के बच्चे, गर्भवती महिलाएं और स्तनपान कराने वाली माताएं।",
        "benefits": "Package of six services: supplementary nutrition, immunization, health check-up, referral services, pre-school non-formal education, and nutrition & health education.",
        "documents": "Aadhaar card for registration.",
        "applicationProcess": "Services are provided through a vast network of Anganwadi Centres across the country."
    },
    {
        "id": 102,
        "name": "National Social Assistance Programme (NSAP)",
        "hindiName": "राष्ट्रीय सामाजिक सहायता कार्यक्रम",
        "description": "A welfare program that provides financial assistance to the elderly, widows, and persons with disabilities from BPL households.",
        "hindiDescription": "एक कल्याणकारी कार्यक्रम जो बीपीएल परिवारों के बुजुर्गों, विधवाओं और विकलांग व्यक्तियों को वित्तीय सहायता प्रदान करता है।",
        "category": "Senior Citizens, Women & Disabled",
        "ministry": "Ministry of Rural Development",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Senior Citizens",
        "launchDate": "1995-08-15",
        "lastUpdated": "2025-04-10",
        "imageUrl": "https://i.ytimg.com/vi/q4lM0D0U_q0/maxresdefault.jpg",
        "link": "https://nsap.nic.in/",
        "eligibility": "Varies by sub-scheme: Age 60+ for old age pension, 40-79 for widow pension, 18-79 with severe disability for disability pension. All must be from BPL households.",
        "hindiEligibility": "उप-योजना के अनुसार भिन्न: वृद्धावस्था पेंशन के लिए आयु 60+, विधवा पेंशन के लिए 40-79, विकलांगता पेंशन के लिए गंभीर विकलांगता के साथ 18-79। सभी बीपीएल परिवारों से होने चाहिए।",
        "benefits": "Monthly pension under various components (Indira Gandhi National Old Age, Widow, and Disability Pension Schemes). States may provide a top-up amount.",
        "documents": "BPL certificate, age proof, death certificate of spouse (for widows), disability certificate.",
        "applicationProcess": "Application at the local Social Welfare Department or Block/District office."
    },
    {
        "id": 103,
        "name": "Aapki Beti Humari Beti Scheme",
        "hindiName": "आपकी बेटी हमारी बेटी योजना",
        "description": "A Haryana state scheme to combat female foeticide and improve the child sex ratio by providing financial assistance on the birth of a first or subsequent girl child in SC/BPL families.",
        "hindiDescription": "अनुसूचित जाति/बीपीएल परिवारों में पहली या बाद की बालिकाओं के जन्म पर वित्तीय सहायता प्रदान करके कन्या भ्रूण हत्या से निपटने और बाल लिंगानुपात में सुधार के लिए एक हरियाणा राज्य योजना।",
        "category": "Women & Child Development",
        "ministry": "Haryana Women and Child Development Department",
        "state": "Haryana",
        "type": "State",
        "beneficiary": "SC/ST/OBC",
        "launchDate": "2015-03-08",
        "lastUpdated": "2025-03-08",
        "imageUrl": "https://aatmnirbharsena.org/blog/wp-content/uploads/2021/02/Haryana-Aapki-Beti-Humari-Beti-Yojana-2021.png",
        "link": "https://wcdhry.gov.in/schemes-for-children/abhb/",
        "eligibility": "First girl child born in an SC or BPL family. Second/third girl child born in any family in Haryana.",
        "hindiEligibility": "अनुसूचित जाति या बीपीएल परिवार में जन्मी पहली बालिका। हरियाणा के किसी भी परिवार में जन्मी दूसरी/तीसरी बालिका।",
        "benefits": "₹21,000 is invested with LIC in the name of the girl child, which she receives with interest upon turning 18.",
        "documents": "Girl's birth certificate, residence proof, caste/BPL certificate, Aadhaar cards of parents.",
        "applicationProcess": "Apply through the Anganwadi Centre within one year of the girl's birth."
    },
    {
        "id": 104,
        "name": "Central Teacher Eligibility Test (CTET)",
        "hindiName": "केंद्रीय शिक्षक पात्रता परीक्षा",
        "description": "A national-level eligibility test conducted by CBSE to determine a candidate's eligibility for appointment as a teacher for classes I to VIII in central government schools.",
        "hindiDescription": "केंद्रीय सरकारी स्कूलों में कक्षा I से VIII के लिए शिक्षक के रूप में नियुक्ति के लिए उम्मीदवार की पात्रता निर्धारित करने हेतु सीबीएसई द्वारा आयोजित एक राष्ट्रीय स्तर की पात्रता परीक्षा।",
        "category": "Education & Scholarships",
        "ministry": "Central Board of Secondary Education (CBSE)",
        "state": "All India",
        "type": "National",
        "beneficiary": "Students",
        "launchDate": "2011-01-01",
        "lastUpdated": "2025-05-20",
        "imageUrl": "https://images.shiksha.com/mediadata/images/articles/1653393633phphF03nQ.jpeg",
        "link": "https://ctet.nic.in/",
        "eligibility": "Educational qualifications as per NCTE guidelines, typically involving Senior Secondary with D.El.Ed or Graduation with B.Ed.",
        "hindiEligibility": "एनसीटीई के दिशानिर्देशों के अनुसार शैक्षिक योग्यता, जिसमें आमतौर पर डी.एल.एड के साथ सीनियर सेकेंडरी या बी.एड के साथ स्नातक शामिल है।",
        "benefits": "Eligibility certificate to apply for teaching jobs in central schools (KVS, NVS), UT schools, and private schools that recognize CTET.",
        "documents": "Academic certificates, ID proof, photograph, signature.",
        "applicationProcess": "Online application through the official CTET website, conducted twice a year."
    },
    {
        "id": 105,
        "name": "Post-Matric Scholarship for OBC Students",
        "hindiName": "ओबीसी छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति",
        "description": "A centrally sponsored scheme to provide financial assistance to OBC students studying at post-matriculation or post-secondary stages.",
        "hindiDescription": "पोस्ट-मैट्रिकुलेशन या पोस्ट-सेकेंडरी स्तर पर पढ़ने वाले ओबीसी छात्रों को वित्तीय सहायता प्रदान करने के लिए एक केंद्र प्रायोजित योजना।",
        "category": "SC/ST/OBC Welfare",
        "ministry": "Ministry of Social Justice and Empowerment",
        "state": "All India",
        "type": "Central",
        "beneficiary": "SC/ST/OBC",
        "launchDate": "1998-10-01",
        "lastUpdated": "2025-07-31",
        "imageUrl": "https://scholarships.gov.in/public/Content/img/logo.png",
        "link": "https://scholarships.gov.in/",
        "eligibility": "OBC students whose parents'/guardians' income from all sources does not exceed ₹2.5 lakh per annum.",
        "hindiEligibility": "ओबीसी छात्र जिनके माता-पिता/अभिभावकों की सभी स्रोतों से आय प्रति वर्ष ₹2.5 लाख से अधिक नहीं है।",
        "benefits": "Scholarship includes maintenance allowance, reimbursement of compulsory non-refundable fees, and other allowances.",
        "documents": "OBC caste certificate, income certificate, academic records, Aadhaar card.",
        "applicationProcess": "Online application through the National Scholarship Portal (NSP) or the respective State's portal."
    },
    {
        "id": 106,
        "name": "Agriculture Infrastructure Fund (AIF)",
        "hindiName": "कृषि अवसंरचना कोष",
        "description": "A central sector scheme to provide medium-long term debt financing facility for investment in viable projects for post-harvest management infrastructure and community farming assets.",
        "hindiDescription": "कटाई के बाद के प्रबंधन के बुनियादी ढांचे और सामुदायिक कृषि संपत्तियों के लिए व्यवहार्य परियोजनाओं में निवेश के लिए मध्यम-लंबी अवधि के ऋण वित्तपोषण की सुविधा प्रदान करने के लिए एक केंद्रीय क्षेत्र की योजना।",
        "category": "Agriculture & Farmers",
        "ministry": "Ministry of Agriculture & Farmers Welfare",
        "state": "All India",
        "type": "Central",
        "beneficiary": "Farmers",
        "launchDate": "2020-07-08",
        "lastUpdated": "2025-04-12",
        "imageUrl": "https://static.pib.gov.in/WriteReadData/userfiles/image/image001P3L1.jpg",
        "link": "https://agriinfra.dac.gov.in/",
        "eligibility": "Farmers, FPOs, PACS, Marketing Cooperative Societies, SHGs, Agri-entrepreneurs, and Startups.",
        "hindiEligibility": "किसान, एफपीओ, पैक्स, विपणन सहकारी समितियां, एसएचजी, कृषि-उद्यमी और स्टार्टअप।",
        "benefits": "Interest subvention of 3% per annum up to a limit of ₹2 crore. Credit guarantee coverage for loans.",
        "documents": "Detailed Project Report (DPR), KYC documents, land records, bank loan application.",
        "applicationProcess": "Apply online through the AIF portal, which is then forwarded to selected financial institutions."
    },
    {
        "id": 107,
        "name": "Jal Jeevan Mission (JJM)",
        "hindiName": "जल जीवन मिशन",
        "description": "A national mission to provide safe and adequate drinking water through individual household tap connections to all households in rural India by 2024.",
        "hindiDescription": "2024 तक ग्रामीण भारत के सभी घरों में व्यक्तिगत घरेलू नल कनेक्शन के माध्यम से सुरक्षित और पर्याप्त पेयजल उपलब्ध कराने के लिए एक राष्ट्रीय मिशन।",
        "category": "Housing & Infrastructure",
        "ministry": "Ministry of Jal Shakti",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2019-08-15",
        "lastUpdated": "2025-05-25",
        "imageUrl": "https://jaljeevanmission.gov.in/sites/default/files/jal-jeevan-logo_0.png",
        "link": "https://jaljeevanmission.gov.in/",
        "eligibility": "All rural households without a functional household tap connection.",
        "hindiEligibility": "कार्यात्मक घरेलू नल कनेक्शन के बिना सभी ग्रामीण परिवार।",
        "benefits": "Provision of a Functional Household Tap Connection (FHTC) providing potable water in adequate quantity and of prescribed quality on a regular and long-term basis.",
        "documents": "Not applicable for individuals; it is an infrastructure mission.",
        "applicationProcess": "Implemented by State Governments through Public Health Engineering Departments in partnership with local Gram Panchayats."
    },
    {
        "id": 108,
        "name": "Ayushman Bharat Digital Mission (ABDM)",
        "hindiName": "आयुष्मान भारत डिजिटल मिशन",
        "description": "Aims to develop the backbone necessary to support the integrated digital health infrastructure of the country.",
        "hindiDescription": "देश के एकीकृत डिजिटल स्वास्थ्य बुनियादी ढांचे का समर्थन करने के लिए आवश्यक रीढ़ की हड्डी विकसित करने का लक्ष्य।",
        "category": "Health & Wellness",
        "ministry": "Ministry of Health and Family Welfare",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2021-09-27",
        "lastUpdated": "2025-06-10",
        "imageUrl": "https://eclinicalworks.in/wp-content/uploads/2025/05/ayushman-bharat-digital-mission-graphic.jpg",
        "link": "https://abdm.gov.in/",
        "eligibility": "All Indian citizens.",
        "hindiEligibility": "सभी भारतीय नागरिक।",
        "benefits": "Creation of a unique Ayushman Bharat Health Account (ABHA) number, which helps in digitally storing and accessing personal health records.",
        "documents": "Aadhaar card or mobile number for creating the ABHA number.",
        "applicationProcess": "Create an ABHA number online on the official ABDM portal or through participating health apps."
    },
    {
        "id": 109,
        "name": "Common Law Admission Test (CLAT)",
        "hindiName": "कॉमन लॉ एडमिशन टेस्ट",
        "description": "A national-level entrance examination for admissions to undergraduate (UG) and postgraduate (PG) law programs offered by 24 National Law Universities in India.",
        "hindiDescription": "भारत में 24 राष्ट्रीय विधि विश्वविद्यालयों द्वारा प्रस्तावित स्नातक (यूजी) और स्नातकोत्तर (पीजी) कानून कार्यक्रमों में प्रवेश के लिए एक राष्ट्रीय स्तर की प्रवेश परीक्षा।",
        "category": "Education & Scholarships",
        "ministry": "Consortium of National Law Universities",
        "state": "All India",
        "type": "National",
        "beneficiary": "Students",
        "launchDate": "2008-01-01",
        "lastUpdated": "2025-07-01",
        "imageUrl": "https://www.livelaw.in/cms/wp-content/uploads/2015/12/CLAT-2016.jpg",
        "link": "https://consortiumofnlus.ac.in/clat-2026/",
        "eligibility": "UG-CLAT: 10+2 or equivalent with 45% marks. PG-CLAT: LL.B. Degree with 50% marks.",
        "hindiEligibility": "यूजी-क्लैट: 45% अंकों के साथ 10+2 या समकक्ष। पीजी-क्लैट: 50% अंकों के साथ एलएलबी डिग्री।",
        "benefits": "Admission to integrated L.L.B. and L.L.M. courses in premier National Law Universities.",
        "documents": "Academic certificates, ID proof, photograph, signature.",
        "applicationProcess": "Online registration through the official Consortium of NLUs website."
    },
    {
        "id": 110,
        "name": "National AYUSH Mission (NAM)",
        "hindiName": "राष्ट्रीय आयुष मिशन",
        "description": "A centrally sponsored scheme to promote the AYUSH systems of medicine (Ayurveda, Yoga & Naturopathy, Unani, Siddha & Homoeopathy) through cost-effective services.",
        "hindiDescription": "लागत प्रभावी सेवाओं के माध्यम से आयुष चिकित्सा पद्धतियों (आयुर्वेद, योग और प्राकृतिक चिकित्सा, यूनानी, सिद्ध और होम्योपैथी) को बढ़ावा देने के लिए एक केंद्र प्रायोजित योजना।",
        "category": "Health & Wellness",
        "ministry": "Ministry of AYUSH",
        "state": "All India",
        "type": "Central",
        "beneficiary": "All Beneficiaries",
        "launchDate": "2014-09-15",
        "lastUpdated": "2025-05-18",
        "imageUrl": "https://img.manoramayearbook.in/content/dam/yearbook/learn/world/images/2021/mar/national-ayush-mission-1.jpg",
        "link": "https://namayush.gov.in/",
        "eligibility": "All citizens can avail services from AYUSH health facilities.",
        "hindiEligibility": "सभी नागरिक आयुष स्वास्थ्य सुविधाओं से सेवाएं प्राप्त कर सकते हैं।",
        "benefits": "Improved access to AYUSH healthcare, establishment of AYUSH hospitals and dispensaries, and support for quality control of AYUSH drugs.",
        "documents": "Not applicable for individuals; services are available at public health facilities.",
        "applicationProcess": "Implemented through State/UT Governments."
    },
    {
        "id": 111,
        "name": "Babu Jagjivan Ram Chhatrawas Yojana",
        "hindiName": "बाबू जगजीवन राम छात्रावास योजना",
        "description": "A central scheme for the construction of hostels for Scheduled Caste students, enabling them to pursue secondary and higher education.",
        "hindiDescription": "अनुसूचित जाति के छात्रों के लिए छात्रावासों के निर्माण के लिए एक केंद्रीय योजना, जो उन्हें माध्यमिक और उच्च शिक्षा प्राप्त करने में सक्षम बनाती है।",
        "category": "SC/ST/OBC Welfare",
        "ministry": "Ministry of Social Justice and Empowerment",
        "state": "All India",
        "type": "Central",
        "beneficiary": "SC/ST/OBC",
        "launchDate": "2008-01-01",
        "lastUpdated": "2025-04-28",
        "imageUrl": "https://socialjustice.gov.in/uploads/scheme-images/1709624538.png",
        "link": "https://socialjustice.gov.in/schemes/2",
        "eligibility": "Targeted at educational institutions, state governments, and NGOs for constructing hostels for SC students.",
        "hindiEligibility": "अनुसूचित जाति के छात्रों के लिए छात्रावास बनाने के लिए शैक्षणिक संस्थानों, राज्य सरकारों और गैर सरकारी संगठनों पर लक्षित।",
        "benefits": "Central assistance is provided for the construction of new hostels or expansion of existing ones for SC students.",
        "documents": "Project proposal, land availability documents, detailed estimates.",
        "applicationProcess": "State Governments/UTs/Institutions submit proposals to the central ministry for funding."
    },
    {
    "id": 112,
    "name": "Haryana Judiciary Exam (HCS - Judicial Branch) 2025",
    "hindiName": "हरियाणा न्यायिक सेवा परीक्षा (एचसीएस - न्यायिक शाखा) 2025",
    "description": "Recruitment for Civil Judge (Junior Division) posts in the Haryana Civil Service, conducted by HPSC.",
    "hindiDescription": "एचपीएससी द्वारा आयोजित हरियाणा सिविल सेवा में सिविल जज (जूनियर डिवीजन) पदों के लिए भर्ती।",
    "category": "Employment & Skill Development",
    "ministry": "Haryana Public Service Commission (HPSC)",
    "state": "Haryana",
    "type": "State",
    "beneficiary": "Unemployed Youth",
    "launchDate": "2025-11-01",
    "lastUpdated": "2025-09-12",
    "imageUrl": "https://images.tribuneindia.com/cms/gall_content/2018/10/2018_10$largeimg02_Wednesday_2018_011401358.jpg",
    "link": "https://hpsc.gov.in/",
    "eligibility": "Bachelor of Laws (LLB) degree from a recognized university and registered as an advocate. Age typically 21-42 years.",
    "hindiEligibility": "किसी मान्यता प्राप्त विश्वविद्यालय से कानून में स्नातक (एलएलबी) की डिग्री और एक वकील के रूप में पंजीकृत। आयु आमतौर पर 21-42 वर्ष।",
    "benefits": "Prestigious appointment as a Civil Judge in the Haryana state judiciary with a government pay scale.",
    "documents": "LLB degree certificate, Advocate registration, ID proof, domicile certificate.",
    "applicationProcess": "Online application via the official HPSC portal following the release of the notification."
},
{
    "id": 113,
    "name": "SSC Combined Higher Secondary (10+2) Level Examination 2025",
    "hindiName": "एसएससी संयुक्त उच्चतर माध्यमिक (10+2) स्तरीय परीक्षा 2025",
    "description": "A major central government exam for recruiting Lower Divisional Clerks (LDC), Junior Secretariat Assistants (JSA), and Data Entry Operators (DEO).",
    "hindiDescription": "लोअर डिवीजनल क्लर्क (एलडीसी), जूनियर सचिवालय सहायक (जेएसए), और डाटा एंट्री ऑपरेटर (डीईओ) की भर्ती के लिए एक प्रमुख केंद्र सरकार की परीक्षा।",
    "category": "Employment & Skill Development",
    "ministry": "Staff Selection Commission (SSC)",
    "state": "All India",
    "type": "National",
    "beneficiary": "Unemployed Youth",
    "launchDate": "2025-11-05",
    "lastUpdated": "2025-09-12",
    "imageUrl": "https://www.jagranimages.com/images/2025/06/24/article/image/SSC-CHSL-2025-1750744441705.jpg",
    "link": "https://ssc.nic.in",
    "eligibility": "Must have passed 12th Standard or equivalent examination from a recognized Board or University. Age 18-27 years.",
    "hindiEligibility": "किसी मान्यता प्राप्त बोर्ड या विश्वविद्यालय से 12वीं कक्षा या समकक्ष परीक्षा उत्तीर्ण होनी चाहिए। आयु 18-27 वर्ष।",
    "benefits": "Appointment to clerical and assistant posts in various ministries and departments of the Government of India.",
    "documents": "12th class certificate, ID proof, photograph, signature.",
    "applicationProcess": "Online application through the new official SSC portal (ssc.gov.in) during the specified application window."
},
{
    "id": 114,
    "name": "Common University Entrance Test - UG (CUET-UG) 2026",
    "hindiName": "कॉमन यूनिवर्सिटी एंट्रेंस टेस्ट - यूजी (सीयूईटी-यूजी) 2026",
    "description": "A national-level entrance examination for admission to various undergraduate programs in Central, State, and other participating Universities across India.",
    "hindiDescription": "भारत भर के केंद्रीय, राज्य और अन्य भाग लेने वाले विश्वविद्यालयों में विभिन्न स्नातक कार्यक्रमों में प्रवेश के लिए एक राष्ट्रीय स्तर की प्रवेश परीक्षा।",
    "category": "Education & Scholarships",
    "ministry": "National Testing Agency (NTA)",
    "state": "All India",
    "type": "National",
    "beneficiary": "Students",
    "launchDate": "2026-02-01",
    "lastUpdated": "2025-09-12",
    "imageUrl": "https://delhibytes.in/wp-content/uploads/2022/04/Copy-of-Common-University-Entrance-Test.png",
    "link": "https://exams.nta.ac.in/CUET-UG/",
    "eligibility": "Candidates who have passed the 10+2 or equivalent examination. There is no age limit for the candidates.",
    "hindiEligibility": "वे उम्मीदवार जिन्होंने 10+2 या समकक्ष परीक्षा उत्तीर्ण की है। उम्मीदवारों के लिए कोई आयु सीमा नहीं है।",
    "benefits": "A single entrance exam provides a common platform and equal opportunities for admission into a wide range of undergraduate courses.",
    "documents": "12th class mark sheet (if available), ID proof, scanned photograph and signature.",
    "applicationProcess": "Online registration and application submission through the official NTA CUET-UG portal, typically starting in February 2026."
},
{
    "id": 115,
    "name": "Common University Entrance Test - PG (CUET-PG) 2026",
    "hindiName": "कॉमन यूनिवर्सिटी एंट्रेंस टेस्ट - पीजी (सीयूईटी-पीजी) 2026",
    "description": "A national-level entrance exam for admission to various postgraduate programs, including M.A., M.Sc., M.Com., and MBA, in participating universities.",
    "hindiDescription": "भाग लेने वाले विश्वविद्यालयों में एम.ए., एम.एससी., एम.कॉम., और एमबीए सहित विभिन्न स्नातकोत्तर कार्यक्रमों में प्रवेश के लिए एक राष्ट्रीय स्तर की प्रवेश परीक्षा।",
    "category": "Education & Scholarships",
    "ministry": "National Testing Agency (NTA)",
    "state": "All India",
    "type": "National",
    "beneficiary": "Students",
    "launchDate": "2025-12-20",
    "lastUpdated": "2025-09-12",
    "imageUrl": "https://careerchoice360.in/wp-content/uploads/2025/05/CUETPG2026CUETPGExamCUETPGPreparatio.webp",
    "link": "https://exams.nta.ac.in/CUET-PG/",
    "eligibility": "Candidates must possess a Bachelor's degree or equivalent from a recognized university.",
    "hindiEligibility": "उम्मीदवारों के पास किसी मान्यता प्राप्त विश्वविद्यालय से स्नातक की डिग्री या समकक्ष होनी चाहिए।",
    "benefits": "Streamlines the admission process for postgraduate courses across numerous central and other universities with a single test.",
    "documents": "Bachelor's degree certificate, ID proof, scanned photograph and signature.",
    "applicationProcess": "Online registration through the official CUET-PG portal, with the application window usually opening in December 2025."
},
{
    "id": 116,
    "name": "Combined Defence Services Examination (I), 2026 (CDS)",
    "hindiName": "सम्मिलित रक्षा सेवा परीक्षा (I), 2026 (सीडीएस)",
    "description": "A national-level examination conducted by UPSC for recruitment of officers into the Indian Military Academy, Officers Training Academy, Indian Naval Academy, and Indian Air Force Academy.",
    "hindiDescription": "भारतीय सैन्य अकादमी, अधिकारी प्रशिक्षण अकादमी, भारतीय नौसेना अकादमी और भारतीय वायु सेना अकादमी में अधिकारियों की भर्ती के लिए यूपीएससी द्वारा आयोजित एक राष्ट्रीय स्तर की परीक्षा।",
    "category": "Employment & Skill Development",
    "ministry": "Union Public Service Commission (UPSC)",
    "state": "All India",
    "type": "National",
    "beneficiary": "Unemployed Youth",
    "launchDate": "2025-12-11",
    "lastUpdated": "2025-09-12",
    "imageUrl": "https://images.indianexpress.com/2023/12/CDS-I-2024-registration.jpg",
    "link": "https://upsc.gov.in/",
    "eligibility": "Varies by academy. For IMA and OTA, a degree from a recognized university. For Naval Academy, a degree in Engineering. For Air Force Academy, a degree with Physics and Maths at 10+2 level or a B.E.",
    "hindiEligibility": "अकादमी के अनुसार भिन्न। आईएमए और ओटीए के लिए, किसी मान्यता प्राप्त विश्वविद्यालय से डिग्री। नौसेना अकादमी के लिए, इंजीनियरिंग में डिग्री। वायु सेना अकादमी के लिए, 10+2 स्तर पर भौतिकी और गणित के साथ डिग्री या बी.ई.",
    "benefits": "Direct entry into the officer cadre of the Indian Armed Forces, a prestigious and respected career path.",
    "documents": "Degree certificate, ID proof, photograph, signature.",
    "applicationProcess": "Online application through the official UPSC portal (upsconline.nic.in), with the notification typically released in December 2025."
},
{
    "id": 117,
    "name": "Air Force Common Admission Test (I), 2026 (AFCAT)",
    "hindiName": "वायु सेना सामान्य प्रवेश परीक्षा (I), 2026 (एएफसीएटी)",
    "description": "A national-level entrance exam for selecting officers in all branches of the Indian Air Force, including Flying, Technical, and Ground Duty branches.",
    "hindiDescription": "भारतीय वायु सेना की सभी शाखाओं, जिनमें फ्लाइंग, तकनीकी और ग्राउंड ड्यूटी शाखाएं शामिल हैं, में अधिकारियों के चयन के लिए एक राष्ट्रीय स्तर की प्रवेश परीक्षा।",
    "category": "Employment & Skill Development",
    "ministry": "Indian Air Force (IAF)",
    "state": "All India",
    "type": "National",
    "beneficiary": "Unemployed Youth",
    "launchDate": "2025-12-01",
    "lastUpdated": "2025-09-12",
    "imageUrl": "https://www.trishuldefenceacademy.in/blog/wp-content/uploads/2025/03/afcatcaochingdelhi-1.jpeg",
    "link": "https://afcat.cdac.in/",
    "eligibility": "Graduation in any discipline for Ground Duty branches. For Flying and Technical branches, specific educational qualifications in science, maths, or engineering are required.",
    "hindiEligibility": "ग्राउंड ड्यूटी शाखाओं के लिए किसी भी विषय में स्नातक। फ्लाइंग और तकनीकी शाखाओं के लिए, विज्ञान, गणित या इंजीनियरिंग में विशिष्ट शैक्षणिक योग्यता आवश्यक है।",
    "benefits": "Opportunity to become a commissioned officer in the Indian Air Force, serving in various technical and non-technical roles.",
    "documents": "Degree/12th mark sheets, ID proof, photograph, signature.",
    "applicationProcess": "Online application through the official AFCAT CDAC portal, with the application window typically opening in December 2025."
}
    
        ];

// DOM elements
const searchInput = document.getElementById('mainSearch');
const searchButton = document.getElementById('searchButton');
const schemesResults = document.getElementById('schemesResults');
const resultsCount = document.getElementById('resultsCount');
const resetFilters = document.getElementById('resetFilters');
const languageButtons = document.querySelectorAll('.language-btn');
const darkModeToggle = document.getElementById('darkModeToggle');

// Filter elements
const categoryFilters = document.querySelectorAll('.category-filter');
const typeFilters = document.querySelectorAll('.type-filter');
const beneficiaryFilter = document.getElementById('beneficiaryFilter');
const updateFilters = document.querySelectorAll('.update-filter');
const sortOptions = document.querySelectorAll('.sort-option');
const sortDropdown = document.getElementById('sortDropdown');
const viewButtons = document.querySelectorAll('.view-btn');

// Chatbot elements
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const closeChatbot = document.getElementById('closeChatbot');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const sendMessage = document.getElementById('sendMessage');

// Notification elements
const notificationList = document.getElementById('notification-list');
const notificationCount = document.getElementById('notification-count');

// Scroll to Top element
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Current state
let currentLanguage = 'en';
let currentFilters = {
    categories: [],
    types: [],
    beneficiary: '',
    update: '',
    searchText: '',
    sortBy: 'relevance',
    view: 'card'
};
let darkMode = false;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displaySchemes(schemesData);
    populateNotifications(); // Populate notifications on initial load

    // Event listeners
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') performSearch();
    });

    resetFilters.addEventListener('click', resetAllFilters);

    // Language switcher
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentLanguage = this.dataset.lang;
            languageButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('btn-outline-light');
            });
            this.classList.add('active');
            this.classList.remove('btn-outline-light');

            // Update UI based on language
            updateUILanguage();
            filterAndDisplaySchemes();
        });
    });

    // Dark mode toggle
    darkModeToggle.addEventListener('click', function() {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
        this.innerHTML = darkMode ?
            '<i class="fas fa-sun"></i> <span class="d-lg-none ms-2">Light Mode</span>' :
            '<i class="fas fa-moon"></i> <span class="d-lg-none ms-2">Dark Mode</span>';
        
        // Store preference in localStorage
        localStorage.setItem('darkMode', darkMode);
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        darkMode = true;
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> <span class="d-lg-none ms-2">Light Mode</span>';
    }

    // Filter change listeners
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', updateCategoryFilters);
    });

    typeFilters.forEach(filter => {
        filter.addEventListener('change', updateTypeFilters);
    });

    beneficiaryFilter.addEventListener('change', function() {
        currentFilters.beneficiary = this.value;
        filterAndDisplaySchemes();
    });

    updateFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            if (this.checked) {
                currentFilters.update = this.value;
                filterAndDisplaySchemes();
            }
        });
    });

    // Sort options
    sortOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            currentFilters.sortBy = this.dataset.sort;
            const sortText = currentLanguage === 'en' ?
                this.dataset.en :
                this.dataset.hi;
            sortDropdown.innerHTML = `<i class="fas fa-sort me-1"></i> ${currentLanguage === 'en' ? 'Sort By:' : 'क्रमबद्ध करें:'} ${sortText}`;
            filterAndDisplaySchemes();
        });
    });

    // View options
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentFilters.view = this.dataset.view;
            filterAndDisplaySchemes();
        });
    });

    // Chatbot functionality
    chatbotToggle.addEventListener('click', toggleChatbot);
    closeChatbot.addEventListener('click', toggleChatbot);
    sendMessage.addEventListener('click', sendChatMessage);
    chatbotInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') sendChatMessage();
    });

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = currentLanguage === 'en' ?
                this.dataset.en :
                this.dataset.hi;
            alert(`${pageName} page would load here in a real application`);
        });
    });

    // Update UI language initially
    updateUILanguage();
});

// Main search function
function performSearch() {
    currentFilters.searchText = searchInput.value.trim().toLowerCase();
    filterAndDisplaySchemes();
}

// Update category filters
function updateCategoryFilters() {
    currentFilters.categories = Array.from(categoryFilters)
        .filter(filter => filter.checked)
        .map(filter => filter.value);
    filterAndDisplaySchemes();
}

// Update type filters
function updateTypeFilters() {
    currentFilters.types = Array.from(typeFilters)
        .filter(filter => filter.checked)
        .map(filter => filter.value);
    filterAndDisplaySchemes();
}

// Reset all filters
function resetAllFilters() {
    // Reset filter checkboxes
    categoryFilters.forEach(filter => filter.checked = false);
    typeFilters.forEach(filter => filter.checked = false);
    document.getElementById('updateAll').checked = true;
    beneficiaryFilter.value = '';

    // Reset search input
    searchInput.value = '';

    // Reset current filters
    currentFilters = {
        categories: [],
        types: [],
        beneficiary: '',
        update: '',
        searchText: '',
        sortBy: 'relevance',
        view: 'card'
    };

    // Reset sort dropdown
    sortDropdown.innerHTML = `<i class="fas fa-sort me-1"></i> ${currentLanguage === 'en' ? 'Sort By: Relevance' : 'क्रमबद्ध करें: प्रासंगिकता'}`;

    // Reset view buttons
    viewButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === 'card') btn.classList.add('active');
    });

    // Display all schemes
    filterAndDisplaySchemes();
}

// Update UI language
function updateUILanguage() {
    const elements = document.querySelectorAll('[data-en], [data-hi]');
    elements.forEach(element => {
        if (currentLanguage === 'en' && element.dataset.en) {
            element.textContent = element.dataset.en;
        } else if (currentLanguage === 'hi' && element.dataset.hi) {
            element.textContent = element.dataset.hi;
        }
    });

    // Update placeholders
    if (currentLanguage === 'en') {
        searchInput.placeholder = "Search for schemes, scholarships, or benefits...";
        chatbotInput.placeholder = "Type your question...";
    } else {
        searchInput.placeholder = "योजनाओं, छात्रवृत्तियों या लाभों के लिए खोजें...";
        chatbotInput.placeholder = "अपना प्रश्न टाइप करें...";
    }

    // Update select options
    const options = beneficiaryFilter.options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].dataset.en && options[i].dataset.hi) {
            options[i].textContent = currentLanguage === 'en' ?
                options[i].dataset.en :
                options[i].dataset.hi;
        }
    }
    
    // Refresh notifications to reflect the new language
    populateNotifications();
}

// Filter and display schemes based on current filters
function filterAndDisplaySchemes() {
    let filteredSchemes = schemesData.filter(scheme => {
        // Search text filter
        if (currentFilters.searchText) {
            const searchFields = [
                currentLanguage === 'en' ? scheme.name : scheme.hindiName,
                currentLanguage === 'en' ? scheme.description : scheme.hindiDescription,
                scheme.category,
                scheme.beneficiary
            ];
            if (!searchFields.some(field => field.toLowerCase().includes(currentFilters.searchText))) {
                return false;
            }
        }

        // Category filter
        if (currentFilters.categories.length > 0) {
            const categoryMatch = currentFilters.categories.some(filterCat => scheme.category.includes(filterCat));
            if (!categoryMatch) {
                return false;
            }
        }

        // Type filter
        if (currentFilters.types.length > 0) {
            const typeMatch = currentFilters.types.some(filterType => scheme.type.includes(filterType));
            if (!typeMatch) {
                return false;
            }
        }

        // Beneficiary filter
        if (currentFilters.beneficiary &&
            !scheme.beneficiary.includes(currentFilters.beneficiary)) {
            return false;
        }

        // Update filter
        if (currentFilters.update &&
            !scheme.lastUpdated.startsWith(currentFilters.update)) {
            return false;
        }

        return true;
    });

    // Sort schemes
    filteredSchemes = sortSchemes(filteredSchemes, currentFilters.sortBy);

    // Display results
    displaySchemes(filteredSchemes);
}

// Sort schemes based on selected option
function sortSchemes(schemes, sortBy) {
    switch (sortBy) {
        case 'name-asc':
            return [...schemes].sort((a, b) =>
                (currentLanguage === 'en' ? a.name : a.hindiName).localeCompare(
                    currentLanguage === 'en' ? b.name : b.hindiName));
        case 'name-desc':
            return [...schemes].sort((a, b) =>
                (currentLanguage === 'en' ? b.name : b.hindiName).localeCompare(
                    currentLanguage === 'en' ? a.name : a.hindiName));
        case 'newest':
            return [...schemes].sort((a, b) => new Date(b.launchDate) - new Date(a.launchDate));
        case 'oldest':
            return [...schemes].sort((a, b) => new Date(a.launchDate) - new Date(b.launchDate));
        case 'relevance':
        default:
            if (!currentFilters.searchText) return schemes;
            return [...schemes].sort((a, b) => {
                const aNameMatch = (currentLanguage === 'en' ? a.name : a.hindiName).toLowerCase().includes(currentFilters.searchText);
                const bNameMatch = (currentLanguage === 'en' ? b.name : b.hindiName).toLowerCase().includes(currentFilters.searchText);
                if (aNameMatch && !bNameMatch) return -1;
                if (!aNameMatch && bNameMatch) return 1;
                const aDescMatch = (currentLanguage === 'en' ? a.description : a.hindiDescription).toLowerCase().includes(currentFilters.searchText);
                const bDescMatch = (currentLanguage === 'en' ? b.description : b.hindiDescription).toLowerCase().includes(currentFilters.searchText);
                if (aDescMatch && !bDescMatch) return -1;
                if (!aDescMatch && bDescMatch) return 1;
                return 0;
            });
    }
}

// Display schemes in the results container
function displaySchemes(schemes) {
    if (schemes.length === 0) {
        schemesResults.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x mb-3 text-muted"></i>
                <h4 class="text-muted">${currentLanguage === 'en' ? 'No schemes found matching your criteria' : 'आपकी खोज से मेल खाने वाली कोई योजना नहीं मिली'}</h4>
                <p class="text-muted">${currentLanguage === 'en' ? 'Try adjusting your search or filters' : 'कृपया अपनी खोज या फ़िल्टर को समायोजित करें'}</p>
            </div>
        `;
        resultsCount.textContent = currentLanguage === 'en' ?
            "0 Schemes Found" :
            "0 योजनाएं मिलीं";
        return;
    }

    resultsCount.textContent = currentLanguage === 'en' ?
        `${schemes.length} Scheme${schemes.length !== 1 ? 's' : ''} Found` :
        `${schemes.length} योजनाएं मिलीं`;

    let html = '';

    schemes.forEach(scheme => {
        if (currentFilters.view === 'card') {
            // Card view
            html += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card scheme-card h-100">
                        <img src="${scheme.imageUrl}" class="card-img-top" alt="${currentLanguage === 'en' ? scheme.name : scheme.hindiName}">
                        <div class="card-body">
                            <h5 class="card-title">${currentLanguage === 'en' ? scheme.name : scheme.hindiName}</h5>
                            <p class="card-text">${currentLanguage === 'en' ? scheme.description : scheme.hindiDescription}</p>
                            <div class="mb-3">
                                <span class="badge badge-category mb-1">${scheme.category}</span>
                                <span class="badge badge-ministry mb-1">${scheme.ministry}</span>
                                <span class="badge badge-state">${scheme.state}</span>
                            </div>
                            <div class="eligibility-criteria small">
                                <strong>${currentLanguage === 'en' ? 'Eligibility' : 'पात्रता'}:</strong> 
                                ${currentLanguage === 'en' ? scheme.eligibility : scheme.hindiEligibility}
                            </div>
                        </div>
                        <div class="card-footer bg-transparent border-top-0">
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="text-muted">${new Date(scheme.launchDate).toLocaleDateString('en-IN')}</small>
                                <a href="${scheme.link}" class="read-more-btn" target="_blank">
                                    ${currentLanguage === 'en' ? 'Read More' : 'अधिक पढ़ें'} <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // List view
            html += `
                <div class="col-12 mb-4">
                    <div class="card scheme-card">
                        <div class="row g-0">
                            <div class="col-md-3">
                                <img src="${scheme.imageUrl}" class="img-fluid rounded-start h-100" style="object-fit: cover;" alt="${currentLanguage === 'en' ? scheme.name : scheme.hindiName}">
                            </div>
                            <div class="col-md-9">
                                <div class="card-body">
                                    <h5 class="card-title">${currentLanguage === 'en' ? scheme.name : scheme.hindiName}</h5>
                                    <p class="card-text">${currentLanguage === 'en' ? scheme.description : scheme.hindiDescription}</p>
                                    <div class="mb-2">
                                        <span class="badge badge-category me-1">${scheme.category}</span>
                                        <span class="badge badge-ministry me-1">${scheme.ministry}</span>
                                        <span class="badge badge-state me-1">${scheme.state}</span>
                                        <span class="text-muted"><i class="fas fa-users me-1"></i> ${scheme.beneficiary}</span>
                                    </div>
                                    <div class="eligibility-criteria small mb-3">
                                        <strong>${currentLanguage === 'en' ? 'Eligibility' : 'पात्रता'}:</strong> 
                                        ${currentLanguage === 'en' ? scheme.eligibility : scheme.hindiEligibility}
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-muted">${currentLanguage === 'en' ? 'Launched' : 'शुरू की गई'}: ${new Date(scheme.launchDate).toLocaleDateString('en-IN')}</small>
                                        <a href="${scheme.link}" class="read-more-btn" target="_blank">
                                            ${currentLanguage === 'en' ? 'View Details' : 'विवरण देखें'} <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    schemesResults.innerHTML = html;
}

// ---- Notification Bell Function ----
function populateNotifications() {
    if (!notificationList || !notificationCount) return; // Defensive check
    
    // Sort schemes by lastUpdated date, newest first
    const latestSchemes = [...schemesData]
        .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
        .slice(0, 4); // Get the top 4 latest schemes

    notificationList.innerHTML = ''; // Clear existing notifications

    if (latestSchemes.length > 0) {
        latestSchemes.forEach(scheme => {
            const schemeName = currentLanguage === 'en' ? scheme.name : scheme.hindiName;
            const li = document.createElement('li');
            li.innerHTML = `
                <a class="dropdown-item notification-item" href="${scheme.link}" target="_blank">
                    <span class="fw-bold">${schemeName}</span>
                    <span class="text-muted">${currentLanguage === 'en' ? 'Updated on' : 'अपडेट किया गया'}: ${new Date(scheme.lastUpdated).toLocaleDateString()}</span>
                </a>
            `;
            notificationList.appendChild(li);
        });
        notificationCount.textContent = latestSchemes.length;
        notificationCount.style.display = 'block';
    } else {
        notificationCount.style.display = 'none';
    }
}

// ---- Chatbot Functions ----
function toggleChatbot() {
    chatbotContainer.style.display = chatbotContainer.style.display === 'flex' ? 'none' : 'flex';
    if (chatbotContainer.style.display === 'flex') {
        chatbotInput.focus();
    }
}

function sendChatMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;

    addMessage(message, 'user');
    chatbotInput.value = '';

    setTimeout(() => {
        const botResponse = generateBotResponse(message);
        addMessage(botResponse, 'bot');
    }, 500);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');

    if (sender === 'bot' && (text.includes('<ul>') || text.includes('<a href'))) {
        messageDiv.innerHTML = text;
    } else {
        messageDiv.textContent = text;
    }

    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function generateBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    if (isGreeting(lowerMessage)) return getGreetingResponse();
    if (isThankYou(lowerMessage)) return getThankYouResponse();
    if (isGoodbye(lowerMessage)) return getGoodbyeResponse();
    
    const matchedScheme = findMatchingScheme(lowerMessage);
    if (matchedScheme) return getSchemeDetailsResponse(matchedScheme);
    
    const matchedCategory = findMatchingCategory(lowerMessage);
    if (matchedCategory) {
        const categorySchemes = getSchemesByCategory(matchedCategory);
        if (categorySchemes.length > 0) return getCategorySchemesResponse(matchedCategory, categorySchemes);
    }
    
    if (isExamQuery(lowerMessage)) return getExamResponse();
    if (isEligibilityQuery(lowerMessage)) return getEligibilityResponse();
    if (isApplicationQuery(lowerMessage)) return getApplicationResponse();
    if (isDocumentQuery(lowerMessage)) return getDocumentsResponse();
    if (isContactQuery(lowerMessage)) return getContactResponse();
    if (isBenefitsQuery(lowerMessage)) return getBenefitsResponse();
    if (isLastDateQuery(lowerMessage)) return getLastDateResponse();
    if (isStatusQuery(lowerMessage)) return getStatusResponse();
    if (isHelpQuery(lowerMessage)) return getHelpResponse();

    return getDefaultResponse();
}

// Helper functions for the chatbot
function isGreeting(message) { const greetings = ['hi', 'hello', 'hey', 'namaste', 'namaskar', 'good morning', 'good afternoon', 'good evening']; return greetings.some(greeting => message.includes(greeting)); }
function getGreetingResponse() { return currentLanguage === 'en' ? "Hello! I'm your Haryana Government Assistant. How can I help you today? You can ask about:<br><ul><li>Government schemes</li><li>Exam notifications</li><li>Application processes</li><li>Eligibility criteria</li><li>Required documents</li><li>Scheme benefits</li><li>Application status</li></ul>" : "नमस्ते! मैं आपकी हरियाणा सरकार की सहायता के लिए यहाँ हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ? आप पूछ सकते हैं:<br><ul><li>सरकारी योजनाएं</li><li>परीक्षा सूचनाएं</li><li>आवेदन प्रक्रिया</li><li>पात्रता मानदंड</li><li>आवश्यक दस्तावेज</li><li>योजना लाभ</li><li>आवेदन स्थिति</li></ul>"; }
function isThankYou(message) { const thanks = ['thank', 'thanks', 'धन्यवाद', 'शुक्रिया']; return thanks.some(word => message.includes(word)); }
function getThankYouResponse() { return currentLanguage === 'en' ? "You're welcome! Is there anything else I can help you with?" : "आपका स्वागत है! क्या मैं आपकी और किसी बात में मदद कर सकता हूँ?"; }
function isGoodbye(message) { const goodbyes = ['bye', 'goodbye', 'see you', 'alvida', 'फिर मिलेंगे', 'अलविदा']; return goodbyes.some(word => message.includes(word)); }
function getGoodbyeResponse() { return currentLanguage === 'en' ? "Goodbye! Feel free to ask if you have any more questions about Haryana government schemes." : "अलविदा! यदि आपके पास हरियाणा सरकार की योजनाओं के बारे में कोई और प्रश्न हैं तो बेझिझक पूछें।"; }
function findMatchingScheme(message) { return schemesData.find(scheme => scheme.name.toLowerCase().includes(message) || scheme.hindiName.toLowerCase().includes(message)); }
function getSchemeDetailsResponse(scheme) {
    const schemeName = currentLanguage === 'en' ? scheme.name : scheme.hindiName;
    const schemeDesc = currentLanguage === 'en' ? scheme.description : scheme.hindiDescription;
    const eligibility = currentLanguage === 'en' ? scheme.eligibility : scheme.hindiEligibility;
    const benefits = currentLanguage === 'en' ? scheme.benefits : (scheme.hindiBenefits || scheme.benefits);
    const documents = currentLanguage === 'en' ? scheme.documents : (scheme.hindiDocuments || scheme.documents);
    const process = currentLanguage === 'en' ? scheme.applicationProcess : (scheme.hindiApplicationProcess || scheme.applicationProcess);
    
    return currentLanguage === 'en'
        ? `<strong>${schemeName}</strong><br>${schemeDesc}<br><br><strong>Eligibility:</strong> ${eligibility}<br><strong>Benefits:</strong> ${benefits}<br><strong>Documents Required:</strong> ${documents}<br><strong>How to Apply:</strong> ${process}<br><br><a href="${scheme.link}" target="_blank" style="color: ${darkMode ? '#f9a01b' : '#006a4e'}; text-decoration: underline;">Click here for official website</a>`
        : `<strong>${schemeName}</strong><br>${schemeDesc}<br><br><strong>पात्रता:</strong> ${eligibility}<br><strong>लाभ:</strong> ${benefits}<br><strong>आवश्यक दस्तावेज:</strong> ${documents}<br><strong>आवेदन कैसे करें:</strong> ${process}<br><br><a href="${scheme.link}" target="_blank" style="color: ${darkMode ? '#f9a01b' : '#006a4e'}; text-decoration: underline;">आधिकारिक वेबसाइट के लिए यहां क्लिक करें</a>`;
}
function findMatchingCategory(message) {
    const categories = {
        'agriculture': ['agriculture', 'farmer', 'kisan', 'किसान', 'कृषि'], 'education': ['education', 'student', 'scholarship', 'छात्र', 'शिक्षा', 'छात्रवृत्ति'], 'health': ['health', 'hospital', 'medical', 'आरोग्य', 'स्वास्थ्य', 'चिकित्सा'], 'employment': ['employment', 'job', 'work', 'रोजगार', 'नौकरी', 'काम'], 'housing': ['housing', 'home', 'awas', 'आवास', 'घर'], 'women': ['women', 'lady', 'girl', 'महिला', 'लड़की', 'स्त्री'], 'sc/st': ['sc', 'st', 'obc', 'अनुसूचित जाति', 'अनुसूचित जनजाति', 'पिछड़ा वर्ग'], 'senior': ['senior', 'old', 'aged', 'elderly', 'वरिष्ठ', 'बुजुर्ग', 'वृद्ध'], 'disabled': ['disabled', 'divyang', 'handicap', 'दिव्यांग', 'विकलांग'], 'youth': ['youth', 'young', 'unemployed', 'युवा', 'बेरोजगार']
    };
    for (const [category, keywords] of Object.entries(categories)) { if (keywords.some(keyword => message.includes(keyword))) { return category; } } return null;
}
function getSchemesByCategory(category) { return schemesData.filter(scheme => scheme.category.toLowerCase().includes(category)); }
function getCategorySchemesResponse(category, schemes) {
    const categoryNames = { 'agriculture': currentLanguage === 'en' ? 'Agriculture' : 'कृषि', 'education': currentLanguage === 'en' ? 'Education' : 'शिक्षा', 'health': currentLanguage === 'en' ? 'Health' : 'स्वास्थ्य', 'employment': currentLanguage === 'en' ? 'Employment' : 'रोजगार', 'housing': currentLanguage === 'en' ? 'Housing' : 'आवास', 'women': currentLanguage === 'en' ? 'Women' : 'महिलाएं', 'sc/st': currentLanguage === 'en' ? 'SC/ST/OBC' : 'एससी/एसटी/ओबीसी', 'senior': currentLanguage === 'en' ? 'Senior Citizens' : 'वरिष्ठ नागरिक', 'disabled': currentLanguage === 'en' ? 'Persons with Disabilities' : 'दिव्यांग व्यक्ति', 'youth': currentLanguage === 'en' ? 'Youth' : 'युवा' };
    const categoryName = categoryNames[category] || category;
    let response = currentLanguage === 'en' ? `Here are some ${categoryName} schemes in Haryana:` : `हरियाणा में ${categoryName} से संबंधित कुछ योजनाएं:`;
    response += '<ul>';
    schemes.slice(0, 5).forEach(scheme => {
        const schemeName = currentLanguage === 'en' ? scheme.name : scheme.hindiName;
        const schemeDesc = currentLanguage === 'en' ? scheme.description : scheme.hindiDescription;
        response += `<li><strong>${schemeName}</strong>: ${schemeDesc} <a href="${scheme.link}" target="_blank" style="color: ${darkMode ? '#f9a01b' : '#006a4e'}; text-decoration: underline;">${currentLanguage === 'en' ? 'More info' : 'अधिक जानकारी'}</a></li>`;
    });
    response += '</ul>';
    if (schemes.length > 5) { response += currentLanguage === 'en' ? `<br>There are ${schemes.length - 5} more schemes in this category. You can ask about a specific scheme for more details.` : `<br>इस श्रेणी में ${schemes.length - 5} और योजनाएं हैं। अधिक विवरण के लिए आप किसी विशेष योजना के बारे में पूछ सकते हैं।`; } else { response += currentLanguage === 'en' ? '<br>You can ask me specific questions about any of these schemes.' : '<br>आप मुझसे इनमें से किसी भी योजना के बारे में विशेष प्रश्न पूछ सकते हैं।'; }
    return response;
}
function isExamQuery(message) { const examKeywords = ['exam', 'recruitment', 'notification', 'vacancy', 'परीक्षा', 'भर्ती', 'सूचना', 'रिक्तियां', 'job', 'नौकरी']; return examKeywords.some(keyword => message.includes(keyword)); }
function getExamResponse() { return currentLanguage === 'en' ? `For the latest exam notifications, please visit the official <a href="https://hssc.gov.in" target="_blank" style="color: ${darkMode ? '#f9a01b' : '#006a4e'};">HSSC website</a> or the specific department's portal. Would you like details about any particular exam like HSSC CET or Police Recruitment?` : `नवीनतम परीक्षा सूचनाओं के लिए, कृपया आधिकारिक <a href="https://hssc.gov.in" target="_blank" style="color: ${darkMode ? '#f9a01b' : '#006a4e'};">एचएसएससी वेबसाइट</a> या संबंधित विभाग के पोर्टल पर जाएं। क्या आप एचएसएससी सीईटी या पुलिस भर्ती जैसी किसी विशेष परीक्षा के बारे में विवरण चाहते हैं?`; }
function isEligibilityQuery(message) { const eligibilityWords = ['eligibility', 'qualification', 'criteria', 'who can apply', 'पात्रता', 'योग्यता', 'मानदंड', 'कौन आवेदन कर सकता']; return eligibilityWords.some(word => message.includes(word)); }
function getEligibilityResponse() { return currentLanguage === 'en' ? "Eligibility criteria vary by scheme. Could you specify which scheme you're asking about? For example: 'What is the eligibility for Mukhyamantri Parivar Samridhi Yojana?'" : "पात्रता मानदंड योजना के अनुसार अलग-अलग होते हैं। क्या आप बता सकते हैं कि आप किस योजना के बारे में पूछ रहे हैं? उदाहरण: 'मुख्यमंत्री परिवार समृद्धि योजना के लिए पात्रता क्या है?'"; }
function isApplicationQuery(message) { const applicationWords = ['apply', 'application', 'process', 'register', 'आवेदन', 'प्रक्रिया', 'पंजीकरण', 'कैसे आवेदन करें']; return applicationWords.some(word => message.includes(word)); }
function getApplicationResponse() { return currentLanguage === 'en' ? `Most schemes can be applied for via the <a href="https://saralharyana.gov.in" target="_blank" style="color: ${darkMode ? '#f9a01b' : '#006a4e'};">SARAL Haryana Portal</a>. For specific application steps, please tell me the name of the scheme.` : `अधिकांश योजनाओं के लिए <a href="https://saralharyana.gov.in" target="_blank" style="color: ${darkMode ? '#f9a01b' : '#006a4e'};">सरल हरियाणा पोर्टल</a> के माध्यम से आवेदन किया जा सकता है। विशिष्ट आवेदन चरणों के लिए, कृपया मुझे योजना का नाम बताएं।`; }
function isDocumentQuery(message) { const documentWords = ['document', 'documents', 'paper', 'papers', 'दस्तावेज', 'कागजात', 'प्रमाण', 'आवश्यक']; return documentWords.some(word => message.includes(word)); }
function getDocumentsResponse() { return currentLanguage === 'en' ? "Required documents depend on the scheme. Generally, Aadhaar Card, Residence Proof (Domicile), and Income Certificate are needed. Which scheme are you interested in?" : "आवश्यक दस्तावेज योजना पर निर्भर करते हैं। आम तौर पर, आधार कार्ड, निवास प्रमाण (अधिवास), और आय प्रमाण पत्र की आवश्यकता होती है। आप किस योजना में रुचि रखते हैं?"; }
function isContactQuery(message) { const contactWords = ['contact', 'help', 'support', 'number', 'phone', 'संपर्क', 'मदद', 'सहायता', 'नंबर', 'फोन']; return contactWords.some(word => message.includes(word)); }
function getContactResponse() { return currentLanguage === 'en' ? `You can contact the Haryana government helpline at <strong>1800-180-2025</strong> or visit your nearest Saral Kendra for assistance.` : `आप हरियाणा सरकार की हेल्पलाइन <strong>1800-180-2025</strong> पर संपर्क कर सकते हैं या सहायता के लिए अपने निकटतम सरल केंद्र पर जा सकते हैं।`; }
function isBenefitsQuery(message) { const benefitsWords = ['benefit', 'benefits', 'advantage', 'what do i get', 'लाभ', 'फायदा', 'क्या मिलेगा']; return benefitsWords.some(word => message.includes(word)); }
function getBenefitsResponse() { return currentLanguage === 'en' ? "Benefits differ for each scheme, ranging from financial aid to subsidies. Please name the scheme to know its specific benefits." : "प्रत्येक योजना के लिए लाभ अलग-अलग होते हैं, जो वित्तीय सहायता से लेकर सब्सिडी तक होते हैं। इसके विशिष्ट लाभों को जानने के लिए कृपया योजना का नाम बताएं।"; }
function isLastDateQuery(message) { const lastDateWords = ['last date', 'deadline', 'final date', 'अंतिम तिथि', 'आखिरी तारीख']; return lastDateWords.some(word => message.includes(word)); }
function getLastDateResponse() { return currentLanguage === 'en' ? "Deadlines are specific to each scheme and exam. For which scheme or exam are you asking about the last date?" : "समय-सीमा प्रत्येक योजना और परीक्षा के लिए विशिष्ट है। आप किस योजना या परीक्षा की अंतिम तिथि के बारे में पूछ रहे हैं?"; }
function isStatusQuery(message) { const statusWords = ['status', 'track', 'check', 'progress', 'स्थिति', 'जांच', 'ट्रैक']; return statusWords.some(word => message.includes(word)); }
function getStatusResponse() { return currentLanguage === 'en' ? `You can check your application status on the <a href="https://saralharyana.gov.in/ApplicationStatus" target="_blank" style="color: ${darkMode ? '#f9a01b' : '#006a4e'};">SARAL Status Portal</a> using your application ID.` : `आप अपनी आवेदन आईडी का उपयोग करके <a href="https://saralharyana.gov.in/ApplicationStatus" target="_blank" style="color: ${darkMode ? '#f9a01b' : '#006a4e'};">सरल स्थिति पोर्टल</a> पर अपने आवेदन की स्थिति की जांच कर सकते हैं।`; }
function isHelpQuery(message) { const helpWords = ['help', 'guide', 'how to', 'assistance', 'मदद', 'मार्गदर्शन', 'कैसे']; return helpWords.some(word => message.includes(word)); }
function getHelpResponse() { return currentLanguage === 'en' ? `I can help with information on schemes and exams. What do you need help with?` : `मैं योजनाओं और परीक्षाओं की जानकारी में मदद कर सकता हूँ। आपको किस बारे में मदद चाहिए?`; }
function getDefaultResponse() { return currentLanguage === 'en' ? "I'm sorry, I couldn't understand that. You can ask me about Haryana government schemes, their eligibility, benefits, and how to apply." : "मुझे क्षमा करें, मैं यह समझ नहीं पाया। आप मुझसे हरियाणा सरकार की योजनाओं, उनकी पात्रता, लाभ और आवेदन करने के तरीके के बारे में पूछ सकते हैं।"; }

// ---- Scroll to Top Button Logic ----
// Show/hide button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

// Scroll to top on click
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});