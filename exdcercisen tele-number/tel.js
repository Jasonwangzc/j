const contact=[
    "Jason 123456789",
    "Alice 987654321",
    "Bob 456789123",
    "Charlie 321654987",
    "David 789123456",
    "Eve 654321789",
    "Frank 159753486",
    "Grace 753159852",
]
const para= document.querySelector("p");
const input=document.querySelector("input");
const btn=document.querySelector("button");

btn.addEventListener("click",function(){
    const value=input.value .toLowerCase(); 
    
    for (let i=0; i<contact.length;i++){
        let splitcontact=contact [i].split(" ");
        let isfound=false;
        if(splitcontact[0].toLowerCase()=== value){
            para.textContent= splitcontact[0] + "'s number is " + splitcontact[1];
            isfound=true;
            break; }
    }   
    if(!isfound){
        para.textContent="No contact found";
    }

input.value="";
}); 
        


   


