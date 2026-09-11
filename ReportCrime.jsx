```jsx
import React, { useState } from "react";
import "./ReportCrime.css";

function ReportCrime() {

  const [formData, setFormData] = useState({
    crimeType: "",
    incidentDate: "",
    incidentTime: "",
    location: "",
    victimName: "",
    victimPhone: "",
    description: "",
    suspectDetails: "",
    witnessDetails: "",
    anonymous: false,
    evidenceType: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Crime Report:", formData);

    setMessage(
      "Crime report submitted successfully! Your complaint has been registered."
    );

    setFormData({
      crimeType: "",
      incidentDate: "",
      incidentTime: "",
      location: "",
      victimName: "",
      victimPhone: "",
      description: "",
      suspectDetails: "",
      witnessDetails: "",
      anonymous: false,
      evidenceType: ""
    });
  };

  const handleReset = () => {
    setFormData({
      crimeType: "",
      incidentDate: "",
      incidentTime: "",
      location: "",
      victimName: "",
      victimPhone: "",
      description: "",
      suspectDetails: "",
      witnessDetails: "",
      anonymous: false,
      evidenceType: ""
    });

    setMessage("");
  };

  return (
    <div className="report-page">

      <div className="report-container">

        {/* Header */}

        <div className="report-header">
          <div className="header-icon">🚨</div>

          <div>
            <h1>Report a Crime</h1>
            <p>
              Please provide accurate information about the incident.
            </p>
          </div>
        </div>

        {message && (
          <div className="success-message">
            ✓ {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Crime Information */}

          <div className="form-section">

            <div className="section-title">
              <span>1</span>
              <div>
                <h2>Crime Information</h2>
                <p>Enter basic information about the incident.</p>
              </div>
            </div>

            <div className="form-grid">

              <div className="form-group">
                <label>
                  Crime Type <span>*</span>
                </label>

                <select
                  name="crimeType"
                  value={formData.crimeType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Crime Type</option>
                  <option value="Theft">Theft</option>
                  <option value="Robbery">Robbery</option>
                  <option value="Cyber Crime">Cyber Crime</option>
                  <option value="Fraud">Fraud</option>
                  <option value="Assault">Assault</option>
                  <option value="Kidnapping">Kidnapping</option>
                  <option value="Missing Person">Missing Person</option>
                  <option value="Harassment">Harassment</option>
                  <option value="Murder">Murder</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  Incident Date <span>*</span>
                </label>

                <input
                  type="date"
                  name="incidentDate"
                  value={formData.incidentDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Incident Time <span>*</span>
                </label>

                <input
                  type="time"
                  name="incidentTime"
                  value={formData.incidentTime}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Incident Location <span>*</span>
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="Enter incident location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>
          </div>


          {/* Victim Information */}

          <div className="form-section">

            <div className="section-title">
              <span>2</span>
              <div>
                <h2>Victim Information</h2>
                <p>Provide details of the victim.</p>
              </div>
            </div>

            <div className="form-grid">

              <div className="form-group">
                <label>Victim Name</label>

                <input
                  type="text"
                  name="victimName"
                  placeholder="Enter victim name"
                  value={formData.victimName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Victim Phone</label>

                <input
                  type="tel"
                  name="victimPhone"
                  placeholder="Enter phone number"
                  value={formData.victimPhone}
                  onChange={handleChange}
                />
              </div>

            </div>

          </div>


          {/* Description */}

          <div className="form-section">

            <div className="section-title">
              <span>3</span>

              <div>
                <h2>Incident Description</h2>
                <p>Describe what happened in detail.</p>
              </div>
            </div>

            <div className="form-group">

              <label>
                Description <span>*</span>
              </label>

              <textarea
                name="description"
                rows="6"
                placeholder="Describe the incident, what happened, when it happened and any other important information..."
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>

            </div>

          </div>


          {/* Suspect Information */}

          <div className="form-section">

            <div className="section-title">
              <span>4</span>

              <div>
                <h2>Suspect Information</h2>
                <p>
                  Provide information about the suspected person if known.
                </p>
              </div>

            </div>

            <div className="form-group">

              <label>Suspect Details</label>

              <textarea
                name="suspectDetails"
                rows="4"
                placeholder="Name, appearance, vehicle number, address or any other identifying information..."
                value={formData.suspectDetails}
                onChange={handleChange}
              ></textarea>

            </div>

          </div>


          {/* Witness */}

          <div className="form-section">

            <div className="section-title">
              <span>5</span>

              <div>
                <h2>Witness Information</h2>
                <p>Provide details if someone witnessed the incident.</p>
              </div>

            </div>

            <div className="form-group">

              <label>Witness Details</label>

              <textarea
                name="witnessDetails"
                rows="4"
                placeholder="Enter witness name and contact information..."
                value={formData.witnessDetails}
                onChange={handleChange}
              ></textarea>

            </div>

          </div>


          {/* Evidence */}

          <div className="form-section">

            <div className="section-title">
              <span>6</span>

              <div>
                <h2>Evidence</h2>
                <p>Select the type of evidence you have.</p>
              </div>

            </div>

            <div className="form-group">

              <label>Evidence Type</label>

              <select
                name="evidenceType"
                value={formData.evidenceType}
                onChange={handleChange}
              >
                <option value="">Select Evidence Type</option>
                <option value="Image">Images</option>
                <option value="Video">Video</option>
                <option value="Document">Documents</option>
                <option value="Audio">Audio</option>
                <option value="Multiple">Multiple Types</option>
                <option value="None">No Evidence</option>
              </select>

            </div>

            <div className="evidence-note">
              💡 You will be able to upload evidence after submitting
              the complaint.
            </div>

          </div>


          {/* Anonymous */}

          <div className="anonymous-box">

            <input
              type="checkbox"
              id="anonymous"
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleChange}
            />

            <label htmlFor="anonymous">
              <strong>Submit this report anonymously</strong>
              <small>
                Your personal information will not be displayed publicly.
              </small>
            </label>

          </div>


          {/* Warning */}

          <div className="warning-box">

            <strong>⚠ Important Notice</strong>

            <p>
              Please make sure the information provided is accurate.
              False or misleading reports may be subject to legal action.
            </p>

          </div>


          {/* Buttons */}

          <div className="form-buttons">

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>

            <button
              type="submit"
              className="submit-btn"
            >
              🚨 Submit Crime Report
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ReportCrime;
```
