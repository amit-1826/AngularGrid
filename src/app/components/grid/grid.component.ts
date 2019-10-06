import { Component, OnInit } from "@angular/core";
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"]
})
export class GridComponent implements OnInit {
  title = "app";
  rowData: Array<any>;
  gridApi: any;
  gridColumnApi: any;
  columnDefs: any;
  gridOptions: any;

  constructor(private sharedService: SharedService) {
    this.gridOptions = {
      suppressPropertyNamesCheck: true,
      defaultColDef:  {
        sortable: true,
        resizable: true,
        filter: true
      }
    }
  }

  ngOnInit() {
    this.columnDefs = [
      { 
        headerName: "Id", 
        field: "id",
        width: 100
      },
      { 
        headerName: "First Name", 
        field: "firstName",
        width: 150
      },
      { 
        headerName: "Last Name", 
        field: "lastName",
        width: 150
      },
      { 
        headerName: "Email", 
        field: "email", 
        width: 150 
      },
      { 
        headerName: "Gender", 
        field: "gender", 
        width: 150 
      },
      { 
        headerName: "Company Name", 
        field: "companyName", 
        width: 150 
      },
      { 
        headerName: "Designation", 
        field: "designation", 
        width: 150 
      }
    ];
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = this.sharedService.getData();
    params.api.setRowData(this.rowData);
  }

  // getData() {
  //   let data: any;
  //   this.sharedService.getData().toPromise().then((response: any) => {
  //     this.rowData = response;
  //   }).catch((error) => {
  //     console.log('error: ', error);
  //   })
  //   console.log('data: ', data);
  // }
}
