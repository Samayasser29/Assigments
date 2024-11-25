var qoutes =[
    {qoute:'“Be yourself; everyone else is already taken.”',
     author:'Oscar Wilde',
    } ,
    {qoute: '“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell dont deserve me at my best.”' ,
      author:'Marilyn Monroe',
    } ,
    {qoute: '“So many books, so little time.”',
      author:' Frank Zappa',
    } ,
    {qoute: '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”' ,
        author:' Albert Einstein',
    } ,
    {qoute: '“A room without books is like a body without a soul.”' ,
        author:'Marcus Tullius Cicero',
    } ,
    {qoute: '“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”' ,
        author:'Bernard M. Baruch',
    } ,
    {qoute: '“You only live once, but if you do it right, once is enough.”' ,
        author:'Mae West',
    } ,
    {qoute: '“Be the change that you wish to see in the world.”' ,
        author:' Mahatma Gandhi',
    } ,
    {qoute: '“To live is the rarest thing in the world. Most people exist, that is all.”' ,
        author:'Oscar Wilde',
    } ,
    {qoute: '“We accept the love we think we deserve.”' ,
        author:' Stephen Chbosky, The Perks of Being a Wallflower',
    } ,
]
var randomQoute ='' ;
var lastQoute ;
function display() {
    // do{
    //     randomQoute = Math.floor(Math.random(qoutes)*qoutes.length);

    // }while(randomQoute == lastQoute){
    //     lastQoute = randomQoute ;     
    // } 
 
    for(i=0; i<qoutes.length ;i++){ 
     if( randomQoute != lastQoute){
            lastQoute = randomQoute ; 
            randomQoute = Math.floor(Math.random(qoutes)*qoutes.length);    
    } else{
        } randomQoute = Math.floor(Math.random(qoutes)*qoutes.length);    
    }
     
    console.log(randomQoute);
    document.getElementById("qoute").innerHTML = qoutes[randomQoute].qoute ;
    document.getElementById("author").innerHTML = qoutes[randomQoute].author ;
    
}