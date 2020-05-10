let html = [
    {
        id: 1,
        name: "Apple Developer",
        link: "https://developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/",
        badgetype: "badge1",
        language: "Swift",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "Apple's official documentation offers a nice tutorial to build a simple app to \
            teach the basics of using XCode.",
        image_link: "res/ios/appledeveloper.jpeg"
    },
    {
        id: 2,
        name: "Code With Chris",
        link: "https://codewithchris.com/xcode-tutorial/",
        badgetype: "badge1",
        language: "Swift",
        resourcetype: "Information",
        time: "Long",
        description:
            "If you're the type of person who wants to learn by experimenting rather than following a tutorial, \
            this website is perfect for you. Rather than building an app together, the author provides all the information \
            you need to get started and playing around with XCode on your own!",
        image_link: "res/ios/codewithchris.png"
    }
];

let css = [
    {
        id: 1,
        name: "Microsoft Docs",
        link: "https://docs.microsoft.com/en-us/xamarin/ios/get-started/",
        badgetype: "badge2",
        language: "C#",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "Microsoft's official documents have a nice Xamarin iOS tutorial to get you going. It splits the tutorial \
            into a \"Quickstart\" section for quickly seein an app built, and a \"Deep Dive\" section that explains \
            everything you just saw! It includes a set-up guide as well, which can be confusing because there are many \
            installation steps to use Xamarin iOS.",
        image_link: "res/ios/microsoft.png"
    },
    {
        id: 2,
        name: "Ray Wenderlich",
        link: "https://www.raywenderlich.com/1044-building-ios-apps-with-xamarin-and-visual-studio",
        badgetype: "badge2",
        language: "C#",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "This is an awesome fun tutorial that walks you through the set-up steps in detail and \
            introduces you to the basics of developing with Xamarin iOS!",
        image_link: "res/ios/raywenderlich.png"
    }
];

let js = [
    {
        id: 1,
        name: "Microsoft Docs",
        link: "https://docs.microsoft.com/en-us/xamarin/ios/get-started/",
        badgetype: "badge2",
        language: "C#",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "Microsoft's official documents have a nice Xamarin iOS tutorial to get you going. It splits the tutorial \
            into a \"Quickstart\" section for quickly seein an app built, and a \"Deep Dive\" section that explains \
            everything you just saw! It includes a set-up guide as well, which can be confusing because there are many \
            installation steps to use Xamarin iOS.",
        image_link: "res/ios/microsoft.png"
    },
    {
        id: 2,
        name: "Ray Wenderlich",
        link: "https://www.raywenderlich.com/1044-building-ios-apps-with-xamarin-and-visual-studio",
        badgetype: "badge2",
        language: "C#",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "This is an awesome fun tutorial that walks you through the set-up steps in detail and \
            introduces you to the basics of developing with Xamarin iOS!",
        image_link: "res/ios/raywenderlich.png"
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