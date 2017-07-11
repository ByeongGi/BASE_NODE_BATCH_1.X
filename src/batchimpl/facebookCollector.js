phantom.casperPath = '../node_modules/casperjs';
phantom.injectJs('../node_modules/casperjs/bin/bootstrap.js');
// phantom.outputEncoding = 'utf-8';
var fs = require('fs');
var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    clientScripts: '../node_modules/jquery/dist/jquery.js',
    pageSettings: {
        loadImages: false,
        loadPlugins: false,
        webSecurityEnabled: false,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
    }
});
//open Facebook
casper.start().thenOpen("https://www.facebook.com", function () {
    console.log("Facebook website opened!!!!");
    console.log("해당 id와 pw로 로그인 합니다.");
    this.evaluate(function () {
        document.getElementById("email").value = "";
        document.getElementById("pass").value = "";
        document.querySelector("#loginbutton input").click();
    });
    this.wait(2000, function () {
        this.evaluate(function () {
            document.getElementById("email").value = "";
            document.getElementById("pass").value = "";
            document.querySelector("#loginbutton input").click();
        });
    });
});
//스크린샷 찍고 페이지 저장하기
casper.thenOpen('http://www.facebook.com/groups/1553922558224086', function () {
    console.log("해당 Page 이동합니다.");
    //이미지 주소 받아오기
    this.wait(5000, function () {
        // this.capture('google1.png');
        this.echo('LOG NEXT COLLOECT !!!!!!!!!!!');
    });
});
var temp = 1;
casper.repeat(100, function () {
    console.log('반복 시작');
    var images = this.evaluate(function () {
        var allContent = [];
        var $postList = $('#pagelet_group_mall .mbm');
        for (var index = 0; index <= $postList.length; index++) {
            var id = $(document.querySelectorAll('#pagelet_group_mall .mbm')[index]).attr('id');
            var imgUrl = $('.fbUserContent .mtm img', $postList[index]).attr('src');
            var postContent = $('.userContent ', document.querySelectorAll('#pagelet_group_mall .mbm')[index]).text();
            allContent.push({ 'id': id, 'imgUrl': imgUrl, 'postContent': postContent });
        }
        return allContent;
    });
    console.log('=======================================');
    console.log('COUNT : ' + images.length);
    console.log('=======================================');
    var date = new Date();
    var filename = 'data/' + date.toLocaleDateString() + ' ' + date.toLocaleTimeString() + '.json';
    if (Math.floor(images.length / (temp * 100)) == 1) {
        console.log('FILE NAME : ' + filename);
        fs.write(filename, JSON.stringify(images));
        temp++;
        // fs.close();
    }
    console.log("Scroll");
    this.wait(1, function () {
        this.scrollToBottom();
    });
    console.log("Scroll End");
});
casper.run();
