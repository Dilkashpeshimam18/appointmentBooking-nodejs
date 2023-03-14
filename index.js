let button=document.querySelector('.btn')
let username=document.querySelector('#user')
let email=document.querySelector('#email')
let phone=document.querySelector('#phoneNo')
let userObj={}
let userId=''
var edit=false

button.addEventListener('click',(e)=>{
    e.preventDefault()
    if(username.value==='' || email.value==='' || !phone.value){
        alert('Please enter the value')
    }else{
        userObj={
            name:username.value,
            email:email.value,
            phoneNumber:phone.value
        }
        // if(edit==true){
        //     axios.put(`https://crudcrud.com/api/b70375e9719844c79f28349b5cdee3bf/appointmentBooking/${userId}`,userObj)
        //     .then((response)=>{
        //         axios.get(`https://crudcrud.com/api/b70375e9719844c79f28349b5cdee3bf/appointmentBooking/${userId}`)
        //         .then((res)=>{
        //             let ulList=document.querySelector('.user-detail')
        //             let liToDelete=document.getElementById(res.data._id)
        //             ulList.removeChild(liToDelete)
        //             displayUser(res.data)
        //         })
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     })


        // }else{
       

        // }
        axios.post('http://localhost:4000/user/add-user', userObj)
        .then((res)=>{
            console.log('Post request!!')
            console.log(res)
            // displayUser(response.data)      
    
        })
        .catch((err)=>console.log(err))
    }
 
})

window.addEventListener('DOMContentLoaded',()=>{
    console.log('Get request')

    axios.get('http://localhost:4000/user/get-users')
    .then((response)=>{
        console.log(response)
        // var result=response.data

        // result.forEach((res)=>{
        //     displayUser(res)
        // })

    }).catch((err)=>{
        console.log(err)
    })

 })
function displayUser(res){
        let userList=document.querySelector('.user-detail')
         let userTag=`<li id='${res._id}'> ${res.name} ${res.email}- ${res.phoneNumber} <button onClick=editUser('${res._id}')>Edit User</button> <button onClick=deleteUser('${res._id}')>Delete User</button></li> `
         userList.innerHTML= userList.innerHTML + userTag 
         username.value=''
         email.value=''
         phone.value=''
        
}





function deleteUser(id){
    console.log(id)
    axios.delete(`https://crudcrud.com/api/b70375e9719844c79f28349b5cdee3bf/appointmentBooking/${id}`)
    .then((res)=>{
        console.log('successful')
    })
    .catch((err)=>{
        console.log(err)
    })
   let ulList=document.querySelector('.user-detail')
   let liToDelete=document.getElementById(id)
   ulList.removeChild(liToDelete)
}

function editUser(id){
    axios.get(`https://crudcrud.com/api/b70375e9719844c79f28349b5cdee3bf/appointmentBooking/${id}`)
    .then((res)=>{
    var data=res.data
    username.value=data.name
    email.value=data.email
    phone.value=data.phoneNumber
    userId=data._id
    edit=true

    // deleteUser(id)

    })
    .catch((err)=>{
        console.log(err)
    })
}