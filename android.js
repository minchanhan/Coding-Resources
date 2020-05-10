let androidstudio = [
    {
        id: 1,
        name: "Coding in Flow",
        link: "https://codinginflow.com/",
        badgetype: "badge1",
        language: "Java",
        resourcetype: "Tutorial",
        time: "Long",
        description:
            "This is a unique tutorial/resource where you aren't being walked through from star to finish how \
            to use Android Studio, but whatever you want to do in Android Studio, you can look up here and learn \
            how to use its contents at your own pace.",
        image_link: "res/android/codinginflow.jpg"
    },
    {
        id: 2,
        name: "Bill's Tutorials",
        link: "https://www.youtube.com/channel/UCTfCl-a8_6aKT_Mdd4HkaUw",
        badgetype: "badge1",
        language: "Java",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "This tutorial is more of a classic walkthrough, from setting up your first simple \
            application, to debugging and using databases. This is a link to his channel where he has his 4 half-hour \
            long videos uploaded.",
        image_link: "res/android/billbutterfield.jpg"
    },
    {
        id: 3,
        name: "Android Developers",
        link: "https://developer.android.com/training/basics/firstapp",
        badgetype: "badge1",
        language: "Java/Kotlin",
        resourcetype: "Tutorial",
        time: "Medium",
        description:
            "Android's official website offers a pretty nice tutorial on building your first application. There \
            is a bit more reading involved but it offers plenty of information to get you started.",
        image_link: "res/android/androiddevelopers.png"
    }
];

let flutter = [
    
];


let androidcards = [["Android Studio", androidstudio], ["Flutter", flutter]];

const replaceHTMLandroiddevcards = () => {
    var source = document.getElementById("androiddevcardtemplate").innerHTML;
    var template = Handlebars.compile(source);
    var context = { androiddev: androidcards };
    var html = template(context);
    document.getElementById("androiddevcards").innerHTML = html;
};

replaceHTMLandroiddevcards();