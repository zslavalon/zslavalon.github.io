setTimeout(function(){
    $(document).getElementsByTagName('body')[0].style.height=window.innerHeight+'px';
},20);

$(document).ready(function (){
    $(window).on("load",function(){
        $("#home").bind("click",function() {
            if ($("#home").css("z-index") != 15) {
                $("#home").animate({
                    "left": "16%",
                    "top": "0",
                    "z-index": "15"
                });
                $("#edu").animate({
                    "left": "14%",
                    "top": "-1%",
                    "z-index": "14"
                });
                $("#skill").animate({
                    "left": "12%",
                    "top": "-2%",
                    "z-index": "13"
                });
                $("#language").animate({
                    "left": "10%",
                    "top": "-3%",
                    "z-index": "12"
                });
                $("#project").animate({
                    "left": "8%",
                    "top": "-4%",
                    "z-index": "11"
                });
                $("#interest").animate({
                    "left": "6%",
                    "top": "-5%",
                    "z-index": "10"
                });
                $("#more").animate({
                    "left": "4%",
                    "top": "-6%",
                    "z-index": "9"
                });
            }
        });
        $("#edu").bind("click",function(){
            if($("#edu").css("z-index")!=15){
                $("#home").animate({
                    "left": "4%",
                    "top": "-6%",
                    "z-index": "9"
                });
                $("#edu").animate({
                    "left": "16%",
                    "top": "0",
                    "z-index": "15"
                });
                $("#skill").animate({
                    "left": "14%",
                    "top": "-1%",
                    "z-index": "14"
                });
                $("#language").animate({
                    "left": "12%",
                    "top": "-2%",
                    "z-index": "13"
                });
                $("#project").animate({
                    "left": "10%",
                    "top": "-3%",
                    "z-index": "12"
                });
                $("#interest").animate({
                    "left": "8%",
                    "top": "-4%",
                    "z-index": "11"
                });
                $("#more").animate({
                    "left": "6%",
                    "top": "-5%",
                    "z-index": "10"
                });
            }
        });
        $("#skill").bind("click",function(){
            if($("#skill").css("z-index")!=15){
                $("#home").animate({
                    "left": "6%",
                    "top": "-5%",
                    "z-index": "10"
                });
                $("#edu").animate({
                    "left": "4%",
                    "top": "-6%",
                    "z-index": "9"
                });
                $("#skill").animate({
                    "left": "16%",
                    "top": "0",
                    "z-index": "15"
                });
                $("#language").animate({
                    "left": "14%",
                    "top": "-1%",
                    "z-index": "14"
                });
                $("#project").animate({
                    "left": "12%",
                    "top": "-2%",
                    "z-index": "13"
                });
                $("#interest").animate({
                    "left": "10%",
                    "top": "-3%",
                    "z-index": "12"
                });
                $("#more").animate({
                    "left": "8%",
                    "top": "-4%",
                    "z-index": "11"
                });
            }
        });
        $("#language").bind("click",function(){
            if($("#language").css("z-index")!=15){
                $("#home").animate({
                    "left": "8%",
                    "top": "-4%",
                    "z-index": "11"
                });
                $("#edu").animate({
                    "left": "6%",
                    "top": "-5%",
                    "z-index": "10"
                });
                $("#skill").animate({
                    "left": "4%",
                    "top": "-6%",
                    "z-index": "9"
                });
                $("#language").animate({
                    "left": "16%",
                    "top": "0",
                    "z-index": "15"
                });
                $("#project").animate({
                    "left": "14%",
                    "top": "-1%",
                    "z-index": "14"
                });
                $("#interest").animate({
                    "left": "12%",
                    "top": "-2%",
                    "z-index": "13"
                });
                $("#more").animate({
                    "left": "10%",
                    "top": "-3%",
                    "z-index": "12"
                });
            }
        });
        $("#project").bind("click",function(){
            if($("#project").css("z-index")!=15){
                $("#home").animate({
                    "left": "10%",
                    "top": "-3%",
                    "z-index": "12"
                });
                $("#edu").animate({
                    "left": "8%",
                    "top": "-4%",
                    "z-index": "11"
                });
                $("#skill").animate({
                    "left": "6%",
                    "top": "-5%",
                    "z-index": "10"
                });
                $("#language").animate({
                    "left": "4%",
                    "top": "-6%",
                    "z-index": "9"
                });
                $("#project").animate({
                    "left": "16%",
                    "top": "0",
                    "z-index": "15"
                });
                $("#interest").animate({
                    "left": "14%",
                    "top": "-1%",
                    "z-index": "14"
                });
                $("#more").animate({
                    "left": "12%",
                    "top": "-2%",
                    "z-index": "13"
                });
            }
        });
        $("#interest").bind("click",function(){
            if($("#interest").css("z-index")!=15){
                $("#home").animate({
                    "left": "12%",
                    "top": "-2%",
                    "z-index": "13"
                });
                $("#edu").animate({
                    "left": "10%",
                    "top": "-3%",
                    "z-index": "12"
                });
                $("#skill").animate({
                    "left": "8%",
                    "top": "-4%",
                    "z-index": "11"
                });
                $("#language").animate({
                    "left": "6%",
                    "top": "-5%",
                    "z-index": "10"
                });
                $("#project").animate({
                    "left": "4%",
                    "top": "-6%",
                    "z-index": "9"
                });
                $("#interest").animate({
                    "left": "16%",
                    "top": "0",
                    "z-index": "15"
                });
                $("#more").animate({
                    "left": "14%",
                    "top": "-1%",
                    "z-index": "14"
                });
            }
        });
        $("#more").bind("click",function(){
            if($("#more").css("z-index")!=15){
                $("#home").animate({
                    "left": "14%",
                    "top": "-1%",
                    "z-index": "14"
                });
                $("#edu").animate({
                    "left": "12%",
                    "top": "-2%",
                    "z-index": "13"
                });
                $("#skill").animate({
                    "left": "10%",
                    "top": "-3%",
                    "z-index": "12"
                });
                $("#language").animate({
                    "left": "8%",
                    "top": "-4%",
                    "z-index": "11"
                });
                $("#project").animate({
                    "left": "6%",
                    "top": "-5%",
                    "z-index": "10"
                });
                $("#interest").animate({
                    "left": "4%",
                    "top": "-6%",
                    "z-index": "9"
                });
                $("#more").animate({
                    "left": "16%",
                    "top": "0",
                    "z-index": "15"
                });
            }
        });
    })
    var bthDOM=document.getElementById("bth");
    bthDOM.onclick=function(){
        alert("这简历github版，还没有下载功能，以后有了自己的服务器再补上");
    }
    var homeDOM=document.getElementById("home");
    homeDOM.onclick=function(){
        $("#home").animate({
            "left": "4%",
            "top": "-6%",
            "z-index": "9"
        });
        $("#edu").animate({
            "left": "16%",
            "top": "0",
            "z-index": "15"
        });
        $("#skill").animate({
            "left": "14%",
            "top": "-1%",
            "z-index": "14"
        });
        $("#language").animate({
            "left": "12%",
            "top": "-2%",
            "z-index": "13"
        });
        $("#project").animate({
            "left": "10%",
            "top": "-3%",
            "z-index": "12"
        });
        $("#interest").animate({
            "left": "8%",
            "top": "-4%",
            "z-index": "11"
        });
        $("#more").animate({
            "left": "6%",
            "top": "-5%",
            "z-index": "10"
        });
    }
    var eduDom=document.getElementById("edu");
    eduDom.onclick=function(){
        $("#home").animate({
            "left": "6%",
            "top": "-5%",
            "z-index": "10"
        });
        $("#edu").animate({
            "left": "4%",
            "top": "-6%",
            "z-index": "9"
        });
        $("#skill").animate({
            "left": "16%",
            "top": "0",
            "z-index": "15"
        });
        $("#language").animate({
            "left": "14%",
            "top": "-1%",
            "z-index": "14"
        });
        $("#project").animate({
            "left": "12%",
            "top": "-2%",
            "z-index": "13"
        });
        $("#interest").animate({
            "left": "10%",
            "top": "-3%",
            "z-index": "12"
        });
        $("#more").animate({
            "left": "8%",
            "top": "-4%",
            "z-index": "11"
        });
    }
    var skillDOM=document.getElementById("skill");
    skillDOM.onclick=function(){
        $("#home").animate({
            "left": "8%",
            "top": "-4%",
            "z-index": "11"
        });
        $("#edu").animate({
            "left": "6%",
            "top": "-5%",
            "z-index": "10"
        });
        $("#skill").animate({
            "left": "4%",
            "top": "-6%",
            "z-index": "9"
        });
        $("#language").animate({
            "left": "16%",
            "top": "0",
            "z-index": "15"
        });
        $("#project").animate({
            "left": "14%",
            "top": "-1%",
            "z-index": "14"
        });
        $("#interest").animate({
            "left": "12%",
            "top": "-2%",
            "z-index": "13"
        });
        $("#more").animate({
            "left": "10%",
            "top": "-3%",
            "z-index": "12"
        });
    }
    var languageDOM=document.getElementById("language");
    languageDOM.onclick=function(){
        $("#home").animate({
            "left": "10%",
            "top": "-3%",
            "z-index": "12"
        });
        $("#edu").animate({
            "left": "8%",
            "top": "-4%",
            "z-index": "11"
        });
        $("#skill").animate({
            "left": "6%",
            "top": "-5%",
            "z-index": "10"
        });
        $("#language").animate({
            "left": "4%",
            "top": "-6%",
            "z-index": "9"
        });
        $("#project").animate({
            "left": "16%",
            "top": "0",
            "z-index": "15"
        });
        $("#interest").animate({
            "left": "14%",
            "top": "-1%",
            "z-index": "14"
        });
        $("#more").animate({
            "left": "12%",
            "top": "-2%",
            "z-index": "13"
        });
    }
    var projectDOM=document.getElementById("project");
    projectDOM.onclick=function(){
        $("#home").animate({
            "left": "12%",
            "top": "-2%",
            "z-index": "13"
        });
        $("#edu").animate({
            "left": "10%",
            "top": "-3%",
            "z-index": "12"
        });
        $("#skill").animate({
            "left": "8%",
            "top": "-4%",
            "z-index": "11"
        });
        $("#language").animate({
            "left": "6%",
            "top": "-5%",
            "z-index": "10"
        });
        $("#project").animate({
            "left": "4%",
            "top": "-6%",
            "z-index": "9"
        });
        $("#interest").animate({
            "left": "16%",
            "top": "0",
            "z-index": "15"
        });
        $("#more").animate({
            "left": "14%",
            "top": "-1%",
            "z-index": "14"
        });
    }
    var interestDOM=document.getElementById("interest");
    interestDOM.onclick=function(){
        $("#home").animate({
            "left": "14%",
            "top": "-1%",
            "z-index": "14"
        });
        $("#edu").animate({
            "left": "12%",
            "top": "-2%",
            "z-index": "13"
        });
        $("#skill").animate({
            "left": "10%",
            "top": "-3%",
            "z-index": "12"
        });
        $("#language").animate({
            "left": "8%",
            "top": "-4%",
            "z-index": "11"
        });
        $("#project").animate({
            "left": "6%",
            "top": "-5%",
            "z-index": "10"
        });
        $("#interest").animate({
            "left": "4%",
            "top": "-6%",
            "z-index": "9"
        });
        $("#more").animate({
            "left": "16%",
            "top": "0",
            "z-index": "15"
        });
    }
    var moreDOM=document.getElementById("more");
    moreDOM.onclick=function(){
        $("#home").animate({
            "left": "16%",
            "top": "0",
            "z-index": "15"
        });
        $("#edu").animate({
            "left": "14%",
            "top": "-1%",
            "z-index": "14"
        });
        $("#skill").animate({
            "left": "12%",
            "top": "-2%",
            "z-index": "13"
        });
        $("#language").animate({
            "left": "10%",
            "top": "-3%",
            "z-index": "12"
        });
        $("#project").animate({
            "left": "8%",
            "top": "-4%",
            "z-index": "11"
        });
        $("#interest").animate({
            "left": "6%",
            "top": "-5%",
            "z-index": "10"
        });
        $("#more").animate({
            "left": "4%",
            "top": "-6%",
            "z-index": "9"
        });
    }
});
