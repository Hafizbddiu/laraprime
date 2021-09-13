

<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-2">
     <div><h3>Create Manufacture</h3></div>
    </div>
   
     <card class="p-mt-2">
      <template #content>
        <div class="p-fluid p-formgrid p-grid p-col-12">
          <div class="p-field p-col">
             <span class="p-float-label">     
            <InputText id="title" type="text" />
              <label for="title">Title </label>
             </span>
          </div>

            <div class="p-field p-col">
                <span class="p-float-label">            
            <Textarea v-model="description" :autoResize="true" rows="1" cols="30" />
             <label for="description">Description </label><br />
                </span>
          </div>
       
        </div>
        <div class="p-fluid p-formgrid p-grid p-col-12">
            <div class="p-field p-col-6">
            <label for="logo">Logo </label> <br />
            <Input type="file" id="logo" class="form-control" />
          </div>
           <div class="p-field p-col-3">
            <label for="dropdown">Status</label>
              <Dropdown
                id="dropdown"
                v-model="status"
                :options="statuss"
                optionLabel="name"
               
              />
          </div>
          <!-- <div class="p-field p-col-3">
            <label for="status">Status</label>
            <br />

            <Checkbox v-model="status" :binary="true" />
            <span v-if="status">Active</span>
            <span v-else>Inactive</span>
          </div> -->
            <div class=" p-col-3">
          <label> </label>
          <Button label="Submit" class=" p-mt-1 p-button-success" />
        </div>
        </div>

      
      </template>
    </card>
    
        <DataTable
        class="p-mt-4"
          :value="manufactures"
          :filters="filters"
          :selection.sync="selectedManufactures"
          dataKey="title"
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
              <div class="p-mt-2">List of Manufactures</div>

              <div>
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
            field="title"
            header="Title"
            sortable
          >
            <template #editor="slotProps">
              <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
          </Column>
          <Column
            headerStyle="text-align:center"
            bodyStyle="text-align:center"
            field="logo"
            header="Logo"
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
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
export default {
  components: {
    Button,
    Checkbox,
    Textarea,
    Dropdown,
  },

  name: "ManufactureList",

  data() {
    return {

       status: null,
      statuss:[
             {   name:'Active'},
               {   name:'Inactive'},
      ],
      description:'',
      manufactures: [
        {
          title: "Name1",
          logo: "Icon",
          description: "description",
          status: "Active",
        },
        {
          title: "Name2",
          logo: "Icon",
          description: "description",
          status: "Active",
        },
        {
          title: "Name3",
          logo: "Icon",
          description: "description",
          status: "Active",
        },
        {
          title: "Name4",
          logo: "Icon",
          description: "description description",
          status: "Active",
        },
        {
          title: "Name5",
          logo: "Icon",
          description: "description description",
          status: "Active",
        },
        {
          title: "Name6",
          logo: "Icon",
          description: "description description",
          status: "Active",
        },
        {
          title: "Name7",
          logo: "EIcon",
          description: "description description",
          status: "Active",
        },
      ],
      filters: {},
      selectedManufactures: null,
      editingRows: [],

      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "Base" },
        { label: "Manufacture" },
       
        { label: " Manufacture list" },
      ],
    };
  },

  methods: {
    onRowEditInit(event) {
      this.originalRows[event.index] = { ...this.manufactures[event.index] };
    },
    onRowEditCancel(event) {
      Vue.set(this.manufactures, event.index, this.originalRows[event.index]);
    },
  },
};
</script>