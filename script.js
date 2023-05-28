// Array of no_sentences
var no_sentences = [
 // "Click here to watch a video: <a href='https://youtube.com/clip/UgkxjmlEXIIoUCfjM0SCe4Q1l5iqE98w7XEt'>Video Link</a>"/*humdum mere maan bhi jao khena mere pyaar ka*/,
 "https://www.youtube.com/embed/_iktURk0X-A?start=43&end=53&autoplay=1", "Man ja na please, heart ki CPU overheat ho jayegi teri pyaar ke liye! ",
  "Roz tera intezar karte karte, RAM aur ROM dono full ho gaye hai!",
  "Tere pyaar ke chakkar mein, main toh processor ka fan bhi slow ho gaya!",
  "Apna answer de de, warna antivirus update karne lagunga!",
  "Love ka code toh tune hi likha hai, ab execute karde!",
  "Mujhe tera 'yes' chahiye, nahi toh default value 'pyaar ke pagal' set kar dunga!",
  "Tu mere pyar ko reject karegi? Error 404: Love not found!",
  "Tere pyaar ka download link toh de, phir teri baatein offline mode mein sununga!",
  "Dil ki battery 1%bachi hai, tu 'Yes' bolde warna dil shutdown ho jayega!",
  "Mere pyaar ka software update aa gaya hai, tu 'Yes' kar de varna compatibility issue ho jayega!",
  "Mere pyaar ko accept karle, varna main tujhe 'Recycle Bin' mein daal dunga!",
  "Bhagwan ke liye maanja !!!!","Chee chee Sara mood kharab kar dia",
  "Tere haan bolne se yeh duniya thodi na ruk jayegi!","https://www.youtube.com/embed/PmZv_dB1U9M?start=63&end=72&autoplay=1",
];
var yes_sentences =["Ae dost, dil ki dhadkan tez ho gayi hai! Khuda ka shukr hai, wo meri ho gayi hai!",
"Aaj ki raat, suhani raat ho gayi hai! Dil mein utha hai jo pyaar ka saaz, wo meri ho gayi hai!","Ae dil hai mushkil, magar ab sab kuch aasan ho gaya!",
"yes, yes yes yes yes!!!!","https://img.freepik.com/free-vector/cute-rabbit-playing-skateboard-wearing-glasses-cartoon-vector-icon-illustration-animal-sport_138676-4698.jpg?w=826&t=st=1684092259~exp=1684092859~hmac=5adceabb05c8ee4a3e1b435de7ef3167abab412fb99fb8f625e2b5097f78e0c8",

]
var backgroundUrls = [
  "https://img.freepik.com/free-vector/cute-rabbit-playing-skateboard-wearing-glasses-cartoon-vector-icon-illustration-animal-sport_138676-4698.jpg?w=826&t=st=1684092259~exp=1684092859~hmac=5adceabb05c8ee4a3e1b435de7ef3167abab412fb99fb8f625e2b5097f78e0c8",
  "https://img.freepik.com/free-vector/cute-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4474.jpg?w=826&t=st=1684092288~exp=1684092888~hmac=b61be1a944fa0afc124a9a39cfe386968426a5633fcc928c51a1afeeb5818f0c",
  "https://img.freepik.com/free-vector/cute-cat-bread-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4224.jpg?w=826&t=st=1684092293~exp=1684092893~hmac=5be19fdb3add4767f13b7971d14b19d307a29dff1b0c3625dbc86b849b9bbac4",
"https://img.freepik.com/free-vector/happy-astronaut-jumping-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3725.jpg?w=826&t=st=1684092296~exp=1684092896~hmac=5c5f002d5eef4414c284247ead7cab5b0e6b0a4f2bab8ea573ac923fbf9ea34c",
"https://img.freepik.com/free-vector/cute-astronaut-playing-rocket-kite-cartoon_138676-2525.jpg?w=826&t=st=1684092302~exp=1684092902~hmac=e0ac2509123fd5f95dbb3be20b19de5708f3f1bf3f3302a6464f98b1ee0a15a1",
"https://img.freepik.com/free-vector/cute-astronaut-riding-rocket-waving-hand-cartoon-icon-illustration-science-technology-icon-concept_138676-2130.jpg?w=826&t=st=1684092303~exp=1684092903~hmac=8494c422fb228c7c2149c82bb0aca17910b021dba251abfcbed1fd8c116783af",
  // Add more image URLs as needed
];

var randomIndex = Math.floor(Math.random() * backgroundUrls.length);
var randomBackground = backgroundUrls[randomIndex];

document.documentElement.style.setProperty('--random-background', 'url(' + randomBackground + ')');


// Get references to the buttons and message area
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var messageArea = document.getElementById("messageArea");

// Event handler for the button click
function buttonClick(event) {
  if (event.target.id === "button1") {
    function playRandomContent(){
    var randomIndex = Math.floor(Math.random() * yes_sentences.length);
    var sentence = yes_sentences[randomIndex];
     if (sentence.startsWith('https:')) {
      videoArea.innerHTML = `<iframe src="${sentence}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
    } else {
    videoArea.textContent = sentence;
    //messageArea.textContent = sentence; //www.youtube.com/embed/
    }
   }
    playRandomContent();
  } else {
    var randomIndex = Math.floor(Math.random() * no_sentences.length);
    var sentence = no_sentences[randomIndex];
    if (sentence.startsWith('https:')) {
      videoArea.innerHTML = `<iframe  src="${sentence}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
    } else {
     videoArea.textContent = sentence;
    //messageArea.textContent = sentence;
    }
  }
  setTimeout(function() {
    videoArea.style.display = "flex"; // Show the video area after a delay of 1 second
  },);
}

// Add click event listeners to the buttons
button1.addEventListener("click", buttonClick);
button2.addEventListener("click", buttonClick);
// Array of video URLs
/*var videos = [
  "https:VIDEO_ID_1",
  "https:VIDEO_ID_2",
  "https:VIDEO_ID_3",
  // Add more video URLs as needed
];

// Function to play a random video
function playRandomVideo() {
  var randomIndex = Math.floor(Math.random() * videos.length);
  var videoUrl = videos[randomIndex];

  var videoArea = document.getElementById("videoArea");
  videoArea.innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
}

// Play a random video when the page loads
playRandomVideo();*/
/*// Array of video URLs and text strings
var contentArray = [
  'https:VIDEO_ID_1',
  'Text 1',
  'https:VIDEO_ID_2',
  'Text 2',
  // Add more video URLs and text strings as needed
];

// Function to play a random video or display a random text
function playRandomContent() {
  var randomIndex = Math.floor(Math.random() * contentArray.length);
  var content = contentArray[randomIndex];

  var videoArea = document.getElementById("videoArea");

  if (content.startsWith('https:')) {
    videoArea.innerHTML = `<iframe width="560" height="315" src="${content}" frameborder="0" allowfullscreen></iframe>`;
  } else {
    videoArea.textContent = content;
  }
}

// Play a random video or display a random text when the page loads
playRandomContent();
*/
