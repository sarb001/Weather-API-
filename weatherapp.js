var inputpart  =  document.querySelector("#textpart")
var buttonpart =  document.querySelector("#button-part")
var outputpart = document.querySelector("#output-two")

var serverURL = "https://api.openweathermap.org/data/2.5/weather?q="
var key = "&appid=d3446f47edcdc6112d572819e1ee43af"

function getTranslationURL(text)
{
  return   serverURL +  text + key ; 
}

buttonpart.addEventListener ("click" , EventHandler ) 
 function EventHandler()

{
// input taken

    var inputText = textpart.value;
    fetch(getTranslationURL(inputText))
    
      .then(response => response.json())
      .then(json => 
       {
        
        var translatedText = " country: " + json['sys']['country'] + " | Temperature: " + json['main']['temp']+ " | Weather: "  + json['weather'][0]['description']+ "| Wind/Speed: "+ json['wind']['speed'] ;
        outputpart.innerText = translatedText;
        
       }
     )
}
