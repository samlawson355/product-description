import React from "react";

const ReportModal = props => {
  return (
    <div id="reportModalContainerS">
      <div id="innerReportModalContainerS">
        <div id="topBarOfReportModalS">
          <h3 id="reportIssueS">Report an issue</h3>
          <h4 id="reportBoxXS">X</h4>
        </div>
        <div id="centerReportModalS">
          <div>Please tell us about the issue.</div>
          <div id="dropDownReportModalS">
            <div id="whichPartReportS">Which part of the page?</div>
            <div className="downArrowS"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportModal;
