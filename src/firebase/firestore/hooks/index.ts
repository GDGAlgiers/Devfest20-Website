import { useEffect, useState } from "react"
import { firestore } from "../.."

/**
 * Listens to a stream of snapshots from firebase for changes and provides the latest data
 * @param collection the firebase collection we want to listen to
 * @param Shape the shape of the resulting data
 */
export function useCollection<Shape>(collection: string) {
  const [data, setData] = useState<Shape[] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    const unsubsribe = firestore.collection(collection).onSnapshot(
      /// onNext Snapshot
      ///TODO! make this get only needed data
      (snapshot) => {
        setData(snapshot.docs.map((doc) => doc.data() as Shape))
      },
      /// onError
      (err) => {
        setError(err)
      }
    )
    /// returns the unsubscribe from stream of snapshot function (to avoid memory leaks)
    return unsubsribe
  }, [collection])
  return [data, error]
}
