import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: "Victor",
    city: "Maceió",
    country: "Brazil",
    profession: "Web Developer",
    github: 'https://github.com/JoaumVictor',
  },
  pageData: {
    number: 0,
  },
  template: {
    createdOnData: '26/05/2022',
    saveOnData: '',
    password: 'password',
  },
  dependencies: ['Sass', 'Styled Components', 'React Router Dom', 'Redux Toolkit'],
};

export const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    UpdatePassword: (state, action) => {
      state.security.password = action;
    },
    UpdateNumber: (state, action) => {
      state.pageData.number = action;
    },
  },
});

export const { UpdatePassword, UpdateNumber } = data.actions;

export default data.reducer;