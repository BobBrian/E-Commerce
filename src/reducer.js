export const initialState = {
    basket: [],
    
};

//Selector to Tally up the Items in the Basket as Well as all the Prices
// Esentially this is a Fancy For Loop that Increments the Values in the Basket 
// and Returns them
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item)=> item.price + amount, 0) ;

const reducer = (state, action) =>{
    console.log(action)
    switch (action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item]
            };


        case"REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
        );

        let newBasket = [...state.basket]; // Copies the Current Basket Content

        if(index >= 0){
            newBasket.splice(index, 1); // Goes to the New Basket  and cut out the selected Element
        }
        else{
            console.warn(
                `Cant remove product (id: ${action.id}) as it is not in the basket`
            )
        }
        return{
            ...state,
            basket: newBasket
        }

     default:
         return state;



          

    }


};

export default reducer;