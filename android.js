let android = [
    {
        id: 1,
        name: "android 1",
        link: "link",
        tool: "Android Studio",
        language: "Java",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "5"
    },
    {
        id: 2,
        name: "android 2",
        link: "link",
        tool: "Xamarin Android",
        language: "C#",
        description:
            "Helpful diagrams, great feedback",
        image_link: "res/preview_pic.png",
        rating: "4"
    }
];

const replaceHTMLandroiddevcards = () => {
    var source = document.getElementById("androiddevcardtemplate").innerHTML;
    var template = Handlebars.compile(source);
    var context = { androiddev: android };
    var html = template(context);
    document.getElementById("androiddevcards").innerHTML = html;
};

replaceHTMLandroiddevcards();