import React, {useState, useEffect, useRef, useCallback, useMemo} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core' 
import useStyles from './checkoutStyles';
import AddressForm from './addressForm';
import PaymentForm from './paymentForm';
import Confirmation from './confirmation';
import {RootState} from "../../state/store";
import {useAppDispatch, useAppSelector} from "../../hooks/dispApp";
import { fetchShippingCountries, generateToken, getToken } from '../../state/reducers/fetchAddressSlice';
import isDeepEqual from 'fast-deep-equal/react'

const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();

    const { cart } = useAppSelector((state: RootState) => state.cart);
    const token = useAppSelector((state: RootState) => state.addressData.token)
    const countries = useAppSelector((state: RootState) => state.addressData.countries)
    const country = useAppSelector((state: RootState) => state.addressData.country)

    const dispatch = useAppDispatch();

    // const hasFetchedData = useRef(false);
    // const hasFetchedData = useRef(token);

    // if(!isDeepEqual(hasFetchedData.current, token?.id)) {
        // hasFetchedData.current = token?.id;
    // }
    // console.log(hasFetchedData)
    // console.log(hasFetchedData.current)
    console.log(token);
    console.log(token?.id);
        console.log(countries && countries);
        console.log(country);


            const countriesArray = Object.entries((countries!== null && countries)).map(([code, name]) => ({id: code, label: name})) 
            // return countriesArray;
    console.log(countriesArray);

    // useEffect(() => {
    //     //? cart.id! overrides TS compiler by saying that I'm comfident it WONT return null (so its a forced command)
    //     // dispatch(generateToken(cart.id || '{}') )
    //     // console.log(cart.id)
    //     // console.log(cart)
    //     // console.log(hasFetchedData.current)
    //     // if(token !== null) {



        
    //     // if ( !isDeepEqual(hasFetchedData.current, token)) {
       
    //         // if(cart.id !== null) {
    //             dispatch(generateToken(cart?.id!))
    //             // dispatch(getToken())
    //             // console.log(token);
    //             // console.log(countries);
    //             // if(token) {
        
    //                 // hasFetchedData.current = token;

    //                 // if(token !== null) {
    //                     dispatch(fetchShippingCountries(token?.id!))
                        // console.log(countries && countries);
                //    console.log(countries);
                //   
                        
                        // }
                // }
       

                

            // }

 
                // console.log(countries && countries); 
            
            // console.log(hasFetchedData.current)
            // if(token) {
        // if (cart.id !== null) {
            // if(!hasFetchedData.current) {


            // console.log(token);
        // }
    
        // if (country) {
        //     dispatch(fetchSubdivisions(country))
        // }
        // console.log(countries);
        // console.log(token && token);

    

            // if(token) {
                // dispatch(fetchShippingCountries(token?.id))
   
       
                
                // }

             

            // }
        // }
                // console.log(hasFetchedData)
  
    // }, [dispatch])


//    const apples = useMemo(
//         () => {
//             return token
//         },
//         [token],
//     )

//     useEffect(() => {



            

//     }, [dispatch])

    // useEffect(() => {
        

    // },[dispatch, countries])


    useEffect(() => {
        if(cart.id !== null) {
            // if(token !== null) {
            //     dispatch(getToken())
            //     console.log('test')
            // } else {
                dispatch(generateToken(cart.id))
            // }


        if(token) {
            dispatch(fetchShippingCountries(token.id))
        }
        }
    }, [cart])

    useEffect(() => {
        if(token) {
            dispatch(fetchShippingCountries(token.id))
        }
    }, [token])

    // useEffect(() => {
    //     if (country) {
    //         dispatch(fetchShippingCountries(country))
    //     }
    // }, [country])
  

    const Form = () => activeStep === 0 ? <AddressForm/> : <PaymentForm />
    return (
        <div>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : token && <Form/>}
                </Paper>

            </main>
            
        </div>
    )
}

export default Checkout
