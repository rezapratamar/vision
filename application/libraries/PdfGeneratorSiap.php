<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
 
include_once APPPATH.'/libraries/mpdf60/mpdf.php';
 
class PdfGeneratorSIAP {
 
    public $param;
    public $pdf;
 
    public function __construct()
    {
        $this->pdf = new mPDF('utf-8', array(95,135));
    }
}
