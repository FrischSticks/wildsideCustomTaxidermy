import React from 'react'

const smallGameTable = () => {
  return (
    <main className="table">
      <section className="tableHeader">
        <h2>Small Game</h2>
      </section>
      <section className="tableBody">
        <table>
          <thead>
            <tr>
              <th>Mount</th>
              <th>Shoulder Price</th>
              <th>Full Body Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Badger</td>
              <td></td>
              <td>$995</td>
            </tr>
            <tr>
              <td>Beaver</td>
              <td></td>
              <td>$1200</td>
            </tr>
            <tr>
              <td>Bobcat</td>
              <td>$495</td>
              <td>$995</td>
            </tr>
            <tr>
              <td>Coyote</td>
              <td>$495</td>
              <td>$995</td>
            </tr>
            <tr>
              <td>Lynx</td>
              <td>$995</td>
              <td>$1000</td>
            </tr>
            <tr>
              <td>Fisher / Pine Martin</td>
              <td></td>
              <td>$550</td>
            </tr>
            <tr>
              <td>Fox</td>
              <td>$495</td>
              <td>$950</td>
            </tr>
            <tr>
              <td>Mink</td>
              <td></td>
              <td>$495</td>
            </tr>
            <tr>
              <td>Otter</td>
              <td></td>
              <td>$950</td>
            </tr>
            <tr>
              <td>Raccoon</td>
              <td></td>
              <td>$950</td>
            </tr>
            <tr>
              <td>Squirrel</td>
              <td></td>
              <td>$495</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}

export default smallGameTable