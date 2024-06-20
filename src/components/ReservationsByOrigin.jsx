import { AiOutlineBars } from "react-icons/ai";
import { formatNumberByLanguage, formatNumber } from "../functions/functions"
import moment from 'moment'
import 'moment/dist/locale/pt-br'
// import { useState } from "react";



export function ReservationsByOrigin({t, language, currency, reservationsCompleted}) {

    // moment.locale(language)

    //   console.log(currency);
    const channel = reservationsCompleted.channel


    return (

        <>
            <div className="flex justify-start items-start gap-2 py-2 mt-4">
                <h1 className="text-xl font-bold">{t('reservas-por-origem')}</h1>
            </div>

            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-sm">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200  py-2  tracking-tighter">{t('origem')}</th>
                        <th className="w-[20%] text-center font-bold text-black border-y border-b-0 border-gray-200  py-2 tracking-tighter">{t('diarias-0')}</th>
                        <th className="w-[40%] text-center font-bold text-black border-y border-b-0 border-gray-200  py-2 tracking-tighter">{t('diarias-canceladas')}</th>
                        <th className="w-[30%] text-right font-bold text-black border-y border-b-0 border-gray-200  py-2 tracking-tighter">{t('valor-medio-0')}</th>
                        <th className="w-[30%] text-right font-bold text-black border-y border-b-0 border-gray-200  py-2 tracking-tighter">{t('valor-total-0')}</th>

                    </tr>
                </thead>

                <tbody className="text-sm">

                    {
                        Object.keys(channel).map((chave) =>(


                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200 border-b-0 py-2 tracking-tighter">{chave}</td>
                        <td className="w-[20%] text-center font-normal border-y  border-gray-200 border-b-0 py-2 tracking-tighter text-[12px]">{channel[chave].days}</td>
                        <td className="w-[40%] text-center font-normal border-y  border-gray-200 border-b-0 py-2 tracking-tighter text-[12px]">{channel[chave].cancelledDays}</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200 border-b-0 py-2 tracking-tighter text-[12px]">{formatNumberByLanguage(channel[chave].taxTotal, currency, language)}</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200 border-b-0 py-2 tracking-tighter text-[12px]">{formatNumberByLanguage(channel[chave].bookingValue, currency, language)}</td>

                    </tr>
                        ))
                    }

                    
                   
                </tbody>
            </table>
        </>
    )
}