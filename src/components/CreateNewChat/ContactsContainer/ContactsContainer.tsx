import Context from '../../../context/Context'
import { useEffect, useContext, useState } from 'react'
import Contact from './Contact/Contact'
import { APIres, ContextType } from '../../../types/Types'
import axios from 'axios'

const ContactsContainer = () => {
    const { fetchedContactsList, setFetchedContactsList, activeChats } = useContext(Context) as ContextType

    const [loader, setLoader] = useState(false)

    const fetchContactsList = async () => {
        try {
            setLoader(true)
            if (fetchedContactsList?.length === 0) {
                const res = await axios('https://randomuser.me/api/?results=11&inc=name,picture,id')
                const data: APIres = res?.data
                setFetchedContactsList(data?.results)
            }
        } catch (error) {
            console.error('fetchContactsList error: ', error)
        } finally {
            setLoader(false)
        }
    }

    const previousChatsArray: string[] = []

    const previousChats = () => {
        for (let i = 0; i < activeChats.length; i++) {
            previousChatsArray.push(activeChats[i].name)
        }
    }

    useEffect(() => {
        fetchContactsList()
        previousChats()
    })

    return (
        <div className='contacts-container'>
            {loader ? (
                <p>Loading ...</p>
            ) : (
                <>
                    {fetchedContactsList
                        ?.filter(
                            contact =>
                                previousChatsArray?.indexOf(contact?.name?.first + ' ' + contact?.name?.last) === -1
                        )
                        ?.map(contact => (
                            <Contact contact={contact} key={contact?.id?.value} />
                        ))}
                </>
            )}
        </div>
    )
}

export default ContactsContainer
