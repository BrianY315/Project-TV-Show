function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.replaceChildren();

  const count = document.createElement("p");
  count.textContent = `Got ${episodeList.length} episode(s)`;
  rootElem.append(count);

  const list = document.createElement("div");
  list.className = "episode-list";

  episodeList.forEach((episode) => {
    const card = document.createElement("article");

    const title = document.createElement("h2");
    title.textContent = episode.name;

    const code = document.createElement("p");
    code.className = "episode-code";
    code.textContent = `S${String(episode.season).padStart(2, "0")}E${String(episode.number).padStart(2, "0")}`;

    const image = document.createElement("img");
    image.src = episode.image.medium.replace(/^http:/, "https:");
    image.alt = `Scene from ${episode.name}`;
    image.loading = "lazy";

    const summary = document.createElement("p");
    summary.className = "episode-summary";
    summary.textContent = new DOMParser().parseFromString(episode.summary, "text/html").body.textContent;

    card.append(title, code, image, summary);
    list.append(card);
  });

  rootElem.append(list);
}

window.onload = setup;
