<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

include_once APPPATH.'/libraries/mpdf60/mpdf.php';

class M_pdf_rekap {

    public $param;
    public $pdf;

    public function __construct($param = '"en-GB-x","F4","","",10,10,10,10,6,3')
    {
        $this->param =$param;
        $this->pdf = new mPDF($this->param);
    }
}
