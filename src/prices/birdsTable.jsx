import React from 'react'
import '../css/priceTables.css'

const birdsTable = () => {
  return (
    <main className="table">
      <section className="tableHeader">
        <h2>Birds</h2>
      </section>
      <section className="tableBody">
        <table>
          <thead>
            <tr>
              <th>Mount</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chucker</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Ducks</td>
              <td>$425</td>
            </tr>
            <tr>
              <td>Small Geese (Blue, Snow, Ross)</td>
              <td>$550</td>
            </tr>
            <tr>
              <td>Large Geese (Canadian)</td>
              <td>$900</td>
            </tr>
            <tr>
              <td>Grouse</td>
              <td>$425</td>
            </tr>
            <tr>
              <td>Pheasant</td>
              <td>$425</td>
            </tr>
            <tr>
              <td>Quail</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Sea Duck</td>
              <td>$475</td>
            </tr>
            <tr>
              <td>Swan</td>
              <td>$1500</td>
            </tr>
            <tr>
              <td>Turkey (Full Body)</td>
              <td>$975</td>
            </tr>
            <tr>
              <td>Turkey (Shoulder Mount)</td>
              <td>$625</td>
            </tr>
            <tr>
              <td>Turkey (Fan, Beard, & Spurs)</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>Turkey (Fan, Beard, Spurs, & Skull)</td>
              <td>$225</td>
            </tr>
            <tr>
              <td>Turkey (Fan, Beard, Wings, & Feet)</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Wood Cock</td>
              <td>$425</td>
            </tr>
          </tbody>
  
        </table>
        <tfoot>
            <tr>
              <td>* All Birds Include Standard Habitat - Turkey Limb Adds $100 *</td>
            </tr>
          </tfoot>
      </section>
    </main>
  )
}

export default birdsTable