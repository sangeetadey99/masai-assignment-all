let loading = setInterval(() => {
    console.log("Loading...");
}, 1000);
setTimeout(() => {
    clearInterval(loading);
    console.log("Loading complete!");
}, 5000);