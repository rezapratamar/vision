jQuery(document).ready(function() {
    "use strict";

            // Init Theme Core    
            Core.init();

            // Init Demo JS   
            Demo.init();

            // Init Highlight.js Plugin
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });

            // Select all text in CSS Generate Modal
            $('#modal-close').click(function(e) {
                e.preventDefault();
                $('.datatables-demo-modal').modal('toggle');
            });

            $('.datatables-demo-code').on('click', function() {
                var modalContent = $(this).prev();
                var modalContainer = $('.datatables-demo-modal').find('.modal-body')

                // Empty Modal of Existing Content
                modalContainer.empty();

                // Clone Content and Place in Modal
                modalContent.clone(modalContent).appendTo(modalContainer);

                // Toggle Modal
                $('.datatables-demo-modal').modal({
                    backdrop: 'static'
                })
            });

    // Init Widget Demo JS
    // demoHighCharts.init();

    // Because we are using Admin Panels we use the OnFinish 
    // callback to activate the demoWidgets. It's smoother if
    // we let the panels be moved and organized before 
    // filling them with content from various plugins

    // Init plugins used on this page
    // HighCharts, JvectorMap, Admin Panels

    // Init Admin Panels on widgets inside the ".admin-panels" container
    $('.admin-panels').adminpanel({
        grid: '.admin-grid',
        draggable: true,
        mobile: true,
        callback: function() {
            bootbox.confirm('<h3>A Custom Callback!</h3>', function() {});
        },
        onFinish: function() {
            $('.admin-panels').addClass('animated fadeIn').removeClass('fade-onLoad');

            // Init the rest of the plugins now that the panels
            // have had a chance to be moved and organized.
            // It's less taxing to organize empty panels
            demoHighCharts.init();
            runVectorMaps();

            // We also refresh any "in-view" waypoints to ensure
            // the correct position is being calculated after the 
            // Admin Panels plugin moved everything
            Waypoint.refreshAll();

        },
        onSave: function() {
            $(window).trigger('resize');
        }
    });
    
    $('#datatable3').dataTable({
                "aoColumnDefs": [{
                    'bSortable': false,
                    'aTargets': [-1]
                }],
                "oLanguage": {
                    "oPaginate": {
                        "sPrevious": "",
                        "sNext": ""
                    }
                },
                "iDisplayLength": 5,
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],
                "sDom": '<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',
                "oTableTools": {
                    "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
                }
            });
    // MISC DATATABLE HELPER FUNCTIONS

            // Add Placeholder text to datatables filter bar
            $('.dataTables_filter input').attr("placeholder", "Cari....");

            // Manually Init Chosen on Datatables Filters
            // $("select[name='datatable2_length']").chosen();
            // $("select[name='datatable3_length']").chosen();
            // $("select[name='datatable4_length']").chosen();

            // Init Xeditable Plugin
            $.fn.editable.defaults.mode = 'popup';
            $('.xedit').editable();
    // Init jQuery spinner init - default
    $("#spinner1").spinner();
	// Init jQuery spinner init - currency 
            $("#spinner5").spinner();
    
    /* @date picker
    ------------------------------------------------------------------ */
    $("#tgl_pelaksanaan").datepicker({
        dateFormat: 'dd-mm-yy',
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        showButtonPanel: false
    });
    
     $('#thn_usulan').multiselect(); // PI dropdown
     
     /*Start Add PI Dropdown*/
     $('#pertemuan_ilmiah').multiselect();
     $('#aras_pertemuan').multiselect();
     $('#jenis_klasifikasi').multiselect();
     $('#jenis_keikutsertaan').multiselect();
     $('#jenis_skema').multiselect();
     /*End Add PI Dropdown*/
	
	$('#multiselect1').multiselect();
	$('#multiselect3').multiselect();
	$('#multiselect9').multiselect();
    

});

/* Pertemuan Ilmiah*/
function check_pi(value)
{
    if(value=="9") 
    {
       $("#pi_lain1").show(); 
       $("#pi_lain2").show(); 
       $("#pi_lain3").show(); 
    }
    else
    {
        $("#pi_lain1").hide();
        $("#pi_lain2").hide();
        $("#pi_lain3").hide();
    }
}

/* Skema*/
function check_skema(value)
{
    if(value=="9") 
    {
       $("#skema_lain1").show(); 
       $("#skema_lain2").show(); 
       $("#skema_lain3").show(); 
    }
    else
    {
        $("#skema_lain1").hide();
        $("#skema_lain2").hide();
        $("#skema_lain3").hide();
    }
}

function check_keikutsertaan(value)
{
    if(value=="0" || value == "1") 
    {
       $("#makalah1").show(); 
       $("#makalah2").show(); 
       $("#makalah3").show(); 
    }
    else
    {
        $("#makalah1").hide();
        $("#makalah2").hide();
        $("#makalah3").hide();
    }
}

/*Get thn_usulan pertemuan ilmiah*/
jQuery(document).ready(function() {
	//alert("masuk");
	//$("#signuptabs").tabs({ disabled: [1, 2, 3, 4, 5, 6, 7] });
	//$("#tab2").tabs("disable", 2);
	
	var keikutsertaan_val = $('#jenis_keikutsertaan').val();
	
	if(keikutsertaan_val=="0" || keikutsertaan_val=="1") 
    {
       $("#makalah1").show(); 
       $("#makalah2").show(); 
       $("#makalah3").show(); 
    }
    else
    {
        $("#makalah1").hide();
		$("#makalah2").hide();
		$("#makalah3").hide();
    }
		 
    var pi_lain_val = $('#pertemuan_ilmiah').val();
    if(pi_lain_val=="9") 
    {
       $("#pi_lain1").show(); 
       $("#pi_lain2").show(); 
       $("#pi_lain3").show(); 
    }
    else
    {
        $("#pi_lain1").hide();
        $("#pi_lain2").hide();
        $("#pi_lain3").hide();
    }
    
    var skema_lain_val = $('#jenis_skema').val();
    
    if(skema_lain_val=="9") 
    {
       $("#skema_lain1").show(); 
       $("#skema_lain2").show(); 
       $("#skema_lain3").show(); 
    }
    else
    {
        $("#skema_lain1").hide();
        $("#skema_lain2").hide();
        $("#skema_lain3").hide();
    }
    
    $("#add_pi").click(function(){ 
        var thn_usulan = $('#thn_usulan').val();
        window.location='add_pertemuan_ilmiah/'+thn_usulan;
    });
	
});
