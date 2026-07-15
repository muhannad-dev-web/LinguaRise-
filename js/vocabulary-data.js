const VOCABULARY_LEVELS = [
  {
    "id": "level1",
    "name": "Level 1 · Beginner",
    "lessons": [
      {
        "title": "Greetings",
        "preview": "Learn 6 words about greetings.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Hello</strong> — A friendly word used to greet someone</li><li style='margin-bottom:8px;'><strong>Goodbye</strong> — A word said when leaving</li><li style='margin-bottom:8px;'><strong>Please</strong> — A polite word used when asking for something</li><li style='margin-bottom:8px;'><strong>Thanks</strong> — A short way to show gratitude</li><li style='margin-bottom:8px;'><strong>Morning</strong> — The early part of the day</li><li style='margin-bottom:8px;'><strong>Welcome</strong> — A friendly greeting to a visitor</li></ul>",
        "quiz": [
          {
            "q": "What does \"Welcome\" mean?",
            "options": [
              "A friendly greeting to a visitor",
              "A polite word used when asking for something",
              "A friendly word used to greet someone",
              "A word said when leaving"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Hello\" mean?",
            "options": [
              "A word said when leaving",
              "A short way to show gratitude",
              "A friendly greeting to a visitor",
              "A friendly word used to greet someone"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Morning\" mean?",
            "options": [
              "A word said when leaving",
              "The early part of the day",
              "A friendly greeting to a visitor",
              "A friendly word used to greet someone"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Family",
        "preview": "Learn 6 words about family.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Mother</strong> — A female parent</li><li style='margin-bottom:8px;'><strong>Father</strong> — A male parent</li><li style='margin-bottom:8px;'><strong>Sibling</strong> — A brother or sister</li><li style='margin-bottom:8px;'><strong>Cousin</strong> — A child of your aunt or uncle</li><li style='margin-bottom:8px;'><strong>Grandparent</strong> — The parent of your mother or father</li><li style='margin-bottom:8px;'><strong>Relative</strong> — A person connected to you by family</li></ul>",
        "quiz": [
          {
            "q": "What does \"Relative\" mean?",
            "options": [
              "A child of your aunt or uncle",
              "A person connected to you by family",
              "A male parent",
              "A brother or sister"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Grandparent\" mean?",
            "options": [
              "A male parent",
              "The parent of your mother or father",
              "A child of your aunt or uncle",
              "A brother or sister"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Cousin\" mean?",
            "options": [
              "A child of your aunt or uncle",
              "A male parent",
              "A person connected to you by family",
              "A female parent"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Numbers",
        "preview": "Learn 6 words about numbers.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Dozen</strong> — A group of twelve</li><li style='margin-bottom:8px;'><strong>Half</strong> — One of two equal parts</li><li style='margin-bottom:8px;'><strong>Pair</strong> — A set of two matching things</li><li style='margin-bottom:8px;'><strong>Zero</strong> — The number 0</li><li style='margin-bottom:8px;'><strong>Double</strong> — Two times the amount</li><li style='margin-bottom:8px;'><strong>Quarter</strong> — One of four equal parts</li></ul>",
        "quiz": [
          {
            "q": "What does \"Double\" mean?",
            "options": [
              "Two times the amount",
              "A group of twelve",
              "One of two equal parts",
              "The number 0"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Pair\" mean?",
            "options": [
              "A set of two matching things",
              "One of four equal parts",
              "Two times the amount",
              "The number 0"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Dozen\" mean?",
            "options": [
              "A set of two matching things",
              "Two times the amount",
              "A group of twelve",
              "One of two equal parts"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Colors",
        "preview": "Learn 6 words about colors.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Bright</strong> — Full of light, strong in color</li><li style='margin-bottom:8px;'><strong>Pale</strong> — Light in color</li><li style='margin-bottom:8px;'><strong>Dark</strong> — Having little light</li><li style='margin-bottom:8px;'><strong>Shade</strong> — A slightly different version of a color</li><li style='margin-bottom:8px;'><strong>Colorful</strong> — Having many bright colors</li><li style='margin-bottom:8px;'><strong>Plain</strong> — Without pattern or color</li></ul>",
        "quiz": [
          {
            "q": "What does \"Shade\" mean?",
            "options": [
              "A slightly different version of a color",
              "Light in color",
              "Having little light",
              "Having many bright colors"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Dark\" mean?",
            "options": [
              "A slightly different version of a color",
              "Having little light",
              "Full of light, strong in color",
              "Light in color"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Plain\" mean?",
            "options": [
              "A slightly different version of a color",
              "Without pattern or color",
              "Having many bright colors",
              "Having little light"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Days of the Week",
        "preview": "Learn 6 words about days of the week.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Weekday</strong> — Any day from Monday to Friday</li><li style='margin-bottom:8px;'><strong>Weekend</strong> — Saturday and Sunday</li><li style='margin-bottom:8px;'><strong>Daily</strong> — Happening every day</li><li style='margin-bottom:8px;'><strong>Schedule</strong> — A plan of things to do and when</li><li style='margin-bottom:8px;'><strong>Tomorrow</strong> — The day after today</li><li style='margin-bottom:8px;'><strong>Yesterday</strong> — The day before today</li></ul>",
        "quiz": [
          {
            "q": "What does \"Weekday\" mean?",
            "options": [
              "Happening every day",
              "The day after today",
              "Any day from Monday to Friday",
              "A plan of things to do and when"
            ],
            "answer": 2
          },
          {
            "q": "What does \"Weekend\" mean?",
            "options": [
              "The day before today",
              "The day after today",
              "Happening every day",
              "Saturday and Sunday"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Yesterday\" mean?",
            "options": [
              "Saturday and Sunday",
              "The day after today",
              "The day before today",
              "Happening every day"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Food",
        "preview": "Learn 6 words about food.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Meal</strong> — Food eaten at a certain time</li><li style='margin-bottom:8px;'><strong>Snack</strong> — A small amount of food between meals</li><li style='margin-bottom:8px;'><strong>Recipe</strong> — Instructions for cooking a dish</li><li style='margin-bottom:8px;'><strong>Fresh</strong> — Recently made or grown</li><li style='margin-bottom:8px;'><strong>Delicious</strong> — Very tasty</li><li style='margin-bottom:8px;'><strong>Ingredient</strong> — One item used to make a dish</li></ul>",
        "quiz": [
          {
            "q": "What does \"Delicious\" mean?",
            "options": [
              "One item used to make a dish",
              "Instructions for cooking a dish",
              "A small amount of food between meals",
              "Very tasty"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Fresh\" mean?",
            "options": [
              "Food eaten at a certain time",
              "Recently made or grown",
              "Instructions for cooking a dish",
              "A small amount of food between meals"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Recipe\" mean?",
            "options": [
              "One item used to make a dish",
              "Food eaten at a certain time",
              "A small amount of food between meals",
              "Instructions for cooking a dish"
            ],
            "answer": 3
          }
        ]
      },
      {
        "title": "Weather",
        "preview": "Learn 6 words about weather.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Sunny</strong> — Full of sunshine</li><li style='margin-bottom:8px;'><strong>Cloudy</strong> — Covered with clouds</li><li style='margin-bottom:8px;'><strong>Windy</strong> — With strong moving air</li><li style='margin-bottom:8px;'><strong>Humid</strong> — Damp and warm air</li><li style='margin-bottom:8px;'><strong>Forecast</strong> — A prediction of future weather</li><li style='margin-bottom:8px;'><strong>Storm</strong> — Violent weather with rain and wind</li></ul>",
        "quiz": [
          {
            "q": "What does \"Forecast\" mean?",
            "options": [
              "A prediction of future weather",
              "With strong moving air",
              "Full of sunshine",
              "Damp and warm air"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Windy\" mean?",
            "options": [
              "With strong moving air",
              "Covered with clouds",
              "Violent weather with rain and wind",
              "A prediction of future weather"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Sunny\" mean?",
            "options": [
              "Full of sunshine",
              "With strong moving air",
              "Damp and warm air",
              "Violent weather with rain and wind"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Clothes",
        "preview": "Learn 6 words about clothes.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Outfit</strong> — A set of clothes worn together</li><li style='margin-bottom:8px;'><strong>Fabric</strong> — The material clothes are made from</li><li style='margin-bottom:8px;'><strong>Size</strong> — How big or small something is</li><li style='margin-bottom:8px;'><strong>Casual</strong> — Relaxed, informal clothing</li><li style='margin-bottom:8px;'><strong>Formal</strong> — Suitable for serious occasions</li><li style='margin-bottom:8px;'><strong>Fit</strong> — How well clothes match your body</li></ul>",
        "quiz": [
          {
            "q": "What does \"Fit\" mean?",
            "options": [
              "How well clothes match your body",
              "How big or small something is",
              "A set of clothes worn together",
              "The material clothes are made from"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Formal\" mean?",
            "options": [
              "Suitable for serious occasions",
              "Relaxed, informal clothing",
              "A set of clothes worn together",
              "How well clothes match your body"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Fabric\" mean?",
            "options": [
              "Relaxed, informal clothing",
              "How big or small something is",
              "The material clothes are made from",
              "A set of clothes worn together"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Time",
        "preview": "Learn 6 words about time.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Punctual</strong> — Arriving on time</li><li style='margin-bottom:8px;'><strong>Schedule</strong> — A plan for when things happen</li><li style='margin-bottom:8px;'><strong>Moment</strong> — A very short period of time</li><li style='margin-bottom:8px;'><strong>Deadline</strong> — The latest time something must be done</li><li style='margin-bottom:8px;'><strong>Duration</strong> — The length of time something lasts</li><li style='margin-bottom:8px;'><strong>Recently</strong> — Not long ago</li></ul>",
        "quiz": [
          {
            "q": "What does \"Punctual\" mean?",
            "options": [
              "A very short period of time",
              "The latest time something must be done",
              "Arriving on time",
              "The length of time something lasts"
            ],
            "answer": 2
          },
          {
            "q": "What does \"Duration\" mean?",
            "options": [
              "A plan for when things happen",
              "The length of time something lasts",
              "Not long ago",
              "A very short period of time"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Schedule\" mean?",
            "options": [
              "A plan for when things happen",
              "Arriving on time",
              "The length of time something lasts",
              "Not long ago"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Directions",
        "preview": "Learn 6 words about directions.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Straight</strong> — Without turning</li><li style='margin-bottom:8px;'><strong>Corner</strong> — Where two streets meet</li><li style='margin-bottom:8px;'><strong>Nearby</strong> — Close in distance</li><li style='margin-bottom:8px;'><strong>Distance</strong> — How far one place is from another</li><li style='margin-bottom:8px;'><strong>Route</strong> — The way to get somewhere</li><li style='margin-bottom:8px;'><strong>Crossroad</strong> — A place where roads cross</li></ul>",
        "quiz": [
          {
            "q": "What does \"Nearby\" mean?",
            "options": [
              "Where two streets meet",
              "Close in distance",
              "Without turning",
              "A place where roads cross"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Straight\" mean?",
            "options": [
              "Where two streets meet",
              "Without turning",
              "Close in distance",
              "The way to get somewhere"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Corner\" mean?",
            "options": [
              "How far one place is from another",
              "Where two streets meet",
              "Without turning",
              "The way to get somewhere"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Shopping",
        "preview": "Learn 6 words about shopping.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Receipt</strong> — Paper proof of purchase</li><li style='margin-bottom:8px;'><strong>Discount</strong> — A reduction in price</li><li style='margin-bottom:8px;'><strong>Customer</strong> — A person who buys something</li><li style='margin-bottom:8px;'><strong>Cashier</strong> — A person who takes payment in a shop</li><li style='margin-bottom:8px;'><strong>Bargain</strong> — A good deal at a low price</li><li style='margin-bottom:8px;'><strong>Refund</strong> — Money given back after a return</li></ul>",
        "quiz": [
          {
            "q": "What does \"Discount\" mean?",
            "options": [
              "A person who buys something",
              "A good deal at a low price",
              "Paper proof of purchase",
              "A reduction in price"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Cashier\" mean?",
            "options": [
              "Money given back after a return",
              "A person who takes payment in a shop",
              "A person who buys something",
              "A good deal at a low price"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Bargain\" mean?",
            "options": [
              "A person who takes payment in a shop",
              "A good deal at a low price",
              "Paper proof of purchase",
              "A person who buys something"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Animals",
        "preview": "Learn 6 words about animals.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Wild</strong> — Living in nature, not tamed</li><li style='margin-bottom:8px;'><strong>Pet</strong> — An animal kept at home</li><li style='margin-bottom:8px;'><strong>Species</strong> — A group of similar animals</li><li style='margin-bottom:8px;'><strong>Habitat</strong> — The natural home of an animal</li><li style='margin-bottom:8px;'><strong>Predator</strong> — An animal that hunts others</li><li style='margin-bottom:8px;'><strong>Mammal</strong> — A warm-blooded animal with fur</li></ul>",
        "quiz": [
          {
            "q": "What does \"Pet\" mean?",
            "options": [
              "An animal kept at home",
              "A group of similar animals",
              "An animal that hunts others",
              "Living in nature, not tamed"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Mammal\" mean?",
            "options": [
              "The natural home of an animal",
              "A group of similar animals",
              "A warm-blooded animal with fur",
              "Living in nature, not tamed"
            ],
            "answer": 2
          },
          {
            "q": "What does \"Habitat\" mean?",
            "options": [
              "Living in nature, not tamed",
              "A warm-blooded animal with fur",
              "An animal kept at home",
              "The natural home of an animal"
            ],
            "answer": 3
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
        "title": "Travel",
        "preview": "Learn 6 words about travel.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Itinerary</strong> — A planned route or schedule for a trip</li><li style='margin-bottom:8px;'><strong>Departure</strong> — The act of leaving</li><li style='margin-bottom:8px;'><strong>Boarding</strong> — Getting on a plane, train, or bus</li><li style='margin-bottom:8px;'><strong>Layover</strong> — A stop between flights</li><li style='margin-bottom:8px;'><strong>Passport</strong> — An official travel document</li><li style='margin-bottom:8px;'><strong>Destination</strong> — The place you are traveling to</li></ul>",
        "quiz": [
          {
            "q": "What does \"Departure\" mean?",
            "options": [
              "Getting on a plane, train, or bus",
              "A planned route or schedule for a trip",
              "An official travel document",
              "The act of leaving"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Layover\" mean?",
            "options": [
              "An official travel document",
              "The place you are traveling to",
              "Getting on a plane, train, or bus",
              "A stop between flights"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Itinerary\" mean?",
            "options": [
              "A planned route or schedule for a trip",
              "Getting on a plane, train, or bus",
              "The act of leaving",
              "A stop between flights"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Careers",
        "preview": "Learn 6 words about careers.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Resume</strong> — A document listing your work experience</li><li style='margin-bottom:8px;'><strong>Promotion</strong> — A move to a higher job position</li><li style='margin-bottom:8px;'><strong>Colleague</strong> — A person you work with</li><li style='margin-bottom:8px;'><strong>Salary</strong> — Money paid regularly for work</li><li style='margin-bottom:8px;'><strong>Deadline</strong> — The time by which work must be finished</li><li style='margin-bottom:8px;'><strong>Internship</strong> — A short-term training position</li></ul>",
        "quiz": [
          {
            "q": "What does \"Resume\" mean?",
            "options": [
              "A person you work with",
              "A move to a higher job position",
              "A document listing your work experience",
              "A short-term training position"
            ],
            "answer": 2
          },
          {
            "q": "What does \"Internship\" mean?",
            "options": [
              "A person you work with",
              "The time by which work must be finished",
              "A short-term training position",
              "A document listing your work experience"
            ],
            "answer": 2
          },
          {
            "q": "What does \"Salary\" mean?",
            "options": [
              "A move to a higher job position",
              "Money paid regularly for work",
              "A person you work with",
              "A short-term training position"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Free Time",
        "preview": "Learn 6 words about free time.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Leisure</strong> — Time free from work</li><li style='margin-bottom:8px;'><strong>Hobby</strong> — An activity done for enjoyment</li><li style='margin-bottom:8px;'><strong>Relax</strong> — To rest and reduce stress</li><li style='margin-bottom:8px;'><strong>Entertainment</strong> — Something that amuses or interests people</li><li style='margin-bottom:8px;'><strong>Recreation</strong> — Activity done for enjoyment when not working</li><li style='margin-bottom:8px;'><strong>Pastime</strong> — An activity done for pleasure regularly</li></ul>",
        "quiz": [
          {
            "q": "What does \"Entertainment\" mean?",
            "options": [
              "Something that amuses or interests people",
              "An activity done for enjoyment",
              "To rest and reduce stress",
              "An activity done for pleasure regularly"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Recreation\" mean?",
            "options": [
              "Something that amuses or interests people",
              "Activity done for enjoyment when not working",
              "An activity done for enjoyment",
              "To rest and reduce stress"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Relax\" mean?",
            "options": [
              "An activity done for pleasure regularly",
              "An activity done for enjoyment",
              "To rest and reduce stress",
              "Time free from work"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Giving Opinions",
        "preview": "Learn 6 words about giving opinions.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Perspective</strong> — A particular way of viewing something</li><li style='margin-bottom:8px;'><strong>Argue</strong> — To give reasons for or against something</li><li style='margin-bottom:8px;'><strong>Convince</strong> — To make someone believe something</li><li style='margin-bottom:8px;'><strong>Assume</strong> — To think something is true without proof</li><li style='margin-bottom:8px;'><strong>Debate</strong> — A formal discussion of opposing views</li><li style='margin-bottom:8px;'><strong>Viewpoint</strong> — A person's way of thinking about something</li></ul>",
        "quiz": [
          {
            "q": "What does \"Debate\" mean?",
            "options": [
              "A formal discussion of opposing views",
              "To make someone believe something",
              "A particular way of viewing something",
              "To think something is true without proof"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Convince\" mean?",
            "options": [
              "To make someone believe something",
              "To think something is true without proof",
              "A person's way of thinking about something",
              "A formal discussion of opposing views"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Argue\" mean?",
            "options": [
              "To make someone believe something",
              "A formal discussion of opposing views",
              "To give reasons for or against something",
              "A particular way of viewing something"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Health",
        "preview": "Learn 6 words about health.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Symptom</strong> — A sign that shows illness</li><li style='margin-bottom:8px;'><strong>Prescription</strong> — A doctor's written order for medicine</li><li style='margin-bottom:8px;'><strong>Recover</strong> — To become well again</li><li style='margin-bottom:8px;'><strong>Diagnosis</strong> — Identification of an illness</li><li style='margin-bottom:8px;'><strong>Treatment</strong> — Medical care given for an illness</li><li style='margin-bottom:8px;'><strong>Exhausted</strong> — Extremely tired</li></ul>",
        "quiz": [
          {
            "q": "What does \"Recover\" mean?",
            "options": [
              "Identification of an illness",
              "A doctor's written order for medicine",
              "To become well again",
              "Extremely tired"
            ],
            "answer": 2
          },
          {
            "q": "What does \"Exhausted\" mean?",
            "options": [
              "Identification of an illness",
              "To become well again",
              "A sign that shows illness",
              "Extremely tired"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Prescription\" mean?",
            "options": [
              "A doctor's written order for medicine",
              "Identification of an illness",
              "A sign that shows illness",
              "Extremely tired"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Housing",
        "preview": "Learn 6 words about housing.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Lease</strong> — A legal agreement to rent property</li><li style='margin-bottom:8px;'><strong>Landlord</strong> — A person who rents property to others</li><li style='margin-bottom:8px;'><strong>Tenant</strong> — A person who rents a property</li><li style='margin-bottom:8px;'><strong>Deposit</strong> — Money paid in advance as security</li><li style='margin-bottom:8px;'><strong>Furnished</strong> — Containing furniture already</li><li style='margin-bottom:8px;'><strong>Utilities</strong> — Services like water, gas, and electricity</li></ul>",
        "quiz": [
          {
            "q": "What does \"Furnished\" mean?",
            "options": [
              "Containing furniture already",
              "A legal agreement to rent property",
              "A person who rents a property",
              "Services like water, gas, and electricity"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Deposit\" mean?",
            "options": [
              "Containing furniture already",
              "Money paid in advance as security",
              "A person who rents a property",
              "A person who rents property to others"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Lease\" mean?",
            "options": [
              "A legal agreement to rent property",
              "Money paid in advance as security",
              "A person who rents a property",
              "A person who rents property to others"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Dining Out",
        "preview": "Learn 6 words about dining out.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Reservation</strong> — A booking made in advance</li><li style='margin-bottom:8px;'><strong>Cuisine</strong> — A style of cooking</li><li style='margin-bottom:8px;'><strong>Appetizer</strong> — A small dish before the main meal</li><li style='margin-bottom:8px;'><strong>Portion</strong> — The amount of food served</li><li style='margin-bottom:8px;'><strong>Tip</strong> — Extra money given for good service</li><li style='margin-bottom:8px;'><strong>Beverage</strong> — A drink</li></ul>",
        "quiz": [
          {
            "q": "What does \"Beverage\" mean?",
            "options": [
              "A drink",
              "A small dish before the main meal",
              "Extra money given for good service",
              "The amount of food served"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Reservation\" mean?",
            "options": [
              "A small dish before the main meal",
              "A booking made in advance",
              "A style of cooking",
              "Extra money given for good service"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Appetizer\" mean?",
            "options": [
              "A small dish before the main meal",
              "Extra money given for good service",
              "A drink",
              "A style of cooking"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Describing a City",
        "preview": "Learn 6 words about describing a city.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Landmark</strong> — A well-known building or feature</li><li style='margin-bottom:8px;'><strong>Neighborhood</strong> — A district within a city</li><li style='margin-bottom:8px;'><strong>Population</strong> — The number of people living somewhere</li><li style='margin-bottom:8px;'><strong>Skyline</strong> — The outline of tall buildings in a city</li><li style='margin-bottom:8px;'><strong>Infrastructure</strong> — Basic physical systems like roads and bridges</li><li style='margin-bottom:8px;'><strong>Metropolitan</strong> — Relating to a large city</li></ul>",
        "quiz": [
          {
            "q": "What does \"Skyline\" mean?",
            "options": [
              "The outline of tall buildings in a city",
              "A district within a city",
              "Relating to a large city",
              "Basic physical systems like roads and bridges"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Landmark\" mean?",
            "options": [
              "The number of people living somewhere",
              "The outline of tall buildings in a city",
              "A well-known building or feature",
              "A district within a city"
            ],
            "answer": 2
          },
          {
            "q": "What does \"Metropolitan\" mean?",
            "options": [
              "The number of people living somewhere",
              "A well-known building or feature",
              "Relating to a large city",
              "A district within a city"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Past Events",
        "preview": "Learn 6 words about past events.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Memory</strong> — Something remembered from the past</li><li style='margin-bottom:8px;'><strong>Nostalgia</strong> — A longing for the past</li><li style='margin-bottom:8px;'><strong>Anniversary</strong> — A date marking a past event</li><li style='margin-bottom:8px;'><strong>Milestone</strong> — An important event or stage</li><li style='margin-bottom:8px;'><strong>Reunion</strong> — A meeting of people after time apart</li><li style='margin-bottom:8px;'><strong>Historic</strong> — Important in history</li></ul>",
        "quiz": [
          {
            "q": "What does \"Historic\" mean?",
            "options": [
              "Something remembered from the past",
              "Important in history",
              "A longing for the past",
              "A meeting of people after time apart"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Reunion\" mean?",
            "options": [
              "Something remembered from the past",
              "A date marking a past event",
              "Important in history",
              "A meeting of people after time apart"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Anniversary\" mean?",
            "options": [
              "A longing for the past",
              "A meeting of people after time apart",
              "A date marking a past event",
              "Something remembered from the past"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Comparisons",
        "preview": "Learn 6 words about comparisons.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Similarity</strong> — A way in which things are alike</li><li style='margin-bottom:8px;'><strong>Contrast</strong> — A clear difference between things</li><li style='margin-bottom:8px;'><strong>Superior</strong> — Better than another</li><li style='margin-bottom:8px;'><strong>Equivalent</strong> — Equal in value or meaning</li><li style='margin-bottom:8px;'><strong>Compared to</strong> — In relation to something else</li><li style='margin-bottom:8px;'><strong>Distinct</strong> — Clearly different</li></ul>",
        "quiz": [
          {
            "q": "What does \"Distinct\" mean?",
            "options": [
              "Equal in value or meaning",
              "A clear difference between things",
              "In relation to something else",
              "Clearly different"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Equivalent\" mean?",
            "options": [
              "Equal in value or meaning",
              "Better than another",
              "In relation to something else",
              "Clearly different"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Similarity\" mean?",
            "options": [
              "Clearly different",
              "In relation to something else",
              "Equal in value or meaning",
              "A way in which things are alike"
            ],
            "answer": 3
          }
        ]
      },
      {
        "title": "Phone & Communication",
        "preview": "Learn 6 words about phone & communication.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Voicemail</strong> — A recorded message left on a phone</li><li style='margin-bottom:8px;'><strong>Contact</strong> — A person you can communicate with</li><li style='margin-bottom:8px;'><strong>Notification</strong> — An alert about new information</li><li style='margin-bottom:8px;'><strong>Signal</strong> — The strength of a phone connection</li><li style='margin-bottom:8px;'><strong>Missed call</strong> — A call that was not answered</li><li style='margin-bottom:8px;'><strong>Text</strong> — A written message sent by phone</li></ul>",
        "quiz": [
          {
            "q": "What does \"Text\" mean?",
            "options": [
              "The strength of a phone connection",
              "A person you can communicate with",
              "An alert about new information",
              "A written message sent by phone"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Notification\" mean?",
            "options": [
              "An alert about new information",
              "A person you can communicate with",
              "The strength of a phone connection",
              "A written message sent by phone"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Contact\" mean?",
            "options": [
              "An alert about new information",
              "A person you can communicate with",
              "A call that was not answered",
              "The strength of a phone connection"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Hobbies",
        "preview": "Learn 6 words about hobbies.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Passion</strong> — A strong interest in something</li><li style='margin-bottom:8px;'><strong>Skillful</strong> — Having great ability</li><li style='margin-bottom:8px;'><strong>Creative</strong> — Having original ideas</li><li style='margin-bottom:8px;'><strong>Dedicated</strong> — Committed to an activity</li><li style='margin-bottom:8px;'><strong>Practice</strong> — Repeated activity to improve a skill</li><li style='margin-bottom:8px;'><strong>Talent</strong> — A natural ability</li></ul>",
        "quiz": [
          {
            "q": "What does \"Dedicated\" mean?",
            "options": [
              "A strong interest in something",
              "Committed to an activity",
              "Having great ability",
              "A natural ability"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Skillful\" mean?",
            "options": [
              "Having great ability",
              "A strong interest in something",
              "Committed to an activity",
              "Having original ideas"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Talent\" mean?",
            "options": [
              "A natural ability",
              "Having original ideas",
              "Committed to an activity",
              "Having great ability"
            ],
            "answer": 0
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
        "title": "Business",
        "preview": "Learn 6 words about business.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Negotiate</strong> — To discuss to reach an agreement</li><li style='margin-bottom:8px;'><strong>Merger</strong> — The joining of two companies</li><li style='margin-bottom:8px;'><strong>Revenue</strong> — Income generated by a business</li><li style='margin-bottom:8px;'><strong>Stakeholder</strong> — A person with interest in a business</li><li style='margin-bottom:8px;'><strong>Strategy</strong> — A plan to achieve a goal</li><li style='margin-bottom:8px;'><strong>Contract</strong> — A legally binding agreement</li></ul>",
        "quiz": [
          {
            "q": "What does \"Contract\" mean?",
            "options": [
              "A legally binding agreement",
              "The joining of two companies",
              "A person with interest in a business",
              "A plan to achieve a goal"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Strategy\" mean?",
            "options": [
              "To discuss to reach an agreement",
              "A plan to achieve a goal",
              "A legally binding agreement",
              "A person with interest in a business"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Merger\" mean?",
            "options": [
              "A legally binding agreement",
              "Income generated by a business",
              "To discuss to reach an agreement",
              "The joining of two companies"
            ],
            "answer": 3
          }
        ]
      },
      {
        "title": "Environment",
        "preview": "Learn 6 words about environment.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Sustainability</strong> — Meeting needs without harming the future</li><li style='margin-bottom:8px;'><strong>Emission</strong> — A substance released into the air</li><li style='margin-bottom:8px;'><strong>Renewable</strong> — Able to be naturally replenished</li><li style='margin-bottom:8px;'><strong>Ecosystem</strong> — A community of living things and their environment</li><li style='margin-bottom:8px;'><strong>Conservation</strong> — The protection of natural resources</li><li style='margin-bottom:8px;'><strong>Pollution</strong> — Harmful substances in the environment</li></ul>",
        "quiz": [
          {
            "q": "What does \"Pollution\" mean?",
            "options": [
              "Able to be naturally replenished",
              "The protection of natural resources",
              "A community of living things and their environment",
              "Harmful substances in the environment"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Conservation\" mean?",
            "options": [
              "A community of living things and their environment",
              "Able to be naturally replenished",
              "The protection of natural resources",
              "Meeting needs without harming the future"
            ],
            "answer": 2
          },
          {
            "q": "What does \"Renewable\" mean?",
            "options": [
              "Able to be naturally replenished",
              "A community of living things and their environment",
              "Harmful substances in the environment",
              "A substance released into the air"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Media",
        "preview": "Learn 6 words about media.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Bias</strong> — An unfair preference for one side</li><li style='margin-bottom:8px;'><strong>Headline</strong> — The title of a news article</li><li style='margin-bottom:8px;'><strong>Credible</strong> — Believable and trustworthy</li><li style='margin-bottom:8px;'><strong>Outlet</strong> — A source that publishes news</li><li style='margin-bottom:8px;'><strong>Coverage</strong> — How much a topic is reported</li><li style='margin-bottom:8px;'><strong>Journalist</strong> — A person who writes news reports</li></ul>",
        "quiz": [
          {
            "q": "What does \"Headline\" mean?",
            "options": [
              "How much a topic is reported",
              "The title of a news article",
              "A source that publishes news",
              "An unfair preference for one side"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Credible\" mean?",
            "options": [
              "The title of a news article",
              "An unfair preference for one side",
              "A person who writes news reports",
              "Believable and trustworthy"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Coverage\" mean?",
            "options": [
              "The title of a news article",
              "A source that publishes news",
              "How much a topic is reported",
              "A person who writes news reports"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Academia",
        "preview": "Learn 6 words about academia.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Curriculum</strong> — The subjects taught in a course</li><li style='margin-bottom:8px;'><strong>Thesis</strong> — A long piece of academic research</li><li style='margin-bottom:8px;'><strong>Citation</strong> — A reference to a source</li><li style='margin-bottom:8px;'><strong>Faculty</strong> — The teaching staff of a school</li><li style='margin-bottom:8px;'><strong>Peer-reviewed</strong> — Checked by other experts before publishing</li><li style='margin-bottom:8px;'><strong>Scholarship</strong> — Money awarded to support study</li></ul>",
        "quiz": [
          {
            "q": "What does \"Faculty\" mean?",
            "options": [
              "The teaching staff of a school",
              "A long piece of academic research",
              "Checked by other experts before publishing",
              "Money awarded to support study"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Peer-reviewed\" mean?",
            "options": [
              "A reference to a source",
              "The teaching staff of a school",
              "Checked by other experts before publishing",
              "Money awarded to support study"
            ],
            "answer": 2
          },
          {
            "q": "What does \"Curriculum\" mean?",
            "options": [
              "The subjects taught in a course",
              "A reference to a source",
              "Checked by other experts before publishing",
              "The teaching staff of a school"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Idioms",
        "preview": "Learn 6 words about idioms.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Break the ice</strong> — To start a conversation in a relaxed way</li><li style='margin-bottom:8px;'><strong>Under the weather</strong> — Feeling slightly ill</li><li style='margin-bottom:8px;'><strong>Hit the books</strong> — To study hard</li><li style='margin-bottom:8px;'><strong>Piece of cake</strong> — Something very easy</li><li style='margin-bottom:8px;'><strong>On the ball</strong> — Alert and efficient</li><li style='margin-bottom:8px;'><strong>Costs an arm and a leg</strong> — Very expensive</li></ul>",
        "quiz": [
          {
            "q": "What does \"Costs an arm and a leg\" mean?",
            "options": [
              "To study hard",
              "Very expensive",
              "Feeling slightly ill",
              "Something very easy"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Piece of cake\" mean?",
            "options": [
              "Alert and efficient",
              "Very expensive",
              "To start a conversation in a relaxed way",
              "Something very easy"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Under the weather\" mean?",
            "options": [
              "Something very easy",
              "To study hard",
              "Feeling slightly ill",
              "Alert and efficient"
            ],
            "answer": 2
          }
        ]
      },
      {
        "title": "Technology",
        "preview": "Learn 6 words about technology.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Algorithm</strong> — A set of rules for solving a problem</li><li style='margin-bottom:8px;'><strong>Interface</strong> — The way a user interacts with a system</li><li style='margin-bottom:8px;'><strong>Encryption</strong> — Converting data into a secure code</li><li style='margin-bottom:8px;'><strong>Bandwidth</strong> — The data transfer capacity of a network</li><li style='margin-bottom:8px;'><strong>Innovation</strong> — A new idea or method</li><li style='margin-bottom:8px;'><strong>Automation</strong> — Using technology to do tasks without humans</li></ul>",
        "quiz": [
          {
            "q": "What does \"Encryption\" mean?",
            "options": [
              "The data transfer capacity of a network",
              "A set of rules for solving a problem",
              "A new idea or method",
              "Converting data into a secure code"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Bandwidth\" mean?",
            "options": [
              "The way a user interacts with a system",
              "The data transfer capacity of a network",
              "Using technology to do tasks without humans",
              "Converting data into a secure code"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Automation\" mean?",
            "options": [
              "The way a user interacts with a system",
              "Using technology to do tasks without humans",
              "A new idea or method",
              "A set of rules for solving a problem"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Culture",
        "preview": "Learn 6 words about culture.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Custom</strong> — A traditional way of behaving</li><li style='margin-bottom:8px;'><strong>Heritage</strong> — Traditions passed down through generations</li><li style='margin-bottom:8px;'><strong>Etiquette</strong> — Accepted rules of polite behavior</li><li style='margin-bottom:8px;'><strong>Diversity</strong> — A range of different types of people</li><li style='margin-bottom:8px;'><strong>Norm</strong> — A standard or expected way of behaving</li><li style='margin-bottom:8px;'><strong>Tradition</strong> — A long-established custom</li></ul>",
        "quiz": [
          {
            "q": "What does \"Heritage\" mean?",
            "options": [
              "Traditions passed down through generations",
              "A traditional way of behaving",
              "Accepted rules of polite behavior",
              "A standard or expected way of behaving"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Tradition\" mean?",
            "options": [
              "A traditional way of behaving",
              "A long-established custom",
              "A standard or expected way of behaving",
              "A range of different types of people"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Diversity\" mean?",
            "options": [
              "A range of different types of people",
              "Traditions passed down through generations",
              "Accepted rules of polite behavior",
              "A standard or expected way of behaving"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Persuasion",
        "preview": "Learn 6 words about persuasion.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Rhetoric</strong> — The art of effective speaking or writing</li><li style='margin-bottom:8px;'><strong>Compelling</strong> — Convincing and impressive</li><li style='margin-bottom:8px;'><strong>Advocate</strong> — To publicly support an idea</li><li style='margin-bottom:8px;'><strong>Testimony</strong> — A formal statement of evidence</li><li style='margin-bottom:8px;'><strong>Credibility</strong> — The quality of being trusted</li><li style='margin-bottom:8px;'><strong>Appeal</strong> — To make a request in an earnest way</li></ul>",
        "quiz": [
          {
            "q": "What does \"Rhetoric\" mean?",
            "options": [
              "To make a request in an earnest way",
              "Convincing and impressive",
              "To publicly support an idea",
              "The art of effective speaking or writing"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Advocate\" mean?",
            "options": [
              "To make a request in an earnest way",
              "The art of effective speaking or writing",
              "A formal statement of evidence",
              "To publicly support an idea"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Appeal\" mean?",
            "options": [
              "To publicly support an idea",
              "A formal statement of evidence",
              "The quality of being trusted",
              "To make a request in an earnest way"
            ],
            "answer": 3
          }
        ]
      },
      {
        "title": "Workplace",
        "preview": "Learn 6 words about workplace.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Performance</strong> — How well someone does their job</li><li style='margin-bottom:8px;'><strong>Feedback</strong> — Information about how someone is doing</li><li style='margin-bottom:8px;'><strong>Efficiency</strong> — Doing something well with minimal waste</li><li style='margin-bottom:8px;'><strong>Collaboration</strong> — Working together to achieve something</li><li style='margin-bottom:8px;'><strong>Accountability</strong> — Being responsible for one's actions</li><li style='margin-bottom:8px;'><strong>Initiative</strong> — The ability to act independently</li></ul>",
        "quiz": [
          {
            "q": "What does \"Collaboration\" mean?",
            "options": [
              "The ability to act independently",
              "Being responsible for one's actions",
              "Information about how someone is doing",
              "Working together to achieve something"
            ],
            "answer": 3
          },
          {
            "q": "What does \"Feedback\" mean?",
            "options": [
              "Information about how someone is doing",
              "Working together to achieve something",
              "Doing something well with minimal waste",
              "How well someone does their job"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Efficiency\" mean?",
            "options": [
              "Doing something well with minimal waste",
              "Information about how someone is doing",
              "The ability to act independently",
              "Being responsible for one's actions"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Law",
        "preview": "Learn 6 words about law.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Clause</strong> — A section within a legal document</li><li style='margin-bottom:8px;'><strong>Liability</strong> — Legal responsibility for something</li><li style='margin-bottom:8px;'><strong>Litigation</strong> — The process of taking legal action</li><li style='margin-bottom:8px;'><strong>Statute</strong> — A written law passed by a government</li><li style='margin-bottom:8px;'><strong>Breach</strong> — A failure to follow a rule or contract</li><li style='margin-bottom:8px;'><strong>Jurisdiction</strong> — The authority to apply the law</li></ul>",
        "quiz": [
          {
            "q": "What does \"Liability\" mean?",
            "options": [
              "A written law passed by a government",
              "The authority to apply the law",
              "Legal responsibility for something",
              "The process of taking legal action"
            ],
            "answer": 2
          },
          {
            "q": "What does \"Statute\" mean?",
            "options": [
              "A written law passed by a government",
              "The process of taking legal action",
              "The authority to apply the law",
              "A section within a legal document"
            ],
            "answer": 0
          },
          {
            "q": "What does \"Jurisdiction\" mean?",
            "options": [
              "A written law passed by a government",
              "The authority to apply the law",
              "The process of taking legal action",
              "A failure to follow a rule or contract"
            ],
            "answer": 1
          }
        ]
      },
      {
        "title": "Philosophy",
        "preview": "Learn 6 words about philosophy.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Ethics</strong> — Principles concerning right and wrong</li><li style='margin-bottom:8px;'><strong>Rationale</strong> — The reasoning behind a decision</li><li style='margin-bottom:8px;'><strong>Paradox</strong> — A statement that seems contradictory</li><li style='margin-bottom:8px;'><strong>Perception</strong> — The way something is understood</li><li style='margin-bottom:8px;'><strong>Existence</strong> — The state of being real or alive</li><li style='margin-bottom:8px;'><strong>Consciousness</strong> — Awareness of one's own existence</li></ul>",
        "quiz": [
          {
            "q": "What does \"Consciousness\" mean?",
            "options": [
              "The reasoning behind a decision",
              "Principles concerning right and wrong",
              "Awareness of one's own existence",
              "The state of being real or alive"
            ],
            "answer": 2
          },
          {
            "q": "What does \"Perception\" mean?",
            "options": [
              "A statement that seems contradictory",
              "The way something is understood",
              "Awareness of one's own existence",
              "The reasoning behind a decision"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Existence\" mean?",
            "options": [
              "The state of being real or alive",
              "A statement that seems contradictory",
              "The way something is understood",
              "The reasoning behind a decision"
            ],
            "answer": 0
          }
        ]
      },
      {
        "title": "Public Speaking",
        "preview": "Learn 6 words about public speaking.",
        "body": "<ul style='margin:0;padding-left:18px;'><li style='margin-bottom:8px;'><strong>Articulate</strong> — Able to express ideas clearly</li><li style='margin-bottom:8px;'><strong>Audience</strong> — The people watching or listening</li><li style='margin-bottom:8px;'><strong>Rhetorical question</strong> — A question asked for effect, not an answer</li><li style='margin-bottom:8px;'><strong>Anecdote</strong> — A short story used to illustrate a point</li><li style='margin-bottom:8px;'><strong>Pause</strong> — A brief stop while speaking</li><li style='margin-bottom:8px;'><strong>Emphasis</strong> — Special importance given to something</li></ul>",
        "quiz": [
          {
            "q": "What does \"Articulate\" mean?",
            "options": [
              "The people watching or listening",
              "Able to express ideas clearly",
              "Special importance given to something",
              "A question asked for effect, not an answer"
            ],
            "answer": 1
          },
          {
            "q": "What does \"Audience\" mean?",
            "options": [
              "Able to express ideas clearly",
              "A short story used to illustrate a point",
              "The people watching or listening",
              "Special importance given to something"
            ],
            "answer": 2
          },
          {
            "q": "What does \"Rhetorical question\" mean?",
            "options": [
              "The people watching or listening",
              "A question asked for effect, not an answer",
              "A brief stop while speaking",
              "A short story used to illustrate a point"
            ],
            "answer": 1
          }
        ]
      }
    ]
  }
];
