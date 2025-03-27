import React, { useState } from "react";
import axios from "axios";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDonate: (data: { amt: number; name: string; email: string; mobile: string }) => void;
  mealPrice: string;
}

const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose, onDonate,  mealPrice}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [amt, setAmt] = useState<string>(mealPrice);
  const [donation, setDonation] = useState<string>("ISKCON Maha Kumbh and Makarsankranti 2025");

  const [errors, setErrors] = useState<{ name?: string; email?: string; mobile?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string; mobile?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {

          const TxnId =
            "ISKCON-JUHU-" +
            Date.now().toString() +
            Math.random().toString(36).substring(2, 15);
    
          const params = {
            key: "2fKjPt",
            txnid: TxnId,
            amount: mealPrice,
            productinfo: donation,
            firstname: name,
            email: email,
            phone: mobile,
          };
    
          const response = await axios.get("https://iskconjuhu.in/donate.php", {
            params: {
              ...params,
              surl: "https://iskconjuhu.in/success.php",
              furl: "https://iskconjuhu.in/failure.php",
              salt: "zBqitHlab9VU52l9ZDv8x5D1rxYBtgat",
              pg: "UPI",
            },
          });
    
          const htmlContent = response.data;
          const newWindow = window.open();
          if (newWindow) {
            newWindow.document.open();
            newWindow.document.write(htmlContent);
            newWindow.document.close();
            window.close();
          }
        }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMobile("");
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Donate Now</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
          <p><strong>Donation Amount:</strong> {mealPrice}</p>
          <br></br>
          <br></br>
            <label>Donor Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
            {errors.name && <span style={styles.error}>{errors.name}</span>}
          </div>
          <div style={styles.inputGroup}>
            <label>Donor Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>
          <div style={styles.inputGroup}>
            <label>Donor Mobile</label>
            <input
              type="number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={styles.input}
            />
            {errors.mobile && <span style={styles.error}>{errors.mobile}</span>}
          </div>
          <div style={styles.buttonGroup}>
            <button type="button" onClick={onClose} style={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" style={styles.submitButton}>
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "2px",
    width: "80%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    boxSizing: "border-box",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
  cancelButton: {
    padding: "8px 16px",
    backgroundColor: "#ccc",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  submitButton: {
    padding: "8px 16px",
    backgroundColor: "#faa817",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default DonateModal;