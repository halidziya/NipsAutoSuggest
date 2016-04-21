var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

/*

var xhr = new XMLHttpRequest();
xhr.open('GET', chrome.extension.getURL('nips.vectors.txt'), true);

xhr.onreadystatechange = function()
{
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
    {
       alert(xhr.responseText);
    }
};
xhr.send();*/