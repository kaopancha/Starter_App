<template>
  <div id="app">
    <!-- Header -->
    <header class="text-center text-white bg-dark p-3">
      <h1>VueJS Workshop (CLI)</h1>
    </header>

    <!-- Content -->
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
      <div class="row">
        <div class="col-md-4 mb-3" v-for="item in product" :key="item">
          <div class="card h-100">
            <img v-bind:src="item.image" class="card-img-top">
            <div class="card-body">
              <h4 class="card-title">{{item.name}}</h4>
              <p class="card-text text-muted">ราคา {{item.price}} บาท</p>
            </div>
            <div class="card-footer d-flex justify-content-center">
                <input type="checkbox" class="form-check-input p-3" @change="product_selected(item)">
            </div>
          </div>
        </div>
        <span class="h3 text-end mt-3">ยอดชำระเงิน {{sumPrice()}} บาท</span>
      </div>
      <br><br>

      <h2 class="text-center alert-info mt-4">Workshop #3 คำนวณราคาสินค้า</h2>
      <hr>
      <div class="row">
        <!-- products -->
        <div class="col-md-6 mb-3">
          <div class="row">
            <div class="col-md-4 mb-3" v-for="product in product" :key="product">
              <div class="card h-100">
                <img v-bind:src="product.image" class="card-img-top">
                <div class="card-body">
                  <h4 class="card-title">{{product.name}}</h4>
                  <p class="card-text text-muted">ราคา {{product.price}} บาท</p>
                </div>
                <div class="card-footer d-flex justify-content-center">
                  <button class="btn btn-primary" @click="addcart(product)">หยิบลงตะกร้า</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- table selected product -->
        <div class="col-md-6" v-if="cart != 0">
          <h4><i class="fa fa-shopping-cart" aria-hidden="true"></i> ตะกร้าสินค้า</h4>
          <hr>
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">ภาพ</th>
                <th scope="col">ชื่อ</th>
                <th scope="col">ราคา</th>
                <th scope="col">จำนวน</th>
                <th scope="col">ยอดรวม</th>
                <th scope="col">ลบ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cart_product in cart" :key="cart_product">
                <td><img v-bind:src="cart_product.image" width="100px"></td>
                <td>{{cart_product.name}}</td>
                <td>{{cart_product.price}}</td>
                <td>
                  <span class="btn qty-minus" @click="minusQty(cart_product)"><i class="fa fa-minus" aria-hidden="true"></i></span>
                  {{cart_product.qty}}
                  <span class="btn qty-plus" @click="plusQty(cart_product)"><i class="fa fa-plus" aria-hidden="true"></i></span>
                  </td>
                <td>{{cart_product.total}}</td>
                <td><span class="btn btn-danger" @click="removeProduct(cart_product)"><i class="fa fa-trash" aria-hidden="true"></i></span></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      // Workshop 1
      message: "",
      max: 20,

      // Workshop 2
      image:"",

      // Workshop 3,4
      product:[
        {
          id:1,
          name: "กาแฟ",
          price: 40,
          image: "https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg",
          active: false
        },
        {
          id:2,
          name: "ชามะนาว",
          price: 45,
          image: "https://cdn.pixabay.com/photo/2017/01/27/13/45/tee-2013118_960_720.jpg",
          active: false
        },
        {
          id:3,
          name: "โกโก้ร้อน",
          price: 35,
          image: "https://cdn.pixabay.com/photo/2019/10/05/07/01/cocoa-4527164_960_720.jpg",
          active: false
        },
        {
          id:4,
          name: "มาการอง",
          price: 60,
          image: "https://cdn.pixabay.com/photo/2020/01/05/07/12/colorful-4742427_960_720.jpg",
          active: false
        },
        {
          id:5,
          name: "คัพเค้ก",
          price: 40,
          image: "https://cdn.pixabay.com/photo/2017/09/14/14/33/cupcake-2749204_960_720.jpg",
          active: false
        },
      ],

      // workshop 4
      cart:[],
      coffee:0,
      tea:0,
      cocoa:0,
      macaron:0,
      cupcake:0,
    }
  },
  methods:{
    // Workshop 2
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
    },

    // workshop 3
    product_selected(item){
      item.active = !item.active
    },
    sumPrice(){
      let total = 0
      this.product.forEach(function(item){
        if(item.active){
          total += item.price
        }
      })
      return total
    },

    // workshop 4
    addcart(product){
      switch (product.id) {
        case 1:
          this.coffee += 1
          // รายการเดียว
          if(this.coffee <= 1){
            this.pushProduct(product)
          }
          // รายการซ้ำ
          else{
            let founded = this.findID(product)
            this.addqty(founded)
          }
          break;
        case 2:
          this.tea +=1
          if(this.tea <= 1){
            this.pushProduct(product)
          }
          else{
            let founded = this.findID(product)
            this.addqty(founded)
          }
          break;
        case 3:
          this.cocoa +=1
          if(this.cocoa <= 1){
            this.pushProduct(product)
          }
          else{
            let founded = this.findID(product)
            this.addqty(founded)
          }
          break;
        case 4:
          this.macaron +=1
          if(this.macaron <= 1){
            this.pushProduct(product)
          }
          else{
            let founded = this.findID(product)
            this.addqty(founded)
          }
          break;
        case 5:
          this.cupcake +=1
          if(this.cupcake <= 1){
            this.pushProduct(product)
          }
          else{
            let founded = this.findID(product)
            this.addqty(founded)
          }
      }
    },
    pushProduct(product){
      this.cart.push({
        id:product.id,
        name:product.name,
        price:product.price,
        image:product.image,
        qty:1,
        total:product.price
      })
    },
    findID(product){
      for(let i = 0; i < this.cart.length; i++){
        if(this.cart[i].id == product.id){
          return i
        }
      }
      return -1
    },
    addqty(founded){
      this.cart[founded].qty +=1
      this.cart[founded].total = this.cart[founded].qty * this.cart[founded].price
    },
    minusQty(cart_product){
      cart_product.qty > 1 ? cart_product.qty -= 1 : cart_product.qty
      cart_product.total = cart_product.qty * cart_product.price
    },
    plusQty(cart_product){
      cart_product.qty += 1
      cart_product.total = cart_product.qty * cart_product.price
    },
    removeProduct(cart_product){
      if(confirm("คุณต้องการลบสินค้าหรือไม่ ?")){
        let index = this.cart.indexOf(cart_product)
        this.cart.splice(index,1)
        switch (cart_product.id) {
        case 1:
          this.coffee = 0
          break;
        case 2:
          this.tea = 0
          break;
        case 3:
          this.cocoa = 0
          break;
        case 4:
          this.macaron = 0
          break;
        case 5:
          this.cupcake = 0
        }
      }
    }
  }
}
</script>
<style scoped>
.qty-minus{
  cursor: pointer;
  margin-right: 10px;
}
.qty-plus{
  cursor: pointer;
  margin-left: 10px;
}
</style>

