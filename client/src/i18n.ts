import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          "welcome_message": "Welcome to EduReach!",
          "lessons_title": "All Lessons",
          "subjects_title": "All Subjects",
          "back_to_subjects": "Back to Subjects",
          "read_lesson": "Read Lesson",
          "view_lessons": "View Lessons",
          "lesson_complete_title": "Lesson Complete!",
          "lesson_complete_description": "You have successfully marked \"{{lessonTitle}}\" as read.",
          "lesson_not_found_title": "Lesson Not Found",
          "lesson_not_found_description": "The lesson you are looking for does not exist.",
          "back_to_dashboard": "Back to Dashboard",
          "mark_as_read": "Mark as Read",

          // Subject titles
          "subject_mathematics_title": "Mathematics",
          "subject_hindi_title": "Hindi",
          "subject_science_title": "Science",
          "subject_social science_title": "Social Science",
          "subject_punjabi_title": "Punjabi",
          "subject_english_title": "English",
          "subject_it_title": "IT",
          "subject_evs_title": "EVS",

          // Lessons in Subject titles
          "subject_mathematics_lessons_title": "Lessons in Mathematics",
          "subject_hindi_lessons_title": "Lessons in Hindi",
          "subject_science_lessons_title": "Lessons in Science",
          "subject_social science_lessons_title": "Lessons in Social Science",
          "subject_punjabi_lessons_title": "Lessons in Punjabi",
          "subject_english_lessons_title": "Lessons in English",
          "subject_it_lessons_title": "Lessons in IT",
          "subject_evs_lessons_title": "Lessons in EVS",

          // Lesson 1: Mathematics
          "lesson_1_title": "Understanding Variables and Expressions",
          "lesson_1_subject": "Mathematics",
          "lesson_1_description": "This lesson covers the basics of algebraic variables and how to form simple expressions.",
          "lesson_1_content": `
            <p>
              Algebra is a branch of mathematics that deals with symbols and the rules for manipulating these symbols. These symbols (often letters like x, y, or a, b) are called variables.
            </p>
            <p>
              An expression in algebra is a combination of numbers, variables, and operation symbols (like +, -, *, /). For example, \\(2x + 5\\) is an algebraic expression.
            </p>
            <h3>Key Concepts:</h3>
            <ul>
              <li>
                <strong>Variable:</strong> A symbol, usually a letter, that represents a quantity that can change.
              </li>
              <li>
                <strong>Constant:</strong> A fixed value that does not change. In \\(2x + 5\\), \\(5\\) is a constant.
              </li>
              <li>
                <strong>Coefficient:</strong> A number multiplied by a variable. In \\(2x + 5\\), \\(2\\) is the coefficient of \\(x\\).
              </li>
              <li>
                <strong>Term:</strong> Parts of an expression separated by addition or subtraction. In \\(2x + 5\\), \\(2x\\) and \\(5\\) are terms.
              </li>
            </ul>
            <p>
              Let's look at an example: If you have \\(3\\) apples and you get \\(x\\) more apples, the total number of apples you have can be represented by the expression \\(3 + x\\).
            </p>
          `,
          // Lesson 2: Science
          "lesson_2_title": "Photosynthesis: The Plant's Food Factory",
          "lesson_2_subject": "Science",
          "lesson_2_description": "Explore how plants convert light energy into chemical energy through photosynthesis.",
          "lesson_2_content": `
            <p>
              Photosynthesis is the process used by plants, algae, and certain bacteria to convert light energy into chemical energy. This chemical energy is stored in carbohydrate molecules, such as sugars, which are synthesized from carbon dioxide and water.
            </p>
            <h3>The Process:</h3>
            <p>
              The process of photosynthesis involves two main stages:
            </p>
            <ol>
              <li>
                <strong>Light-dependent reactions:</strong> These reactions take place in the thylakoid membranes of chloroplasts and require light. Light energy is captured by chlorophyll and used to make ATP and NADPH.
              </li>
              <li>
                <strong>Light-independent reactions (Calvin cycle):</strong> These reactions take place in the stroma of chloroplasts and do not directly require light. The ATP and NADPH produced in the light-dependent reactions are used to convert carbon dioxide into glucose.
              </li>
            </ol>
            <h3>Key Components:</h3>
            <ul>
              <li>
                <strong>Chloroplasts:</strong> Organelles in plant cells where photosynthesis occurs.
              </li>
              <li>
                <strong>Chlorophyll:</strong> The green pigment that absorbs light energy.
              </li>
              <li>
                <strong>Carbon Dioxide:</strong> Absorbed from the atmosphere.
              </li>
              <li>
                <strong>Water:</strong> Absorbed from the soil.
              </li>
              <li>
                <strong>Glucose:</strong> The sugar produced as food for the plant.
              </li>
              <li>
                <strong>Oxygen:</strong> Released as a byproduct.
              </li>
            </ul>
          `,
          // Lesson 3: Social Science
          "lesson_3_title": "The Roman Empire: Rise and Fall",
          "lesson_3_subject": "Social Science",
          "lesson_3_description": "Learn about the rise and fall of one of the most powerful empires in history.",
          "lesson_3_content": `
            <p>
              The Roman Empire was the post-republican period of ancient Rome. It was a vast and powerful empire that dominated the Mediterranean world for centuries, leaving a lasting legacy on Western civilization.
            </p>
            <h3>Key Periods:</h3>
            <ul>
              <li>
                <strong>Founding of Rome (753 BC):</strong> Traditional date for the founding of the city of Rome by Romulus.
              </li>
              <li>
                <strong>Roman Republic (509 BC - 27 BC):</strong> A period of republican government, characterized by elected officials and a complex system of laws.
              </li>
              <li>
                <strong>Roman Empire (27 BC - 476 AD):</strong> Began with the reign of Augustus, marking the end of the Republic and the consolidation of power under an emperor.
              </li>
              <li>
                <strong>Pax Romana (27 BC - 180 AD):</strong> A period of relative peace and stability throughout the Roman Empire.
              </li>
              <li>
                <strong>Crisis of the Third Century (235-284 AD):</strong> A period of civil war, economic collapse, and foreign invasions.
              </li>
              <li>
                <strong>Fall of the Western Roman Empire (476 AD):</strong> Traditionally marked by the deposition of Romulus Augustulus, though the Eastern Roman (Byzantine) Empire continued for another thousand years.
              </li>
            </ul>
            <p>
              The Roman Empire's influence can still be seen today in law, architecture, language, and government.
            </p>
          `,
          // Lesson 4: Hindi
          "lesson_4_title": "Basic Greetings and Phrases",
          "lesson_4_subject": "Hindi",
          "lesson_4_description": "An introduction to common Hindi greetings and useful everyday phrases.",
          "lesson_4_content": `
            <p>
              Learning basic greetings is the first step to communicating in any new language. Hindi, an Indo-Aryan language, is widely spoken in India and other parts of the world.
            </p>
            <h3>Common Hindi Greetings:</h3>
            <ul>
              <li>
                <strong>Namaste (नमस्ते):</strong> Hello/Greetings (can be used at any time of day).
              </li>
              <li>
                <strong>Suprabhaat (सुप्रभात):</strong> Good morning.
              </li>
              <li>
                <strong>Shubh Sandhya (शुभ संध्या):</strong> Good evening.
              </li>
              <li>
                <strong>Alvida (अलविदा):</strong> Goodbye.
              </li>
            </ul>
            <h3>Useful Phrases:</h3>
            <ul>
              <li>
                <strong>Aap kaise hain? (आप कैसे हैं?):</strong> How are you? (to a male)
              </li>
              <li>
                <strong>Aap kaisi hain? (आप कैसी हैं?):</strong> How are you? (to a female)
              </li>
              <li>
                <strong>Main theek hoon (मैं ठीक हूँ):</strong> I am fine.
              </li>
              <li>
                <strong>Dhanyavaad (धन्यवाद):</strong> Thank you.
              </li>
              <li>
                <strong>Kripya (कृपया):</strong> Please.
              </li>
            </ul>
          `,
          // Lesson 5: Punjabi
          "lesson_5_title": "Introduction to Punjabi Alphabet",
          "lesson_5_subject": "Punjabi",
          "lesson_5_description": "Learn the basics of the Gurmukhi script and the Punjabi alphabet.",
          "lesson_5_content": `
            <p>
              Punjabi is an Indo-Aryan language spoken by the Punjabi people. It is the official language of the Indian state of Punjab and the primary language of Punjab, Pakistan. The Gurmukhi script is commonly used for writing Punjabi in India.
            </p>
            <h3>Gurmukhi Alphabet (Panti Akhari):</h3>
            <p>
              The Gurmukhi script has 35 primary letters, known as 'Panti Akhari'. Each letter represents a distinct sound.
            </p>
            <ul>
              <li>
                <strong>ੳ (Ura):</strong> Used for vowel sounds 'u', 'oo', 'o'.
              </li>
              <li>
                <strong>ਅ (Aira):</strong> Used for vowel sounds 'a', 'aa', 'e'.
              </li>
              <li>
                <strong>ੲ (Iri):</strong> Used for vowel sounds 'i', 'ee'.
              </li>
              <li>
                <strong>ਕ (Kakka):</strong> Pronounced as 'ka'.
              </li>
              <li>
                <strong>ਖ (Khakha):</strong> Pronounced as 'kha'.
              </li>
            </ul>
            <p>
              Mastering the Gurmukhi alphabet is essential for reading and writing Punjabi.
            </p>
          `,
          // Lesson 6: English
          "lesson_6_title": "Fundamentals of English Grammar",
          "lesson_6_subject": "English",
          "lesson_6_description": "A comprehensive guide to the basic rules of English grammar, including parts of speech and sentence structure.",
          "lesson_6_content": `
            <p>
              English grammar is the set of structural rules governing the composition of clauses, phrases, and words in the English language.
            </p>
            <h3>Parts of Speech:</h3>
            <ul>
              <li>
                <strong>Nouns:</strong> People, places, things, or ideas (e.g., *cat*, *London*, *happiness*).
              </li>
              <li>
                <strong>Pronouns:</strong> Replace nouns (e.g., *he*, *she*, *it*, *they*).
              </li>
              <li>
                <strong>Verbs:</strong> Actions or states of being (e.g., *run*, *is*, *think*).
              </li>
              <li>
                <strong>Adjectives:</strong> Describe nouns or pronouns (e.g., *happy*, *tall*, *blue*).
              </li>
              <li>
                <strong>Adverbs:</strong> Describe verbs, adjectives, or other adverbs (e.g., *quickly*, *very*, *well*).
              </li>
              <li>
                <strong>Prepositions:</strong> Show relationships between nouns/pronouns and other words (e.g., *on*, *in*, *at*).
              </li>
              <li>
                <strong>Conjunctions:</strong> Join words, phrases, or clauses (e.g., *and*, *but*, *or*).
              </li>
              <li>
                <strong>Interjections:</strong> Express strong emotions (e.g., *Oh!*, *Wow!*).
              </li>
            </ul>
            <h3>Sentence Structure:</h3>
            <p>
              A basic English sentence typically follows a Subject-Verb-Object (SVO) order (e.g., "The dog (Subject) chased (Verb) the ball (Object).").
            </p>
          `,
          // Lesson 7: IT
          "lesson_7_title": "Introduction to Computer Hardware",
          "lesson_7_subject": "IT",
          "lesson_7_description": "Understand the basic components of a computer and their functions.",
          "lesson_7_content": `
            <p>
              Computer hardware refers to the physical components that make up a computer system. These are the tangible parts you can see and touch, in contrast to software, which is a set of instructions.
            </p>
            <h3>Key Hardware Components:</h3>
            <ul>
              <li>
                <strong>Central Processing Unit (CPU):</strong> The "brain" of the computer, responsible for executing instructions and performing calculations.
              </li>
              <li>
                <strong>Random Access Memory (RAM):</strong> Volatile memory used to temporarily store data that the CPU is actively using. Faster than storage.
              </li>
              <li>
                <strong>Storage Device:</strong> Stores data permanently (or semi-permanently). Examples include Hard Disk Drives (HDD) and Solid State Drives (SSD).
              </li>
              <li>
                <strong>Motherboard:</strong> The main circuit board that connects all other hardware components.
              </li>
              <li>
                <strong>Graphics Processing Unit (GPU):</strong> Specializes in rendering images, videos, and animations.
              </li>
              <li>
                <strong>Power Supply Unit (PSU):</strong> Converts AC power from the wall outlet to DC power needed by the computer components.
              </li>
              <li>
                <strong>Input Devices:</strong> Used to provide data and control signals to an information processing system (e.g., keyboard, mouse, microphone).
              </li>
              <li>
                <strong>Output Devices:</strong> Used to send data from a computer to another device or user (e.g., monitor, printer, speakers).
              </li>
            </ul>
            <p>
              All these components work together to allow a computer to function.
            </p>
          `,
          // Lesson 8: EVS
          "lesson_8_title": "Environmental Pollution: Causes and Effects",
          "lesson_8_subject": "EVS",
          "lesson_8_description": "An overview of different types of environmental pollution, their causes, and impacts on the planet and living beings.",
          "lesson_8_content": `
            <p>
              Environmental pollution is the introduction of contaminants into the natural environment that cause adverse change. Pollution can take the form of chemical substances or energy, such as noise, heat, or light.
            </p>
            <h3>Types of Pollution:</h3>
            <ul>
              <li>
                <strong>Air Pollution:</strong> Contamination of the atmosphere by harmful substances, including gases and particulate matter (e.g., vehicle emissions, industrial fumes).
              </li>
              <li>
                <strong>Water Pollution:</strong> Contamination of water bodies (e.g., lakes, rivers, oceans, groundwater) by pollutants (e.g., industrial waste, sewage, agricultural runoff).
              </li>
              <li>
                <strong>Soil Pollution:</strong> Contamination of soil with harmful substances (e.g., pesticides, industrial waste, improper waste disposal).
              </li>
              <li>
                <strong>Noise Pollution:</strong> Excessive or unwanted sound that can disrupt human or animal life.
              </li>
              <li>
                <strong>Thermal Pollution:</strong> Increase or decrease in water temperature caused by human activity (e.g., power plants).
              </li>
            </ul>
            <h3>Causes and Effects:</h3>
            <p>
              Major causes include industrialization, urbanization, deforestation, and agricultural activities. The effects are wide-ranging, from health problems in humans and animals to climate change, loss of biodiversity, and ecosystem disruption.
            </p>
            <p>
              Combating pollution requires a global effort involving sustainable practices, renewable energy, waste management and public awareness.
            </p>
          `,
        }
      },
      hi: {
        translation: {
          "welcome_message": "एडूरीच में आपका स्वागत है!",
          "lessons_title": "सभी पाठ",
          "subjects_title": "सभी विषय",
          "back_to_subjects": "विषयों पर वापस",
          "read_lesson": "पाठ पढ़ें",
          "view_lessons": "पाठ देखें",
          "lesson_complete_title": "पाठ पूरा हुआ!",
          "lesson_complete_description": "आपने \"{{lessonTitle}}\" को सफलतापूर्वक पढ़ लिया है।",
          "lesson_not_found_title": "पाठ नहीं मिला",
          "lesson_not_found_description": "आप जिस पाठ की तलाश कर रहे हैं वह मौजूद नहीं है।",
          "back_to_dashboard": "डैशबोर्ड पर वापस",
          "mark_as_read": "पढ़ा हुआ चिह्नित करें",

          // Subject titles (Hindi)
          "subject_mathematics_title": "गणित",
          "subject_hindi_title": "हिंदी",
          "subject_science_title": "विज्ञान",
          "subject_social science_title": "सामाजिक विज्ञान",
          "subject_punjabi_title": "पंजाबी",
          "subject_english_title": "अंग्रेज़ी",
          "subject_it_title": "आईटी",
          "subject_evs_title": "ईवीएस",

          // Lessons in Subject titles (Hindi)
          "subject_mathematics_lessons_title": "गणित में पाठ",
          "subject_hindi_lessons_title": "हिंदी में पाठ",
          "subject_science_lessons_title": "विज्ञान में पाठ",
          "subject_social science_lessons_title": "सामाजिक विज्ञान में पाठ",
          "subject_punjabi_lessons_title": "पंजाबी में पाठ",
          "subject_english_lessons_title": "अंग्रेजी में पाठ",
          "subject_it_lessons_title": "आईटी में पाठ",
          "subject_evs_lessons_title": "ईवीएस में पाठ",

          // Lesson 1: Mathematics (Hindi)
          "lesson_1_title": "चर और व्यंजकों को समझना",
          "lesson_1_subject": "गणित",
          "lesson_1_description": "यह पाठ बीजगणितीय चर और सरल व्यंजकों को बनाने के तरीके की मूल बातें बताता है।",
          "lesson_1_content": `
            <p>
              बीजगणित गणित की एक शाखा है जो प्रतीकों और इन प्रतीकों में हेरफेर करने के नियमों से संबंधित है। इन प्रतीकों (अक्सर x, y, या a, b जैसे अक्षर) को चर कहा जाता है।
            </p>
            <p>
              बीजगणित में एक व्यंजक संख्याओं, चरों और संक्रिया प्रतीकों (जैसे +, -, *, /) का एक संयोजन है। उदाहरण के लिए, \\(2x + 5\\) एक बीजगणितीय व्यंजक है।
            </p>
            <h3>मुख्य अवधारणाएँ:</h3>
            <ul>
              <li>
                <strong>चर:</strong> एक प्रतीक, आमतौर पर एक अक्षर, जो एक ऐसी मात्रा का प्रतिनिधित्व करता है जो बदल सकती है।
              </li>
              <li>
                <strong>स्थिरांक:</strong> एक निश्चित मान जो नहीं बदलता है। \\(2x + 5\\) में, \\(5\\) एक स्थिरांक है।
              </li>
              <li>
                <strong>गुणांक:</strong> एक संख्या जिसे एक चर से गुणा किया जाता है। \\(2x + 5\\) में, \\(2\\), \\(x\\) का गुणांक है।
              </li>
              <li>
                <strong>पद:</strong> व्यंजक के भाग जो जोड़ या घटाव से अलग होते हैं। \\(2x + 5\\) में, \\(2x\\) और \\(5\\) पद हैं।
              </li>
            </ul>
            <p>
              आइए एक उदाहरण देखें: यदि आपके पास \\(3\\) सेब हैं और आपको \\(x\\) और सेब मिलते हैं, तो आपके पास कुल सेबों की संख्या को व्यंजक \\(3 + x\\) द्वारा दर्शाया जा सकता है।
            </p>
          `,
          // Lesson 2: Science (Hindi)
          "lesson_2_title": "प्रकाश संश्लेषण: पौधे का भोजन कारखाना",
          "lesson_2_subject": "विज्ञान",
          "lesson_2_description": "जानें कि पौधे प्रकाश संश्लेषण के माध्यम से प्रकाश ऊर्जा को रासायनिक ऊर्जा में कैसे बदलते हैं।",
          "lesson_2_content": `
            <p>
              प्रकाश संश्लेषण वह प्रक्रिया है जिसका उपयोग पौधे, शैवाल और कुछ बैक्टीरिया प्रकाश ऊर्जा को रासायनिक ऊर्जा में बदलने के लिए करते हैं। यह रासायनिक ऊर्जा कार्बोहाइड्रेट अणुओं, जैसे शर्करा, में संग्रहीत होती है, जो कार्बन डाइऑक्साइड और पानी से संश्लेषित होते हैं।
            </p>
            <h3>प्रक्रिया:</h3>
            <p>
              प्रकाश संश्लेषण की प्रक्रिया में दो मुख्य चरण शामिल हैं:
            </p>
            <ol>
              <li>
                <strong>प्रकाश-निर्भर प्रतिक्रियाएँ:</strong> ये प्रतिक्रियाएँ क्लोरोप्लास्ट के थाइलाकोइड झिल्ली में होती हैं और प्रकाश की आवश्यकता होती है। प्रकाश ऊर्जा क्लोरोफिल द्वारा ग्रहण की जाती है और एटीपी और एनएडीपीएच बनाने के लिए उपयोग की जाती है।
              </li>
              <li>
                <strong>प्रकाश-स्वतंत्र प्रतिक्रियाएँ (केल्विन चक्र):</strong> ये प्रतिक्रियाएँ क्लोरोप्लास्ट के स्ट्रोमा में होती हैं और सीधे प्रकाश की आवश्यकता नहीं होती है। प्रकाश-निर्भर प्रतिक्रियाओं में उत्पादित एटीपी और एनएडीपीएच का उपयोग कार्बन डाइऑक्साइड को ग्लूकोज में बदलने के लिए किया जाता है।
              </li>
            </ol>
            <h3>मुख्य घटक:</h3>
            <ul>
              <li>
                <strong>क्लोरोप्लास्ट:</strong> पौधे की कोशिकाओं में अंग जहां प्रकाश संश्लेषण होता है।
              </li>
              <li>
                <strong>क्लोरोफिल:</strong> हरा वर्णक जो प्रकाश ऊर्जा को अवशोषित करता है।
              </li>
              <li>
                <strong>कार्बन डाइऑक्साइड:</strong> वायुमंडल से अवशोषित।
              </li>
              <li>
                <strong>पानी:</strong> मिट्टी से अवशोषित।
              </li>
              <li>
                <strong>ग्लूकोज:</strong> पौधे के भोजन के रूप में उत्पादित चीनी।
              </li>
              <li>
                <strong>ऑक्सीजन:</strong> एक उप-उत्पाद के रूप में जारी।
              </li>
            </ul>
          `,
          // Lesson 3: Social Science (Hindi)
          "lesson_3_title": "रोमन साम्राज्य: उदय और पतन",
          "lesson_3_subject": "सामाजिक विज्ञान",
          "lesson_3_description": "इतिहास के सबसे शक्तिशाली साम्राज्यों में से एक के उदय और पतन के बारे में जानें।",
          "lesson_3_content": `
            <p>
              रोमन साम्राज्य प्राचीन रोम का उत्तर-गणतांत्रिक काल था। यह एक विशाल और शक्तिशाली साम्राज्य था जिसने सदियों तक भूमध्यसागरीय दुनिया पर शासन किया, पश्चिमी सभ्यता पर एक स्थायी विरासत छोड़ दी।
            </p>
            <h3>मुख्य काल:</h3>
            <ul>
              <li>
                <strong>रोम की स्थापना (753 ईसा पूर्व):</strong> रोम शहर की रोमुलस द्वारा स्थापना की पारंपरिक तिथि।
              </li>
              <li>
                <strong>रोमन गणराज्य (509 ईसा पूर्व - 27 ईसा पूर्व):</strong> गणतंत्रात्मक सरकार का एक काल, जिसमें निर्वाचित अधिकारी और कानूनों की एक जटिल प्रणाली थी।
              </li>
              <li>
                <strong>रोमन साम्राज्य (27 ईसा पूर्व - 476 ईस्वी):</strong> ऑगस्टस के शासनकाल से शुरू हुआ, जो गणराज्य के अंत और एक सम्राट के अधीन शक्ति के समेकन को चिह्नित करता है।
              </li>
              <li>
                <strong>पैक्स रोमाना (27 ईसा पूर्व - 180 ईस्वी):</strong> रोमन साम्राज्य भर में सापेक्ष शांति और स्थिरता का एक काल।
              </li>
              <li>
                <strong>तीसरी शताब्दी का संकट (235-284 ईस्वी):</strong> गृह युद्ध, आर्थिक पतन और विदेशी आक्रमणों का एक काल।
              </li>
              <li>
                <strong>पश्चिमी रोमन साम्राज्य का पतन (476 ईस्वी):</strong> पारंपरिक रूप से रोमुलस ऑगस्टुलस के पदत्याग से चिह्नित, हालांकि पूर्वी रोमन (बीजान्टिन) साम्राज्य एक हजार साल और जारी रहा।
              </li>
            </ul>
            <p>
              रोमन साम्राज्य का प्रभाव आज भी कानून, वास्तुकला, भाषा और सरकार में देखा जा सकता है।
            </p>
          `,
          // Lesson 4: Hindi (Hindi - Self-reference)
          "lesson_4_title": "बुनियादी शुभकामनाएँ और वाक्यांश",
          "lesson_4_subject": "हिंदी",
          "lesson_4_description": "सामान्य हिंदी शुभकामनाओं और उपयोगी रोजमर्रा के वाक्यांशों का परिचय।",
          "lesson_4_content": `
            <p>
              किसी भी नई भाषा में संवाद करने के लिए बुनियादी शुभकामनाएँ सीखना पहला कदम है। हिंदी, एक इंडो-आर्यन भाषा, भारत और दुनिया के अन्य हिस्सों में व्यापक रूप से बोली जाती है।
            </p>
            <h3>सामान्य हिंदी शुभकामनाएँ:</h3>
            <ul>
              <li>
                <strong>नमस्ते:</strong> नमस्ते/शुभकामनाएँ (दिन के किसी भी समय इस्तेमाल किया जा सकता है)।
              </li>
              <li>
                <strong>सुप्रभात:</strong> शुभ प्रभात।
              </li>
              <li>
                <strong>शुभ संध्या:</strong> शुभ संध्या।
              </li>
              <li>
                <strong>अलविदा:ः</strong> अलविदा।
              </li>
            </ul>
            <h3>उपयोगी वाक्यांश:</h3>
            <ul>
              <li>
                <strong>आप कैसे हैं?:</strong> आप कैसे हैं? (एक पुरुष के लिए)
              </li>
              <li>
                <strong>आप कैसी हैं?:</strong> आप कैसी हैं? (एक महिला के लिए)
              </li>
              <li>
                <strong>मैं ठीक हूँ:</strong> मैं ठीक हूँ।
              </li>
              <li>
                <strong>धन्यवाद:</strong> धन्यवाद।
              </li>
              <li>
                <strong>कृपया:</strong> कृपया।
              </li>
            </ul>
          `,
          // Lesson 5: Punjabi (Hindi)
          "lesson_5_title": "पंजाबी वर्णमाला का परिचय",
          "lesson_5_subject": "पंजाबी",
          "lesson_5_description": "गुरुमुखी लिपि और पंजाबी वर्णमाला की मूल बातें जानें।",
          "lesson_5_content": `
            <p>
              पंजाबी पंजाबी लोगों द्वारा बोली जाने वाली एक इंडो-आर्यन भाषा है। यह भारतीय राज्य पंजाब की आधिकारिक भाषा है और पाकिस्तान के पंजाब की प्राथमिक भाषा है। गुरुमुखी लिपि का उपयोग आमतौर पर भारत में पंजाबी लिखने के लिए किया जाता है।
            </p>
            <h3>गुरुमुखी वर्णमाला (पंती अखरी):</h3>
            <p>
              गुरुमुखी लिपि में 35 प्राथमिक अक्षर होते हैं, जिन्हें 'पंती अखरी' के नाम से जाना जाता है। प्रत्येक अक्षर एक अलग ध्वनि का प्रतिनिधित्व करता है।
            </p>
            <ul>
              <li>
                <strong>स्वर:</strong> 3 मुख्य स्वर वाहक (ऊरा, ऐरा, इरी) और 10 स्वर चिह्न हैं।
              </li>
              <li>
                <strong>व्यंजन:</strong> शेष 32 अक्षर व्यंजन हैं।
              </li>
            </ul>
            <h3>उदाहरण अक्षर:</h3>
            <ul>
              <li>
                <strong>ੳ (ऊरा):</strong> स्वर ध्वनियों 'उ', 'ऊ', 'ओ' के लिए उपयोग किया जाता है।
              </li>
              <li>
                <strong>ਅ (ऐरा):</strong> स्वर ध्वनियों 'अ', 'आ', 'ए' के लिए उपयोग किया जाता है।
              </li>
              <li>
                <strong>ੲ (इरी):</strong> स्वर ध्वनियों 'इ', 'ई' के लिए उपयोग किया जाता है।
              </li>
              <li>
                <strong>ਕ (कक्का):ः</strong> 'क' के रूप में उच्चारित।
              </li>
              <li>
                <strong>ख (खखा):</strong> 'ख' के रूप में उच्चारित।
              </li>
            </ul>
            <p>
              गुरुमुखी वर्णमाला में महारत हासिल करना पंजाबी पढ़ने और लिखने के लिए आवश्यक है।
            </p>
          `,
          // Lesson 6: English (Hindi)
          "lesson_6_title": "अंग्रेजी व्याकरण के मूल सिद्धांत",
          "lesson_6_subject": "अंग्रेज़ी",
          "lesson_6_description": "अंग्रेजी व्याकरण के बुनियादी नियमों का एक व्यापक मार्गदर्शिका, जिसमें भाषण के भाग और वाक्य संरचना शामिल है।",
          "lesson_6_content": `
            <p>
              अंग्रेजी व्याकरण संरचनात्मक नियमों का एक सेट है जो अंग्रेजी भाषा में खंडों, वाक्यांशों और शब्दों की संरचना को नियंत्रित करता है।
            </p>
            <h3>भाषण के भाग:</h3>
            <ul>
              <li>
                <strong>संज्ञा:</strong> लोग, स्थान, चीजें, या विचार (उदा. *बिल्ली*, *लंदन*, *खुशी*)।
              </li>
              <li>
                <strong>सर्वनाम:</strong> संज्ञाओं को प्रतिस्थापित करें (उदा. *वह*, *वह*, *यह*, *वे*)।
              </li>
              <li>
                <strong>क्रिया:</strong> क्रियाएँ या होने की अवस्थाएँ (उदा. *दौड़ना*, *है*, *सोचना*)।
              </li>
              <li>
                <strong>विशेषण:</strong> संज्ञा या सर्वनाम का वर्णन करें (उदा. *खुश*, *लंबा*, *नीला*)।
              </li>
              <li>
                <strong>क्रियाविशेषण:ः</strong> क्रियाओं, विशेषणों, या अन्य क्रियाविशेषणों का वर्णन करें (उदा. *जल्दी*, *बहुत*, *अच्छी तरह से*)।
              </li>
              <li>
                <strong>पूर्वसर्ग:</strong> संज्ञाओं/सर्वनामों और अन्य शब्दों के बीच संबंध दिखाएं (उदा. *पर*, *में*, *पर*)।
              </li>
              <li>
                <strong>संयोजक:</strong> शब्दों, वाक्यांशों, या खंडों को जोड़ें (उदा. *और*, *लेकिन*, *या*)।
              </li>
              <li>
                <strong>विस्मयादिबोधक:</strong> तीव्र भावनाओं को व्यक्त करें (उदा. *ओह!*, *वाह!*)।
              </li>
            </ul>
            <h3>वाक्य संरचना:</h3>
            <p>
              एक बुनियादी अंग्रेजी वाक्य आमतौर पर एक विषय-क्रिया-कर्म (SVO) क्रम का पालन करता है (उदा. \"The dog (Subject) chased (Verb) the ball (Object).\")।
            </p>
          `,
          // Lesson 7: IT (Hindi)
          "lesson_7_title": "कंप्यूटर हार्डवेयर का परिचय",
          "lesson_7_subject": "आईटी",
          "lesson_7_description": "कंप्यूटर के बुनियादी घटकों और उनके कार्यों को समझें।",
          "lesson_7_content": `
            <p>
              कंप्यूटर हार्डवेयर उन भौतिक घटकों को संदर्भित करता है जो एक कंप्यूटर प्रणाली बनाते हैं। ये वे मूर्त भाग हैं जिन्हें आप देख और छू सकते हैं, सॉफ्टवेयर के विपरीत, जो निर्देशों का एक सेट है।
            </p>
            <h3>मुख्य हार्डवेयर घटक:</h3>
            <ul>
              <li>
                <strong>सेंट्रल प्रोसेसिंग यूनिट (सीपीयू):</strong> कंप्यूटर का \"मस्तिष्क\", निर्देशों को निष्पादित करने और गणना करने के लिए जिम्मेदार।
              </li>
              <li>
                <strong>रैंडम एक्सेस मेमोरी (रैम):</strong> अस्थिर मेमोरी का उपयोग अस्थायी रूप से डेटा को संग्रहीत करने के लिए किया जाता है जिसका सीपीयू सक्रिय रूप से उपयोग कर रहा है। भंडारण से तेज़।
              </li>
              <li>
                <strong>भंडारण उपकरण:ः</strong> डेटा को स्थायी रूप से (या अर्ध-स्थायी रूप से) संग्रहीत करता है। उदाहरणों में हार्ड डिस्क ड्राइव (एचडीडी) और सॉलिड स्टेट ड्राइव (एसएसडी) शामिल हैं।
              </li>
              <li>
                <strong>मदरबोर्ड:</strong> मुख्य सर्किट बोर्ड जो अन्य सभी हार्डवेयर घटकों को जोड़ता है।
              </li>
              <li>
                <strong>ग्राफिक्स प्रोसेसिंग यूनिट (जीपीयू):</strong> छवियों, वीडियो और एनिमेशन को प्रस्तुत करने में माहिर है।
              </li>
              <li>
                <strong>पावर सप्लाई यूनिट (पीएसयू):</strong> दीवार के आउटलेट से एसी पावर को कंप्यूटर घटकों द्वारा आवश्यक डीसी पावर में परिवर्तित करता है।
              </li>
              <li>
                <strong>इनपुट डिवाइस:</strong> एक सूचना प्रसंस्करण प्रणाली को डेटा और नियंत्रण संकेत प्रदान करने के लिए उपयोग किया जाता है (उदा. कीबोर्ड, माउस, माइक्रोफोन)।
              </li>
              <li>
                <strong>आउटपुट डिवाइस:</strong> कंप्यूटर से किसी अन्य डिवाइस या उपयोगकर्ता को डेटा भेजने के लिए उपयोग किया जाता है (उदा. मॉनिटर, प्रिंटर, स्पीकर)।
              </li>
            </ul>
            <p>
              ये सभी घटक एक कंप्यूटर को कार्य करने की अनुमति देने के लिए एक साथ काम करते हैं।
            </p>
          `,
          // Lesson 8: EVS (Hindi)
          "lesson_8_title": "पर्यावरण प्रदूषण: कारण और प्रभाव",
          "lesson_8_subject": "ईवीएस",
          "lesson_8_description": "पर्यावरण प्रदूषण के विभिन्न प्रकारों, उनके कारणों और ग्रह तथा जीवित प्राणियों पर पड़ने वाले प्रभावों का अवलोकन।",
          "lesson_8_content": `
            <p>
              पर्यावरण प्रदूषण प्राकृतिक वातावरण में दूषित पदार्थों का प्रवेश है जो प्रतिकूल परिवर्तन का कारण बनता है। प्रदूषण रासायनिक पदार्थों या ऊर्जा, जैसे शोर, गर्मी या प्रकाश का रूप ले सकता है।
            </p>
            <h3>प्रदूषण के प्रकार:</h3>
            <ul>
              <li>
                <strong>वायु प्रदूषण:</strong> हानिकारक पदार्थों, जिसमें गैसें और कणिका तत्व शामिल हैं (उदा. वाहन उत्सर्जन, औद्योगिक धुएं), द्वारा वायुमंडल का संदूषण।
              </li>
              <li>
                <strong>जल प्रदूषण:</strong> प्रदूषकों (उदा. औद्योगिक कचरा, सीवेज, कृषि अपवाह) द्वारा जल निकायों (उदा. झीलें, नदियाँ, महासागर, भूजल) का संदूषण।
              </li>
              <li>
                <strong>मृदा प्रदूषण:</strong> हानिकारक पदार्थों (उदा. कीटनाशक, औद्योगिक कचरा, अनुचित अपशिष्ट निपटान) द्वारा मिट्टी का संदूषण।
              </li>
              <li>
                <strong>ध्वनि प्रदूषण:</strong> अत्यधिक या अवांछित ध्वनि जो मानव या पशु जीवन को बाधित कर सकती है।
              </li>
              <li>
                <strong>थर्मल प्रदूषण:ः</strong> मानव गतिविधि (उदा. पावर प्लांट) के कारण पानी के तापमान में वृद्धि या कमी।
              </li>
            </ul>
            <h3>कारण और प्रभाव:</h3>
            <p>
              प्रमुख कारणों में औद्योगिकीकरण, शहरीकरण, वनों की कटाई और कृषि गतिविधियां शामिल हैं। प्रभाव व्यापक हैं, मनुष्यों और जानवरों में स्वास्थ्य समस्याओं से लेकर जलवायु परिवर्तन, जैव विविधता का नुकसान और पारिस्थितिकी तंत्र का विघटन तक।
            </p>
            <p>
              प्रदूषण से निपटने के लिए टिकाऊ प्रथाओं, नवीकरणीय ऊर्जा, अपशिष्ट प्रबंधन और जन जागरूकता सहित एक वैश्विक प्रयास की आवश्यकता है।
            </p>
          `,
        }
      },
      pa: {
        translation: {
          "welcome_message": "ਐਡੂਰੀਚ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ!",
          "lessons_title": "ਸਾਰੇ ਪਾਠ",
          "subjects_title": "ਸਾਰੇ ਵਿਸ਼ੇ",
          "back_to_subjects": "ਵਿਸ਼ਿਆਂ 'ਤੇ ਵਾਪਸ",
          "read_lesson": "ਪਾਠ ਪੜ੍ਹੋ",
          "view_lessons": "ਪਾਠ ਵੇਖੋ",
          "lesson_complete_title": "ਪਾਠ ਪੂਰਾ ਹੋਇਆ!",
          "lesson_complete_description": "ਤੁਸੀਂ \"{{lessonTitle}}\" ਨੂੰ ਸਫਲਤਾਪੂਰਵਕ ਪੜ੍ਹਿਆ ਹੈ।",
          "lesson_not_found_title": "ਪਾਠ ਨਹੀਂ ਮਿਲਿਆ",
          "lesson_not_found_description": "ਤੁਸੀਂ ਜਿਸ ਪਾਠ ਦੀ ਭਾਲ ਕਰ ਰਹੇ ਹੋ, ਉਹ ਮੌਜੂਦ ਨਹੀਂ ਹੈ।",
          "back_to_dashboard": "ਡੈਸ਼ਬੋਰਡ 'ਤੇ ਵਾਪਸ",
          "mark_as_read": "ਪੜ੍ਹਿਆ ਹੋਇਆ ਵਜੋਂ ਨਿਸ਼ਾਨਬੱਧ ਕਰੋ",

          // Subject titles (Punjabi)
          "subject_mathematics_title": "ਗਣਿਤ",
          "subject_hindi_title": "ਹਿੰਦੀ",
          "subject_science_title": "ਵਿਗਿਆਨ",
          "subject_social science_title": "ਸਮਾਜਿਕ ਵਿਗਿਆਨ",
          "subject_punjabi_title": "ਪੰਜਾਬੀ",
          "subject_english_title": "ਅੰਗਰੇਜ਼ੀ",
          "subject_it_title": "ਆਈ.ਟੀ.",
          "subject_evs_title": "ਈ.ਵੀ.ਐਸ.",

          // Lessons in Subject titles (Punjabi)
          "subject_mathematics_lessons_title": "ਗਣਿਤ ਵਿੱਚ ਪਾਠ",
          "subject_hindi_lessons_title": "ਹਿੰਦੀ ਵਿੱਚ ਪਾਠ",
          "subject_science_lessons_title": "ਵਿਗਿਆਨ ਵਿੱਚ ਪਾਠ",
          "subject_social science_lessons_title": "ਸਮਾਜਿਕ ਵਿਗਿਆਨ ਵਿੱਚ ਪਾਠ",
          "subject_punjabi_lessons_title": "ਪੰਜਾਬੀ ਵਿੱਚ ਪਾਠ",
          "subject_english_lessons_title": "ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਪਾਠ",
          "subject_it_lessons_title": "ਆਈ.ਟੀ. ਵਿੱਚ ਪਾਠ",
          "subject_evs_lessons_title": "ਈ.ਵੀ.ਐਸ. ਵਿੱਚ ਪਾਠ",

          // Lesson 1: Mathematics (Punjabi)
          "lesson_1_title": "ਵੇਰੀਏਬਲ ਅਤੇ ਸਮੀਕਰਨਾਂ ਨੂੰ ਸਮਝਣਾ",
          "lesson_1_subject": "ਗਣਿਤ",
          "lesson_1_description": "ਇਹ ਪਾਠ ਬੀਜਗਣਿਤ ਦੇ ਵੇਰੀਏਬਲਾਂ ਅਤੇ ਸਧਾਰਨ ਸਮੀਕਰਨਾਂ ਨੂੰ ਬਣਾਉਣ ਦੇ ਮੂਲ ਤੱਤਾਂ ਨੂੰ ਕਵਰ ਕਰਦਾ ਹੈ।",
          "lesson_1_content": `
            <p>
              ਬੀਜਗਣਿਤ ਗਣਿਤ ਦੀ ਇੱਕ ਸ਼ਾਖਾ ਹੈ ਜੋ ਪ੍ਰਤੀਕਾਂ ਅਤੇ ਇਹਨਾਂ ਪ੍ਰਤੀਕਾਂ ਵਿੱਚ ਹੇਰਫੇਰ ਕਰਨ ਦੇ ਨਿਯਮਾਂ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ। ਇਹਨਾਂ ਪ੍ਰਤੀਕਾਂ (ਅਕਸਰ x, y, ਜਾਂ a, b ਵਰਗੇ ਅੱਖਰ) ਨੂੰ ਵੇਰੀਏਬਲ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।
            </p>
            <p>
              ਬੀਜਗਣਿਤ ਵਿੱਚ ਇੱਕ ਸਮੀਕਰਨ ਸੰਖਿਆਵਾਂ, ਵੇਰੀਏਬਲਾਂ, ਅਤੇ ਓਪਰੇਸ਼ਨ ਚਿੰਨ੍ਹਾਂ (ਜਿਵੇਂ +, -, *, /) ਦਾ ਸੁਮੇਲ ਹੈ। ਉਦਾਹਰਨ ਲਈ, \\(2x + 5\\) ਇੱਕ ਬੀਜਗਣਿਤ ਸਮੀਕਰਨ ਹੈ।
            </p>
            <h3>ਮੁੱਖ ਧਾਰਨਾਵਾਂ:</h3>
            <ul>
              <li>
                <strong>ਵੇਰੀਏਬਲ:</strong> ਇੱਕ ਪ੍ਰਤੀਕ, ਆਮ ਤੌਰ 'ਤੇ ਇੱਕ ਅੱਖਰ, ਜੋ ਇੱਕ ਅਜਿਹੀ ਮਾਤਰਾ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ ਜੋ ਬਦਲ ਸਕਦੀ ਹੈ।
              </li>
              <li>
                <strong>ਸਥਿਰਾਂਕ:</strong> ਇੱਕ ਨਿਸ਼ਚਿਤ ਮੁੱਲ ਜੋ ਨਹੀਂ ਬਦਲਦਾ। \\(2x + 5\\) ਵਿੱਚ, \\(5\\) ਇੱਕ ਸਥਿਰਾਂਕ ਹੈ।
              </li>
              <li>
                <strong>ਗੁਣਾਂਕ:</strong> ਇੱਕ ਸੰਖਿਆ ਜੋ ਇੱਕ ਵੇਰੀਏਬਲ ਨਾਲ ਗੁਣਾ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। \\(2x + 5\\) ਵਿੱਚ, \\(2\\) \\(x\\) ਦਾ ਗੁਣਾਂਕ ਹੈ।
              </li>
              <li>
                <strong>ਪਦ:</strong> ਸਮੀਕਰਨ ਦੇ ਉਹ ਹਿੱਸੇ ਜੋ ਜੋੜ ਜਾਂ ਘਟਾਓ ਦੁਆਰਾ ਵੱਖ ਕੀਤੇ ਜਾਂਦੇ ਹਨ। \\(2x + 5\\) ਵਿੱਚ, \\(2x\\) ਅਤੇ \\(5\\) ਪਦ ਹਨ।
              </li>
            </ul>
            <p>
              ਆਓ ਇੱਕ ਉਦਾਹਰਨ ਵੇਖੀਏ: ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ \\(3\\) ਸੇਬ ਹਨ ਅਤੇ ਤੁਹਾਨੂੰ \\(x\\) ਹੋਰ ਸੇਬ ਮਿਲਦੇ ਹਨ, ਤਾਂ ਤੁਹਾਡੇ ਕੋਲ ਕੁੱਲ ਸੇਬਾਂ ਦੀ ਸੰਖਿਆ ਨੂੰ ਸਮੀਕਰਨ \\(3 + x\\) ਦੁਆਰਾ ਦਰਸਾਇਆ ਜਾ ਸਕਦਾ ਹੈ।
            </p>
          `,
          // Lesson 2: Science (Punjabi)
          "lesson_2_title": "ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ: ਪੌਦੇ ਦਾ ਭੋਜਨ ਕਾਰਖਾਨਾ",
          "lesson_2_subject": "ਵਿਗਿਆਨ",
          "lesson_2_description": "ਜਾਣੋ ਕਿ ਪੌਦੇ ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਰਾਹੀਂ ਪ੍ਰਕਾਸ਼ ਊਰਜਾ ਨੂੰ ਰਸਾਇਣਕ ਊਰਜਾ ਵਿੱਚ ਕਿਵੇਂ ਬਦਲਦੇ ਹਨ।",
          "lesson_2_content": `
            <p>
              ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਇੱਕ ਪ੍ਰਕਿਰਿਆ ਹੈ ਜੋ ਪੌਦਿਆਂ, ਐਲਗੀ ਅਤੇ ਕੁਝ ਬੈਕਟੀਰੀਆ ਦੁਆਰਾ ਪ੍ਰਕਾਸ਼ ਊਰਜਾ ਨੂੰ ਰਸਾਇਣਕ ਊਰਜਾ ਵਿੱਚ ਬਦਲਣ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ। ਇਹ ਰਸਾਇਣਕ ਊਰਜਾ ਕਾਰਬੋਹਾਈਡਰੇਟ ਅਣੂਆਂ, ਜਿਵੇਂ ਕਿ ਸ਼ੱਕਰ, ਵਿੱਚ ਸਟੋਰ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਜੋ ਕਾਰਬਨ ਡਾਈਆਕਸਾਈਡ ਅਤੇ ਪਾਣੀ ਤੋਂ ਸੰਸ਼ਲੇਸ਼ਿਤ ਹੁੰਦੇ ਹਨ।
            </p>
            <h3>ਪ੍ਰਕਿਰਿਆ:</h3>
            <p>
              ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਦੀ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਦੋ ਮੁੱਖ ਪੜਾਅ ਸ਼ਾਮਲ ਹਨ:
            </p>
            <ol>
              <li>
                <strong>ਪ੍ਰਕਾਸ਼-ਨਿਰਭਰ ਪ੍ਰਤੀਕ੍ਰਿਆਵਾਂ:</strong> ਇਹ ਪ੍ਰਤੀਕ੍ਰਿਆਵਾਂ ਕਲੋਰੋਪਲਾਸਟ ਦੇ ਥਾਈਲਾਕੋਇਡ ਝਿੱਲੀ ਵਿੱਚ ਹੁੰਦੀਆਂ ਹਨ ਅਤੇ ਪ੍ਰਕਾਸ਼ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਪ੍ਰਕਾਸ਼ ਊਰਜਾ ਕਲੋਰੋਫਿਲ ਦੁਆਰਾ ਕੈਪਚਰ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਏਟੀਪੀ ਅਤੇ ਐਨਏਡੀਪੀਐਚ ਬਣਾਉਣ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।
              </li>
              <li>
                <strong>ਪ੍ਰਕਾਸ਼-ਸੁਤੰਤਰ ਪ੍ਰਤੀਕ੍ਰਿਆਵਾਂ (ਕੈਲਵਿਨ ਚੱਕਰ):</strong> ਇਹ ਪ੍ਰਤੀਕ੍ਰਿਆਵਾਂ ਕਲੋਰੋਪਲਾਸਟ ਦੇ ਸਟ੍ਰੋਮਾ ਵਿੱਚ ਹੁੰਦੀਆਂ ਹਨ ਅਤੇ ਸਿੱਧੇ ਤੌਰ 'ਤੇ ਪ੍ਰਕਾਸ਼ ਦੀ ਲੋੜ ਨਹੀਂ ਹੁੰਦੀ ਹੈ। ਪ੍ਰਕਾਸ਼-ਨਿਰਭਰ ਪ੍ਰਤੀਕ੍ਰਿਆਵਾਂ ਵਿੱਚ ਪੈਦਾ ਹੋਏ ਏਟੀਪੀ ਅਤੇ ਐਨਏਡੀਪੀਐਚ ਦੀ ਵਰਤੋਂ ਕਾਰਬਨ ਡਾਈਆਕਸਾਈਡ ਨੂੰ ਗਲੂਕੋਜ਼ ਵਿੱਚ ਬਦਲਣ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।
              </li>
            </ol>
            <h3>ਮੁੱਖ ਭਾਗ:</h3>
            <ul>
              <li>
                <strong>ਕਲੋਰੋਪਲਾਸਟ:</strong> ਪੌਦੇ ਦੇ ਸੈੱਲਾਂ ਵਿੱਚ ਅੰਗ ਜਿੱਥੇ ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਹੁੰਦਾ ਹੈ।
              </li>
              <li>
                <strong>ਕਲੋਰੋਫਿਲ:</strong> ਹਰਾ ਰੰਗਦਾਰ ਜੋ ਪ੍ਰਕਾਸ਼ ਊਰਜਾ ਨੂੰ ਜਜ਼ਬ ਕਰਦਾ ਹੈ।
              </li>
              <li>
                <strong>ਕਾਰਬਨ ਡਾਈਆਕਸਾਈਡ:</strong> ਵਾਯੂਮੰਡਲ ਤੋਂ ਜਜ਼ਬ।
              </li>
              <li>
                <strong>ਪਾਣੀ:</strong> ਮਿੱਟੀ ਤੋਂ ਜਜ਼ਬ।
              </li>
              <li>
                <strong>ਗਲੂਕੋਜ਼:</strong> ਪੌਦੇ ਲਈ ਭੋਜਨ ਵਜੋਂ ਪੈਦਾ ਹੋਈ ਖੰਡ।
              </li>
              <li>
                <strong>ਆਕਸੀਜਨ:</strong> ਇੱਕ ਉਪ-ਉਤਪਾਦ ਵਜੋਂ ਜਾਰੀ।
              </li>
            </ul>
          `,
          // Lesson 3: Social Science (Punjabi)
          "lesson_3_title": "ਰੋਮਨ ਸਾਮਰਾਜ: ਉਭਾਰ ਅਤੇ ਪਤਨ",
          "lesson_3_subject": "ਸਮਾਜਿਕ ਵਿਗਿਆਨ",
          "lesson_3_description": "ਇਤਿਹਾਸ ਦੇ ਸਭ ਤੋਂ ਸ਼ਕਤੀਸ਼ਾਲੀ ਸਾਮਰਾਜਾਂ ਵਿੱਚੋਂ ਇੱਕ ਦੇ ਉਭਾਰ ਅਤੇ ਪਤਨ ਬਾਰੇ ਜਾਣੋ।",
          "lesson_3_content": `
            <p>
              ਰੋਮਨ ਸਾਮਰਾਜ ਪ੍ਰਾਚੀਨ ਰੋਮ ਦਾ ਗਣਰਾਜ ਤੋਂ ਬਾਅਦ ਦਾ ਦੌਰ ਸੀ। ਇਹ ਇੱਕ ਵਿਸ਼ਾਲ ਅਤੇ ਸ਼ਕਤੀਸ਼ਾਲੀ ਸਾਮਰਾਜ ਸੀ ਜਿਸਨੇ ਸਦੀਆਂ ਤੱਕ ਮੈਡੀਟੇਰੀਅਨ ਸੰਸਾਰ ਉੱਤੇ ਰਾਜ ਕੀਤਾ, ਪੱਛਮੀ ਸਭਿਅਤਾ ਉੱਤੇ ਇੱਕ ਸਥਾਈ ਵਿਰਾਸਤ ਛੱਡ ਗਿਆ।
            </p>
            <h3>ਮੁੱਖ ਕਾਲ:</h3>
            <ul>
              <li>
                <strong>ਰੋਮ ਦੀ ਸਥਾਪਨਾ (753 ਈਸਾ ਪੂਰਵ):</strong> ਰੋਮੂਲਸ ਦੁਆਰਾ ਰੋਮ ਸ਼ਹਿਰ ਦੀ ਸਥਾਪਨਾ ਦੀ ਰਵਾਇਤੀ ਮਿਤੀ।
              </li>
              <li>
                <strong>ਰੋਮਨ ਗਣਰਾਜ (509 ਈਸਾ ਪੂਰਵ - 27 ਈਸਾ ਪੂਰਵ):</strong> ਗਣਰਾਜ ਸਰਕਾਰ ਦਾ ਇੱਕ ਦੌਰ, ਜਿਸ ਵਿੱਚ ਚੁਣੇ ਹੋਏ ਅਧਿਕਾਰੀ ਅਤੇ ਕਾਨੂੰਨਾਂ ਦੀ ਇੱਕ ਗੁੰਝਲਦਾਰ ਪ੍ਰਣਾਲੀ ਸ਼ਾਮਲ ਸੀ।
              </li>
              <li>
                <strong>ਰੋਮਨ ਸਾਮਰਾਜ (27 ਈਸਾ ਪੂਰਵ - 476 ਈਸਵੀ):</strong> ਅਗਸਤਸ ਦੇ ਰਾਜ ਨਾਲ ਸ਼ੁਰੂ ਹੋਇਆ, ਜਿਸਨੇ ਗਣਰਾਜ ਦੇ ਅੰਤ ਅਤੇ ਇੱਕ ਸਮਰਾਟ ਦੇ ਅਧੀਨ ਸ਼ਕਤੀ ਦੇ ਏਕੀਕਰਨ ਨੂੰ ਦਰਸਾਇਆ।
              </li>
              <li>
                <strong>ਪੈਕਸ ਰੋਮਾਨਾ (27 ਈਸਾ ਪੂਰਵ - 180 ਈਸਵੀ):</strong> ਰੋਮਨ ਸਾਮਰਾਜ ਵਿੱਚ ਅਨੁਸਾਰੀ ਸ਼ਾਂਤੀ ਅਤੇ ਸਥਿਰਤਾ ਦਾ ਇੱਕ ਦੌਰ।
              </li>
              <li>
                <strong>ਤੀਜੀ ਸਦੀ ਦਾ ਸੰਕਟ (235-284 ਈਸਵੀ):</strong> ਘਰੇਲੂ ਯੁੱਧ, ਆਰਥਿਕ ਗਿਰਾਵਟ ਅਤੇ ਵਿਦੇਸ਼ੀ ਹਮਲਿਆਂ ਦਾ ਇੱਕ ਦੌਰ।
              </li>
              <li>
                <strong>ਪੱਛਮੀ ਰੋਮਨ ਸਾਮਰਾਜ ਦਾ ਪਤਨ (476 ਈਸਵੀ):</strong> ਰੋਮੂਲਸ ਔਗਸਟੁਲਸ ਦੇ ਗੱਦੀ ਤੋਂ ਹਟਾਏ ਜਾਣ ਦੁਆਰਾ ਰਵਾਇਤੀ ਤੌਰ 'ਤੇ ਚਿੰਨ੍ਹਿਤ ਕੀਤਾ ਗਿਆ, ਹਾਲਾਂਕਿ ਪੂਰਬੀ ਰੋਮਨ (ਬਿਜ਼ੰਤੀਨੀ) ਸਾਮਰਾਜ ਇੱਕ ਹੋਰ ਹਜ਼ਾਰ ਸਾਲ ਤੱਕ ਜਾਰੀ ਰਿਹਾ।
              </li>
            </ul>
            <p>
              ਰੋਮਨ ਸਾਮਰਾਜ ਦਾ ਪ੍ਰਭਾਵ ਅੱਜ ਵੀ ਕਾਨੂੰਨ, ਆਰਕੀਟੈਕਚਰ, ਭਾਸ਼ਾ ਅਤੇ ਸਰਕਾਰ ਵਿੱਚ ਵੇਖਿਆ ਜਾ ਸਕਦਾ ਹੈ।
            </p>
          `,
          // Lesson 4: Hindi (Punjabi)
          "lesson_4_title": "ਮੂਲ ਵਧਾਈਆਂ ਅਤੇ ਵਾਕੰਸ਼",
          "lesson_4_subject": "ਹਿੰਦੀ",
          "lesson_4_description": "ਆਮ ਹਿੰਦੀ ਵਧਾਈਆਂ ਅਤੇ ਉਪਯੋਗੀ ਰੋਜ਼ਾਨਾ ਵਾਕੰਸ਼ਾਂ ਦੀ ਜਾਣ-ਪਛਾਣ।",
          "lesson_4_content": `
            <p>
              ਕਿਸੇ ਵੀ ਨਵੀਂ ਭਾਸ਼ਾ ਵਿੱਚ ਗੱਲਬਾਤ ਕਰਨ ਲਈ ਮੂਲ ਵਧਾਈਆਂ ਸਿੱਖਣਾ ਪਹਿਲਾ ਕਦਮ ਹੈ। ਹਿੰਦੀ, ਇੱਕ ਇੰਡੋ-ਆਰੀਅਨ ਭਾਸ਼ਾ, ਭਾਰਤ ਅਤੇ ਦੁਨੀਆ ਦੇ ਹੋਰ ਹਿੱਸਿਆਂ ਵਿੱਚ ਵਿਆਪਕ ਤੌਰ 'ਤੇ ਬੋਲੀ ਜਾਂਦੀ ਹੈ।
            </p>
            <h3>ਆਮ ਹਿੰਦੀ ਵਧਾਈਆਂ:</h3>
            <ul>
              <li>
                <strong>ਨਮਸਤੇ:</strong> ਹੈਲੋ/ਵਧਾਈਆਂ (ਦਿਨ ਦੇ ਕਿਸੇ ਵੀ ਸਮੇਂ ਵਰਤਿਆ ਜਾ ਸਕਦਾ ਹੈ)।
              </li>
              <li>
                <strong>ਸੁਪ੍ਰਭਾਤ:</strong> ਸ਼ੁਭ ਸਵੇਰ।
              </li>
              <li>
                <strong>ਸ਼ੁਭ ਸੰਧਿਆ:</strong> ਸ਼ੁਭ ਸ਼ਾਮ।
              </li>
              <li>
                <strong>ਅਲਵਿਦਾ:</strong> ਅਲਵਿਦਾ।
              </li>
            </ul>
            <h3>ਉਪਯੋਗੀ ਵਾਕੰਸ਼:</h3>
            <ul>
              <li>
                <strong>ਆਪ ਕੈਸੇ ਹੈਂ?:</strong> ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ? (ਇੱਕ ਮਰਦ ਲਈ)
              </li>
              <li>
                <strong>ਆਪ ਕੈਸੀ ਹੈਂ?:</strong> ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ? (ਇੱਕ ਔਰਤ ਲਈ)
              </li>
              <li>
                <strong>ਮੈਂ ਠੀਕ ਹੂੰ:</strong> ਮੈਂ ਠੀਕ ਹਾਂ।
              </li>
              <li>
                <strong>ਧੰਨਵਾਦ:</strong> ਧੰਨਵਾਦ।
              </li>
              <li>
                <strong>ਕ੍ਰਿਪਯਾ:</strong> ਕਿਰਪਾ ਕਰਕੇ।
              </li>
            </ul>
          `,
          // Lesson 5: Punjabi (Punjabi - Self-reference)
          "lesson_5_title": "ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ ਦੀ ਜਾਣ-ਪਛਾਣ",
          "lesson_5_subject": "ਪੰਜਾਬੀ",
          "lesson_5_description": "ਗੁਰਮੁਖੀ ਲਿਪੀ ਅਤੇ ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ ਦੇ ਮੂਲ ਤੱਤਾਂ ਨੂੰ ਸਿੱਖੋ।",
          "lesson_5_content": `
            <p>
              ਪੰਜਾਬੀ ਪੰਜਾਬੀ ਲੋਕਾਂ ਦੁਆਰਾ ਬੋਲੀ ਜਾਂਦੀ ਇੱਕ ਇੰਡੋ-ਆਰੀਅਨ ਭਾਸ਼ਾ ਹੈ। ਇਹ ਭਾਰਤੀ ਰਾਜ ਪੰਜਾਬ ਦੀ ਅਧਿਕਾਰਤ ਭਾਸ਼ਾ ਹੈ ਅਤੇ ਪਾਕਿਸਤਾਨ ਦੇ ਪੰਜਾਬ ਦੀ ਮੁੱਖ ਭਾਸ਼ਾ ਹੈ। ਗੁਰਮੁਖੀ ਲਿਪੀ ਆਮ ਤੌਰ 'ਤੇ ਭਾਰਤ ਵਿੱਚ ਪੰਜਾਬੀ ਲਿਖਣ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।
            </p>
            <h3>ਗੁਰਮੁਖੀ ਵਰਣਮਾਲਾ (ਪੈਂਤੀ ਅੱਖਰੀ):</h3>
            <p>
              ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ 35 ਮੁੱਖ ਅੱਖਰ ਹੁੰਦੇ ਹਨ, ਜਿਨ੍ਹਾਂ ਨੂੰ 'ਪੈਂਤੀ ਅੱਖਰੀ' ਵਜੋਂ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ। ਹਰ ਇੱਕ ਅੱਖਰ ਇੱਕ ਵਿਲੱਖਣ ਆਵਾਜ਼ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।
            </p>
            <ul>
              <li>
                <strong>ਸਵਰ:</strong> 3 ਮੁੱਖ ਸਵਰ ਵਾਹਕ (ਊੜਾ, ਆੜਾ, ਈੜੀ) ਅਤੇ 10 ਸਵਰ ਚਿੰਨ੍ਹ ਹਨ।
              </li>
              <li>
                <strong>ਵਿਅੰਜਨ:</strong> ਬਾਕੀ ਦੇ 32 ਅੱਖਰ ਵਿਅੰਜਨ ਹਨ।
              </li>
            </ul>
            <h3>ਉਦਾਹਰਨ ਅੱਖਰ:</h3>
            <ul>
              <li>
                <strong>ੳ (ਊੜਾ):</strong> ਸਵਰ ਧੁਨੀਆਂ 'ਉ', 'ਊ', 'ਓ' ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।
              </li>
              <li>
                <strong>ਅ (ਆੜਾ):</strong> ਸਵਰ ਧੁਨੀਆਂ 'ਅ', 'ਆ', 'ਏ' ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।
              </li>
              <li>
                <strong>ੲ (ਈੜੀ):</strong> ਸਵਰ ਧੁਨੀਆਂ 'ਇ', 'ਈ' ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।
              </li>
              <li>
                <strong>ਕ (ਕੱਕਾ):</strong> 'ਕ' ਵਜੋਂ ਉਚਾਰਿਆ ਜਾਂਦਾ ਹੈ।
              </li>
              <li>
                <strong>ਖ (ਖੱਖਾ):៖</strong> 'ਖ' ਵਜੋਂ ਉਚਾਰਿਆ ਜਾਂਦਾ ਹੈ।
              </li>
            </ul>
            <p>
              ਗੁਰਮੁਖੀ ਵਰਣਮਾਲਾ ਵਿੱਚ ਮੁਹਾਰਤ ਹਾਸਲ ਕਰਨਾ ਪੰਜਾਬੀ ਪੜ੍ਹਨ ਅਤੇ ਲਿਖਣ ਲਈ ਜ਼ਰੂਰੀ ਹੈ।
            </p>
          `,
          // Lesson 6: English (Punjabi)
          "lesson_6_title": "ਅੰਗਰੇਜ਼ੀ ਵਿਆਕਰਨ ਦੇ ਮੂਲ ਸਿਧਾਂਤ",
          "lesson_6_subject": "ਅੰਗਰੇਜ਼ੀ",
          "lesson_6_description": "ਅੰਗਰੇਜ਼ੀ ਵਿਆਕਰਨ ਦੇ ਬੁਨਿਆਦੀ ਨਿਯਮਾਂ ਲਈ ਇੱਕ ਵਿਆਪਕ ਗਾਈਡ, ਜਿਸ ਵਿੱਚ ਭਾਸ਼ਣ ਦੇ ਹਿੱਸੇ ਅਤੇ ਵਾਕ ਬਣਤਰ ਸ਼ਾਮਲ ਹੈ।",
          "lesson_6_content": `
            <p>
              ਅੰਗਰੇਜ਼ੀ ਵਿਆਕਰਨ ਢਾਂਚਾਗਤ ਨਿਯਮਾਂ ਦਾ ਸਮੂਹ ਹੈ ਜੋ ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਵਿੱਚ ਕਲਾਜ਼ਾਂ, ਵਾਕਾਂਸ਼ਾਂ ਅਤੇ ਸ਼ਬਦਾਂ ਦੀ ਰਚਨਾ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਦਾ ਹੈ।
            </p>
            <h3>ਭਾਸ਼ਣ ਦੇ ਹਿੱਸੇ:</h3>
            <ul>
              <li>
                <strong>ਨਾਂਵ:</strong> ਲੋਕ, ਸਥਾਨ, ਚੀਜ਼ਾਂ, ਜਾਂ ਵਿਚਾਰ (ਉਦਾਹਰਨ ਲਈ, *ਬਿੱਲੀ*, *ਲੰਡਨ*, *ਖੁਸ਼ੀ*)।
              </li>
              <li>
                <strong>ਪੜਨਾਂਵ:</strong> ਨਾਂਵਾਂ ਦੀ ਥਾਂ ਲੈਂਦੇ ਹਨ (ਉਦਾਹਰਨ ਲਈ, *ਉਹ*, *ਉਸ*, *ਇਹ*, *ਉਹ*)।
              </li>
              <li>
                <strong>ਕਿਰਿਆ:</strong> ਕਾਰਵਾਈਆਂ ਜਾਂ ਹੋਣ ਦੀਆਂ ਅਵਸਥਾਵਾਂ (ਉਦਾਹਰਨ ਲਈ, *ਦੌੜਨਾ*, *ਹੈ*, *ਸੋਚਣਾ*)।
              </li>
              <li>
                <strong>ਵਿਸ਼ੇਸ਼ਣ:</strong> ਨਾਂਵਾਂ ਜਾਂ ਪੜਨਾਂਵਾਂ ਦਾ ਵਰਣਨ ਕਰਦੇ ਹਨ (ਉਦਾਹਰਨ ਲਈ, *ਖੁਸ਼*, *ਲੰਬਾ*, *ਨੀਲਾ*)।
              </li>
              <li>
                <strong>ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ:</strong> ਕਿਰਿਆਵਾਂ, ਵਿਸ਼ੇਸ਼ਣਾਂ, ਜਾਂ ਹੋਰ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣਾਂ ਦਾ ਵਰਣਨ ਕਰਦੇ ਹਨ (ਉਦਾਹਰਨ ਲਈ, *ਤੇਜ਼ੀ ਨਾਲ*, *ਬਹੁਤ*, *ਚੰਗੀ ਤਰ੍ਹਾਂ*)।
              </li>
              <li>
                <strong>ਸੰਬੰਧਕ:</strong> ਨਾਂਵਾਂ/ਪੜਨਾਂਵਾਂ ਅਤੇ ਹੋਰ ਸ਼ਬਦਾਂ ਵਿਚਕਾਰ ਸਬੰਧ ਦਰਸਾਉਂਦੇ ਹਨ (ਉਦਾਹਰਨ ਲਈ, *ਉੱਤੇ*, *ਵਿੱਚ*, *ਤੇ*)।
              </li>
              <li>
                <strong>ਸੰਯੋਜਕ:</strong> ਸ਼ਬਦਾਂ, ਵਾਕਾਂਸ਼ਾਂ, ਜਾਂ ਕਲਾਜ਼ਾਂ ਨੂੰ ਜੋੜਦੇ ਹਨ (ਉਦਾਹਰਨ ਲਈ, *ਅਤੇ*, *ਪਰ*, *ਜਾਂ*)।
              </li>
              <li>
                <strong>ਵਿਸਮਿਕ:</strong> ਤੇਜ਼ ਭਾਵਨਾਵਾਂ ਨੂੰ ਪ੍ਰਗਟ ਕਰਦੇ ਹਨ (ਉਦਾਹਰਨ ਲਈ, *ਓਹ!*, *ਵਾਹ!*)।
              </li>
            </ul>
            <h3>ਵਾਕ ਬਣਤਰ:</h3>
            <p>
              ਇੱਕ ਬੁਨਿਆਦੀ ਅੰਗਰੇਜ਼ੀ ਵਾਕ ਆਮ ਤੌਰ 'ਤੇ ਇੱਕ ਕਰਤਾ-ਕਿਰਿਆ-ਕਰਮ (SVO) ਕ੍ਰਮ ਦੀ ਪਾਲਣਾ ਕਰਦਾ ਹੈ (ਉਦਾਹਰਨ ਲਈ, "ਕੁੱਤੇ (ਕਰਤਾ) ਨੇ ਗੇਂਦ (ਕਰਮ) ਦਾ ਪਿੱਛਾ ਕੀਤਾ (ਕਿਰਿਆ).")।
            </p>
          `,
          // Lesson 7: IT
          "lesson_7_title": "ਕੰਪਿਊਟਰ ਹਾਰਡਵੇਅਰ ਦੀ ਜਾਣ-ਪਛਾਣ",
          "lesson_7_subject": "ਆਈ.ਟੀ.",
          "lesson_7_description": "ਕੰਪਿਊਟਰ ਦੇ ਮੁੱਖ ਭਾਗਾਂ ਅਤੇ ਉਹਨਾਂ ਦੇ ਕਾਰਜਾਂ ਨੂੰ ਸਮਝੋ।",
          "lesson_7_content": `
            <p>
              ਕੰਪਿਊਟਰ ਹਾਰਡਵੇਅਰ ਭੌਤਿਕ ਭਾਗਾਂ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ ਜੋ ਇੱਕ ਕੰਪਿਊਟਰ ਸਿਸਟਮ ਬਣਾਉਂਦੇ ਹਨ। ਇਹ ਉਹ ਠੋਸ ਹਿੱਸੇ ਹਨ ਜਿਨ੍ਹਾਂ ਨੂੰ ਤੁਸੀਂ ਵੇਖ ਸਕਦੇ ਹੋ ਅਤੇ ਛੂਹ ਸਕਦੇ ਹੋ, ਸਾਫਟਵੇਅਰ ਦੇ ਉਲਟ, ਜੋ ਨਿਰਦੇਸ਼ਾਂ ਦਾ ਇੱਕ ਸਮੂਹ ਹੈ।
            </p>
            <h3>ਮੁੱਖ ਹਾਰਡਵੇਅਰ ਭਾਗ:</h3>
            <ul>
              <li>
                <strong>ਸੈਂਟਰਲ ਪ੍ਰੋਸੈਸਿੰਗ ਯੂਨਿਟ (CPU):</strong> ਕੰਪਿਊਟਰ ਦਾ "ਦਿਮਾਗ", ਨਿਰਦੇਸ਼ਾਂ ਨੂੰ ਚਲਾਉਣ ਅਤੇ ਗਣਨਾ ਕਰਨ ਲਈ ਜ਼ਿੰਮੇਵਾਰ।
              </li>
              <li>
                <strong>ਰੈਂਡਮ ਐਕਸੈਸ ਮੈਮੋਰੀ (RAM):</strong> ਅਸਥਾਈ ਮੈਮੋਰੀ ਦੀ ਵਰਤੋਂ ਡੇਟਾ ਨੂੰ ਅਸਥਾਈ ਤੌਰ 'ਤੇ ਸਟੋਰ ਕਰਨ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਜਿਸਦੀ CPU ਸਰਗਰਮੀ ਨਾਲ ਵਰਤੋਂ ਕਰ ਰਿਹਾ ਹੈ। ਸਟੋਰੇਜ ਨਾਲੋਂ ਤੇਜ਼।
              </li>
              <li>
                <strong>ਸਟੋਰੇਜ ਡਿਵਾਈਸ:</strong> ਡੇਟਾ ਨੂੰ ਸਥਾਈ ਤੌਰ 'ਤੇ (ਜਾਂ ਅਰਧ-ਸਥਾਈ ਤੌਰ 'ਤੇ) ਸਟੋਰ ਕਰਦਾ ਹੈ। ਉਦਾਹਰਨਾਂ ਵਿੱਚ ਹਾਰਡ ਡਿਸਕ ਡਰਾਈਵ (HDD) ਅਤੇ ਸਾਲਿਡ ਸਟੇਟ ਡਰਾਈਵ (SSD) ਸ਼ਾਮਲ ਹਨ।
              </li>
              <li>
                <strong>ਮਦਰਬੋਰਡ:</strong> ਮੁੱਖ ਸਰਕਟ ਬੋਰਡ ਜੋ ਬਾਕੀ ਸਾਰੇ ਹਾਰਡਵੇਅਰ ਭਾਗਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ।
              </li>
              <li>
                <strong>ਗ੍ਰਾਫਿਕਸ ਪ੍ਰੋਸੈਸਿੰਗ ਯੂਨਿਟ (GPU):</strong> ਚਿੱਤਰਾਂ, ਵੀਡੀਓ ਅਤੇ ਐਨੀਮੇਸ਼ਨਾਂ ਨੂੰ ਪੇਸ਼ ਕਰਨ ਵਿੱਚ ਮਾਹਰ ਹੈ।
              </li>
              <li>
                <strong>ਪਾਵਰ ਸਪਲਾਈ ਯੂਨਿਟ (PSU):</strong> ਕੰਧ ਦੇ ਆਊਟਲੈੱਟ ਤੋਂ AC ਪਾਵਰ ਨੂੰ ਕੰਪਿਊਟਰ ਭਾਗਾਂ ਦੁਆਰਾ ਲੋੜੀਂਦੇ DC ਪਾਵਰ ਵਿੱਚ ਬਦਲਦਾ ਹੈ।
              </li>
              <li>
                <strong>ਇਨਪੁਟ ਡਿਵਾਈਸ:</strong> ਇੱਕ ਸੂਚਨਾ ਪ੍ਰੋਸੈਸਿੰਗ ਸਿਸਟਮ ਨੂੰ ਡੇਟਾ ਅਤੇ ਕੰਟਰੋਲ ਸਿਗਨਲ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ (ਉਦਾਹਰਨ ਲਈ, ਕੀਬੋਰਡ, ਮਾਊਸ, ਮਾਈਕ੍ਰੋਫੋਨ)।
              </li>
              <li>
                <strong>ਆਊਟਪੁਟ ਡਿਵਾਈਸ:</strong> ਇੱਕ ਕੰਪਿਊਟਰ ਤੋਂ ਕਿਸੇ ਹੋਰ ਡਿਵਾਈਸ ਜਾਂ ਉਪਭੋਗਤਾ ਨੂੰ ਡੇਟਾ ਭੇਜਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ (ਉਦਾਹਰਨ ਲਈ, ਮਾਨੀਟਰ, ਪ੍ਰਿੰਟਰ, ਸਪੀਕਰ)।
              </li>
            </ul>
            <p>
              ਇਹ ਸਾਰੇ ਭਾਗ ਇੱਕ ਕੰਪਿਊਟਰ ਨੂੰ ਕੰਮ ਕਰਨ ਦੀ ਆਗਿਆ ਦੇਣ ਲਈ ਇਕੱਠੇ ਕੰਮ ਕਰਦੇ ਹਨ।
            </p>
          `,
          // Lesson 8: EVS (Punjabi)
          "lesson_8_title": "ਵਾਤਾਵਰਣ ਪ੍ਰਦੂਸ਼ਣ: ਕਾਰਨ ਅਤੇ ਪ੍ਰਭਾਵ",
          "lesson_8_subject": "ਈ.ਵੀ.ਐਸ.",
          "lesson_8_description": "ਵਾਤਾਵਰਣ ਪ੍ਰਦੂਸ਼ਣ ਦੇ ਵੱਖ-ਵੱਖ ਕਿਸਮਾਂ, ਉਹਨਾਂ ਦੇ ਕਾਰਨਾਂ ਅਤੇ ਗ੍ਰਹਿ ਅਤੇ ਜੀਵ-ਜੰਤੂਆਂ 'ਤੇ ਪੈਣ ਵਾਲੇ ਪ੍ਰਭਾਵਾਂ ਦਾ ਇੱਕ ਸੰਖੇਪ ਜਾਣਕਾਰੀ।",
          "lesson_8_content": `
            <p>
              ਵਾਤਾਵਰਣ ਪ੍ਰਦੂਸ਼ਣ ਕੁਦਰਤੀ ਵਾਤਾਵਰਣ ਵਿੱਚ ਦੂਸ਼ਿਤ ਪਦਾਰਥਾਂ ਦਾ ਪ੍ਰਵੇਸ਼ ਹੈ ਜੋ ਨਕਾਰਾਤਮਕ ਤਬਦੀਲੀ ਦਾ ਕਾਰਨ ਬਣਦੇ ਹਨ। ਪ੍ਰਦੂਸ਼ਣ ਰਸਾਇਣਕ ਪਦਾਰਥਾਂ ਜਾਂ ਊਰਜਾ, ਜਿਵੇਂ ਕਿ ਸ਼ੋਰ, ਗਰਮੀ, ਜਾਂ ਰੋਸ਼ਨੀ ਦਾ ਰੂਪ ਲੈ ਸਕਦਾ ਹੈ।
            </p>
            <h3>ਪ੍ਰਦੂਸ਼ਣ ਦੀਆਂ ਕਿਸਮਾਂ:</h3>
            <ul>
              <li>
                <strong>ਹਵਾ ਪ੍ਰਦੂਸ਼ਣ:</strong> ਵਾਯੂਮੰਡਲ ਦਾ ਹਾਨੀਕਾਰਕ ਪਦਾਰਥਾਂ ਦੁਆਰਾ ਦੂਸ਼ਿਤ ਹੋਣਾ, ਜਿਸ ਵਿੱਚ ਗੈਸਾਂ ਅਤੇ ਕਣ ਪਦਾਰਥ (ਉਦਾਹਰਨ ਲਈ, ਵਾਹਨਾਂ ਦਾ ਧੂੰਆਂ, ਉਦਯੋਗਿਕ ਧੂੰਆਂ) ਸ਼ਾਮਲ ਹਨ।
              </li>
              <li>
                <strong>ਜਲ ਪ੍ਰਦੂਸ਼ਣ:</strong> ਦੂਸ਼ਿਤ ਪਦਾਰਥਾਂ (ਉਦਾਹਰਨ ਲਈ, ਉਦਯੋਗਿਕ ਕੂੜਾ, ਸੀਵਰੇਜ, ਖੇਤੀਬਾੜੀ ਦਾ ਵਹਾਅ) ਦੁਆਰਾ ਜਲ ਸਰੋਤਾਂ (ਉਦਾਹਰਨ ਲਈ, ਝੀਲਾਂ, ਨਦੀਆਂ, ਸਮੁੰਦਰ, ਜ਼ਮੀਨੀ ਪਾਣੀ) ਦਾ ਦੂਸ਼ਿਤ ਹੋਣਾ।
              </li>
              <li>
                <strong>ਮਿੱਟੀ ਪ੍ਰਦੂਸ਼ਣ:</strong> ਹਾਨੀਕਾਰਕ ਪਦਾਰਥਾਂ (ਉਦਾਹਰਨ ਲਈ, ਕੀਟਨਾਸ਼ਕ, ਉਦਯੋਗਿਕ ਕੂੜਾ, ਗਲਤ ਕੂੜਾ ਨਿਪਟਾਰਾ) ਦੁਆਰਾ ਮਿੱਟੀ ਦਾ ਦੂਸ਼ਿਤ ਹੋਣਾ।
              </li>
              <li>
                <strong>ਸ਼ੋਰ ਪ੍ਰਦੂਸ਼ਣ:</strong> ਬਹੁਤ ਜ਼ਿਆਦਾ ਜਾਂ ਅਣਚਾਹੀ ਆਵਾਜ਼ ਜੋ ਮਨੁੱਖੀ ਜਾਂ ਜਾਨਵਰਾਂ ਦੇ ਜੀਵਨ ਨੂੰ ਵਿਗਾੜ ਸਕਦੀ ਹੈ।
              </li>
              <li>
                <strong>ਤਾਪਮਾਨ ਪ੍ਰਦੂਸ਼ਣ:</strong> ਮਨੁੱਖੀ ਗਤੀਵਿਧੀ (ਉਦਾਹਰਨ ਲਈ, ਪਾਵਰ ਪਲਾਂਟ) ਕਾਰਨ ਪਾਣੀ ਦੇ ਤਾਪਮਾਨ ਵਿੱਚ ਵਾਧਾ ਜਾਂ ਕਮੀ।
              </li>
            </ul>
            <h3>ਕਾਰਨ ਅਤੇ ਪ੍ਰਭਾਵ:</h3>
            <p>
              ਮੁੱਖ ਕਾਰਨਾਂ ਵਿੱਚ ਉਦਯੋਗੀਕਰਨ, ਸ਼ਹਿਰੀਕਰਨ, ਜੰਗਲਾਂ ਦੀ ਕਟਾਈ ਅਤੇ ਖੇਤੀਬਾੜੀ ਗਤੀਵਿਧੀਆਂ ਸ਼ਾਮਲ ਹਨ। ਪ੍ਰਭਾਵ ਵਿਆਪਕ ਹਨ, ਮਨੁੱਖਾਂ ਅਤੇ ਜਾਨਵਰਾਂ ਵਿੱਚ ਸਿਹਤ ਸਮੱਸਿਆਵਾਂ ਤੋਂ ਲੈ ਕੇ ਜਲਵਾਯੂ ਪਰਿਵਰਤਨ, ਜੈਵ ਵਿਭਿੰਨਤਾ ਦਾ ਨੁਕਸਾਨ ਅਤੇ ਵਾਤਾਵਰਣ ਪ੍ਰਣਾਲੀ ਦੇ ਵਿਘਨ ਤੱਕ।
            </p>
            <p>
              ਪ੍ਰਦੂਸ਼ਣ ਨਾਲ ਲੜਨ ਲਈ ਸਥਾਈ ਅਭਿਆਸਾਂ, ਨਵਿਆਉਣਯੋਗ ਊਰਜਾ, ਕੂੜਾ ਪ੍ਰਬੰਧਨ ਅਤੇ ਜਨਤਕ ਜਾਗਰੂਕਤਾ ਸਮੇਤ ਇੱਕ ਵਿਸ਼ਵਵਿਆਪੀ ਯਤਨ ਦੀ ਲੋੜ ਹੈ।
            </p>
          `,
        }
      },
    },
  });

export default i18n;