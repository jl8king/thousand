var myUtils={
	is_phone:function(phone) {
		if ((/^1[34578]\d{9}$/.test(phone))) {
			return true;
		}else{
			return false;
		}
	}
};