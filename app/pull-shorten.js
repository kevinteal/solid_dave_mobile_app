// JavaScript Document
(function pullPagePullImplementation($) {
  "use strict";
  function onPullDown (event, data) { 
  get_server_data();
    }    
  // Set-up jQuery event callbacks
  $(document).delegate("div.pull-demo-page", "pageinit", 
    function bindPullPagePullCallbacks(event) {
      $(".iscroll-wrapper", this).bind( {
      iscroll_onpulldown : onPullDown
      } );
    } );  

  }(jQuery));

//-------------------------------------------------------
// Pull-down and Pull-up callbacks for "Short Pull" page
//-------------------------------------------------------

(function shortPullPagePullImplementation($) { 
  "use strict";
    
  function onPullDown (event, data) { 
    get_server_data(event, data);
	}  
  
  $(document).delegate("div.short-pull-demo-page", "pageinit", 
    function bindShortPullPagePullCallbacks(event) {
      $(".iscroll-wrapper", this).bind( {
      iscroll_onpulldown : onPullDown
      } );
    }); 
 
  }(jQuery));

//-------------------------------------------------------
// Pull-down and Pull-up callbacks for "Short Pull" page
//-------------------------------------------------------

function get_server_data(event, data){
	//var iscrollview = data.iscrollview;
	$.ajax({
		  url: "http://drawcam.co.uk/dbconnect/dbConnect.php",
		  cache: false
		})
		.done(function( data ) {
			alert(data);
	    });
		
var i,
        newContent = "";        
    for (i=0; i<3; i+=1) {  // Generate some fake new content
      newContent = "<li>stuff from server"+i+"</li>" + newContent;
      }
    $("div.pull-demo-page ul.ui-listview").prepend(newContent).listview("refresh");  // Prepend new content and refresh listview
    data.iscrollview.refresh();    // Refresh the iscrollview
}























