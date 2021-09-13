<template>
  <div>
    <Breadcrumb :home="home" :model="Breadcrumb" />
    <div class="p-d-flex p-jc-between p-mt-2">
      <div><h3>Purchase Return List</h3></div>
      <div>
        <Button>
          <router-link class="text-white" to="/create-purchase-return"
            >Create purchase Return</router-link
          >
        </Button>
      </div>
    </div>
    <card class="p-mt-2">
      <template #content>
        <DataTable
          :value="designations"
          :scrollable="true"
          :filters="filters"
          :selection.sync="selectedDesignation"
          dataKey="CustomerName"
          :paginator="true"
          :rows="5"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          :rowsPerPageOptions="[5, 10, 20, 50]"
        >
          <template #header>
            <div class="p-d-flex p-jc-between">
              <div>List of Purchase Return</div>
              <div style="p-mt-2">
                <i class="pi pi-search" style="margin: 4px 4px 0px 0px"></i>
                <InputText
                  v-model="filters['global']"
                  placeholder="Global Search"
                  size="50"
                />
              </div>
            </div>
          </template>
          <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
          <Column
            field="PurchaseReturnDate"
            headerStyle="width: 250px"
            header="Purchase Return Date"
            sortable
          >
          </Column>
          <Column
            field="CustomerName"
            header="Customer Name"
            headerStyle="width: 250px"
            sortable
          >
          </Column>
          <Column
            field="Werehouse"
            header="Werehouse"
            headerStyle="width: 250px"
            sortable
          >
          </Column>
          <Column
            field="ReferenceNo"
            header="Reference No"
            headerStyle="width: 250px"
            sortable
          >
          </Column>
          <Column
            field="InvoiceNo"
            header="Invoice No"
            headerStyle="width: 250px"
            sortable
          >
          </Column>
          <Column
            field="PurchaseReturnStatus"
            header="Purchase Return Status"
            headerStyle="width: 250px"
            sortable
          >
          </Column>
          <Column
            field="PaymentSystem"
            headerStyle="width: 250px"
            header="Payment System"
            sortable
          >
          </Column>
          <Column
            field="SalesBy"
            header="Sales By"
            headerStyle="width: 250px"
            sortable
          >
          </Column>

          <Column
            field="TotalPrice"
            header="Total Price"
            headerStyle="width: 250px"
          >
          </Column>
          <Column
            field="TotalSubPrice"
            header="Total Sub Price"
            headerStyle="width: 250px"
            sortable
          >
          </Column>
          <Column
            field="SlotQty"
            header="Slot Qty"
            headerStyle="width: 250px"
            sortable
          >
          </Column>
          <Column
            field="TotalProduct"
            header="Total Product"
            headerStyle="width: 250px"
            sortable
          >
          </Column>
        </DataTable>
      </template>
    </card>
  </div>
