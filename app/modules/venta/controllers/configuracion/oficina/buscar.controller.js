'use strict';

/* jshint -W098 */
angular.module('venta').controller('Venta.Configuracion.Oficina.BuscarController',
  function ($scope, $state, OSOFicina) {

    var paginationOptions = {
      page: 1,
      pageSize: 10
    };

    $scope.filterOptions = {
      filterText: undefined
    };

    $scope.gridOptions = {
      data: [],
      enableRowSelection: true,
      enableSelectAll: true,
      enableRowHeaderSelection: true,
      multiSelect: true,

      paginationPageSizes: [10, 25, 50],
      paginationPageSize: 10,
      useExternalPagination: true,
      useExternalSorting: true,

      columnDefs: [
        {field: 'denominacion', displayName: 'Denominacion'},
        {field: 'ubigeo', displayName: 'Ubigeo', width: '20%'},
        {
          name: 'edit',
          displayName: 'Edit',
          cellTemplate: '' +
          '<div class="ui-grid-action">' +
            '<div class="ui-grid-action-cell os-45">' +
              '<button type="button" class="btn btn-default btn-block btn-sm">Editar</button>' +
            '</div>'+
            '<div class="ui-grid-action-cell os-45">' +
              '<button type="button" class="btn btn-default btn-block btn-sm">Eliminar</button>' +
            '</div>'+
            '<div class="ui-grid-action-cell os-10">' +
              '<div class="btn btn-default pull-right dropdown-kebab-pf" uib-dropdown dropdown-append-to-body>'+
                '<button class="btn btn-link" type="button" uib-dropdown-toggle>'+
                  '<span class="fa fa-ellipsis-v"></span><br>'+
                '</button>'+
                '<ul class="dropdown-menu-right" uib-dropdown-menu aria-labelledby="dropdownKebabRight">'+
                  '<li><a href="#">Action</a></li>'+
                  '<li><a href="#">Another action</a></li>'+
                  '<li><a href="#">Something else here</a></li>'+
                  '<li><a href="#">Separated link</a></li>'+
                '</ul>'+
              '</div>'+
            '</div>'+
          '</div>',
          width: '20%'
        }
      ],
      onRegisterApi: function (gridApi) {
        $scope.gridApi = gridApi;
        $scope.gridApi.core.on.sortChanged($scope, function (grid, sortColumns) {
          console.log('Order by. Not available.');
        });
        gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
          paginationOptions.page = newPage;
          paginationOptions.pageSize = pageSize;
          $scope.search();
        });
      }
    };
    $scope.gridActions = {
      edit: function (row) {
        $state.go('^.editar.resumen', {oficina: row.id});
      }
    };

    $scope.search = function () {
      var criteria = {
        filterText: $scope.filterOptions.filterText,
        filters: [],
        orders: [],
        paging: paginationOptions
      };

      OSOFicina.$search(criteria).then(function (response) {
        $scope.gridOptions.data = response.items;
        $scope.gridOptions.totalItems = response.totalSize;
      });
    };
    $scope.search();

  }
);
