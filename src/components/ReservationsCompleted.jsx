import { AiOutlineBars } from "react-icons/ai";
import { formatNumberByLanguage, formatNumber } from "../functions/functions"
import moment from 'moment'
import 'moment/dist/locale/pt-br'
// import { useState } from "react";



export function ReservationsCompleted({t, language, currency, reservationsCompleted}) {

    // moment.locale(language)

    //   console.log(currency);


    return (

        <>
            <div className="flex justify-start items-start gap-2 py-2 mt-4">
                <h1 className="text-xl font-bold">{t('reservas-concluidas')}</h1>
            </div>

            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-sm">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-center font-bold text-black border-y border-b-0 border-gray-200  py-2">{t('numeros-de-diarias-concluidas')}</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200  py-2">{t('valor-medio-1')}</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200  py-2">{t('valor-total-1')}</th>
                    </tr>
                </thead>

                <tbody className="text-sm">
                    <tr className="w-full flex text-center">
                        <td className="w-full text-center font-bold border-y  border-gray-200  py-2">{reservationsCompleted.stayLength}</td>
                        <td className="w-full text-right font-bold border-y  border-gray-200  py-2">{formatNumberByLanguage(reservationsCompleted.avgRateValue, currency,language)}</td>
                        <td className="w-full text-right font-bold border-y  border-gray-200  py-2">{formatNumberByLanguage(reservationsCompleted.bookingValue, currency, language)}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}