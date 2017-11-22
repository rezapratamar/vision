<?php

class PdfGenerator
{
  public function generate($html,$filename)
  {
    define('DOMPDF_ENABLE_AUTOLOAD', false);
    require_once("./vendor/dompdf/dompdf/dompdf_config.inc.php");

    $dompdf = new DOMPDF();
    // // $dompdf->set_paper("A5","landscape");
    // $dompdf->set_paper(array(0, 0, 335, 585), 'landscape');
    $dompdf->set_paper(array(0, 0, 355, 585), 'landscape');
    $dompdf->load_html($html);
    $dompdf->render();
    $dompdf->stream($filename.'.pdf',array("Attachment"=>0));
  }
}
