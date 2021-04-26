<template>
    <div class="row mb-3">
        <h2><i class="fas fa-running"></i> กีฬาที่ชอบ</h2>
        <input type="text" name="sport" class="form-control" @keyup.enter="changeSport">
    </div>
</template>

<script>
export default {
    methods:{
        changeSport(event){
            this.sport
            this.$store.commit('setSport',event.target.value)
        }
    }
}
</script>