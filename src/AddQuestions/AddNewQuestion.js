import React from "react";
import { useState,useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../FireBase/firebaseConfig';



const AddNewQuestion=()=>{

    const [No, setNo]=useState()
    const [Question,setQuestion]=useState()
    const [group,setgroup]=useState()
    const [Type,setType]=useState()

    let AllQuestions={
        No,
        Question,
        Type,
        group
        
    }

    const AllList=[]
    const handlesubmit= async (e)=>{
        e.preventDefault();
        // Add a new document with a generated id.
        try {
            await addDoc(collection(db, "questions"), {
                ...AllQuestions
              });
              alert("added sucessfully")
            
        } catch (error) {
            alert(error)
        }


        AllList.push(AllQuestions)
        console.log(AllList)
        // alert("hello")
    }
    return(
        <>
        <div>
            <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Question No" value={No}  onChange={e=>setNo(e.target.value) } />
            <input type="text" placeholder="Question" value={Question}  onChange={e=>setQuestion(e.target.value) } />
            <input type="text" placeholder="Type" value={Type}  onChange={e=>setType(e.target.value) } />
            <input type="text" placeholder="category" value={group}  onChange={e=>setgroup(e.target.value) } />
           
            <input type="submit" />
  
            </form>
        </div>
        </>
    )

}

export default  AddNewQuestion;
