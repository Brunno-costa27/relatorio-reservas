import { AiOutlineBars } from "react-icons/ai";
// import { formatNumberByLanguage } from "../functions/functions"
import moment from 'moment'
import 'moment/dist/locale/pt-br'
// import { useState } from "react";



export function ReservationsInDetail() {

    // moment.locale(language)

    //   console.log(currency);


    return (

        <>
            <div className="flex justify-start items-start gap-2 py-2 mt-4">
                <h1 className="text-xl font-bold">Reservas Em Detalhe</h1>
            </div>

            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-sm">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200  py-2">Número</th>
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200  py-2">Nome</th>
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200  py-2">Estado</th>
                        <th className="w-full text-right     font-bold text-black border-y border-b-0 border-gray-200 py-2">Origem</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200 px-4  py-2">In</th>
                        <th className="w-full text-center font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Out</th>
                        <th className="w-full text-center font-bold text-black border-y border-b-0 border-gray-200  py-2">Categoria</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200  py-2">Total</th>


                    </tr>
                </thead>

                <tbody className="text-sm">
                    <tr className="w-full flex text-center">
                        <td className="w-[60%] text-left font-bold border-y  border-gray-200  py-2">#19043</td>
                        <td className="w-full text-left font-normal border-y  border-gray-200 px-2 py-2">Fernanda Oliveira</td>
                        <td className="w-full text-center font-normal border-y  border-gray-200  py-2">
                            <p className="font-extralight border border-gray-500 rounded-full text-gray-500 text-[10px]">CHECKED OUT</p>
                        </td>
                        <td className="w-full text-center font-normal border-y  border-gray-200 px-6 py-2 tracking-tighter">
                            Idcap Instituto De Desenvolvimento E Capacitaca
                        </td>
                        <td className="w-full text-center font-normal border-y  border-gray-200  py-2">12/5/2024</td>
                        <td className="w-full text-center font-normal border-y  border-gray-200  py-2">30/5/2024</td>

                        <td className="w-full text-center font-normal border-y  border-gray-200  py-2">
                            Quarto Superior
                        </td>

                        <td className="w-full text-right font-normal border-y  border-gray-200  py-2">R$ 4.302,00</td>


                    </tr>

                    





                </tbody>
            </table>
        </>
    )
}