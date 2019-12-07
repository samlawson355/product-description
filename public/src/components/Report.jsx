import React from "react";
import ReportModal from "./ReportModal.jsx";
class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportModalOpen: false
    };
    this.openReportModal = this.openReportModal.bind(this);
    this.closeReportModal = this.closeReportModal.bind(this);
  }

  openReportModal() {
    this.setState({
      reportModalOpen: true
    });
  }

  closeReportModal() {
    this.setState({
      reportModalOpen: false
    });
  }

  render() {
    return (
      <span>
        <div id="talkBubbleS"></div>
        <span id="reportInfoS">
          <a onClick={this.openReportModal}>
            Report incorrect product information.
          </a>
        </span>
        {this.state.reportModalOpen ? (
          <ReportModal closeReportModal={this.closeReportModal} />
        ) : null}
      </span>
    );
  }
}

export default Report;
