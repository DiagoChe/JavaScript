var user=prompt("�����������û���:");
if(!!user){
	var ok=confirm("��������û���Ϊ: \n"+user+"\n��ȷ�ϡ�");
	if(ok){
		alert("��ӭ�㣺\n" +user);
	}
	else{
		user=prompt("���������������û���: ");
		alert("��ӭ��: \n"+ user);
		}
	}	
	else{
		user=prompt=("�����������û�����")
	}
}