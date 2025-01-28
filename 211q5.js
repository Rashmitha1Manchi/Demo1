<<<<<<< HEAD
function fetchData(url) {
    return new Promise((resolve, reject) => {
        if (url.includes("error")) {
            reject("Error: Invalid URL");
        } else {
                resolve("Data fetched successfully.");
        };
    });
}
fetchData("https://example.com/data")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
fetchData("https://example.com/error")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
=======
function fetchData(url) {
    return new Promise((resolve, reject) => {
        if (url.includes("error")) {
            reject("Error: Invalid URL");
        } else {
                resolve("Data fetched successfully.");
        };
    });
}
fetchData("https://example.com/data")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
fetchData("https://example.com/error")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
>>>>>>> a500ef41e4adae4d705e1017472fe84fe3bb6b3f
    });