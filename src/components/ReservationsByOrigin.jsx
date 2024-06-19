import { AiOutlineBars } from "react-icons/ai";
// import { formatNumberByLanguage } from "../functions/functions"
import moment from 'moment'
import 'moment/dist/locale/pt-br'
// import { useState } from "react";



export function ReservationsByOrigin() {

    // moment.locale(language)

    //   console.log(currency);


    return (

        <>
            <div className="flex justify-start items-start gap-2 py-2 mt-4">
                <h1 className="text-xl font-bold">Reservas Por Origem</h1>
            </div>

            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-sm">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200  py-2  tracking-tighter">Origem</th>
                        <th className="w-[20%] text-center font-bold text-black border-y border-b-0 border-gray-200  py-2 tracking-tighter">Diárias</th>
                        <th className="w-[40%] text-center font-bold text-black border-y border-b-0 border-gray-200  py-2 tracking-tighter">Diárias Canceladas</th>
                        <th className="w-[30%] text-right font-bold text-black border-y border-b-0 border-gray-200  py-2 tracking-tighter">Valor Médio</th>
                        <th className="w-[30%] text-right font-bold text-black border-y border-b-0 border-gray-200  py-2 tracking-tighter">Valor Total</th>

                    </tr>
                </thead>

                <tbody className="text-sm">
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200  py-2 tracking-tighter">Idcap Instituto De Desenvolvimento E Capacitação</td>
                        <td className="w-[20%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">93</td>
                        <td className="w-[40%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">0</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 24,653,02</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 24,653,02</td>

                    </tr>

                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200  py-2 tracking-tighter">AyrtonPix</td>
                        <td className="w-[20%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">79</td>
                        <td className="w-[40%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">0</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 54,390,22</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 24,653,02</td>

                    </tr>

                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200  py-2 tracking-tighter">BookingCom</td>
                        <td className="w-[20%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">189</td>
                        <td className="w-[40%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">0</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 54,390,22</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 24,653,02</td>

                    </tr>

                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200  py-2 tracking-tighter">Ayrton Link</td>
                        <td className="w-[20%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">189</td>
                        <td className="w-[40%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">0</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 54,390,22</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 24,653,02</td>

                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200  py-2 tracking-tighter">Direto</td>
                        <td className="w-[20%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">189</td>
                        <td className="w-[40%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">9</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 54,390,22</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 24,653,02</td>

                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200  py-2 tracking-tighter">Expedia</td>
                        <td className="w-[20%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">189</td>
                        <td className="w-[40%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">9</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 54,390,22</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 24,653,02</td>

                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200  py-2 tracking-tighter">Hotelbeds</td>
                        <td className="w-[20%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">189</td>
                        <td className="w-[40%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">9</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 54,390,22</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 24,653,02</td>

                    </tr> 
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200  py-2 tracking-tighter">Ayrtin Booking Engine</td>
                        <td className="w-[20%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">189</td>
                        <td className="w-[40%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">9</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 54,390,22</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter">R$ 24,653,02</td>

                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200  py-2 tracking-tighter">BSB RESERV@S</td>
                        <td className="w-[20%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">189</td>
                        <td className="w-[40%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">8</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 54,390,22</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 24,653,02</td>

                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200  py-2 tracking-tighter">MODERNA PRODUTOS HOSPITALARES LTDA</td>
                        <td className="w-[20%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">189</td>
                        <td className="w-[40%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">8</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 54,390,22</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 24,653,02</td>

                    </tr>

                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200  py-2 tracking-tighter">E-HTL</td>
                        <td className="w-[20%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">189</td>
                        <td className="w-[40%] text-center font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">8</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 54,390,22</td>
                        <td className="w-[30%] text-right font-normal border-y  border-gray-200  py-2 tracking-tighter text-[12px]">R$ 24,653,02</td>

                    </tr>

                   
                </tbody>
            </table>
        </>
    )
}