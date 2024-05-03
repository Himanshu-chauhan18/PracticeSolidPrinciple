import { disconnect } from "process";

class Product{
    ProductList:any=[{id:1,name:'Bread',price:20},{id:2,name:'Shampoo',price:10}];
   
    getAllProduct(){
        return this.ProductList;
    }
    
    getProductById(id:any){
        return this.ProductList.filter((product:any)=>id==product.id)
    }

    getProductNameById(id:any){
        const product = this.ProductList.find((product: any) => id == product.id);
        return product ? product.name : null;
    }

    getProductPriceById(id:any){
        const product = this.ProductList.find((product: any) => id == product.id);
        return product ? product.price : null;
    }

    //  SEPARATION OF CONCERN 
    // -----------------------
    // calculateProductPrice(id:any){
    //     let amount = this.getProductPriceById(id);
    //     return amount - this.discount;
    // }

    // getProductInvoice(id:any){
    //     console.log("Product Name:",this.getProductNameById(id))
    //     console.log("Product Price:",this.getProductPriceById(id))
    //     console.log("------------------------------")
    //     console.log("Discount:",this.discount)
    //     console.log("------------------------------")
    //     console.log("Total Price:",this.calculateProductPrice(id))
    // }
}
class CalculatePrices{
    discount = 5;

    get discountVAL() { 
        return this.discount
    }

    // INJECT IT AS DEPENDENCIES
    constructor(public productInstance:Product){

    }
    calculateProductPrice(id:any){
        let amount = this.productInstance.getProductPriceById(id);
        return amount - this.discountVAL;
    }

    getProductInvoice(id:any){
        console.log("Product Name:",this.productInstance.getProductNameById(id))
        console.log("Product Price:",this.productInstance.getProductPriceById(id))
        console.log("------------------------------")
        console.log("Discount:",this.discountVAL)
        console.log("------------------------------")
        console.log("Total Price:",this.calculateProductPrice(id))

    }
}

// const productInstance = new Product();
// console.log(productInstance.getAllProduct())
// console.log(productInstance.getProductById(1))
// console.log(productInstance.getProductNameById(1))
// console.log(productInstance.calculateProductPrice(1))
const calculatePriceInstance = new CalculatePrices(new Product());
calculatePriceInstance.getProductInvoice(1)