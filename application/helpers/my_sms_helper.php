<?php 
function funcSendSMS($sTo,$sMessage)
{
	$sMessage = (strlen($sMessage) > 159) ? substr($sMessage, 0, 159) : $sMessage;
	
	//sms unpar
	$url = 'http://10.210.1.21/gammu/kirim.php?op=send';
	$data = array('nohp' => $sTo, 'pesan' => $sMessage, 'modem' => 'SMS-GATEWAY-UNPAR', 'modem' => 'SMS-GATEWAY-UNPAR', 'submit' => 'Kirim SMS');

	// use key 'http' even if you send the request to https://...
	$options = array(
		'http' => array(
			'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
			'method'  => 'POST',
			'content' => http_build_query($data)
		)
	);
	$context  = stream_context_create($options);
	$result = file_get_contents($url, false, $context);

	//sms divusi
	/*$url='https://dev.divusi.com/smsgw/send/multiple';
	$curl = curl_init();
	
	$message['msisdnTo'] = $sTo;
	$message['message']= $sMessage;
	$data=json_encode($message);
	$data = '['.$data.']';
	
	curl_setopt($curl, CURLOPT_POST, 1);
	curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
	
	curl_setopt($curl, CURLOPT_HTTPHEADER, array(
		'Content-Type: application/json'
	));
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	$result = curl_exec($curl);
	
	if(curl_errno($curl)) {
		//echo(curl_error($curl));
	}
	curl_close($curl);*/
}

?>