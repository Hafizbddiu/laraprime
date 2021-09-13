
<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-mt-2">
      <div><h3>Create Brand</h3></div>
    </div>
    <card >
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
            <span class="p-float-label">
              <InputText id="title" type="text" />
              <label for="title">Title </label>
            </span>
          </div>

          <div class="p-field p-col-6">
            <span class="p-float-label">
              <Textarea
                v-model="description"
                :autoResize="true"
                rows="1"
                cols="30"
              />
              <label for="description">Description </label><br />
            </span>
          </div>
        </div>
        <div class="p-fluid p-formgrid p-grid p-col-12">
          <div class="p-field p-col-6">
            <label for="logo">Logo </label>
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
            <Checkbox v-model="status" :binary="true" />
            <span v-if="status">Active</span>
            <span v-else>Inactive</span>
          </div> -->
            <div class="p-col-3">
          <label> </label>
          <Button label="Submit" class="p-mt-1 p-button-success" />
        </div>
        </div>
      
      </template>
    </card>

   

        <DataTable
        class="p-mt-4"
          :value="brands"
          :filters="filters"
          :selection.sync="selectedBrands"
          dataKey="id"
          :paginator="true"
          :rows="3"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          :rowsPerPageOptions="[5, 10, 20, 50]"
          editMode="row"
          :editingRows.sync="editingRows"
          @row-edit-init="onRowEditInit"
          @row-edit-cancel="onRowEditCancel"
        
        >
          <template #header>
            <div class="p-d-flex p-jc-between">
          <div><h3>Brand List</h3></div>

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
            <template #body="slotProps">
              <img :src="slotProps.data[slotProps.column.field]" />
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
    Checkbox,
    Button,
    Textarea,
    Dropdown,
  },

  name: "BrandList",

  data() {
    return {
     status: null,
      statuss:[
             {   name:'Active'},
               {   name:'Inactive'},
      ],
      description: "",
      brands: [
        {
          title: "Name1",
          logo: "images/color.png",
          description: "description",
          status: "Active",
        },
        {
          title: "Name2",
          logo: "images/color.png",
          description: "description",
          status: "Active",
        },
        {
          title: "Name3",
          logo: "images/color.png",
          description: "description",
          status: "Active",
        },
        {
          title: "Name4",
          logo: "images/color.png",
          description: "description description",
          status: "Active",
        },
        {
          title: "Name5",
          logo: "images/color.png",
          description: "description description",
          status: "Active",
        },
        {
          title: "Name6",
          logo: "images/color.png",
          description: "description description",
          status: "Active",
        },
        {
          title: "Name7",
          logo: "images/color.png",
          description: "description description",
          status: "Active",
        },
      ],
      filters: {},
      selectedBrands: null,
      editingRows: [],

      home: { icon: "pi pi-home", to: "/" },
      items: [{ label: "Base" }, { label: "Brand" }, { label: " Brand list" }],
    };
  },

  methods: {
    onRowEditInit(event) {
      this.originalRows[event.index] = { ...this.brands[event.index] };
    },
    onRowEditCancel(event) {
      Vue.set(this.brands, event.index, this.originalRows[event.index]);
    },
  },
};
</script>