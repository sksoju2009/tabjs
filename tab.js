window.onload=function(){
	var lis=document.getElementById("list").getElementsByTagName("li");
	var divs=document.getElementById("box").getElementsByTagName("div");

	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var i=0;i<lis.length;i++){
				divs[i].style.display="none";
				lis[i].className="";
			}
			this.className="active";
			divs[this.index].style.display="block";
		}
	}
}