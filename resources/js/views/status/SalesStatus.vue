<template>
  <div>
    <Breadcrumb :home="home" :model="Breadcrumb" />
    <div class="p-mt-2">
      <div><h3>Create Sales Status</h3></div>
    </div>
    <Card class="p-mt-2">
      <template #content>
        <div class="p-col-12 p-fluid p-formgrid p-grid">
          <div class="p-col-6">
            <label for="statusName">Status Name </label>
            <InputText id="statusName" type="text" />
          </div>

          <div class="p-col-3">
            <label>Color Status</label>
          
            <ColorPicker v-model="colorStatus" class="form-control" />
          </div>
       
              <div class="p-col-3">
            <label> </label>
          <Button label="Submit" class="p-button-success p-mt-2" />
       
          </div>
         
        </div>
        
      </template>
    </Card>
    <div class="p-mt-2">
      <div><h3>Sales Status List</h3></div>
    </div>
    <card>
      <template #content>
        <DataTable
          :value="salesStatus"
          editMode="row"
          dataKey="id"
          :editingRows.sync="editingRows"
          @row-edit-init="onRowEditInit"
          @row-edit-cancel="onRowEditCancel"
        >
          <Column field="name" header="Name" sortable>
            <template #editor="slotProps">
              <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
          </Column>
          <Column
            :rowEditor="true"
            headerStyle="text-align:center"
            bodyStyle="text-align:center"
            header="Edit"
          ></Column>
          <Column
            headerStyle="text-align:center"
            bodyStyle="text-align:center"
            field="action"
            header="Action"
          >
            <template #body="slotProps">
              <Button label="Delete" class="p-button-danger" />{{
                slotProps.data[slotProps.column.field]
              }}
            </template>
          </Column>
        </DataTable>
      </template>
    </card>
  </div>
</template>
<script>
import Button from "primevue/button";
import ColorPicker from "primevue/colorpicker";
export default {
  name: "SalesStatus",
  components: {
    Button,
    ColorPicker,
  },
  data() {
    return {
      colorStatus: "99FFFF",
      editingRows: null,
      salesStatus: [
        { name: "Customer One" },
        { name: "Customer Two" },
        { name: "Customer Three" },
      ],

      home: { icon: "pi pi-home", to: "/" },
      Breadcrumb: [
        { label: "Sales return Status", to: "/sales-return-status" },
        { label: "Purchase return Status", to: "/purchase-return-status" },
        { label: "Purchase Status", to: "/purchase-status" },
        { label: "Sales Status" },
      ],
    };
  },
  methods: {
    onRowEditInit(event) {
      this.originalRows[event.index] = { ...this.salesStatus[event.index] };
    },
    onRowEditCancel(event) {
      Vue.set(this.salesStatus, event.index, this.originalRows[event.index]);
    },
  },
};
</script>