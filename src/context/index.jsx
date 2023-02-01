import React, { createContext, useState } from 'react'


const AppContext = createContext()

const AppProvider = ({ children }) => {
	const [language, setLanguage] = useState('en')

	return (
		<AppContext.Provider value={{
			language,
			setLanguage
		}}>
				{children}
		</AppContext.Provider>
	)
}

export { AppContext, AppProvider }