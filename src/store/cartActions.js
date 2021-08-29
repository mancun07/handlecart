import { cartActions } from "./cartSlice"

export const sendPostRequest = (cart) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`https://react-app5-default-rtdb.firebaseio.com/sushi.json`, {
                method: 'PUT',
                body: JSON.stringify(cart),
                headers: {'Content-Type': 'application/json'}
            })
            if (!response.ok) {
                throw new Error('Data sending to DB is failed')
            }
        } 
        try {
            await fetchData()
        } catch (err) {
            console.log(err.message)
        }
    }
}

export const sendGetRequest = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`https://react-app5-default-rtdb.firebaseio.com/sushi.json`)
            if (!response.ok) {
                throw new Error('Data loading is failed')
            }
            const data = await response.json();
            dispatch(cartActions.updatedReduxStore({
                items: data.items || [],
                totalQuantity: data.totalQuantity,
                totalAmount: data.totalAmount
            }))
        }

        try {
            await fetchData()
        } catch (err) {
            console.log(err)
        }
    }   
}