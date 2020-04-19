let cpp = [
    {
        id: 1,
        name: "W3Schools",
        link: "https://www.w3schools.com/cpp/default.asp",
        language: "C++",
        description:
            "Interactive Tutorial, Beginner Friendly",
        image_link: "res/preview_pic.png",
        rating: "User Rating To Be Added"
    },
    {
        id: 2,
        name: "Learn CPP",
        link: "link",
        language: "C++",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "User Rating To Be Added"
    },
    {
        id: 3,
        name: "Web 3",
        link: "link",
        language: "C++",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "User Rating To Be Added"
    },
    {
        id: 3,
        name: "Web 4",
        link: "link",
        language: "C++",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "User Rating To Be Added"
    },
    {
        id: 3,
        name: "Web 5",
        link: "link",
        language: "C++",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "User Rating To Be Added"
    }
];

let python = [
    {
        id: 1,
        name: "Web 1",
        link: "link",
        language: "Python",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "User Rating To Be Added"
    },
    {
        id: 2,
        name: "Web 2",
        link: "link",
        language: "Python",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "User Rating To Be Added"
    }
];

let languagecards = [["C++", cpp], ["Python", python]];

const replaceHTMLlanguagecards = () => {
    var source = document.getElementById("languagecardtemplate").innerHTML;
    var template = Handlebars.compile(source);
    var context = { languages: languagecards };
    var html = template(context);
    document.getElementById("languagecards").innerHTML = html;
};

replaceHTMLlanguagecards();
