import api from "./backend"
import geturl from '../services/urlbind'

export const getOrganizationUsers = (id,data) => {
    return  api
        .get(geturl(`organization/users?organization_id=${id}`,data))
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };


  export const createOrganizationUser = (data) => {
    return  api
        .post(`organization/users/create`,data)
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

  export const updateOrganizationUser = (id,data) => {
    return  api
        .put(`organization/users/update?id=${id}`,data)
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

  export const uploadFile = (formData) => {
    return  api
        .post(``,formData)
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };


  export const deleteOrganizationUser = (id) => {
    return  api
        .delete(`organization/users/delete?id=${id}`)
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };