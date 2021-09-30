import firebaseApp from "../configs/firebase-configs";
import { getAuth, signInWithPopup } from 'firebase/auth';

const auth = getAuth(firebaseApp);

const socialMediaAuth =  async (provider) => {
    return signInWithPopup(auth, provider).then((res) => {

        // // This gives you a Google Access Token. You can use it to access the Google API.
        // getIdTokenResult(res.user).then((token) => {
        //     console.log(`Access token:`, token);
        // }).catch((err) => {
        //     console.log(err);
        // });

        return res.user;
    }).catch((err) => {
        return err;
    })
};

export default socialMediaAuth;