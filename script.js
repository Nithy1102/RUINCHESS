
board=[]
b=document.querySelector(".board");
for(i=1;i<9;i++){
    for (j=1;j<9;j++) {
      const p=document.createElement("div");
      p.id=`${i}${j}`;
       board.push([i,j]);
        if((i+j)%2==0){

            p.classList.add("white");
        }
        else{
            p.classList.add("black");
        }
        b.appendChild(p);
    }
}
console.log(b);