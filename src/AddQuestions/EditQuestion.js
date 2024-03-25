import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../FireBase/firebaseConfig';

const EditAllQuestion=({MyQuestion})=>{
    const [No, setNo]=useState(MyQuestion.No)
    const [Question,setQuestion]=useState(MyQuestion.Question)
    const [group,setgroup]=useState(MyQuestion.group)
    const [Type,setType]=useState(MyQuestion.Type)

    let AllQuestions={
        No,
        Question,
        Type,
        group
        
    }
    alert(MyQuestion.group)

    const handleEdit= async (e)=>{
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
    }

    return(
        <>
         <div>
            <form onSubmit={handleEdit}>
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

export default EditAllQuestion