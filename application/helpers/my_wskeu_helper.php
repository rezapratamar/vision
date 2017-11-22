<?php 
function funcSendWS($param)
{
	$param = urlencode($param);
	$url='http://10.210.1.186/webservice_spmb_app/interface/web_services.php?'.$param;
	$curl = curl_init();
	
	$data = '[]';
	
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
	
	$ret = 0;
	
	if(curl_errno($curl)) {
		$ret=0;
	}

	if(isset($result)){
		$ret=0;
		$aResult = json_decode($result);
		if($aResult!=null){
			$ret = $aResult->result;
		}
	} else {
		$ret=0;
	}
	
	curl_close($curl);
	
	return $ret;
}

?>