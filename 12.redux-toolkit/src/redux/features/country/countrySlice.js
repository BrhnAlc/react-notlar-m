import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
  country: [],
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    getCountry: async (state) => {
      try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/all?fields=name,flags`);
        console.log(data);
        state.country = data;
      } catch (error) {
        console.error('Error fetching countries:', error);
        // Handle the error appropriately (e.g., dispatch another action)
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCountry } = countrySlice.actions;

export default countrySlice.reducer;















// import { createSlice } from '@reduxjs/toolkit'

// import  {axios } from 'axios';


// const initialState = {
//     country: [],
//   }


//   export const countrySlice = createSlice({
//     name: 'country',
//     initialState,
//     reducers: {
//         getCountry : async(state) => {
//           const {data}=await axios.get(`https://restcountries.com/v3.1/all?fields=name,flags`)
//           console.log(data);
//             state.country =data
//           },
     
//     },
//   })
  
//   // Action creators are generated for each case reducer function
//   export const { getCountry} = countrySlice.actions
  
//   export default countrySlice.reducer