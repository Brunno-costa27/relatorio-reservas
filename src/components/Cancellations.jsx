import { AiOutlineBars } from "react-icons/ai";
// import { formatNumberByLanguage } from "../functions/functions"
import moment from 'moment'
import 'moment/dist/locale/pt-br'
// import { useState } from "react";



export function Cancellations({t, language, currency, reservationsCompleted}) {

    // moment.locale(language)



    return (

        <>
            <div className="flex justify-start items-start gap-2 py-2 mt-4">
                <h1 className="text-xl font-bold">{t('cancelamentos')}</h1>
            </div>

            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-sm">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-center font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">{t('numeros-de-diarias-canceladas')}</th>
                    </tr>
                </thead>

                <tbody className="text-sm">
                    <tr className="w-full flex text-center">
                        <td className="w-full text-center font-bold border-y  border-gray-200 px-4 py-2">{reservationsCompleted.cancelattionSummary.stayLength}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}