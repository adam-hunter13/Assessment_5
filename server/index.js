const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  console.log("Button Clicked")
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  console.log("Button Clicked")
  const fortunes = ["Don’t just think, act!",
					 "It is better to deal with problems before they arise.",
					 "Pennies from heaven find their way to your doorstep this year!",
           "Say hello to others. You will have a happier day.",
           "Swimming is easy. Stay floating is hard.",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/restaurant", (req, res) => {
  console.log("Button Clicked")
  const restaurants = ["Maddox Ranch House",
					 "Flemings Prime Steakhouse & Wine Bar",
					 "Olive Garden",
           "Outback Steakhouse",
           "Tucanos",
           "Teppanyaki",
           "la Jolla Groves",
           "Log Haven",
           "Riverhorse on Main",
           "Five Alls",
           "The Tree Room",
           "Chilis",
           "Buffalo Wild Wings",
  ];

  // choose random restaurant
  let randomIndex = Math.floor(Math.random() * restaurants.length);
  let randomRestaurant = restaurants[randomIndex];

  res.status(200).send(randomRestaurant);
  
});

app.get("/api/vacations", (req, res) => {
  console.log("Button Clicked")
  const locations = ["South Island, New Zealand",
					 "Paris, France",
					 "Bora Bora, French Polynesia",
           "Maui, Hawaii, USA",
           "Tahiti",
           "London, UK",
           "Rome, Italy",
           "Phuket, Thailand",
           "Tokyo, Japan",
           "Barcelona, Spain",
           "Maldives",
           "Banff, Alberta Canada",
           "New York City, USA",
           "Bali, Indonesia",
           "Sydney, Australia",
           "Florance, Italy",
           "Dubai, United Arab Emirates",
           "Santorini, Greece",
           "Cancun, Mexico",
           "Amalfi Coast, Italy",
  ];

  // choose random vacation
  let randomIndex = Math.floor(Math.random() * locations.length);
  let randomVacation = locations[randomIndex];

  res.status(200).send(randomVacation);
  
});

app.get("/api/quote", (req, res) => {
  console.log("Button Clicked")
  const quotes = ["Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way. – Michael Scott, Season 5, The Duel",
					 "I talk a lot, so I’ve learned to tune myself out. – Kelly Kapoor, Season 7, Counseling",
					 "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me. – Michael Scott, Season 2, The Fight",
           "Im not superstitious, but I am a little stitious. – Michael Scott, Season 4, Fun Run",
           "If I don’t have some cake soon, I might die. – Stanley Hudson, Season 4, Survivor Man",
           "The worst thing about prison was the dementors. – Michael (Prison Mike Scott), Season 3, The Convict",
           "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there? – Michael Scott, Season 5, Stress Relief",
           "Identity theft is not a joke, Jim! Millions of families suffer every year. – Dwight Schrute, Season 3, Product Recal",
           "Today, smoking is going to save lives. – Dwight Schrute, Season 5, Stress Relief",
           "I am running away from my responsibilities. And it feels good. – Michael Scott, Season 4, Money",
           "I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted. – Kevin Malone, Season 3, Beach Games",
           "Sometimes the clothes at Gap Kids are too flashy, so I’m forced to go to the American Girl store and order clothes for large colonial dolls. – Angela Martin, Season 3, Women’s Appreciation",
           "If I were buying my coffin, I would get one with thicker walls so you couldn’t hear the other dead people. – Dwight Schrute, Season 2, Office Olympics",
           "And I knew exactly what to do. But in a much more real sense, I had no idea what to do. – Michael Scott, Season 5, Stress Relief",
           "There’s a lot of beauty in ordinary things. Isn’t that kind of the point? – Pam Beesly, Season 9, Finale",
           "You get to BS-ing: brainstorming —Leslie Knope, Season 6, Anniversaries",
           "Im like an elephant, okay? If I walk into a room, it’s like, okay, he’s in there. —Tom Haverford, Season 3, The Fight",
           "Do you think a depressed person could make this? No. —Ben Wyatt, Season 4, The Comeback Kid",
           "Well, I am sorry. That I attended a public event. —Ron Swanson, Season 7, 2017",
           "I didnt think you were gonna help.” “I still might not.” —Leslie Knope and April Ludgate, Season 2, Freddy Spaghetti",
           "We need to remember whats important in life: friends, waffles, work. Or waffles, friends, work. Doesn’t matter, but work is third. —Leslie Knope, Season 3, The Fight",
           "I have several men in rotation. Ones waiting for me in the car. Dont worry, I rolled the window down for him. —Donna Meagle, Season 4, Operation",
           "I tried to make ramen in the coffee pot and I broke everything. —Andy Dwyer, Season 4, The Comeback Kid",
           "One time my refrigerator stopped working. I didnt know what to do. I just moved. —Tom Haverford, Season 5, Article 2",
           "And you can trust me. Because I don’t care enough about you to lie. —Jennifer Barkley, Season 6, Second Chunce",
           "Windows are the eyes to the house. —Andy Dwyer, Season 4, The Comeback Kid",
           "I want to open up my own club one day, maybe call it something like Club a Dub Dub, or the Club Marine. Sort of a submarine-themed club. Or Tom’s Bistro. The word ‘bistro’ is classy as shit. —Tom Haverford, Season 2, Woman of the Year",
           "Treat yo’ self. —Tom Haverford & Donna Meagle, Season 4, Pawnee Rangers",
           "Sarge, with all due respect, I am gonna completely ignore everything you just said. – Jake Peralta, Season Two, Hostages",
           "The English language can not fully capture the depth and complexity of my thoughts, so I’m incorporating emojis into my speech to better express myself. Winky face. – Gina Linetti, Season One, Charges and Specs",
           "A place where everybody knows your name is hell. You’re describing hell. – Rosa Diaz, Season Six, A Tale of Two Bandits",
           "Cool, cool, cool, cool, cool. No doubt, no doubt, no doubt. – Jake Peralta, practically every episode",
           "If I die, turn my tweets into a book. – Gina Linetti, Season Three, Halloween III",
           "I asked them if they wanted to embarrass you, and they instantly said yes. – Captain Holt, Season Two, Halloween II",
           "Great, I’d like your $8-est bottle of wine, please. – Jake Peralta, Season One, The Party",
           "Captain Wuntch. Good to see you. But if you’re here, who’s guarding Hades? – Captain Holt, Season Two, Chocolate Milk",
           "Im playing Kwazy Cupcakes, Im hydrated as hell, and Im listening to Sheryl Crow. Ive got my own party going on. – Terry Jeffords, Season Two, Beach House",
           "Anyone over the age of six celebrating a birthday should go to hell. – Rosa Diaz, Season Two, Johnny and Dora",
           "Jake, piece of advice: just give up. Its the Boyle way. Its why our family crest is a white flag. – Charles Boyle, Season Five, NutriBoom",

  ];

  // choose random quote
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];

  res.status(200).send(randomQuote);
  
});


app.listen(4000, () => console.log("Server running on 4000"));






