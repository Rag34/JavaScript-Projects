document.addEventListener("DOMContentLoaded", function () {
  let gen = document.getElementById("generate");
  let copy = document.getElementById("copy");
  let pwd = document.getElementById("output");
  let output="";
  gen.addEventListener("click", function () {
    generate();
  });

  copy.addEventListener("click", function () {
    copytxt();
  });

  function generate() {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbols = "!@#$%^&*()_+/";
    let salphabets = "abcdefghijklmnopqrstuvwxyz";
    function ralp() {
      // Random r=new Random();
      let ralphabets = alphabets[Math.floor(Math.random() * alphabets.length)];
      return ralphabets;
    }

    function salpha() {
      let salphab = salphabets[Math.floor(Math.random() * salphabets.length)];
      return salphab;
    }

    function rsym() {
      let rsymb = symbols[Math.floor(Math.random() * symbols.length)];
      return rsymb;
    }

    function rnum() {
      let nums = Math.floor(Math.random() * 10);
      return nums;
    }
     output = ralp() + " " + rsym() + " " + rnum() + " " + salpha();
    pwd.innerHTML = output;

    console.log(output);
  }

  function copytxt(text){
    const tempInput = document.createElement("textarea");
        tempInput.value = output;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert('Password Copied Succesfully')
    
}
});
