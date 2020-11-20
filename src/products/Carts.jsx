import React, { useContext } from 'react'
import { Context } from '../datacenter/Datacenter'

export default function Carts() {
    const {cards,deleteFromFireBase}=useContext(Context)

    function SendtoData(id){
        deleteFromFireBase(id) 
      
    }
    return (
        <div className="container">
        <h1 className="text-danger text-center">My Carts ({cards.length})</h1>
    <div className='row'>
        {cards.map(card=>(
             <div className="card mt-2 col-md-3" style={{width:18+'erm'}}>
              <div className="card-body">
              
              <h4 className="card-title">name :{card.name}</h4>
              <h4 className="card-title">price : {card.price} $</h4>
              <h4 className="card-title">Stock :{card.stock_items}</h4>
             <button onClick={SendtoData.bind(this,card.id)} className='btn btn-danger mr-2 '>DELETE </button>
             
             </div>
           </div>
        ))}
    </div>
        </div>
    )
}
