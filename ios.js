let ios = [
    {
        id: 1,
        name: "ios 1",
        link: "link",
        tool: "XCode",
        language: "C++",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "4"
    },
    {
        id: 2,
        name: "ios 2",
        link: "link",
        tool: "Xamarin iOS",
        language: "C#",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "4"
    }
];

const replaceHTMLiosdevcards = () => {
    var source = document.getElementById("iosdevcardtemplate").innerHTML;
    var template = Handlebars.compile(source);
    var context = { iosdev: ios };
    var html = template(context);
    document.getElementById("iosdevcards").innerHTML = html;
};
  

replaceHTMLiosdevcards();