$(document).ready(function () {

    let options = {
        startAngle: -1.55,
        value: 0.85,
        size: 150,
        fill: {
            gradient: ['#ff6a00', "#ffff00"]
        }
    }

    $('.circle .bar').circleProgress(options).on('circle-animation-progress', function (event,
        progress, stepValue) {
        if (stepValue == 1) {
            $(this).parent().find("span").text("100%")
        } else {
            $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
        }
    });

    // set element skills percentage
    function PercentageSkills(mainElement, percentageValue) {
        $(mainElement + " .bar").circleProgress({ value: percentageValue });
    }

    PercentageSkills(".creole", 1);
    PercentageSkills(".french", 1);
    PercentageSkills(".english", 0.80);
    PercentageSkills(".web-development", 0.80);
    PercentageSkills(".android-development", 0.90);
    PercentageSkills(".game-development", 0.60);
    PercentageSkills(".chess", 0.50);
    PercentageSkills(".piano", 0.15);

    // change card box shadow when hover it
    $('.card').hover(function () {
        $(this).css('box-shadow', '0px 0px 15px 1px #ff6a00, 0px 0px 15px 1px #ffff00');
    },
        function () {
            $(this).css('box-shadow', '0px 10px 15px rgba(0, 0, 0, 0.25)');
        })

    // change element card box shadow when hover the circle
    function CircleHover(mainElement) {
        $(mainElement + " .circle").hover(function () {
            $(mainElement).css('box-shadow', '0px 0px 15px 1px #0051ff, 0px 0px 15px 1px #ffff');
            $(mainElement + " .bar").circleProgress({
                fill: {
                    gradient: ['#0051ff98']
                }
            })
        },
            function () {
                $(mainElement).css('box-shadow', '0px 0px 15px 1px #ff6a00, 0px 0px 15px 1px #ffff00');
                $(mainElement + " .bar").circleProgress({
                    fill: {
                        gradient: ['#ff6a00', "#ffff00"]
                    }
                })
            })
    }

    CircleHover(".creole")
    CircleHover(".french")
    CircleHover(".english")
    CircleHover(".web-development")
    CircleHover(".android-development")
    CircleHover(".game-development")
    CircleHover(".chess")
    CircleHover(".piano")

    // show skills section when scrolling
    $(document).scroll(function () {

        // get scroll value
        var y = $(this).scrollTop();

        // show programming skills section when scroll value is greater than 250
        if (y > 250) {
            $('.programming-skills').fadeIn(2000);
        }else {
            $('.programming-skills').fadeOut();
        }

        // show other skills section when scroll value is greater than 600
        if (y > 600) {
            $('.other-skills').fadeIn(2000);
        }else {
            $('.other-skills').fadeOut();
        }
    });

    function ExpandSkillsDetails(mainElement, cardWidthValue, textTranslateValue, showMinusIconTime) {
        // remove events on this element
        $(mainElement).off();

        // add transition to some elements
        $(mainElement + ' .text').css("transition", "transform 2s");
        $(mainElement).css("transition", "width 1.5s, box-shadow 2s");

        // hide plus icon
        $(mainElement + ' div.expand i').fadeOut(1700);

        // hide circle
        $(mainElement + ' .circle').fadeOut(2000);

        // change some attribute value and add margin to the text
        setTimeout(() => {
            $(mainElement).css({
                "align-items": "normal",
                "justify-content": "normal"
            });
            $(mainElement + ' .text').css("margin", "7px 0 0");
        }, 2000);

        // increase this card width
        setTimeout(function () {
            $(mainElement).css("width", cardWidthValue);
        }, 2500);

        // change some text attribute value
        setTimeout(() => {
            $(mainElement + ' .text').css({
                "background": "linear-gradient(#0051ff 60%, #FFFFFF)",
                "-webkit-background-clip": "text",
                "background-clip": "text",
                "color": "transparent",
            })
        }, 4300);

        // change this card box shadow
        setTimeout(() => {
            $(mainElement).css('box-shadow', '0px 0px 15px 1px #0051ff, 0px 0px 15px 1px #FFFFFF');
        }, 4500);

        // move text to the left
        setTimeout(() => {
            $(mainElement + ' .text').css({
                "transform": "translateX(" + textTranslateValue + ")",
            });
        }, 4700);

        // show minus icon
        setTimeout(() => {
            $(mainElement + ' div.collapse').fadeIn(1000);
        }, showMinusIconTime);
    }

    // handle animation when click on web dev plus icon
    $('.web-development .expand i.fas.fa-plus-circle').click(function () {

        ExpandSkillsDetails(".card.web-development", "80%", "-270px", "9500");

        // hide other cards
        $('.game-development').fadeOut(1000);
        $('.android-development').fadeOut(1300);

        // add display flex to container skills details
        setTimeout(() => {
            $('.card.web-development .container-skills-details').css("display", "flex");
        }, 2500);

        // show skills item
        setTimeout(() => {
            $('.card .skills.html').fadeIn(1000);
        }, 6500);

        setTimeout(() => {
            $('.card .skills.jquery').fadeIn(1000);
        }, 7000);

        setTimeout(() => {
            $('.card .skills.php').fadeIn(1000);
        }, 7500);

        setTimeout(() => {
            $('.card .skills.css').fadeIn(1000);
        }, 8000);

        setTimeout(() => {
            $('.card .skills.js').fadeIn(1000);
        }, 8500);

        setTimeout(() => {
            $('.card .skills.sql').fadeIn(1000);
        }, 9000);
    })

    // handle animation when click on web dev minus icon
    $('.web-development .collapse i.fas.fa-minus-circle').click(function () {

        // hide minus icon
        $('.card.web-development div.collapse').fadeOut(1000);

        // hide skills item
        setTimeout(() => {
            $('.card .skills.sql').fadeOut(1000);
        }, 500);

        setTimeout(() => {
            $('.card .skills.js').fadeOut(1000);
        }, 1000);

        setTimeout(() => {
            $('.card .skills.css').fadeOut(1000);
        }, 1500);

        setTimeout(() => {
            $('.card .skills.php').fadeOut(1000);
        }, 2000);

        setTimeout(() => {
            $('.card .skills.jquery').fadeOut(1000);
        }, 2500);

        setTimeout(() => {
            $('.card .skills.html').fadeOut(1000);
        }, 3000);

        // remove text transform property
        setTimeout(() => {
            $('.card.web-development .text').css("transform", "");
        }, 4000);

        // change this card box shadow
        setTimeout(() => {
            $('.card.web-development').css('box-shadow', '0px 0px 15px 1px #ff6a00, 0px 0px 15px 1px #ffff00');
        }, 5200);

        // remove some text attribute value
        setTimeout(() => {
            $('.card.web-development .text').css({
                "background": "",
                "color": ""
            });
        }, 5500);

        // remove this card width and remove display block from container skills details
        setTimeout(function () {
            $('.card.web-development').css("width", "");
            $('.card.web-development .container-skills-details').css("display", "");
        }, 6000);

        // remove some attribute value, show circle, show plus icon
        setTimeout(() => {
            $('.card.web-development').css({
                "align-items": "",
                "justify-content": "",
            });
            $('.card.web-development .text').css("margin", "");
            $('.card.web-development .circle').fadeIn(1000);
            $('.card.web-development div.expand i').fadeIn(2000);
        }, 6500);

        // remove box shadow from this card and show other cards
        setTimeout(() => {
            $('.card.web-development').css("box-shadow", "");
            $('.android-development').fadeIn(1000);
            $('.game-development').fadeIn(1500);
        }, 7500);

        setTimeout(() => {
            // add hover event on this card
            $('.card.web-development').hover(function () {
                $(this).css('box-shadow', '0px 0px 15px 1px #ff6a00, 0px 0px 15px 1px #ffff00');
            },
                function () {
                    $(this).css('box-shadow', '0px 10px 15px rgba(0, 0, 0, 0.25)');
                })

            // remove transition for some elements
            $('.card.web-development .text').css("transition", "");
            $('.card.web-development').css("transition", "");

        }, 8000);
    })

    // handle animation when click on android dev plus icon
    $('.android-development .expand i.fas.fa-plus-circle').click(function () {

        ExpandSkillsDetails(".card.android-development", "50%", "-100px", "7500");

        // hide other cards
        $('.web-development').fadeOut(1000);
        $('.game-development').fadeOut(1000);

        // change container skills details from display none to display block
        setTimeout(() => {
            $('.card.android-development .container-skills-details').css("display", "block");
        }, 2500);

        // show skills item
        setTimeout(() => {
            $('.card .skills.java').fadeIn(1000);
        }, 6500);

        setTimeout(() => {
            $('.card .skills.android').fadeIn(1000);
        }, 7000);
    })

    // handle animation when click on android dev minus icon
    $('.android-development .collapse i.fas.fa-minus-circle').click(function () {

        // hide minus icon
        $('.card.android-development div.collapse').fadeOut(1000);

        // hide skills item
        setTimeout(() => {
            $('.card .skills.android').fadeOut(1000);
        }, 500);

        setTimeout(() => {
            $('.card .skills.java').fadeOut(1000);
        }, 1000);

        // remove text transform property
        setTimeout(() => {
            $('.card.android-development .text').css("transform", "");
        }, 2000);

        // change this card box shadow
        setTimeout(() => {
            $('.card.android-development').css('box-shadow', '0px 0px 15px 1px #ff6a00, 0px 0px 15px 1px #ffff00');
        }, 3200);

        // remove some text attribute value
        setTimeout(() => {
            $('.card.android-development .text').css({
                "background": "",
                "color": ""
            });
        }, 3500);

        // remove this card width and remove display block from container skills details
        setTimeout(function () {
            $('.card.android-development').css("width", "");
            $('.card.android-development .container-skills-details').css("display", "");
        }, 4000);

        // remove some attribute value, show circle, show plus icon
        setTimeout(() => {
            $('.card.android-development').css({
                "align-items": "",
                "justify-content": "",
            });
            $('.card.android-development .text').css("margin", "");
            $('.card.android-development .circle').fadeIn(1000);
            $('.card.android-development div.expand i').fadeIn(2000);
        }, 4500);

        // remove box shadow from this card and show other cards
        setTimeout(() => {
            $('.card.android-development').css("box-shadow", "");
            $('.game-development').fadeIn(1000);
            $('.web-development').fadeIn(1500);
        }, 5500);

        setTimeout(() => {
            // add hover event on this card
            $('.card.android-development').hover(function () {
                $(this).css('box-shadow', '0px 0px 15px 1px #ff6a00, 0px 0px 15px 1px #ffff00');
            },
                function () {
                    $(this).css('box-shadow', '0px 10px 15px rgba(0, 0, 0, 0.25)');
                })

            // remove transition for some elements
            $('.card.android-development .text').css("transition", "");
            $('.card.android-development').css("transition", "");

        }, 6000);
    })

    // handle animation when click on game dev plus icon
    $('.game-development .expand i.fas.fa-plus-circle').click(function () {

        ExpandSkillsDetails(".card.game-development", "50%", "-115px", "7500");

        // hide other cards
        var webDevOpacity = 1;
        var androidDevOpacity = 1;

        var webDevInterval = setInterval(() => {
            // decrease opacity
            webDevOpacity -= 0.1;

            $('.card.web-development').css("opacity", webDevOpacity)

            // clear interval and hidden web dev card when opacity is less than or equal to 0
            if (webDevOpacity <= 0) {
                clearInterval(webDevInterval)
                $('.card.web-development').css("visibility", "hidden");
            }
        }, 100);

        setTimeout(() => {
            var androidDevInterval = setInterval(() => {
                // decrease opacity
                androidDevOpacity -= 0.1;

                $('.card.android-development').css("opacity", androidDevOpacity)

                // clear interval and hidden android dev card when opacity is less than or equal to 0
                if (androidDevOpacity <= 0) {
                    clearInterval(androidDevInterval)
                    $('.card.android-development').css("visibility", "hidden");
                }
            }, 100);
        }, 350);

        // change container skills details from display none to display block
        setTimeout(() => {
            $('.card.game-development .container-skills-details').css("display", "block");
        }, 2500);

        // show skills item
        setTimeout(() => {
            $('.card .skills.c-sharp').fadeIn(1000);
        }, 6500);

        setTimeout(() => {
            $('.card .skills.unity').fadeIn(1000);
        }, 7000);
    })

    // handle animation when click on game dev minus icon
    $('.game-development .collapse i.fas.fa-minus-circle').click(function () {

        // hide minus icon
        $('.card.game-development div.collapse').fadeOut(1000);

        // hide skills item
        setTimeout(() => {
            $('.card .skills.unity').fadeOut(1000);
        }, 500);

        setTimeout(() => {
            $('.card .skills.c-sharp').fadeOut(1000);
        }, 1000);

        // remove text transform property
        setTimeout(() => {
            $('.card.game-development .text').css("transform", "");
        }, 2000);

        // change this card box shadow
        setTimeout(() => {
            $('.card.game-development').css('box-shadow', '0px 0px 15px 1px #ff6a00, 0px 0px 15px 1px #ffff00');
        }, 3200);

        // remove some text attribute value
        setTimeout(() => {
            $('.card.game-development .text').css({
                "background": "",
                "color": ""
            });
        }, 3500);

        // remove this card width and remove display block from container skills details
        setTimeout(function () {
            $('.card.game-development').css("width", "");
            $('.card.game-development .container-skills-details').css("display", "");
        }, 4000);

        // remove some attribute value, show circle, show plus icon
        setTimeout(() => {
            $('.card.game-development').css({
                "align-items": "",
                "justify-content": "",
            });
            $('.card.game-development .text').css("margin", "");
            $('.card.game-development .circle').fadeIn(1000);
            $('.card.game-development div.expand i').fadeIn(2000);
        }, 4500);

        // remove box shadow from this card
        setTimeout(() => {
            $('.card.game-development').css("box-shadow", "");
        }, 5500);

        // show other cards
        var webDevOpacity = 0;
        var androidDevOpacity = 0;

        setTimeout(() => {
            var androidDevInterval = setInterval(() => {
                // remove visibility hidden
                $('.card.android-development').css("visibility", "");

                // increase opacity
                androidDevOpacity += 0.1;

                // add opacity to android dev card
                $('.card.android-development').css("opacity", androidDevOpacity)

                // clear interval when opacity is more than or equal to 0
                if (androidDevOpacity >= 1) {
                    clearInterval(androidDevInterval)

                    // remove style from android card
                    $('.card.android-development').attr("style", "");
                }
            }, 100);
        }, 5500);

        setTimeout(() => {
            var webDevInterval = setInterval(() => {
                // remove visibility hidden
                $('.card.web-development').css("visibility", "");

                // increase opacity
                webDevOpacity += 0.1;

                // add opacity to web dev card
                $('.card.web-development').css("opacity", webDevOpacity);

                // clear interval when opacity is more than or equal to 0
                if (webDevOpacity >= 1) {
                    clearInterval(webDevInterval)

                    // remove style from web dev card
                    $('.card.web-development').attr("style", "");
                }
            }, 100);
        }, 5700);

        setTimeout(() => {
            // remove opacity attribute from other cards

            // add hover event on this card
            $('.card.game-development').hover(function () {
                $(this).css('box-shadow', '0px 0px 15px 1px #ff6a00, 0px 0px 15px 1px #ffff00');
            },
                function () {
                    $(this).css('box-shadow', '0px 10px 15px rgba(0, 0, 0, 0.25)');
                })

            // remove transition for some elements
            $('.card.game-development .text').css("transition", "");
            $('.card.game-development').css("transition", "");

        }, 6000);
    })
})