
//-------------------------------------------------------
// Pull-Up and Pull-Down callbacks for "Pull" page
//-------------------------------------------------------

var facts_full = Array();
var facts_short = Array();
var new_height="600";
var count_k=0;
var temp_data;

(function pullPagePullImplementation($) {
  "use strict";
  var pullDownGeneratedCount = 0,
      pullUpGeneratedCount = 0,
      listSelector = "div.pull-demo-page ul.ui-listview",
      lastItemSelector = listSelector + " > li:last-child";
    
 
  function gotPullDownData(event, data) {
    
	
	$.getJSON("http://drawcam.co.uk/dbconnect/dbConnect.php",function(result){
		console.log(result);
		
		//0=id;1=fact;2=user;3=time,4fullfact
		console.log(result.length);
		var newfact ="";
		
		for(var k in result){
			
			var speech_css = "speech_2";
			var user_info = "user_info_2";
			var speech = isEven(k);
			if (speech){
				var speech_css = "speech_1";
				var user_info = "user_info_1";
			}
			
			facts_full[k] = result[k][4];
			facts_short[k] = result[k][1];
			
			var key = k;
			
			newfact = "<div class='boxk'>"+
			"<div class='"+speech_css+"' id='fact"+count_k+"' onclick=kevtc('"+key+"')  >"+
			result[k][1]
			+"</div><div class='"+user_info+"' >"+
			result[k][2]+" at "+result[k][3]+
			"</div></div>";
				
				//onclick=kevtc('"+full_fact+"','"+ke+"')
			
			$("#ktcon").prepend(newfact);
			
			new_height = $("#ktcon")[0].scrollHeight;
			
			count_k++;
			
			
			console.log("key is "+k+" fact id is "+result[k][0]+" fact is "+result[k][1]+" posted by "+result[k][2]+" at "+result[k][3]);
		}
		//alert($("#ktcon")[0].scrollHeight);
		//new_height+=600;
		//alert(new_height);
		//$("#ktcon").height(new_height+55)
		
		
		
		
    });
	 setTimeout(function(){
         data.iscrollview.refresh(); 
      }, 600);
       // Refresh the iscrollview
    
	temp_data=data;
	}
    
  function onPullDown (event, data) { 
    
      gotPullDownData(event, data);
       
      
    }    

  // Called when the user completes the pull-up gesture.
   
  
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
  var pullDownGeneratedCount = 0,
    pullUpGeneratedCount = 0,
    listSelector = "div.short-pull-demo-page ul.ui-listview",
    lastItemSelector = listSelector + " > li:last-child";
      
  function gotPullDownData(event, data) {
	  
	  $.ajax({
		  url: "http://drawcam.co.uk/dbconnect/dbConnect.php",
		  cache: false
		})
		.done(function( data ) {
			alert(data);
	    });
	  
	  
	  
    var i,
        newContent = "";
    for (i=0; i<3; i+=1) {
      newContent = "<li>solid su" + i + "</li>" + newContent;
      }
    $(listSelector).prepend(newContent).listview("refresh");
    data.iscrollview.refresh();
    }

  
  
  function onPullDown (event, data) { 
     
      gotPullDownData(event, data);
	  }  
  
    
  
  $(document).delegate("div.short-pull-demo-page", "pageinit", 
    function bindShortPullPagePullCallbacks(event) {
      $(".iscroll-wrapper", this).bind( {
      iscroll_onpulldown : onPullDown
      } );
    }); 
 
  }(jQuery));



function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

function kevtc(obj){
	//alert(obj+" "+facts[obj]);
	
	var curr = $("#fact"+obj).css("max-height");
	if(curr=="1000px"){
		$("#fact"+obj).css("max-height",220);
		$("#fact"+obj).html(facts_short[obj]);
		
	}else{
		$("#fact"+obj).css("max-height",1000);
		$("#fact"+obj).html(facts_full[obj]);
		
	}
	setTimeout(function(){
         temp_data.iscrollview.refresh(); 
      }, 600);
	
}