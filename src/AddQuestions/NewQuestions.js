import React from  'react'
import { collection, getDocs,getDoc,deleteDoc,doc,setDoc,query, where ,docs} from "firebase/firestore"; 
 import { useState,useEffect } from 'react';
 import { db } from '../FireBase/firebaseConfig';
 import EditAllQuestion from './EditQuestion';

const AddNewQuestions=()=>{
    const [Allquestions, setAllquestions]=useState([])
    const [No, setNo]=useState()
    const [Question,setQuestion]=useState()
    const [group,setgroup]=useState()
    const [Type,setType]=useState()
    const [id,setid]=useState()
    const [Search, setSearch]=useState()
    const [find, setfind]=useState([])
    let see=[]

const [show,setshow]=useState(false)

    let HoldQuestions={}
    

     const  DisplayAll=async()=>{
        const querySnapshot = await getDocs(collection(db, "questions"));
        const ViewQuestions=querySnapshot.docs.map(doc=>({id: doc.id, ...doc.data()}))
        
       setAllquestions(ViewQuestions)
       //console.log(Allquestions)
       
     }


     const DeleteQuestion= async(id)=>{
        await deleteDoc(doc(db, "questions", id));

     }

     const EditQuestion=(id)=>{

      const EditableQuestion= Allquestions.filter((question)=>{
            if(question.id === id){
            HoldQuestions=question
            }
            
            
        })
        setid(HoldQuestions.id)
        setNo(HoldQuestions.No)
        setQuestion(HoldQuestions.Question)
        setType(HoldQuestions.Type)
        setgroup(HoldQuestions.group)
        setshow(true)
        
        return EditableQuestion
        
     }

     const handleUpdate= async(e)=>{
        e.preventDefault();
        const querySnapshot = await setDoc(doc(db, "questions", id),
        
    {
        No,
        Question,
        Type,
        group
    },

    alert("updated nicely")
        
        
        );
    
     }

     const SearchQuestion= async()=>{
        // const docRef = doc(db, "questions", Search);
        // const docSnap = await getDoc(docRef);
        const q = query(collection(db, "questions"), where("Question", "==", Search));
        const snapshot = await getDocs(q);
        const FilteredQuestion= snapshot.docs.map(questions=>({id:questions.id, ...questions.data()}))
         see.push(FilteredQuestion)

          setAllquestions(FilteredQuestion)
      // return Allquestions

      
               

     }

     useEffect(() => {
    DisplayAll();
     //SearchQuestion();
      
     }, [])

     const ShowEditUi=()=>{
        setshow(true)

     }
     
    return(

<>
<div>HELLO  WORLD
<input type="text" placeholder="search question" value={Search} onChange={(e)=>{setSearch(e.target.value)}} /><button onClick={SearchQuestion}>search</button>
    <table border="1">
    <thead>
        <tr>
        <th>ID</th>
            <th>Questions</th>
            <th>Category</th>
            <th>Type</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
{ Allquestions.map((list)=>{
      return  <tr>
        <td key={list.id}>{list.id}</td>
        <td>{list.Question}</td>
        <td>{list.group}</td>
        <td>{list.Type}</td>
        <td><button onClick={()=>{EditQuestion(list.id)}}>Edit</button></td>
        <td><button onClick={()=>{DeleteQuestion(list.id)}}>Delete</button></td>
        

        </tr>
        })
}
        </tbody>
 
    </table>
    <button onClick={ShowEditUi}>Delete</button>
    <div>
        <h1>SHOW EDITED DATA</h1>
        { show &&
        <div>
            <form onSubmit={handleUpdate}>
            <input type="text" placeholder="Question No" value={No}  onChange={e=>setNo(e.target.value) } />
            <input type="text" placeholder="Question" value={Question}  onChange={e=>setQuestion(e.target.value) } />
            <input type="text" placeholder="Type" value={Type}  onChange={e=>setType(e.target.value) } />
            <input type="text" placeholder="category" value={group}  onChange={e=>setgroup(e.target.value) } />
           
            <input type="submit" />
  
            </form>
        </div>
}

    </div>





</div>
</>

    )
}
export default AddNewQuestions;