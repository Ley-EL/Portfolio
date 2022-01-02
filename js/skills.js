$(document).ready(function () {

    // initialize circle animation progress
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
    PercentageSkills(".android-development", 0.60);
    PercentageSkills(".game-development", 0.60);
    PercentageSkills(".chess", 0.50);
    PercentageSkills(".piano", 0.15);

    // change card box shadow when hover it
    $('.card').hover(function () {
        $(this).css('box-shadow', '0px 0px 15px 1px #ff6a00, 0px 0px 15px 1px #ffff00');
        console.log("Hover on card only")
    },
        function () {
            $(this).css('box-shadow', '0px 10px 15px rgba(0, 0, 0, 0.25)');
            console.log("Hover off on card only")
        })

    // change element card box shadow when hover the circle
    function CircleHover(mainElement) {
        $(mainElement + " .circle").hover(function () {
            $(mainElement).css('box-shadow', '0px 0px 15px 1px #0051ff, 0px 0px 15px 1px #ffff', 'important');
            console.log("Hover on circle that affect card")
            $(mainElement + " .bar").circleProgress({
                fill: {
                    gradient: ['#0051ff98']
                }
            })
        },
            function () {
                $(mainElement).css('box-shadow', '0px 0px 15px 1px #ff6a00, 0px 0px 15px 1px #ffff00');
                console.log("Hover off on circle that affect card")
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

    function ExpandSkillsDetails(mainElement, cardWidthValue, textTranslateValue, showMinusIconTime) {
        // remove events on this element
        $(mainElement).off();

        // add transition to some elements
        $(mainElement + ' .text').css("transition", "transform 2s, font-size 2s");
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

        // remove box shadow from this card, show other cards and remove their style
        setTimeout(() => {
            $('.card.web-development').css("box-shadow", "");
            $('.android-development').fadeIn(1000);
            $('.android-development').attr("style", "");
            $('.game-development').fadeIn(1500);
            $('.game-development').attr("style", "");
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

        // remove box shadow from this card, show other cards and remove their style
        setTimeout(() => {
            $('.card.android-development').css("box-shadow", "");
            $('.game-development').fadeIn(1000);
            $('.game-development').attr("style", "");
            $('.web-development').fadeIn(1500);
            $('.web-development').attr("style", "");
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

        $('.card.web-development').fadeOut(1000);
        $('.card.android-development').fadeOut(1000)

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
                "justify-content": ""
            });
            $('.card.game-development .text').css("margin", "");
            $('.card.game-development .circle').fadeIn(1000);
            $('.card.game-development div.expand i').fadeIn(2000);
        }, 4500);

        // remove this card's box shadow, show other cards and remove their style
        setTimeout(() => {
            // remove box shadow from this card
            $('.card.game-development').css("box-shadow", "");

            // show android development card
            $('.card.android-development').fadeIn(1000);

            // remove style from android card
            $('.card.android-development').attr("style", "");

            // show web development card
            $('.card.web-development').fadeIn(1500);

            // remove style from web dev card
            $('.card.web-development').attr("style", "");
        }, 5500);

        setTimeout(() => {
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

    // Responsive
    const mediaQuery1024min = window.matchMedia('(min-width: 1024px)');
    const mediaQuery1024 = window.matchMedia('(max-width: 1024px)');
    const mediaQuery800 = window.matchMedia('(max-width: 800px)');
    const mediaQuery740 = window.matchMedia('(max-width: 740px) and (orientation: landscape)');
    const mediaQuery600 = window.matchMedia('(max-width: 600px)');
    const mediaQuery570 = window.matchMedia('(max-width: 570px) and (orientation: landscape)');
    const mediaQuery550 = window.matchMedia('(max-width: 550px)');
    const mediaQuery425 = window.matchMedia('(max-width: 425px)');
    const mediaQuery385 = window.matchMedia('(max-width: 385px)');
    const mediaQuery330 = window.matchMedia('(max-width: 330px)');

    if (mediaQuery1024min.matches) {
        // handle animation when click on game dev plus icon
        $('.game-development .expand i.fas.fa-plus-circle').click(function () {

            // set game development card margin left to auto
            setTimeout(() => {
                $('.card.game-development').css("margin-left", "auto")
            }, 1000);
        })

        // handle animation when click on game dev minus icon
        $('.game-development .collapse i.fas.fa-minus-circle').click(function () {

            setTimeout(() => {
                // remove margin-left from this card
                $('.card.game-development').css("margin-left", "");
            }, 5500);
        })
    }

    if (mediaQuery1024.matches) {
        // handle animation when click on web dev plus icon
        $('.web-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.web-development", "100%", "-215px", "9500");
        })

        // handle animation when click on android dev plus icon
        $('.android-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.android-development", "60%", "-60px", "7500");
        })

        // handle animation when click on game dev plus icon
        $('.game-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.game-development", "60%", "-70px", "7500");
        })

    }

    if (mediaQuery800.matches) {
        // handle animation when click on web dev plus icon
        $('.web-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.web-development", "100%", "-100px", "9500");

        })

        // handle animation when click on android dev plus icon
        $('.android-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.android-development", "85%", "-40px", "7500");
        })

        // handle animation when click on game dev plus icon
        $('.game-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.game-development", "85%", "-55px", "7500")
        })

    }

    if (mediaQuery740.matches) {

        // handle animation when click on web dev plus icon
        $('.web-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.web-development", "100%", "-80px", "9500");
        })

        // handle animation when click on android dev plus icon
        $('.android-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.android-development", "90%", "-35px", "7500");
        })

        // handle animation when click on game dev plus icon
        $('.game-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.game-development", "90%", "-50px", "7500")
        })
    }

    if (mediaQuery600.matches) {

        // handle animation when click on web dev plus icon
        $('.web-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.web-development", "100%", "-80px", "9500");
        })

        // handle animation when click on android dev plus icon
        $('.android-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.android-development", "90%", "-35px", "7500");
        })

        // handle animation when click on game dev plus icon
        $('.game-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.game-development", "90%", "-50px", "7500")
        })
    }

    if (mediaQuery570.matches) {

        // handle animation when click on web dev plus icon
        $('.web-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.web-development", "100%", "-70px", "9500");
        })

        // handle animation when click on android dev plus icon
        $('.android-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.android-development", "90%", "-30px", "7500");
        })

        // handle animation when click on game dev plus icon
        $('.game-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.game-development", "90%", "-45px", "7500")
        })
    }

    if (mediaQuery550.matches) {

        // handle animation when click on web dev plus icon
        $('.web-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.web-development", "100%", "-50px", "9500");
        })

        // handle animation when click on android dev plus icon
        $('.android-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.android-development", "100%", "-30px", "7500");
        })

        // handle animation when click on game dev plus icon
        $('.game-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.game-development", "100%", "-45px", "7500")
        })
    }

    if (mediaQuery425.matches) {

        function AddWrapperMarginTransition() {

            // add transition to wrapper
            $('.programming-skills div.wrapper').css("transition", "margin 2s");

            // reduce margin left and right of the wrapper
            setTimeout(() => {
                $('.programming-skills div.wrapper').css("margin", "10px 15px");
            }, 2500);
        }

        function RemoveWrapperMarginTransition(rmMarginTime, rmTransitionTime) {

            // remove margin set earlier to the wrapper
            setTimeout(function () {
                $('.programming-skills div.wrapper').css("margin", "");
            }, rmMarginTime);

            // remove wrapper's transition
            setTimeout(() => {
                $('.programming-skills div.wrapper').css("transition", "");
            }, rmTransitionTime);
        }

        // handle animation when click on web dev plus icon
        $('.web-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.web-development", "100%", "-25px", "9500");

            AddWrapperMarginTransition();
        })

        // handle animation when click on web dev minus icon
        $('.web-development .collapse i.fas.fa-minus-circle').click(function () {

            RemoveWrapperMarginTransition(6000, 8000);
        })

        // handle animation when click on android dev plus icon
        $('.android-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.android-development", "100%", "-10px", "7500");

            AddWrapperMarginTransition();
        })

        // handle animation when click on android dev minus icon
        $('.android-development .collapse i.fas.fa-minus-circle').click(function () {

            RemoveWrapperMarginTransition(4000, 6000);
        })

        // handle animation when click on game dev plus icon
        $('.game-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.game-development", "100%", "-15px", "7500");

            AddWrapperMarginTransition();
        })

        // handle animation when click on game dev minus icon
        $('.game-development .collapse i.fas.fa-minus-circle').click(function () {

            RemoveWrapperMarginTransition(4000, 6000);
        })
    }

    if (mediaQuery385.matches) {

        function ModifTextSize(textSize) {
            setTimeout(() => {
                $('.programming-skills div.wrapper div.card div.text').css("font-size", textSize);
            }, 2000);
        }

        function RemoveTextSize(rmTextSizeTime) {
            setTimeout(() => {
                $('.programming-skills div.wrapper div.card div.text').css("font-size", "");
            }, rmTextSizeTime);
        }

        // handle animation when click on web dev plus icon
        $('.web-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.web-development", "100%", "-25px", "9500");

            ModifTextSize("20px");
        })

        // handle animation when click on web dev minus icon
        $('.web-development .collapse i.fas.fa-minus-circle').click(function () {

            RemoveTextSize(5500);
        })

        // handle animation when click on android dev plus icon
        $('.android-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.android-development", "100%", "-10px", "7500");

            ModifTextSize("20px");
        })

        // handle animation when click on android dev minus icon
        $('.android-development .collapse i.fas.fa-minus-circle').click(function () {

            RemoveTextSize(3500);
        })

        // handle animation when click on game dev plus icon
        $('.game-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.game-development", "100%", "-15px", "7500");

            ModifTextSize("20px");
        })

        // handle animation when click on game dev minus icon
        $('.game-development .collapse i.fas.fa-minus-circle').click(function () {

            RemoveTextSize(3500);
        })
    }

    if (mediaQuery330.matches) {

        // handle animation when click on web dev plus icon
        $('.web-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.web-development", "100%", "-15px", "9500");

            ModifTextSize("20px");
        })

        // handle animation when click on android dev plus icon
        $('.android-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.android-development", "100%", "-10px", "7500");

            ModifTextSize("22px");
        })

        // handle animation when click on game dev plus icon
        $('.game-development .expand i.fas.fa-plus-circle').click(function () {

            ExpandSkillsDetails(".card.game-development", "100%", "-15px", "7500");

            ModifTextSize("22px");
        })
    }



})