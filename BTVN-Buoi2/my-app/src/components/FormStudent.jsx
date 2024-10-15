import React , { useState }from 'react'

export default function FormStudent({ student, onSubmit , onUpdate}) {
    const [formData, setFormData] = useState({...student, subjects:[]})
    
    const handleSubmit = (e) => {
      e.preventDefault()
      onSubmit(formData)
  }
  
    const handleChange = e => {
      const { name, value, type, checked } = e.target
      if (type === 'checkbox') {
          const updatedSubjects = checked
              ? [...formData.subjects, value]
              : formData.subjects.filter(subject => subject !== value)
          setFormData(prev => ({ ...prev, subjects: updatedSubjects }))
      } else {
          setFormData(prev => ({ ...prev, [name]: value }))
      }
    }

    const handleUpdate = () => {
      console.log("Updating with data:", formData)
      onUpdate(formData)
  }

  const handleReset = () => {
    setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        gender: '',
        subjects: [],
        url: '',
        choice: '',
        about: ''
    })
}


  return (
    <div>
      <h2>Form student</h2>
      <br />
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
          <button type="button"  className="reset-button" onClick={handleReset} >
            Reset
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" className="update-button" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </form>
    </div>
  )
}
