$(function(){

    // 1 example
    $('.btn1_clk').on ("click", function(){
        $('.box1').show(1000);
    });

    // 2 example
    $('.btn2_clk').on ("click" ,function(){
        $('.box2').hide(1000);
    });
    // 3 example
    $('.btn3_clk').on ("click", function(){
        $('.box3').toggle(1000);
    });
    // 4 example
    $('.btn4_clk').on ("click", function(){
        $('.box4').fadeIn(1000);
    });
    // 5 example
    $('.btn5_clk').on ("click", function(){
        $('.box5').fadeOut(1000);
    });
    // 6 example
    $('.btn6_clk').on ("click", function(){
        $('.box6').fadeToggle(1000);
    });
    // 7 example 
    $('.btn8_clk').on ("click", function(){
        $('.box8').slideDown(1000);
    });
    // 7 example
    $('.btn7_clk').on ("click", function(){
        $('.box7').slideUp(1000);
    });
    // 9 example
    $('.btn9_clk').on ("click", function(){
        $('.box9').slideToggle(1000);
    });
    // 10 example
    $('.btn10_clk').on ("click", function(){
        $('.box10').css("border","5px solid red");
    });
    // 11 example
    $('.btn11_clk').on ("click", function(){
        $('.box11').css ("text-decoration","underline");
    });
    // 12 example
    $('.btn12_clk').on ("click", function(){
        $('.box12').css ("background-color","green");
    });
    // 13 example
    $('.btn13_clk').on ("click", function(){
        $('.box13').css ("border-radius","50%");
    });
    // 14 example
    $('.btn14_clk').on ("click", function(){
        $('.box14').css ("border-radius","5px");
    });
    // 15 example
    $('.btn15_clk').on ("click", function(){
        $('.box15 p').css ("text-align","end");
    });
    // 16 example
    $('.btn16_clk').on ("click", function(){
        $('.box16 p').css ("color","red");
    });
    // 17 example
    $('.btn25_clk').on ("dblclick", function(){
        $('.box25').css ("background-color","tomato");
    });
    // 18 example
    // tl - br
    $('.btn18_clk').on ("click", function(){
        $('.box18').css ("border-radius","35px 0px")
    })
    // tr - bl
    $('.btn18_2_clk').on ("click", function(){
        $('.box18').css ("border-radius","0px 35px")
    })
    // 19 example
    $('.box19 p').on ("click", function(){
        $(this).slideUp(800);
    });
    // 20 example
    $('.btn21_clk').on ("click", function(){
        $('.box21 p').css ("font-family","cursive");
    });
    // 21 example
    $('.btn20_clk').on ("click", function(){
        $('.box20 p').css ("font-size","30px");
    });
    $('.btn20_2_clk').on ("click", function(){
        $('.box20 p').css ("font-weight","700");
    });
    $('.btn20_3_clk').on ("click", function(){
        $('.box20 p').css ("font-family","cursive");
    });
    $('.btn20_4_clk').on ("click", function(){
        $('.box20 p').css ("color","green");
    });
    // 22 example
    $('.btn22_clk'). on ("click", function(){
        $('.box22 p:contains("SOURAV")').css ("background-color","tomato");
    });
    // 23 example
    $('.btn23_clk').on ("click", function(){
        $('.box23 p').after ("<b>HELLO</b>");
    });
    // 24 example
    $('.btn24_clk').on ("click", function(){
        $('.box24 p').before ("<b>HELLO</b>")
    })
    // 26 example
    
});