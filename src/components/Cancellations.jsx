import { AiOutlineBars } from "react-icons/ai";
// import { formatNumberByLanguage } from "../functions/functions"
import moment from 'moment'
import 'moment/dist/locale/pt-br'
// import { useState } from "react";



export function Cancellations() {

    // moment.locale(language)

    //   console.log(currency);


    return (

        <>
            <div className="flex justify-start items-start gap-2 py-2 mt-4">
                <h1 className="text-xl font-bold">Cancelamentos</h1>
            </div>

            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-sm">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-center font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Números de Diárias Canceladas</th>
                    </tr>
                </thead>

                <tbody className="text-sm">
                    <tr className="w-full flex text-center">
                        <td className="w-full text-center font-bold border-y  border-gray-200 px-4 py-2">28</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}