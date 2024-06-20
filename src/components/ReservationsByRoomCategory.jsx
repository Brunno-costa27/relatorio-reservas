import { AiOutlineBars } from "react-icons/ai";
import { formatNumberByLanguage, formatNumber } from "../functions/functions"
import moment from 'moment'
import 'moment/dist/locale/pt-br'
// import { useState } from "react";



export function ReservationsByRoomCategory({t, language, currency, reservationsCompleted }) {

    // moment.locale(language)
    const summary = reservationsCompleted.roomType


    // const array = Object.keys(summary).map((chave) => {
    //     console.log(summary[chave]

    //     )
    // })

    // console.log(summary);


    return (

        <>
            <div className="flex justify-start items-start gap-2 py-2 mt-4">
                <h1 className="text-xl font-bold">{t('reservas-por-categoria-de-quarto')}</h1>
            </div>

            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-sm">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200  py-2">{t('categoria')}</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200  py-2 ml-6">{t('diarias')}</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200  py-2">{t('valor-medio')}</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200  py-2">{t('valor-total')}</th>

                    </tr>
                </thead>

                <tbody className="text-sm">
                    {
                        Object.keys(summary).map((chave) => (

                            <>
                                <tr className="w-full flex text-center">
                                    <td className="w-full text-left font-bold border-y  border-gray-200  py-2">{chave}</td>
                                    <td className="w-full text-right font-normal border-y  border-gray-200  py-2">{summary[chave].days}</td>
                                    <td className="w-full text-right font-normal border-y  border-gray-200  py-2">{formatNumberByLanguage(summary[chave].taxTotal, currency, language)}</td>
                                    <td className="w-full text-right font-normal border-y  border-gray-200  py-2">{formatNumberByLanguage(summary[chave].bookingValue, currency, language)}</td>
                                </tr>


                            </>
                        ))}
                </tbody>
            </table>
        </>
    )
}