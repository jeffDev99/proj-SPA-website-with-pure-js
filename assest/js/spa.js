import router from "./router.js";
document.addEventListener("click",(e)=>{
    e.preventDefault();
    if (!e.target.className.includes("nav-link")) {
        return false
    }
    urlRoutes(e)
})
function urlRoutes(e) {
    window.history.pushState({},"",e.target.href)
    locationHandler()
}
async function locationHandler() {
    const loc = window.location.pathname
    const route = router[loc] || router[404]
    const html = await fetch(route.template).then(res => res.text())
    document.querySelector("#content").innerHTML = html
    document.title = route.title
}
// when click on back button
window.onpopstate = locationHandler
