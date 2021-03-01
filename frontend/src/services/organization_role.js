import api from "./backend"
import geturl from '../services/urlbind'
export const getOrganizationRole = (id,data=null) => {

  return  api
      .get(geturl(`roles?organization_id=${id}`,data))
      .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
export const createOrganizationRole = (data) => {
  return  api
      .post(`roles/create`,data)
      .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
export const deleteOrganizationRole = (id) => {
  return  api
      .delete(`roles/delete/${id}`)
      .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
export const updateOrganizationRole = (id,data) => {
  return  api
      .put(`roles/update/${id}`,data)
      .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
export const getAllPermissions = () => {
  return  api
      .get(`permissions`,)
      .then(response => response)
    .catch(error => {
      throw error;
    });
};
// quermaker=(data)=>{
//     let query=''
//     if(data.limit){
//
//     }
//     if(data.order_by){
//
//     }
//     if(data.filter){
//         if(data.filter.length>0){
//
//         }
//     }
//
//
// }