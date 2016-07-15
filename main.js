var index = 0;

var quotes = [
    "Architecture starts when you carefully put two bricks together. There it begins.",
    "Less is more.",
    "God is in the details.",
    "I don't want to be interesting. I want to be good.",
    "Architecture is the will of an epoch translated into space.",
    "I do not oppose form, but only form as a goal.",
    "It is not possible to go forward while looking back.",
    "Architecture depends on facts, but its real field of activity lies in the realm of the significance.",
    "True education is concerned not only with practical goals but also with values. Our aims assure us of our material life, our values make possible our spiritual life.",
    "A chair is a very difficult object. A skyscraper is almost easier. That is why Chippendale is famous.",
    "It is much better to have just one idea, and if the idea is clear, then you can fight for it. That is how you can get things done.",
    "We should attempt to bring nature, houses, and human beings together in a higher unity.",
    "Every How is carried by a What.",
    "Nothing can express the aim and meaning of our work better than the profound words of St. Augustine - 'Beauty is the splendor of Truth.'",
    "I thought a lot and I controlled my thoughts in my work - and I controlled my work through my thoughts.",
    "Not yesterday, not tomorrow, only today can be given form. Only this architecture creates."
];

function nextQuote() {
    index++;
    if (index === quotes.length)
        index = 0;
    document.getElementById("quotes").classList.add("pre-animation");
    setTimeout(function(){
        document.getElementById("quote").innerHTML = quotes[index];
        document.getElementById("quotes").classList.remove("pre-animation");
    },1000)
}

setInterval(function(){
    nextQuote();
}, 5000);