import { Lesson } from "../context/LessonContext";

export const mockLessonsData: Lesson[] = [
  {
    id: "1",
    title: "Understanding Variables and Expressions",
    subject: "Mathematics",
    description:
      "This lesson covers the basics of algebraic variables and how to form simple expressions.",
    content: `
      <p>
        Algebra is a branch of mathematics that deals with symbols and the rules for manipulating these symbols. These symbols (often letters like x, y, or a, b) are called variables.
      </p>
      <p>
        An expression in algebra is a combination of numbers, variables, and operation symbols (like +, -, *, /). For example, \(2x + 5\) is an algebraic expression.
      </p>
      <h3>Key Concepts:</h3>
      <ul>
        <li>
          <strong>Variable:</strong> A symbol, usually a letter, that represents a quantity that can change.
        </li>
        <li>
          <strong>Constant:</strong> A fixed value that does not change. In \(2x + 5\), \(5\) is a constant.
        </li>
        <li>
          <strong>Coefficient:</strong> A number multiplied by a variable. In \(2x + 5\), \(2\) is the coefficient of \(x\).
        </li>
        <li>
          <strong>Term:</b> Parts of an expression separated by addition or subtraction. In \(2x + 5\), \(2x\) and \(5\) are terms.
        </li>
      </ul>
      <p>
        Let\'s look at an example: If you have \(3\) apples and you get \(x\) more apples, the total number of apples you have can be represented by the expression \(3 + x\).
      </p>
    `,
    audio: null,
  },
  {
    id: "2",
    title: "Photosynthesis: The Plant\'s Food Factory",
    subject: "Science",
    description:
      "Explore how plants convert light energy into chemical energy through photosynthesis.",
    content: `
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
          <strong>Chlorophyll:</b> The green pigment that absorbs light energy.
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
    audio: null,
  },
  {
    id: "3",
    title: "The Roman Empire: Rise and Fall",
    subject: "Social Science",
    description:
      "Learn about the rise and fall of one of the most powerful empires in history.",
    content: `
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
        The Roman Empire\'s influence can still be seen today in law, architecture, language, and government.
      </p>
    `,
    audio: null,
  },
  {
    id: "4",
    title: "Basic Greetings and Phrases",
    subject: "Hindi",
    description:
      "An introduction to common Hindi greetings and useful everyday phrases.",
    content: `
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
          <strong>Aap kaisi hain? (आप कैसी हैं?):</b> How are you? (to a female)
        </li>
        <li>
          <strong>Main theek hoon (मैं ठीक हूँ):</strong> I am fine.
        </li>
        <li>
          <strong>Dhanyavaad (धन्यवाद):</strong> Thank you.
        </li>
        <li>
          <strong>Kripya (कृपया):</b> Please.
        </li>
      </ul>
    `,
    audio: null,
  },
  {
    id: "5",
    title: "Introduction to Punjabi Alphabet",
    subject: "Punjabi",
    description:
      "Learn the basics of the Gurmukhi script and the Punjabi alphabet.",
    content: `
      <p>
        Punjabi is an Indo-Aryan language spoken by the Punjabi people. It is the official language of the Indian state of Punjab and the primary language of Punjab, Pakistan. The Gurmukhi script is commonly used for writing Punjabi in India.
      </p>
      <h3>Gurmukhi Alphabet (Panti Akhari):</h3>
      <p>
        The Gurmukhi script has 35 primary letters, known as \'Panti Akhari\'. Each letter represents a distinct sound.
      </p>
      <ul>
        <li>
          <strong>Vowels (Swar):</strong> There are 3 main vowel carriers (Ura, Aira, Iri) and 10 vowel signs.
        </li>
        <li>
          <strong>Consonants (Vyanjan):</strong> The remaining 32 letters are consonants.
        </li>
      </ul>
      <h3>Example Letters:</h3>
      <ul>
        <li>
          <strong>ੳ (Ura):</strong> Used for vowel sounds \'u\', \'oo\', \'o\'.
        </li>
        <li>
          <strong>ਅ (Aira):</b> Used for vowel sounds \'a\', \'aa\', \'e\'.
        </li>
        <li>
          <strong>ੲ (Iri):</b> Used for vowel sounds \'i\', \'ee\'.
        </li>
        <li>
          <strong>ਕ (Kakka):</strong> Pronounced as \'ka\'.
        </li>
        <li>
          <strong>ਖ (Khakha):</strong> Pronounced as \'kha\'.
        </li>
      </ul>
      <p>
        Mastering the Gurmukhi alphabet is essential for reading and writing Punjabi.
      </p>
    `,
    audio: null,
  },
  {
    id: "6",
    title: "Fundamentals of English Grammar",
    subject: "English",
    description:
      "A comprehensive guide to the basic rules of English grammar, including parts of speech and sentence structure.",
    content: `
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
          <strong>Adjectives:</b> Describe nouns or pronouns (e.g., *happy*, *tall*, *blue*).
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
        A basic English sentence typically follows a Subject-Verb-Object (SVO) order (e.g., \"The dog (Subject) chased (Verb) the ball (Object).\\").
      </p>
    `,
    audio: null,
  },
  {
    id: "7",
    title: "Introduction to Computer Hardware",
    subject: "IT",
    description:
      "Understand the basic components of a computer and their functions.",
    content: `
      <p>
        Computer hardware refers to the physical components that make up a computer system. These are the tangible parts you can see and touch, in contrast to software, which is a set of instructions.
      </p>
      <h3>Key Hardware Components:</h3>
      <ul>
        <li>
          <strong>Central Processing Unit (CPU):</strong> The \"brain\" of the computer, responsible for executing instructions and performing calculations.
        </li>
        <li>
          <strong>Random Access Memory (RAM):</strong> Volatile memory used to temporarily store data that the CPU is actively using. Faster than storage.
        </li>
        <li>
          <strong>Storage Device:</b> Stores data permanently (or semi-permanently). Examples include Hard Disk Drives (HDD) and Solid State Drives (SSD).
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
          <strong>Output Devices:</b> Used to send data from a computer to another device or user (e.g., monitor, printer, speakers).
        </li>
      </ul>
      <p>
        All these components work together to allow a computer to function.
      </p>
    `,
    audio: null,
  },
  {
    id: "8",
    title: "Environmental Pollution: Causes and Effects",
    subject: "EVS",
    description:
      "An overview of different types of environmental pollution, their causes, and impacts on the planet and living beings.",
    content: `
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
        Combating pollution requires a global effort involving sustainable practices, renewable energy, waste management, and public awareness.
      </p>
    `,
    audio: null,
  },
];
