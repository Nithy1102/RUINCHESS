
b=[]
board=document.querySelector(".board");
for(i=1;i<9;i++){
    for (j=1;j<9;j++) {
      const p=document.createElement("div");
       b.push([i,j]);
        if((i+j)%2==0){

            p.classList.add("white");
        }
        else{
            p.classList.add("black");
        }
        board.appendChild(p);
    }
}
