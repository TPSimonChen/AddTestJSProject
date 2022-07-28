const axios = require('axios'); 
const cheerio = require('cheerio'); 
const fs = require('fs'); 

async function downloadImg(httpUrl, filepath) { 
    let result = await axios.get(httpUrl, { 
        responseType: 'arraybuffer' 
    }); 
    let writefs = fs.createWriteStream(filepath); 
    writefs.write(result.data); 
    writefs.close(); 
} 

async function queryPageSite() { 
    let httpUrl = 'https://sobooks.net/'; 
    let result = await axios.get(httpUrl); 
    let $ = cheerio.load(result.data); 
    let a_items = $('div#cardslist>div[class="card col span_1_of_4"] a'); 
    let img_items = $('div#cardslist>div[class="card col span_1_of_4"] img'); 
    let imgurls = []; 

    fs.mkdirSync('files', {recursive:true}); 
    $(img_items).each(function(index, img){ 
        let dataoriginal = $(img).attr('data-original'); 
        imgurls.push(dataoriginal); 
    }); 
    await downloadImg(imgurls[0], `files/123.jpg`); 

} 

queryPageSite(); 
