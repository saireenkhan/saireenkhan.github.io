var names =  new Array();
names[0]="John";
names[1]="Jack";
names[2]="jimmy";
names[3]="Jackson";
names[4]="ben stokes";
names[5]="williamson";
names[6]="brian lara";
for(var i = 0 ; i < names.length ; i++){
    if(names[i].charAt(0)==="j"||names[i].charAt(0)==="J"){
        console.log("Goodbye! " +  names[i]);
    }
else{
    console.log("Hello! " +  names[i]);
}
}