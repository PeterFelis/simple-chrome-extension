var toggle

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.get(['status'], function (result) {
    if (result.status!=undefined) toggle=result.status;
    writeBadge();
  })
})
  

chrome.commands.onCommand.addListener(function(command){
  if (command=='toggle-badge'){ 
      toggle=!toggle;
      writeBadge();   
      chrome.storage.sync.set({'status': toggle})
 }
})
 

function writeBadge(){
  if (toggle) tekst="aan"; else tekst=""
  chrome.browserAction.setBadgeTexttext:tekst})
}