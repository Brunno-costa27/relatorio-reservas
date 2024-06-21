import { AiOutlineBars } from "react-icons/ai";
import { formatNumberByLanguage, formatNumber } from "../functions/functions"
import moment from 'moment'
import 'moment/dist/locale/pt-br'
// import { useState } from "react";



export function ReservationsInDetail({t, language, currency, bookings }) {

    moment.locale(language)

    console.log(bookings);
    // bookings.forEach(item =>{
    //     console.log(item)
    // })


    return (

        <>
            <div className="flex justify-start items-start gap-2 py-2 mt-4">
                <h1 className="text-xl font-bold">{t('reservas-em-detalhe')}</h1>
            </div>

            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-sm">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200  py-2">{t('numero')}</th>
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200  py-2">{t('nome')}</th>
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200  py-2">{t('estado')}</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200 py-2">{t('origem-0')}</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200 px-4  py-2">In</th>
                        <th className="w-full text-center font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Out</th>
                        <th className="w-full text-center font-bold text-black border-y border-b-0 border-gray-200  py-2">{t('categoria-0')}</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200  py-2">{t('total')}</th>


                    </tr>
                </thead>

                <tbody className="text-sm">

                    {
                        bookings.map((item) => (
                            <>
                                <tr className="w-full flex text-center" key={item.id}>
                                    <td className="w-[60%] flex justify-start items-center text-left font-bold border-y border-b-0  border-gray-200  py-2">#{item.id}</td>
                                    <td className="w-full flex items-center text-left font-bold border-y border-b-0  border-gray-200 px-2 py-2 tracking-tighter text-[12px]">{item.primaryGuest.name}</td>
                                    <td className="w-full flex justify-center items-center text-center font-normal border-y border-b-0 border-gray-200 py-2">
                                        <p className="font-extralight border border-gray-500  rounded-full text-gray-500 text-[10px] px-[4px]">
                                           {
                                            item.status === "checkedOut" ? t('checked-out')
                                            : item.status === "cancelled" ? t('cancelado')
                                            : ""
                                           }
                                            
                                        </p>
                                    </td>
                                    <td className="w-full flex justify-center items-center text-center font-normal border-y border-b-0 border-gray-200 px-6 py-2 tracking-tighter text-[12px]">
                                        {
                                            item.origin === null ? "Direto" : item.origin
                                        }
                                    </td>
                                    <td className="w-full flex justify-center items-center text-center font-normal border-y border-b-0 border-gray-200  py-2">{moment(item.checkIn).format('l')}</td>
                                    <td className="w-full flex justify-center items-center text-center font-normal border-y border-b-0 border-gray-200  py-2">{moment(item.checkOut).format('l')}</td>

                                    <td className="w-full flex justify-center items-center text-center font-normal border-y border-b-0 border-gray-200  py-2">
                                        {
                                            item.roomType.name === 'Quarto Superior' ? t('quarto-superior') 
                                            : item.roomType.name === 'Quarto Executivo' ? t('quarto-executivo')
                                            : item.roomType.name === 'Suíte Master Panorâmica' ? t('suite-master-panoramica')
                                            : item.roomType.name === 'Quarto Executivo com Varanda' ? t('quarto-executivo-com-varanda')
                                            : t('quarto-executivo-com-varanda')
                                        }
                                    </td>

                                    <td className="w-full flex justify-end items-center text-right font-normal border-y border-b-0 border-gray-200  py-2">{formatNumberByLanguage(item.values.bookingValue, currency, language)}</td>

                                </tr>
                            </>
                        ))
                    }



                </tbody>
            </table>
        </>
    )
}