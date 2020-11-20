import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../datacenter/Datacenter'

const Product = ({product}) => {
    const  {deleteFireBase,filterProduct}=useContext(Context)
    function sendToDataCenter()
   {
     filterProduct(product.id)
   }

   function Sendtoparent(id){
    deleteFireBase(id) 
  
}
    return (
        <div className="card mt-2 col-md-4" style={{width:18+'erm'}}>
           <div className="card-body">
          
            <h1  className="card-title">Produit : {product.name}</h1>
            <h1  className="card-title">Prix : {product.price} $</h1>
            <h1   className="card-title" style={{fontSize:25}}>Stock Disponible <span style={{fontSize:10}}> (Pour le moment)</span> : {product.stock_items}</h1>
            <button onClick={sendToDataCenter} className='btn btn-warning mr-2 card-title'>Add To Carte</button>
            <Link className='btn btn-success float-right mt-2' to={'DetailProduct/'+product.id}>Details</Link>
            <Link to={'/update/'+product.id} className='btn btn-primary'>Update</Link>
            <button  onClick={Sendtoparent.bind(this,product.id)}  className='btn btn-danger mr-2 card-title'>X</button>
        </div>
        </div>
    )
}
export default Product;
