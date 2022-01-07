$(document).ready(function () {

    // typing effect
    let i = 0;
    let descContainer = document.querySelector("section.description div.desc-container");
    let txtContainer = document.querySelector("section.description div.desc-text");
    let txt = "<p>My name is Kendley Borno. I am a senior high school student at the Institution Saint Louis de Gonzague, located in Haiti.</p>" +
        "<p>I am passionate about computer programming. When I was a toddler, the computer world had always intrigued me. Two years ago, I began to explore the computer science world and I have been impressed by all the things that I have discovered. Day by day I continue to learn more and more across the different areas within the CS field.</p>" +
        "<p>As you can see in the Skills section, during these two years I have learned a lot of things and I keep learning because I am very interested in the Computer Science field, and because it is my favorite hobby. Thus, as you certainly guess, Computer Science is my intented major for college.</p>" +
        "<p>My days are not just about programming. My second favorite hobby is: watching movies and series. It is an activity that brings me joy in my daily life and also help me growth. Therefore, this activity is also meaningful for me.</p>" +
        "<p>Then, I am also passionate about playing chess. I started learning few years ago and sometimes I keep practicing to improve my skills.</p>" +
        "<p>Finally, in 2021 I started to learn to play the piano because for many years it has been an instrument that I have always wanted to play.</p>" +
        "<p>About some of the good qualities and strengths that I have, I am altruist and helpful, and I like to devote myself to the community I am in. I am a hard and thoughful worker with a genuine guise of responsibility.</p>";
    let speed = 25;

    function ShowText() {
        if (i < txt.length) {

            // show character
            if (txt.charAt(i) == "<" && txt.charAt(i + 1) == "p" & txt.charAt(i + 2) == ">") {
                txtContainer.innerHTML += "<p>"
                i += 2
            }
            else if (txt.charAt(i) == "<" && txt.charAt(i + 1) == "/" & txt.charAt(i + 2) == "p" & txt.charAt(i + 3) == ">") {
                txtContainer.innerHTML += "</p>"
                i += 3
            } else {
                txtContainer.innerHTML += txt.charAt(i)
            }

            // if scroll bar appear
            if (descContainer.scrollHeight > descContainer.clientHeight) {
                // change title background color
                $('section.description h2.title').css({
                    "background": "-webkit-linear-gradient(#0051ff, #FFFFFF)",
                    "background": "linear-gradient(#0051ff, #FFFFFF)",
                    "-webkit-background-clip": "text",
                    "background-clip": "text",
                    "color": "transparent"
                });

                // change desc container background color and border color
                $('section.description div.desc-container').css({
                    "background": "linear-gradient(#0051ff, #FFFFFF)",
                    "border-color": "#0051ff"
                });

                // remove desc container border right
                descContainer.style.borderRight = "none";
            };

            i++;
            setTimeout(ShowText, speed);
        }
    }

    setTimeout(() => {
        ShowText();
    }, 1000);

    function SwitchCategory(mainElement, currentCategoryDetails, categoryDetailsToShow, currentCategoryTitle) {
        $('div.education-categories ' + mainElement).click(function () {

            // hide current category details
            $('div.education-details ' + currentCategoryDetails).css("display", "none");

            // show category details clicked
            $('div.education-details ' + categoryDetailsToShow).css("display", "flex");

            // remove focus on current category title
            $('div.education-categories ' + currentCategoryTitle).css({
                "background": "none",
                "color": "gray"
            });

            // add focus on category title clicked
            $(this).css({
                "background": "linear-gradient(#FFFFFF, #0051ff)",
                "color": "#FFFFFF",
            });
        })
    }

    SwitchCategory("div.primary-school", ".secondary-school-details", ".primary-school-details", "div.secondary-school");
    SwitchCategory("div.secondary-school", ".primary-school-details", ".secondary-school-details", "div.primary-school");

})