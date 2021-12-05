let svg=document.getElementById("svg6");
	lineX = (i)=>{
				let line=document.createElement("line");
				let axis = i*20;
				line.className="line";
					line.setAttribute("x1",axis);									line.setAttribute("y1",0);												line.setAttribute("x2",axis); 											line.setAttribute("y2",400);
				
				return line
				}
				lineY= (i)=>{
				let line=document.createElement("line");
				let axis = i*20;
				line.className="line";
					line.setAttribute("x1",0);									line.setAttribute("y1",axis);												line.setAttribute("x2",400); 											line.setAttribute("y2",axis);
				
				return line
				}
let render =()=>{
				for(i=0; i<20; i++){
			svg.appendChild(lineX(i))
			svg.appendChild(lineY(i))
				}
				console.log(svg.outerHTML)
}

