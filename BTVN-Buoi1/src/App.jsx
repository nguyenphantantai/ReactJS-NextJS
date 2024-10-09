import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',    
    lastName: '',     
    email: '',        
    contact: '',      
    gender: 'Male',   
    subjects: [],     
    resume: null,     
    url: '',          
    choice: '',       
    about: ''         
  });

  // Hàm xử lý khi người dùng nhập liệu vào các trường input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      let updatedSubjects = [...formData.subjects];// Xử lý  cho checkbox (môn học)
      if (checked) {
        updatedSubjects.push(value);// Nếu checkbox được tích, thêm giá trị vào mảng
      } else {
        updatedSubjects = updatedSubjects.filter(subject => subject !== value);// Nếu checkbox bị bỏ tích, loại bỏ giá trị khỏi mảng
      }
      setFormData({ ...formData, subjects: updatedSubjects });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] });// Xử lý đặc biệt cho việc upload file
    } else {
      setFormData({ ...formData, [name]: value }); // Xử lý cho các trường input thông thường
    }
  };

   // Hàm xử lý khi form được submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn hành vi submit mặc định của form
    console.log('Form Data:', formData); // In ra dữ liệu form để kiểm tra
  };

 // Hàm reset form về trạng thái ban đầu
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      gender: 'Male',
      subjects: [],
      resume: null,
      url: '',
      choice: '',
      about: ''
    });
  };  



  return (
    <div className="form-container">
      <h2 className="form-title">Form in React</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Trường nhập Họ */}
        <div className="form-group">
          <label>First Name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
          />
        </div>
        
        {/* Trường nhập Tên */}
        <div className="form-group">
          <label>Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
          />
        </div>
        
        {/* Trường nhập Email */}
        <div className="form-group">
          <label>Enter Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        
        {/* Trường nhập Số điện thoại */}
        <div className="form-group">
          <label>Contact*</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter Mobile number"
          />
        </div>
        
        {/* Phần chọn Giới tính */}
        <div className="form-group">
          <label>Gender*</label>
          <div className="radio-group">
            {['Male', 'Female', 'Other'].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name="gender"
                  value={option}
                  checked={formData.gender === option}
                  onChange={handleChange}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        
        {/* Phần chọn Môn học */}
        <div className="form-group">
          <label>Your best Subject</label>
          <div className="checkbox-group">
            {['English', 'Maths', 'Physics'].map((subject) => (
              <label key={subject}>
                <input
                  type="checkbox"
                  name="subjects"
                  value={subject}
                  checked={formData.subjects.includes(subject)}
                  onChange={handleChange}
                />
                {subject}
              </label>
            ))}
          </div>
        </div>
        
        {/* Phần upload Resume */}
        <div className="form-group">
          <label>Upload Resume*</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
          />
        </div>
        
        {/* Trường nhập URL */}
        <div className="form-group">
          <label>Enter URL*</label>
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Enter url"
          />
        </div>
        
        {/* Dropdown lựa chọn */}
        <div className="form-group">
          <label>Select your choice</label>
          <select
            name="choice"
            value={formData.choice}
            onChange={handleChange}
          >
            <option value="">Select your Ans</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        
        {/* Textarea để nhập thông tin thêm */}
        <div className="form-group">
          <label>About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="About your self"
          />
        </div>
        
        {/* Phần nút bấm */}
        <div className="button-group">
          <button type="button" onClick={handleReset} className="reset-button">
            Reset
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App
