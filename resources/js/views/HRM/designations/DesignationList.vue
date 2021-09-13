<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-mt-2">
      <div><h3>Create Designation</h3></div>
    </div>
   
  <Card class="p-mt-2">
      <template #content>
        <div class="p-fluid p-formgrid p-grid p-col-12">
          <div class="p-field p-col-6">
             <span class="p-float-label">       
            <InputText type="text" id="designationName" />
             <label for="designationName">Designation Name </label><br />
              </span>
          </div>
          <div class="p-field p-col-6">
              <span class="p-float-label">       
            
            <Textarea id="description" :autoResize="true" rows="1" cols="30" />
            <label for="description">Description </label><br />
              </span>
          </div>
        </div>
         <div class="p-fluid p-formgrid p-grid p-col-12">

            <div class="p-field p-col-6">
           <span class="p-float-label">
              <Dropdown
                id="dropdown"
                v-model="status"
                :options="statuss"
                optionLabel="name"
               
              />
              <label for="dropdown">Status</label>
         </span>
          </div>
        <!-- <div class="p-col-6">
          <label for="status">Status </label><br />
          <Checkbox v-model="status" :binary="true" />
          <span v-if="status">Active</span>
          <span v-else>Inactive</span>

        </div> -->
        <div class="p-col-6">
      
          <Button label="Submit" class=" p-button-success" />
        </div>
         </div>
      </template>
    </Card>
        <DataTable
        class="p-mt-4"
          :value="designations"
          :filters="filters"
          :selection.sync="selectedDesignation"
          dataKey="name"
          :paginator="true"
          :rows="5"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          :rowsPerPageOptions="[5, 10, 20, 50]"
          editMode="row"
          :editingRows.sync="editingRows"
          @row-edit-init="onRowEditInit"
          @row-edit-cancel="onRowEditCancel"
        >
          <template #header>
            <div class="p-d-flex p-jc-between">
              <div>List of Designations</div>
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
            headerStyle="text-align:center"
            bodyStyle="text-align:center"
            field="name"
            header="Name"
            sortable
          >
            <template #editor="slotProps">
              <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
          </Column>
          <Column
            headerStyle="text-align:center"
            bodyStyle="text-align:center"
            field="description"
            header="Description"
          >
            <template #editor="slotProps">
              <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
          </Column>
          <Column
            headerStyle="text-align:center"
            bodyStyle="text-align:center"
            field="status"
            header="Status"
            sortable
          >
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
    
 
  </div>
</template>
<script>
import Checkbox from "primevue/checkbox";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
export default {
  components: {
    Button,
    Checkbox,
    Textarea,
    Dropdown,
  },
  name: "designationList",
  data() {
    return {
      status: null,
      statuss:[
             {   name:'Active'},
               {   name:'Inactive'},
      ],
      designations: [
        {
          name: "Name1",
          description: "Employe designation List",
          status: "Active",
        },
        {
          name: "Name2",
          description: "Employe designation List",
          status: "Active",
        },
        {
          name: "Name3",
          description: "Employe designation List",
          status: "Active",
        },
        {
          name: "Name4",
          description: "Employe designation List",
          status: "Active",
        },
        {
          name: "Name5",
          description: "Employe designation List",
          status: "Active",
        },
        {
          name: "Name6",
          description: "Employe designation List",
          status: "Active",
        },
        {
          name: "Name7",
          description: "Employe designation List",
          status: "Active",
        },
      ],
      filters: {},
      selectedDesignation: null,
      editingRows: [],
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "HRM" },
        { label: "Designation" },
       
        { label: "Designation List" },
      ],
    };
  },
  methods: {
    onRowEditInit(event) {
      this.originalRows[event.index] = { ...this.designations[event.index] };
    },
    onRowEditCancel(event) {
      Vue.set(this.designations, event.index, this.originalRows[event.index]);
    },
  },
};
</script>