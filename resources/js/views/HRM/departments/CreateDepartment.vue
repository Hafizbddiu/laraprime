<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
        <div class="p-d-flex p-jc-between p-mt-2">
      <div><h3>Create Department</h3></div>
      <div>
        <Button>
          <router-link class="text-white" to="/department-list">Department list</router-link>
        </Button>
      </div>
    </div>
    <Card class="p-mt-2">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
               <span class="p-float-label"> 
            <InputText id="departmentName" type="text" />
             <label for="departmentName">Department Name </label>
               </span>
          </div>
          <div class="p-field p-col">
               <span class="p-float-label">
            <InputText id="departmentHead" type="text" />
              <label for="departmentHead">Department Head </label>
               </span>
          </div>
        </div>

        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-6 p-mt-3">
               <span class="p-float-label">
                        <Dropdown id="dropdown" v-model="parentDepartment" :options="parentDepartments" optionLabel="name"   :filter="true" />
                        <label for="dropdown">Select a Department</label>
                    </span>
           
    
            
          </div>
          <div class="p-field p-col-6">
            <label for="status">Status</label>
            <br>

            <Checkbox v-model="status" :binary="true" />
            <span v-if="status">Active</span>
            <span v-else>Inactive</span>
          </div>
        </div>
       
        <div class="form-group">
          <label> </label>
          <Button label="Submit" class="col-md-3 p-button-success" />
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import Button from 'primevue/button';
export default {
  components: {
    Dropdown,
    Checkbox,
    Button,
  },

  name: "CreateDepartment",

  data() {
    return {
      status: true,
      parentDepartment:null,
    

      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "HRM"},
        { label: "Department" },
        { label: "Department List",to:"/department-list"},
        { label: "Create Department" },
      
      ],
      parentDepartments: [
                            {name: 'Department 1', code: 'A-SY'},
                            {name: 'Department 2', code: 'A-NE'},
                            {name: 'Department 3', code: 'A-WO'}
                        ],
 
    };
  },
};
</script>