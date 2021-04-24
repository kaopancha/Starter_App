<template>
  <div id="app">
    <header class="text-center text-white bg-dark p-3">
      <h1>VueJS Workshop (CLI)</h1>
    </header>
    <div class="container">
      <h2 class="text-center alert-info mt-4">Workshop #1 Limit Message</h2>
      <hr>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" v-text="max-message.length">20</span>
        </div>
        <input type="text" class="form-control" v-model="message" v-bind:maxlength="max">
      </div>
      <br><br>

      <h2 class="text-center alert-info mt-4">Workshop #2 Preview Image</h2>
      <hr>
      <div v-if="!image">
        <input type="file" class="form-control" @change="onFileChange">
      </div>
      <div v-else>
        <img v-bind:src="image" class="img-fluid my-3"><br>
        <button class="btn btn-danger" @click="removeImage">Remove</button>
      </div>
      <br><br>

      <h2 class="text-center alert-info mt-4">Workshop #3 คำนวณราคาสินค้า</h2>
      <hr>

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      message: "",
      max: 20,
      image:""
    }
  },
  methods:{
    onFileChange:function(e){
      let files = e.target.files
      if(!files.length)
        return
      this.createImage(files[0])
    },

    createImage(files){
      let reader = new FileReader()
      reader.onload=(e)=>{
        this.image = e.target.result
      }
      reader.readAsDataURL(files)
    },

    removeImage(){
      this.image = ""
    }
  }
}
</script>

