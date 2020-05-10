let reactjs = [
    {
        id: 1,
        name: "ReactJS",
        link: "https://reactjs.org/docs/getting-started.html#try-react",
        badgetype: "badge1",
        language: "ReactJS",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "React's official website provides a wide variety of ways to learn ReactJS. It offers to teach you how to \
            \"add React to an HTML page in one minute\", create a new React App, and more!",
        image_link: "res/libs/reactjs.png"
    }
];

let libscards = [["React JS", reactjs]];

const replaceHTMLlibsdevcards = () => {
    var source = document.getElementById("libsdevcardtemplate").innerHTML;
    var template = Handlebars.compile(source);
    var context = { libsdev: libscards };
    var html = template(context);
    document.getElementById("libsdevcards").innerHTML = html;
};
  

replaceHTMLlibsdevcards();