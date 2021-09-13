<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-2">
      <div><h3>Create Manufacture</h3></div>
      <div>
        <Button>
          <router-link class="text-white text-decoration-none" to="/manufacture-list"
      >Manufacture List</router-link
          >
        </Button>
      </div>
    </div>
    <card class="p-mt-2">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
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
        <div class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-6">
            <label for="logo">Logo </label> <br />
            <Input type="file" id="logo" class="form-control" />
          </div>
          <div class="p-field p-col-6">
            <label for="status">Status</label>
            <br />

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
    </card>
  </div>
</template>
<script>
import Checkbox from "primevue/checkbox";
import Textarea from "primevue/textarea";
import Button from 'primevue/button';
export default {
  name: "CreateManufacture",
  components: {
    Textarea,
    Checkbox,
    Button,
  },
  data() {
    return {
      status: true,
      description:'',
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "Base" },
        { label: "Manufacture" },
        { label: "Manufacture List", to: "/manufacture-list" },
        { label: "Create Banufacture" },
      ],
    };
  },
};
</script>