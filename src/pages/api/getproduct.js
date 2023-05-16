import Product from "../models/Product";
import connectDb from "middleware/mongoose";

const handler = async (req,res) =>  {
    
    try{
        let products = await Product.find()
        res.status(200).json({products})
    }
    catch (err){
        res.status(500).json({error : 'failed to fetch data'})
    }   
}

export default connectDb(handler) ;