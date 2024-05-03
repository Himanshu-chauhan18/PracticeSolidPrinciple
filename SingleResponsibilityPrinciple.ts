// the code follows the principle of (Single Responsibility) to some extent. The Product class is responsible for managing product-related data and operations such as retrieving product details and calculating discounts. Meanwhile, the CalculatePrices class is responsible for calculating prices and generating invoices based on the products.

// However, there's a slight violation of the Single Responsibility Principle in the Product class. Initially, it was handling both product management and price calculations, but the price calculation functionality was moved to the CalculatePrices class, which is good 

// the code structure is moving in the right direction by separating concerns between managing products and calculating prices.

class Product{
    ProductList:any=[{id:1,name:'Bread',price:20},{id:2,name:'Shampoo',price:10}];
   
    getAllProduct(){
        return this.ProductList;
    }
    
    getProductById(id:Number){
        return this.ProductList.filter((product:{id:Number,name:String,price:Number})=>id==product.id)
    }

    getProductNameById(id:Number){
        const product = this.ProductList.find((product: {id:Number,name:String,price:Number}) => id == product.id);
        return product ? product.name : null;
    }

    getProductPriceById(id:Number){
        const product = this.ProductList.find((product: {id:Number,name:String,price:Number}) => id == product.id);
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
    calculateProductPrice(id:Number){
        let amount = this.productInstance.getProductPriceById(id);
        return amount - this.discountVAL;
    }

    getProductInvoice(id:Number){
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