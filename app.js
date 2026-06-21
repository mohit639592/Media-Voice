import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

async function loadMedia() {

    const snapshot = await getDocs(collection(db, "media"));

    snapshot.forEach(doc => {

        const item = doc.data();

        console.log(item);

    });

}

loadMedia();