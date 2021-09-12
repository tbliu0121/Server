const https = require('https');  // node13以后node支持了import语法

https.get('https://m.maoyan.com/ajax/moreClassicList?sortId=1&showType=3&limit=10&offset=30&&optimus_uuid=A5518FF0AFEC11EAAB158D7AB0D05BBBD74C9789D9F649898982E6542C7DD479&OPTIMUS_risk_level=71&optimus_code=10', (res) => {
    let str = '';

    res.on('data', (chunk) => {
        str += chunk;
    });

    res.on('end', () => {
        console.log(str);
    });
});