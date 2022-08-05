import React from "react";

const TeamItem = ({team}) => {

    // console.log(team.note.rank);
    return (
        <>
        <tr>
            <td>{team.stats[8].displayValue}</td>
            <td>{team.team.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{team.stats[0].displayValue}</td>
            <td>{team.stats[2].displayValue}</td>
            <td>{team.stats[1].displayValue}</td>
            <td>{team.stats[4].displayValue}</td>
            <td>{team.stats[5].displayValue}</td>
            <td>{team.stats[9].displayValue}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{team.stats[3].displayValue}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{team.stats[6].displayValue}</td>
        </tr>
 
        </>
    )
}

export default TeamItem;

// <thead>
// <!-- <tr>
//     <th>Icon </th>
//     <th>Transaction</th>
//     <th>Date</th>
//     <th>Amount</th>
//     <th>Buttons</th>
// </tr> -->
// </thead>

// {% for transaction in all_transactions %}
// <tr>
//     <td> <i class="fa-solid fa-sterling-sign"></i></i> </td>
//     <td><b>{{ transaction.tag.name }}</b> <br> {{ transaction.merchant.name }} - {{ transaction.description }} <br> </td>
//     <td>{{ transaction.date }}</td>
//     <td> <b>£{{ transaction.price }}</b></td>
//     <td class="table=buttons">
//         <form class="update-button" action="/transactions/{{transaction.id}}/edit" method="post">
//                 <button><i class="fa-solid fa-pen-to-square"></i></button>
//         </form>

//     </td>
//     <td>
//         <form class="delete-button" action="/transactions/{{ transaction.id }}/delete" method="post">
//             <button><i class="fa-solid fa-trash-can"></i></i></button>
//     </td>
// </tr>