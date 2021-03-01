import api from "./backend"
import geturl from '../services/urlbind'

export const getOrganizationProperties = (id, data) => {
    return  api
        .get(geturl(`properties/?organization_id=${id}`, data))
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

export const getOrganizationPropertyDetails = (id) => {
    return  api
        .get(`properties/show-details/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
export const getOrganizationPropertyHistory = (id,key,data=null) => {
    return  api
        .get(geturl(`property_histories?key=${key}&id=${id}`,data))
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};

export const uploadPropertyFile = (formData) => {

    return  api
        .post(`properties/upload-images`,formData)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
};
  export const uploadFile = (formData) => {

    return  api
        .post(`property_histories/create`,formData)
        .then(response => response.data)
      .catch(error => {
        throw error;
      })
  };

  export const getCountries = () => {
    return  api
        .get(`countries/`)
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

  export const getStates = () => {
    return  api
        .get(`states/`)
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

  export const getStatesByCountry = (country_id) => {
    return  api
        .get(`states/${country_id}`)
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

  export const getCitiesByStates = (state_id) => {
    return  api
        .get(`cities/${state_id}`)
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

  export const getCities = () => {
    return  api
        .get(`cities/`)
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

  export const createOrganizationProperty = (data) => {
    return  api
        .post(`properties/create`,data)
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

  export const updateOrganizationProperty = (id,data) => {
    return  api
        .put(`properties/update/${id}`,data)
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };
export const updateOrganizationPropertyTenantOwner = (data, onUploadProgress) => {

    const config = {
      onUploadProgress: onUploadProgress
    }

    return  api
        .post(`property_histories/create`,data, config)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
  export const deleteOrganizationProperty = (id) => {
    return  api
        .delete(`properties/delete/${id}`)
        .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };