const axios = require('axios'); 
const cheerio = require('cheerio'); 
const fs = require('fs'); 

class SpiderWebPage
{
    constructor() { 

    } 

    spiderPageSite = async function() {  
        let result = await axios.get('https://www.796t.com/p/1452907.html'); 
        let $ = cheerio.load(result.data); 
        let p_items = $('div[class="entry-content clearfix"] p'); 
        let titles = []; 
        let imgs = []; 
        $(p_items).each(function(i, item){ 
            let re = /<img src="(.*?)">/; 
            let result = re.exec($(item).html()); 
            titles.push($(item).text()); 
            if (result != undefined) 
            { 
                imgs.push(result[1]); 
            }           
        }); 
        return {titles, imgs}; 
    } 

}

module.exports = { SpiderWebPage } 
