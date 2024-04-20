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
