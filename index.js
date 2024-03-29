let button=document.querySelector('.btn')
let username=document.querySelector('#user')
let email=document.querySelector('#email')
let phone=document.querySelector('#phoneNo')
let userObj={}
let userId=''
var edit=false

button.addEventListener('click',async(e)=>{
    e.preventDefault()
    if(username.value==='' || email.value==='' || !phone.value){
        alert('Please enter the value')

    }else{
        userObj={
            username:username.value,
            email:email.value,
            phoneNumber:phone.value
        }
        if(edit==true){
            try{
                const postUser= await axios.post(`http://localhost:4000/edit-user/${userId}`,userObj)
           
               const res = await axios.get(`http://localhost:4000/edit-user/${userId}`)
                
                let ulList=document.querySelector('.user-detail')
                let liToDelete=document.getElementById(res.data.data.id)
                ulList.removeChild(liToDelete)
                displayUser(res.data.data)
                username.value=''
                email.value=''
                phone.value=''
                edit=false
    
            }catch(err){
                console.log(err)
            }
           

        }else{
            try{
               const res=await axios.post('http://localhost:4000/user/add-user', userObj)
                const user=res.data.userDetail
                displayUser(user)  
                username.value=''
                email.value=''
                phone.value='' 

            }catch(err){
                console.log(err)
            }
         }
       
    }
 
})

window.addEventListener('DOMContentLoaded',()=>{

    axios.get('http://localhost:4000/user/get-users')
    .then((response)=>{
        var result=response.data.allUsers

        result.forEach((res)=>{
            displayUser(res)
        })

    }).catch((err)=>{
        console.log(err)
    })

 })

function displayUser(res){
        let userList=document.querySelector('.user-detail')
         let userTag=`<li id='${res.id}'> ${res.username} ${res.email}- ${res.phoneNumber} <button onClick=editUser('${res.id}')>Edit User</button> <button onClick=deleteUser('${res.id}')>Delete User</button></li> `
         userList.innerHTML= userList.innerHTML + userTag 
         username.value=''
         email.value=''
         phone.value=''
        
}

const deleteUser=async(id)=>{
    try{
      const data= await axios.delete(`http://localhost:4000/delete-user/${id}`)
      username.value=''
      email.value=''
      phone.value=''
    }catch(err){
      console.log(err)
    }
   
   let ulList=document.querySelector('.user-detail')
   let liToDelete=document.getElementById(id)
   ulList.removeChild(liToDelete)
}

const editUser =async(id)=>{
    try{
        const res=await  axios.get(`http://localhost:4000/edit-user/${id}`)
        var data=res.data.data
        username.value=data.username
        email.value=data.email
        phone.value=data.phoneNumber
        userId=data.id
        edit=true
    }catch(err){
        console.log(err)
    }
   
}