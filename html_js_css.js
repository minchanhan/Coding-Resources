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
    },
    {
        id: 2,
        name: "Html.com",
        link: "https://html.com/",
        badgetype: "badge1",
        language: "HTML",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "This is an amazing tutorial that covers everything you need to know about HTML in a condensed, organized way! \
            It starts with a brief history of HTML, sets you up with a nice text editor, then teaches you all about the construction of \
            an HTML page with all the basic elements you need to know! This is highly recommended!",
        image_link: "res/htmlcssjs/htmlcom.png"
    },
    {
        id: 3,
        name: "Tutorialspoint",
        link: "https://www.tutorialspoint.com/html/index.htm",
        badgetype: "badge1",
        language: "HTML",
        resourcetype: "Tutorial",
        time: "Long",
        description:
            "Tutorialspoint offers an extensive tutorial that starts from the beginning and organizes everything \
            you need to know about HTML with great visual examples! It's also great for when you want to go back and reference syntax, \
            or refresh your memory on a certain topic, all listed out for you in the sidebar.",
        image_link: "res/htmlcssjs/tutorialspoint.jpg"
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
    },
    {
        id: 2,
        name: "CSS-Tricks",
        link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        badgetype: "badge2",
        language: "CSS",
        resourcetype: "Reference",
        time: "Short",
        description:
            "This resource isn't for teaching you CSS, but it offers a great guide on using Flexbox, a super useful and popular \
            tool used in CSS to organize your layout!",
        image_link: "res/htmlcssjs/csstricks.jpeg"
    }  
];

let js = [
    {
        id: 1,
        name: "Javascript.info",
        link: "https://javascript.info/",
        badgetype: "badge3",
        language: "JavaScript",
        resourcetype: "Tutorial",
        time: "Very Long",
        description:
            "If you could choose only one Javascript resource to have, this would be it. It's as it says in their description, \
            it covers everything from the basics to advanced topics with simple, but detailed explanations.",
        image_link: "res/htmlcssjs/javascriptinfo.png"
    },
    {
        id: 2,
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