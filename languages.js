let cpp = [
    {
        id: 1,
        name: "Web 1",
        link: "link",
        language: "C++",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "5"
    },
    {
        id: 2,
        name: "Web 2",
        link: "link",
        language: "C++",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "4"
    },
    {
        id: 3,
        name: "Web 3",
        link: "link",
        language: "C++",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "3"
    },
    {
        id: 3,
        name: "Web 4",
        link: "link",
        language: "C++",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "3"
    },
    {
        id: 3,
        name: "Web 5",
        link: "link",
        language: "C++",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "2"
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
        rating: "5"
    },
    {
        id: 2,
        name: "Web 2",
        link: "link",
        language: "Python",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "4"
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
