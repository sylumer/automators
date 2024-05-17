let intTotalSeconds = dv.pages().duration.array().reduce((x, y) => x + y, 0);
let intTotalH = Math.floor(intTotalSeconds / 3600);
intTotalSeconds %= 3600;
let intTotalM = Math.floor(intTotalSeconds / 60);
let intTotalS = intTotalSeconds % 60;
dv.el("span", intTotalH + ":" + intTotalM + ":" + intTotalS);