let cpp = [
    {
        id: 1,
        name: "W3Schools",
        link: "https://www.w3schools.com/cpp/default.asp",
        badgetype: "badge1",
        language: "C++",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "An amazing interactive tutorial, that is very beginnner friendly. It not only teaches you the \
            basics of C++, but it also equips you with beginner programmer knowledge.",
        image_link: "res/languages/cpp/w3schools.png",
        rating: "User Rating: *****"
    },
    {
        id: 2,
        name: "LearnCPP",
        link: "https://www.learncpp.com/",
        badgetype: "badge1",
        language: "C++",
        resourcetype: "Lessons",
        time: "Long",
        description:
            "A longer, more in-depth list of lessons that cover most parts about C++. \
            This includes simple lessons on beginner syntax to advanced lessons on Object Oriented Programming",
        image_link: "res/languages/cpp/learncpp_com.png",
        rating: "User Rating: *****"
    },
    {
        id: 3,
        name: "The Cherno",
        link: "https://www.youtube.com/watch?v=18c3MTX0PK0&list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb",
        badgetype: "badge1",
        language: "C++",
        resourcetype: "Playlist",
        time: "Long",
        description:
            "Covers the main parts of C++ in great detail, a slow pace which is nice for beginners. \
            This YouTuber also provides some bonus information within the playlist about where and what tools to use C++.",
        image_link: "res/languages/cpp/thecherno.png",
        rating: "User Rating: *****"
    },
    {
        id: 4,
        name: "Beginner's Book",
        link: "https://beginnersbook.com/2017/08/c-plus-plus-tutorial-for-beginners/",
        badgetype: "badge1",
        language: "C++",
        resourcetype: "Tutorial",
        time: "Short",
        description:
            "This is a great tutorial for if you want to just get going with C++! It keeps descriptions short\
            but concise, leaving you with a solid foundation to explore more C++ concepts and experiment!",
        image_link: "res/languages/cpp/beginnersbook.png",
        rating: "User Rating: ***** "
    }
];

let python = [
    {
        id: 1,
        name: "Python",
        link: "https://www.w3schools.com/python/default.asp",
        badgetype: "badge2",
        language: "Python",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "Website favourite W3Scools provides another interactive tutorial, that welcomes a variety of levels of programmers. \
            Beginners are welcome to use its interactive Python tutorial, while more advances programmers can enjoy the wide variety of \
            extra resources, from advanced methods to using Python with MySQL, MongoDB, and NumPy.",
        image_link: "res/languages/python/w3schools.png",
        rating: "User Rating: "
    },
    {
        id: 2,
        name: "University of Waterloo",
        link: "https://open.cs.uwaterloo.ca/python-from-scratch/",
        badgetype: "badge2",
        language: "Python",
        resourcetype: "Tutorial",
        time: "Short",
        description:
            "My school offers a great Python course that not only focues on Python specific concepts, but also \
            treats you like a true beginner coding for the FIRST time. This is a great FIRST look into programming.",
        image_link: "res/languages/python/uwaterloo.png",
        rating: "User Rating: "
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
