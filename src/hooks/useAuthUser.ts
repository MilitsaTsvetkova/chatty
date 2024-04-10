import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../utils/firebase'

export const useAuthUser = () => {
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      const userRef = doc(db, `users/${user.uid}`)
      getDoc(userRef).then((doc) => {
        if (!doc.exists()) {
          if (!doc.exists()) {
            setDoc(doc.ref, {
              name: user.displayName,
              photoURL: user.photoURL,
              timestamp: serverTimestamp(),
            })
          }
        }
      })
    }
  }, [user])

  return user
}
