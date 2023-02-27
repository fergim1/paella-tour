export const useLanguage = (language, info) => {
    if(language === 'en'){
        return info.english
    }
    if (language === 'es'){
        return info.spanish
    }
    } 

    export const useLanguageItinerary = (language, array, arrayPosition) => {
        if(language === 'en'){
            return array[arrayPosition].english
        }
        if (language === 'es'){
            return array[arrayPosition].spanish
        }
    } 