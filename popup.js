// function cookieinfo(){
//
//      chrome.tabs.query({"status":"complete","windowId":chrome.windows.WINDOW_ID_CURRENT,"active":true}, function(tab){
//             console.log(JSON.stringify(tab));
//             chrome.cookies.getAll({"url":tab[0].url},function (cookie){
//                 console.log(cookie.length);
//                 allCookieInfo = "";
//                 for(i=0;i<cookie.length;i++){
//                     console.log(JSON.stringify(cookie[i]));
//
//                     allCookieInfo = allCookieInfo + JSON.stringify(cookie[i]);
//                 }
//                 localStorage.currentCookieInfo = allCookieInfo;
//             });
//     });
// }


function addDirectory() {
  $('#addBtnDiv').hide();
  $('#newDirDiv').show();
}

function appendDir() {
  var newDir = $('#newDir').val();
  if (newDir.length === 0) {
    $('#worning').append(
      "<a href='#' class='list-group-item list-group-item-danger'> High Light Note Book Name Can Not Be Empty.</a>"
    );
  } else {
    // ajax to create new directory on server, add directory on poplist, and add directory on page head.
    $('#directory').append(
      "<a href='#' class='list-group-item glyphicon glyphicon-book'> " +
      newDir + "</a>");
    $('#addBtnDiv').show();
    $('#newDirDiv').hide();
    $('#worning').hide();
  }
}


function start() {

  var backgroundWindow = chrome.extension.getBackgroundPage();
  // // var backgroundPageController = backgroundWindow.aiesec.backgroundPageController();
  // // backgroundPageController.loadBootstrap();
  //
  backgroundWindow.popupAction();
  window.close();
}


$('#addBtn').on('click', addDirectory);
$('#newDirBtn').on('click', appendDir);
$('#directory').on('click', start);


// window.onload=cookieinfo;
