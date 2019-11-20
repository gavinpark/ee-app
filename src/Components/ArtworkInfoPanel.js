import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from '.././data/data.js';
import '../App.css';

class ArtworkInfoPanel extends Component {
  render() {
    // here is how you would get the
    // data for the 'current active work'
    // (don't forget to pass the correct props into this component)
    // const artworkData = window.allWorks[this.props.selectedWorks[this.props.activeWorkIndex]];

    return (
      <div className="databaseInfo">
        <div className="infoPanelImage">
          <img className="artworkImage" src={require(".././images/979_22.jpg")} alt=""></img>
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

        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        
          <div className="infoExitButton">
            <Link to="main"><img  src={require(".././images/buttons/info_Exit_Button.svg")} alt=""></img></Link>
            </div>
      
      

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
          <div className="dataHeaderReferences">References</div>
          <div className="dataFieldReferences">{Data[0].References}</div>
        
        
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>

   



      </div>
    );

  }
}

export default ArtworkInfoPanel;