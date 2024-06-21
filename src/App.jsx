
import './App.css'
import { Header } from './components/Header'
import { ReservationsCompleted } from './components/ReservationsCompleted'
import { Cancellations } from './components/Cancellations'
import { ReservationsByRoomCategory } from './components/ReservationsByRoomCategory'
import { ReservationsByOrigin } from './components/ReservationsByOrigin'
import { ReservationsInDetail } from './components/ReservationsInDetail'
import data from './database/data-set-reservation.json'
import { useTranslation } from "react-i18next"
import i18n from '../src/lib/translation'
import moment from 'moment';
import 'moment/locale/pt-br';
import { useState } from 'react'



function App() {

  const { t, i18n: { changeLanguage, language }, } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState(language)

  function handleChangeLanguage() {
    const newLanguage = currentLanguage === 'en-US' ? 'pt-br' : 'en-US'

    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }

  moment.locale(language); // Configura o locale para pt-br
  console.log('Locale atual:', moment.locale()); // Deve mostrar 'pt-br'

  let currency = ''

  if (language === 'en-US') {
    currency = 'USD'

  } else if (language === 'pt-br') {
    currency = 'BRL'


  }




  const reservationsCompleted = data.summary
  const bookings = data.bookings


  return (
    <>
      <div className="py-2 px-2">
        <button onClick={handleChangeLanguage} className="fixed bg-blue-500 text-white font-roboto font-medium py-2 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
          Tradução - {language}
        </button>
      </div>
      <Header t={t}/>
      <ReservationsCompleted t={t} language={language} currency={currency}  reservationsCompleted={reservationsCompleted} />
      <Cancellations t={t} language={language} currency={currency} reservationsCompleted={reservationsCompleted} />
      <ReservationsByRoomCategory t={t} language={language} currency={currency} reservationsCompleted={reservationsCompleted} />
      <ReservationsByOrigin t={t} language={language} currency={currency} reservationsCompleted={reservationsCompleted} />
      <ReservationsInDetail t={t} language={language} currency={currency} bookings={bookings} />
    </>
  )
}

export default App
