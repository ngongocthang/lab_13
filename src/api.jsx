import axios from 'axios';
    const apiURL = process.env.REACT_APP_API_URL
    const  clientID = process.env.REACT_APP_CLIENT_ID
    
export const searchPhotos = async (term) =>{  
    const photo =  await axios.get(`${apiURL}/photos`,{
         headers:{
             Authorization: `<Client-ID ${clientID}>`
         },
         params:{
             query:term
         }
     });
     return photo.data;
 }




// export const getAllPhotos = async () =>{
    
//     const photo =  await axios.get(`${apiURL}/photos`,{
//          headers:{
//              Authorization: `<Client-ID ${clientID}>`
//          },
        
//      });
//     //  console.log (photo.data);
//       return photo.data;
//  }
// export const getPhotos = async (id) =>{
//     const photo =  await axios.get(`/${id}${apiURL}/${id}`,{
//          headers:{
//              Authorization: `<Client-ID ${clientID}>`
//          },
        
//      });
//      console.log(photo);
//  }
  