$(document).ready(function () {

    // typing effect
    let i = 0;
    let descContainer = document.querySelector("section.description div.desc-container");
    let txtContainer = document.querySelector("section.description p.desc-text");
    let txt = "sum typing effect!Lorem typing effect!Lorem ipsum typing effect!Lorem" +
    "ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum" +
    "typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing" +
    "effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem" +
    "ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing" +
    "effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem" +
    "ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing" +
    "effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem" +
    "ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing" +
    "effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!"
    "ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing" +
    "effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!"
    "ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing" +
    "effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!Lorem ipsum typing effect!";
    let speed = 25;
    
    function ShowText() {
        if (i < txt.length) {
            // show character
            txtContainer.innerHTML += txt.charAt(i)

            // if scroll bar appear
            if(descContainer.scrollHeight > descContainer.clientHeight) {
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

    // let characters = $("section.education h2").text().length;
    // let text = $("section.education h2").text();
    // console.log(characters)

    // for (let i = 0; i <= characters; i++) {
    //     console.log(text.charAt(i))
        
    // }















})