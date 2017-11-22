<?php
function funcSendEmail($oThisClass,$sTo, $sSubject,$sMessage)
{
	$oThisClass->load->library('email');
	$config = Array(
		'protocol' => 'smtp',
		'smtp_host' => 'smtp.gmail.com',
		'smtp_port' => 465,
		'smtp_user' => 'scm@divusi.com',
		'smtp_pass' => 'scmdivusi147!',
		'mailtype'  => 'html',
		'charset'   => 'iso-8859-1'
	);
	$oThisClass->load->library('email', $config);
	$oThisClass->email->set_mailtype("html");
	$oThisClass->email->set_newline("\r\n");
	$oThisClass->email->from('adminsi@unpar.ac.id', 'PMB Universitas Parahyangan');
	$oThisClass->email->to($sTo);
  $oThisClass->email->cc("agung.yudhistira@divusi.com");
	$oThisClass->email->subject($sSubject);
	$oThisClass->email->message($sMessage);

	//$oThisClass->email->send();
	// Set to, from, message, etc.

	$result = $oThisClass->email->send();
}

function sendEmail($oThisClass,$to,$subject,$message){
	$oThisClass->load->library('email');
	$config = array(
	   	'charset' =>  'utf-8',
	   	'useragent' =>  'Codeigniter',
	   	'protocol'=>  "smtp",
	   	'mailtype'=>  "html",
	   	'smtp_host'=>  "ssl://smtp.gmail.com",
	   	'smtp_port'=>  "465",
	    'smtp_timeout'=>  "400",
	    // 'smtp_user'=>  'bikeu@unpar.ac.id',
	    // 'smtp_pass'=>  "201015bk",
			'smtp_user' => 'scm@divusi.com',
			'smtp_pass' => 'scmdivusi147!',
	    'crlf'=> "\r\n",
	    'newline'=> "\r\n",
	    'wordwrap' =>  TRUE,
	  	'mailtype'  => 'html'
	);
		$oThisClass->email->set_mailtype("html");
  	$oThisClass->email->initialize($config);
  	$oThisClass->email->from('bikeu@unpar.ac.id', 'PMB Universitas Parahyangan');
    $oThisClass->email->to($to);
		$oThisClass->email->cc('adminsi@unpar.ac.id');
    $oThisClass->email->subject($subject);
    $oThisClass->email->message($message);
    return $oThisClass->email->send();
}

function sendEmailbk($oThisClass,$to,$subject,$message){
	$oThisClass->load->library('email');
	$config = array(
	   	'charset' =>  'utf-8',
	   	'useragent' =>  'Codeigniter',
	   	'protocol'=>  "smtp",
	   	'mailtype'=>  "html",
	   	'smtp_host'=>  "ssl://smtp.gmail.com",
	   	'smtp_port'=>  "465",
	    'smtp_timeout'=>  "400",
	    // 'smtp_user'=>  'bikeu@unpar.ac.id',
	    // 'smtp_pass'=>  "201015bk",
			'smtp_user' => 'scm@divusi.com',
			'smtp_pass' => 'scmdivusi147!',
	    'crlf'=> "\r\n",
	    'newline'=> "\r\n",
	    'wordwrap' =>  TRUE,
	  	'mailtype'  => 'html'
	);
		$oThisClass->email->set_mailtype("html");
  	$oThisClass->email->initialize($config);
  	$oThisClass->email->from('bikeu@unpar.ac.id', 'PMB Universitas Parahyangan');
    $oThisClass->email->to($to);
		$oThisClass->email->cc('adminsi@unpar.ac.id');
    $oThisClass->email->subject($subject);
    $oThisClass->email->message($message);
    return $oThisClass->email->send();
}

?>
