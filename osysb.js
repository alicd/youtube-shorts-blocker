

function removeShorts() {
  const currentUrl = window.location.href;

  if (currentUrl.includes("youtube.com/shorts/")) {
    history.back();
  }
  document.querySelectorAll(['ytd-rich-section-renderer', 'grid-shelf-view-model']).forEach(el => {
    if (el.innerText.includes('Shorts')) {
      el.remove();
    }
  });

  const parent = document.getElementById("items");
  if (parent && parent.children.length > 2) {
      parent.children[1].remove();
  }
  
}

removeShorts();

setInterval(removeShorts, 1000);
