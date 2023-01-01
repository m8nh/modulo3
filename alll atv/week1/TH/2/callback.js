function dowloand(url) {
    setTimeout(() => {
        console.log(`Dowloand: ${url}...`);
    },1000);
}

function process(picture) {
    console.log(`Process: ${picture}`);
}

let url ='https://www.javascripttutorial.net/pic.jpg';
dowloand(url);
process(url);