</template>
<script>
import Button from "primevue/button";
export default {
  components: {
    Button,
  },
  name: "PurchaseReturnList",
  data() {
    return {
      designations: [
        {
          PurchaseReturnDate: "3-4-2013",
          CustomerName: "Name1",
          Werehouse: "Employe designation List",
          ReferenceNo: "222",
          InvoiceNo: "2223",
          PurchaseReturnStatus: "true",
          PaymentSystem: "cash",
          SalesBy: "Active",
          TotalPrice: "1233",
          TotalSubPrice: "233",
          SlotQty: "233",
          TotalProduct: "99933",
        },
        {
          PurchaseReturnDate: "2-3-2011",
          CustomerName: "Name2",
          Werehouse: "Employe designation List",
          ReferenceNo: "222",
          InvoiceNo: "2223",
          PurchaseReturnStatus: "true",
          PaymentSystem: "cash",
          SalesBy: "Active",
          TotalPrice: "1233",
          TotalSubPrice: "233",
          SlotQty: "233",
          TotalProduct: "99933",
        },
        {
          PurchaseReturnDate: "3-4-2013",
          CustomerName: "Name3",
          Werehouse: "Employe designation List",
          ReferenceNo: "222",
          InvoiceNo: "2223",
          PurchaseReturnStatus: "true",
          PaymentSystem: "cash",
          SalesBy: "Active",
          TotalPrice: "1233",
          TotalSubPrice: "233",
          SlotQty: "233",
          TotalProduct: "99933",
        },
        {
          PurchaseReturnDate: "3-4-2013",
          CustomerName: "Name4",
          Werehouse: "Employe designation List",
          ReferenceNo: "222",
          InvoiceNo: "2223",
          PurchaseReturnStatus: "true",
          PaymentSystem: "cash",
          SalesBy: "Active",
          TotalPrice: "1233",
          TotalSubPrice: "233",
          SlotQty: "233",
          TotalProduct: "99933",
        },
        {
          PurchaseReturnDate: "3-4-2013",
          CustomerName: "Name5",
          Werehouse: "Employe designation List",
          ReferenceNo: "222",
          InvoiceNo: "2223",
          PurchaseReturnStatus: "true",
          PaymentSystem: "cash",
          SalesBy: "Active",
          TotalPrice: "1233",
          TotalSubPrice: "233",
          SlotQty: "233",
          TotalProduct: "99933",
        },
        {
          PurchaseReturnDate: "3-4-2013",
          CustomerName: "Name6",
          Werehouse: "Employe designation List",
          ReferenceNo: "222",
          InvoiceNo: "2223",
          PurchaseReturnStatus: "true",
          PaymentSystem: "cash",
          SalesBy: "Active",
          TotalPrice: "1233",
          TotalSubPrice: "233",
          SlotQty: "233",
          TotalProduct: "99933",
        },
        {
          PurchaseReturnDate: "3-4-2013",
          CustomerName: "Name7",
          Werehouse: "Employe designation List",
          ReferenceNo: "222",
          InvoiceNo: "2223",
          PurchaseReturnStatus: "true",
          PaymentSystem: "cash",
          SalesBy: "Active",
          TotalPrice: "1233",
          TotalSubPrice: "233",
          SlotQty: "233",
          TotalProduct: "99933",
        },
        {
          PurchaseReturnDate: "3-4-2013",
          CustomerName: "Name8",
          Werehouse: "Employe designation List",
          ReferenceNo: "222",
          InvoiceNo: "2223",
          PurchaseReturnStatus: "true",
          PaymentSystem: "cash",
          SalesBy: "Active",
          TotalPrice: "1233",
          TotalSubPrice: "233",
          SlotQty: "233",
          TotalProduct: "99933",
        },
        {
          PurchaseReturnDate: "3-4-2013",
          CustomerName: "Name9",
          Werehouse: "Employe designation List",
          ReferenceNo: "222",
          InvoiceNo: "2223",
          PurchaseReturnStatus: "true",
          PaymentSystem: "cash",
          SalesBy: "Active",
          TotalPrice: "1233",
          TotalSubPrice: "233",
          SlotQty: "233",
          TotalProduct: "99933",
        },
        {
          PurchaseReturnDate: "3-4-2013",
          CustomerName: "Name10",
          Werehouse: "Employe designation List",
          ReferenceNo: "222",
          InvoiceNo: "2223",
          PurchaseReturnStatus: "true",
          PaymentSystem: "cash",
          SalesBy: "Active",
          TotalPrice: "1233",
          TotalSubPrice: "233",
          SlotQty: "233",
          TotalProduct: "99933",
        },
      ],
      filters: {},
      selectedDesignation: null,
      editingRows: [],
      home: { icon: "pi pi-home", to: "/" },
      Breadcrumb: [
        { label: "Purchase" },
        { label: "Create Puchase Return", to: "/create-purchase-return" },
          { label: "Purchase Return Invoice", to:"/purchase-return-invoice"},
        { label: "Puchase Return List" },
      ],
    };
  },
};
</script>