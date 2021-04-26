<template>
    <div class="row mb-3">
        <h2><i class="fas fa-hamburger"></i> อาหารที่ชอบ</h2>
        <input type="text" name="food" class="form-control" @keyup.enter="changeFood">
    </div>
</template>

<script>
export default {
    methods:{
        changeFood(event){
            this.$store.commit('setFood',event.target.value)
            event.target.value = ""
        }
    }
}
</script>
