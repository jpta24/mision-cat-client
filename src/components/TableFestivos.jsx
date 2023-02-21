import React from 'react'

function TableFestivos() {
  return (
    <table className='text-start mx-auto'>
        <thead>
            <tr className='drop1 border border-dark text-center'>
                <th >Fecha en 2023</th>
                <th>Motivo</th>
            </tr>
        </thead>
        <tbody className=' border border-dark'>
            <tr>
            <td>06.01</td>
            <td>Fiesta de la Epifanía</td>
            </tr>
            <tr>
            <td>08.01</td>
            <td>Bautismo del Señor</td>
            </tr>
            <tr>
            <td> </td>
            <td>Presentación del Señor</td>
            </tr>
            <tr>
            <td className='pe-4'>Del 26.02 hasta el 26.03</td>
            <td>Tiempo de Cuaresma</td>
            </tr>
            <tr>
            <td>22.02</td>
            <td>Miércoles de Ceniza</td>
            </tr>
            <tr>
            <td>02.04</td>
            <td>Domingo de Ramos</td>
            </tr>
            <tr>
            <td>09.04 al 14.05</td>
            <td>Tiempo de Pascua</td>
            </tr>
            <tr>
                <td>06.04 al 09.04</td>
                <td>La Semana Santa, jueves santo, viernes santo, </td>
            </tr>
            <tr>
                <td></td>
                <td>sábado santo y domingo de resurrección</td>
            </tr>
            <tr>
            <td>16.04</td>
            <td>La Divina Misericordia</td>
            </tr>
            <tr>
            <td>18.05</td>
            <td>Día de la Ascensión</td>
            </tr>
            <tr>
            <td>28.05</td>
            <td>Pentecostés</td>
            </tr>
            <tr>
            <td>08.06</td>
            <td>Día de Corpus Christi (El Cuerpo y la Sangre de Cristo)</td>
            </tr>
            <tr>
            <td>01.05</td>
            <td>Día de la Santísima Cruz</td>
            </tr>
            <tr>
            <td>06.08</td>
            <td>Día de Transfiguración del Señor</td>
            </tr>
            <tr>
            <td>15.08</td>
            <td>Día de la Asunción de la Virgen</td>
            </tr>
            <tr>
            <td>12.10</td>
            <td>Virgen del Pilar</td>
            </tr>
            <tr>
            <td>1.11</td>
            <td>El Día de Todos los Santos</td>
            </tr>
            <tr>
            <td>2.11</td>
            <td>El Día de Todos los Difuntos</td>
            </tr>
            <tr>
            <td>26.11</td>
            <td>Solemnidad de Cristo Rey</td>
            </tr>
            <tr>
            <td>08.12</td>
            <td>La Inmaculada Concepción de María</td>
            </tr>
            <tr>
            <td>24.12-25-12</td>
            <td>Navidad</td>
            </tr>
            <tr>
            <td>28.12</td>
            <td>El Día de los Santos Inocentes</td>
            </tr>
            <tr>
            <td>31.12</td>
            <td>Día de la Sagrada Familia</td>
            </tr>
        </tbody>
    </table>                                            

  )
}

export default TableFestivos