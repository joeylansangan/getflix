import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, subscribe } from '../../features/userSlice';
import { loadStripe } from '@stripe/stripe-js';
import db from '../../firebase';
import './Plans.css';

function Plans() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    const [subscription, setSubscription] = useState(null);
    
    useEffect(() => {
        db.collection('customers')
        .doc(user.uid)
        .collection('subscriptions')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(async subscription => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start:  subscription.data().current_period_start.seconds,
                })
            })
        })
    }, [user.uid])

    // console.log(`subout: ${subscription}`)
    
    useEffect(() => {
        console.log('triggered')
        
        db.collection('products')
        .where('active', '==', true)
        .get()
        .then(querySnapshot => {
            const products = [];
            querySnapshot.forEach(async (productDoc) => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection
                ('prices').get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data(),
                    }
                })
            });
            setProducts(products);
        });
    }, []);

    const loadCheckout = async (priceId) => {
        const docRef = await db
        .collection('customers')
        .doc(user.uid)
        .collection('checkout_sessions')
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin
        });

        docRef.onSnapshot(async(snap) => {
            const { error, sessionId } = snap.data();

            if (error){
                alert(`An error occured: ${error.message}`);
            }
            if (sessionId){
                // We have a session, redirect to Checkout
                const stripe = await loadStripe('pk_test_51Hi1tfJNaaSkDpvrwxP1N7iVmv7qvvHMwC1IDCHeqHaOQalEDaDYNnvobuxn1R7nyvacA3SfZcXsHpJNWmqcgcI700MlFqrq3R')
                stripe.redirectToCheckout({ sessionId })
            }
        })
    }

    useEffect(() => {
        dispatch(subscribe(subscription))
    }, [subscription])

    return (
        <div className="plans-wrap">
            {subscription && 
                <div>
                    <h2 className="current-plan">Current Plan: {subscription.role}</h2>
                    <p>Renewal date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>
                </div>
            }
            {Object.entries(products).map(([productId, productData]) => {
               const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role);
               
               return (
                
                <div 
                    className={`${isCurrentPackage && "profileScreen-plan-disabled"} profileScreen-plan`}
                    key={productId}
                    >
                    <div className="flex flex-column">
                        <span>{productData.name}</span>
                        <span>{productData.description}</span>
                    </div>
                    <button 
                        className="plan-subscribe" 
                        onClick={() => loadCheckout(productData.prices.priceId)}
                        >
                            {isCurrentPackage ? 'Current Package': 'Subscribe'}
                        </button>
                </div>
               ) 
            })}
        </div>
    )
}

export default Plans
