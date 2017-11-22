function IsNumeric(sText){
	var ValidChars = "0123456789.,";
	var IsNumber=true;
	var Char;
	
	for (i = 0; i < sText.length && IsNumber == true; i++) 
	  { 
	  Char = sText.charAt(i); 
	  if (ValidChars.indexOf(Char) == -1) 
		 {
		 IsNumber = false;
		 }
	  }
	return IsNumber;
}

function checkNumWithKoma(form){
	str = form.value;
	flag=true;
	for (i=0;i<str.length;i++){
		if (parseInt(str.charAt(i))>=0 && parseInt(str.charAt(i))<=9 || str.charAt(i)=='.' || str.charAt(i)==',' ){
			flag=true;
		}
		else{
			flag=false; break;
		}
	}
	
	if (flag==false){
		alert ("silahkan memasukan angka!");
		form.value="0";
		form.focus();
		form.select();
	}
	
}

function checkNum(form){
	var i;
	s = form.value.toString();
	for (i=0; i<s.length; i++){
		var c = s.charAt(i);
		if (isNaN(c)){
			alert ("Silahkan memasukan angka [0-9]!");
			form.value="0";
			form.focus();
			form.select();
			return false;
   		}
	}
	return true;
}
function checkAlphabet(form){
	var i;
	s = form.value.toString();
	for (i=0; i<s.length; i++){
		var c = s.charAt(i);
		if (!isNaN(c)){
			alert ("Silahkan memasukan huruf [A-Z]!");
			form.value="";
			form.focus();
			form.select();
			return false;
   		}
	}
	return true;
}

function checkNum2(form){
	str = form.value;
	flag=true;
	for (i=0;i<str.length;i++){
		if (parseInt(str.charAt(i))>=0 && parseInt(str.charAt(i))<=9 || str.charAt(i)=='.' ){
			flag=true;
		}
		else{
			flag=false; break;
		}
	}
	
	if (flag==false){
		alert ("silahkan memasukan angka atau titik(.)!");
		form.value="0";
		form.focus();
		form.select();
	}
	
}

function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}

function checkNilai(form){
	str = form.value;
	flag=true;
	for (i=0;i<str.length;i++){
		if (parseInt(str.charAt(i))>=0 && parseInt(str.charAt(i))<=9 || str.charAt(i)=='.' || str.charAt(i)==',' ){
			if (parseInt(str)>=0 && parseInt(str)<=100)
				flag=true;
			else
				flag=false; break;
		}
		else{
			flag=false; break;
		}
	}
	
	if (flag==false){
		alert ("silahkan memasukan angka dengan nilai ( 0 - 100) !");
		form.value="0";
		form.focus();
		form.select();
	}
	
}

