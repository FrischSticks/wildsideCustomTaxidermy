import React from 'react'

const rugsTable = () => {
  return (
    <main className="table">
      <section className="tableHeader">
        <h2>Rugs</h2>
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
              <td>Bear (Skull Cape & Felt)</td>
              <td>$1600</td>
            </tr>
            <tr>
              <td>Turkey (Back Skin & Tail)</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Turkey (Back Skin, Tail, & Wings)</td>
              <td>$550</td>
            </tr>
            <tr>
              <td>Turkey (Whole)</td>
              <td>$675</td>
            </tr>
          </tbody>
        </table>
      </section>
      <tfoot>
        <tr>
          <td>* Open Mouth Adds $300 *</td>
        </tr>
      </tfoot>
    </main>
  )
}

export default rugsTable