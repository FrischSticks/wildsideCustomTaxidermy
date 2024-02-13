import React from 'react'

const fishTable = () => {
  return (
    <main className="table">
      <section className="tableHeader">
        <h2>Fish</h2>
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
              <td>Pan Fish</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Bass</td>
              <td>$475</td>
            </tr>
            <tr>
              <td>Reproductions</td>
              <td>$27/in.</td>
            </tr>
            <tr>
              <td>All Other Fish</td>
              <td>$26/in.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <tfoot>
        <tr>
          <td>* Minimum of $375 *</td>
        </tr>
      </tfoot>
    </main>
  )
}

export default fishTable