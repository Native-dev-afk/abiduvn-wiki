const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const backToHome = (event) => {
    event.preventDefault()
    window.history.pushState({}, "", "/");
    handleLocation();
}
const routes = {
    404: "./../pages/404.html",
    "/": "./../index.html",
    "/1": "./../pages/1.html",
    "/2": "./../pages/2.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("root").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();