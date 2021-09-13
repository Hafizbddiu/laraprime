<template>
  <div>
    <Breadcrumb :home="home" :model="Breadcrumb" />
 

    <div class="p-d-flex p-jc-between p-mt-2">
      <div><h3>Purchase Return</h3></div>
      <div>
        <Button>
          <router-link class="text-white" to="/purchase-return-list"
            >Purchase return List
          </router-link>
        </Button>
      </div>
    </div>

    <card class="p-mt-2">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
            <span class="p-float-label">           
           <Calendar id="purchaseReturnDate" v-model="date1" />
             <label for="purchaseReturnDate">Purchase Return Date</label>
            </span>
          </div>
          <div class="p-field p-col">
          <span class="p-float-label">
            <Dropdown
              v-model="customerName"
              :options="customerNames"
              optionLabel="Name"
              :filter="true"
             
            />
            <label for="customerName">Customer Name</label>
             
          </span>
          </div>
          <div class="p-field p-col">
           <span class="p-float-label">
            <Dropdown
              v-model="warehouse"
              :options="warehouses"
              optionLabel="warehouse"
              :filter="true"
             
            /> 
            <label for="description">Ware House</label>
           </span>
          </div>
        </div>

        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col p-mt-3">
            <span class="p-float-label">         
            <InputText id="referenceNumber" type="number" />
              <label for="referenceNumber">Reference No</label>
            </span>
          </div>
          <div class="p-field p-col p-mt-3">
            <span class="p-float-label">   
            <Dropdown
              v-model="invoiceNumber"
              :options="invoiceNumbers"
              optionLabel="invoiceNumber"
              :filter="true"
             
            />
            <label for="invoiceNumber">Invoice Number</label>
            </span>
          </div>

          <div class="p-field p-col p-mt-3">
            <span class="p-float-label">   
            <Dropdown
              v-model="purchaseReturnStatus"
              :options="purchaseReturnStatuss"
              optionLabel="purchaseReturnStatus"
              :filter="true"
             
            />
            <label for="Ordered">Purchase Return Status</label>
            </span>
          </div>
        </div>

        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col p-mt-3">
           <span class="p-float-label">   
            <Dropdown
              v-model="paymentSystem"
              :options="paymentSystems"
              optionLabel="paymentSystem"
              :filter="true" 
            />
             <label for="paymentSystem">Paid</label>
           </span>
          </div>

          <div class="p-field p-col p-mt-3">
          <span class="p-float-label">   
            <Dropdown
              v-model="salesBy"
              :options="salesBys"
              optionLabel="salesBy"
              :filter="true"
              placeholder=""
            />
             <label for="Ordered">Employee</label>
          </span>
          </div>
          <div class="p-field p-col p-mt-3">
            <span class="p-float-label">      
            <InputText id="notes" type="text" />
                <label for="notes">Notes</label>
            </span>
          </div>
        </div>
<div class="bg-light">
        <div
          class="p-fluid p-formgrid p-grid p-md-10 p-mt-3"
          v-for="(item, id) in items"
          :key="id"
        >
          <div class="p-field p-col">
           <span class="p-float-label">
            <Dropdown
              v-model="item.productName"
              :options="productNames"
              optionLabel="productName"
              :filter="true"
             
            />
            <label for="Ordered">Product Name</label>
           </span>
          </div>

          <div class="p-field p-col">
            <span class="p-float-label">
          
            <InputText id="qty" type="text" v-model="item.qty" />
              <label for="qty">Qty</label>
            </span>
          </div>
          <div class="p-field p-col">
                  <span class="p-float-label">
            <InputText id="perPrice" type="text" v-model="item.perPrice" />
                  <label for="perPrice">Per Price</label>
                  </span>
          </div>
          <div class="p-field p-col">
            <span class="p-float-label">
        <InputText id="totalPrice" type="text" v-model="item.totalPrice" />
            <label for="totalPrice">Total Price</label>
            </span>
          </div>
          <div class="p-mt-1">
          <button @click="remove(id)" class="btn btn-danger">-</button>
          </div>
        </div>
</div>
        <button @click="add" class="btn btn-success">+</button>

        <div class="p-grid ">
          <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between ">
           <label for="saleDiscount">Sale Discount</label>
            <InputText id="saleDiscount" type="Number"  />
             
           
          </div>
          <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between ">
             <label for="totalDiscount">Total Discount</label>
            <InputText id="totalDiscount" type="Number"  />
            
            
          </div>
          <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between ">
             <label for="totalTax">Total Tax</label>
            <InputText id="totalTax" type="Number"  />
            
          
          </div>
          <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between ">
                  <label for="shippingCost">Shipping Cost</label>
            <InputText id="shippingCost" type="Number"  />
           
         
          </div>
          <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between  ">
           <label for="grandTotal">Grand Total</label>
            <InputText id="grandTotal" type="Number"  />
            
            
          </div>
          <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between ">
               <label for="previous">Previous </label>   
            <InputText id="previous" type="Number"  />
              
          
          </div>
            <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between ">
                 <label for="netTotal">Net Total</label>        
            <InputText id="netTotal" type="Number"  />
           
                
          </div>
            <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between ">
                <label for="paidAmount">Paid Amount</label>
                   <InputText id="paidAmount" type="Number"  />
               
             
          </div>
            <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between ">
               <label for="due">Due</label>    
            <InputText id="due" type="Number"  />
               
               
          </div>
          
      
          <!-- <div class="p-field p-col">
            <label for="notes">Notes </label><br />
            <Textarea v-model="value2" :autoResize="true" rows="3" cols="30" />
          </div> -->
        </div>
        <Button label="Save Purchase Return" class="p-button-outlined" />
      </template>
    </card>
  </div>
</template>
<script>
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';

//  import Calendar from 'primevue/calendar';
export default {
  components: {
    Dropdown,
    Textarea,
   Calendar,
   Button,
  },
  name: "CreatePurchaseReturn",
  data() {
    return {
      date1 :null,
      customerName:null,
      warehouse:null,
      invoiceNumber:null,
      purchaseReturnStatus:null,
      paymentSystem:null,
      salesBy:null,
      item:[
        {productName:null}
      ],
      items: [{ productName: "", qty: "", perPrice: "", totalPrice: "" }],

       home: { icon: "pi pi-home", to: "/" },
      Breadcrumb: [
        { label: "Purchase"},
        { label: "Puchase Return List",to:"/purchase-return-list" },
          { label: "Purchase Return Invoice",to:"/purchase-return-invoice"},
        { label: "Create Puchase Return"},
      ],
      customerNames:[
        {Name:'Customer 1'},
        {Name:'Customer 2'},
      ],
         warehouses:[
        {warehouse:'warehouse 1'},
        {warehouse:'warehouse 2'},
      ],
         invoiceNumbers:[
        {invoiceNumber:'invoiceNumber 1'},
        {invoiceNumber:'invoiceNumber 2'},
      ],
     
        purchaseReturnStatuss:[
        {purchaseReturnStatus:'Order '},
        {purchaseReturnStatus:'Unorder'},
      ],
         paymentSystems:[
        {paymentSystem:'Cash '},
        {paymentSystem:'Paypal'},
      ],
          salesBys:[
        {salesBy:'Cash '},
        {salesBy:'Paypal'},
      ],
             productNames:[
        {productName:'Cash '},
        {productName:'Paypal'},
      ],
    
      

    };
  },
  methods: {
    add() {
      this.items.push({
        productName: "",
        qty: "",
        perPrice: "",
        totalPrice: "",
      });
    },
      remove(id) {
      this.items.splice(id,1);
      if(id===0){
        this.add();
      }
  },
  }
};
</script>
