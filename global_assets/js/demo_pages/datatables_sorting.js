/* ------------------------------------------------------------------------------
*
*  # Datatable sorting
*
*  Demo JS code for datatable_sorting.html page
*
* ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var dataTable___;
var dataTable___1;

// var DatatableSorting = function() {


//
// Setup module components
//
function dataTableMultiSortt() {
    dataTable___1 = $('.datatable-multi-sorting').DataTable({

        columnDefs: [{
            targets: [0],
            orderData: [0, 1]
        }, {
            targets: [1],
            orderData: [1, 0]
        }, {
            targets: [4],
            orderData: [4, 0]
        }, {
            orderable: false,
            width: '100px',
            targets: [5]
        }]
    });
}


function dataTableMultiSort() {
    dataTable___ = $('.datatable-multi-sortingg').DataTable({
        columnDefs: [{
            targets: [0],
            orderData: [0, 1]
        }, {
            targets: [1],
            orderData: [1, 0]
        }, {
            targets: [4],
            orderData: [4, 0]
        }, {
            orderable: false,
            width: '100px',
            targets: [5]
        }],

    });
}
