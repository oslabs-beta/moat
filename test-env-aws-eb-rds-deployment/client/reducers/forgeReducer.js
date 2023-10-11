//codeRep
//number of upvotes/downvotes given from profile
//profilePic?

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //add more tabs at a later point as necessary
  // currentPosts: [
  //   {
  //     //need to add postID; needs to increment every time new one gets generated
  //     title: '',
  //     content_type: '',
  //     poster: '',
  //     link: '',
  //     description: '',
  //     date: '',
  //   },
  // ],
  curPosts: [],
  drawerOpen: false,
  filter: 'Popular',
  loggedIn: false,
  newPostWindow: false,
  currentUser: { username: ' ' },
  currentPage: 'Algorithms',
};

//possibly move logic into database//for right now, creating array of objects specific to each topic
//database: table for each tab ----| posts based on each topic

//add actions (logistics) for each reducer method
//inside each action, modify the portion of state that needs to be edited and return the state

//logic for individual profiles initial state?

export const forgeSlice = createSlice({
  name: 'forge',
  initialState,
  reducers: {
    CHANGE_FILTER: (state, action) => {
      //updates filter string to coordinate further organizing reducer
      state.filter = action.payload;
    },
    // payload [{title, link}]
    RENDER_TEST: (state, action) => {
      // ? Does this remember the previous posts while additionally adding the new one
      state.curPosts = action.payload;
    },
    // * SKIP
    RENDER_POSTS: (state, action) => {
      //switch/case /fetch-> get array of objects -> use dispatcher to go through posts
      //assume that action.payload is going to be an array of objects
      //each object will have all of the properties of each post
      //we will do the fetch request BEFORE calling the dispatcher, so we will have all the post info already

      const resp = 'Popular';
      switch (resp) {
        case 'Recent':
          for (const dateVal in action.payload) {
            console.log(Math.min(...dateVal));
          } //arrange results in order based off least greatest accumulated time
        case 'Type': //database: ---| unit ---| type
          console.log(action.type());
        case 'Popular':
          for (const upvotes in action.payload) {
            console.log(Math.max(...upvotes)); //arrange results in order based off highest number of upvotes (Math.max?)
          }
      }
    },
    // * SKIP
    SET_USER: (state, action) => {
      console.log('reducer: SET_USER', action.payload);
      const { username } = action.payload;
      state.currentUser.username = username;
    },
    // * SKIP
    SET_PAGE: (state, action) => {
      state.currentPage = action.payload;
    },
    // * SKIP
    TOGGLE_POST_WINDOW: (state, action) => {
      const curState = state.newPostWindow;
      state.newPostWindow = !curState;
    },
    // * SKIP
    TOGGLE_DRAWER: (state, action) => {
      const curState = state.drawerOpen;
      state.drawerOpen = !curState;
    },
    // CREATE_POST: (state, action) => {
    //   //type the function here
    //   const { title, content_type, poster, link, description, date } = action.payload;
    //   // state.currentPost = action.payload
    //   return {
    //     ...state,
    //     currentPost: {
    //       title,
    //       content_type,
    //       poster,
    //       link,
    //       description,
    //       date
    //     }
    //   };
    // },
    DELETE_POST: (state, action) => {
      return state;
    },
    //LOAD_POST
    //EDIT_POST
    ADD_PROFILE: (state, action) => {
      return state;
    },
    DELETE_PROFILE: (state, action) => {
      return state;
    },
    default: () => {
      return state;
    },
    //UPDATE_PROFILE
  },
});

//backend sends array of posts broken down by topic, then iterate through each topic array to find correct post

export const {
  CHANGE_FILTER,
  TOGGLE_DRAWER,
  TOGGLE_POST_WINDOW,
  SET_PAGE,
  SET_USER,
  RENDER_TEST,
} = forgeSlice.actions;

export default forgeSlice.reducer;
