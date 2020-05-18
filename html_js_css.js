let html = [
    {
        id: 1,
        name: "W3Schools",
        link: "https://www.w3schools.com/html/",
        badgetype: "badge1",
        language: "HTML",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "W3Schools offers awesome resources and tutorials for learning the required programming skills for developing \
            websites! This tutorial offers a Try it Yourself box with each example so you can play around with HTML pages \
            without having to download anything!",
        image_link: "res/languages/cpp/w3schools.png"
    }
];

let css = [
    {
        id: 1,
        name: "W3Schools",
        link: "https://www.w3schools.com/css/",
        badgetype: "badge2",
        language: "CSS",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "This tutorial offers a Try it Yourself box with each example so you can play around with styling pages \
            without having to download anything!",
        image_link: "res/languages/cpp/w3schools.png"
    }
];

let js = [
    {
        id: 1,
        name: "W3Schools",
        link: "https://www.w3schools.com/js/",
        badgetype: "badge3",
        language: "JavaScript",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
        "This tutorial teaches you how to write functions with JavaScript in a convenient way! \
        The website features a Try it Yourself box with each function so you can get immediate feedback on your functions \
        without having to download anything! It also offers fill in the blank exercises for quick memorization and hands on experience.",
        image_link: "res/languages/cpp/w3schools.png"
    }
];

let web2_0cards = [["HTML", html], ["CSS", css], ["JavaScript", js]];

const replaceHTMLweb2_0devcards = () => {
    var source = document.getElementById("web2_0devcardtemplate").innerHTML;
    var template = Handlebars.compile(source);
    var context = { web2_0dev: web2_0cards };
    var html = template(context);
    document.getElementById("web2_0devcards").innerHTML = html;
};
  

replaceHTMLweb2_0devcards();