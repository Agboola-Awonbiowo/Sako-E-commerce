import {
  GET_ITEMS,
  ADD_ITEMS,
  DELETE_ITEM,
  BANNER_CLOSE,
  INCREASE_ITEM,
  DECREASE_ITEM,
  TOTAL_ITEMS,
  DETAILS,
  CLEAR_CART,
} from "../constants/types";

const initialState = {
  items: [
    {
      _id: 77556355,
      title: "Nike Slim Shirt",
      image1: [
        "https://m.media-amazon.com/images/I/51bL1LCFnJL._AC_UL320_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51ZsLhgNztL._AC_UY500_.jpg",
      ],
      price: 120,
      count: 1,
      description: "high quality product",
    },

    {
      _id: 49538094,
      title: "Adidas Fit Shirt",
      image1: [
        "https://m.media-amazon.com/images/I/41w6DvGP1YL._AC_UL320_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/41Zv%2BNEvdFL._AC_UX522_.jpg",
      ],
      price: 100,
      count: 1,
      description: "high quality product",
    },

    {
      _id: 4903850,
      title: "PlayStation5",
      image1: [
        "https://images-na.ssl-images-amazon.com/images/I/31Tu93a7ZkL._SY430_SX215_QL70_FMwebp_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71v7RDRYBTL._SL1500_.jpg",
      ],
      price: 220,
      count: 1,
      description: "high quality product",
    },
    {
      _id: 23445930,
      title: "Macbook pro",
      image1: [
        "https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81aot0jAfFL._AC_SL1500_.jpg",
      ],
      price: 78,
      count: 1,
      description: "high quality product",
    },
    {
      _id: 3254354345,
      title: "samsung galaxy S21 ultra",
      image1: [
        "https://m.media-amazon.com/images/I/61bLefD79-L._AC_UY218_.jpg",
        "https://m.media-amazon.com/images/I/61O45C5qASL._AC_UY218_.jpg",
      ],
      price: 65,
      count: 1,
      description: "high quality product",
    },
    {
      _id: 90829332,
      title: "OnePlus 9 pro",
      image1: [
        "https://m.media-amazon.com/images/I/81knqIxxBPL._AC_UY218_.jpg",
        "https://m.media-amazon.com/images/I/713FuTP4gzL._AC_UY218_.jpg",
      ],
      price: 139,
      count: 1,
      description: "high quality product",
    },
  ],
  cart: [],
  total: 0,
  shipping: 10,
};

const Todos = (state = initialState, action) => {
  switch (action.type) {
    // get initial state
    case GET_ITEMS:
      return {
        ...state,
      };

    //   add items to cart
    case ADD_ITEMS:
      let check = state.cart.find((item) => item._id === action.payload);

      if (!check) {
        // bringing only the ites that match the id
        let items = state.items.filter((item) => item._id === action.payload);
        let itemsCart = [...state.cart, ...items];

        return {
          ...state,
          cart: itemsCart,
        };
      } else {
        let items = state.items.filter((item) => item._id === action.payload);

        items.forEach((item) => {
          item.isInCart = true;
          // alert(`already in cart`)
        });

        return {
          ...state,
        };
      }

    // for closing banner after specific time
    case BANNER_CLOSE:
      state.items.forEach((item) => {
        item.isInCart = false;
      });

      return {
        ...state,
      };

    // delete item
    case DELETE_ITEM:
      const filteredCart = state.cart.filter(
        (item) => item._id !== action.payload
      );

      return {
        ...state,
        cart: filteredCart,
      };

    // increasing ites inside cart
    case INCREASE_ITEM:
      let incResults = state.cart.map((item) => {
        if (item._id === action.payload) {
          item = { ...item, count: item.count + 1 };
        }
        return item;
      });

      return {
        ...state,
        cart: incResults,
      };

    // decrease item inside the cart
    case DECREASE_ITEM:
      let decResults = state.cart.map((item) => {
        if (item._id === action.payload) {
          item = {
            ...item,
            count: item.count === 1 ? (item.count = 1) : item.count - 1,
          };
        }
        return item;
      });

      return {
        ...state,
        cart: decResults,
      };

    //get total price
    case TOTAL_ITEMS:
      const totals = state.cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);

      return {
        ...state,
        total: totals,
      };

    case DETAILS:
      return {
        ...state,
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default Todos;
