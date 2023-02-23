import { loadStripe } from '@stripe/stripe-js';
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db from '../firebase';
import './PlansScreen.scss';

const PlansScreen = () => {
  const [products, setProducts] = useState([]);
  const userSelector = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  const getSubscriptions = useCallback(async () => {
    const collectionRef = collection(
      db,
      'customers',
      userSelector.uid,
      'subscriptions'
    );

    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach((subscription) => {
      setSubscription({
        role: subscription.data().role,
        current_period_end: subscription.data().current_period_end.seconds,
        current_period_start: subscription.data().current_period_start.seconds,
      });
    });
  }, [userSelector.uid]);

  useEffect(() => {
    getSubscriptions();
  }, [getSubscriptions]);

  const getProductsFromFirestore = async () => {
    const selectProducts = collection(db, 'products');
    const q = query(selectProducts, where('active', '==', true));
    const querySnapshot = await getDocs(q);

    const products = {};
    querySnapshot.forEach(async (prodDoc) => {
      products[prodDoc.id] = prodDoc.data();
      const pricesRef = collection(prodDoc.ref, 'prices');
      const pricesSnapshot = await getDocs(pricesRef);
      pricesSnapshot.forEach((priceDoc) => {
        // console.log('CENA', priceDoc);
        products[prodDoc.id].prices = {
          priceId: priceDoc.id,
          priceData: priceDoc.data(),
        };
      });
    });

    setProducts(products);
    console.log('PRODUKTY', products);
    return products;
  };

  const loadCheckout = async (priceId) => {
    const collectionRef = collection(
      db,
      'customers',
      userSelector.uid,
      'checkout_sessions'
    );

    const docRef = await addDoc(collectionRef, {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    const docSnap = await getDoc(docRef);
    const snap = docSnap.data();

    onSnapshot(docRef, async (doc) => {
      const { error, sessionId } = doc.data();
      if (error) {
        alert(`an error occured: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          'pk_test_51MeQcMBrSdSCbMN8p1WsnKlRa1dw117YAQtU9uKiBaIlK9WG972OkHrP7ia4793Ra9ids3fQAYOOOZu4R4RYbbnT009JRMohl0'
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  useEffect(() => {
    getProductsFromFirestore();
  }, []);

  console.log('SUBS', subscription);
  return (
    <div className="plansScreen">
      {subscription && (
        <p>
          Renewal date:{' '}
          {new Date(
            subscription.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {products &&
        Object.entries(products).map(([productId, productData]) => {
          const isCurrentPackage = productData.name
            ?.toLowerCase()
            .includes(subscription?.role);

          return (
            <>
              <div
                key={productId}
                className={`${
                  isCurrentPackage && 'plansScreen__plan--disabled'
                } plansScreen__plan`}
              >
                <div className="plansScreen__info">
                  <h5>{productData.name}</h5>
                  <h6>{productData.description}</h6>
                </div>
                <button
                  disabled={isCurrentPackage ? true : false}
                  onClick={() => {
                    !isCurrentPackage &&
                      loadCheckout(productData['prices'].priceId);
                  }}
                >
                  {isCurrentPackage ? 'Current Package' : 'Subscribe'}
                </button>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default PlansScreen;
