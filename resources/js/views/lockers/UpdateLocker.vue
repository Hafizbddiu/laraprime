<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
        <div class="p-d-flex p-jc-between p-mt-2">
      <div><h3>Update Locker</h3></div>
      <div>
        <Button>
          <router-link class="text-white" to="/department-list">Locker list</router-link>
        </Button>
      </div>
    </div>
    <Card class="p-mt-2">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
            <span class="p-float-label">          
          <InputText id="Name" type="text" />
              <label for="Name">Name </label>
            </span>
          </div>
          <div class="p-field p-col">
             <span class="p-float-label">            
            <InputText id="description" type="text" />
            <label for="description">Description</label>
             </span>
          </div>
        </div>

        <div class="p-fluid p-formgrid p-grid p-col-12">
          <div class="p-field p-col-6">
            <span class="p-float-label">
            <Dropdown id="dropdown" v-model="parentDepartment" :options="parentDepartments" optionLabel="name"   :filter="true" />
            <label for="dropdown">Select a Parent</label>
        </span>
          </div>
           <div class="p-field p-col-6">
            <span class="p-float-label"> 
            <Dropdown
            id="dropdown"
              v-model="softOrder"
              :options="softOrders"
              optionLabel="order"
              :filter="true"            
            />
              <label for="dropdown">Select a Soft Order</label>
               </span>
          </div>
          <!-- <div class="p-field p-col-6">
            <label for="status">Status</label>
            <br>

            <Checkbox v-model="status" :binary="true" />
            <span v-if="status">Active</span>
            <span v-else>Inactive</span>
          </div> -->
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

          <div class="p-col-6">
         
            <Button label="Submit" class=" p-button-success" />
          </div>
        </div>

        <!-- <div class="form-group">
          <label> </label>
          <Button label="Submit" class="col-md-3 p-button-success" />
        </div> -->
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

  name: "UpdateLocker",

  data() {
    return {
     status: null,
      statuss: [{ name: "Active" }, { name: "Inactive" }],
    name1:null,
      parentDepartment: null,
      softOrder:null,
      softOrders:[
          {order:'Order1'},
            {order:'Order2'},
              {order:'Order3'},
      ],
   
    
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "Lockers"},
         { label: "Create Locker",to:"/create-locker" },
        { label: "Locker List",to:"/locker-list" },
        { label: "Update Locker"},
      
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