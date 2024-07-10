export interface Message {
    content: string
    received: boolean
    date: string
    msgId: number
}

export interface Chat {
    id: number
    name: string
    role: string
    avatar: string
    messages: Message[]
}

export interface MockUsers {
    name: {
        title: string
        first: string
        last: string
    }
    id: {
        name: string
        value: string | null
    }
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
}

export interface APIres {
    results: MockUsers[]
    info: {
        seed: string
        results: number
        page: number
        version: string
    }
}

export interface ContextType {
    activeChats: Chat[]
    setActiveChats: React.Dispatch<React.SetStateAction<Chat[]>>
    currentChat: Chat | null
    setCurrentChat: React.Dispatch<React.SetStateAction<Chat | null>>
    fetchedContactsList: MockUsers[]
    setFetchedContactsList: React.Dispatch<React.SetStateAction<MockUsers[]>>
}
