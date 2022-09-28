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

        axios.post('https://crudcrud.com/api/5efde826cb4048f281e4b2a5a8df66d4/appointmentBooking', userObj)
        .then((response)=>{
            displayUser(response.data)      

        })
        .catch((err)=>console.log(err))

    }
})

window.addEventListener('DOMContentLoaded',()=>{

    axios.get('https://crudcrud.com/api/5efde826cb4048f281e4b2a5a8df66d4/appointmentBooking')
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
         let userTag=`<li id='${res._id}'> ${res.name} ${res.email}- ${res.phoneNumber} <button onClick=deleteUser('${res._id}')>Delete User</button></li> `
         userList.innerHTML= userList.innerHTML + userTag 
        
}





function deleteUser(id){
    console.log(id)
    axios.delete(`https://crudcrud.com/api/5efde826cb4048f281e4b2a5a8df66d4/appointmentBooking/${id}`)
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