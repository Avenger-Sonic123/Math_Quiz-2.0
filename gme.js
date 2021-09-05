player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

 document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
 document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
 
 function send()
 {
    
     question_num = "<h4 id='num_display'> Q. " + document.getElementById("num1").value + " x " + document.getElementById("num2").value + "</h4>";
     input_box = "<br>Answer : <input type= 'number' id='input_check_box'>";
     check_button = "<br><br><button class='btn btn-info' onclick= 'check()'>Check</button>";
     row = question_num + input_box + check_button;
     document.getElementById("output").innerHTML = row;
     document.getElementById("num1").value = "";
     document.getElementById("num2").value = "";
 }