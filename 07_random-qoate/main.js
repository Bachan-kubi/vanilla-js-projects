const quotes = [
  "God’s love never ends and His mercy is new every morning.",

  "The Lord is my shepherd; He gives me everything I need.",

  "Be strong and courageous, for God is with you wherever you go.",

  "Trust in the Lord with all your heart, and don’t lean on your own understanding.",

  "For God so loved the world that He gave His only Son.",

  "Ask and it will be given to you; seek and you will find.",

  "The truth will set you free.",

  "The Lord is close to the brokenhearted.",

  "I can do all things through Christ who strengthens me.",

  "Love is patient, love is kind.",

  "God works all things together for the good of those who love Him.",
  ,
  "Be still and know that I am God.",

  "Do not be anxious about anything, but pray about everything.",

  "The joy of the Lord is your strength.",

  "Let everything that breathes praise the Lord.",

  "The Lord is my light and my salvation—whom shall I fear?",

  "God is our refuge and strength, an ever-present help in trouble.",

  "All have sinned and fall short of God’s glory.",

  "While we were still sinners, Christ died for us.",

  "The wages of sin is death, but God’s gift is eternal life.",

  "If anyone is in Christ, they are a new creation.",

  "The Lord bless you and keep you.",

  "Give thanks in all circumstances.",

  "Rejoice always, pray continually, give thanks in everything.",

  "We walk by faith, not by sight.",

  "God is love.",

  "Love your neighbor as yourself.",

  "Do to others what you want them to do to you.",

  "You are the light of the world.",

  "A gentle answer turns away anger.",

  "Children are a gift from the Lord.",

  "Train up a child in the way they should go.",

  "Honor your father and mother.",

  "Blessed are the peacemakers.",

  "Blessed are the pure in heart, for they will see God.",

  "Blessed are those who hunger for righteousness, for they will be filled.",

  "Seek first God’s kingdom and righteousness.",

  "Don’t store up treasures on earth, but in heaven.",

  "Where your treasure is, your heart will be also.",

  "No one can serve two masters.",

  "Don’t worry about tomorrow, for tomorrow will worry about itself.",

  "Come to me, all who are weary, and I will give you rest.",

  "Take my yoke upon you and learn from me.",

  "Blessed are those who mourn, for they will be comforted.",

  "You are the salt of the earth.",

  "Let your light shine before others.",

  "Whoever exalts himself will be humbled, but whoever humbles himself will be exalted.",

  "Man shall not live on bread alone, but on God’s word.",

  "The harvest is plentiful but the workers are few.",

  "The Spirit helps us in our weakness.",

  "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.",

  "Do not grow weary in doing good.",

  "Bear one another’s burdens.",

  "Encourage one another and build each other up.",
  ,
  "Pray without ceasing.",

  "Clothe yourselves with compassion, kindness, humility, gentleness, and patience.",

  "Let the peace of Christ rule in your hearts.",

  "Let the word of Christ dwell in you richly.",

  "Do everything in love.",

  "God’s grace is sufficient for you.",

  "His power is made perfect in weakness.",

  "If God is for us, who can be against us?",
  "Nothing can separate us from the love of God.",

  "Faith comes from hearing, and hearing through God’s word.",

  "Everyone who calls on the Lord will be saved.",

  "The Lord is faithful; He will strengthen and protect you.",

  "Do not quench the Spirit.",

  "Do not despise small beginnings.",

  "God has not given us a spirit of fear, but of power, love, and self-control.",

  "Fight the good fight of faith.",

  "Godliness with contentment is great gain.",

  "The love of money is the root of all kinds of evil.",

  "We brought nothing into the world, and we can take nothing out of it.",

  "Fix your eyes on Jesus, the pioneer and finisher of faith.",

  "Jesus Christ is the same yesterday, today, and forever.",

  "Do not neglect to show hospitality to strangers.",

  "Faith without works is dead.",

  "Draw near to God and He will draw near to you.",

  "Humble yourselves before the Lord, and He will lift you up.",

  "Be doers of the word, not just hearers.",

  "Every good and perfect gift is from above.",

  "The prayer of a righteous person is powerful and effective.",

  "Be holy, because God is holy.",

  "Cast all your cares on Him, for He cares for you.",
  "Be sober-minded and watchful; your enemy seeks to devour.",

  "Resist the devil, and he will flee from you.",

  "God is light; in Him there is no darkness.",

  "Perfect love drives out fear.",

  "Confess your sins, and God is faithful to forgive.",

  "The Lord is my strength and my song.",

  "Those who hope in the Lord will renew their strength.",

  "They will soar on wings like eagles.",

  "The grass withers, the flower fades, but Gods word stands forever.",

  "Call to me and I will answer you.",

  "I know the plans I have for you, says the Lord.",

  "Plans to prosper you and not to harm you.",

  "Plans to give you hope and a future.",

  "You will seek me and find me when you seek with all your heart.",

  "God’s word is a lamp to my feet and a light to my path.",

  "This is the day the Lord has made; let us rejoice and be glad.",
];
const displayQoates = document.getElementById("display-qoate");
const qoateBtn = document.getElementById("qoate-btn");

function getRandomQoate() {
  const qoateIndex = Math.floor(Math.random() * quotes.length);
  return quotes[qoateIndex];
}
function displayQ() {
  displayQoates.textContent = getRandomQoate();
}
setInterval(displayQ, 3000);
qoateBtn.addEventListener("click", displayQ);
displayQ();
