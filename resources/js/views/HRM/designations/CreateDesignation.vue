<template>
  <div class="p-mt-2">
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-2">
      <div><h3>Add Designation</h3></div>
      <div>
        <Button>
          <router-link class="text-white" to="/designation-list">Designation list</router-link>
        </Button>
      </div>
    </div>
    <Card class="p-mt-2">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
             <span class="p-float-label">       
            <InputText type="text" id="designationName" />
             <label for="designationName">Designation Name </label><br />
              </span>
          </div>
          <div class="p-field p-col">
              <span class="p-float-label">       
            
            <Textarea id="description" :autoResize="true" rows="1" cols="30" />
            <label for="description">Description </label><br />
              </span>
          </div>
        </div>
        <div class="form-group">
          <label for="status">Status </label><br />
          <Checkbox v-model="status" :binary="true" />
          <span v-if="status">Active</span>
          <span v-else>Inactive</span>
        </div>
        <div class="form-group">
          <label> </label>
          <Button label="Submit" class="p-button-success" />
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import Checkbox from "primevue/checkbox";
import Textarea from "primevue/textarea";
import Button from 'primevue/button';

export default {
  name: "CreateDesignation",
  components: {
    Textarea,
    Checkbox,
    Button,
  },

  data() {
    return {
      status: true,
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "HRM"},
        { label: "Designation" },
        { label: "Designation List",to:"/designation-list" },
        { label: "Create Designation" },
        
      ],
    };
  },
};
</script>