import React from "react";
import ReportModal from "./ReportModal.jsx";
class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span>
        <div id="talkBubbleS"></div>
        <span id="reportInfoS">
          <a onClick={this.props.reportModal}>
            Report incorrect product information.
          </a>
        </span>
        <ReportModal />
      </span>
    );
  }
}

export default Report;
