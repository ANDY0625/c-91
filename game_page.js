p1_name=localStorage.getItem("player1_name");
p2_name=localStorage.getItem("player2_name");
p1_score=0;
p2_score=0;
document.getElementById("player1_name").innerHTML=p1_name+":";
document.getElementById("player2_name").innerHTML=p2_name+":";
document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;
document.getElementById("player_question").innerHTML="question turn-"+p1_name;
document.getElementById("player_answer").innerHTML="answer turn-"+p2_name;
function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    Character1=word.charAt(1);
    halflength=Math.floor(word.length/2);
    Character2=word.charAt(halflength);
    last=word.length-1;
    character3=word.charAt(last);

remove_c1=word.replace(Character1,"_");
remove_c2=word.replace(Character2,"_");
remove_c3=word.replace(character3,"_");
questionword="<h4 id='word_display'>Q."+remove_c3+"</h4>";
input_box="<br>answer:<input type='text' id='input_answer'>";
check_button="<br><br><button class='btn btn_info' onclick='check()'>check</button>";
row=questionword+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";



}