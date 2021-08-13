function render() {
  document.querySelector("#app").innerHTML = window.location.href;
}

document.body.addEventListener('click', ev => {
  if ((ev.target as HTMLElement).matches('a')) {
    ev.preventDefault();
    const url = (ev.target as HTMLElement).getAttribute('href');
    window.history.pushState({}, url, url);
    render();
  }
})

render();
