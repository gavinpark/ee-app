import React, { Component } from 'react';
import Data from '.././data/data.js';
import '../App.css';

class ArtworkInfoPanel extends Component {
  render() {

    return (
      <div className="databaseInfo">
        <div className="infoImage">
          <img src={require(".././images/979_22.jpg")} alt=""></img>
        </div>

        {/* want table to span 6 columns; table can take on the same role as "artwork table aka it has a scroll"*/}
        {/* want tr (table row) to span the same 6 columns */}
        {/* want th (header) to span 2 columns */}
        {/* data to span 4 columns */}
        {/* <table className>
          <tr>
            <th>Artist</th>
            <td>{Data[0].Artist}</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>{Data[0].Title}</td>
          </tr>
          <tr>
            <th>Date of production</th>
            <td>{Data[0].Date}</td>
          </tr>
        </table> */}
        {/* <div className="artworkTable">

          <div className="dataHeader">Artist</div>
          <div className="dataField">{Data[0].Artist}</div>
          <div className="dataHeader">Title</div>
          <div className="dataField">{Data[0].Title}</div>
          <div className="dataHeader">Date of production</div>
          <div className="dataField">{Data[0].Date}</div>
          <div className="dataHeader">Accession Number</div>
          <div className="dataField">{Data[0].AccessionNumber}</div>
          <div className="dataHeader">Accession Date</div>
          <div className="dataField">{Data[0].AccessionDate}</div>
          <div className="dataHeader">Credit</div>
          <div className="dataField">{Data[0].Credit}</div>
          <div className="dataHeader">Medium</div>
          <div className="dataField">{Data[0].Medium}</div>
          <div className="dataHeader">Description</div>
          <div className="dataField">{Data[0].Description}</div>
          <div className="dataHeader">Keywords</div>
          <div className="dataField">{Data[0].keywords}</div>
          <div className="dataHeader">Subject</div>
          <div className="dataField">{Data[0].Subject}</div>
          <div className="dataHeader">Year of Birth</div>
          <div className="dataField">{Data[0].birthYear}</div>
          <div className="dataHeader">Year of Death</div>
          <div className="dataField">{Data[0].deathYear}</div>
          <div className="dataHeader">References</div>
          <div className="dataField">{Data[0].References}</div>

        </div> */}

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="dataHeader">Artist</div>
          <div className="dataField">{Data[0].Artist}</div>
          <div className="dataHeader">Title</div>
          <div className="dataField">{Data[0].Title}</div>
          <div className="dataHeader">Date of production</div>
          <div className="dataField">{Data[0].Date}</div>
          <div className="dataHeader">Accession Number</div>
          <div className="dataField">{Data[0].AccessionNumber}</div>
          <div className="dataHeader">Accession Date</div>
          <div className="dataField">{Data[0].AccessionDate}</div>
          <div className="dataHeader">Credit</div>
          <div className="dataField">{Data[0].Credit}</div>
          <div className="dataHeader">Medium</div>
          <div className="dataField">{Data[0].Medium}</div>
          <div className="dataHeader">Description</div>
          <div className="dataField">{Data[0].Description}</div>
          <div className="dataHeader">Keywords</div>
          <div className="dataField">{Data[0].keywords}</div>
          <div className="dataHeader">Subject</div>
          <div className="dataField">{Data[0].Subject}</div>
          <div className="dataHeader">References</div>
          <div className="dataField">{Data[0].References}</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>


      </div>
    );

  }
}

export default ArtworkInfoPanel;