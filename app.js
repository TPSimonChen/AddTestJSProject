const { SpiderWebPage } = require('./spidermodule'); 

let spiderwebpage = new SpiderWebPage(); 

async function spiderPageSite() { 
    let titles, imgs = await spiderwebpage.spiderPageSite(); 
    console.log(titles); 
    console.log(imgs); 
} 

spiderPageSite(); 

console.log('Ava Max'); 
