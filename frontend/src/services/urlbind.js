
 const geturl = (default_url,data) => {
    console.log("calling url bind",default_url,data)
    let url=default_url
     if(data){
         if(data.limit){
             url=`${default_url}&limit=${data.limit}&page=${data.page}`
         }
         if(data.order_by){
             url=`${default_url}&order_by=${data.order_by}&order_type=${data.order_type}`

         }
         if(data.order_by && data.limit){
             url=`${default_url}&limit=${data.limit}&page=${data.page}&order_by=${data.order_by}&order_type=${data.order_type}`

         }

         if(data.filters && data.order_by ){
             let filters=''
             for (const [key, value] of Object.entries(data.filters)) {
                 console.log(`${key}: ${value}`);
                 if(value){
                     if(value.length>1){
                         for(let i=0;i<value.length;i++){
                             filters=filters+`&${key}[]=${value[i]}`
                         }
                     }else{
                         filters=filters+`&${key}=${value}`
                     }

                 }
             }
             url=`${default_url}${filters}&order_by=${data.order_by}&order_type=${data.order_type}`

         }
         if(data.filters){
             let filters=''
             for (const [key, value] of Object.entries(data.filters)) {
                 console.log(`${key}: ${value}`);
                 if(value){
                     if(value.length>1){
                         for(let i=0;i<value.length;i++){
                             filters=filters+`&${key}[]=${value[i]}`
                         }
                     }else{
                         filters=filters+`&${key}=${value}`

                     }

                 }
             }
             url=`${default_url}${filters}`

         }
         if(data.filters && data.limit){
             let filters=''
             for (let [key, value] of Object.entries(data.filters)) {
                 if(value){
                     if(value.length>1){
                         for(let i=0;i<value.length;i++){
                             filters=filters+`&${key}[]=${value[i]}`
                         }
                     }else{
                         filters=filters+`&${key}=${value}`

                     }

                 }
             }
             url=`${default_url}${filters}&limit=${data.limit}&page=${data.page}`

         }
         if(data.filters && data.order_by && data.limit ){
             let filters=''
             for (const [key, value] of Object.entries(data.filters)) {
                 console.log(`${key}: ${value}`);
                 if(value){
                     if(value.length>1){
                         for(let i=0;i<value.length;i++){
                             filters=filters+`&${key}[]=${value[i]}`
                         }
                     }else{
                         filters=filters+`&${key}=${value}`
                     }

                 }
             }
             url=`${default_url}${filters}&limit=${data.limit}&page=${data.page}&order_by=${data.order_by}&order_type=${data.order_type}`


         }

     }


     return url;
};
export default geturl