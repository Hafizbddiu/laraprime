import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const CreateDesignation = () => import('./views/HRM/designations/CreateDesignation.vue');
const DesignationList = () => import('./views/HRM/designations/DesignationList.vue');
const CreateDepartment = () => import('./views/HRM/departments/CreateDepartment.vue');
const DepartmentList = () => import('./views/HRM/departments/DepartmentList.vue');
const CreateBrand = () => import('./views/Base/brands/CreateBrand.vue');
const BrandList = () => import('./views/Base/brands/BrandList.vue');
const CreateManufacture = () => import('./views/Base/manufactures/CreateManufacture.vue');
const ManufactureList = () => import('./views/Base/manufactures/ManufactureList.vue');
const Sales = () => import('./views/sales.vue');
const CreatePurchaseReturn = () => import('./views/purchases/CreatePurchaseReturn.vue');
const PurchaseReturnList = () => import('./views/purchases/PurchaseReturnList.vue');
const PurchaseReturnInvoice = () => import('./views/purchases/PurchaseReturnInvoice.vue');
const LockerList = () => import('./views/lockers/LockerList.vue');
const UpdateLocker = () => import('./views/lockers/UpdateLocker.vue');
const CreateLocker = () => import('./views/lockers/CreateLocker.vue');
const PurchaseStatus = () => import('./views/status/PurchaseStatus.vue');
const SalesStatus = () => import('./views/status/SalesStatus.vue');
const PurchaseReturnStatus = () => import('./views/status/PurchaseReturnStatus.vue');
const SalesReturnStatus = () => import('./views/status/SalesReturnStatus.vue');








const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/create-designation',
        name: 'CreateDesignation',
        component: CreateDesignation
    },
    {
        path: '/designation-list',
        name: 'designationList',
        component: DesignationList
    },
    {
        path: '/create-department',
        name: 'CreateDepartment',
        component: CreateDepartment
    },
    {
        path: '/department-list',
        name: 'DepartmentList',
        component: DepartmentList
    },
    {
        path: '/create-brand',
        name: 'CreateBrand',
        component: CreateBrand
    },
    {
        path: '/brand-list',
        name: 'BrandList',
        component: BrandList
    },
    {
        path: '/create-manufacture',
        name: 'CreateManufacture',
        component: CreateManufacture
    },
    {
        path: '/manufacture-list',
        name: 'ManufactureList',
        component: ManufactureList
    },
    {
        path: '/sales',
        name: 'Sale',
        component: Sales
    },
    {
        path: '/create-purchase-return',
        name: 'CreatePurchaseReturn',
        component: CreatePurchaseReturn
    },
        {
        path: '/purchase-return-list',
        name: ' PurchaseReturnList',
        component:PurchaseReturnList
    },
    {
        path: '/purchase-return-invoice',
        name: ' PurchaseReturnInvoice',
        component:PurchaseReturnInvoice
    },
    {
        path: '/locker-list',
        name: ' LockerList',
        component:LockerList
    },
    {
        path: '/update-locker',
        name: ' UpdateLocker',
        component:UpdateLocker
    },
    {
        path: '/create-locker',
        name: ' CreateLocker',
        component:CreateLocker
    },
    {
        path: '/purchase-status',
        name: ' PurchaseStatus',
        component:PurchaseStatus
    },
    {
        path: '/sales-status',
        name: ' SalesStatus',
        component:SalesStatus
    },
    {
        path: '/purchase-return-status',
        name: ' PurchaseReturnStatus',
        component:PurchaseReturnStatus
    },
    {
        path: '/sales-return-status',
        name: ' SalesReturnStatus',
        component:SalesReturnStatus
    },
 
    
    

]

export default new VueRouter({
    // mode: 'history',
    routes
});


