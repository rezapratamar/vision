<?php


function TanggalIndo($date){
	$BulanIndo = array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");

	$tahun = substr($date, 0, 4);
	$bulan = substr($date, 5, 2);
	$tgl   = substr($date, 8, 2);

	$result = $tgl . " " . $BulanIndo[(int)$bulan-1] . " ". $tahun;
	return($result);
}

function TanggalIndoShort($date){
	$BulanIndo = array("Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des");

	$tahun = substr($date, 0, 4);
	$bulan = substr($date, 5, 2);
	$tgl   = substr($date, 8, 2);

	$result = $tgl . " " . $BulanIndo[(int)$bulan-1] . " ". $tahun;
	return($result);
}

function convertDate($date){

	$e = explode("-",$date);

	$new_date = $e[2].'-'.$e[1].'-'.$e[0];

    return $new_date;
}

function convertDateIndotoDb($date){
    $e = explode(" ",$date);
        //$b = intval($e[1]);
    $bulan = $e[1];

    switch ($bulan) {
     case "Januari":
     $bulan_new = "01";
     break;
     case "Februari":
     $bulan_new = "02";
     break;
     case "Maret":
     $bulan_new = "03";
     break;
     case "April":
     $bulan_new = "04";
     break;
     case "Mei":
     $bulan_new = "05";
     break;
     case "Juni":
     $bulan_new = "06";
     break;
     case "Juli":
     $bulan_new = "07";
     break;
     case "Agustus":
     $bulan_new = "08";
     break;
     case "September":
     $bulan_new = "09";
     break;
     case "Oktober":
     $bulan_new = "10";
     break;
     case "November":
     $bulan_new = "11";
     break;
     case "Desember":
     $bulan_new = "12";
     break;
     default:
     $bulan_new = "";
 }
 $new_date = $e[2].'-'.$bulan_new.'-'.$e[0];

 return $new_date;
}
if ( ! function_exists('romawi'))
{
   function romawi($romawi)
   {
      switch ($romawi)
      {
         case 1:
         return "I";
         break;
         case 2:
         return "II";
         break;
         case 3:
         return "III";
         break;
         case 4:
         return "IV";
         break;
         case 5:
         return "V";
         break;
         case 6:
         return "VI";
         break;
         case 7:
         return "VII";
         break;
         case 8:
         return "VIII";
         break;
         case 9:
         return "XI";
         break;
         case 10:
         return "X";
         break;
         case 11:
         return "XI";
         break;
         case 12:
         return "XII";
         break;
         case 13:
         return "XIII";
         break;
         case 14:
         return "XIV";
         break;
         case 15:
         return "XV";
         break;
         case 16:
         return "XVI";
         break;
         case 17:
         return "XVII";
         break;
         case 18:
         return "XVIII";
         break;
         case 19:
         return "XIX";
         break;
         case 20:
         return "XX";
         break;
         case 21:
         return "XXI";
         break;
         case 22:
         return "XXII";
         break;
         case 23:
         return "XXIII";
         break;
         case 24:
         return "XXIV";
         break;
         case 25:
         return "XXV";
         break;
         case 26:
         return "XXVI";
         break;
         case 27:
         return "XXVII";
         break;
         case 28:
         return "XXVIII";
         break;
         case 29:
         return "XXIX";
         break;
         case 30:
         return "XXX";
         break;
     }
 }
}
if(!function_exists('terbilang'))
{
    function terbilang($angka) {
        $angka = (float)$angka;
        $bilangan = array(
            '',
            'Satu',
            'Dua',
            'Tiga',
            'Empat',
            'Lima',
            'Enam',
            'Tujuh',
            'Delapan',
            'Sembilan',
            'Sepuluh',
            'Sebelas'
            );
        if ($angka < 12) {
            return $bilangan[$angka];
        } else if ($angka < 20) {
            return $bilangan[$angka - 10] . ' Belas';
        } else if ($angka < 100) {
            $hasil_bagi = (int)($angka / 10);
            $hasil_mod = $angka % 10;
            return trim(sprintf('%s Puluh %s', $bilangan[$hasil_bagi], $bilangan[$hasil_mod]));
        } else if ($angka < 200) {
            return sprintf('Seratus %s', terbilang($angka - 100));
        } else if ($angka < 1000) {
            $hasil_bagi = (int)($angka / 100);
            $hasil_mod = $angka % 100;
            return trim(sprintf('%s Ratus %s', $bilangan[$hasil_bagi], terbilang($hasil_mod)));
        } else if ($angka < 2000) {
            return trim(sprintf('Seribu %s', terbilang($angka - 1000)));
        } else if ($angka < 1000000) {
            $hasil_bagi = (int)($angka / 1000);
            $hasil_mod = $angka % 1000;
            return sprintf('%s Ribu %s', terbilang($hasil_bagi), terbilang($hasil_mod));
        } else if ($angka < 1000000000) {
            $hasil_bagi = (int)($angka / 1000000);
            $hasil_mod = $angka % 1000000;
            return trim(sprintf('%s Juta %s', terbilang($hasil_bagi), terbilang($hasil_mod)));
        } else if ($angka < 1000000000000) {
            $hasil_bagi = (int)($angka / 1000000000);
            $hasil_mod = fmod($angka, 1000000000);
            return trim(sprintf('%s Miliar %s', terbilang($hasil_bagi), terbilang($hasil_mod)));
        } else if ($angka < 1000000000000000) {
            $hasil_bagi = $angka / 1000000000000;
            $hasil_mod = fmod($angka, 1000000000000);
            return trim(sprintf('%s Triliun %s', terbilang($hasil_bagi), terbilang($hasil_mod)));
        } else {
            return 'Wow...';
        }
    }
}

?>
