const initialState = [
    {
        id:0,
        name:"Vikas nolke",
        number:9816577121,
        email:"vikaschoudhary345@gmail.com"
    },
    {
      id:1,
      name:"xahil mahi",
      number:785675645,
      email:"xahilmahi420gmail.com"
    }
];
const contactReducer=(state=initialState,action) =>
{
   switch(action.type)
   {
    case "ADD_CONTACT":
        state = [...state,action.payload];
        return state;
    case "UPDATE_CONTACT":
        const updateState = state.map(contact => contact.id === action.payload.id? action.payload:contact);
        state = updateState;
        return state;
    case "DELETE_CONTACT":
            const filterContacts = state.filter((contact) => contact.id !== action.payload && contact);
            state = filterContacts;
            return state;
    default:
        return state;
   }
};
export default contactReducer;