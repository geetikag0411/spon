var spons = [];
var sponsors_gallery = document.getElementById("sponsors_gallery");

// To add a speaker just add an element
// in the below spons and add its
// respective properties name, pic, about, etc
// (
    // and keep the element id as NULL
    // it will automatically generate it

    spons.push( 
    
        {
        name: "Westbridge Capital",
        pic: "images/sponsors/sponsor-img/westbridge.png",
        cat: "Title Sponsor",
        url: "https://www.westbridgecap.com/",
        id: ""
    },
    {
        name: "Deutsche Bank",
        pic: "images/sponsors/sponsor-img/deutsche.jpg",
        cat: "Sponsored By",
        url: "https://www.deutschebank.co.in/",
        id: ""
    },
    {
        name: "Binance",
        pic: "images/sponsors/sponsor-img/binance.jpg",
        cat: "Co powered by",
        url: "https://www.binance.com/en",
        id: ""
    },
    {
        name: "Dainik Jagran",
        pic: "images/sponsors/sponsor-img/dainik-jagran.jpg",
        cat: "In Association with",
        url: "https://www.jagran.com/",
        id: ""
    },
    {
        name: "Huddle Ventures",
        pic: "images/sponsors/sponsor-img/huddle.jpg",
        cat: "Upstart Partner",
        url: "https://huddle.work/",
        id: ""
    },
    
    {
        name: "yourFirstad",
        pic: "images/sponsors/sponsor-img/yourFirstad.jpg",
        cat: "Events Partner",
        url: "https://www.specialeinvest.com/",
        id: ""
        
    },{
        name: "Sponsor Bull",
        pic: "images/sponsors/sponsor-img/sponsor-bull.jpg",
        cat: "Outreach and Marketing Partner",
        url: "https://www.linkedin.com/company/sponsorbull/",
        id: ""
    },
    {
        name: "Eat My News",
        pic: "images/sponsors/sponsor-img/eat-my-news.jpg",
        cat: "Media Partner",
        url: "https://www.eatmy.news/",
        id: ""
    },
    {
        name: "Zoho",
        pic: "images/sponsors/sponsor-img/zoho.jpg",
        cat: "Workshop Partner",
        url: "https://www.zoho.com/creator/overview.html",
        id: ""
    },  
    {
        name: "Townscript",
    pic: "images/sponsors/sponsor-img/townscript.png",
    cat: "Ticketing Partner",
    url: "https://ec.linkedin.com/company/townscript",
    id: ""
    },
    {
        name: "Interview Buddy",
        pic: "images/sponsors/sponsor-img/interview.jpg",
        cat: "Gifting Partner",
        url: "https://interviewbuddy.in/",
        id: ""
    },
    
    {
        name: "Wiley",
        pic: "images/sponsors/sponsor-img/wiley.png",
        cat: "Knowledge Partner",
        url: "https://www.wiley.com/en-us",
        id: ""
    },
    {
        name: "iB Hubs",
        pic: "images/sponsors/sponsor-img/ib-hubs.jpg",
        cat: "Outreach Partner",
        url: "https://ibhubs.co/",
        id: ""
    },
    {
        name: "Dalal Street",
        pic: "images/sponsors/sponsor-img/logo_dalalstreet1.png",
        cat: "Trading Partner",
        url: "https://www.dsij.in/",
        id: ""
    },{
        name: "Digita Raven",
        pic: "images/sponsors/sponsor-img/Digital-raven.jpg",
        cat: "Campaign Partner",
        url: "https://www.digitalraven.in/",
        id: ""
    },{
        name: "Startupcity India Magazine",
        pic: "images/sponsors/sponsor-img/startup-city.jpg",
        cat: "Media Partners",
        url: "https://www.startupcityindia.com/",
        id: ""
    },{
        name: "Tricycle",
        pic: "images/sponsors/sponsor-img/tricycle.jpg",
        cat: "Startup Partner",
        url: "https://tricycle.co.in/",
        id: ""
    }, {
        name: "CEO Magazine",
        pic: "images/sponsors/sponsor-img/ceo-magazine.jpeg",
        cat: "Media Partners",
        url: "https://www.theceomagazine.com/",
        id: ""
    },
    {   
        name: "Speciale Invest",
        pic: "images/sponsors/sponsor-img/speciale-invest.jpg",
        cat: "Investing Partner",
        url: "https://www.specialeinvest.com/",
        id: ""
    }, {
        name: "Aglasem",
        pic: "images/sponsors/sponsor-img/aglasem.jpg",
        cat: "Media Partners",
        url: "https://aglasem.com/",
        id: ""
    },{
        name: "Startup India Magazine",
        pic: "images/sponsors/sponsor-img/startup-india.jpg",
        cat: "Media Partners",
        url: "https://www.startupindiamagazine.com/",
        id: ""
    },{
        name: "Airmeet",
        pic: "images/sponsors/sponsor-img/airmeet.jpg",
        cat: "Platform Partner",
        url: "https://www.airmeet.com/",
        id: ""
    },

);

//Assign id to each element of the speaker sponsay=> s0, s1, s2 etc
//and adds the respective speaker
for (var i = 0; i < spons.length; i++) {
    spons[i].id = "s" + i.toString();
    addSponsor(i);
}

function addSponsor(index) {
    var div = document.createElement("div");
    div.classList.add("flex-item");

    var a1 = document.createElement("a");
    if (spons[index].url) {
        a1.setAttribute("href", spons[index].url);
        a1.setAttribute("target", "_blank");
    } else {
        a1.setAttribute("href", "#");
    }

    var div11 = document.createElement("div");
    div11.classList.add("sponsor-pic-wrapper");

    var img111 = document.createElement("img");
    img111.classList.add("sponsor-pic");
    img111.setAttribute("src", spons[index].pic);

    var div2 = document.createElement("div");
    div2.classList.add("spon-cat");
    div2.innerText = spons[index].cat;

    div11.appendChild(img111);
    a1.appendChild(div11);

    div.appendChild(a1);
    div.appendChild(div2);

    sponsors_gallery.appendChild(div);
}

