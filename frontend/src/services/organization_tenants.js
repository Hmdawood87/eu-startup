import api from "./backend"
import geturl from '../services/urlbind'

export const getOrganizationTenants = (id,data=null) => {
  return  api
      .get(geturl(`tenants?organization_id=${id}`,data))
      .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
export const createOrganizationTenants = (data) => {
  return  api
      .post(`tenants/create`,data)
      .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
export const deleteOrganizationTenants = (id) => {
  return  api
      .delete(`tenants/delete/${id}`)
      .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
export const updateOrganizationTenants = (id,data) => {
  return  api
      .put(`tenants/update/${id}`,data)
      .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
