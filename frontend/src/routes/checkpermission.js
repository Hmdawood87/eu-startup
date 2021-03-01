
// export  const haspermissionall=(key)=>{
//     let user=JSON.parse(localStorage.getItem('_property_matters_360_user'))
//     if(user){
//         if(user.role.permissions){
//     let obj=user.role.permissions.find(o => o.key === key)
//     if(obj){
//     return true
//     }else{
//         return false
//     }
// }
//     }


// }
const haspermission=(key)=>{
    let permissions=false
let user=JSON.parse(localStorage.getItem('_property_matters_360_user'))
    if(key.length>0){
       key.map((value)=>{
           let obj=user.role.permissions.find(o => o.key === value)
           if(obj){
               return permissions=true
           }
       })
    }else{
        return permissions
    }
            return permissions

}
export  default haspermission