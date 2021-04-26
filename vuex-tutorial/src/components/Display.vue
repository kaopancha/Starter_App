<template>
    <div class="row mb-3">
        <h2>แสดงข้อมูลใน store</h2>
        <div class="h4 text-center alert-danger col-md-6">State Food : {{$store.getters.food}}</div>
        <div class="h4 text-center alert-success col-md-6">State Sport : {{$store.getters.sport}}</div>
    </div>
</template>

<script>
export default {
    
}
</script>