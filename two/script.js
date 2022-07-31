setInterval(() => {
    const date = new Date();
    let time = `${date.getDay()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);

let i = 0;

setInterval(() => {
    i+= 1;
    console.log(i);
}, 1000);