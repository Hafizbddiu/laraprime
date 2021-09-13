<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-2">
      <div><h3>Create Department</h3></div>
    </div>
    <Card class="p-mt-2">
      <template #content>
        <div class="p-fluid p-formgrid p-grid p-col-12">
          <div class="p-field p-col-6">
            <span class="p-float-label">
              <InputText id="departmentName" type="text" />
              <label for="departmentName">Department Name </label>
            </span>
          </div>
          <div class="p-field p-col-6">
            <span class="p-float-label">
              <InputText id="departmentHead" type="text" />
              <label for="departmentHead">Department Head </label>
            </span>
          </div>
        </div>

        <div class="p-fluid p-formgrid p-grid p-col-12">
          <div class="p-field p-col-6">
            <span class="p-float-label">
              <Dropdown
                id="dropdown"
                v-model="parentDepartment"
                :options="parentDepartments"
                optionLabel="name"
                :filter="true"
              />
              <label for="dropdown">Select a Department</label>
            </span>
          </div>

           <div class="p-field p-col-3 ">
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

          <!-- <div class="p-field p-col-3">
            <label for="status">Status</label>
         

            <Checkbox v-model="status" :binary="true" />
            <span v-if="status">Active</span>
            <span v-else>Inactive</span>
          </div> -->
             <div class="p-col-3">

          <Button label="Submit" class=" p-button-success" />
        </div>
        </div>

     
      </template>
    </Card>

    <DataTable
       class="p-mt-4"
      :value="departments"
      :filters="filters"
      :selection.sync="selectedDepartments"
      dataKey="departmentName"
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
          <div class="p-mt-2">List of Departments</div>

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
        field="departmentName"
        header="Department Name"
        sortable
      >
        <template #editor="slotProps">
          <InputText v-model="slotProps.data[slotProps.column.field]" />
        </template>
      </Column>
      <Column
        headerStyle="text-align:center"
        bodyStyle="text-align:center"
        field="departmentHead"
        header="Department Head"
        sortable
      >
        <template #editor="slotProps">
          <InputText v-model="slotProps.data[slotProps.column.field]" />
        </template>
      </Column>
      <Column
        headerStyle="text-align:center"
        bodyStyle="text-align:center"
        field="parentDepartment"
        header="Parent Department"
        sortable
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
        headerStyle="wtext-align:center"
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
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";

export default {
  components: {
    Button,
    Dropdown,
    Checkbox,
  },
  name: "DepartmentList",
  data() {
    return {
     
      status: null,
      statuss:[
             {   name:'Active'},
               {   name:'Inactive'},
      ],

      departments: [
        {
          departmentName: "Name1",
          departmentHead: "Employe designation List",
          parentDepartment: "Parent Departmant",
          status: "Active",
        },
        {
          departmentName: "Name2",
          departmentHead: "Employe designation List",
          parentDepartment: "Parent Departmant",
          status: "Active",
        },
        {
          departmentName: "Name3",
          departmentHead: "Employe designation List",
          parentDepartment: "Parent Departmant",
          status: "Active",
        },
        {
          departmentName: "Name4",
          departmentHead: "Employe designation List",
          parentDepartment: "Parent Departmant",
          status: "Active",
        },
        {
          departmentName: "Name5",
          departmentHead: "Employe designation List",
          parentDepartment: "Parent Departmant",
          status: "Active",
        },
        {
          departmentName: "Name6",
          departmentHead: "Employe designation List",
          parentDepartment: "Parent Departmant",
          status: "Active",
        },
        {
          departmentName: "Name7",
          departmentHead: "Employe designation List",
          parentDepartment: "Parent Departmant",
          status: "Active",
        },
      ],
       parentDepartments: [
                            {name: 'Department 1', code: 'A-SY'},
                            {name: 'Department 2', code: 'A-NE'},
                            {name: 'Department 3', code: 'A-WO'}
                        ],
 
      filters: {},
      selectedDepartments: null,
      editingRows: [],
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "HRM" },
        { label: "Department" },
   
        { label: "Department List" },
      ],
    };
  },
  methods: {
    onRowEditInit(event) {
      this.originalRows[event.index] = { ...this.departments[event.index] };
    },
    onRowEditCancel(event) {
      Vue.set(this.departments, event.index, this.originalRows[event.index]);
    },
  },
};
</script>