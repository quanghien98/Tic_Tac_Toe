function playTICTACTOE() {
    var PL1 = "X";
    var PL2 = "O";
    var flag=true;
    clickandplay();
    console.log(flag);
    
    function clickandplay() {
        if (flag===true) {
            $(".item").click(function () {
                $(".item").html(PL1);
                document.querySelector(`audio[data-player1=X`).play();
                flag=false;
                console.log(flag);
                
            });
        } else {
            $(".item").click(function () {
                $(".item").html(PL2);
                document.querySelector(`audio[data-player2=0`).play();
                flag=true;
            });
            
        }
    }

}