function toWords(s, id){
	
	var th = ['','ribu','juta', 'milyar','trilyun'];
	//alert (s+''+id);
	var dg = ['nol','satu','dua','tiga','empat', 'lima','enam','tujuh','delapan','sembilan']; 
	var tn = ['sepuluh','sebelas','dua belas','tiga belas', 'empat belas','lima belas','enam belas', 'tujuh belas','delapan belas','sembilan belas']; 
	var tw = ['dua puluh','tiga puluh','empat puluh','lima puluh', 'enam puluh','tujuh puluh','delapan puluh','sembilan puluh']; 

		//s = s.replace(/[\, ]/g,''); 
		//if (s != String(parseFloat(s))) 
		//	return 'not a number'; 
	
		//var x = s.indexOf('.'); 
		//if (x == -1) 
		var prefix = '';
		var str = ''; 
		var sk = 0;
		//alert (n);
		if (s.charAt(0)=="-"){
			//alert ("masuk");
			s = s.substr(1,s.length);
			prefix = 'minus ';
		} 
		var n = s.split(''); 
		//alert (n);

		x = n.length; 
		if (x > 15) 
			return 'too big'; 

	
		for (var i=0; i < x; i++) {
			//alert (str);
			if ((x-i)%3==2) {
				if (n[i] == '1') {
					//str += tn[Number(n[i+1])] + ' ';
					str += tn[n[i+1]] + ' ';
					i++; sk=1;
				} 
				else if (n[i]!=0) {
					str += tw[n[i]-2] + ' ';
					sk=1;
				}
			} 
			else if (n[i]!=0) {
				str += dg[n[i]] +' ';
				if ((x-i)%3==0) 
					str += 'ratus ';
				sk=1;
			} 
			if ((x-i)%3==1) {
				if (sk) 
					str += th[(x-i-1)/3] + ' ';
				sk=0;
			}
		} 
		
		if (x != n.length) {
			var y = n.length; 
			str += 'koma '; 
			for (var i=x+1; i<y; i++){
				str += dg[n[i]] +' ';
			}
		}
		
		if (s==0 || s=="")
			str = "nol ";
		
		str = str.replace('satu ratus','seratus');
		str = str.replace('satu ribu','seribu');
		
		if (id==""){
			return ( prefix + str + 'rupiah');
			//alert("t");
		}
		else{
			if (id == "kilometer_bil")
				document.getElementById(id).innerHTML = prefix + str + 'KM';
			else
				document.getElementById(id).innerHTML = prefix + str + 'rupiah';
		}
	}

	function str_rev(string){
		var len = string.length;
		var len2 = (len-1);
		var rev_string='';
		for (i=len2;i>=0;i--){
			rev_string = rev_string + string.charAt(i);
			len2 = len2 - 1;
		}
		return rev_string;
	}

	function numberFormat(nStr, field){

		var prefix = prefix || '';
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)){
			x1 = x1.replace(rgx, '$1' + '.' + '$2');
		}
		if (field=='')
			return x1+x2;
		else
			field.value = x1+x2;
	}

	function addCommas(nStr){
		nStr += '';
		x = nStr.split(',');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + '.' + '$2');
		}
		return x1 + x2;
	}
	function money_encode_js(form){
		var s = form.value.replace(/([ .,:;*'"+_=?^${}<>()|[\]\/\\abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMONPQRSTUVWXYZ])/g, '');
		var s = form.value.replace(/([ .,:;*'"+_=?^$!@#%&*~{}<>()|[\]\/\\\`\abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMONPQRSTUVWXYZ])/g, '');
		if(form == '')
			form.value = 0;
		else
			form.value = addCommas(s);
	}
	function money_encode_js_value(val){
		return addCommas(val);
	}
	function trim_js(str){
		var res="";
		temp = str.split(".");
		for(var i=0;i<temp.length;i++){
			res += temp[i];
		}
		return res;
	}
	
	
	function CheckLoginForm(form_login){
		//alert ("testtt");
		if(form_login.password.value=="" && form_login.username.value==""){
			form_login.username.select();
			//alert("Email dan password kosong.");
			document.getElementById("notificationArea").innerHTML="Username dan password belum diisi!";
			return false;
		}
		if(form_login.username.value==""){
			form_login.username.select();
			//alert("Email kosong.");
			//document.getElementById("notificationArea").innerHTML="Username belum diisi!";
			return false;
		}
		if(form_login.password.value==""){
			form_login.password.select();
			//alert("Password kosong.");
			//document.getElementById("notificationArea").innerHTML="Password belum diisi!";
			return false;
		}
		return true;
	}

	function getXMLHTTPRequest(){
		var request = false;
		try{request = new XMLHttpRequest();}
		catch(err1){try{request = new ActiveXObject("Msxml2.XMLHTTP");}
		catch(err2){try{request = new ActiveXObject("Microsoft.XMLHTTP");}
		catch(err3){request = false;}}}
		return request;
	}
	
	var myRequest = getXMLHTTPRequest();
	var passwd;
	
	function checkAccount(username,password){
		//alert ("masuk");
		if(username.value.length>0 && password.value.length>0){
			passwd = enc(password.value);
			form_login.password.value = passwd;
			//alert (passwd);
			//alert ("includes/login_check.php?username="+username.value+"&password="+passwd);
			//myRequest.open("GET","includes/login_check.php?username="+username.value+"&password="+passwd,true);
			//myRequest.onreadystatechange = accountResponse;
			//myRequest.send(null);
		}
	}
	
	function accountResponse(){
		document.getElementById("notificationArea").innerHTML = "silahkan tunggu ...";
		document.form_login.password.value = passwd;
		document.form_login.submit();
		document.form_login.password.value = '';
	
		if(myRequest.readyState==4){
		  if(myRequest.responseText=="1"){
			document.getElementById("notificationArea").innerHTML = "Login sukses!";
			document.form_login.password.value = passwd;
			document.form_login.submit();
			//document.form_login.password.value = '';
		  }
		  else{
			//document.getElementById("notificationArea").innerHTML = "checking...";
		  }
		}else{
		  //document.getElementById("notificationArea").innerHTML = "Sedang validasi login...";
		}
	}
	
	function showLoader(){
		document.getElementById('preloading').style.display = '';		
	}

	function hideLoader(){
		document.getElementById('preloading').style.display = 'none';		
	}
	//------------------------------------------------------------------------------------------------//
	//numberToRoman		: merubah nilai numeral menjadi angka romawi
	//created by		: Vimala -> http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
	//input 			: 1, 4, 5
	//output 			: I, IV, V
	//------------------------------------------------------------------------------------------------//
	function romanize (num) {
		if (!+num)
			return false;
		var	digits = String(+num).split(""),
			key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
				   "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
				   "","I","II","III","IV","V","VI","VII","VIII","IX"],
			roman = "",
			i = 3;
		while (i--)
			roman = (key[+digits.pop() + (i * 10)] || "") + roman;
		return Array(+digits.join("") + 1).join("M") + roman;
	}
