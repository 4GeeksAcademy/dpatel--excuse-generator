window.onload = function() {
  let who = [
    "My sister ",
    "My mother ",
    "My dad ",
    "My dog ",
    "My best friend "
  ];
  let action = [
    " crushed ",
    " burned ",
    " yelled at ",
    " chewed up ",
    " puked on "
  ];
  let what = [
    " my homework ",
    " my car ",
    " my computer ",
    " my dog ",
    " my phone "
  ];
  let when = [
    " last night.",
    " this morning.",
    " during vacation.",
    " during yoga.",
    " 5 minutes ago."
  ];

  function generateExcuse() {
    let rdm1 = Math.floor(Math.random() * who.length);
    let rdm2 = Math.floor(Math.random() * action.length);
    let rdm3 = Math.floor(Math.random() * what.length);
    let rdm4 = Math.floor(Math.random() * when.length);

    let excuse = who[rdm1] + action[rdm2] + what[rdm3] + when[rdm4];

    document.getElementById("excuse").innerHTML = excuse;
  }

  generateExcuse();
};
