var user=prompt("请输入您的用户名:");
if(!!user){
	var ok=confirm("您输入的用户名为: \n"+user+"\n请确认。");
	if(ok){
		alert("欢迎你：\n" +user);
	}
	else{
		user=prompt("请重新输入您的用户名: ");
		alert("欢迎你: \n"+ user);
		}
	}	
	else{
		user=prompt=("请输入您的用户名：")
	}
}