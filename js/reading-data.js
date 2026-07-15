const READING_LEVELS = [
  {
    "id": "level1",
    "name": "Level 1 · Beginner",
    "lessons": [
      {
        "title": "A New Neighbor",
        "preview": "Amina moved into the house next to Layla last week. She has a small brown dog named Max. L…",
        "body": "<p>Amina moved into the house next to Layla last week. She has a small brown dog named Max. Layla and Amina now walk their dogs together every morning.</p>",
        "quiz": [
          {
            "q": "What is the dog's name?",
            "options": [
              "Rex",
              "Max",
              "Buddy",
              "Charlie"
            ],
            "answer": 1
          },
          {
            "q": "When do Layla and Amina walk their dogs?",
            "options": [
              "Every evening",
              "Every morning",
              "Once a week",
              "At night"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "The Farmer's Market",
        "preview": "Every Saturday, Hassan goes to the farmer's market. He buys fresh vegetables, fruit, and h…",
        "body": "<p>Every Saturday, Hassan goes to the farmer's market. He buys fresh vegetables, fruit, and honey. His favorite stall sells red tomatoes and sweet oranges.</p>",
        "quiz": [
          {
            "q": "On which day does Hassan go to the market?",
            "options": [
              "Sunday",
              "Friday",
              "Saturday",
              "Monday"
            ],
            "answer": 2
          },
          {
            "q": "What does his favorite stall sell?",
            "options": [
              "Bread and milk",
              "Tomatoes and oranges",
              "Fish and rice",
              "Shoes and bags"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "A Rainy Day",
        "preview": "It rained all morning, so Fatima stayed inside and read a book. In the afternoon, the sun …",
        "body": "<p>It rained all morning, so Fatima stayed inside and read a book. In the afternoon, the sun came out and she went to the park with her brother.</p>",
        "quiz": [
          {
            "q": "What did Fatima do in the morning?",
            "options": [
              "Played outside",
              "Read a book",
              "Went to school",
              "Cooked dinner"
            ],
            "answer": 1
          },
          {
            "q": "Where did she go in the afternoon?",
            "options": [
              "To the market",
              "To school",
              "To the park",
              "To a friend's house"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "My Best Friend",
        "preview": "Omar is my best friend. We met in school five years ago. He likes football, and I like bas…",
        "body": "<p>Omar is my best friend. We met in school five years ago. He likes football, and I like basketball, but we always watch matches together.</p>",
        "quiz": [
          {
            "q": "How long have they been friends?",
            "options": [
              "Two years",
              "Five years",
              "Ten years",
              "One year"
            ],
            "answer": 1
          },
          {
            "q": "What does Omar like?",
            "options": [
              "Basketball",
              "Swimming",
              "Football",
              "Running"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "The School Trip",
        "preview": "The students went to the museum on Tuesday. They saw old paintings and ancient tools. The …",
        "body": "<p>The students went to the museum on Tuesday. They saw old paintings and ancient tools. The teacher asked everyone to write about their favorite item.</p>",
        "quiz": [
          {
            "q": "Where did the students go?",
            "options": [
              "The zoo",
              "The museum",
              "The beach",
              "The library"
            ],
            "answer": 1
          },
          {
            "q": "What did the teacher ask them to do?",
            "options": [
              "Draw a picture",
              "Write about their favorite item",
              "Sing a song",
              "Take a test"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "A Birthday Party",
        "preview": "Sara turned ten years old on Friday. Her mother baked a chocolate cake, and her friends br…",
        "body": "<p>Sara turned ten years old on Friday. Her mother baked a chocolate cake, and her friends brought colorful balloons. Everyone sang and danced until late evening.</p>",
        "quiz": [
          {
            "q": "How old did Sara turn?",
            "options": [
              "Nine",
              "Ten",
              "Eleven",
              "Twelve"
            ],
            "answer": 1
          },
          {
            "q": "What kind of cake did her mother bake?",
            "options": [
              "Vanilla",
              "Strawberry",
              "Chocolate",
              "Lemon"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "The Lost Cat",
        "preview": "Yasmin's cat disappeared on Monday. She made posters and asked her neighbors for help. Thr…",
        "body": "<p>Yasmin's cat disappeared on Monday. She made posters and asked her neighbors for help. Three days later, the cat was found sleeping under a neighbor's car.</p>",
        "quiz": [
          {
            "q": "When did the cat disappear?",
            "options": [
              "Sunday",
              "Monday",
              "Wednesday",
              "Friday"
            ],
            "answer": 1
          },
          {
            "q": "Where was the cat found?",
            "options": [
              "In a tree",
              "Under a car",
              "In the kitchen",
              "At the market"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Morning Routine",
        "preview": "Ali wakes up at six every morning. He exercises for twenty minutes, then eats breakfast wi…",
        "body": "<p>Ali wakes up at six every morning. He exercises for twenty minutes, then eats breakfast with his family before going to work at eight.</p>",
        "quiz": [
          {
            "q": "What time does Ali wake up?",
            "options": [
              "Five",
              "Six",
              "Seven",
              "Eight"
            ],
            "answer": 1
          },
          {
            "q": "What does he do after exercising?",
            "options": [
              "Goes to work",
              "Eats breakfast",
              "Reads news",
              "Takes a shower"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "The New Bakery",
        "preview": "A new bakery opened near Zainab's house. It sells fresh bread every morning and delicious …",
        "body": "<p>A new bakery opened near Zainab's house. It sells fresh bread every morning and delicious cakes on weekends. Zainab now buys bread there twice a week.</p>",
        "quiz": [
          {
            "q": "What does the bakery sell on weekends?",
            "options": [
              "Only bread",
              "Cakes",
              "Sandwiches",
              "Coffee"
            ],
            "answer": 1
          },
          {
            "q": "How often does Zainab buy bread there?",
            "options": [
              "Once a week",
              "Twice a week",
              "Every day",
              "Once a month"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "A Trip to the Beach",
        "preview": "Khalid and his cousins went to the beach on Sunday. They swam in the sea, built a sandcast…",
        "body": "<p>Khalid and his cousins went to the beach on Sunday. They swam in the sea, built a sandcastle, and ate lunch under a big umbrella.</p>",
        "quiz": [
          {
            "q": "When did they go to the beach?",
            "options": [
              "Saturday",
              "Sunday",
              "Monday",
              "Friday"
            ],
            "answer": 1
          },
          {
            "q": "What did they build?",
            "options": [
              "A tent",
              "A sandcastle",
              "A boat",
              "A fire"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "The Library Visit",
        "preview": "Every Wednesday, Huda visits the local library. She borrows two books and returns them the…",
        "body": "<p>Every Wednesday, Huda visits the local library. She borrows two books and returns them the following week. This week, she chose a book about space.</p>",
        "quiz": [
          {
            "q": "Which day does Huda visit the library?",
            "options": [
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Sunday"
            ],
            "answer": 1
          },
          {
            "q": "What was this week's book about?",
            "options": [
              "Animals",
              "Space",
              "History",
              "Cooking"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "A Small Garden",
        "preview": "Mustafa planted tomatoes and flowers in his small garden. He waters the plants every eveni…",
        "body": "<p>Mustafa planted tomatoes and flowers in his small garden. He waters the plants every evening. After two months, the tomatoes were ready to eat.</p>",
        "quiz": [
          {
            "q": "What did Mustafa plant?",
            "options": [
              "Only flowers",
              "Tomatoes and flowers",
              "Only tomatoes",
              "Trees"
            ],
            "answer": 1
          },
          {
            "q": "When does he water the plants?",
            "options": [
              "Morning",
              "Afternoon",
              "Evening",
              "At noon"
            ],
            "answer": 2
          }
        ]
      }
    ]
  },
  {
    "id": "level2",
    "name": "Level 2 · Intermediate",
    "lessons": [
      {
        "title": "Remote Work Challenges",
        "preview": "Since switching to remote work, Nadia has struggled to separate her personal life from her…",
        "body": "<p>Since switching to remote work, Nadia has struggled to separate her personal life from her job. She now sets a strict schedule and closes her laptop at six every evening to maintain balance.</p>",
        "quiz": [
          {
            "q": "What has Nadia struggled with?",
            "options": [
              "Finding a job",
              "Separating work and personal life",
              "Learning new skills",
              "Traveling for work"
            ],
            "answer": 1
          },
          {
            "q": "What does she do at six every evening?",
            "options": [
              "Starts working",
              "Closes her laptop",
              "Goes to a meeting",
              "Checks emails"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Changing Careers",
        "preview": "After ten years as an accountant, Karim decided to become a teacher. He took evening cours…",
        "body": "<p>After ten years as an accountant, Karim decided to become a teacher. He took evening courses for two years before finally changing careers at the age of thirty-five.</p>",
        "quiz": [
          {
            "q": "What was Karim's first career?",
            "options": [
              "Teacher",
              "Accountant",
              "Engineer",
              "Doctor"
            ],
            "answer": 1
          },
          {
            "q": "How long did he study before switching?",
            "options": [
              "One year",
              "Two years",
              "Five years",
              "Six months"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "A City on the Rise",
        "preview": "The city of Berbera has grown rapidly over the past decade due to increased trade at its p…",
        "body": "<p>The city of Berbera has grown rapidly over the past decade due to increased trade at its port. New roads, hotels, and businesses have transformed the local economy.</p>",
        "quiz": [
          {
            "q": "Why has Berbera grown rapidly?",
            "options": [
              "Tourism only",
              "Increased trade at its port",
              "New universities",
              "A new airport"
            ],
            "answer": 1
          },
          {
            "q": "What has transformed the local economy?",
            "options": [
              "New schools",
              "New roads, hotels, and businesses",
              "A new government",
              "New farms"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "The Job Interview",
        "preview": "Before her interview, Layla researched the company thoroughly and prepared answers to comm…",
        "body": "<p>Before her interview, Layla researched the company thoroughly and prepared answers to common questions. During the interview, she confidently explained how her experience matched the role.</p>",
        "quiz": [
          {
            "q": "What did Layla do before the interview?",
            "options": [
              "Nothing special",
              "Researched the company",
              "Asked a friend to attend",
              "Cancelled the interview"
            ],
            "answer": 1
          },
          {
            "q": "How did she behave during the interview?",
            "options": [
              "Nervously",
              "Confidently",
              "Rudely",
              "Silently"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Managing Stress",
        "preview": "Doctors recommend regular exercise, enough sleep, and time management to reduce stress. Ah…",
        "body": "<p>Doctors recommend regular exercise, enough sleep, and time management to reduce stress. Ahmed started jogging three times a week and noticed his stress levels dropped significantly.</p>",
        "quiz": [
          {
            "q": "What do doctors recommend for stress?",
            "options": [
              "Only sleep",
              "Exercise, sleep, and time management",
              "Eating more sugar",
              "Working longer hours"
            ],
            "answer": 1
          },
          {
            "q": "What did Ahmed start doing?",
            "options": [
              "Swimming",
              "Jogging",
              "Cycling",
              "Yoga"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Finding an Apartment",
        "preview": "Samira spent weeks searching for an apartment near her workplace. She finally found a two-…",
        "body": "<p>Samira spent weeks searching for an apartment near her workplace. She finally found a two-bedroom flat with a balcony, though the rent was higher than she expected.</p>",
        "quiz": [
          {
            "q": "What was Samira looking for?",
            "options": [
              "A house",
              "An apartment near her workplace",
              "A hotel room",
              "A shared room"
            ],
            "answer": 1
          },
          {
            "q": "What did the flat have?",
            "options": [
              "A garden",
              "A balcony",
              "A pool",
              "A garage"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "A Memorable Meal",
        "preview": "The restaurant Idris visited was known for its seafood. He ordered grilled fish with rice,…",
        "body": "<p>The restaurant Idris visited was known for its seafood. He ordered grilled fish with rice, and the chef personally recommended a spicy sauce that became his favorite part of the meal.</p>",
        "quiz": [
          {
            "q": "What was the restaurant known for?",
            "options": [
              "Pizza",
              "Seafood",
              "Desserts",
              "Salads"
            ],
            "answer": 1
          },
          {
            "q": "What did Idris order?",
            "options": [
              "Grilled chicken",
              "Grilled fish with rice",
              "Pasta",
              "Soup"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Urban Growth",
        "preview": "As cities expand, infrastructure like roads and public transport must keep pace with popul…",
        "body": "<p>As cities expand, infrastructure like roads and public transport must keep pace with population growth. Without proper planning, traffic congestion and housing shortages often follow.</p>",
        "quiz": [
          {
            "q": "What must keep pace with population growth?",
            "options": [
              "Infrastructure",
              "Tourism",
              "Weather",
              "Farming"
            ],
            "answer": 0
          },
          {
            "q": "What happens without proper planning?",
            "options": [
              "Nothing changes",
              "Traffic congestion and housing shortages",
              "Lower prices",
              "Faster transport"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "A Family Reunion",
        "preview": "After five years abroad, Faisal returned home for a family reunion. Relatives from differe…",
        "body": "<p>After five years abroad, Faisal returned home for a family reunion. Relatives from different cities gathered to celebrate, sharing old stories and enjoying traditional food together.</p>",
        "quiz": [
          {
            "q": "How long was Faisal abroad?",
            "options": [
              "Two years",
              "Five years",
              "Ten years",
              "One year"
            ],
            "answer": 1
          },
          {
            "q": "What did the family do at the reunion?",
            "options": [
              "Watched a movie",
              "Shared stories and food",
              "Traveled abroad",
              "Attended a wedding"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Two Different Approaches",
        "preview": "While Ali prefers to plan every detail of a trip in advance, his sister Amal enjoys travel…",
        "body": "<p>While Ali prefers to plan every detail of a trip in advance, his sister Amal enjoys traveling spontaneously without a fixed itinerary. Despite their differences, they always have a great time together.</p>",
        "quiz": [
          {
            "q": "How does Ali like to travel?",
            "options": [
              "Spontaneously",
              "With detailed plans",
              "Never",
              "Only by train"
            ],
            "answer": 1
          },
          {
            "q": "How does Amal prefer to travel?",
            "options": [
              "With detailed plans",
              "Spontaneously",
              "Only alone",
              "By boat"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "A Missed Call",
        "preview": "Sumaya noticed a missed call from an unknown number. When she called back, she discovered …",
        "body": "<p>Sumaya noticed a missed call from an unknown number. When she called back, she discovered it was an old university friend who was visiting the city for a conference.</p>",
        "quiz": [
          {
            "q": "What did Sumaya notice?",
            "options": [
              "A text message",
              "A missed call",
              "An email",
              "A voicemail only"
            ],
            "answer": 1
          },
          {
            "q": "Who had called her?",
            "options": [
              "A stranger",
              "An old university friend",
              "Her boss",
              "A delivery service"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Weekend Hobbies",
        "preview": "On weekends, Bilal enjoys painting landscapes, while his wife prefers hiking in the nearby…",
        "body": "<p>On weekends, Bilal enjoys painting landscapes, while his wife prefers hiking in the nearby hills. They sometimes combine both hobbies by painting scenery during their hikes.</p>",
        "quiz": [
          {
            "q": "What does Bilal enjoy painting?",
            "options": [
              "Portraits",
              "Landscapes",
              "Animals",
              "Buildings"
            ],
            "answer": 1
          },
          {
            "q": "What does his wife prefer?",
            "options": [
              "Swimming",
              "Hiking",
              "Cycling",
              "Reading"
            ],
            "answer": 1
          }
        ]
      }
    ]
  },
  {
    "id": "level3",
    "name": "Level 3 · Advanced",
    "lessons": [
      {
        "title": "The Ethics of AI",
        "preview": "As artificial intelligence becomes more capable, questions about accountability grow more …",
        "body": "<p>As artificial intelligence becomes more capable, questions about accountability grow more urgent. Critics argue that without clear regulation, companies may prioritize speed over safety, leaving society to bear unforeseen consequences.</p>",
        "quiz": [
          {
            "q": "What grows more urgent as AI advances?",
            "options": [
              "Questions about accountability",
              "Questions about cost",
              "Questions about design",
              "Questions about marketing"
            ],
            "answer": 0
          },
          {
            "q": "What do critics worry companies might prioritize?",
            "options": [
              "Safety over speed",
              "Speed over safety",
              "Design over function",
              "Profit over design"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Global Supply Chains",
        "preview": "Recent disruptions have exposed the fragility of global supply chains. Many companies are …",
        "body": "<p>Recent disruptions have exposed the fragility of global supply chains. Many companies are now diversifying suppliers across multiple countries to reduce dependency on any single region.</p>",
        "quiz": [
          {
            "q": "What have recent disruptions exposed?",
            "options": [
              "The strength of supply chains",
              "The fragility of supply chains",
              "New trade routes",
              "Lower shipping costs"
            ],
            "answer": 1
          },
          {
            "q": "What are companies now doing?",
            "options": [
              "Relying on one supplier",
              "Diversifying suppliers",
              "Closing factories",
              "Ignoring the issue"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "The Sleep Study",
        "preview": "Researchers followed three hundred participants over six months, tracking their sleep patt…",
        "body": "<p>Researchers followed three hundred participants over six months, tracking their sleep patterns and cognitive performance. The results suggested a strong correlation between consistent sleep schedules and improved memory retention.</p>",
        "quiz": [
          {
            "q": "How many participants were in the study?",
            "options": [
              "One hundred",
              "Three hundred",
              "Five hundred",
              "One thousand"
            ],
            "answer": 1
          },
          {
            "q": "What did the results suggest?",
            "options": [
              "No connection to memory",
              "A link between sleep schedules and memory",
              "Sleep has no effect",
              "Diet affects sleep most"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "A Contentious Merger",
        "preview": "The proposed merger between the two telecommunications firms faced fierce opposition from …",
        "body": "<p>The proposed merger between the two telecommunications firms faced fierce opposition from regulators concerned about reduced competition. Executives argued the deal would ultimately lower prices for consumers.</p>",
        "quiz": [
          {
            "q": "Why did regulators oppose the merger?",
            "options": [
              "It was too expensive",
              "Concerns about reduced competition",
              "It was illegal",
              "It was too slow"
            ],
            "answer": 1
          },
          {
            "q": "What did executives argue?",
            "options": [
              "Prices would rise",
              "Prices would ultimately fall",
              "Jobs would be cut",
              "Nothing would change"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Climate Adaptation",
        "preview": "Coastal cities are increasingly investing in flood defenses and adaptive infrastructure. W…",
        "body": "<p>Coastal cities are increasingly investing in flood defenses and adaptive infrastructure. While some argue this merely delays the inevitable, others see it as essential to protecting vulnerable communities in the near term.</p>",
        "quiz": [
          {
            "q": "What are coastal cities investing in?",
            "options": [
              "New airports",
              "Flood defenses and infrastructure",
              "Tourism campaigns",
              "New universities"
            ],
            "answer": 1
          },
          {
            "q": "What do some critics argue?",
            "options": [
              "It solves the problem permanently",
              "It merely delays the inevitable",
              "It is unnecessary",
              "It is too cheap"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "The Power of Framing",
        "preview": "Psychologists have shown that how information is presented, or framed, significantly affec…",
        "body": "<p>Psychologists have shown that how information is presented, or framed, significantly affects decision-making. A choice described in terms of potential losses often provokes a different reaction than the same choice framed as a gain.</p>",
        "quiz": [
          {
            "q": "What significantly affects decision-making?",
            "options": [
              "The time of day",
              "How information is framed",
              "The location",
              "The speaker's voice"
            ],
            "answer": 1
          },
          {
            "q": "What is compared in the passage?",
            "options": [
              "Losses versus gains framing",
              "Morning versus evening choices",
              "Written versus spoken words",
              "Old versus new information"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Negotiating Across Cultures",
        "preview": "Successful international negotiators recognize that communication styles vary widely betwe…",
        "body": "<p>Successful international negotiators recognize that communication styles vary widely between cultures. What is considered assertive in one context might be perceived as aggressive in another, requiring careful adaptation.</p>",
        "quiz": [
          {
            "q": "What varies widely between cultures?",
            "options": [
              "Communication styles",
              "Currency values",
              "Legal systems only",
              "Time zones"
            ],
            "answer": 0
          },
          {
            "q": "What might be perceived as aggressive?",
            "options": [
              "Passive behavior",
              "What is considered assertive elsewhere",
              "Silence",
              "Formality"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "The Automation Debate",
        "preview": "While automation increases efficiency, it also raises concerns about job displacement. Eco…",
        "body": "<p>While automation increases efficiency, it also raises concerns about job displacement. Economists remain divided on whether new industries will create enough jobs to offset those lost to machines.</p>",
        "quiz": [
          {
            "q": "What concern does automation raise?",
            "options": [
              "Higher taxes",
              "Job displacement",
              "Lower efficiency",
              "Slower production"
            ],
            "answer": 1
          },
          {
            "q": "What are economists divided on?",
            "options": [
              "Whether automation exists",
              "Whether new industries will offset job losses",
              "Whether machines are expensive",
              "Whether automation is legal"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Redefining Success",
        "preview": "Traditional metrics of success, such as income and title, are increasingly being questione…",
        "body": "<p>Traditional metrics of success, such as income and title, are increasingly being questioned by younger professionals who prioritize flexibility and purpose. This shift is reshaping how companies attract talent.</p>",
        "quiz": [
          {
            "q": "What do younger professionals increasingly prioritize?",
            "options": [
              "Income and title only",
              "Flexibility and purpose",
              "Job titles",
              "Long hours"
            ],
            "answer": 1
          },
          {
            "q": "What is this shift reshaping?",
            "options": [
              "Government policy",
              "How companies attract talent",
              "University curricula",
              "Housing markets"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "The Limits of Persuasion",
        "preview": "Studies suggest that presenting overwhelming evidence does not always change deeply held b…",
        "body": "<p>Studies suggest that presenting overwhelming evidence does not always change deeply held beliefs, and can sometimes strengthen resistance instead. Effective persuasion often relies more on trust and shared values than on facts alone.</p>",
        "quiz": [
          {
            "q": "What can overwhelming evidence sometimes do?",
            "options": [
              "Always change beliefs",
              "Strengthen resistance instead",
              "Have no effect at all",
              "Immediately convince everyone"
            ],
            "answer": 1
          },
          {
            "q": "What does effective persuasion often rely on more?",
            "options": [
              "Facts alone",
              "Trust and shared values",
              "Repetition",
              "Volume of information"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Legacy Systems in Business",
        "preview": "Many large organizations continue to rely on outdated software because replacing it is cos…",
        "body": "<p>Many large organizations continue to rely on outdated software because replacing it is costly and risky. This reliance on legacy systems can slow innovation and create long-term vulnerabilities.</p>",
        "quiz": [
          {
            "q": "Why do organizations keep outdated software?",
            "options": [
              "It performs better",
              "Replacing it is costly and risky",
              "It is required by law",
              "It is faster"
            ],
            "answer": 1
          },
          {
            "q": "What can legacy systems create?",
            "options": [
              "Faster innovation",
              "Long-term vulnerabilities",
              "Lower costs",
              "More competition"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "The Paradox of Choice",
        "preview": "Research shows that while some choice improves satisfaction, too many options can lead to …",
        "body": "<p>Research shows that while some choice improves satisfaction, too many options can lead to decision fatigue and regret. Businesses increasingly curate simpler selections to improve the customer experience.</p>",
        "quiz": [
          {
            "q": "What can too many options lead to?",
            "options": [
              "Higher satisfaction always",
              "Decision fatigue and regret",
              "Faster decisions",
              "Lower prices"
            ],
            "answer": 1
          },
          {
            "q": "What are businesses increasingly doing?",
            "options": [
              "Offering more choices",
              "Curating simpler selections",
              "Removing all choices",
              "Raising prices"
            ],
            "answer": 1
          }
        ]
      }
    ]
  }
];
