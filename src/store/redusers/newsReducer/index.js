import {
  ADD_POST,
  REMOVE_POST,
  CHANGE_CONTENT_POST,
  LIKE_POST
} from "../../actions";

const mockNews = [
  {
    title: "First post",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Provident dolorum eius ea, 
         inventore doloremque aspernatur ad tenetur saepe 
         sapiente aut voluptate delectus
          numquam unde, veniam iusto reprehenderit. 
         Voluptate, pariatur alias!`,
    ilikes: 446846123
  },
  {
    title: "First post",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Provident dolorum eius ea, 
         inventore doloremque aspernatur ad tenetur saepe 
         sapiente aut voluptate delectus
          numquam unde, veniam iusto reprehenderit. 
         Voluptate, pariatur alias!`,
    ilikes: 30
  },
  {
    title: "First post",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Provident dolorum eius ea, 
         inventore doloremque aspernatur ad tenetur saepe 
         sapiente aut voluptate delectus
          numquam unde, veniam iusto reprehenderit. 
         Voluptate, pariatur alias!`,
    ilikes: 102934092372039
  },
  {
    title: "First post",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Provident dolorum eius ea, 
         inventore doloremque aspernatur ad tenetur saepe 
         sapiente aut voluptate delectus
          numquam unde, veniam iusto reprehenderit. 
         Voluptate, pariatur alias!`,
    ilikes: 123123123123123
  },
  {
    title: "First post",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Provident dolorum eius ea, 
         inventore doloremque aspernatur ad tenetur saepe 
         sapiente aut voluptate delectus
          numquam unde, veniam iusto reprehenderit. 
         Voluptate, pariatur alias!`,
    ilikes: 9123
  },
  {
    title: "First post",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Provident dolorum eius ea, 
         inventore doloremque aspernatur ad tenetur saepe 
         sapiente aut voluptate delectus
          numquam unde, veniam iusto reprehenderit. 
         Voluptate, pariatur alias!`,
    ilikes: 0
  },
  {
    title: "First post",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Provident dolorum eius ea, 
         inventore doloremque aspernatur ad tenetur saepe 
         sapiente aut voluptate delectus
          numquam unde, veniam iusto reprehenderit. 
         Voluptate, pariatur alias!`,
    ilikes: 123123
  },
  {
    title: "First post",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Provident dolorum eius ea, 
         inventore doloremque aspernatur ad tenetur saepe 
         sapiente aut voluptate delectus
          numquam unde, veniam iusto reprehenderit. 
         Voluptate, pariatur alias!`,
    ilikes: 3333
  },
  {
    title: "First post",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Provident dolorum eius ea, 
         inventore doloremque aspernatur ad tenetur saepe 
         sapiente aut voluptate delectus
          numquam unde, veniam iusto reprehenderit. 
         Voluptate, pariatur alias!`,
    ilikes: 123
  },
  {
    title: "First post",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Provident dolorum eius ea, 
         inventore doloremque aspernatur ad tenetur saepe 
         sapiente aut voluptate delectus
          numquam unde, veniam iusto reprehenderit. 
         Voluptate, pariatur alias!`,
    ilikes: 31
  },
  {
    title: "First post",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Provident dolorum eius ea, 
         inventore doloremque aspernatur ad tenetur saepe 
         sapiente aut voluptate delectus
          numquam unde, veniam iusto reprehenderit. 
         Voluptate, pariatur alias!`,
    ilikes: 22
  }
];

const initialState = {
  news: [...mockNews]
};

export function newsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, ...{ news: [...state.news, action.data] } };
    case REMOVE_POST:
        const tempNews =[...state.news]
        tempNews.splice(action.data,1)
      return { ...state, ...{ news: [...tempNews] } };
    case CHANGE_CONTENT_POST:
        const tempNews = [...state.news]
        tempNews[action.data.id].content = action.data.content
        return {...state, ...{news:[...tempNews]}}
    case LIKE_POST:
        const tempNews =[...state.news]
        tempNews[action.data].likes +=1
        return {...state, ...{news:[...tempNews]}}
    default:
      return state;
  }
}
