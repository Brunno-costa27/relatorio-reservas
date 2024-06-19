import { AiOutlineBars } from "react-icons/ai";
// import { formatNumberByLanguage } from "../functions/functions"
import moment from 'moment'
import 'moment/dist/locale/pt-br'
// import { useState } from "react";



export function ReservationsByRoomCategory() {

    // moment.locale(language)

    //   console.log(currency);


    return (

        <>
            <div className="flex justify-start items-start gap-2 py-2 mt-4">
                <h1 className="text-xl font-bold">Reservas Por Categoria De Quarto</h1>
            </div>

            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-sm">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Categoria</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Diárias</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Valor Médio</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Valor Total</th>

                    </tr>
                </thead>

                <tbody className="text-sm">
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200 px-4 py-2">Quarto Superior</td>
                        <td className="w-full text-right font-normal border-y  border-gray-200 px-4 py-2">93</td>
                        <td className="w-full text-right font-normal border-y  border-gray-200 px-4 py-2">R$ 265,09</td>
                        <td className="w-full text-right font-normal border-y  border-gray-200 px-4 py-2">R$ 24,653,02</td>
                    </tr>

                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200 px-4 py-2">Quarto Executivo</td>
                        <td className="w-full text-right font-normal border-y  border-gray-200 px-4 py-2">79</td>
                        <td className="w-full text-right font-normal border-y  border-gray-200 px-4 py-2">R$ 267,18</td>
                        <td className="w-full text-right font-normal border-y  border-gray-200 px-4 py-2">R$ 54,390,22</td>
                    </tr>

                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200 px-4 py-2">Suite Master Panorâmica</td>
                        <td className="w-full text-right font-normal border-y  border-gray-200 px-4 py-2">189</td>
                        <td className="w-full text-right font-normal border-y  border-gray-200 px-4 py-2">R$ 285,23</td>
                        <td className="w-full text-right font-normal border-y  border-gray-200 px-4 py-2">R$ 54,390,22</td>
                    </tr>

                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200 px-4 py-2">Quarto Executivo Com Varanda</td>
                        <td className="w-full text-right font-bold border-y  border-gray-200 px-4 py-2">189</td>
                        <td className="w-full text-right font-bold border-y  border-gray-200 px-4 py-2">R$ 285,23</td>
                        <td className="w-full text-right font-bold border-y  border-gray-200 px-4 py-2">R$ 54,390,22</td>
                    </tr>

                   
                </tbody>
            </table>
        </>
    )
}