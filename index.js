let button=document.querySelector('.btn')
let username=document.querySelector('#user')
let email=document.querySelector('#email')
let phone=document.querySelector('#phoneNo')
let userObj={}
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

        axios.post('https://crudcrud.com/api/ba394bd12dfb4c2898a0810ab171e301/appointment', userObj)
        .then((response)=>{
            displayUser(response.data)      

            console.log(response)
        })
        .catch((err)=>console.log(err))

    }
})

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/ba394bd12dfb4c2898a0810ab171e301/appointment')
    .then((response)=>{
        console.log(response.data)
        var result=response.data

        result.forEach((res)=>{
            displayUser(res)
        })

    }).catch((err)=>{
        console.log(err)
    })

 })
function displayUser(res){
        let userList=document.querySelector('.user-detail')
         let userTag=`<li id='user${res.name}'> ${res.name} ${res.email}- ${res.phoneNumber} <button>Delete User</button></li> `
         userList.innerHTML= userList.innerHTML + userTag 
        
}





function deleteUser(userName){
    console.log(userName)
   localStorage.removeItem(userName)
   let ulList=document.querySelector('.user-detail')
   let liToDelete=document.getElementById(userName)
   ulList.removeChild(liToDelete)
}