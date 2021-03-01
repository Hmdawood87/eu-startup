import api from "./backend"
import geturl from '../services/urlbind'

export const getOrganizationOwner = (id,data=null) => {
    console.log("data",data)
  return  api
      .get(geturl(`owners?organization_id=${id}`,data))
      .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
export const createOrganizationOwner = (data) => {
  return  api
      .post(`owners/create`,data)
      .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
export const deleteOrganizationOwner = (id) => {
  return  api
      .delete(`owners/delete/${id}`)
      .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
export const updateOrganizationOwner = (id,data) => {
  return  api
      .put(`owners/update/${id}`,data)
      .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
