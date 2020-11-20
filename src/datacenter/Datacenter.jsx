import React, { createContext, useEffect, useState } from 'react'
import { db } from '../apiproduct/Config'
export const Context=createContext()
export function Datacenter(props) {
    const [products,setproduts]=useState([])
    const [cards,setcards]=useState([])
   
       useEffect(() => {
        function fetchData(){
            db.collection('products').get()
            .then(result=>{
                const data=result.docs.map(product=>{
                    return{
                        ...product.data(),
                        id:product.id
                    }
                })
                setproduts(data)
            })
        }
       fetchData()
       }, [])
    function addNew (product){
        db.collection('products').add(product)
    }
    function filterProduct(id){
        const result= products.filter(data=>data.id==id)
    
        console.log(result);
        db.collection('cards').add(...result)
      }
    
    useEffect(() => {
        function fetchData(){
            db.collection('cards').get()
            .then(result=>{
                const data=result.docs.map(card=>{
                    return{
                        ...card.data(),
                        id:card.id
                    }
                })
                setcards(data)
            })
        }
       fetchData()
       }, [])
       function deleteFromFireBase(id){
     db.collection('cards').doc(id).delete()
    }
    function deleteFireBase(id){
        db.collection('products').doc(id).delete()
       }
    
    function updateUser (id,product){
   console.log(id,product)
        // const result= products.filter(data=>data.id==id)
        db.collection('products').doc(id).update(product)
    }
  return (
        <div>
            <Context.Provider value={{products,cards,
                addNew,
                deleteFromFireBase,
                deleteFireBase,
                filterProduct,
                updateUser}}>
                {props.children}
            </Context.Provider>
        </div>
    )
}
