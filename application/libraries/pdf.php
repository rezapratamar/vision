<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
 
class pdf {
    
    function pdf()
    {
        $CI = & get_instance();
        log_message('Debug', 'mPDF class is loaded.');
    }
 
    function load($param=NULL)
    {
        include_once APPPATH.'/libraries/mpdf60/mpdf.php';
         
        if ($param == NULL)
        {
            $param = '"en-GB-x","A4","","Times New Roman",15,15,10,15,6,3';         
        }
         
        return new mPDF($param);
    }
}