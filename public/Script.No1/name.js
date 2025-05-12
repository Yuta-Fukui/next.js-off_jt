let input="";
let text = document.getElementById("nameText").addEventListener("input", function(){
    input =document.getElementById("nameText").value;
})

const btn = document.getElementById("clickBtn").addEventListener("click", function() {
  alert(input + "さんこんにちは！");
});