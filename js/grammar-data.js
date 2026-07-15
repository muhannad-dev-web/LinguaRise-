const GRAMMAR_LEVELS = [
  {
    "id": "level1",
    "name": "Level 1 · Beginner",
    "lessons": [
      {
        "title": "Present Simple",
        "preview": "Use the present simple for habits, facts, and routines. Add -s/-es for he/she/it.",
        "body": "<p style='margin-bottom:10px;'>Use the present simple for habits, facts, and routines. Add -s/-es for he/she/it.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She work every day.",
              "She works every day.",
              "She working every day.",
              "She worked every day."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "They plays football.",
              "They play football.",
              "They playing football.",
              "They played football."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "He go to school.",
              "He going to school.",
              "He goes to school.",
              "He gone to school."
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "The Verb 'To Be'",
        "preview": "Use am/is/are to describe people, things, and states.",
        "body": "<p style='margin-bottom:10px;'>Use am/is/are to describe people, things, and states.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "I is a student.",
              "I am a student.",
              "I are a student.",
              "I be a student."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "They is happy.",
              "They am happy.",
              "They are happy.",
              "They be happy."
            ],
            "answer": 2
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She are my sister.",
              "She am my sister.",
              "She is my sister.",
              "She be my sister."
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Articles (a / an / the)",
        "preview": "Use 'a' before consonant sounds, 'an' before vowel sounds, and 'the' for specific things.",
        "body": "<p style='margin-bottom:10px;'>Use 'a' before consonant sounds, 'an' before vowel sounds, and 'the' for specific things.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "I saw a elephant.",
              "I saw an elephant.",
              "I saw the elephant yesterday before.",
              "I saw elephant."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She is an teacher.",
              "She is a teacher.",
              "She is teacher.",
              "She is the a teacher."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "Please close a door.",
              "Please close door.",
              "Please close the door.",
              "Please close an door."
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Plural Nouns",
        "preview": "Add -s or -es to most nouns to make them plural. Some nouns are irregular.",
        "body": "<p style='margin-bottom:10px;'>Add -s or -es to most nouns to make them plural. Some nouns are irregular.</p>",
        "quiz": [
          {
            "q": "Choose the correct plural:",
            "options": [
              "boxs",
              "boxes",
              "box's",
              "boxxes"
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct plural:",
            "options": [
              "childs",
              "childes",
              "children",
              "childrens"
            ],
            "answer": 2
          },
          {
            "q": "Choose the correct plural:",
            "options": [
              "citys",
              "cities",
              "citties",
              "city's"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Possessive Adjectives",
        "preview": "Use my, your, his, her, its, our, their to show ownership.",
        "body": "<p style='margin-bottom:10px;'>Use my, your, his, her, its, our, their to show ownership.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "This is she book.",
              "This is her book.",
              "This is hers book.",
              "This is she's book."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "That is you car.",
              "That is your car.",
              "That is yours car.",
              "That is you's car."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "We love our country.",
              "We love us country.",
              "We love ours country.",
              "We love we country."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Prepositions: in / on / at",
        "preview": "Use 'in' for months/years, 'on' for days/dates, 'at' for exact times.",
        "body": "<p style='margin-bottom:10px;'>Use 'in' for months/years, 'on' for days/dates, 'at' for exact times.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "I was born on 1998.",
              "I was born at 1998.",
              "I was born in 1998.",
              "I was born by 1998."
            ],
            "answer": 2
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "The meeting is in Monday.",
              "The meeting is on Monday.",
              "The meeting is at Monday.",
              "The meeting is by Monday."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "We meet in 5 PM.",
              "We meet on 5 PM.",
              "We meet at 5 PM.",
              "We meet by 5 PM."
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Present Continuous",
        "preview": "Use am/is/are + verb-ing for actions happening right now.",
        "body": "<p style='margin-bottom:10px;'>Use am/is/are + verb-ing for actions happening right now.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "I am reading a book now.",
              "I reading a book now.",
              "I is reading a book now.",
              "I readings a book now."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She is cook dinner.",
              "She cooking dinner.",
              "She is cooking dinner.",
              "She cook dinner now."
            ],
            "answer": 2
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "They are play outside.",
              "They is playing outside.",
              "They are playing outside.",
              "They plays outside now."
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Question Words",
        "preview": "Use who, what, where, when, why, how to ask questions.",
        "body": "<p style='margin-bottom:10px;'>Use who, what, where, when, why, how to ask questions.</p>",
        "quiz": [
          {
            "q": "Choose the correct question word for a place:",
            "options": [
              "Who",
              "Where",
              "Why",
              "When"
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct question word for a reason:",
            "options": [
              "What",
              "Who",
              "Why",
              "How"
            ],
            "answer": 2
          },
          {
            "q": "Choose the correct question word for a person:",
            "options": [
              "Where",
              "Who",
              "When",
              "How"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Personal Pronouns",
        "preview": "Use I, you, he, she, it, we, they as subjects of a sentence.",
        "body": "<p style='margin-bottom:10px;'>Use I, you, he, she, it, we, they as subjects of a sentence.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "Him is my friend.",
              "He is my friend.",
              "His is my friend.",
              "Her is my friend."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "Them are students.",
              "Their are students.",
              "They are students.",
              "Theirs are students."
            ],
            "answer": 2
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "Us are ready.",
              "We are ready.",
              "Ours are ready.",
              "Our are ready."
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "There is / There are",
        "preview": "Use 'there is' for singular nouns and 'there are' for plural nouns.",
        "body": "<p style='margin-bottom:10px;'>Use 'there is' for singular nouns and 'there are' for plural nouns.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "There is many books.",
              "There are many books.",
              "There is a many books.",
              "There be many books."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "There are a cat on the sofa.",
              "There is a cat on the sofa.",
              "There cat is on the sofa.",
              "There a cat is on the sofa."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "There are three apples.",
              "There is three apples.",
              "There apples are three.",
              "There three apples are."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Simple Past (Regular Verbs)",
        "preview": "Add -ed to regular verbs to form the simple past tense.",
        "body": "<p style='margin-bottom:10px;'>Add -ed to regular verbs to form the simple past tense.</p>",
        "quiz": [
          {
            "q": "Choose the correct past tense of 'walk':",
            "options": [
              "walk",
              "walking",
              "walked",
              "walks"
            ],
            "answer": 2
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She visit her aunt last week.",
              "She visited her aunt last week.",
              "She visiting her aunt last week.",
              "She visits her aunt last week."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "They played football yesterday.",
              "They play football yesterday.",
              "They playing football yesterday.",
              "They plays football yesterday."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Adjective Order",
        "preview": "Adjectives usually follow this order: opinion, size, age, color, origin, material, purpose.",
        "body": "<p style='margin-bottom:10px;'>Adjectives usually follow this order: opinion, size, age, color, origin, material, purpose.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "A red big house.",
              "A big red house.",
              "A house big red.",
              "A red house big."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "An old beautiful car.",
              "A beautiful old car.",
              "A car beautiful old.",
              "An old car beautiful."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "A wooden small table.",
              "A small wooden table.",
              "A table small wooden.",
              "A wooden table small."
            ],
            "answer": 1
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
        "title": "Past Continuous",
        "preview": "Use was/were + verb-ing for an action in progress at a specific past time.",
        "body": "<p style='margin-bottom:10px;'>Use was/were + verb-ing for an action in progress at a specific past time.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "I was watching TV when she called.",
              "I watched TV when she was calling.",
              "I was watch TV when she called.",
              "I watching TV when she called."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "They were sleeping when the alarm rang.",
              "They was sleeping when the alarm rang.",
              "They were sleep when the alarm rang.",
              "They sleeping when the alarm rang."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She was cooking while he was reading.",
              "She cooking while he reading.",
              "She was cook while he was read.",
              "She were cooking while he was reading."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Present Perfect",
        "preview": "Use have/has + past participle for experiences or actions with present relevance.",
        "body": "<p style='margin-bottom:10px;'>Use have/has + past participle for experiences or actions with present relevance.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "I have visit Paris twice.",
              "I have visited Paris twice.",
              "I has visited Paris twice.",
              "I visited have Paris twice."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She has finish her homework.",
              "She have finished her homework.",
              "She has finished her homework.",
              "She finished has her homework."
            ],
            "answer": 2
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "They have never seen snow.",
              "They has never seen snow.",
              "They have never see snow.",
              "They never have seen snow correctly."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Comparatives & Superlatives",
        "preview": "Use -er/more for comparatives, -est/most for superlatives.",
        "body": "<p style='margin-bottom:10px;'>Use -er/more for comparatives, -est/most for superlatives.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "This book is more interesting than that one.",
              "This book is interestinger than that one.",
              "This book is most interesting than that one.",
              "This book is interesting more than that one."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She is the tallest in her class.",
              "She is the more tall in her class.",
              "She is tallest than her class.",
              "She is the most tall in her class."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "He runs faster than his brother.",
              "He runs fastest than his brother.",
              "He runs more fast than his brother.",
              "He runs fast than his brother."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Modal Verbs (can/must/should)",
        "preview": "Use modal verbs to express ability, obligation, or advice.",
        "body": "<p style='margin-bottom:10px;'>Use modal verbs to express ability, obligation, or advice.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "You must to wear a seatbelt.",
              "You must wear a seatbelt.",
              "You must wearing a seatbelt.",
              "You musts wear a seatbelt."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She can speaks three languages.",
              "She can speak three languages.",
              "She cans speak three languages.",
              "She can to speak three languages."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "You should to study more.",
              "You should studies more.",
              "You should study more.",
              "You shoulds study more."
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Future (will / going to)",
        "preview": "Use 'will' for predictions/decisions, 'going to' for plans already made.",
        "body": "<p style='margin-bottom:10px;'>Use 'will' for predictions/decisions, 'going to' for plans already made.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "I think it will rain tomorrow.",
              "I think it going to rain tomorrow.",
              "I think it will to rain tomorrow.",
              "I think it will rains tomorrow."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "We are going to visit my parents this weekend.",
              "We will going to visit my parents this weekend.",
              "We are go to visit my parents this weekend.",
              "We going to visit my parents this weekend."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She will graduates next year.",
              "She will graduate next year.",
              "She going graduate next year.",
              "She will to graduate next year."
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Conditionals Type 1",
        "preview": "Use if + present simple, will + base verb, for real future possibilities.",
        "body": "<p style='margin-bottom:10px;'>Use if + present simple, will + base verb, for real future possibilities.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "If it rains, we will stay home.",
              "If it will rain, we stay home.",
              "If it rains, we stayed home.",
              "If it rain, we will stay home."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "If you study hard, you will pass the exam.",
              "If you studied hard, you will pass the exam.",
              "If you study hard, you would pass the exam.",
              "If you will study hard, you pass the exam."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She will call you if she has time.",
              "She will call you if she had time.",
              "She would call you if she has time.",
              "She calls you if she will have time."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Passive Voice (Basic)",
        "preview": "Use be + past participle to focus on the action rather than who does it.",
        "body": "<p style='margin-bottom:10px;'>Use be + past participle to focus on the action rather than who does it.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "The cake was baked by my mother.",
              "The cake baked by my mother.",
              "The cake was bake by my mother.",
              "The cake is baked was by my mother."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "The letter was written by John.",
              "The letter written by John.",
              "The letter is write by John.",
              "The letter was writing by John."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "The house is being built now.",
              "The house being built now.",
              "The house is build now.",
              "The house was being build now."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Reported Speech (Basic)",
        "preview": "Shift tenses back when reporting what someone said.",
        "body": "<p style='margin-bottom:10px;'>Shift tenses back when reporting what someone said.</p>",
        "quiz": [
          {
            "q": "Choose the correct reported sentence for: 'I am tired.'",
            "options": [
              "She said she is tired.",
              "She said she was tired.",
              "She said she tired.",
              "She says she was tired."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct reported sentence for: 'I will call you.'",
            "options": [
              "He said he will call me.",
              "He said he would call me.",
              "He said he calls me.",
              "He says he would call me."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct reported sentence for: 'I have finished.'",
            "options": [
              "She said she has finished.",
              "She said she finished.",
              "She said she had finished.",
              "She says she had finished."
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Phrasal Verbs",
        "preview": "A phrasal verb combines a verb with a preposition/adverb to create a new meaning.",
        "body": "<p style='margin-bottom:10px;'>A phrasal verb combines a verb with a preposition/adverb to create a new meaning.</p>",
        "quiz": [
          {
            "q": "What does 'give up' mean?",
            "options": [
              "To continue",
              "To stop trying",
              "To celebrate",
              "To postpone"
            ],
            "answer": 1
          },
          {
            "q": "What does 'look after' mean?",
            "options": [
              "To search for",
              "To ignore",
              "To take care of",
              "To criticize"
            ],
            "answer": 2
          },
          {
            "q": "What does 'run into' mean?",
            "options": [
              "To avoid someone",
              "To meet someone by chance",
              "To argue with someone",
              "To help someone"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Gerunds & Infinitives",
        "preview": "Some verbs are followed by -ing (gerund), others by 'to' + verb (infinitive).",
        "body": "<p style='margin-bottom:10px;'>Some verbs are followed by -ing (gerund), others by 'to' + verb (infinitive).</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "I enjoy to read books.",
              "I enjoy reading books.",
              "I enjoy read books.",
              "I enjoy reads books."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She wants going to the park.",
              "She wants go to the park.",
              "She wants to go to the park.",
              "She want to going the park."
            ],
            "answer": 2
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "They decided to leave early.",
              "They decided leaving early.",
              "They decided leave early.",
              "They decided to leaving early."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Relative Clauses",
        "preview": "Use who, which, that, where to add information about a noun.",
        "body": "<p style='margin-bottom:10px;'>Use who, which, that, where to add information about a noun.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "The man which called you is my uncle.",
              "The man who called you is my uncle.",
              "The man whom called you is my uncle.",
              "The man where called you is my uncle."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "This is the house where I grew up.",
              "This is the house who I grew up.",
              "This is the house which I grew up.",
              "This is the house that I grew up there."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "The book that you gave me was great.",
              "The book who you gave me was great.",
              "The book where you gave me was great.",
              "The book whom you gave me was great."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Prepositions of Time/Place",
        "preview": "Use in, on, at correctly to describe time and place relationships.",
        "body": "<p style='margin-bottom:10px;'>Use in, on, at correctly to describe time and place relationships.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She lives in Main Street.",
              "She lives on Main Street.",
              "She lives at Main Street.",
              "She lives by Main Street."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "The keys are in the table.",
              "The keys are on the table.",
              "The keys are at the table.",
              "The keys are by the table."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "We arrived in the airport at 9 AM.",
              "We arrived at the airport at 9 AM.",
              "We arrived on the airport at 9 AM.",
              "We arrived by the airport at 9 AM."
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
        "title": "Past Perfect",
        "preview": "Use had + past participle for an action completed before another past action.",
        "body": "<p style='margin-bottom:10px;'>Use had + past participle for an action completed before another past action.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "By the time we arrived, the movie had already started.",
              "By the time we arrived, the movie already started.",
              "By the time we arrived, the movie has already started.",
              "By the time we arrived, the movie was already starting."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She had finished the report before the meeting began.",
              "She has finished the report before the meeting began.",
              "She finished the report before the meeting had began.",
              "She was finished the report before the meeting began."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "He realized he had forgotten his keys.",
              "He realized he has forgotten his keys.",
              "He realized he forgot had his keys.",
              "He realized he was forgotten his keys."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Conditionals Type 2 & 3",
        "preview": "Type 2 = unreal present (would + base verb); Type 3 = unreal past (would have + past participle).",
        "body": "<p style='margin-bottom:10px;'>Type 2 = unreal present (would + base verb); Type 3 = unreal past (would have + past participle).</p>",
        "quiz": [
          {
            "q": "Choose the correct Type 2 sentence:",
            "options": [
              "If I had more time, I would travel more.",
              "If I have more time, I will travel more.",
              "If I had more time, I will travel more.",
              "If I have more time, I would travel more."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct Type 3 sentence:",
            "options": [
              "If she had studied, she would have passed.",
              "If she studied, she would have passed.",
              "If she had studied, she would pass.",
              "If she has studied, she would have passed."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "If I were you, I would apologize.",
              "If I was you, I will apologize.",
              "If I am you, I would apologize.",
              "If I were you, I will apologize."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Subjunctive Mood",
        "preview": "Used to express wishes, suggestions, or hypothetical situations.",
        "body": "<p style='margin-bottom:10px;'>Used to express wishes, suggestions, or hypothetical situations.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "I suggest that he be on time.",
              "I suggest that he is on time.",
              "I suggest that he was on time.",
              "I suggest that he being on time."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "It is essential that she attend the meeting.",
              "It is essential that she attends the meeting.",
              "It is essential that she attended the meeting.",
              "It is essential that she will attend the meeting."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "I wish I were taller.",
              "I wish I was taller.",
              "I wish I am taller.",
              "I wish I will be taller."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Passive Voice (Advanced)",
        "preview": "Passive constructions can also be used with modal verbs and perfect tenses.",
        "body": "<p style='margin-bottom:10px;'>Passive constructions can also be used with modal verbs and perfect tenses.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "The report must be submitted by Friday.",
              "The report must submitted by Friday.",
              "The report must be submit by Friday.",
              "The report must be submitting by Friday."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "The project has been completed successfully.",
              "The project has completed successfully.",
              "The project has been complete successfully.",
              "The project was completed has successfully."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "The decision will have been made by then.",
              "The decision will be made had by then.",
              "The decision will has been made by then.",
              "The decision have been made will by then."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Reported Speech (Advanced)",
        "preview": "Reporting questions, commands, and complex statements requires careful tense shifts.",
        "body": "<p style='margin-bottom:10px;'>Reporting questions, commands, and complex statements requires careful tense shifts.</p>",
        "quiz": [
          {
            "q": "Choose the correct reported question for: 'Where do you live?'",
            "options": [
              "He asked where I live.",
              "He asked where I lived.",
              "He asked where did I live.",
              "He asked where I was living now."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct reported command for: 'Close the door.'",
            "options": [
              "He told me close the door.",
              "He told me to close the door.",
              "He told me that close the door.",
              "He said me to close the door."
            ],
            "answer": 1
          },
          {
            "q": "Choose the correct reported sentence for: 'I might come.'",
            "options": [
              "She said she might come.",
              "She said she may come.",
              "She said she might came.",
              "She said she will might come."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Inversion",
        "preview": "Inversion places the auxiliary verb before the subject for emphasis, often after negative adverbials.",
        "body": "<p style='margin-bottom:10px;'>Inversion places the auxiliary verb before the subject for emphasis, often after negative adverbials.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "Never have I seen such a beautiful sunset.",
              "Never I have seen such a beautiful sunset.",
              "Never I saw such a beautiful sunset.",
              "Never did I have seen such a beautiful sunset."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "Rarely does she complain about her job.",
              "Rarely she does complain about her job.",
              "Rarely she complains about her job.",
              "Rarely complains she about her job."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "Not only did he apologize, but he also fixed the issue.",
              "Not only he apologized, but he also fixed the issue.",
              "Not only did he apologized, but also fixed the issue.",
              "Not only he did apologize, but also fixed the issue."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Cleft Sentences",
        "preview": "Cleft sentences (It is/was... that...) emphasize a specific part of a sentence.",
        "body": "<p style='margin-bottom:10px;'>Cleft sentences (It is/was... that...) emphasize a specific part of a sentence.</p>",
        "quiz": [
          {
            "q": "Choose the correct cleft sentence:",
            "options": [
              "It was John who broke the window.",
              "It was John that break the window.",
              "It is John who broken the window.",
              "It was John whom broke the window."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct cleft sentence:",
            "options": [
              "It was in 2015 that we first met.",
              "It was in 2015 when we first met.",
              "It is in 2015 that we first met.",
              "It was on 2015 that we first met."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct cleft sentence:",
            "options": [
              "What I need is more time.",
              "What I need are more time.",
              "What do I need is more time.",
              "What I needed is more time now."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Modal Perfect",
        "preview": "Use modal + have + past participle to talk about past possibilities or regrets.",
        "body": "<p style='margin-bottom:10px;'>Use modal + have + past participle to talk about past possibilities or regrets.</p>",
        "quiz": [
          {
            "q": "Choose the correct sentence:",
            "options": [
              "You should have called me earlier.",
              "You should called me earlier.",
              "You should have call me earlier.",
              "You should has called me earlier."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "She might have missed the bus.",
              "She might missed the bus.",
              "She might have miss the bus.",
              "She might has missed the bus."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct sentence:",
            "options": [
              "They could have won the game.",
              "They could won the game.",
              "They could have win the game.",
              "They could has won the game."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Mixed Conditionals",
        "preview": "Mixed conditionals combine different time frames, e.g. past condition with present result.",
        "body": "<p style='margin-bottom:10px;'>Mixed conditionals combine different time frames, e.g. past condition with present result.</p>",
        "quiz": [
          {
            "q": "Choose the correct mixed conditional:",
            "options": [
              "If I had studied medicine, I would be a doctor now.",
              "If I studied medicine, I would have been a doctor now.",
              "If I had studied medicine, I would have been a doctor now.",
              "If I study medicine, I would be a doctor now."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct mixed conditional:",
            "options": [
              "If she were more careful, she wouldn't have crashed.",
              "If she was more careful, she wouldn't have crashed.",
              "If she had been more careful, she wouldn't crash.",
              "If she is more careful, she wouldn't have crashed."
            ],
            "answer": 0
          },
          {
            "q": "Choose the correct mixed conditional:",
            "options": [
              "If he weren't so busy, he would have joined us.",
              "If he wasn't so busy, he would have joined us.",
              "If he hadn't been so busy, he would join us.",
              "If he isn't so busy, he would have joined us."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Advanced Connectors",
        "preview": "Use connectors like 'nevertheless', 'consequently', 'whereas' to link complex ideas.",
        "body": "<p style='margin-bottom:10px;'>Use connectors like 'nevertheless', 'consequently', 'whereas' to link complex ideas.</p>",
        "quiz": [
          {
            "q": "Choose the best connector: 'The plan was risky; ___, they proceeded.'",
            "options": [
              "therefore",
              "nevertheless",
              "because",
              "meanwhile"
            ],
            "answer": 1
          },
          {
            "q": "Choose the best connector: 'Sales rose sharply; ___, profits declined.'",
            "options": [
              "consequently",
              "whereas",
              "similarly",
              "however"
            ],
            "answer": 3
          },
          {
            "q": "Choose the best connector: 'She is an artist, ___ her brother is an engineer.'",
            "options": [
              "whereas",
              "consequently",
              "therefore",
              "moreover"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Ellipsis",
        "preview": "Ellipsis omits words that are understood from context to avoid repetition.",
        "body": "<p style='margin-bottom:10px;'>Ellipsis omits words that are understood from context to avoid repetition.</p>",
        "quiz": [
          {
            "q": "Choose the sentence using correct ellipsis:",
            "options": [
              "She can swim and he can too.",
              "She can swim and he can swim too.",
              "She can swim and he too can.",
              "She can swim and also he can swim."
            ],
            "answer": 0
          },
          {
            "q": "Choose the sentence using correct ellipsis:",
            "options": [
              "I wanted to go, but couldn't.",
              "I wanted to go, but I couldn't go.",
              "I wanted to go, but not couldn't.",
              "I wanted go, but couldn't go."
            ],
            "answer": 0
          },
          {
            "q": "Choose the sentence using correct ellipsis:",
            "options": [
              "He likes tea more than coffee.",
              "He likes tea more than he likes coffee is.",
              "He likes tea more than does coffee.",
              "He likes tea more than coffee does."
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Emphatic Structures",
        "preview": "Use 'do/does/did' or intensifiers to add emphasis to a statement.",
        "body": "<p style='margin-bottom:10px;'>Use 'do/does/did' or intensifiers to add emphasis to a statement.</p>",
        "quiz": [
          {
            "q": "Choose the emphatic sentence:",
            "options": [
              "I did tell you about the meeting.",
              "I telled you about the meeting.",
              "I did told you about the meeting.",
              "I do telling you about the meeting."
            ],
            "answer": 0
          },
          {
            "q": "Choose the emphatic sentence:",
            "options": [
              "She does care about her students.",
              "She cares does about her students.",
              "She do cares about her students.",
              "She caring does about her students."
            ],
            "answer": 0
          },
          {
            "q": "Choose the emphatic sentence:",
            "options": [
              "It was he himself who solved the problem.",
              "It was he who himself solved the problem.",
              "It was himself he who solved the problem.",
              "It was he who solved himself the problem."
            ],
            "answer": 0
          }
        ]
      }
    ]
  }
];
