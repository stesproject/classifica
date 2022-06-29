let names = [
  "Stefano",
  "Nicola",
  "Rondi",
  "Mirko",
  "Giosue",
  "Gio",
  "Pigna",
  "Gommo"
]

const createLeaderboard = () => {
  const _names = localStorage.getItem("names");
  if (_names?.length) {
    names = JSON.parse(_names);
  }
  else {
    names.sort(() => Math.random() - 0.5)
    localStorage.setItem("names", JSON.stringify(names));
  }
  const leaderboardEl = document.querySelector(".leaderboard");
  for (const name of names) {
    const liEl = document.createElement("li")
    liEl.innerHTML = name;
    leaderboardEl.appendChild(liEl)
  }
}

createLeaderboard();