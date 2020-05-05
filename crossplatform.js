let xamarinforms = [
    {
        id: 1,
        name: "Programming With Mosh",
        link: "https://www.youtube.com/watch?v=93ZU6j59wL4",
        badgetype: "badge1",
        language: "C#",
        resourcetype: "Tutorial",
        time: "Short",
        description:
            "This is a one-hour YouTube video that describes a ton of content that Xamarin Forms offers. \
            There may be content that is outdated right now, but the main contents are still relevant and \
            the deprecated features are easy to fix with a bit of googling!",
        image_link: "res/crossplatform/programmingwithmosh.jpg",
        rating: "User Rating: *****"
    },
    {
        id: 2,
        name: "Microsoft Docs",
        link: "https://dotnet.microsoft.com/learn/xamarin",
        badgetype: "badge1",
        language: "Java",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "The official Microsoft documents offer a variety of resources of various levels for Xamarin Forms. \
            On this page, there are tutorials for building your first app and deep dives into concepts like Data Binding and more! \
            For beginners, I'd recommend watching the Xamarin 101 Video Series under \"All learning materials\".",
        image_link: "res/crossplatform/microsoft.png",
        rating: "User Rating: *****"
    }
];

let crossplatformcards = [["Xamarin Forms", xamarinforms]];

const replaceHTMLcrossplatformdevcards = () => {
    var source = document.getElementById("crossplatformdevcardtemplate").innerHTML;
    var template = Handlebars.compile(source);
    var context = { crossplatformdev: crossplatformcards };
    var html = template(context);
    document.getElementById("crossplatformdevcards").innerHTML = html;
};

replaceHTMLcrossplatformdevcards();