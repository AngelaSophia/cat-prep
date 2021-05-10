class Mkulima{
    constructor(){
        
       this.farms=[];
       this.products=[];
       this.orders=[];
    }
    addFarm(farmId,name,famer,phone,address){
        return this.farms.push({farmId,name,famer,phone,address});
    }
    removeFarm(farmId){
        let result=this.farms.find(result=>result.farmId===farmId);
        return delete this.farms[farmId];
    }
    updateFarm(farmId,name,famer,phone,address){
         this.farms.farmId=farmId;
        this.farms.name=name;
        this.farms.famer=famer;
        this.farms.phone=phone;
        this.farms.address=address;
        var farm={
            farmId,
            name,
            famer,
            phone,
            address,
        }
       return farm;
        
        }
        getfarm(farmId){
       let get=this.farms.find(culc=>culc.farmId===farmId);
       return get;
        }
       addproduct(productId,name,price){
           return this.products.push({productId,name,price});
       }
       removeproduct(productId){
           let prices=this.products.find(result=>result.productId===productId);
           return delete this.products[productId];
       }
       updateproduct(productId,name,price){
           this.products.productId=productId;
           this.products.name=name;
           this.products.price=price;
           var Product={
               productId,
               name,
               price,
           }
           return Product;
       } 
       getproduct(productId) {
    let get=this.products.find(pro=>pro.productId===productId);
    return get;
       }
       printproducts(){
           console.log(`${this.products}:${this.price}`);
       }
    
     //getter
     get order(){
        return this.calcOrder();
     }
     //method
    calcOrder(){
       return this.product*this.orders;
     }  
    }
    var mkulima=new Mkulima();
    console.log(mkulima.addFarm(38693082,"got","Joseph","0758183543","176Kadongo"));
    console.log(mkulima.removeFarm());
    console.log(mkulima.updateFarm("123456","Alaro","Ayugi","0723456789","567Kakolo"));
    console.log(mkulima.getfarm(38693082));
    console.log(mkulima.addproduct(12345,"Sophia","1000sh"));
    console.log(mkulima.removeproduct());
    console.log(mkulima.updateproduct("12345","Angela","1000sh"));
    console.log(mkulima.getproduct("12345"));
    console.log(mkulima.printproducts());
    console.log(mkulima.calcOrder());