const $currentPlayer = $(".current-player");

let selected;
let player = "X";

let positions = 
[
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function init() 
{
  selected = [];

  $currentPlayer.html(`JOGADOR DA VEZ: ${player}`);

  $(".game button").each(function() {
    $(this).html("");
    $(this).on("click", newMove);
  });
}

init();

function newMove(e) 
{
  const index = $(e.target).attr("dt-idx");
  $(e.target).html(player);
  $(e.target).off("click", newMove);
  selected[index] = player;

  setTimeout(() => 
  {
    check();
  }, 100);

  player = player === "X" ? "O" : "X";
  $currentPlayer.html(`JOGADOR DA VEZ: ${player}`);
}

function check() 
{
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (const pos of positions) 
  {
    if (pos.every((item) => items.includes(item))) 
    {
      alert("O JOGADOR '" + playerLastMove + "' GANHOU!");
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) 
  {
    alert("DEU EMPATE!");
    init();
    return;
  }
}