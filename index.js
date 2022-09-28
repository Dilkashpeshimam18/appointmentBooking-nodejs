let button=document.querySelector('.btn')
let username=document.querySelector('#user')
let email=document.querySelector('#email')
let phone=document.querySelector('#phoneNo')
let users=[]
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

document.addEventListener('DOMContentLoaded',()=>{

    Object.keys(localStorage).forEach(function(key){
        console.log(JSON.parse(localStorage.getItem(key)))
       let userDetail=JSON.parse(localStorage.getItem(key))
       users.push(userDetail)
      
      
        
        
     });
 
     users.forEach((user)=>{
        let usersList=document.querySelector('.user-detail')

     let userLi=document.createElement('li')
     userLi.id=`user${user.name}`
     userLi.appendChild(document.createTextNode(`${user.name} ${user.email}`))
     let deleteBtn=document.createElement('button')
     deleteBtn.onclick=function(){
        localStorage.removeItem(`user${user.name}`)
        let ulList=document.querySelector('.user-detail')
        let liToDelete=document.getElementById(`user${user.name}`)
        console.log(liToDelete)
        ulList.removeChild(liToDelete)
     }

   deleteBtn.appendChild(document.createTextNode('Delete'))
   let editBtn=document.createElement('button')
   editBtn.appendChild(document.createTextNode('Edit'))
   userLi.appendChild(deleteBtn)
   userLi.appendChild(editBtn)

     usersList.appendChild(userLi)
})

 })
function displayUser(useObj){
  
     if(localStorage.getItem(`user${userObj.name}`) !==null){
     }
   

         let userList=document.querySelector('.user-detail')
         let userTag=`<li id='user${userObj.name}'> ${userObj.name} ${userObj.email} <button onClick=deleteUser('user${userObj.name}')>Delete User</button></li> `
         userList.innerHTML= userList.innerHTML + userTag 
        
        
     
 
}





function deleteUser(userName){
    console.log(userName)
   localStorage.removeItem(userName)
   let ulList=document.querySelector('.user-detail')
   let liToDelete=document.getElementById(userName)
   ulList.removeChild(liToDelete)
}