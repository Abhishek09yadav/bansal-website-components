"use client";

import React from "react";
import {
  User,
  Phone,
  Mail,
  Calendar,
  Landmark,
  MapPin,
  School,
  Book,
  CheckCircle,
} from "lucide-react";

import "bootstrap/dist/css/bootstrap.min.css";
const RegistrationForm = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow p-4 rounded-4">
            <h2 className="text-center mb-2 fw-bold">Registration</h2>
            <p className="text-center text-muted mb-4">
              You are logged in — please complete your form
            </p>
            <form>
              {/* Your Name */}
              <div className="mb-3">
                <label className="form-label">
                  <User size={18} className="me-2" /> Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              {/* Mobile */}
              <div className="mb-3">
                <label className="form-label">
                  <Phone size={18} className="me-2" /> Enter Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter mobile number"
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">
                  <Mail size={18} className="me-2" /> Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email address"
                />
              </div>

              {/* Date of Birth */}
              <div className="mb-3">
                <label className="form-label">
                  <Calendar size={18} className="me-2" /> Date of Birth
                  (MM/DD/YYYY)
                </label>
                <input type="date" className="form-control" />
              </div>

              {/* Gender */}
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <select className="form-select">
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Father's Name */}
              <div className="mb-3">
                <label className="form-label">Father Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter father's name"
                />
              </div>

              {/* Mother's Name */}
              <div className="mb-3">
                <label className="form-label">Mother Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter mother's name"
                />
              </div>

              {/* Stream */}
              <div className="mb-3">
                <label className="form-label">
                  <Book size={18} className="me-2" /> Stream
                </label>
                <select className="form-select">
                  <option value="">Select Stream</option>
                  <option>Engg</option>
                  <option>Medical</option>
                  <option>Neet</option>
                </select>
              </div>

              {/* Class Applying For */}
              <div className="mb-3">
                <label className="form-label">Class Applying For</label>
                <select className="form-select">
                  <option value="">Select Class</option>
                  <option value="XII ENG">XII ENG</option>
                  <option value="XIII ENG">XIII ENG</option>
                  <option value="XI ENG">XI ENG</option>
                  <option value="XII MED">XII MED</option>
                  <option value="XIII MED">XIII MED</option>
                  <option value="XI MED">XI MED</option>
                  <option value="CLASS VI">CLASS VI</option>
                  <option value="CLASS VII">CLASS VII</option>
                  <option value="CLASS VIII">CLASS VIII</option>
                  <option value="CLASS IX">CLASS IX</option>
                  <option value="CLASS X">CLASS X</option>
                </select>
              </div>

              {/* Test Date */}
              <div className="mb-3">
                <label className="form-label">Select Test Date</label>
                <input type="date" className="form-control" />
              </div>

              {/* Study Centre */}
              {/* Study Centre */}
              <div className="mb-3">
                <label className="form-label">
                  <Landmark size={18} className="me-2" /> Study Centre Choice
                </label>
                <select className="form-select" name="Study">
                  <option value="">Study Centre Choice</option>
                  <option value="Ahmednagar">Ahmednagar</option>
                  <option value="Akola">Akola</option>
                  <option value="Amritsar">Amritsar</option>
                  <option value="Anantapur">Anantapur</option>
                  <option value="Aligarh">Aligarh</option>
                  <option value="Ambikapur">Ambikapur</option>
                  <option value="Amravati">Amravati</option>
                  <option value="Anantnag">Anantnag</option>
                  <option value="Baramulla">Baramulla</option>
                  <option value="Baramati">Baramati</option>
                  <option value="Barshi">Barshi</option>
                  <option value="Batala">Batala</option>
                  <option value="Bengaluru-BTM">Bengaluru-BTM</option>
                  <option value="Bhubaneshwar">Bhubaneshwar</option>
                  <option value="Bihta">Bihta</option>
                  <option value="Bidar">Bidar</option>
                  <option value="Bokaro">Bokaro</option>
                  <option value="Chhapra">Chhapra</option>
                  <option value="Chhatrapati Sambhaji Nagar">
                    Chhatrapati Sambhaji Nagar
                  </option>
                  <option value="Dehradun">Dehradun</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Dharashiv">Dharashiv</option>
                  <option value="Guwahati">Guwahati</option>
                  <option value="Haridwar">Haridwar</option>
                  <option value="Hingoli">Hingoli</option>
                  <option value="Hyderabad (Dilsukh Nagar)">
                    Hyderabad (Dilsukh Nagar)
                  </option>
                  <option value="Hyderabad (Himayathnagar)">
                    Hyderabad (Himayathnagar)
                  </option>
                  <option value="Hyderabad (Madhapur)">
                    Hyderabad (Madhapur)
                  </option>
                  <option value="Hyderabad (Miyapur)">
                    Hyderabad (Miyapur)
                  </option>
                  <option value="Hyderabad (Nadergul)">
                    Hyderabad (Nadergul)
                  </option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Jalgaon">Jalgaon</option>
                  <option value="Jalna">Jalna</option>
                  <option value="Jammu (Gandhi Nagar)">
                    Jammu (Gandhi Nagar)
                  </option>
                  <option value="Jammu">Jammu</option>
                  <option value="Jamshedpur">Jamshedpur</option>
                  <option value="Kaij">Kaij</option>
                  <option value="Kalamb">Kalamb</option>
                  <option value="Karanja">Karanja</option>
                  <option value="Kurnool">Kurnool</option>
                  <option value="Kolhapur">Kolhapur</option>
                  <option value="Kolkata - Belghoria">
                    Kolkata - Belghoria
                  </option>
                  <option value="Kolkata - Hazra">Kolkata - Hazra</option>
                  <option value="Kota">Kota</option>
                  <option value="Magam">Magam</option>
                  <option value="Meerut">Meerut</option>
                  <option value="Nilanga">Nilanga</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Nizamabad">Nizamabad</option>
                  <option value="Omerga">Omerga</option>
                  <option value="Pandharpur">Pandharpur</option>
                  <option value="Paratwada">Paratwada</option>
                  <option value="Patna (Bihta)">Patna (Bihta)</option>
                  <option value="Patna (Gola Road)">Patna (Gola Road)</option>
                  <option value="Pune (Bibwewadi)">Pune (Bibwewadi)</option>
                  <option value="Pune (Katraj)">Pune (Katraj)</option>
                  <option value="Pune (Nanded City)">Pune (Nanded City)</option>
                  <option value="Pune (Wanwadi)">Pune (Wanwadi)</option>
                  <option value="Pusad">Pusad</option>
                  <option value="Roorkee">Roorkee</option>
                  <option value="Rudrapur">Rudrapur</option>
                  <option value="Sangamner">Sangamner</option>
                  <option value="Sagar">Sagar</option>
                  <option value="Selu">Selu</option>
                  <option value="Shirol">Shirol</option>
                  <option value="Sinnar">Sinnar</option>
                  <option value="Solapur">Solapur</option>
                  <option value="Srinagar">Srinagar</option>
                  <option value="Tirupati">Tirupati</option>
                  <option value="Udgir">Udgir</option>
                  <option value="Vaijapur">Vaijapur</option>
                  <option value="Vijayawada">Vijayawada</option>
                  <option value="Visakhapatnam">Visakhapatnam</option>
                  <option value="Walchandnagar">Walchandnagar</option>
                  <option value="Warangal (Hanumakonda)">
                    Warangal (Hanumakonda)
                  </option>
                  <option value="Washim">Washim</option>
                  <option value="Yavatmal">Yavatmal</option>
                </select>
              </div>

              {/* Address */}
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  rows={2}
                  placeholder="Your full address"
                />
              </div>

              {/* Pin Code */}
              <div className="mb-3">
                <label className="form-label">Pin Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter PIN code"
                />
              </div>

              {/* City */}
              <div className="mb-3">
                <label className="form-label">
                  <MapPin size={18} className="me-2" /> City
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter city"
                />
              </div>

              {/* State */}
              <div className="mb-3">
                <label className="form-label">State</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter state"
                />
              </div>

              {/* School Name */}
              <div className="mb-3">
                <label className="form-label">
                  <School size={18} className="me-2" /> School Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter school name"
                />
              </div>

              {/* School Board */}
              <div className="mb-3">
                <label className="form-label">School Board</label>
                <select className="form-select">
                  <option value="">Select Board</option>
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>State Board</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Agree */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="termsCheck"
                />
                <label className="form-check-label" htmlFor="termsCheck">
                  <CheckCircle size={16} className="me-1" />I agree to the terms
                  and conditions
                </label>
              </div>

              {/* Submit */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
