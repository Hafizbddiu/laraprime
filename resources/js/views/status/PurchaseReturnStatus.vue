<template>
  <div>
    <Breadcrumb :home="home" :model="Breadcrumb" />
    <div class="p-mt-2">
      <div><h3>Create Purchase Return Status</h3></div>
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
      <div><h3>Purchase Return Status List</h3></div>
    </div>
    <Card>
      <template #content>
        <DataTable
          :value="purchaseReturnStatus"
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
    </Card>
  </div>
</template>
<script>
import Button from "primevue/button";
import ColorPicker from "primevue/colorpicker";
export default {
  name: "PurchaseReturnStatus",
  components: {
    Button,
    ColorPicker,
  },
  data() {
    return {
      colorStatus: "99FFFF",
      editingRows: [],
      purchaseReturnStatus: [
        { name: "Status One" },
        { name: "Status Two" },
        { name: "Status Three" },
      ],

      home: { icon: "pi pi-home", to: "/" },
      Breadcrumb: [
        { label: "Sales Status", to: "/sales-status" },
        { label: "Sales return Status", to: "/sales-return-status" },
        { label: "Purchase Status", to: "/purchase-status" },
        { label: "Purchase return Status" },
      ],
    };
  },

  methods: {
    onRowEditInit(event) {
      this.originalRows[event.index] = {
        ...this.purchaseReturnStatus[event.index],
      };
    },
    onRowEditCancel(event) {
      Vue.set(
        this.purchaseReturnStatus,
        event.index,
        this.originalRows[event.index]
      );
    },
  },
};
</script>